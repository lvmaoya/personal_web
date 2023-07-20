<!--
 * @Author: sun
 * @Date: 2022-10-15 16:49:44
 * @LastEditTime: 2022-12-31 09:30:59
 * @Description: Do not edit
-->
<template>
  <div class="footer">
    <div class="footerLogo"><Logo></Logo></div>
    <div class="contact">
      <ul>
        <li class="email">
          <span><a href="javascript:;">1504734652@qq.com</a></span>
        </li>
        <li>
          <a href="javascript:;">
            <ToolTip :tipText="17638331208">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
            </ToolTip>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <ToolTip :tipText="1504734652">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
              </svg>
            </ToolTip>
          </a>
        </li>
      </ul>
    </div>

    <div class="copyright">
      <p>Copyright © 2022 lvmaoya All rights reserved.</p>
      <br />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
  // position: sticky;
  z-index: 5;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  .footerLogo {
    padding-top: 4em;
  }
  .contact {
    // display: flex;
    // justify-content: center;
    padding-top: 2.5em;
    ul {
      display: flex;
      .email {
        padding-right: 3em;
      }
      .icon {
        font-size: 1.5em;
      }
    }
  }
  .copyright {
    font-size: 0.75em;
    text-align: center;
    padding: 2em 0 2em 0;
    p {
      font: 16px "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC",
        "WenQuanYi Micro Hei", sans-serif;
    }
    a {
      cursor: pointer;
    }
  }
}
</style>
