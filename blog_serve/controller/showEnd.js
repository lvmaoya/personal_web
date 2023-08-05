/*
 * @Author: sun
 * @Date: 2022-10-24 13:29:21
 * @LastEditTime: 2023-01-03 14:05:23
 * @Description: Do not edit
 */
const articleModal = require("../modal/showEnd");
exports.getIntersetThingList = async (req, res, next) => {
  try {
    // 这里有可能数据库查询时,有可能是错误，空数组，数组
    const listData = await articleModal.getIntersetThingDB(req, res);
    if (listData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: listData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: listData,
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getDetail = async (req, res, next) => {
  try {
    const detailData = await articleModal.getDetailDB(req, res);
    if (detailData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: detailData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: detailData,
      });
    }
  } catch (error) {
    next(error);
  }
};
// 获取文章点赞量和阅读量
exports.getDianZanNum = async (req, res, next) => {
  try {
    const dianZanNum = await articleModal.getDianZanNumDB(req, res);
    if (dianZanNum.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: dianZanNum,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: { dianZanNum: dianZanNum.prefer_num, pageview: dianZanNum.pageview },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.changeABackPreferNum = async (req, res, next) => {
  try {
    const changeABackPreferData = await articleModal.changeABackPreferNumDB(req, res);
    if (changeABackPreferData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: dianZanNum,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: { message: "success", dianZanNum: req.body.prefer_num },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getPingLun = async (req, res, next) => {
  try {
    const pingLunData = await articleModal.getPingLunDB(req, res);
    if (pingLunData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: pingLunData,
      });
    } else {
      if (pingLunData.list) {
        for (let i of pingLunData.list) {
          if (i.child_comment_id == 0) {
          } else {
          }
        }
      }
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: pingLunData.length,
          list: pingLunData,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getTechArticle = async (req, res, next) => {
  try {
    const dataList = await articleModal.getArticleDB(req, res, 2);
    if (dataList.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: dataList,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: dataList[1][0].total,
          list: dataList[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getEssay = async (req, res, next) => {
  try {
    const dataList = await articleModal.getArticleDB(req, res, 3);
    if (dataList.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: dataList,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: dataList[1][0].total,
          list: dataList[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getRecentArticle = async (req, res, next) => {
  try {
    const dataList = await articleModal.getRecentArticleDB(req, res);
    if (dataList.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: dataList,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: dataList[1][0].total,
          list: dataList[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getRecentAll = async (req, res, next) => {
  try {
    const dataList = await articleModal.getRecentAllDB(req, res);
    if (dataList.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: dataList,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: 6,
          list: dataList,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getHotArticle = async (req, res, next) => {
  try {
    const dataList = await articleModal.getHotArticleDB(req, res);
    if (dataList.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: dataList,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: dataList[1][0].total,
          list: dataList[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getArticleByCategory = async (req, res, next) => {
  try {
    const dataList = await articleModal.getArticleByCategoryDB(req, res);
    if (dataList.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: dataList,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: dataList[1][0].total,
          list: dataList[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getArticleCategory = async (req, res, next) => {
  try {
    const categoryData = await articleModal.getArticleCategoryDB(req, res);
    if (categoryData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: categoryData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          categoryList: categoryData,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.searchArticle = async (req, res, next) => {
  try {
    const searchResultData = await articleModal.searchArticleDB(req, res);

    if (searchResultData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: searchResultData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: searchResultData[1][0].total,
          list: searchResultData[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.searchBlog = async (req, res, next) => {
  try {
    const searchResultData = await articleModal.searchBlogDB(req, res);

    if (searchResultData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: searchResultData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: searchResultData[1][0].total,
          list: searchResultData[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getUserInfo = async (req, res, next) => {
  try {
    const userData = await articleModal.getUserInfoDB(req, res);
    if (userData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: userData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: userData[0],
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.changePVData = async (req, res, next) => {
  try {
    const changePVDataResData = await articleModal.changePVDataDB(req, res);
    if (changePVDataResData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: changePVDataResData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: { message: "success" },
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.commitComment = async (req, res, next) => {
  try {
    const commitCommentData = await articleModal.commitCommentDB(req, res);
    if (commitCommentData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: commitCommentData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: commitCommentData,
      });
    }
  } catch (error) {
    next(error);
  }
};
