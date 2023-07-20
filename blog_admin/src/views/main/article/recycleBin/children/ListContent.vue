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
        label="文章类别"
        width="120"
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
        ></el-table-column
      >
      <el-table-column label="状态" min-width="76" align="center"
        >已删除</el-table-column
      >
      <el-table-column
        prop="published_time"
        sortable
        label="发布日期"
        min-width="190"
        align="center"
      />
      <el-table-column
        prop="deleted_time"
        sortable
        label="删除日期"
        min-width="190"
        align="center"
      />

      <el-table-column
        fixed="right"
        label="选项"
        min-width="155"
        align="center"
      >
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row.article_id, form.detail)"
            >详情</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row.article_id, form.restore)"
            >恢复</el-button
          >

          <el-popconfirm
            confirm-button-text="Yes"
            cancel-button-text="No"
            :icon="WarningFilled"
            icon-color="red"
            title="确定删除？"
            @confirm="handleClick(scope.row.article_id, form.delete)"
          >
            <template #reference>
              <el-button text type="primary" size="small">彻底删除</el-button>
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
          category_id: "",
          status: 0,
          published_time: new Date(),
          deleted_time: "",
          is_privacy: 0,
          pageview: 0,
        },
      ];
    },
  },
});
enum form {
  detail = 0,
  restore = 1,
  delete = 2,
}
const emit = defineEmits(["tableItemClick"]);
const handleClick = (val: number, formVal: number) => {
  emit("tableItemClick", val, formVal);
};
</script>

<style scoped lang="scss"></style>
