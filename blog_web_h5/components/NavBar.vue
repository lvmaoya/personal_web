<!--
 * @Author: sun
 * @Date: 2022-12-23 21:21:35
 * @LastEditTime: 2023-03-06 19:23:10
 * @Description: Do not edit
-->
<template>
  <header>
    <div class="nav-bar">
      <div class="logo">
        <Logo></Logo>
      </div>
      <nav class="menu">
        <ul>
          <li><NuxtLink to="/home" active-class="active-nav-link" @click.stop>首页</NuxtLink></li>
          <li><NuxtLink to="/work" active-class="active-nav-link" @click.stop>技术</NuxtLink></li>
          <li><NuxtLink to="/blog" active-class="active-nav-link" @click.stop>随笔</NuxtLink></li>
          <li><NuxtLink to="/about" active-class="active-nav-link" @click.stop>关于</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
onMounted(() => {
  const header = document.querySelector("header");
  var scrollFunc = function (e) {
    if (e.wheelDelta > 0 || e.detail) {
      //IE/Opera/Chrome和Firefox
      header.style.top = "0";
    } else {
      header.style.top = "-4.5em";
    }
  };
  /*注册事件*/
  if (document.addEventListener) {
    document.addEventListener("DOMMouseScroll", scrollFunc, false);
  } //W3C
  window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome
});
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 518;
  background-color: #fff;
  border-bottom: 1.2px solid rgb(189, 188, 188);
  display: flex;
  justify-content: center;
  transition: top 0.5s ease-out;
  .nav-bar {
    width: 80%;
    min-width: 375px;
    padding: 1.5em 0;
    display: flex;
    .logo {
      margin-left: 10px;
    }
    nav {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      ul {
        display: flex;
        li {
          max-width: 70px;
          padding: 0 10px;
          a {
            font-size: 0.875em;
            color: #313131;
          }
        }
      }
    }
  }
  .active-nav-link {
    color: #eb5055 !important;
  }
}
</style>
