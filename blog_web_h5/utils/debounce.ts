/*
 * @Author: sun
 * @Date: 2022-12-30 14:20:05
 * @LastEditTime: 2022-12-30 14:20:20
 * @Description: Do not edit
 */
export function debounce(fn:Function, wait:number) {
  let timeoutID:any = null;
  return function () {
    if (timeoutID != null) clearTimeout(timeoutID);
    timeoutID = setTimeout(fn, wait);
  };
}
