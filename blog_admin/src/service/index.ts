/*
 * @Author: sun
 * @Date: 2022-11-01 12:32:53
 * @LastEditTime: 2022-11-30 22:11:34
 * @Description: Do not edit
 */
import cache from "@/utils/cache";
import sjRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const sjRequestObj = new sjRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = cache.getCache("token");
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    requestInterceptorCatch: (error) => {
      return error;
    },
    responseInterceptor: (config) => {
      return config;
    },
  },
});
export default sjRequestObj;
