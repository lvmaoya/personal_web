/*
 * @Author: sun
 * @Date: 2022-10-24 13:48:53
 * @LastEditTime: 2022-12-13 12:15:48
 * @Description: Do not edit
 */
const mysql = require("mysql");
const { db } = require("../config/config.default");
// 创建数据库连接
const connection = mysql.createPool(db);
connection.getConnection(function (err) {
  // 连接出错的处理
  if (err) {
    console.error("数据库连接失败:" + err.stack);
    return;
  }
  console.log("数据库连接成功");
});

module.exports.connection = connection;
