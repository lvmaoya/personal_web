<template>
  <div id="container">
    <NavBar></NavBar>
    <slot></slot>
    <Footer>
      <p><a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2024068051号-1</a></p>
    </Footer>

  </div>
  <GoutouBack></GoutouBack>
</template>

<script setup>

import 'animate.css';

</script>

<style>
/* #s-loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
}

#s-loading .loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 11em;
  height: 11em;
  margin: -5.5em;
  transform: rotate(45deg);
}

#s-loading .loader:after,
#s-loading .loader:before {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 11em;
  height: 11em;
  border-radius: 0.5em;
  transform: translate(-50%, -50%);
}

#s-loading .loader:after {
  height: 1em;
  animation: move-after 2s infinite;
}

#s-loading .loader:before {
  width: 1em;
  animation: move-before 2s infinite;
}

#s-loading .loader-text {
  position: absolute;
  top: 45%;
  left: 50%;
  width: 20em;
  margin: -8em -10em;
  font-size: 18px;
  text-align: center;
  color: grey;
  text-shadow: cornflowerblue;
}

@keyframes move-after {
  0% {
    width: 1em;
    box-shadow: 5em -3em #c9f0fc, -5em 3em #f4a7c4;
  }

  35% {
    width: 11em;
    box-shadow: 0 -3em #c9f0fc, 0 3em #f4a7c4;
  }

  70% {
    width: 1em;
    box-shadow: -5em -3em #c9f0fc, 5em 3em #f4a7c4;
  }

  100% {
    width: 1em;
    box-shadow: 5em -3em #c9f0fc, -5em 3em #f4a7c4;
  }
}

@keyframes move-before {
  0% {
    height: 1em;
    box-shadow: -3em -5em #b3e5d5, 3em 5em #f7dfac;
  }

  35% {
    height: 11em;
    box-shadow: -3em 0 #b3e5d5, 3em 0 #f7dfac;
  }

  70% {
    height: 1em;
    box-shadow: -3em 5em #b3e5d5, 3em -5em #f7dfac;
  }

  100% {
    height: 1em;
    box-shadow: -3em -5em #b3e5d5, 3em 5em #f7dfac;
  }
} */
</style>