<!--
 * @Author: sun
 * @Date: 2023-02-17 15:45:20
 * @LastEditTime: 2023-02-18 08:52:45
 * @Description: Do not edit
-->
<template>
  <div class="scrollTop" v-if="btnShow" @click.stop="backTop">
    <button class="btn">
      <svg
        t="1676621886188"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5167"
        width="200"
        height="200"
      >
        <path
          d="M542.4 819.2V446.6l208.9 209.6c11.7 11.7 30.8 11.7 42.4 0 11.7-11.7 11.7-30.8 0-42.4L538.2 357.5c-6.2-6.2-14.5-9.1-22.6-8.7-8.2-0.4-16.4 2.5-22.6 8.7l-248 255c-11.7 11.7-11.7 30.8 0 42.4 11.7 11.7 30.8 11.7 42.4 0l195-202v366.3c0 16.5 13.5 30 30 30s30-13.5 30-30zM792.5 290.3h-554c-16.6 0-30-13.4-30-30s13.4-30 30-30h554c16.6 0 30 13.4 30 30s-13.5 30-30 30z"
          fill="#707070"
          p-id="5168"
        ></path>
      </svg>
      返回顶部
    </button>
  </div>
</template>

<script setup lang="ts">
const btnShow = ref(false);
let timer: any = null;
onMounted(() => {
  window.addEventListener("scroll", scrollToTop);
});
function backTop() {
  timer = setInterval(function () {
    let backTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let speedTop = backTop / 5;
    document.documentElement.scrollTop = backTop - speedTop;
    if (backTop === 0) {
      clearInterval(timer);
    }
  }, 30);
  function scrollFunc() {
    clearInterval(timer);
  }
  /*注册事件*/
  if (document.addEventListener) {
    document.addEventListener("DOMMouseScroll", scrollFunc, false);
    document.addEventListener("click", scrollFunc, false);
    document.addEventListener("mousewheel", scrollFunc, false);
    document.addEventListener("touchstart", scrollFunc, false);
  } //W3C
  (window as any).onmousewheel = scrollFunc; //IE/Opera/Chrome
}
function scrollToTop() {
  let pageLookHeight = document.documentElement.clientHeight || document.body.clientHeight;
  let scroll = document.documentElement.scrollTop;

  if (scroll >= pageLookHeight) {
    btnShow.value = true;
  } else {
    btnShow.value = false;
  }
}
</script>

<style scoped lang="scss">
.scrollTop {
  position: fixed;
  right: 24px;
  bottom: 300px;
  cursor: pointer;
  z-index: 99999;

  .btn {
    position: relative;
    font-size: 14px;
    text-decoration: none;
    padding: 1em 1.5em;
    display: inline-block;
    border-radius: 2em;
    transition: all 0.2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: black;
    background-color: white;
    align-items: center;
    display: flex;
    svg {
      font-size: 20px;
    }
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  .btn::after {
    background-color: #fff;
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
}
</style>
