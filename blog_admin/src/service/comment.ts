/*
 * @Author: sun
 * @Date: 2022-11-26 20:20:18
 * @LastEditTime: 2022-11-30 16:10:11
 * @Description: Do not edit
 */
import { haveAuthority } from "@/utils/authority";
import sjRequestObj from ".";
export interface IDataType<T = any> {
  code: Number;
  message: String;
  data: T;
}
export interface getCommentResType<T> {
  total: number;
  list: Array<T>;
}
export interface commentType {
  commentary_id: number;
  article_id: number;
  user_name: String;

  content: String;

  comment_place: String;
  created_time: String;
  prefer_num: number;
  comment_type: number;
  is_checked: number;
}
export interface limitConfigType {
  currentPage: number;
  pageSize: number;
}
export interface deleteCommentConfigType {
  commentary_id: number;
}
export interface hiddenCommentConfigType {
  commentary_id: number;
  is_checked: number;
}
export function deleteComment(config: deleteCommentConfigType) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.delete<IDataType<object>>({
    url: "/deleteComment",
    data: config,
  });
}
export function hiddenComment(config: hiddenCommentConfigType) {
  if (!haveAuthority()) {
    return;
  }
  return sjRequestObj.patch<IDataType<object>>({
    url: "/hiddenComment",
    data: config,
  });
}
export function getComment(config: limitConfigType) {
  return sjRequestObj.post<IDataType<getCommentResType<commentType>>>({
    url: "/getComment",
    data: config,
  });
}
