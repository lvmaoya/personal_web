export const formatDate = function (dateString: string) {
  let date = new Date(dateString.replace(/-/g, "/")); //Wed Jan 02 2019 00:00:00 GMT+0800 (China Standard Time)

  let chinaDate = date.toDateString(); //"Tue, 01 Jan 2019 16:00:00 GMT"
  //注意：此处时间为中国时区，如果是全球项目，需要转成【协调世界时】（UTC）
  let globalDate = date.toUTCString(); //"Wed Jan 02 2019"

  //之后的处理是一样的
  let chinaDateArray = chinaDate.split(" "); //["Wed", "Jan", "02", "2019"]

  let displayDate = `${chinaDateArray[1]} ${chinaDateArray[2]}, ${chinaDateArray[3]}`; //"Jan 02, 2019"
  return displayDate;
};
