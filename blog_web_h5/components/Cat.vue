<!--
 * @Author: sun
 * @Date: 2022-12-29 20:07:59
 * @LastEditTime: 2023-02-17 15:27:31
 * @Description: Do not edit
-->
<template>
  <div></div>
</template>

<script setup lang="ts">
const config = {
  model: {
    jsonPath: "../hijiki/assets/hijiki.model.json", // 加载模型的json路径
  },
  display: {
    superSample: 1, // 超采样等级
    width: 300, // canvas的宽度
    height: 380, // canvas的高度
    position: "right", // 显示位置：左或右
    hOffset: -80, // canvas水平偏移
    vOffset: -35, // canvas垂直偏移
  },
  mobile: {
    show: true, // 是否在移动设备上显示
    scale: 1, // 移动设备上的缩放
    motion: true, // 移动设备是否开启重力感应
  },
  react: {
    opacityDefault: 1, // 默认透明度
    opacityOnHover: 1, // 鼠标移上透明度
  },
};
onBeforeMount(() => {
  if (document.body.clientWidth >= 480) {
    L2Dwidget.init(config);
  }
});
</script>

<style scoped></style>
