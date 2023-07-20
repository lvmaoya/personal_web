<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="headerContent">
          <div>
            <logo-view></logo-view>
          </div>
          <div class="headerRight">
            <div class="welcome">
              <span>欢迎您！{{ userInfo.userName }}</span>
            </div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-avatar
                  size="default"
                  src="http://sunjianxiang.cn:3001/img/cartoon.jpg"
                  shape="circle"
                  fit="fill"
                />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleUserInfo">
                    个人信息
                  </el-dropdown-item>
                  <el-dropdown-item @click="handleExit">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            class="asideMenu"
            @select="handleClick"
            :default-openeds="defaultOpeneds"
          >
            <el-menu-item index="/main/home">
              <el-icon><HomeFilled /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="article" class="is-opened">
              <template #title>
                <el-icon><Notebook /></el-icon>
                <span>文章管理</span>
              </template>
              <el-menu-item index="/main/article/articleList">
                <el-icon><List /></el-icon>
                <span>文章列表</span>
              </el-menu-item>
              <el-menu-item index="/main/article/editArticle">
                <el-icon><Edit /></el-icon>
                <span>文章编辑</span>
              </el-menu-item>
              <el-menu-item index="/main/article/recycleBin">
                <el-icon><DeleteFilled /></el-icon>
                <span>回收站</span>
              </el-menu-item>
              <el-menu-item index="/main/article/temporaryStorage">
                <el-icon><Box /></el-icon>
                <span>暂存箱</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="user">
              <template #title>
                <el-icon><User /></el-icon>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/main/user/personalInfo">
                <el-icon><Message /></el-icon>
                <span>个人简历</span>
              </el-menu-item>
              <el-menu-item index="/main/user/systemUser">
                <el-icon><Avatar /></el-icon>
                <span>系统用户</span>
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/main/category">
              <el-icon><Grid /></el-icon>
              <span>类别管理</span>
            </el-menu-item>
            <el-menu-item index="/main/comment">
              <el-icon><Comment /></el-icon>
              <span>评论审核</span>
            </el-menu-item>
            <el-menu-item index="/main/system">
              <el-icon><Tickets /></el-icon>
              <span>年度计划</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="tags">
            <el-tag
              class="ml-2 animate__animated animate__fadeInRight"
              type="info"
              v-for="item in tags"
              :key="item.name"
              :closable="item.isClose"
              @click="tagClick(item.path)"
              @close="closeTag(item.path)"
              :class="{ active: item.active }"
              >{{ item.name }}</el-tag
            >
          </div>
          <div class="pageContent">
            <router-view v-slot="{ Component }">
              <KeepAlive exclude="EditArticle">
                <Component :is="Component" :key="route.name"></Component>
              </KeepAlive>
            </router-view>
            <!-- <router-view></router-view> -->
          </div>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog
      v-model="userInfoDialog"
      title="个人信息"
      width="30%"
      destroy-on-close
      center
    >
      <el-row v-if="userInfo.userName">
        <el-col :span="24" :offset="4">
          <span>姓名：{{ userInfo.userName }}</span>
          <span>昵称：{{ userInfo.nickName }}</span>
        </el-col>
        <el-col :span="24" :offset="4">
          <p>邮箱：{{ userInfo.email }}</p>
        </el-col>
        <el-col :span="24" class="notice" :offset="4">
          <p>注意: 如需改动请到用户管理页面</p>
        </el-col>
      </el-row>
      <el-row v-else> 游客A</el-row>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="userInfoDialog = false">
            关闭
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import logoView from "@/components/logo/LogoView.vue";
import cache from "@/utils/cache";
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const userInfoDialog = ref(false);
const userInfo = ref({
  userName: "",
  nickName: "",
  email: "",
});
const defaultOpeneds = ref<Array<string>>([]);
userInfo.value = cache.getCache("user") || userInfo.value;

let tagId = ref(1);
let tags = ref([
  { id: 0, name: "首页", path: "/main/home", isClose: false, active: true },
  {
    id: 1,
    name: "文章列表",
    path: "/main/article/articleList",
    isClose: false,
    active: false,
  },
]);

// 判断是首页快捷入口点击还是侧边栏点击，目的是为了handleclick方法只执行一次，使用路由导航会造成死循环
let trigger = ref(false);

