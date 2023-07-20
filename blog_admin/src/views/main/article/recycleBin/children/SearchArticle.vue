<template>
  <div class="search" ref="searchRef">
    <el-form :inline="true" :model="searchForm" ref="formRef">
      <el-form-item label="标题" prop="title">
        <el-input v-model="searchForm.title" placeholder="输入文章标题关键字" />
      </el-form-item>
      <el-form-item label="关键字" prop="keyword">
        <el-input v-model="searchForm.keyword" placeholder="输入内容关键字" />
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-cascader
          v-model="searchForm.category"
          :options="options"
          :props="categoryProp"
          placeholder="选择文章类别"
          clearable
        />
      </el-form-item>
      <el-form-item label="状态" prop="status" width="150px">
        <el-select v-model="searchForm.status" placeholder="选择文章状态">
          <el-option label="暂存" value="0" />
          <el-option label="发布" value="1" />
          <el-option label="回收" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期" prop="date">
        <el-date-picker
          v-model="searchForm.date"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
    </el-form>
    <div class="btnGrounp">
      <el-button type="primary" @click="onSubmit(formRef)">查询</el-button>
      <el-button type="info" @click="resetForm(formRef)">重置</el-button>
      <el-button type="warning" @click="resetForm(formRef)">导出</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { reactive, ref } from "vue";

const formRef = ref<FormInstance>();
const searchRef = ref();
const searchForm = reactive({
  title: "",
  keyword: "",
  category: "",
  status: "",
  date: "",
});
const categoryProp = {
  checkStrictly: true,
};

const options = [
  {
    value: "guide",
    label: "Guide",
    children: [
      {
        value: "disciplines",
        label: "Disciplines",
        children: [
          {
            value: "consistency",
            label: "Consistency",
          },
          {
            value: "feedback",
            label: "Feedback",
          },
          {
            value: "efficiency",
            label: "Efficiency",
          },
          {
            value: "controllability",
            label: "Controllability",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "side nav",
            label: "Side Navigation",
          },
          {
            value: "top nav",
            label: "Top Navigation",
          },
        ],
      },
    ],
  },
];

const onSubmit = (formEl: FormInstance | undefined) => {};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped lang="scss">
.search {
  user-select: none;
  border-bottom: 1px solid gainsboro;
  .btnGrounp {
    padding-top: 10px;
    padding-bottom: 20px;
  }
}
</style>
