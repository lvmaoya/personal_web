<!--
 * @Author: sun
 * @Date: 2022-10-15 16:49:44
 * @LastEditTime: 2022-12-31 09:30:59
 * @Description: Do not edit
-->
<template>
  <footer>
    <div class="inner content">
      <div class="about">
        <Logo></Logo>
        <div class="copyright">
          <p>Copyright © 2022 lvmaoya all rights reserved.</p>
          <slot></slot>
        </div>
      </div>
      <div class="recentPost">

      </div>
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
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
footer {
  position: fixed;
  z-index: 5;
  bottom: 0;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  font-size: 13px;

  .content {
    display: flex;
  }

  .contact {
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
}
</style>
