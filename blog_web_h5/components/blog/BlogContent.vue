<!--
 * @Author: sun
 * @Date: 2022-12-28 08:45:41
 * @LastEditTime: 2023-02-17 14:53:19
 * @Description: Do not edit
-->
<template>
  <div class="blogContent">
    <BlogItem v-for="item in props.blogList" :key="item.article_id" :blogItem="item"></BlogItem>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blogList: {
    required: true,
    type: Object,
  },
});
</script>

<style scoped lang="scss">
.blogContent {
  width: 100%;
  padding-top: 3em;
  padding-bottom: 50px;
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
}
</style>
