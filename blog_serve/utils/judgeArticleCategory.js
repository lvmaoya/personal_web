// 判断这个id属于哪个表，自定义，如果 1 开头，是project，如果2开头是tech_article,如果3，是essay
const judgeArticleCategory = function judgeArticleCategory(id) {
  let table = "";
  id = id.toString();
  switch (id.substring(0, 1)) {
    case "1":
      table = "project";
      break;
    case "2":
      table = "tech_article";
      break;
    case "3":
      table = "essay";
      break;
  }
  return table;
};
exports.judgeArticleCategory = judgeArticleCategory;
