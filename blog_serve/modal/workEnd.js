const { connection } = require("./index");
const { jwtSecret } = require("../config/config.default");
const { sign } = require("../utils/jwt");
const md5 = require("../utils/md5");
const { formatDateTime } = require("../utils/date");
const Genid = require("../utils/snowFlakeID");

/**
 * @description: 登录
 * @param {*} userName
 * @param {*} password
 * @return {*} user,token
 */
exports.login = (req, res) => {
  const params =
    "select * from user where userName = '" +
    req.body.userName +
    "' and password = '" +
    md5(req.body.password) +
    "' limit 1 ";
  return new Promise((resolve) => {
    connection.query(params, async function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else if (rows.length == 0) {
        resolve({ message: "账号或密码错误" });
      } else {
        const token = await sign({ userName: req.body.userName }, jwtSecret, { expiresIn: "1d" });
        let user = {
          userName: rows[0].userName,
          nickName: rows[0].nickName,
          email: rows[0].email,
        };
        resolve({ user, token });
      }
    });
  });
};
/**
 * @description: 获取首页静态数据
 * @return {*}
 */
exports.getSystemStatisticsDB = (req, res) => {
  const firstParams =
    "SELECT count(*) as articleCount, sum(pageview) as pvCount ,sum(prefer_num) as likeCount  FROM blog";

  return new Promise((resolve, reject) => {
    connection.query(firstParams, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        let first_rows = rows;
        let secondParams = "select count(*) as comment from commentary";
        connection.query(secondParams, function (err, rows, fields) {
          if (err) {
            reject(err);
          } else {
            resolve({ ...rows[0], ...first_rows[0] });
          }
        });
      }
    });
  });
};
/**
 * @description: 获取饼图数据
 * @return {*}
 */
exports.getPieDataDB = (req, res) => {
  const params =
    "select category_name as name,value from category, (SELECT category_id,count(*) as value FROM blog  group by category_id) as nameValue where category.category_id = nameValue.category_id";
  return new Promise((resolve, reject) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
/**
 * @description: 获取直线图数据
 * @return {*}
 */
exports.getLineDataDB = (req, res) => {
  const params =
    "SELECT MONTH,COUNT(*) AS count,sum(pageview) pageview FROM ( SELECT DATE_FORMAT(published_time, '%Y-%m') month,pageview FROM blog WHERE published_time>DATE_SUB(CURDATE(), INTERVAL 1 YEAR) )a GROUP BY month order by month desc";
  return new Promise((resolve, reject) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

/**
 * @description: 获取文章列表数据，
 * @param {*} req
 * @param {*} res
 * @return {*}私密公开都返回，状态为已发布
 */
exports.getArticleListDB = (req, res) => {
  const currentPage = req.body.currentPage;
  const pageSize = req.body.pageSize;
  const startItem = (currentPage - 1) * pageSize;
  const status = req.body.status || 0;
  const params =
    "SELECT SQL_CALC_FOUND_ROWS * FROM blog where status = " +
    status +
    " LIMIT " +
    startItem +
    "," +
    pageSize +
    ";  SELECT FOUND_ROWS() as total;";
  return new Promise((resolve, reject) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
/**
 * @description: 获取文章详情数据
 * @param {*} id
 * @return {*}
 */
exports.getDetailDB = (req, res) => {
  const params = "select * from content where article_id = " + req.query.id + " limit 1 ";
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        resolve(rows[0]);
      }
    });
  });
};
//
/**
 * @description: 绝对删除文章
 * @param {*} id
 * @return {*}
 */
exports.deleteArticleDB = (req, res) => {
  const params = "delete from blog where article_id = " + req.body.id + " limit 1 ";
  const deteleContentParams = "delete from content where article_id = " + req.body.id + " limit 1";
  // 删除相关评论
  const deleteCommentParams = "DELETE FROM commentary WHERE article_id = " + req.body.id + " and commentary_id > 0  ";
  // 有可能造成两个表数据不统一
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        connection.query(deteleContentParams, function (err, rows, fields) {
          if (err) {
            resolve(err);
          } else {
            connection.query(deleteCommentParams, function (err, rows, fields) {
              if (err) {
                resolve(err);
              } else {
                resolve(rows);
              }
            });
          }
        });
      }
    });
  });
};
/**
 * @description: 改变文章状态，需要给出删除时间
 * @param {*} id
 * @param {*} res
 * @return {*}
 */
exports.changeArticleStatusDB = (req, res) => {
  const toStatus = req.body.toStatus;
  let date = new Date();
  // 如果是删除文章
  date = toStatus == 2 ? formatDateTime(date) : "";
  const params =
    "update blog set status = " + toStatus + ", deleted_time = '" + date + "' where article_id = " + req.body.id;
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};
/**
 * @description: 搜索文章
 * @param {*} {id，currentPage，pagesize，title，keywords,category[],date,form(是否公开)}
 * @param {*} res
 * @return {*}
 */
