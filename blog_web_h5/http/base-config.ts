/*
 * @Author: sun
 * @Date: 2022-12-27 09:19:39
 * @LastEditTime: 2023-01-04 08:55:32
 * @Description: Do not edit
 */
let baseURL: string;
if (process.env.NODE_ENV === "development") {
  // BASE_URL = "	http://127.0.0.1:4523/m1/1770943-0-default";
  baseURL = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  baseURL = "https://sunjianxiang.cn:3001";
} else {
  baseURL = "https://sunjianxiang.cn:3000";
}
export default baseURL;
