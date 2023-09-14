<template>
  <div class="logo" @click.stop="handleLogoClick">lvmaoya</div>
</template>

<script setup>
const handleLogoClick = async () => {
  await navigateTo("/home");
};
onMounted(() => {
 

})
</script>

<style lang="scss" scoped>
.logo {
  font-size: 20px;
  cursor: pointer;
  color: #303030;
  user-select: none;

  img {
    width: auto;
    height: 22px;
  }

}
</style>
