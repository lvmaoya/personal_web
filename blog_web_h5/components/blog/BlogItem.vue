<!--
 * @Author: sun
 * @Date: 2022-12-28 08:45:51
 * @LastEditTime: 2023-02-18 08:11:17
 * @Description: Do not edit
-->
<template>
  <div class="blogItem" @click.stop="handleArticleClick(props.blogItem.article_id)">
    <div class="img">
      <a href="javascript:;"><img :src="props.blogItem.cover_image" alt="" /></a>
    </div>
    <div class="articleDetail">
      <div class="title">
        <span class="titleContent">{{ props.blogItem.title }}</span>
      </div>
      <div class="date">
        <span> {{ formatTime(new Date(props.blogItem.published_time)) }}</span>
      </div>
      <div class="description">
        {{ props.blogItem.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blogItem: {
    required: true,
    type: Object,
  },
});
const router = useRouter();
const handleArticleClick = (id: number) => {
  router.push({
    path: "detail/" + id,
  });
};
</script>

<style scoped lang="scss">
.blogItem {
  width: 24.9%;
  min-width: 260px;
  padding: 0 7px;
  box-sizing: border-box;
  margin-bottom: 20px;
  .img {
    width: 100%;
    height: calc(19vw * 9 / 16);
    min-height: 170px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
    }
  }
  .articleDetail {
    padding-top: 2em;
    padding-right: 15px;
    background-color: #f7f7f7;
  }
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 0.1em;
    margin: 0 0 1em;
    // cursor: pointer;
    box-sizing: border-box;

    .titleContent {
      cursor: pointer;
      font-size: 1.1em;
      font-weight: 500;
      color: #4d4d4d;
      border-bottom: 2px solid #f7f7f7;
      transition: all 0.2s;
      //   box-sizing: border-box;
      //   display: block;
      //   width: fit-content;
      &:hover {
        border-bottom: 2px solid #4d4d4d;
      }
    }
  }
  .date {
    padding: 0 0 1.4em;
    span {
      display: block;
      font-style: italic;
      font-size: 0.875em;
      font-weight: 400;
      color: #555666;
    }
  }
  .description {
    font-size: 0.875em;
    line-height: 1.4em;
    font-weight: 400;
    padding: 0 0 1.4em;
    color: #555666;
    overflow: hidden;
    white-space: normal;
    word-break: break-word;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
}
</style>
