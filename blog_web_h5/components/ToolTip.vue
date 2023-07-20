<!--
 * @Author: sun
 * @Date: 2022-12-24 16:16:15
 * @LastEditTime: 2022-12-31 09:30:19
 * @Description: Do not edit
-->
<template>
  <div class="tool-tip" :tooltip="props.tipText">
    <div class="arrow"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tipText: {
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.tool-tip {
  cursor: pointer;
  position: relative;
 
  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: black;
    opacity: 0;
    top: -13px;
    left: 50%;
    transform: translateX(-50%) rotateZ(45deg);
  }
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 99;
  }

  &::after {
    content: attr(tooltip);
    position: absolute;
    background: black;
    text-align: center;
    color: #fff;
    font-size: 14px;

    border-radius: 5px;
    padding: 4px 2px;
    min-width: 80px;
    pointer-events: none;
    z-index: 99;
    opacity: 0;
    padding: 4px 6px;
    left: 50%;
    top: -5px;
    transform: translateX(-50%) translateY(-100%);
  }

  &:hover::after,
  &:hover::before,
  &:hover .arrow {
    opacity: 1;
  }
}
</style>
