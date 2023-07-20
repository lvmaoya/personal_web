/*
 * @Author: sun
 * @Date: 2022-10-24 13:47:08
 * @LastEditTime: 2022-12-13 12:13:56
 * @Description: Do not edit
 */
const db = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "personal_web",
  charset: "UTF8",
  multipleStatements: true,
  connectionLimit: 20,
};
// 一个唯一值
const jwtSecret = "1CAA8729-49C2-3C99-AC3D-34AC4AA28CD9";
exports.db = db;
exports.jwtSecret = jwtSecret;
