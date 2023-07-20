/*
 * @Author: sun
 * @Date: 2023-01-07 08:58:02
 * @LastEditTime: 2023-01-07 11:22:46
 * @Description: Do not edit
 */
export function isView(ref) {
  const isInSight = (item) => {
    const bound = item.getBoundingClientRect();
    const clientHight = window.innerHeight;
    return bound.top <= clientHight + 50 && item.querySelector("img").getAttribute("src") == undefined;
  };
  const lazyLoad = () => {
    for (let item of ref.value) {
      const imgEl = item.querySelector("img");
      if (isInSight(item)) {
        imgEl.setAttribute("src", imgEl.getAttribute("data-src"));
      }
    }
  };
  window.onscroll = debounce(() => {
    lazyLoad();
  }, 100);
}
