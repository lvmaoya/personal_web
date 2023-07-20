<!--
 * @Author: sun
 * @Date: 2022-12-23 21:24:02
 * @LastEditTime: 2023-01-04 09:08:27
 * @Description: Do not edit
-->
<template>
  <div class="logo" @click.stop="handleLogoClick">LVMAOYA</div>
</template>

<script setup>
const handleLogoClick = async () => {
  await navigateTo("/home");
};
</script>

<style lang="scss" scoped>
.logo {
  font-size: 1.2em;
  cursor: pointer;
  color: gray;
  user-select: none;
}
</style>
