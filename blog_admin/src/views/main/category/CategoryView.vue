<template>
  <div class="cont categoryList">
    <el-row>
      <el-col :span="3">
        <el-button type="primary" @click="handleAddCategory" size="large">
          新增文章类别
        </el-button>
      </el-col>
    </el-row>
    <ListContent
      :categoryList="categoryList"
      @table-item-click="hanleTableItemClick"
    ></ListContent>
    <el-dialog v-model="addDialogVisible" title="新增类别" width="30%">
      <el-form :model="addCategoryFormData">
        <el-form-item label="类别名称" label-width="70px">
          <el-input v-model="addCategoryFormData.category_name" />
        </el-form-item>
        <el-form-item label="父类" label-width="70px">
          <el-input value="技术文章" label="父类" disabled />
        </el-form-item>
        <div class="notice">
          <span>注：暂时只支持技术文章的类别添加！</span>
        </div>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCommitForm"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="updateDialogVisible" title="新增类别" width="30%">
      <el-form :model="updateCategoryFormData">
        <el-form-item label="类别名称" label-width="70px">
          <el-input v-model="updateCategoryFormData.category_name" />
        </el-form-item>
        <el-form-item label="父类" label-width="70px">
          <el-input value="技术文章" label="父类" disabled />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="updateDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleUpdateCommitForm">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import ListContent from "./children/ListContent.vue";
import {
  getCategoryListData,
  type categoryItemType,
  deleteCategory,
  type deleteCategoryConfigType,
  checkHaveArticle,
  addCategory,
  type updateCategoryConfigType,
  updateCategory,
} from "@/service/category";
import { ref } from "vue";
import { ElMessage } from "element-plus";
let categoryList = ref<Array<categoryItemType>>([
  {
    category_id: 0,
    category_name: "",
    father_category_name: 1,
  },
]);
const addDialogVisible = ref(false);
const updateDialogVisible = ref(false);
enum form {
  update = 0,
  delete = 1,
}
let addCategoryFormData = ref({
  category_name: "",
  father_category_name: 2,
});
let updateCategoryFormData = ref({
  id: 0,
  category_name: "",
});
// 获取文章类别方法，执行一次
const getCategoryList = async () => {
  const categoryListRes = await getCategoryListData();
  categoryList.value = categoryListRes.data.categoryList;
};
getCategoryList();

// 删除类别
const deleteCategoryData = async (config: deleteCategoryConfigType) => {
  const isHaveArticle = await checkHaveArticle({ id: config.id });
  if (isHaveArticle)
    if (isHaveArticle.code == 0) {
      //   判断是否查询成功
      // 如果有文章，提醒
      if (isHaveArticle.data.havaArticle) {
        ElMessage({
          message: "该类别下仍然存在文章，不可删除！",
          duration: 3000,
          type: "error",
          showClose: true,
        });
        //   如果没有文章，启动删除
      } else {
        const deleteArticleRes = await deleteCategory(config);
        if (deleteArticleRes)
          if (deleteArticleRes.code == 0) {
            //   如果删除成功
            ElMessage({
              message: "删除成功！",
              duration: 2000,
              type: "success",
              showClose: true,
            });
            getCategoryList();
          } else {
            ElMessage({
              message: "删除失败！",
              duration: 2500,
              type: "error",
              showClose: true,
            });
          }
      }
    } else {
      ElMessage({
        message: "查询文章失败！",
        duration: 2500,
        type: "error",
        showClose: true,
      });
    }
};

// 当点击li后面的选项后判断点击了哪一个，并执行相应的方法
const hanleTableItemClick = (row: any, formVal: number) => {
  switch (formVal) {
    case form.update: {
      updateCategoryFormData.value.category_name = row.category_name;
      updateCategoryFormData.value.id = row.category_id;
      updateDialogVisible.value = true;
      break;
    }
    case form.delete: {
      deleteCategoryData({ id: row.category_id });
      break;
    }
  }
};
//文章类别
const handleAddCategory = () => {
  addDialogVisible.value = true;
};

const handleCommitForm = async () => {
  const addCategoryData = await addCategory(addCategoryFormData.value);
  if (addCategoryData)
    if (addCategoryData.code === 0) {
      getCategoryList();
      ElMessage({
        message: "增加类别成功！",
        duration: 2500,
        type: "success",
        showClose: true,
      });
    } else {
      ElMessage({
        message: "增加类别失败！",
        duration: 2500,
        type: "error",
        showClose: true,
      });
    }
  addDialogVisible.value = false;
};
const handleUpdateCommitForm = async () => {
  const addCategoryData = await updateCategory(updateCategoryFormData.value);
  if (addCategoryData)
    if (addCategoryData.code === 0) {
      getCategoryList();
      ElMessage({
        message: "修改类别成功！",
        duration: 2500,
        type: "success",
        showClose: true,
      });
    } else {
      ElMessage({
        message: "修改类别失败！",
        duration: 2500,
        type: "error",
        showClose: true,
      });
    }
  updateDialogVisible.value = false;
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
