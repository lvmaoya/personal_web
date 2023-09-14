<template>
  <div class="category">
    <a v-for="item in categoryList" :key="item.category_id" :class="bg[random() - 1].className"
      @click.stop="handleCategoryClick(item.category_id)"># {{ item.category_name }} ({{ item.count ?? 0 }})</a>
  </div>
</template>

<script setup lang="ts">
import { CategoryItemType } from "~~/composables";
const emit = defineEmits(["categoryTagClick"]);
// a标签的背景颜色
const bg = [
  { className: "bg-red" },
  { className: "bg-blue" },
  { className: "bg-puple" },
  { className: "bg-yellow" },
  { className: "bg-pink" },
  { className: "bg-lightYellow" },
  { className: "bg-green" },
];
let random = () => Math.floor(Math.random() * 7) + 1;
const handleCategoryClick = (val: number) => {
  emit("categoryTagClick", val);
};
// 页面类别
let fatherPageCategory = "tech_article";
// 文章类别列表
let categoryList = ref<Array<CategoryItemType>>();

categoryList.value = (await getArticleCategoryList({ category: fatherPageCategory })).data.categoryList;
</script>

<style scoped lang="scss">
.category {
  width: 100%;
  max-width: 770px;
  margin: 0 auto;
  padding: 75px 0;
  text-align: center;

  a {
    font-size: 13px;
    display: inline-block;
    margin: 10px 8px 0 0;
    padding: 5px 10px 6px 10px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    letter-spacing: 0;
    -webkit-box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
    box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
    border-radius: 15px;
    color: white;
    user-select: none;
    cursor: pointer;
  }

  .bg-red {
    background-color: #eb5055;
  }

  .bg-blue {
    background-color: #6699cc;
  }

  .bg-puple {
    background-color: #bc99c4;
  }

  .bg-yellow {
    background-color: #cccc00;
  }

  .bg-pink {
    background-color: #cc9999;
  }

  .bg-lightYellow {
    background-color: #f9bb3c;
  }

  .bg-green {
    background-color: #46c47c;
  }
}
</style>
