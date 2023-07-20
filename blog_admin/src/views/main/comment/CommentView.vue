<template>
  <div class="cont commentList">
    <ListContent
      :commentList="commentList"
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
import {
  deleteComment,
  hiddenComment,
  getComment,
  type deleteCommentConfigType,
  type commentType,
  type hiddenCommentConfigType,
  type limitConfigType,
} from "@/service/comment";
import { ref } from "vue";
import { ElMessage } from "element-plus";
import PaginationView from "@/components/PaginationView.vue";

let commentList = ref<Array<commentType>>([
  {
    commentary_id: 0,
    article_id: 0,
    user_name: "",

    content: "",

    comment_place: "",
    created_time: "",
    prefer_num: 0,
    comment_type: 0,
    is_checked: 0,
  },
]);
let currentPage = ref(1);
let pageSize = ref(20);
let total = ref(0);
enum form {
  hidden = 0,
  delete = 1,
}
const getCommentData = async (config: limitConfigType) => {
  const commentDataList = await getComment(config);
  commentList.value = commentDataList.data.list;
  total.value = commentDataList.data.total;
};
getCommentData({ currentPage: currentPage.value, pageSize: pageSize.value });
// 删除
const deleteCommentData = async (config: deleteCommentConfigType) => {
  const deleteCommentRes = await deleteComment(config);
  if (deleteCommentRes)
    if (deleteCommentRes.code === 0) {
      ElMessage({
        message: "删除评论成功！",
        duration: 2000,
        type: "success",
        showClose: true,
      });
    } else {
      ElMessage({
        message: "删除评论失败！",
        duration: 2500,
        type: "error",
        showClose: true,
      });
    }
  getCommentData({
    currentPage: currentPage.value,
    pageSize: pageSize.value,
  });
};
// 隐藏
const hiddenCommentData = async (
  config: hiddenCommentConfigType,
  is_checked: number
) => {
  const hiddenCommentRes = await hiddenComment(config);
  if (hiddenCommentRes)
    if (hiddenCommentRes.code === 0) {
      ElMessage({
        message: is_checked === 0 ? "隐藏评论成功！" : "显示评论成功！",
        duration: 2000,
        type: "success",
        showClose: true,
      });
    } else {
      ElMessage({
        message: is_checked === 0 ? "隐藏评论失败！" : "显示评论失败！",
        duration: 2500,
        type: "error",
        showClose: true,
      });
    }
  getCommentData({
    currentPage: currentPage.value,
    pageSize: pageSize.value,
  });
};
// 当点击li后面的选项后判断点击了哪一个，并执行相应的方法

const hanleTableItemClick = (row: any, formVal: number) => {
  switch (formVal) {
    // row为id和check
    case form.hidden: {
      if (row.is_checked === 1) {
        hiddenCommentData(
          {
            commentary_id: row.commentary_id,
            is_checked: 0,
          },
          1
        );
      } else {
        hiddenCommentData(
          {
            commentary_id: row.commentary_id,
            is_checked: 1,
          },
          0
        );
      }
      break;
    }
    // row为id
    case form.delete: {
      deleteCommentData({
        commentary_id: row,
      });
      break;
    }
  }
};
// 当底部分页当前页：currentpage改变时，重新获取列表
const handleCurrentPageChange = (val: number) => {
  currentPage.value = val;
  getCommentData({ currentPage: currentPage.value, pageSize: pageSize.value });
};

// 当底部分页当前页容量：pagesize改变时，重新获取列表
const handlePageSizeChange = (val: number) => {
  pageSize.value = val;
  getCommentData({ currentPage: currentPage.value, pageSize: pageSize.value });
};
</script>

<style scoped lang="scss">
.categoryList {
  position: relative;
  .el-row {
    padding: 0 0 20px 0;
  }
  .notice {
    margin-top: 20px;
  }
}
</style>
