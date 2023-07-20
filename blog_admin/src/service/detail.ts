import sjRequestObj from ".";
// 这里的config只是查询时的参数
export interface detailConfigType {
  id: string;
}
export function getArticleDetail(config: detailConfigType) {
  return sjRequestObj.get({ url: "/getBackDetail?id=" + config.id });
}
