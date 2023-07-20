<!--
 * @Author: sun
 * @Date: 2022-12-27 15:02:56
 * @LastEditTime: 2023-02-18 08:10:37
 * @Description: Do not edit
-->
<template>
  <div class="homeMain">
    <div class="main">
      <div class="content">
        <div
          class="homeMainItem"
          v-for="item in props.thingList"
          :key="item.article_id"
          @click.stop="handleArticleClick(item.article_id)"
          ref="homeMainItemRef"
        >
          <a>
            <div class="image">
              <img :data-src="item.cover_image" alt="" />
            </div>
            <div class="itemTitle">
              <h4>{{ item.title }}</h4>
            </div>
            <div class="description">
              <p>{{ item.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ThingType } from "~~/composables";

const props = defineProps({
  thingList: {
    type: Array<ThingType>,
    required: true,
  },
});
const router = useRouter();
const handleArticleClick = (id: number) => {
  router.push({
    path: "detail/" + id,
  });
};
const homeMainItemRef = ref();
onMounted(() => {
  isView(homeMainItemRef);
});
</script>

<style lang="scss" scoped>
.homeMain {
  border-bottom: 1.2px solid rgb(189, 188, 188);
  position: relative;
  z-index: 40;
  .main {
    width: 80%;
    margin: 0 auto;

    .content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      // justify-content: center;
      .homeMainItem {
        position: relative;
        z-index: 40;
        width: 33.3%;
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 0px 10px;
        min-width: 350px;
        cursor: pointer;
        a {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 5px;
          overflow: hidden;
          background: #fff;

          .image {
            height: calc(24vw * 9 / 16);
            min-height: 200px;
            overflow: hidden;
          }
          img {
            width: 100%;
            height: 100%;
            transform: scale(1);
            transition: all 1s ease 0s;
            user-select: none;
          }
          .itemTitle h4 {
            font-size: 1.1em;
            color: black;
            padding: 1em 0.7em 0.8em 0.7em;
            word-spacing: 2px;
            line-height: 1.2em;
            font-weight: 500;
          }
          .description {
            padding: 0.5em 0.7em 0.8em 0.7em;

            p {
              margin: 0;
              width: 100%;
              font: 16px "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC",
                "WenQuanYi Micro Hei", sans-serif;
              font-size: 0.875em;
              height: 5em;
              line-height: 1.5em;
            }
          }
        }
        &:hover .image > img {
          transform: scale(1.05);
          transition: all 0.6s ease 0s;
        }
        &:hover a {
          transition: all 1s ease 0s;
          box-shadow: 5px 5px 10px #f9f9f9;
        }
      }
    }
  }
}
</style>
