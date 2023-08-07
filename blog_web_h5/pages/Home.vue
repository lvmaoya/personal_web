<!--
 * @Author: sun
 * @Date: 2022-12-23 21:58:29
 * @LastEditTime: 2023-01-02 10:44:25
 * @Description: Do not edit
-->
<template>
  <HomeBody></HomeBody>
  <!-- <div ref="homeMainRef"> -->
  <HomeMain :thingList="(thingList as Array<ThingType>)"></HomeMain>
  <!-- </div> -->
  <Footer>
    <p><a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2022008799号-1</a></p>
  </Footer>
</template>
<script lang="ts" setup>
import { type ThingType } from "@/composables/index";
const thingList = ref<Array<ThingType>>();
thingList.value = (await getIntersetThingList()).data;
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

