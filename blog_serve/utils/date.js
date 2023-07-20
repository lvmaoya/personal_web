// 2015-03-19 12:00:00
let formatDateTime = function (date) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  let minute = date.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  let second = date.getSeconds();
  second = second < 10 ? "0" + second : second;
  return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
};
// 2015-03-19
let formatDate = function (date) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};
//时间戳转日期格式
let formatDateTimeStamp = function (time, format) {
  let t = new Date(time);
  let tf = function (i) {
    return (i < 10 ? "0" : "") + i;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case "yyyy":
        return tf(t.getFullYear());
        break;
      case "MM":
        return tf(t.getMonth() + 1);
        break;
      case "mm":
        return tf(t.getMinutes());
        break;
      case "dd":
        return tf(t.getDate());
        break;
      case "HH":
        return tf(t.getHours());
        break;
      case "ss":
        return tf(t.getSeconds());
        break;
    }
  });
};
let beforeThreeMouth = function () {
  const dates = new Date();
  dates.setMonth(dates.getMonth() - 3);
  var pastMonth = dates.getMonth() + 1;
  var pastDay = dates.getDate();
  if (pastMonth >= 1 && pastMonth <= 9) {
    pastMonth = "0" + pastMonth;
  }
  if (pastDay >= 0 && pastDay <= 9) {
    pastDay = "0" + pastDay;
  }
  const endDate = dates.getFullYear() + "-" + pastMonth + "-" + pastDay;
  return endDate;
};

exports.formatDateTime = formatDateTime;
exports.formatDate = formatDate;
exports.formatDateTimeStamp = formatDateTimeStamp;
exports.beforeThreeMouth = beforeThreeMouth;
