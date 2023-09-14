<template>
  <div class="content">
    <div class="inner">
      <div class="searchContent">
        <Search @searchBtnClick="handleSearchBtnClick"></Search>
      </div>
      <BlogContent :blogList="blogList"></BlogContent>
      <NoData v-if="total === 0"></NoData>
    </div>
    <Pagination @currentPageChange="handleCurrentPageChange" :current-page="currentPage" :total="total" :size="size">
    </Pagination>
  </div>
</template>

<script lang="ts" setup>
import { type ArticleItemResType, type searchConfigType } from "~~/composables";

let blogList = ref<Array<ArticleItemResType>>([]);
// 分页
let currentPage = ref(1);
let total = ref(0);
let size = ref(8);
let blogData = (await getBlogList({ currentPage: currentPage.value, size: size.value })).data;
blogList.value = blogData.list;
total.value = blogData.total;

const handleCurrentPageChange = async (val: number) => {
  if (val === 0) {
    currentPage.value -= 1;
  } else if (val === 1) {
    currentPage.value += 1;
  }
  switch (doCategory.value) {
    case 1:
      blogData = (await getBlogList({ currentPage: currentPage.value, size: size.value })).data;
      blogList.value = blogData.list;
      total.value = blogData.total;
      break;
    case 2:
      (userInput.value as searchConfigType).currentPage = currentPage.value;
      blogData = (await searchBlog(userInput.value as searchConfigType)).data;
      blogList.value = blogData.list;
      total.value = blogData.total;
      break;
  }
};
const doCategory = ref(1);
const userInput = ref<searchConfigType>();
const handleSearchBtnClick = async (searchData: searchConfigType) => {
  doCategory.value = 2;
  currentPage.value = 1;
  searchData = { ...searchData, currentPage: currentPage.value, size: size.value };
  userInput.value = searchData;
  const resArticlesData = await searchBlog(searchData);
  blogList.value = resArticlesData.data.list;
  total.value = resArticlesData.data.total;
};
</script>

<style scoped lang="scss">
.content {
  margin-bottom: 258px;
  background-color: #fff;
  position: relative;
  z-index: 21;
}

.searchContent {
  padding: 25vh 0 20vh 0;
}
</style>
