/*
 * @Author: sun
 * @Date: 2022-12-30 10:54:55
 * @LastEditTime: 2023-01-06 21:01:26
 * @Description: Do not edit
 *
 */
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
export default defineNuxtPlugin(() => {
  useNuxtApp().vueApp.use(VMdPreview);
});
