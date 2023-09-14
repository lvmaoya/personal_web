<template>
  <div class="articleDesc" :class="{ writing: isWriting }">
    <el-form :model="formData">
      <el-row>
        <el-col :span="15">
          <el-row :gutter="20">
            <el-col :span="20">
              <el-form-item label="标题" class="titleFormItem">
                <el-input class="title" v-model="formData.title" maxlength="20" show-word-limit />
              </el-form-item></el-col>
            <el-col :span="8">
              <el-form-item label="作者">
                <el-input v-model="formData.author" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="私密/公开">
                <el-switch v-model="formData.is_privacy" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="文章类别">
                <el-cascader v-model="formData.category" :options="(props.categoryList as Array<CascaderOption>)"
                  placeholder=" " />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="摘要" class="descFormItem">
                <el-input class="desc" v-model="formData.description" maxlength="100" show-word-limit />
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8" :offset="1">
          <el-row>
            <el-col>
              <el-form-item label="上传封面">
                <el-upload class="avatar-uploader" :show-file-list="false" :before-upload="handleUploadCoverImg"
                  :on-change="handleStart" action="#" :auto-upload="false">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                  </el-icon>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <div class="defaultCoverImg">
            <div class="defaultCoverImgTitle"><span>默认封面</span></div>
            <div class="defaultCoverImgContent">
              <a
                v-for="item in defaultCoverImg"
                :key="item.title"
                @click="handleDefaultCoverImg(item.src)"
                >{{ item.title }}</a
              >
            </div>
          </div> -->
        </el-col>
      </el-row>
    </el-form>
    <div class="btnGrounp">
      <el-button type="success" @click="handlePublish" size="large">
        发布文章
      </el-button>

      <el-button type="primary" @click="handleDraft" size="large">
        暂存文章
      </el-button>
      <el-button type="info" @click="handleClear" size="large">
        清除缓存
      </el-button>
      <el-button type="info" @click="handleWrite" size="large">
        正文书写
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Plus } from "@element-plus/icons-vue";

import { uploadImage } from "@/service/article";
import { haveAuthority } from "@/utils/authority";
import type { getArticleResType } from "@/service/article";
import cache from "@/utils/cache";
import { ElNotification, type CascaderOption } from "element-plus";
const props = defineProps({
  categoryList: {
    type: Array,
    default() {
      return [];
    },
  },
  isPublish: {
    type: Boolean,
    default() {
      return false;
    },
  },
  backFormData: {
    type: Object,
    default() {
      return {
        article_id: 0,
        title: "",
        author: "sunjianxiang",
        category: [],
        cover_image: "",
        description: "",
        is_privacy: true,
        status: 0,
        content: "",
        published_time: "",
        draft_time: "",
      };
    },
  },
});
// 文章封面图
const imageUrl = ref("");
const formData = ref({
  title: "",
  author: "sunjianxiang",
  category: [0],
  cover_image: "",
  description: "",
  is_privacy: true,
  status: 0,
  content: "",
  published_time: "",
  draft_time: "",
});
const isWriting = ref(false)
const handleWrite = () => {
  isWriting.value = !isWriting.value
}
// const defaultCoverImg = [
//   { src: "http://sunjianxiang.cn:3000/img/xiangmu.jpg", title: "xiangmu" },
//   {
//     src: "http://sunjianxiang.cn:3000/img/daxiang.jpg",
//     title: "daxiang",
//   },
//   {
//     src: "http://sunjianxiang.cn:3000/img/fuhao.jpg",
//     title: "fuhao",
//   },
//   { src: "http://sunjianxiang.cn:3000/img/gouxiong.jpg", title: "gouxiong" },
//   { src: "http://sunjianxiang.cn:3000/img/guangying.jpg", title: "guangying" },
//   { src: "http://sunjianxiang.cn:3000/img/luomu.jpg", title: "luomu" },
//   { src: "http://sunjianxiang.cn:3000/img/wallhaven.jpg", title: "wallhaven" },
//   { src: "http://sunjianxiang.cn:3000/img/wanxia.jpg", title: "wanxia" },
//   { src: "http://sunjianxiang.cn:3000/img/yueliang.jpg", title: "yueliang" },
//   { src: "http://sunjianxiang.cn:3000/img/yueqiu.jpg", title: "yueqiu" },
//   {
//     src: "http://sunjianxiang.cn:3000/img/xiaohuangren.jpg",
//     title: "xiaohuangren",
//   },
// ];
// 监听父组件传过来数据之后的回显
watch(
  () => props.backFormData,
  (val, pre) => {
    formData.value = val as getArticleResType;
    imageUrl.value = formData.value.cover_image;
  }
);
// 监测发布文章之后重置表单
watch(
  () => props.isPublish,
  (val, pre) => {
    if (val) {
      formData.value = {
        title: "",
        author: "sunjianxiang",
        category: [],
        cover_image: "",
        description: "",
        is_privacy: true,
        status: 0,
        content: "",
        published_time: "",
        draft_time: "",
      };
      imageUrl.value = "";
    }
  }
);
let timer: any = null;
const debounce = (fn: any, wait: number) => {
  return (function () {
    if (timer != null) clearTimeout(timer);
    timer = setTimeout(fn, wait);
  })();
};
// 这一段代码为啥放到后面就不行了？
formData.value = cache.getCache("formData") || formData.value;
imageUrl.value = formData.value.cover_image;