// 监听route的变化，目的是首页快捷入口点击后能够使侧边item和tags活动
watch(route, (value, pre) => {
  if (trigger.value === true) {
    handleClick(value.path);
  }
});
const getMenuItemActive = () => {
  let menuList = document.querySelectorAll(".el-menu-item");
  let activeTag = tags.value.find((item) => item.active === true);

  let activeIndex = 0;
  for (let i = 0; i < menuList.length; i++) {
    menuList[i].className = "el-menu-item";
    if (menuList[i].lastElementChild?.innerHTML == activeTag?.name) {
      activeIndex = i;
    }
  }
  menuList[activeIndex].className = "el-menu-item is-active";
};
const handleClick = async (index: any) => {
  trigger.value = false;
  const existTag = tags.value.find((item) => item.path === index);
  // 路由跳转，如果路由相同，不需要跳转
  if (route.path !== index) {
    // 如果path 不相同，跳转到新的路由
    await router.push(index);
  }

  // 所有的active为false
  for (let item of tags.value) {
    item.active = false;
  }
  // 如果tags中没有该tag，添加活跃，如果有该tag，该tag活跃
  if (existTag) {
    existTag.active = true;
  } else {
    tagId.value = tagId.value + 1;
    tags.value.push({
      id: tagId.value,
      name: route.meta.name as string,
      path: index,
      isClose: true,
      active: true,
    });
  }
  getMenuItemActive();
};

const tagClick = (path: any) => {
  for (let item of tags.value) {
    item.active = false;
  }
  let clickItem = tags.value.find((item) => item.path === path);
  clickItem!.active = true;
  router.push(path);

  getMenuItemActive();
};

const closeTag = (path: any) => {
  // 找到path相等的那个，删掉，如果不是活跃的那个不跳转，active不变，如果是，路由跳转到最后一项，active变为最后一项
  let closeIndex = tags.value.findIndex((item) => item.path === path);
  if (tags.value[closeIndex].active === true) {
    tags.value.splice(closeIndex, 1);
    router.push(tags.value[tags.value.length - 1].path);
    tags.value[tags.value.length - 1].active = true;
  } else {
    tags.value.splice(closeIndex, 1);
  }
  // tag反作用与menuItem的active
  getMenuItemActive();
};
const handleUserInfo = () => {
  userInfoDialog.value = !userInfoDialog.value;
};
const handleExit = () => {
  router.replace({
    name: "login",
  });
  cache.deleteCache("token");
  cache.deleteCache("_token");
};
const getDefaultActive = () => {
  if (route.fullPath.includes("article")) {
    defaultOpeneds.value.push("article");
  } else if (route.fullPath.includes("user")) {
    defaultOpeneds.value.push("user");
  }
};
getDefaultActive();
onMounted(() => {
  handleClick(route.fullPath);
  trigger.value = true;
});
onUpdated(() => {
  trigger.value = true;
});

window.onbeforeunload = (e: any) => {
  if (route.path == "/main/article/editArticle") {
    e = e || window.event;
    // 兼容IE8和Firefox 4之前的版本
    if (e) {
      e.returnValue = "关闭提示";
    }
    // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    return "关闭提示";
  } else {
    window.onbeforeunload = null;
  }
};
</script>

<style scoped lang="scss">
.el-header {
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: white;
  z-index: 3;
}
.welcome {
  margin-right: 10px;
  span {
    font-size: 14px;
  }
}
.el-aside {
  position: relative;
}
.asideMenu {
  position: fixed;
  width: 200px;
  top: 60px;
}
.pageContent {
  width: calc(100vw - 220px);
  margin-top: 97px;
}
.headerContent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  box-sizing: border-box;
  .headerRight {
    display: flex;
    align-items: center;
    color: gray;
  }
}
.el-aside {
  user-select: none;
}
.el-main {
  padding-top: 0;
  padding-left: 0;
  .tags {
    padding: 6px 0 6px 10px;
    border-bottom: 1px solid gainsboro;
    position: fixed;
    top: 60px;
    width: calc(100% - 200px);
    overflow: hidden;
    z-index: 3;
    background-color: #ffffff;
    span {
      margin-right: 5px;
      cursor: pointer;
      user-select: none;
      font-size: 14px;
    }
    span:hover {
      background-color: #d9ecff;
      color: black;
    }
  }
}
.el-dialog .el-row {
  span {
    margin-right: 2em;
  }
  // text-align: center;
  .notice {
    p {
      margin-bottom: 0;
    }
    font-size: 14px;
    color: red;
  }
}
.active {
  background-color: var(--light_blue);
  color: black;
}
</style>
