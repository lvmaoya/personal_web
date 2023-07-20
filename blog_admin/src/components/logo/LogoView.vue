<template>
  <div class="logo" @click="handleLogoClick">LVMAOYA</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogoClick = () => {
  router.push({
    name: "home",
  });
};
</script>

<style lang="scss" scoped>
.logo {
  // width: 10%;
  font-size: 1.2em;
  cursor: pointer;
  color: gray;
  user-select: none;
  width: 100px;
}
</style>
