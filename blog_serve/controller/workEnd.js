const workEndModal = require("../modal/workEnd");
const qiniu = require("qiniu");
const multiparty = require("multiparty");
const fs = require("fs");
/**
 * @description: 获取登录页背景图，暂时没有用到
 * @return {*}
 */
exports.getLoginBackground = (req, res, next) => {
  const index = Math.floor(Math.random() * 4);
  const backgroundData = [
    { imgSrc: "http://localhost:3000/img/login-wallhaven.jpg", title: "plane" },
    { imgSrc: "http://localhost:3000/img/login-wallhaven1.jpg", title: "elephent" },
    { imgSrc: "http://localhost:3000/img/login-wallhaven2.jpg", title: "sun" },
    { imgSrc: "http://localhost:3000/img/wallhaven.jpg", title: "style" },
  ];
  res.status(200).json({
    code: 0,
    message: "success",
    data: backgroundData[index],
  });
};
/**
 * @description: 获取用户登录时的图片验证码
 * @return {*}
 */
exports.getAuthCode = (req, res, next) => {
  const svgCaptcha = require("svg-captcha");
  const captcha = svgCaptcha.create({
    // 翻转颜色
    inverse: false,
    // 字体大小
    fontSize: 36,
    // 噪声线条数
    noise: 3,
    height: 30,
  });
  res.status(200).json({
    code: 0,
    message: "success",
    data: {
      authCode: captcha.data,
      text: captcha.text,
    },
  });
};
/**
 * @description: 登录
 * @return {*}
 */
exports.login = async (req, res, next) => {
  try {
    const loginData = await workEndModal.login(req, res);
    if (loginData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: loginData,
      });
    } else if (loginData.message) {
      res.status(200).json({
        code: 1,
        message: "error",
        data: loginData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: loginData,
      });
    }
  } catch (error) {
    next(error);
  }
};
/**
 * @description: 获取首页静态数据
 * @return {*}
 */
