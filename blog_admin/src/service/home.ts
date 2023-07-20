/*
 * @Author: sun
 * @Date: 2022-11-08 09:15:42
 * @LastEditTime: 2022-12-13 11:59:59
 * @Description: Do not edit
 */
import sjRequestObj from ".";
interface IDataType<T = any> {
  code: Number;
  message: String;
  data: T;
}
export interface systemStatisticsType {
  articleCount: Number;
  likeCount: Number;
  pvCount: Number;
  aboutSystem: String;
  comment: Number;
}
export interface pieDataType {
  list: Array<Object>;
}
export interface lineDataType {
  article: Array<number>;
  pageview: Array<number>;
  monthData: Array<string>;
}
export function getSystemStatistics() {
  return sjRequestObj.get<IDataType<systemStatisticsType>>({
    url: "/getSystemStatistics",
  });
}
export function getPieData() {
  return sjRequestObj.get<IDataType<pieDataType>>({
    url: "/getPieData",
  });
}
export function getLineData() {
  return sjRequestObj.get<IDataType<lineDataType>>({
    url: "/getLineData",
  });
}
