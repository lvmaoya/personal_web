<!--
 * @Author: sun
 * @Date: 2022-12-30 09:04:29
 * @LastEditTime: 2023-02-17 15:48:54
 * @Description: Do not edit
-->
<template>
  <div class="detailArticle">
    <div class="content">
      <div class="desc">
        <div class="title">{{ articleDetail?.title }}</div>
        <div class="date">发布时间：{{ articleDetail?.published_time }}</div>
      </div>
      <ClientOnly> <v-md-preview :text="articleDetail?.content"></v-md-preview></ClientOnly>
      <LazyDetailFooterBar :article_id="article_id"></LazyDetailFooterBar>
    </div>
    <ScrollTop></ScrollTop>
  </div>
</template>

<script setup lang="ts">
import { ArticleResType } from "~~/composables";

const route = useRoute();
const article_id = Number(route.params.id);

// 请求详情页数据  文本内容和数据详情
const articleDetail = ref<ArticleResType>();
const articleDetailRes = await getArticleDetail({ id: article_id });
articleDetail.value = articleDetailRes.data;
useHead({
  title: articleDetail.value.title,
  meta: [
    { name: "description", content: articleDetail.value.description },
    {
      name: "keywords",
      content: articleDetail.value.title,
    },
  ],
});
</script>

<style scoped lang="scss">
.detailArticle {
  width: 100%;
  :deep(header) {
    top: 0 !important;
  }
  .content {
    margin: 0 auto;
    max-width: 700px;
    color: #313131;

    .desc {
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 21px;
        font-weight: 500;
        line-height: 4em;
      }
      .date {
        font-size: 14px;
        font-style: italic;
      }
    }
    :deep(.github-markdown-body) {
      padding: 0;
      font-size: 14px;
    }
  }
}
</style>
