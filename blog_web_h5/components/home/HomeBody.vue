<!--
 * @Author: sun
 * @Date: 2022-12-27 15:02:34
 * @LastEditTime: 2023-01-04 16:04:20
 * @Description: Do not edit
-->
<template>
  <div class="homeBg">
    <div>
      <span class="welcomeStr">
        {{ welcomeStr }}
      </span>
    </div>
    <div class="introduce">I'am a frontEnd developer</div>
    <div class="button">
      <!-- <a href="javascript:;" data-title="click me to start" class="buttonA"></a> -->
      <TdButton @start-click="handleStartClick"></TdButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["startClick"]);
let welcomeStr = ref("Welcome to Sun's blog!");
// let index = ref(0);
// let timer = ref();
// let nowWelcomeStr = ref("");
// const typing = () => {
//   if (index.value <= welcomeStr.value.length) {
//     nowWelcomeStr.value =
//       index.value < welcomeStr.value.length
//         ? welcomeStr.value.slice(0, index.value++) + "_"
//         : welcomeStr.value.slice(0, index.value++);
//     timer.value = setTimeout(() => {
//       typing();
//     }, 50);
//   } else {
//     clearTimeout(timer.value);
//   }
// };

const handleStartClick = () => {
  emit("startClick");
};
// onBeforeMount(() => {
// typing();
// });
</script>

<style lang="scss" scoped>
.homeBg {
  width: 100%;
  height: calc(100vh - 4.4em);
  color: black;
  position: relative;
  z-index: 4;
  /* display: flex; */
  /* align-items: center; */
  text-align: center;
  padding-top: 31vh;
  box-sizing: border-box;
  .welcomeStr {
    font-size: 2em;
    font-family: Georgia, "Helvetica Neue", Times, serif;
    user-select: none;
  }
  .introduce {
    font-family: Georgia, "Helvetica Neue", Times, serif;
    font-style: italic;
    font-size: 1.3em;
    padding: 15px;
    user-select: none;
  }
  .button {
    padding-top: 100px;
    .buttonA {
      position: relative;
      display: inline-block;
      padding: 1.2em 2em;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      user-select: none;
      color: white;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        border-radius: 4px;
        transition: box-shadow 0.5s ease, transform 0.2s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }

      &:hover::before {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }

      &::after {
        position: relative;
        display: inline-block;
        content: attr(data-title);
        transition: transform 0.2s ease;
        font-weight: bold;
        letter-spacing: 0.01em;
      }
    }
  }
}
</style>
