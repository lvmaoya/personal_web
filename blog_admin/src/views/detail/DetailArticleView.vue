<template>
  <div class="detailArticle">
    <header>
      <div class="navbar">
        <LogoView></LogoView>
        <nav class="menu">
          <ul>
            <li v-for="(item, index) in navList" :key="index">
              <a href="javascript:;">{{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="w">
      <v-md-preview :text="detailArticle"></v-md-preview>
    </div>
  </div>
  <div class="footer">
    <div class="footerLogo"><logo-view></logo-view></div>
    <div class="copyright">
      <p>Copyright © 2022 lvmaoya All rights reserved.</p>
      <br />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { getArticleDetail } from "@/service/detail";
import LogoView from "@/components/logo/LogoView.vue";
import { ref } from "vue";

const route = useRoute();
const navList = ["Home", "Work", "Blog", "About"];
const articleId = route.query.id?.toString() as string;
let detailArticle = ref("");

const getArticleDetailData = async (params: string) => {
  const detailArticleData = await getArticleDetail({ id: params });
  detailArticle.value = detailArticleData.data.content;
  console.log(detailArticle.value);
};
getArticleDetailData(articleId);
</script>

<style lang="scss" scoped>
header {
  * {
    padding: 0;
    margin: 0;
  }
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 518;
  .navbar {
    width: 80%;
    padding: 1.5em 0;
    margin: 0 auto;
    display: flex;

    nav {
      margin-left: auto;
      ul {
        display: flex;
        li {
          margin-left: 1.8em;
          a {
            font-size: 1em;
          }
        }
      }
    }
  }
  background-color: #fff;
  border-bottom: 1.2px solid rgb(189, 188, 188);
  .isActive {
    color: black;
  }
}
.footer {
  position: sticky;
  z-index: 0;
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
  .copyright {
    font-size: 0.75em;
    text-align: center;
    padding: 2em 0 2em 0;
    a {
      cursor: pointer;
    }
  }
}
</style>
