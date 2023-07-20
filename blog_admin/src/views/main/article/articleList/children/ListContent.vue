<template>
  <div class="content">
    <el-table stripe :data="props.articleList" style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        min-width="150"
        align="center"
      />
      <el-table-column
        prop="father_category_id"
        label="类别"
        min-width="120"
        align="center"
      >
        <template #default="scope"
          ><span>{{
            scope.row.father_category_id === 1
              ? "项目文章"
              : scope.row.father_category_id === 2
              ? "技术文章"
              : "日常随笔"
          }}</span></template
        >
      </el-table-column>
      <el-table-column
        prop="is_privacy"
        label="形式"
        min-width="76"
        align="center"
      >
        <template #default="scope"
          ><span>{{
            scope.row.is_privacy === 0 ? "私密" : "公开"
          }}</span></template
        >
      </el-table-column>

      <el-table-column
        prop="pageview"
        label="浏览量"
        min-width="90"
        align="center"
        sortable
      />
      <el-table-column
        prop="published_time"
        label="发布日期"
        min-width="155"
        :show-overflow-tooltip="true"
        align="center"
        sortable
      />
      <el-table-column
        prop="description"
        label="描述"
        min-width="250"
        :show-overflow-tooltip="true"
        align="center"
      />
      <el-table-column
        fixed="right"
        label="选项"
        min-width="160"
        align="center"
      >
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row, form.detail)"
            >详情</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row, form.edit)"
            >编辑</el-button
          >
          <el-popconfirm
            confirm-button-text="Yes"
            cancel-button-text="No"
            :icon="WarningFilled"
            icon-color="red"
            title="确定删除？"
            @confirm="handleClick(scope.row, form.delete)"
          >
            <template #reference>
              <el-button text type="primary" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { articleType } from "@/service/article";
import { WarningFilled } from "@element-plus/icons-vue";

const props = defineProps({
  articleList: {
    required: true,
    type: Array<articleType>,
    default() {
      return [
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
      ];
    },
  },
});
enum form {
  detail = 0,
  edit = 1,
  delete = 2,
}

const emit = defineEmits(["tableItemClick"]);
const handleClick = (val: any, formVal: number) => {
  emit("tableItemClick", val, formVal);
};
</script>

<style scoped lang="scss"></style>
