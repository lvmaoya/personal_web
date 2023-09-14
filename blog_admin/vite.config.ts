import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   port: 4000, // 设置服务启动端口号
  //   open: true, // 设置服务启动时是否自动打开浏览器
  //   cors: true, // 允许跨域

  //   // 设置代理，根据我们项目实际情况配置
  //   proxy: {
  //     "/apiTest": {
  //       //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
  //       target: "http://xxx/api",
  //       changeOrigin: true, //是否跨域
  //       rewrite: (path) => path.replace("/apiTest", ""),
  //     },
  //   },
  // },
});
