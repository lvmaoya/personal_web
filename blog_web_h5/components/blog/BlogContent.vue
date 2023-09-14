<!--
 * @Author: sun
 * @Date: 2022-12-28 08:45:41
 * @LastEditTime: 2023-02-17 14:53:19
 * @Description: Do not edit
-->
<template>
  <ul>
    <!-- <BlogItem :blogItem="item"></BlogItem> -->
    <li @click.stop="handleArticleClick(item.article_id)" v-for="item in props.blogList" :key="item.article_id">
      <div class="img">
        <a href="javascript:;"><img :src="item.cover_image" alt="" /></a>
      </div>
      <div class="articleDetail">
        <div class="title">
          <span class="titleContent">{{ item.title }}</span>
        </div>
        <div class="date">
          <span> {{ item.published_time.replace(/:[^:]*$/, '') }}</span>
        </div>
        <div class="description">
          {{ item.description }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  blogList: {
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
ul {
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;

  li {
    width: 100%;
    list-style: none;

    .img {
      width: 100%;
      height: auto;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
      }
    }

    .articleDetail {
      padding-top: 2em;
      padding-right: 15px;
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
        border-bottom: 1px solid #ffffff;
        transition: all 0.2s;

        //   box-sizing: border-box;
        //   display: block;
        //   width: fit-content;
        &:hover {
          border-bottom: 1px solid #4d4d4d;
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
}

@media (min-width: 768px) {
  ul li {
    width: calc(50% - 15px);
    margin: 0 30px 20px 0;
    list-style: none;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}

@media (min-width: 1024px) {
  ul li {
    width: calc(33.33333% - 15px);
    margin: 0 20px 20px 0;
    padding: 0;
    list-style: none;

    &:nth-child(2n) {
      margin-right: 20px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}

@media (min-width: 1400px) {
  ul li {
    width: calc(25% - 15px);
    list-style: none;

    &:nth-child(2n) {
      margin-right: 20px;
    }

    &:nth-child(3n) {
      margin-right: 20px;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}
</style>
