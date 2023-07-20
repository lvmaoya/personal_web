<!--
 * @Author: sun
 * @Date: 2022-11-05 10:26:36
 * @LastEditTime: 2022-11-25 22:21:37
 * @Description: Do not edit
-->
<template>
  <div class="search" ref="searchRef">
    <el-form :inline="true" :model="searchForm" ref="formRef">
      <el-form-item label="标题" prop="title">
        <el-input v-model="searchForm.title" placeholder="输入文章标题关键字" />
      </el-form-item>
      <el-form-item label="关键字" prop="keywords">
        <el-input v-model="searchForm.keywords" placeholder="输入内容关键字" />
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-cascader
          v-model="searchForm.category"
          :options="props.categoryList"
          :props="categoryProp"
          placeholder="选择文章类别"
          clearable
        />
      </el-form-item>
      <el-form-item label="状态" prop="is_privacy" width="150px">
        <el-select v-model="searchForm.is_privacy" placeholder="选择文章状态">
          <el-option label="公开" value="1" />
          <el-option label="私密" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期" prop="published_time">
        <el-date-picker
          v-model="searchForm.published_time"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
    </el-form>
    <div class="btnGrounp">
      <el-button type="primary" @click="onSubmit()">查询</el-button>
      <el-button type="info" @click="resetForm(formRef)">重置</el-button>
      <el-button type="warning" @click="resetForm(formRef)">导出</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { ref } from "vue";
const props = defineProps({
  categoryList: {
    type: Array,
    default() {
      return [];
    },
  },
});

const formRef = ref<FormInstance>();
const searchRef = ref();
const searchForm = ref({
  title: "",
  keywords: "",
  category: "",
  published_time: "",
  is_privacy: "",
});
const categoryProp = {
  checkStrictly: true,
};

const emit = defineEmits(["searchClick"]);
// 点击查询发出事件及参数
const onSubmit = () => {
  emit("searchClick", searchForm.value);
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  onSubmit();
};
</script>

<style scoped lang="scss">
.search {
  user-select: none;
  .btnGrounp {
    padding-top: 10px;
    padding-bottom: 20px;
  }
}
</style>
