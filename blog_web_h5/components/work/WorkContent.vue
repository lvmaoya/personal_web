<!--
 * @Author: sun
 * @Date: 2022-12-27 20:22:25
 * @LastEditTime: 2023-01-07 11:00:18
 * @Description: Do not edit
-->
<template>
  <div class="workActicleContent">
    <WorkItem v-for="item in props.list" :key="item.article_id" :item="item"></WorkItem>
  </div>
</template>

<script setup lang="ts">
import { type ArticleItemResType } from "~~/composables";

const props = defineProps({
  list: {
    required: true,
    type: Array<ArticleItemResType>,
  },
});
const workActicleContentRef = ref()

</script>

<style scoped lang="scss">
.WorkActicleContent {
  padding-bottom: 50px;
}
</style>
