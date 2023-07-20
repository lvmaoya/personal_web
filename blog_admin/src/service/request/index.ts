import router from "@/router";
import cache from "@/utils/cache";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
// import { JSEncrypt } from "JSEncrypt";

import axios from "axios";
import { ElLoading, ElMessage } from "element-plus";
import type { LoadingInstance } from "element-plus/es/components/loading/src/loading";
interface sjRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;

  responseInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  responseInterceptorCatch?: (error: any) => any;
}
interface sjRequestConfig extends AxiosRequestConfig {
  interceptors?: sjRequestInterceptors;
  showLoading?: boolean;
}
const DEFAULT_LOADING = true;

class sjRequest {
  instance: AxiosInstance;
  interceptors?: sjRequestInterceptors;
  loading?: LoadingInstance;
  showLoading: boolean;
  constructor(config: sjRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    // 给每个实例添加自己的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor
    );
    // 全局拦截
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading === true) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在加载中",
            background: "rgba(0,0,0,0.1)",
          });
        }
        return config;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();
        if (res.data.returnCode === "-1001") {
          console.log("请求失败，错误信息");
        } else {
          return res.data;
        }
      },
      (error) => {
        this.loading?.close();

        const _token = cache.getCache("_token");
        switch (error.response.status) {
          // 未登录
          case 401:
            if (_token) {
              break;
            }
            ElMessage({
              showClose: true,
              message: "请先登录！",
              duration: 10000,
              type: "error",
            });
            setTimeout(() => {
              router.replace({
                name: "login",
                query: { redirect: router.currentRoute.value.fullPath },
              });
            }, 2000);
            break;
          // 登录过期
          case 403:
            // ElMessage({
            //   showClose: true,
            //   message: "登录过期，请重新登录！",
            //   duration: 10000,
            //   type: "error",
            // });

            cache.deleteCache("token");
            setTimeout(() => {
              router.replace({
                name: "login",
                query: { redirect: router.currentRoute.value.fullPath },
              });
            }, 2000);
            break;
          case 404:
            ElMessage({
              showClose: true,
              message: "网络请求不存在",
              duration: 10000,
              type: "error",
            });
            setTimeout(() => {
              router.replace({
                name: "notFound",
              });
            }, 2000);
            break;
          default:
            ElMessage({
              message: error.response.data.message || "请求失败！",
              duration: 150000,
              type: "error",
              showClose: true,
            });
        }
        return error;
      }
    );
  }

  request<T = any>(config: sjRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          this.showLoading = DEFAULT_LOADING;
          resolve(res);
        })
        .catch((error) => {
          this.showLoading = DEFAULT_LOADING;
          reject(error);
          // return error;
        });
    });
  }
  get<T = any>(config: sjRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T = any>(config: sjRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T = any>(config: sjRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: sjRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}
export default sjRequest;
