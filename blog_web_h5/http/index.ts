/*
 * @Author: sun
 * @Date: 2022-12-24 22:02:05
 * @LastEditTime: 2023-01-03 20:36:07
 * @Description: Do not edit
 */
// 封装请求

import { _AsyncData } from "nuxt/dist/app/composables/asyncData";

// 指定后端返回的基本数据类型
export interface ResponseConfig<T> {
  code: number;
  message: string;
  data: T;
}

import  baseURL  from "./base-config";
const fetch = (url: string, options?: any): Promise<any> => {
  const { $router } = useNuxtApp();
  const reqUrl = baseURL + url;
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, { ...options })
      .then(({ data, error }: _AsyncData<any, any>) => {
        if (error.value) {
          reject(error.value);
          return;
        }
        const value = data.value;
        const result = value && value.data;

        if (!result || value.code == 1) {
          // 这里处理错误回调
          resolve(result);
          $router.replace("/NotFound");
        } else {
          resolve(value);
        }
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export default new (class Http {
  get<T = any>(url: string, params?: any): Promise<T> {
    return fetch(url, { method: "get", params });
  }

  post<T = any>(url: string, body?: any): Promise<T> {
    return fetch(url, { method: "post", body });
  }

  put<T = any>(url: string, body?: any): Promise<T> {
    return fetch(url, { method: "put", body });
  }

  delete<T = any>(url: string, body?: any): Promise<T> {
    return fetch(url, { method: "delete", body });
  }
})();
