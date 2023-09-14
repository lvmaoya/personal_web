<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="headerContent">
          <div class="logo">
            <logo-view></logo-view>
          </div>
          <div class="headerRight">
            <div class="welcome">
              <span>欢迎您！{{ userInfo.userName }}</span>
            </div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-avatar size="default" shape="circle" fit="fill">
                  <img src="../../assets/img/cartoon.jpg" alt="sun">
                </el-avatar>
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
        <el-aside :class="{ isFold: !isCollapse }">
          <el-menu class="asideMenu" @select="handleClick" :collapse="isCollapse">
            <el-menu-item index="/main/home">
              <el-icon>
                <HomeFilled />
              </el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/main/articleList">
              <el-icon>
                <List />
              </el-icon>
              <span>文章列表</span>
            </el-menu-item>
            <el-menu-item index="/main/editArticle">
              <el-icon>
                <Edit />
              </el-icon>
              <span>文章编辑</span>
            </el-menu-item>
            <el-menu-item index="/main/category">
              <el-icon>
                <Grid />
              </el-icon>
              <span>类别管理</span>
            </el-menu-item>
            <el-menu-item index="/main/comment">
              <el-icon>
                <Comment />
              </el-icon>
              <span>评论审核</span>
            </el-menu-item>

            <el-menu-item index="/main/temporaryStorage">
              <el-icon>
                <Box />
              </el-icon>
              <span>暂存箱</span>
            </el-menu-item>
            <el-menu-item index="/main/recycleBin">
              <el-icon>
                <DeleteFilled />
              </el-icon>
              <span>回收站</span>
            </el-menu-item>
          </el-menu>
          <div class="fold">
            <el-icon @click="handleFoldClick">
              <Fold v-show="!isCollapse" />
              <Expand v-show="isCollapse" />
            </el-icon>
          </div>
        </el-aside>
        <el-main>
          <!-- <div class="tags">
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
          </div> -->
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
    <el-dialog v-model="userInfoDialog" title="个人信息" width="30%" destroy-on-close center>
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
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter();
const route = useRoute();
const userInfoDialog = ref(false);
const userInfo = ref({
  userName: "",
  nickName: "",
  email: "",
});

const asideRouteList = ref([
  '/main/home', '/main/articleList', '/main/editArticle', '/main/category', '/main/comment', '/main/temporaryStorage', '/main/recycleBin',
])

userInfo.value = cache.getCache("user") || userInfo.value;

const handleClick = async (index: any) => {
  if (route.path !== index) {
    await router.push(index);
  }
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
const isCollapse = computed(() => store.state.isCollapse)

const handleFoldClick = () => {
  store.commit('changeCollapseState')
}
// 首页快捷入口路由跳转
watch(route, (newValue, value) => {
  const menuList = document.querySelectorAll('.el-menu>li')
  const index = asideRouteList.value.findIndex((item) => {
    return item == newValue.path
  })
  menuList.forEach((item) => {
    item.classList.remove('is-active')
  })
  menuList[index].classList.add('is-active')
}, { deep: true })
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
onMounted(() => {
  const menuList = document.querySelectorAll('.el-menu>li')
  const index = asideRouteList.value.findIndex((item) => {
    return item == route.path
  })
  menuList.forEach((item) => {
    item.classList.remove('is-active')
  })
  menuList[index].classList.add('is-active')
})
</script>

<style scoped lang="scss">
.el-header {
  padding: 0;
}

.headerContent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  box-sizing: border-box;

  &>.logo {
    margin-left: 20px;
  }

  .headerRight {
    display: flex;
    align-items: center;
    margin-right: 30px;

    .welcome {
      margin-right: 20px;
    }
  }
}

.el-aside {
  width: 66px;
  height: calc(100vh - 60px);
  position: relative;
  border-right: 1px solid gainsboro;
  transition: width 0.3s;
  overflow-x: hidden;

  &>ul {
    border-right: none;
    overflow-x: hidden;
  }

  .fold {
    width: 72%;
    text-align: right;
    position: absolute;
    bottom: 0;
    // transition: width 1s;

    i {
      width: auto;
      height: auto;

      svg {
        height: 21px;
        width: 28px;
      }
    }
  }

}

.isFold {
  width: 200px;

  .fold {
    width: 100%;
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

.el-main {
  padding: 0;
  overflow-y: scroll;
  height: calc(100vh - 60px);
}

// .active {
//   background-color: var(--light_blue);
//   color: black;
// }
</style>
