export function debounce(fn:Function, wait:number) {
  let timeoutID:any = null;
  return function () {
    if (timeoutID != null) clearTimeout(timeoutID);
    timeoutID = setTimeout(fn, wait);
  };
}
