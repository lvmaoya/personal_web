/*
 * @Author: sun
 * @Date: 2022-12-04 20:49:51
 * @LastEditTime: 2022-12-04 20:49:57
 * @Description: Do not edit
 */
export const editUrl = (url: string, aParam: any) => {
  aParam.forEach((item: any) => {
    const fromindex = url.indexOf(`${item}=`); //必须加=号，避免参数值中包含item字符串
    if (fromindex !== -1) {
      // 通过url特殊符号，计算出=号后面的的字符数，用于生成replace正则
      const startIndex = url.indexOf("=", fromindex);
      const endIndex = url.indexOf("&", fromindex);
      const hashIndex = url.indexOf("#", fromindex);

      let reg;
      if (endIndex !== -1) {
        // 后面还有search参数的情况
        const num = endIndex - startIndex;
        reg = new RegExp(`${item}=.{${num}}`);
        url = url.replace(reg, "");
      } else if (hashIndex !== -1) {
        // 有hash参数的情况
        const num = hashIndex - startIndex - 1;
        reg = new RegExp(`&?${item}=.{${num}}`);
        url = url.replace(reg, "");
      } else {
        // search参数在最后或只有一个参数的情况
        reg = new RegExp(`&?${item}=.+`);
        url = url.replace(reg, "");
      }
    }
  });
  const noSearchParam = url.indexOf("=");
  if (noSearchParam === -1) {
    url = url.replace(/\?/, ""); // 如果已经没有参数，删除？号
  }
  return url;
};
