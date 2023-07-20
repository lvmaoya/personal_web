<!--
 * @Author: sun
 * @Date: 2022-11-05 19:56:39
 * @LastEditTime: 2022-11-27 18:58:28
 * @Description: Do not edit
-->
<template>
  <div class="pagination">
    <el-pagination
      :currentPage="props.currentPage"
      :page-size="props.pageSize"
      :page-sizes="[20, 40, 70, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :background="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  total: {
    type: Number,
    default() {
      return 0;
    },
  },
  currentPage: {
    type: Number,
    default() {
      return 0;
    },
  },
  pageSize: {
    type: Number,
    default() {
      return 0;
    },
  },
});

const currentPage = ref(0);
const pageSize = ref(0);
const emit = defineEmits(["pageSizeChange", "currentPageChange"]);
const handleSizeChange = (val: number) => {
  pageSize.value = val;
  emit("pageSizeChange", val);
};
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  emit("currentPageChange", val);
};
</script>

<style scoped>
.pagination {
  user-select: none;
  display: flex;
  justify-content: center;
  padding: 30px 0px 30px 0px;
}
</style>
