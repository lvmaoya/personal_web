<template>
  <div class="search" @click.stop>
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
  max-width: 770px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .searchInput {
    position: relative;
    width: 100%;
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
