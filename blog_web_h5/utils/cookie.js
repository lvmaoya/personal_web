/*
 * @Author: sun
 * @Date: 2022-11-22 18:27:14
 * @LastEditTime: 2022-12-30 20:40:40
 * @Description: Do not edit
 */
// @ts-nocheck
class cookie {
  setCookie(name, value, day) {
    try {
      if (day !== 0) {
        // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        var expires = day * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date() + expires);
        document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`;
      } else {
        document.cookie = `${name}=${escape(value)}`;
      }
    } catch (error) {}
  }
  getCookie(name) {
    // 获取cookies
    let strCookie = document.cookie;
    let arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
      let arr = arrCookie[i].split("=");
      if (name == arr[0]) {
        return arr[1];
      }
    }
    return "";
  }
  unique(arr) {
    // 遍历arr，把元素分别放入tmp数组(不存在才放)
    var tmp = new Array();
    for (var i in arr) {
      //该元素在tmp内部不存在才允许追加
      if (tmp.indexOf(arr[i]) === -1) {
        tmp.push(arr[i]);
      }
    }
    return tmp;
  }
  getArrCookie(name) {
    try {
      if (document.cookie.length > 0) {
        let start = document.cookie.indexOf(name + "=");
        if (start != -1) {
          start = start + name.length + 1;
          let end = document.cookie.indexOf(";", start);
          if (end == -1) end = document.cookie.length;
          return unescape(document.cookie.substring(start, end));
        }
      }
      return null;
    } catch (error) {}
  }
  //   返回一个数组类型的cookie
  returnArrCookie(name) {
    try {
      let arr = [];
      if (this.getArrCookie(name) == null) {
        return [];
      } else {
        if (this.getArrCookie(name).length !== 0) {
          for (let i of this.getArrCookie(name).split(",")) {
            arr.push(Number(i));
          }
          return arr;
        } else {
          return [];
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  setArrCookie(name, value, day) {
    try {
      const date = new Date(); //用来设置过期时间用的，获取当前时间加上传进来的iDay就是过期时间
      date.setDate(date.getDate() + day);
      const cookieObj = [];
      if (this.getArrCookie(name) !== null) {
        if (this.getArrCookie(name).split(",").length >= 1) {
          for (let i = 0; i < this.getArrCookie(name).split(",").length; i++) {
            cookieObj.push(this.getArrCookie(name).split(",")[i]);
          }
        } else {
          cookieObj.push(this.getArrCookie(name).split(","));
        }
      }
      cookieObj.push(value);
      let arr = this.unique(cookieObj); //数组去重
      if (document) {
        document.cookie = name + "=" + arr + ";expires=" + date;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
export default new cookie();
