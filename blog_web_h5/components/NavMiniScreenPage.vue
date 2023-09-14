<template>
    <div class="NavMiniPage">
        <div class="btn" :class="{ close: close }" @click="close = !close">
            <span></span>
        </div>

        <div class="content" v-if="close">
            <ul>
                <li v-for="item in path">
                    <NuxtLink :to="'/' + item" active-class="active-nav-link" @click.stop="close = !close">{{ item }}
                    </NuxtLink>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup>
const path = ['home', "work", 'blog', 'about']
const close = ref(false)
watch(close, (newVal) => {
    if (newVal && document.querySelector('body')) {
        document.querySelector('body').style.overflow = 'hidden'
    } else {
        document.querySelector('body').style.overflow = 'auto'
    }
})
</script>

<style lang="scss" scoped>
.NavMiniPage {
    display: flex;
    align-items: center;
    flex: 1;

    .btn {
        width: 30px;
        height: 30px;
        margin-left: auto;
        position: relative;
        z-index: 100;

        span {
            width: 100%;
            height: 2px;
            background: #4d4d4d;
            display: block;
            margin-top: -1px;
            position: absolute;
            text-indent: -9999em;
            top: 50%;

            &::after {
                width: 30px;
                height: 2px;
                background: #4d4d4d;
                content: "";
                display: block;
                left: 0;
                position: absolute;
                text-indent: -9999px;
                top: -8px;
                -ms-transform-origin: 13%;
                transform-origin: 13%;
                transition: transform .2s linear 0s;
                bottom: -8px;
                top: auto;
            }

            &::before {
                width: 30px;
                height: 2px;
                background: #4d4d4d;
                content: "";
                display: block;
                left: 0;
                position: absolute;
                text-indent: -9999px;
                top: -8px;
                -ms-transform-origin: 13%;
                transform-origin: 13%;
                transition: transform .2s linear 0s;
            }
        }

    }

    .close {
        span {
            background: transparent;

            &::before {
                background: #fff;
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            &::after {
                background: #fff;
                -ms-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
        }
    }

    .content {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #4d4d4d;
        z-index: 50;
        font-family: romain_headlineregular, Times, serif;
        font-size: 1.2em;
        display: flex;
        text-transform: capitalize;
        align-items: center;
        justify-content: center;

        ul {
            width: 100%;

            li {
                width: 100%;
                text-align: center;
                padding: 9px 0;
                list-style: none;

                a {
                    font-size: 23px;
                    color: #fff;
                    font-weight: normal;
                }

            }
        }
    }
}
</style>