<!--
 * @Author: sun
 * @Date: 2022-11-03 19:38:52
 * @LastEditTime: 2023-02-17 08:43:18
 * @Description: Do not edit
-->
<template>
  <div class="editArticle">
    <ArticleDecs
      @publish="handlePublish"
      @draft="handleDraft"
      @clear="handleClear"
      :categoryList="categoryList"
      :isPublish="isPublish"
      :backFormData="backFormData"
      ref="articleDesc"
    ></ArticleDecs>
    <v-md-editor
      v-model="text"
      height="1000px"
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      @blur="handleEditorBlur"
    ></v-md-editor>
  </div>
</template>

<script setup lang="ts">
import {
  addArticle,
  getCategoryData,
  uploadImage,
  updateArticle,
  getArticleData,
} from "@/service/article";
import cache from "@/utils/cache";
import { editUrl } from "@/utils/replaceUrl";
import { ElNotification } from "element-plus";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import ArticleDecs from "./children/ArticleDecs.vue";
let backFormData = ref({
  article_id: 0,
  title: "",
  author: "sunjianxiang",
  category: [1],
  cover_image: "",
  description: "",
  is_privacy: true,
  status: 0,
  content: "",
  published_time: "",
  draft_time: "",
});
let categoryList = ref<Array<Object>>([{}]);
let isPublish = ref(false);

let text = ref("");
const articleDesc = ref();
const route = useRoute();
let article_id = route.query.id || "";
// 获取文章内容属性等用于数据回显
const getArticle = async (id: string) => {
  const articleData = await getArticleData({ id: Number(id) });
  if (articleData.code === 0) {
    text.value = articleData.data.content;

    backFormData.value = articleData.data;
  }
};
if (article_id) {
  getArticle(article_id as string);
}
// 缓存到本地
let timer: any = null;
const debounce = (fn: any, wait: number) => {
  return (function () {
    if (timer != null) clearTimeout(timer);
    timer = setTimeout(fn, wait);
  })();
};
text.value = cache.getCache("text");

// 将写的内容缓存到本地以避免数据消失
watch(
  () => text.value,
  (val, pre) => {
    debounce(() => {
      cache.setCache("text", val);
    }, 1000);
  }
);

const handlePublish = async (val: any) => {
  // 文章数据校验
  if (text.value === "") {
    ElNotification({
      message: "您暂未写入任何内容",
      duration: 2000,
      type: "error",
    });
    return;
  }
  val.value.content = text.value;
  let addArticleRes;
  if (article_id) {
    val.value.id = route.query.id;
    addArticleRes = await updateArticle({ ...val.value });
  } else {
    addArticleRes = await addArticle({ ...val.value });
  }
  if (addArticleRes)
    if (addArticleRes.code == 0) {
      ElNotification({
        message: article_id ? "更新成功！" : "发布成功！",
        duration: 2000,
        type: "success",
      });
      isPublish.value = true;
      text.value = "";
      cache.setCache("text", "");
      cache.setCache("formData", "");
      // router.push(route.path);
      window.history.replaceState("", "", editUrl(route.path, ["mode", "pay"]));
      article_id = "";
    } else {
      ElNotification({
        message: article_id ? "更新失败！" : "发布失败！",
        duration: 2000,
        type: "error",
      });
    }
};
const handleClear = async () => {
  cache.setCache("text", "");
  text.value = "";
};
// 检测编辑器触发
const handleEditorBlur = () => {
  // cache.setCache("text", "");
  isPublish.value = false;
};
// 获取文章分类
const getCategoryList = async () => {
  const categoryListData = await getCategoryData();
  categoryList.value = categoryListData.data.categoryList;
};
getCategoryList();
const handleDraft = async (val: any) => {
  val.value.content = text.value;
  // 文章数据校验
  if (text.value === "") {
    ElNotification({
      message: "您暂未写入任何内容",
      duration: 2000,
      type: "error",
    });
    return;
  }
  const addArticleRes = await addArticle({ ...val.value });
  if (addArticleRes)
    if (addArticleRes.code == 0) {
      ElNotification({
        message: "暂存成功！",
        duration: 2000,
        type: "success",
      });
      isPublish.value = true;
      text.value = "";
    } else {
      ElNotification({
        message: "暂存失败！",
        duration: 2000,
        type: "error",
      });
    }
};
// 编辑器里上传图片功能
const handleUploadImage = (event: any, insertImage: any, files: any) => {
  let file = files[0];
  let formData = new FormData();
  formData.append("avatar", file);

  uploadImage(formData).then((res) => {
    insertImage({
      url: res.data.url,
    });
  });
};
</script>

<style scoped lang="scss">
.v-md-editor {
  padding: 10px;
  box-shadow: none;
  box-sizing: border-box;
  :deep(.v-md-editor__right-area) {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%) !important;
  }
}
</style>
