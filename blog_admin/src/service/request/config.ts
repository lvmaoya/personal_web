/*
 * @Author: sun
 * @Date: 2022-11-01 12:36:23
 * @LastEditTime: 2023-01-04 16:29:43
 * @Description: Do not edit
 */
let BASE_URL: string;
const TIME_OUT = 10000;

if (import.meta.env.MODE === "development") {
  // BASE_URL = "http://127.0.0.1:4523/m1/1770943-0-default";
  BASE_URL = "http://localhost:3002";
} else if (import.meta.env.MODE === "production") {
  BASE_URL = "https://sunjianxiang.cn:3001";
} else {
  BASE_URL = "http://sunjianxiang.cn:3000";
}
export { BASE_URL, TIME_OUT };