exports.searchArticleDB = (req, res) => {
  const currentPage = req.body.currentPage;
  const pageSize = req.body.pageSize;
  const startItem = (currentPage - 1) * pageSize;

  const title = req.body.title;
  const keywords = req.body.keywords;
  const category = req.body.category;
  const published_time = req.body.published_time;
  const is_privacy = req.body.is_privacy;
  let categorySql;
  if (category.length == 0) {
    categorySql = "";
  } else if (category.length == 1) {
    categorySql = " and father_category_id = " + category[0];
  } else {
    categorySql = " and father_category_id = " + category[0] + " and category_id = " + category[1];
  }
  // 条件查询
  const conditionSql = " limit " + startItem + "," + pageSize;

  // ("  select * from personal_web.blog where date between '2000-11-13T16:00:00.000Z' and '2022-12-12T16:00:00.000Z' and title like '%title%' and description like '%1%' and category ='work' and form = 0");
  // 日期范围
  let rangeSql = published_time
    ? " published_time between '" + published_time[0] + "' and '" + published_time[1] + "'"
    : " 1 = 1 ";
  // 模糊查询
  let fuzzySql =
    (title ? " and title like '%" + title + "%'" : "") +
    (keywords ? " and description like '%" + keywords + "%'" : "") +
    (is_privacy ? " and is_privacy = " + is_privacy + " and status = 0 " : " and status = 0") +
    categorySql;
  const params =
    "select SQL_CALC_FOUND_ROWS * from blog where" +
    rangeSql +
    fuzzySql +
    conditionSql +
    ";  SELECT FOUND_ROWS() as total;";
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};
/**
 * @description: 增添文章
 * @param {*} title，author，published_time,draft_time,category[]
 * @param {*} res
 * @return {*}
 */
exports.addArticleDB = (req, res) => {
  const genid = new Genid({ WorkerId: 1 });
  const article_id = genid.NextId();
  const title = req.body.title;
  const author = req.body.author;
  // 如果是暂存文章，发布文章日期为空，反之亦然
  let published_time = req.body.published_time;
  let draft_time = req.body.draft_time;
  published_time = published_time ? formatDateTime(new Date(published_time)) : null;
  draft_time = draft_time ? formatDateTime(new Date(draft_time)) : null;

  let category = req.body.category;
  let category_id = null;
  let father_category_id = null;
  if (category.length == 0) {
    category_id = null;
  } else if (category.length == 1) {
    category_id = category[0];
    if (category_id == 1) {
      father_category_id = 1;
    } else {
      father_category_id = 3;
    }
  } else {
    category_id = category[1];
    father_category_id = category[0];
  }

  const description = req.body.description;
  const is_privacy = req.body.is_privacy == true ? 1 : 0;
  const cover_image = req.body.cover_image;
  const status = req.body.status == 0 ? 0 : 1;
  const content = req.body.content;

  const blogParams = [
    article_id,
    title,
    author,
    cover_image,
    description,

    category_id,
    father_category_id,

    is_privacy,
    status,

    published_time,
    draft_time,
  ];
  const contentParams = [article_id, content];
  const insertBlog =
    "insert blog(article_id,title,author,cover_image,description,category_id,father_category_id,is_privacy,status,published_time,draft_time) values (?,?,?,?,?,?,?,?,?,?,?)";
  const insertContent = "insert content(article_id,content) values (?,?)";

  return new Promise((resolve, reject) => {
    connection.query(insertBlog, blogParams, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        connection.query(insertContent, contentParams, function (err, rows, fields) {
          if (err) {
            // 这里如果插入文章具体内容时有错，应该把已经插入的blogitem给删掉，这里如果再有报错该咋办？虽然说不太可能报错
            const params = "delete from blog where article_id = " + article_id + " limit 1 ";
            connection.query(params, function (err, rows, fields) {});
            reject(err);
          } else {
            resolve(rows);
          }
        });
      }
    });
  });
};

exports.getUserInfoDB = (req, res) => {
  const params = "select * from user where userName = '" + req.body.userName + "' limit 1 ";
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        delete rows[0].otherContact, delete rows[0].introduce, delete rows[0].photo;
        resolve(rows[0]);
      }
    });
  });
};

/**
 * @description: 获取文章类别列表数据，下拉菜单用
 * @return {*}
 */
