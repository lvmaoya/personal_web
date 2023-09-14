<template>
    <div class="goutouBack" @click.stop="backTop"><img src="../assets/img/goutou_yuanliang.svg" alt="">
    </div>
</template>

<script lang="ts" setup>
let timer: any = null;

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

</script>

<style scoped lang="scss">
.goutouBack {
    position: fixed;
    left: 0px;
    bottom: -33px;
    z-index: 333;

    img {
        position: relative;
        top: 0;
        transition: 0.3s ease-in;
        transform: translateY(0);
    }

    &:hover img {
        transform: translateY(-3px);
    }
}
</style>