<!--
 * @Author: sun
 * @Date: 2022-10-15 16:49:44
 * @LastEditTime: 2022-12-31 09:30:59
 * @Description: Do not edit
-->
<template>
  <footer>
    <div class="inner content">
      <div class="about item">
        <!-- <Logo></Logo>
         -->
        <div class="title">LVMAOYA</div>
        <div class="copyright">
          <p>©2022
            <i class="heart"></i>lvmaoya .
          </p>
          <slot></slot>
        </div>
        <ul class="contact">
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
      <div class="recentPost item">
        <div class="title">RECENT POSTS</div>
        <ul>
          <li v-for="item in recentArticleList"><a :href="'/detail/' + item.article_id">{{
            item.title
          }}</a></li>
        </ul>
      </div>
      <div class="musicBox item">
        <div class="title">READING WITH MISIC</div>
        <div class="musicContent">
          <div class="musicTitle">hello</div>
          <ul class="control">
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
          <div class="progress">
            <span class="line"></span>
            <span class="time">05：18</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { type ArticleItemResType } from "@/composables/index";
const recentArticleList = ref<Array<ArticleItemResType>>();
recentArticleList.value = (await getRecentUpdate()).data.list;
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  z-index: 5;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  font-size: 13px;

  .content {
    display: flex;
    padding: 49px 0;

    .item {
      width: 33.3333%;
      padding: 0 30px;

      @media (max-width: 1024px) {
        & {
          width: 50%;
          padding: 0 30px;
        }
      }

      @media (max-width: 768px) {
        & {
          width: 100%;
          padding: 0 30px;
        }
      }

      .title {
        font-size: 15px;
        padding: 0 0 10px 0;
        text-decoration: none;
      }
    }

    .about {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .copyright {
        padding: 30px 0;
        color: #999;

        p {
          padding: 0 0 10px 0;

          a {
            color: #999;
          }

          &:first-child {
            display: flex;
            align-items: center;
          }

          .heart {
            width: 8px;
            height: 8px;
            background-color: red;
            position: relative;
            display: block;
            margin: 0px 6px;
            animation: size 0.8s infinite;
            animation-direction: alternate;
          }

          .heart::before,
          .heart::after {
            content: "";
            width: 8px;
            height: 8px;
            background-color: red;
            position: absolute;
            border-radius: 50%;
          }

          .heart::before {
            left: -4px;
          }

          .heart::after {
            top: -4px;
          }

          @keyframes size {
            0% {
              transform: scale(0.95) rotate(45deg);
            }

            100% {
              transform: scale(1) rotate(45deg);
            }
          }
        }
      }

      .contact {
        display: flex;

        li {
          margin: 0 20px 0 0;

          a {
            // background-position: top left;
            background-repeat: no-repeat;
            background-size: cover;
            display: block;
            opacity: .8;
            text-indent: -9999px;
            transition: opacity .2s linear;
            width: 25px;
            height: 25px;

            &:hover {
              opacity: 1;
            }
          }

          &:nth-child(1) a {
            background-image: url(../assets/img/github.svg);
          }

          &:nth-child(2) a {
            background-image: url(../assets/img/email.svg);
          }

          &:nth-child(3) a {
            background-image: url(../assets/img/weibo.svg);
          }

          &:nth-child(4) a {
            background-image: url(../assets/img/weixin.svg);
          }

          &:nth-child(5) a {
            background-image: url(../assets/img/zhihu.svg);
          }
        }
      }
    }

    .recentPost {
      @media (max-width: 1024px) {
        & {
          display: none;
        }
      }

      ul {
        li {
          font-size: 13px;
          line-height: 25px;
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #767676;
        }
      }
    }

    .musicBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (max-width: 768px) {
        & {
          display: none;
        }
      }

      .musicContent {
        .musicTitle {
          font-size: 15px;
          padding-bottom: 10px;
        }

        .control {
          display: flex;
          padding: 0 0 30px 0;

          li {
            margin: 0 20px 0 0;

            a {
              background-repeat: no-repeat;
              background-size: cover;
              display: block;
              opacity: .8;
              text-indent: -9999px;
              transition: opacity .2s linear;
              width: 18px;
              height: 18px;

              &:hover {
                opacity: 1;
              }
            }

            &:nth-child(1) a {
              background-image: url(../assets/img/last.svg);
            }

            &:nth-child(2) a {
              background-image: url(../assets/img/stop.svg);
            }

            &:nth-child(3) a {
              background-image: url(../assets/img/next.svg);
            }
          }
        }

        .progress {
          display: flex;
          align-items: center;

          .line {
            width: 50%;
            height: 2px;
            display: block;
            background: #808080;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              height: 16px;
              width: 2px;
              top: -7px;
              background-color: red;
              transform: translateX(30px);
            }
          }

          .time {
            padding-left: 20px;
          }

        }
      }
    }
  }

}
</style>
