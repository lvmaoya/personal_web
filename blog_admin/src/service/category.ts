/*
 * @Author: sun
 * @Date: 2022-11-24 14:47:24
 * @LastEditTime: 2022-11-30 16:09:32
 * @Description: Do not edit
 */
import { haveAuthority } from "@/utils/authority";
import sjRequestObj from ".";
export interface IDataType<T = any> {
  code: Number;
  message: String;
  data: T;
}
export interface categoryItemType {
  category_id: number;
  category_name: string;
  father_category_name: number;
}
export interface cagetgoryDataType<T> {
  categoryList: Array<T>;
}
export interface deleteCategoryConfigType {
  id: number;
}
interface addCategoryConfigType {
  category_name: string;
  father_category_name: number;
}
export interface updateCategoryConfigType {
  id: number;
  category_name: string;
}
export interface checkHaveArticleResType {
  havaArticle: boolean;
}
// 获取文章类别,所有的类别
export function getCategoryListData() {
  return sjRequestObj.get<IDataType<cagetgoryDataType<categoryItemType>>>({
    url: "/getAllCategoryItem",
  });
}
// 删除文章类别,返回成功或失败
export function deleteCategory(id: deleteCategoryConfigType) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.delete<IDataType<Object>>({
    url: "/deleteCategory",
    data: id,
  });
}

// 更改文章类别名称,返回成功或失败
export function updateCategory(config: updateCategoryConfigType) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.patch<IDataType<Object>>({
    url: "/updateCategory",
    data: config,
  });
}
// 增加文章类别，返回成功或失败
export function addCategory(config: addCategoryConfigType) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.post<IDataType<Object>>({
    url: "/addCategory",
    data: config,
  });
}
// 判断该类别下是否还存在文章，以便删除
export function checkHaveArticle(id: deleteCategoryConfigType) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.post<IDataType<checkHaveArticleResType>>({
    url: "/checkHaveArticle",
    data: id,
  });
}
