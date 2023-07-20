<!--
 * @Author: sun
 * @Date: 2022-12-27 19:50:23
 * @LastEditTime: 2023-01-07 11:22:59
 * @Description: Do not edit
-->
<template>
  <div class="workActicleItem" @click.stop="handleArticleClick(props.item.article_id)">
    <div class="articleImage">
      <!-- :style="{ backgroundImage: ` url(${item.cover_image})` }" -->
      <!-- 图片自适应 -->
      <img :src="props.item.cover_image" alt="" />
    </div>
    <div class="articleContent">
      <div class="title">
        {{ props.item.title }}
      </div>
      <div class="description">
        <p>
          {{ props.item.description }}
        </p>
      </div>
      <div class="data">
        <div class="about">
          <span>{{ props.item.pageview }} 阅读</span>
          <span>{{ props.item.prefer_num }} 点赞</span>
          <!-- <span class="last">2 评论</span> -->
        </div>
        <div class="date">
          <span>{{ formatTime(new Date(props.item.published_time)) }} 发布</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ArticleItemResType } from "~~/composables";
import { formatTime } from "~~/utils/formatTime";

const props = defineProps<{
  item: ArticleItemResType;
}>();
const router = useRouter();
const handleArticleClick = (id: number) => {
  router.push({
    path: "detail/" + id,
  });
};
</script>

<style scoped lang="scss">
.workActicleItem {
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  overflow: hidden;
  min-height: 150px;
  transition: background-color 0.3s;
  &:hover img {
    filter: brightness(102%);
  }
  .articleImage {
    width: 25%;
    height: auto;
    // background-size: 100% 100%;
    img {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
      transition: filter 0.3s;
    }
  }
  .articleContent {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    .title {
      font-size: 1.1em;
      font-weight: 500;
      padding: 10px 10px 6px 0;
      color: #313131;
    }
    .description {
      p {
        font-size: 0.875em;
        font-weight: 400;
        color: #313131;
        overflow: hidden;
        white-space: normal;
        word-break: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    .data {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 0.875em;
        color: gray;
      }
      .about {
        span {
          margin-right: 3px;
          color: gray;
        }
      }
    }
  }
}
</style>
