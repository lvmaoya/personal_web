<!--
 * @Author: sun
 * @Date: 2022-12-28 14:23:27
 * @LastEditTime: 2023-01-04 09:12:19
 * @Description: Do not edit
-->
<template>
  <div class="btnContent">
    <a data-title="click me to start" @click.stop="handleStartClick"></a>
  </div>
</template>

<script setup lang="ts">
//  @ts-nocheck
const emit = defineEmits(["startClick"]);

const handleStartClick = () => {
  emit("startClick");
};
onMounted(() => {
  const docStyle = document.documentElement.style;
  const aElem = document.querySelector(".btnContent>a");
  const btnContent = document.querySelector(".btnContent");
  const boundingClientRect = aElem.getBoundingClientRect();

  aElem.onmousemove = function (e) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // alert(boundingClientRect.top);
    // alert(btnContent.offsetTop);
    // alert(aElem?.scrollTop);
    // 477.5 442
    // 获取鼠标的位置到左上角的距离，最大是元素的宽高
    const x = e.clientX - boundingClientRect.left;
    const y = e.clientY + scrollTop - btnContent.offsetTop - 35;
    // 原来的这个根据
    // const y = e.clientY - boundingClientRect.top;

    // 元素的宽高除以二
    const xc = boundingClientRect.width / 2;
    const yc = boundingClientRect.height;

    // 正负元素宽高除以二
    const dx = x - xc;
    const dy = y - yc;

    // 旋转多少度
    docStyle.setProperty("--rx", `${dy / -1}deg`);
    docStyle.setProperty("--ry", `${dx / 10}deg`);
  };
  // 鼠标离开恢复原状
  aElem.onmouseleave = function (e) {
    docStyle.setProperty("--ty", "0");
    docStyle.setProperty("--rx", "0");
    docStyle.setProperty("--ry", "0");
  };

  aElem.onmousedown = function (e) {
    docStyle.setProperty("--tz", "-25px");
  };

  document.body.onmouseup = function (e) {
    docStyle.setProperty("--tz", "-12px");
  };
});
</script>
<!-- 
  按钮的实现思路：
根据伪元素before来填充外框架，根据after来填充字体 attr(data-title)
框架伪元素 ：    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));
字体伪元素 ：    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));


-->
<style scoped lang="scss">
.btnContent > a {
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
    will-change: transform;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    // var(--ty, 0) 当第一个值未定义，回退生效
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));
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
    font-weight: 1em;
    letter-spacing: 0.01em;
    will-change: transform;
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));
  }
}

.btnContent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  transform-style: preserve-3d;
  transform: perspective(200px);
}
</style>
