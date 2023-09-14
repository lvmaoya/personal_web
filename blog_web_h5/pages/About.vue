<template>
  <div class="aboutView">
    <div class="inner">
      <div class="introduce">
        <span v-html="userInfo.introduce"></span>
      </div>
      <div class="contact">
        <ul>
          <li>
            <a href="https://mail.qq.com/" target="_blank"><span>Email </span></a>
          </li>
          <li class="githubLi">
            <a href="https://github.com/lvmaoya" target="_blank"><span class="github">Github</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userInfo = (await getUserInfo()).data;
</script>

<style scoped lang="scss">
.aboutView {
  border-bottom: 1.2px solid rgb(189, 188, 188);
  height: 100vh;
  padding-top: 150px;
  margin-bottom: 258px;
  background-color: #fff;
  position: relative;
  z-index: 21;
}

.inner {

  .introduce {
    display: flex;
    align-items: center;
    padding-bottom: 5em;

    span {
      font-size: 0.875em;
    }
  }

  .contact {
    li {
      list-style: none;
    }

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
