<!--
 * @Author: sun
 * @Date: 2022-12-23 21:58:29
 * @LastEditTime: 2023-01-04 09:26:12
 * @Description: Do not edit
-->
<template>
  <div class="aboutView">
    <div class="w">
      <div class="introduce">
        <span v-html="userInfo.introduce"></span>
      </div>
      <div class="contact">
        <ul>
          <li>
            <a href="https://mail.qq.com/" target="_blank"><span>Email </span>lvmaoya@foxmail.com</a>
          </li>
          <li class="githubLi">
            <a href="https://github.com/lvmaoya" target="_blank"><span class="github">Github</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script lang="ts" setup>
const userInfo = await(await getUserInfo()).data;
</script>

<style scoped lang="scss">
.aboutView {
  border-bottom: 1.2px solid rgb(189, 188, 188);
}
.w {
  padding-top: 8vh;
  border: none;

  .introduce {
    display: flex;
    align-items: center;
    padding-bottom: 5em;
    span {
      font-size: 0.875em;
    }
  }
  .contact {
    .githubLi {
      margin-top: 1em;
    }
    a {
      span {
        margin-right: 5px;
        font-size: 1.5em;
        color: #666;
      }
      .github {
        font-size: 1.3em;
      }
    }
    padding: 0 0.5em 0 0;
  }
}
</style>
