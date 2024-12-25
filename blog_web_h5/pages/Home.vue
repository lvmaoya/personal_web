<template>
  <HomeBody></HomeBody>
  <!-- <HomeIntroduce></HomeIntroduce> -->
  <HomeMain :thingList="(thingList as Array<ThingType>)"></HomeMain>
</template>
<script lang="ts" setup>
import { type ThingType } from "@/composables/index";
const thingList = ref<Array<ThingType>>();
const emits = defineEmits(['contentChange'])
thingList.value = (await getIntersetThingList()).data;
useHead({
  meta: [
    { name: "google-site-verification", content: "rdicKFHUWZtMhhwgAXfrjwCJSXuzRzH6UcmV1gUgj_o" },
  ],
});
onBeforeMount(() => {
  emits('contentChange')
})
// 点击开始滚动
// const homeMainRef = ref();
// const handleStartClick = () => {
//   window.scrollTo({
//     top: homeMainRef.value.offsetTop - 170,
//     behavior: "smooth",
//   });
// };
</script>

<style scoped lang="scss"></style>

