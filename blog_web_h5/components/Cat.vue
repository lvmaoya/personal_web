
<template>
  <div></div>
</template>

<script setup>
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
const init = async () => {
  const canvas = document.querySelector("#live2d-widget > canvas")
  if (document.body.clientWidth > 1248) {
    canvas.style.transform = 'scale(0.8) translate(20px,50px)'
    canvas.style.display = "block"

  } else if (document.body.clientWidth > 1024) {
    // scale(0.5) translate(70px, 156px)
    // scale(0.8) translate(20px, 43px)
    canvas.style.transform = 'scale(0.8) translate(20px,50px)'
    canvas.style.display = "block"

  } else if (document.body.clientWidth > 480) {
    canvas.style.transform = 'scale(0.7) translate(35px,75px)'
    canvas.style.display = "block"

  } else {
    canvas.style.display = "none"
  }
}

onMounted(async () => {
  L2Dwidget.init(config);
  setTimeout(() => {
    if (document.querySelector("#live2d-widget > canvas")) {
      init()
    }
  }, 0);
  window.addEventListener('resize', async () => {
    init()
  })
})
</script>

<style scoped></style>
