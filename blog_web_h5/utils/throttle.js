export function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (timer !== null) return;
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, delay);
  };
}
