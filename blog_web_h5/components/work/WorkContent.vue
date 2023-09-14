<template>
  <div class="workActicleContent">
    <WorkItem v-for="(item, index) in props.list" :key="item.article_id" :item="item" :index="index"></WorkItem>
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

</script>

<style scoped lang="scss">
.workActicleContent {
  min-height: 50vh;
}
</style>
