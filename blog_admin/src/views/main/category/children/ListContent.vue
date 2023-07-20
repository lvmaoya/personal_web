<!--
 * @Author: sun
 * @Date: 2022-11-24 14:33:43
 * @LastEditTime: 2022-12-05 14:22:42
 * @Description: Do not edit
-->
<template>
  <div class="content">
    <el-table stripe :data="props.categoryList" style="width: 100%">
      <el-table-column
        prop="category_name"
        label="类别名称"
        min-width="150"
        align="center"
      />
      <el-table-column label="父类别名称" min-width="76" align="center">
        <template #default="scope">
          {{
            scope.row.father_category_name === 1
              ? "项目"
              : scope.row.father_category_name === 2
              ? "技术文章"
              : "随笔"
          }}
        </template>
      </el-table-column>
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
            @click="handleClick(scope.row, form.update)"
            >更改类别名称</el-button
          >
          <!-- 如果该类别下存在有文章则不允许删除，并给予提示 -->
          <el-popconfirm
            v-if="scope.row.father_category_name === 2"
            confirm-button-text="Yes"
            cancel-button-text="No"
            :icon="WarningFilled"
            icon-color="red"
            title="确定删除？"
            @confirm="handleClick(scope.row, form.delete)"
          >
            <template #reference>
              <el-button text type="primary" size="small">删除该类别</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { categoryItemType } from "@/service/category";
import { WarningFilled } from "@element-plus/icons-vue";

const props = defineProps({
  categoryList: {
    required: true,
    type: Array<categoryItemType>,
    default() {
      return [
        {
          category_id: "3",
          category_name: "vue",
          father_category_name: "技术文章",
        },
      ];
    },
  },
});
enum form {
  update = 0,
  delete = 1,
}
const emit = defineEmits(["tableItemClick"]);
const handleClick = (val: any, formVal: number) => {
  emit("tableItemClick", val, formVal);
};
</script>

<style scoped lang="scss"></style>
