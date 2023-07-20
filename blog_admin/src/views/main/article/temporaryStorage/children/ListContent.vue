<!--
 * @Author: sun
 * @Date: 2022-11-05 21:17:59
 * @LastEditTime: 2022-12-01 10:28:40
 * @Description: Do not edit
-->
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
        prop="status"
        label="文章状态"
        min-width="76"
        align="center"
        >暂存</el-table-column
      >

      <el-table-column
        prop="draft_time"
        sortable
        label="暂存日期"
        min-width="190"
        align="center"
      />

      <el-table-column
        fixed="right"
        label="选项"
        min-width="140"
        align="center"
      >
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row.article_id, form.continue)"
            >继续编辑</el-button
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
          id: "",
          title: "",
          status: 0,
          tempDate: "",
        },
      ];
    },
  },
});
enum form {
  continue = 0,
  delete = 1,
}
const emit = defineEmits(["tableItemClick"]);
const handleClick = (val: any, formVal: number) => {
  emit("tableItemClick", val, formVal);
};
</script>

<style scoped lang="scss"></style>
