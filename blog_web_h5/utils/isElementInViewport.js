export function isElementInViewport(element, threshold) {
  var rect = element.getBoundingClientRect();
  var viewHeight = window.innerHeight || document.documentElement.clientHeight;

  // 默认阈值为0，表示元素顶部或底部进入可视区域即触发回调
  // threshold = threshold || 0;

  return (
    rect.bottom > 0 && // 元素顶部接近视口顶部
    rect.top < viewHeight // 元素底部接近视口底部
  );
}
