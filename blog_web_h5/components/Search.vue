<!--
 * @Author: sun
 * @Date: 2022-12-27 19:48:49
 * @LastEditTime: 2023-01-04 09:15:20
 * @Description: Do not edit
-->
<template>
  <div class="search" @click.stop>
    <div class="pageCategroy">
      <slot></slot>
    </div>
    <div class="searchInput">
      <input type="text" placeholder="Search..." ref="searchInput" v-model="searchData" />
      <button @click="handleSearchBtnClick">
        <span class="iconfont">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo1"></use>
          </svg>
        </span>
      </button>
    </div>
    <div class="pageCategroy"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isSearchInputFocus: {
    type: Boolean,
  },
});
const emit = defineEmits(["searchBtnClick"]);

const searchInput = ref();
watch(
  () => props.isSearchInputFocus,
  () => {
    searchInput.value.focus();
  }
);
const searchData = ref("");
const handleSearchBtnClick = () => {
  emit("searchBtnClick", { searchData: searchData.value });
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .pageCategroy {
    flex: 1;
    line-height: 1.3em;
    font-weight: 400;
  }
  .searchInput {
    position: relative;
    flex: 2;
    height: 45px;

    input {
      width: 100%;
      height: 100%;
      border-radius: 42px;
      border: 1px solid rgba(184, 197, 214, 0.2);
      background: #fff;
      box-sizing: border-box;
      padding: 3px 6px 3px 20px;
      box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
      font-size: 0.875em;
      padding: 0 40px 0 18px;
      user-select: none;
    }
    input:focus {
      outline: none;
    }
    button {
      height: 100%;
      position: absolute;
      background: none;
      right: 10px;
      border: none;

      &:hover {
        span {
          font-size: 1.2em;
        }
      }
    }
  }
}
</style>
