// 封装请求

import { _AsyncData } from "nuxt/dist/app/composables/asyncData";

// 指定后端返回的基本数据类型
export interface ResponseConfig<T> {
  code: number;
  message: string;
  data: T;
}
let loadingCount = 0;

import baseURL from "./base-config";
// import { showLoading, hideLoading } from "~~/loading";
const fetch = (url: string, options?: any): Promise<any> => {
  const { $router } = useNuxtApp();
  loadingCount++;
  let reqUrl = "";
  if (/^(ftp|http|https):\/\/[^ "]+$/.test(url)) {
    reqUrl = url;
  } else {
    reqUrl = baseURL + url;
  }
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, {
      onRequest({ options }) {
        // showLoading();
      },
      onResponse({ response }) {
        // hideLoading();
      },
      onResponseError({ response }) {},
      ...options,
    })
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
    return fetch(url, { method: "get", params, server: true });
  }

  post<T = any>(url: string, body?: any): Promise<T> {
    return fetch(url, { method: "post", body, server: true });
  }

  put<T = any>(url: string, body?: any): Promise<T> {
    return fetch(url, { method: "put", body, server: true });
  }

  delete<T = any>(url: string, body?: any): Promise<T> {
    return fetch(url, { method: "delete", body, server: true });
  }
})();
