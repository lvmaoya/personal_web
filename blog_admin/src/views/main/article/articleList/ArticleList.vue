<template>
  <div class="cont articleList">
    <SearchArticle
      @searchClick="handleSearchClick"
      :categoryList="categoryList"
    ></SearchArticle>
    <ListContent
      :articleList="articleList"
      @table-item-click="hanleTableItemClick"
    ></ListContent>
    <PaginationView
      :total="total"
      :currentPage="currentPage"
      :pageSize="pageSize"
      @current-page-change="handleCurrentPageChange"
      @page-size-change="handlePageSizeChange"
    ></PaginationView>
  </div>
</template>

<script setup lang="ts">
import ListContent from "./children/ListContent.vue";
import SearchArticle from "./children/SearchArticle.vue";
import PaginationView from "@/components/PaginationView.vue";
import {
  changeArticleStatus,
  getArticleListData,
  searchArticle,
  getCategoryData,
  type articleType,
  type changeArticleStatusConfigType,
} from "@/service/article";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { haveAuthority } from "@/utils/authority";

const router = useRouter();
let total = ref(0);
const currentPage = ref(1);
const pageSize = ref(20);
let articleList = ref<Array<articleType>>([
  {
    article_id: "",
    title: "",
    published_time: "",
    author: "",
    category_id: "",
    father_category_id: 0,
    description: "",
    status: 0,
    is_privacy: 0,
    pageview: 0,
  },
]);
let categoryList = ref<Array<Object>>([{}]);
interface searchArticleType {
  title: String;
  keywords: String;
  category: String;
  published_time: String;
  status: String;
}
// 定义一个枚举类型，用于识别选项点击了哪一项
enum form {
  detail = 0,
  edit = 1,
  delete = 2,
}
// 获取文章列表方法并执行
const getArticleList = async (currentPage: Number, pageSize: Number) => {
  const articleListRes = await getArticleListData({ currentPage, pageSize });
  articleList.value = articleListRes.data.list;
  total.value = articleListRes.data.total;
};
getArticleList(currentPage.value, pageSize.value);
// 获取文章分类
const getCategoryList = async () => {
  const categoryListData = await getCategoryData();
  categoryList.value = categoryListData.data.categoryList;
};
getCategoryList();
// 当底部分页当前页：currentpage改变时，重新获取列表
const handleCurrentPageChange = (val: number) => {
  currentPage.value = val;
  getArticleList(currentPage.value, pageSize.value);
};

// 当底部分页当前页容量：pagesize改变时，重新获取列表
const handlePageSizeChange = (val: number) => {
  pageSize.value = val;
  getArticleList(currentPage.value, pageSize.value);
};

// 删除文章li的方法
const changeArticleStatusData = async (
  config: changeArticleStatusConfigType
) => {
  const changeArticleStatusRes = await changeArticleStatus(config);
  if (changeArticleStatusRes)
    if (changeArticleStatusRes.code == 0) {
      ElMessage({
        message: "删除成功！",
        duration: 2500,
        type: "success",
        showClose: true,
      });
      getArticleList(currentPage.value, pageSize.value);
    } else {
      ElMessage({
        message: "删除失败！",
        duration: 2500,
        type: "error",
        showClose: true,
      });
    }
};

// 当点击li后面的选项后判断点击了哪一个，并执行相应的方法
const hanleTableItemClick = (row: any, formVal: number) => {
  switch (formVal) {
    case form.detail: {
      if (row.is_privacy === 0) {
        ElMessage({
          showClose: true,
          message: "你暂无此权限！",
          duration: 1000,
          type: "error",
        });
        return;
      }

      let routeUrl = router.resolve({
        path: "/detail",
        query: { id: row.article_id },
      });
      window.open(routeUrl.href, "_blank");
      break;
    }
    case form.edit: {
      if (!haveAuthority()) {
        return;
      }
      router.push({
        name: "editArticle",
        query: { id: row.article_id },
      });
      break;
    }
    case form.delete: {
      changeArticleStatusData({ id: row.article_id, toStatus: 2 });
      break;
    }
  }
};

// 处理搜索事件
const handleSearchClick = async (val: searchArticleType) => {
  const searchArticleData = await searchArticle({
    ...val,
    currentPage: currentPage.value,
    pageSize: pageSize.value,
  });
  articleList.value = searchArticleData.data.list;
  total.value = searchArticleData.data.total;
};
</script>

<style scoped>
.articleList {
  position: relative;
}
</style>
