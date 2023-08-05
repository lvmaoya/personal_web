<!--
 * @Author: sun
 * @Date: 2022-12-23 21:58:29
 * @LastEditTime: 2023-01-02 21:58:28
 * @Description: Do not edit
-->
<template>
  <div class="w">
    <Search :isSearchInputFocus="isSearchInputFocus" @search-btn-click="handleSearchBtnClick"></Search>
    <WorkArticleCategory @tag-click="tagClick"></WorkArticleCategory>
    <div
      class="categoryViewWorkContent"
      :style="`${isCategoryVisible ? 'opacity:1;z-index:99999' : 'opacity:0;z-index:-1'}`"
    >
      <WorkTagCategory @category-tag-click="categoryTagClick"></WorkTagCategory>
    </div>
    <WorkContent :list="(articleList as ArticleListResType)?.list" v-if="!isCategoryVisible"></WorkContent>
    <NoData v-if="total === 0"></NoData>
  </div>
  <Pagination
    v-if="!isCategoryVisible"
    @current-page-change="handleCurrentPageChange"
    :current-page="currentPage"
    :total="total"
    :size="size"
  ></Pagination>

  <Footer></Footer>
</template>

<script lang="ts" setup>
import { ArticleListResType, searchConfigType } from "~~/composables";
// 分页
let currentPage = ref(1);
let total = ref(0);
let size = ref(10);
// 文章列表数据
let articleList = ref<ArticleListResType>();

articleList.value = (await getArticleList({ currentPage: currentPage.value, size: size.value })).data;
total.value = articleList.value.total;

const handleCurrentPageChange = async (val: number) => {
  if (val === 0) {
    currentPage.value -= 1;
  } else if (val === 1) {
    currentPage.value += 1;
  }
  switch (doCategory.value) {
    case 1:
      articleList.value = (await getArticleList({ currentPage: currentPage.value, size: size.value })).data;
      total.value = articleList.value.total;
      break;
    case 2:
      (userInput.value as searchConfigType).currentPage = currentPage.value;
      articleList.value = (await searchArticle(userInput.value as searchConfigType)).data;
      total.value = articleList.value.total;
      break;
    case 3:
      articleList.value = (await getRecentArticleList({ currentPage: currentPage.value, size: size.value })).data;
      total.value = articleList.value.total;
      break;
    case 4:
      articleList.value = (await getHotArticleList({ currentPage: currentPage.value, size: size.value })).data;
      total.value = articleList.value.total;
      break;
    case 5:
      articleList.value = (
        await getArticleByCategoryData({
          category_id: clickCategoryId.value,
          currentPage: currentPage.value,
          size: size.value,
        })
      ).data;
      total.value = articleList.value.total;
      break;
  }
};
let isSearchInputFocus = ref(true);
// 判断文章列表作了哪些操作:如果是0，作了获取所有文章的操作，如果是1，作了搜索文章的操作，如果是2，作了最近更新的操作
let doCategory = ref(1);
// category是否显示
let isCategoryVisible = ref(false);
const tagClick = async (val: number) => {
  currentPage.value = 1;
  switch (val) {
    // 查看所有
    case 1:
      doCategory.value = 1;
      isCategoryVisible.value = false;
      articleList.value = (await getArticleList({ currentPage: currentPage.value, size: size.value })).data;
      total.value = articleList.value.total;
      break;
    // 搜索
    case 2:
      doCategory.value = 2;
      isCategoryVisible.value = false;
      isSearchInputFocus.value = !isSearchInputFocus.value;
      break;
    // 最近
    case 3:
      doCategory.value = 3;
      isCategoryVisible.value = false;
      const recentArticleData = await getRecentArticleList({
        currentPage: currentPage.value,
        size: size.value,
      });
      articleList.value = recentArticleData.data;
      total.value = recentArticleData.data.total;
      break;
    // 热门
    case 4:
      doCategory.value = 4;
      isCategoryVisible.value = false;
      const hotArticleData = await getHotArticleList({
        currentPage: currentPage.value,
        size: size.value,
      });
      articleList.value = hotArticleData.data;
      total.value = hotArticleData.data.total;
      break;
    // 分类
    case 5:
      doCategory.value = 5;
      isCategoryVisible.value = !isCategoryVisible.value;
      break;
  }
};
// 点击分类标签
const clickCategoryId = ref();
const categoryTagClick = async (val: number) => {
  clickCategoryId.value = val;
  doCategory.value = 5;
  const articleByCategoryData = await getArticleByCategoryData({
    category_id: clickCategoryId.value,
    currentPage: currentPage.value,
    size: size.value,
  });
  articleList.value = articleByCategoryData.data;
  total.value = articleByCategoryData.data.total;
  isCategoryVisible.value = false;
};
// 点击搜索按钮
const userInput = ref<searchConfigType>();
const handleSearchBtnClick = async (searchData: searchConfigType) => {
  doCategory.value = 2;
  currentPage.value = 1;
  searchData = { ...searchData, currentPage: currentPage.value, size: size.value };
  userInput.value = searchData;

  const resArticlesData = await searchArticle(searchData);
  articleList.value = resArticlesData.data;
  total.value = resArticlesData.data.total;
};
</script>

<style scoped lang="scss">
.categoryViewWorkContent {
  position: absolute;
  transition: 0.5s;
  width: 100%;
}
</style>
