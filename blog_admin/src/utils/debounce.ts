/*
 * @Author: sun
 * @Date: 2022-12-02 16:18:04
 * @LastEditTime: 2022-12-04 14:23:09
 * @Description: Do not edit
 */
export function debounce(fn: any, wait: number) {
  let timeoutID: any = null;
  return function () {
    if (timeoutID != null) clearTimeout(timeoutID);
    timeoutID = setTimeout(fn, wait);
  };
}
