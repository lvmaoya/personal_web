const crypto = require("crypto");
module.exports = (str) => {
  return crypto.createHash("md5").update(str).digest("hex");
};
// createHash():使用md5算法生成一个hash值
// str:加密的原始数据
// digest():转化为其他进制，hex为十六进制
