import { haveAuthority } from "@/utils/authority";
import sjRequestObj from ".";
export interface IDataType<T = any> {
  code: Number;
  message: String;
  data: T;
}
export interface articleDataType<T> {
  total: number;
  list: Array<T>;
}
interface getArticleConfigType {
  pageSize: Number;
  currentPage: Number;
  status?: Number;
}
export interface articleType {
  article_id: String;
  title: String;
  description?: String;
  category_id?: String;
  father_category_id?: Number;
  cover_image?: String;
  pageview?: Number;
  prefer_num?: Number;
  is_privacy?: Number;

  status: Number;
  deleted_time?: String;
  published_time?: String;
  draft_time?: String;
  author?: String;
}
export interface deleteArticleConfigType {
  id: number;
}
export interface getArticleDataConfigType {
  id: number;
}
export interface getArticleResType {
  article_id: number;
  title: string;
  author: string;
  category: Array<number>;
  cover_image: string;
  description: string;
  is_privacy: boolean;
  status: number;
  content: string;
  published_time: string;
  draft_time: string;
}
export interface changeArticleStatusConfigType {
  id: number;
  toStatus: Number;
}
export interface uploadImgResType {
  url: string;
}
interface searchArticleConfigType {
  title: String;
  keywords: String;
  category: String;
  published_time: String;
  status: String;

  pageSize: Number;
  currentPage: Number;
}
interface addArticleConfig {
  title: String;
  author: String;
  cover_image: String;
  category: Array<string>;
  content: String;
  description: String;
  status: Number;
  is_privacy: Number;
  draft_time?: String;
  published_time?: String;
}
export interface categoryDataType<T> {
  categoryList: Array<T>;
}
export interface uploadImageRes {
  url: string;
}

// 获取文章列表
export function getArticleListData(getArticleConfig: getArticleConfigType) {
  return sjRequestObj.post<IDataType<articleDataType<articleType>>>({
    url: "/getArticleList",
    data: getArticleConfig,
  });
}
// 彻底删除
export function deleteArticle(config: deleteArticleConfigType) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.delete<IDataType<Object>>({
    url: "/deleteArticle",
    data: config,
  });
}
// 假删除文章
export function changeArticleStatus(config: changeArticleStatusConfigType) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.patch<IDataType<Object>>({
    url: "/changeArticleStatus",
    data: config,
  });
}
// 搜索文章
export function searchArticle(config: searchArticleConfigType) {
  return sjRequestObj.post<IDataType<articleDataType<articleType>>>({
    url: "/searchBackArticle",
    data: config,
  });
}
// 获取到上传到七牛云的token
export function getUploadToken() {
  return sjRequestObj.get<IDataType<string>>({
    url: "/uploadToken",
  });
}
// 增加文章
export function addArticle(config: addArticleConfig) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.post<IDataType<String>>({
    url: "/addArticle",
    data: config,
  });
}
// 获取文章类别
export function getCategoryData() {
  return sjRequestObj.get<IDataType<categoryDataType<Object>>>({
    url: "/getCategoryListData",
  });
}
// 上传图片
export function uploadImage(file: any) {
  return sjRequestObj.post<IDataType<uploadImageRes>>({
    url: "/uploadImg",
    data: file,
  });
}
// 发布更新
export function updateArticle(config: addArticleConfig) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.post<IDataType<String>>({
    url: "/updateArticle",
    data: config,
  });
}
// 获取文章数据用于回显
export function getArticleData(config: getArticleDataConfigType) {
  return sjRequestObj.post<IDataType<getArticleResType>>({
    url: "/getArticleData",
    data: config,
  });
}
