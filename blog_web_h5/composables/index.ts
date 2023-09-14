
import Http from "@/http/index";
// export const getIntersetThingList = () => {
//   return Http.get<any>("/getIntersetThingList");
// };
interface ResponseConfig<T> {
  code: number;
  message: string;
  data: T;
}
// 首页数据
export interface ThingType {
  article_id: number;
  cover_image: string;
  description: string;
  title: string;
}
export const getIntersetThingList = () => {
  return Http.get<ResponseConfig<Array<ThingType>>>("/getIntersetThingList");
};
export function getRecentUpdate() {
  return Http.get<ResponseConfig<ArticleListResType>>("/getRecentUpdate");
}
// 技术文章页
export interface GetArticleListConfig {
  currentPage: number;
  size: number;
}
export interface ArticleItemResType {
  article_id: number;
  category_id: number;
  cover_image: string;
  description: string;
  title: string;
  pageview: number;
  prefer_num: number;
  published_time: string;
}
export interface ArticleListResType {
  total: number;
  list: Array<ArticleItemResType>;
}
export function getArticleList(config: GetArticleListConfig) {
  return Http.post<ResponseConfig<ArticleListResType>>("/getArticle", config);
}

// // 如果以后随笔文章想要分类功能可以传入参数essay
// export function getArticleCategoryList(config) {
//   return Http.get({ url: "/getArticleCategory?category=" + config });
// }
// export function searchArticle(config) {
//   return Http.post(config, { url: "/searchArticle" });
// }

// export function getRecentArticleList(config) {
//   return Http.post(config, { url: "/getRecentArticle" });
// }

// export function getHotArticleList(config) {
//   return Http.post(config, { url: "/getHotArticle" });
// }
// export function getArticleByCategoryData(config) {
//   return Http.post(config, { url: "/getArticleByCategory" });
// }

//随笔
export function getBlogList(config: GetArticleListConfig) {
  return Http.post<ResponseConfig<ArticleListResType>>("/getEssay", config);
}
// 用户信息
export interface userInfoType {
  introduce: string;
}
export function getUserInfo() {
  return Http.get<ResponseConfig<userInfoType>>("/getUserInfo");
}
// 详情页数据
export interface GetArticleConfigType {
  id: number;
}
export interface ArticleResType {
  article_id: number;
  content: string;
  title: string;
  published_time: string;
  pageview: number;
  description?: "";
}

export interface DianZanResType {
  dianZanNum: number;
  pageview: number;
}
export interface ChangePreferNumConfig {
  id: number;
  prefer_num: number;
}
export interface PinglunItemType {
  commentary_id: number;
  user_name: string;
  avatar: number;
  comment_type: number;
  to_name: number;
  created_time: string;
  content: string;
}
export interface PinglunResType<T> {
  total: number;
  list: Array<T>;
}
export function getArticleDetail(config: GetArticleConfigType) {
  return Http.get<ResponseConfig<ArticleResType>>("/getDetail", config);
}
export function getDianZanNum(config: GetArticleConfigType) {
  return Http.get<ResponseConfig<DianZanResType>>("/getDianZanNum", config);
}
export function changeABackPreferNum(config: ChangePreferNumConfig) {
  return Http.post<ResponseConfig<object>>("/changeABackPreferNum", config);
}
export function changePVData(config: GetArticleConfigType) {
  return Http.post<ResponseConfig<object>>("/changePVData", config);
}

export function getPingLun(config: GetArticleConfigType) {
  return Http.get<ResponseConfig<PinglunResType<PinglunItemType>>>("/getPingLun", config);
}

export interface CommentConfigType {
  articleId: number;
  to_id: number;
  to_name: string;
  userName: string;
  avatar: number;
  content: string;
  created_time: string;
  comment_type: number;
  email?:string;
  site?:string
}
export function commitComment(config: CommentConfigType) {
  return Http.post<ResponseConfig<object>>("/commitComment", config);
}
export function getRecentArticleList(config: GetArticleListConfig) {
  return Http.post<ResponseConfig<ArticleListResType>>("/getRecentArticle", config);
}
export function getHotArticleList(config: GetArticleListConfig) {
  return Http.post<ResponseConfig<ArticleListResType>>("/getHotArticle", config);
}
export interface CategoryItemType {
  category_id: number;
  category_name: string;
  count: number;
}
export interface CategoryDataType<T> {
  categoryList: Array<T>;
}
export function getArticleCategoryList(config: object) {
  return Http.get<ResponseConfig<CategoryDataType<CategoryItemType>>>("/getArticleCategory", config);
}

export function searchArticle(config: object) {
  return Http.post<ResponseConfig<ArticleListResType>>("/searchArticle", config);
}
export function searchBlog(config: object) {
  return Http.post<ResponseConfig<ArticleListResType>>("/searchBlog", config);
}
export interface searchConfigType {
  searchData: string;
  currentPage?: number;
  size?: number;
}
export function getArticleByCategoryData(config: object) {
  return Http.post<ResponseConfig<ArticleListResType>>("/getArticleByCategory", config);
}
