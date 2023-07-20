/*
 * @Author: sun
 * @Date: 2022-10-28 20:49:12
 * @LastEditTime: 2023-02-17 09:17:37
 * @Description: Do not edit
 */
import { createApp } from "vue";
// element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// v-md-editor
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

// v-md-editor
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
// 引入主题
import githubTheme from "@kangc/v-md-editor/lib/theme/github";
import "@kangc/v-md-editor/lib/theme/style/github.css";
// highlightjs 核心代码
import hljs from "highlight.js/lib/core";
// 按需引入语言包

import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import less from "highlight.js/lib/languages/less";
import javascript from "highlight.js/lib/languages/javascript";
import vbscriptHtml from "highlight.js/lib/languages/vbscript-html";
hljs.registerLanguage("json", json);
hljs.registerLanguage("css", css);
hljs.registerLanguage("less", less);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("vbscriptHtml", vbscriptHtml);
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

import App from "./App.vue";
import router from "./router";

import "@/assets/css/reset.css";
// animate动画
import "animate.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus);

app.use(VueMarkdownEditor);
app.use(VMdPreview);

app.use(router);

app.mount("#app");
