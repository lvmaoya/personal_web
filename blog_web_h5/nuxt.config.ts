/*
 * @Author: sun
 * @Date: 2022-12-23 21:10:05
 * @LastEditTime: 2023-01-07 17:20:53
 * @Description: Do not edit
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/normalize.css", "~/assets/css/reset.css", "~/assets/css/flex.css"],
  app: {
    buildAssetsDir: "/hello/",
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        { name: "description", content: "书写记录日常所思所感，技术成长" },
        {
          name: "keywords",
          content: "个人博客,个人博客搭建,nuxt3,typescript,vue3,nodejs",
        },
        {
          "http-equiv": "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
      style: [],
      script: [
        { src: "/cat/l2dwidget-client.js", async: true },
        { src: "/icon/iconfont.js", async: true },
        // { src: "/flexible/index.js" },
      ],
      noscript: [{ children: "Javascript is required" }],
      title: "lvmaoya",
    },
    rootId: "SJX",
    keepalive: true,
  },
  plugins: [{ src: "~/plugins/editor.client.js", mode: "client" }],
});
