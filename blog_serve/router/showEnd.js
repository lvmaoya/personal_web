/*
 * @Author: sun
 * @Date: 2022-10-24 13:22:39
 * @LastEditTime: 2022-12-11 23:55:34
 * @Description: Do not edit
 */
const express = require("express");
const router = express.Router();
const showEndCtrl = require("../controller/showEnd");
// 前台
router.get("/getIntersetThingList", showEndCtrl.getIntersetThingList);
router.get("/getDetail/:id?", showEndCtrl.getDetail);
// 获取点赞和阅读量
router.get("/getDianZanNum/:id?", showEndCtrl.getDianZanNum);
router.post("/changeABackPreferNum", showEndCtrl.changeABackPreferNum);

router.get("/getPingLun/:id?", showEndCtrl.getPingLun);

router.post("/getArticle", showEndCtrl.getTechArticle);
router.post("/getEssay", showEndCtrl.getEssay);
router.post("/searchArticle", showEndCtrl.searchArticle);
router.post("/searchBlog", showEndCtrl.searchBlog);

// 最近更新
router.post("/getRecentArticle", showEndCtrl.getRecentArticle);
router.post("/getHotArticle", showEndCtrl.getHotArticle);
router.post("/getArticleByCategory", showEndCtrl.getArticleByCategory);

router.get("/getArticleCategory/:id?", showEndCtrl.getArticleCategory);
router.get("/getUserInfo", showEndCtrl.getUserInfo);
// 改变文章浏览量
router.post("/changePVData", showEndCtrl.changePVData);
// 提交评论
router.post("/commitComment", showEndCtrl.commitComment);

module.exports = router;
