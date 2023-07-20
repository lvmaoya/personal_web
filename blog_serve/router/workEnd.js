/*
 * @Author: sun
 * @Date: 2022-11-11 15:21:02
 * @LastEditTime: 2022-12-20 19:38:37
 * @Description: Do not edit
 */
const express = require("express");
const router = express.Router();
const workEndCtrl = require("../controller/workEnd");
const { auth } = require("../middleware/auth");

// 后台
// 获取登录界面背景（已废弃）
router.get("/getLoginBackground", workEndCtrl.getLoginBackground);
// 获取验证码图形
router.get("/getAuthCode", workEndCtrl.getAuthCode);
// 登录
router.post("/login", workEndCtrl.login);
// 获取静态访问量，点赞量等
router.get("/getSystemStatistics", workEndCtrl.getSystemStatistics);
// 获取饼图数据
router.get("/getPieData", workEndCtrl.getPieData);
// 获取文章列表
router.post("/getArticleList", workEndCtrl.getArticleList);
// 后台获取详情页数据
router.get("/getBackDetail", workEndCtrl.getArticleDetail);
// 获取文章类别（下拉菜单用）
router.get("/getCategoryListData", workEndCtrl.getCategory);
// 删除文章
router.delete("/deleteArticle", auth, workEndCtrl.deleteArticle);
// 更改文章状态，（软删除）
router.patch("/changeArticleStatus", auth, workEndCtrl.changeArticleStatus);
// 搜索文章
router.post("/searchBackArticle", workEndCtrl.searchBackArticle);
// 上传图片
// router.post("/uploadImg", auth, workEndCtrl.uploadImg);
router.post("/uploadImg", auth, workEndCtrl.uploadQiqiu);
// 新增文章
router.post("/addArticle", auth, workEndCtrl.addArticle);
// 获取用户信息
router.post("/getUserInfo", auth, workEndCtrl.getUserInfo);
// 获取文章类别（类别管理用）
router.get("/getAllCategoryItem", workEndCtrl.getAllCategoryItem);
// 判断一个类别下是否还存在文章以便删除
router.post("/checkHaveArticle", auth, workEndCtrl.checkHaveArticle);
// 删除文章类别
router.delete("/deleteCategory", auth, workEndCtrl.deleteCategory);
// 增加文章类别
router.post("/addCategory", auth, workEndCtrl.addCategory);
// 更改文章类别名称
router.patch("/updateCategory", auth, workEndCtrl.updateCategory);
// 删除文章评论
router.delete("/deleteComment", auth, workEndCtrl.deleteComment);
// 增加文章评论
router.post("/getComment", workEndCtrl.getComment);
// 更改文章评论
router.patch("/hiddenComment", auth, workEndCtrl.hiddenComment);
// 获取文章列表跳转详情
router.post("/getArticleData", workEndCtrl.getArticleData);
// 获取文章列表跳转详情
router.post("/updateArticle", workEndCtrl.updateArticle);
// 获取直线统计图数据
router.get("/getLineData", workEndCtrl.getLineData);

module.exports = router;