exports.getSystemStatistics = async (req, res, next) => {
  try {
    const systemStatistics = await workEndModal.getSystemStatisticsDB(req, res);
    if (systemStatistics.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: systemStatistics,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          ...systemStatistics,
          aboutSystem:
            "welcome! 本系统始开发于2022年10月8日，封校期间。开发初衷是为了更好地练习与检验自己所学， 同时拥有一个属于自己的个人笔记库。项目前端主要技术：vue3，typescript，element-plus，vite等，服务端使用node，express，MySQL。 ",
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
/**
 * @description: 获取饼图数据
 * @return {*}
 */
exports.getPieData = async (req, res, next) => {
  try {
    const pieData = await workEndModal.getPieDataDB(req, res);
    if (pieData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: pieData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          list: pieData,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
/**
 * @description: 获取直线图数据
 * @return {*}
 */
exports.getLineData = async (req, res, next) => {
  try {
    const lineData = await workEndModal.getLineDataDB(req, res);
    if (lineData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: lineData,
      });
    } else {
      let pageview = [];
      let article = [];
      let monthData = [];
      let date = new Date();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      let full = year + "-" + (month < 10 ? "0" + month : month);
      for (let i = 0; i < 12; i++) {
        let j = lineData.find((item) => item.month == full);
        if (j) {
          pageview.push(j.pageview);
          article.push(j.count);
        } else {
          pageview.push(0);
          article.push(0);
        }
        monthData.push(month + "月");
        if (month > 1) {
          month -= 1;
          full = year + "-" + (month < 10 ? "0" + month : month);
        } else {
          month = 12;
          year -= 1;
          full = year + "-" + (month < 10 ? "0" + month : month);
        }
      }
      res.status(200).json({
        code: 0,
        message: "success",

        data: {
          pageview: pageview.reverse(),
          article: article.reverse(),
          monthData: monthData.reverse(),
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
/**
 * @description: 获取文章列表数据，
 * @return {*}私密公开都返回，状态为已发布
 */
exports.getArticleList = async (req, res, next) => {
  try {
    const articleListData = await workEndModal.getArticleListDB(req, res);
    if (articleListData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: articleListData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: articleListData[1][0].total,
          list: articleListData[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getArticleDetail = async (req, res, next) => {
  try {
    const detailData = await workEndModal.getDetailDB(req, res);
    if (detailData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: detailData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: detailData,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    const deleteArticleData = await workEndModal.deleteArticleDB(req, res);
    if (deleteArticleData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: deleteArticleData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: { message: "ok" },
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.changeArticleStatus = async (req, res, next) => {
  try {
    const changeArticleStatusData = await workEndModal.changeArticleStatusDB(req, res);
    if (changeArticleStatusData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: changeArticleStatusData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: { message: "ok" },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.searchBackArticle = async (req, res, next) => {
  try {
    const searchResultData = await workEndModal.searchArticleDB(req, res);
    if (searchResultData?.code) {
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
// 上传七牛云，（暂时不用）
// exports.uploadImgToken = async (req, res, next) => {
//   try {
//     var accessKey = "kcZ7Yit7IS89-ZGZ6_KhiFuXVyVa-Rp1PBXpoOdL";
//     var secretKey = "dAMRUy71Y0_5nYBaC8pYzIu4UYSKR4SHBUYLeeQq";
//     var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

//     var options = {
//       scope: "lvmaoya",
//     };
//     var putPolicy = new qiniu.rs.PutPolicy(options);
//     var uploadToken = putPolicy.uploadToken(mac);
//     if (!uploadToken) {
//       res.status(300).json({
//         code: 1,
//         message: "error",
//         data: { message: "获取token失败" },
//       });
//     } else {
//       res.status(200).json({
//         code: 0,
//         message: "success",
//         data: uploadToken,
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// };
exports.uploadQiqiu = (req, res, next) => {
  try {
    // 先将图片存到本地
    const form = new multiparty.Form({ uploadDir: "./assets/img" });
    let localFile = "";
    let key = "";
    form.parse(req, (error, fields, files) => {
      if (error) {
        // 返回错误
        return res.status(400).json({
          code: 1,
          message: "error",
          data: error,
        });
      } else {
        // 获取文件名称和路径
        let imgPath = files.avatar[0].path;

        let index = imgPath.indexOf("img");
        key = imgPath.substring(index + 4);
        localFile = "./assets/img/" + key;

        // 鉴权
        var accessKey = "kcZ7Yit7IS89-ZGZ6_KhiFuXVyVa-Rp1PBXpoOdL";
        var secretKey = "dAMRUy71Y0_5nYBaC8pYzIu4UYSKR4SHBUYLeeQq";
        var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

        var options = {
          scope: "lvmaoya",
        };
        var putPolicy = new qiniu.rs.PutPolicy(options);
        var uploadToken = putPolicy.uploadToken(mac);

        var formUploader = new qiniu.form_up.FormUploader();
        var putExtra = new qiniu.form_up.PutExtra();
        // 文件上传
        formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr, respBody, respInfo) {
          if (respErr) {
            return res.status(400).json({
              code: 1,
              message: "error",
              data: respErr,
            });
          }
          if (respInfo.statusCode == 200) {
            // 删除本地文件，返回数据
            fs.unlink(localFile, () => {
              return res.status(200).json({
                code: 0,
                message: "success",
                data: {
                  url: "http://qn.sunjianxiang.cn/" + key,
                },
              });
            });
          } else {
            return res.status(400).json({
              code: 1,
              message: "error",
              data: respBody,
            });
          }
        });
      }
    });
  } catch (error) {
    next(error);
  }
};
// exports.uploadImg = async (req, res, next) => {
//   try {
//     const form = new multiparty.Form({ uploadDir: "./assets/img" });
//     const callback = (error, fields, files) => {
//       if (error) {
//         return res.status(400).json({
//           code: 1,
//           message: "error",
//           data: error,
//         });
//       } else {
//         let imgPath = files.avatar[0].path;
//         let index = imgPath.indexOf("img");
//         imgPath = imgPath.substring(index + 4);
//         return res.status(200).json({
//           code: 0,
//           message: "success",
//           data: {
//             url: "http://sunjianxiang.cn:3000/img/" + imgPath,
//           },
//         });
//       }
//     };
//     form.parse(req, callback);
//   } catch (error) {
//     next(error);
//   }
// };
exports.addArticle = async (req, res, next) => {
  try {
    const addArticleData = await workEndModal.addArticleDB(req, res);
    if (addArticleData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: addArticleData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: addArticleData,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getUserInfo = async (req, res, next) => {
  try {
    const userInfoData = await workEndModal.getUserInfoDB(req, res);
    if (userInfoData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: userInfoData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: userInfoData,
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getCategory = async (req, res, next) => {
  try {
    const categoryData = await workEndModal.getCategoryDB(req, res);
    if (categoryData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: categoryData,
      });
    } else {
      let categoryList = [
        {
          label: "项目文章",
          value: 1,
        },
        {
          label: "技术文章",
          value: 2,
          children: [],
        },
        {
          label: "日常随笔",
          value: 3,
        },
      ];
      for (let i of categoryData) {
        if (i.father_category_name === 2) {
          categoryList[1].children.push({ label: i.category_name, value: i.category_id });
        }
      }
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          categoryList,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getAllCategoryItem = async (req, res, next) => {
  try {
    const categoryList = await workEndModal.getCategoryDB(req, res);
    if (categoryList.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: categoryList,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          categoryList,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.checkHaveArticle = async (req, res, next) => {
  try {
    const checkHaveArticleData = await workEndModal.checkHaveArticleDB(req, res);
    if (checkHaveArticleData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: checkHaveArticleData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          checkHaveArticleData,
          havaArticle: checkHaveArticleData.length == 0 ? false : true,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const deleteCategoryData = await workEndModal.deleteCategoryDB(req, res);
    if (deleteCategoryData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: deleteCategoryData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          deleteCategoryData,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.addCategory = async (req, res, next) => {
  try {
    const addCategoryData = await workEndModal.addCategoryDB(req, res);
    if (addCategoryData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: addCategoryData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: addCategoryData,
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.updateCategory = async (req, res, next) => {
  try {
    const updateCategoryData = await workEndModal.updateCategoryDB(req, res);
    if (updateCategoryData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: updateCategoryData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: updateCategoryData,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const deleteCommentData = await workEndModal.deleteCommentDB(req, res);
    if (deleteCommentData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: deleteCommentData,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          deleteCommentData,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getComment = async (req, res, next) => {
  try {
    const getCommentList = await workEndModal.getCommentListDB(req, res);
    if (getCommentList.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: getCommentList,
      });
    } else {
      res.status(200).json({
        code: 0,
        message: "success",
        data: {
          total: getCommentList[1][0].total,
          list: getCommentList[0],
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.hiddenComment = async (req, res, next) => {
  try {
    const hiddenCommentData = await workEndModal.hiddenCommentDataDB(req, res);
    if (hiddenCommentData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: hiddenCommentData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: hiddenCommentData,
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.updateArticle = async (req, res, next) => {
  try {
    const updateArticleData = await workEndModal.updateArticleDB(req, res);
    if (updateArticleData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: updateArticleData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: updateArticleData,
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getArticleData = async (req, res, next) => {
  try {
    const articleData = await workEndModal.getArticleDataDB(req, res);
    if (articleData.code) {
      res.status(300).json({
        code: 1,
        message: "error",
        data: articleData,
      });
    } else {
      res.status(200).json({
        message: "success",
        code: 0,
        data: articleData,
      });
    }
  } catch (error) {
    next(error);
  }
};
