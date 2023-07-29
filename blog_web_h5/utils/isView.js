// 图片懒加载
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
