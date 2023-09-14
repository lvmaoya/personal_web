<!--
 * @Author: sun
 * @Date: 2022-12-27 19:43:35
 * @LastEditTime: 2023-01-02 20:36:09
 * @Description: Do not edit
-->
<template>
  <div class="pagination" ref="paginationRef">
    <div class="content inner">
      <div class="older" @click.stop="handleCurrentPageChange(0)" :class="{ nothing: haveLast() }">
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuojiantou"></use>
          </svg>
          Older Entries
        </span>
      </div>
      <div class="newer" @click.stop="handleCurrentPageChange(1)" :class="{ nothing: !haveNext() }">
        <span>
          Newer Entries
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const paginationRef = ref();
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});
onMounted(() => {
  if (haveLast() === true && haveNext() === false) {
    paginationRef.value.style.height = "0";
    paginationRef.value.style.borderBottom = "0px solid #999";
  } else {
    paginationRef.value.style.height = "auto";
    paginationRef.value.style.borderBottom = "1px solid #999";
  }
});
onUpdated(() => {
  if (haveLast() === true && haveNext() === false) {
    paginationRef.value.style.height = "0";
    paginationRef.value.style.borderBottom = "0px solid #999";
  } else {
    paginationRef.value.style.height = "auto";
    paginationRef.value.style.borderBottom = "1px solid #999";
  }
});
const haveLast = (): boolean => {
  return props.currentPage <= 1;
};
const haveNext = () => {
  return props.currentPage * props.size < props.total;
};
const emit = defineEmits(["currentPageChange"]);

const handleCurrentPageChange = (val: number) => {
  emit("currentPageChange", val);
};
</script>

<style scoped lang="scss">
.pagination {
  width: 100%;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  position: relative;
  z-index: 56;

  .content {
    margin: 0 auto;
    height: 90px;
    line-height: 90px;
    display: flex;
    justify-content: space-between;

    span {
      color: #313131;
      cursor: pointer;
      user-select: none;
    }

    .nothing {
      height: 0;
      overflow: hidden;
    }
  }
}
</style>
