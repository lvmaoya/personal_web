/// <reference types="vite/client" />
declare module "*.vue" {
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
declare module "@kangc/v-md-editor";
declare module "@kangc/v-md-editor/lib/theme/vuepress.js";
declare module "prismjs";
declare module "vue-animate-number";
declare module "@kangc/v-md-editor/lib/preview";
declare module "@kangc/v-md-editor/lib/theme/github";
declare module "highlight.js/lib/core";
declare module "highlight.js/lib/languages/json";
declare module "highlight.js/lib/languages/css";
declare module "highlight.js/lib/languages/less";
declare module "highlight.js/lib/languages/javascript";
declare module "highlight.js/lib/languages/vbscript-html";