exports.getCategoryDB = (req, res) => {
  const params = "SELECT * FROM category ";
  return new Promise((resolve, reject) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
// 判断一个类别下是否还存在文章以便删除
exports.checkHaveArticleDB = (req, res) => {
  const id = req.body.id;
  const params = "select * from blog where category_id = " + id + " limit 1 ";
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};
// 删除类别
exports.deleteCategoryDB = (req, res) => {
  const id = req.body.id;
  const params = "delete from category where category_id = " + id + " limit 1 ";
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};
/**
 * @description: 新增类别
 * @param {category_name,father_category_name}
 * @return {*}
 */
exports.addCategoryDB = (req, res) => {
  const genid = new Genid({ WorkerId: 1 });
  const category_id = genid.NextId();
  const category_name = req.body.category_name;
  const father_category_name = req.body.father_category_name;

  const categoryParams = [category_id, category_name, father_category_name];
  const insertCategory = "insert category (category_id,category_name,father_category_name) values (?,?,?)";

  return new Promise((resolve, reject) => {
    connection.query(insertCategory, categoryParams, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
/**
 * @description: 更改类别名称
 * @param {category_id,category_name}
 * @return {*}
 */
exports.updateCategoryDB = (req, res) => {
  const category_id = req.body.id;
  const category_name = req.body.category_name;

  const params = "update category set category_name = '" + category_name + "' where category_id = " + category_id;

  return new Promise((resolve, reject) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

/**
 * @description: 获取评论列表数据，
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
exports.getCommentListDB = (req, res) => {
  const currentPage = req.body.currentPage;
  const pageSize = req.body.pageSize;
  const startItem = (currentPage - 1) * pageSize;
  const params =
    "SELECT SQL_CALC_FOUND_ROWS * FROM commentary LIMIT " +
    startItem +
    "," +
    pageSize +
    ";  SELECT FOUND_ROWS() as total;";
  return new Promise((resolve, reject) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
/**
 * @description: 评论的显示与隐藏
 * @param {is_checked}
 * @return {*}
 */
exports.hiddenCommentDataDB = (req, res) => {
  const is_checked = req.body.is_checked;
  const commentary_id = req.body.commentary_id;

  const params = "update commentary set is_checked = '" + is_checked + "' where commentary_id = " + commentary_id;

  return new Promise((resolve, reject) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
/**
 * @description: 评论的删除
 * @param {is_checked}
 * @return {*}
 */
exports.deleteCommentDB = (req, res) => {
  const commentary_id = req.body.commentary_id;
  const params = "delete from commentary where commentary_id = " + commentary_id + " limit 1 ";
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.updateArticleDB = (req, res) => {
  const article_id = req.body.article_id;
  const title = req.body.title;
  const author = req.body.author;
  // 如果是暂存文章，发布文章日期为空，反之亦然
  let published_time = req.body.published_time;
  let draft_time = req.body.draft_time;
  published_time = published_time ? formatDateTime(new Date(published_time)) : null;
  draft_time = draft_time ? formatDateTime(new Date(draft_time)) : null;

  let category = req.body.category;
  let category_id = null;
  let father_category_id = null;
  if (category.length == 0) {
    category_id = null;
  } else if (category.length == 1) {
    category_id = category[0];
    if (category_id == 1) {
      father_category_id = 1;
    } else {
      father_category_id = 3;
    }
  } else {
    category_id = category[1];
    father_category_id = category[0];
  }

  const description = req.body.description;
  const is_privacy = req.body.is_privacy == true ? 1 : 0;
  const cover_image = req.body.cover_image;
  const status = req.body.status == 0 ? 0 : 1;
  const content = req.body.content;

  const params =
    "update blog set title = '" +
    title +
    "', description = '" +
    description +
    "', category_id = " +
    category_id +
    ", father_category_id = " +
    father_category_id +
    ", cover_image = '" +
    cover_image +
    "', is_privacy = " +
    is_privacy +
    ", status = " +
    status +
    " where article_id = " +
    article_id;
  const contentParams = "update content set content = '" + content + "' where article_id = " + article_id;
  return new Promise((resolve, reject) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        connection.query(contentParams, function (err, rows, fields) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      }
    });
  });
};
// 跳转编辑页数据回显
exports.getArticleDataDB = (req, res) => {
  const params = "select * from content where article_id = " + req.body.id + " limit 1 ";
  const blogParams = "select * from blog where article_id = " + req.body.id + " limit 1 ";
  return new Promise((resolve) => {
    connection.query(params, function (err, rows, fields) {
      if (err) {
        resolve(err);
      } else {
        let contentRows = rows;
        connection.query(blogParams, function (err, rows, fields) {
          if (err) {
            resolve(err);
          } else {
            // 处理类别数组类型，处理单选按钮

            let articleData = {
              title: rows[0].title,
              author: rows[0].author,
              category: [rows[0].father_category_id, rows[0].category_id],
              cover_image: rows[0].cover_image,
              description: rows[0].description,
              is_privacy: rows[0].is_privacy === 1 ? true : false,
              status: rows[0].status,
              published_time: rows[0].published_time,
              draft_time: rows[0].draft_time,
            };
            if (rows[0].father_category_id === 1) {
              articleData.category = [1];
            }
            if (rows[0].father_category_id === 3) {
              articleData.category = [3];
            }
            resolve({ ...articleData, ...contentRows[0] });
          }
        });
      }
    });
  });
};
