<template>
  <div class="workActicleItem" @click.stop="handleArticleClick(props.item.article_id)">
    <div class="articleContent">
      <div class="title">
        {{ props.index + 1 }}. {{ props.item.title }}
      </div>
      <div class="description">
        <p>
          {{ props.item.description }}
        </p>
      </div>
      <div class="data">
        <div class="about">
          <span>{{ props.item.pageview }} 次阅读</span>
          <!-- <span>{{ props.item.prefer_num }} 点赞</span> -->
          <!-- <span class="last">2 评论</span> -->
        </div>
        <div class="date">
          <span>{{ props.item.published_time.replace(/:[^:]*$/, '') }} 发布</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ArticleItemResType } from "~~/composables";

const props = defineProps<{
  item: ArticleItemResType;
  index: number
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
  min-height: 140px;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 770px;
  margin: 0 auto 40px auto;

  .articleContent {
    width: 100%;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    .title {
      font-size: 1.1em;
      font-weight: 500;
      // padding: 10px 10px 0px 0;
      color: #313131;
      position: relative;
      border: 1px solid transparent;
      width: fit-content;

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0px;
        height: 1px;
        background: #4d4d4d;
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }

      &:hover:before {
        width: 100%;
      }
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
        margin-bottom: 10px;
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
