// 图片懒加载
export function isView(ref) {
  const isInSight = (item) => {
    const bound = item.getBoundingClientRect();
    const clientHight = window.innerHeight;
    return bound.top <= clientHight + 66;
  };
  const lazyLoad = () => {
    for (let item of ref.value) {
      if (isInSight(item)) {
        const imgBox = item.querySelector(".image");
        imgBox.style.backgroundImage = "url(" + imgBox.getAttribute("data-src") + ")";
      }
    }
  };
  window.onscroll = debounce(() => {
    lazyLoad();
  }, 100);
}