watch([formData.value, imageUrl], ([val, imageUrlVal], [pre, imageUrlPre]) => {
  debounce(() => {
    formData.value.cover_image = imageUrlVal;
    cache.setCache("formData", formData.value);
  }, 2000);
});

const handleUploadCoverImg = () => {
  return haveAuthority();
};
onMounted(() => {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (isWriting.value) {
        isWriting.value = false
      }
    }
  });
})
const handleStart = (files: any) => {
  let file = files.raw;
  let formData = new FormData();
  formData.append("avatar", file);
  uploadImage(formData).then((res) => {
    imageUrl.value = res.data.url;
  });
};

const emit = defineEmits(["publish", "draft", "clear"]);
const editWarn = (msg: string) => {
  ElNotification({
    message: msg,
    duration: 2000,
    type: "error",
  });
};
// const handleDefaultCoverImg = (src: string) => {
//   imageUrl.value = src;
// };
const handlePublish = () => {
  if (formData.value.category.length === 0) {
    editWarn("选择文章所属类别");
    return;
  } else if (formData.value.title === "") {
    editWarn("文章缺少标题");
    return;
  } else if (formData.value.description === "") {
    editWarn("请为您的文章添加必要描述");
    return;
  } else if (formData.value.cover_image === "") {
    editWarn("请为您的文章添加封面");
    return;
  }
  formData.value.published_time = new Date().toLocaleString();
  formData.value.status = 0;
  emit("publish", formData);
};
const handleDraft = () => {
  formData.value.draft_time = new Date().toLocaleString();
  formData.value.status = 1;
  emit("draft", formData);
};
const handleClear = () => {
  formData.value = {
    title: "",
    author: "sunjianxiang",
    category: [],
    cover_image: "",
    description: "",
    is_privacy: true,
    status: 0,
    content: "",
    published_time: "",
    draft_time: "",
  };
  imageUrl.value = "";
  cache.setCache("formData", "");

  emit("clear");
};
</script>

<style scoped lang="scss">
.articleDesc {
  padding: 20px 20px;
  height: 238px;
  transition: height 0.5s, padding 0.5s;
  overflow: hidden;

  .el-row {
    user-select: none;
  }
}

.writing {
  height: 0;
  padding: 0 20px;
}

.titleFormItem {
  padding-bottom: 20px;
}

// 去除elementplus input 默认边
.title,
.desc {
  :deep(.el-input__wrapper) {
    box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
    cursor: default;

    .el-input__inner {
      cursor: default !important;
    }
  }

  border-bottom: 1.5px solid gainsboro;
}

.defaultCoverImg {
  display: flex;
  font-size: var(--el-form-label-font-size);
  color: var(--el-text-color-regular);

  .defaultCoverImgTitle {
    min-width: 69px;
    height: 28px;
    line-height: 28px;
  }

  .defaultCoverImgContent {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;

    a {
      display: block;
      padding: 5px 3px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.avatar-uploader .avatar {
  width: auto;
  height: 160px;
  display: block;
}

.avatar-uploader {
  :deep(.el-upload) {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }
}

.avatar-uploader {
  :deep(.el-upload):hover {
    border-color: var(--el-color-primary);
  }
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
