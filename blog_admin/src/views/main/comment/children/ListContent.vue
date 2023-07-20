<!--
 * @Author: sun
 * @Date: 2022-11-24 14:33:43
 * @LastEditTime: 2023-02-16 21:41:26
 * @Description: Do not edit
-->
<template>
  <div class="content">
    <el-table stripe :data="props.commentList" style="width: 100%">
      <el-table-column
        prop="article_id"
        label="评论文章"
        min-width="150"
        align="center"
      />
      <el-table-column
        prop="user_name"
        label="评论人"
        min-width="150"
        align="center"
      />

      <el-table-column
        prop="content"
        label="评论内容"
        min-width="150"
        align="center"
      />
      <!-- <el-table-column
        prop="comment_place"
        label="评论来源"
        min-width="150"
        align="center"
      /> -->
      <el-table-column
        prop="created_time"
        label="评论时间"
        min-width="150"
        align="center"
        sortable
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
            @click="handleClick(scope.row, form.hidden)"
            >{{ scope.row.is_checked === 0 ? "隐藏" : "显示" }}</el-button
          >
          <!-- 如果该类别下存在有文章则不允许删除，并给予提示 -->
          <el-popconfirm
            confirm-button-text="是"
            cancel-button-text="否"
            :icon="WarningFilled"
            icon-color="red"
            title="确定删除？"
            @confirm="handleClick(scope.row.commentary_id, form.delete)"
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
import type { commentType } from "@/service/comment";
import { WarningFilled } from "@element-plus/icons-vue";

const props = defineProps({
  commentList: {
    required: true,
    type: Array<commentType>,
    default() {
      return [
        {
          commentary_id: "",
          article_id: "",
          user_name: "",

          content: "",

          comment_place: "",
          created_time: "",
          prefer_num: 0,
          comment_type: 0,
          is_checked: 0,
        },
      ];
    },
  },
});
enum form {
  hidden = 0,
  delete = 1,
}
const emit = defineEmits(["tableItemClick"]);
const handleClick = (val: any, formVal: number) => {
  emit("tableItemClick", val, formVal);
};
</script>

<style scoped lang="scss"></style>
