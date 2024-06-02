/*
 * @Author: sun
 * @Date: 2022-10-23 22:00:23
 * @LastEditTime: 2023-01-04 10:15:48
 * @Description: Do not edit
 */
const express = require("express");
const router = require("./router");
const errorHandler = require("./middleware/error-handler");
const cors = require("cors");
const app = express();
// 配置请求体为json格式
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// const https = require("https");
const http = require("http");
const fs = require("fs");

// Configuare https
const httpsOption = {
  key: fs.readFileSync("./https/privkey.key"),
  cert: fs.readFileSync("./https/fullchain.pem"),
};

// 跨域访问
app.use(cors());
// 静态资源托管
app.use(express.static("./assets"));
// 挂载路由
app.use(router);
// 处理错误中间件
app.use(errorHandler());

// https需要补充相应pem文件
// const server = https.createServer(httpsOption, app);
const server = http.createServer(app);
server.listen(3002, () => {
  console.log("server is running");
});
// server.listen(443,function(){
// console.log('app is running at port 80');
// })
