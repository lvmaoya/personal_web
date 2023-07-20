<template>
  <div class="cont articleList">
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
import PaginationView from "@/components/PaginationView.vue";
import {
  changeArticleStatus,
  deleteArticle,
  getArticleListData,
  type articleType,
  type changeArticleStatusConfigType,
  type deleteArticleConfigType,
} from "@/service/article";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
let total = ref(0);
let status = ref(2);
const currentPage = ref(1);
const pageSize = ref(20);
let articleList = ref<Array<articleType>>([
  {
    article_id: "",
    title: "",
    description: "",
    author: "",
    category_id: "",
    status: 0,
    published_time: "",
    deleted_time: "",
    is_privacy: 0,
    pageview: 0,
  },
]);

// 定义一个枚举类型，用于识别选项点击了哪一项
enum form {
  detail = 0,
  restore = 1,
  delete = 2,
}

// 获取文章列表方法并执行
const getArticleList = async (
  currentPage: Number,
  pageSize: Number,
  status: Number
) => {
  const articleListRes = await getArticleListData({
    currentPage,
    pageSize,
    status,
  });
  articleList.value = articleListRes.data.list;
  total.value = articleListRes.data.total;
};
getArticleList(currentPage.value, pageSize.value, status.value);

// 底部分页器法师变化
const handleCurrentPageChange = (val: number) => {
  currentPage.value = val;
  getArticleList(currentPage.value, pageSize.value, status.value);
};
const handlePageSizeChange = (val: number) => {
  pageSize.value = val;
  getArticleList(currentPage.value, pageSize.value, status.value);
};

// 删除文章
const deleteArticleData = async (config: deleteArticleConfigType) => {
  const deleteArticleRes = await deleteArticle(config);
  if (deleteArticleRes)
    if (deleteArticleRes.code == 0) {
      ElMessage({
        message: "删除成功！",
        duration: 2500,
        type: "success",
        showClose: true,
      });
      getArticleList(currentPage.value, pageSize.value, status.value);
    } else {
      ElMessage({
        message: "删除失败！",
        duration: 2500,
        type: "error",
        showClose: true,
      });
    }
};
// 恢复文章
const restoreArticleData = async (config: changeArticleStatusConfigType) => {
  const deleteArticleRes = await changeArticleStatus(config);
  if (deleteArticleRes)
    if (deleteArticleRes.code == 0) {
      ElMessage({
        message: "恢复成功！",
        duration: 2500,
        type: "success",
        showClose: true,
      });
      getArticleList(currentPage.value, pageSize.value, status.value);
    } else {
      ElMessage({
        message: "恢复失败！",
        duration: 2500,
        type: "error",
        showClose: true,
      });
    }
};

// 当点击li后面的选项后判断点击了哪一个，并执行相应的方法
const hanleTableItemClick = (row: number, formVal: number) => {
  switch (formVal) {
    case form.detail: {
      let routeUrl = router.resolve({ path: "/detail", query: { id: row } });
      window.open(routeUrl.href, "_blank");
      break;
    }
    case form.restore: {
      restoreArticleData({ id: row, toStatus: 0 });
      break;
    }
    case form.delete: {
      deleteArticleData({ id: row });
      break;
    }
  }
};
</script>

<style scoped>
.articleList {
  position: relative;
}
</style>
