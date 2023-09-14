export function showLoading() {
  if (process.client) {
    var style =
      "\n#s-loading {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 1000;\n}\n #s-loading .loader {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 11em;\n    height: 11em;\n    margin: -5.5em;\n    transform: rotate(45deg);\n  }\n\n  #s-loading .loader:after,\n  #s-loading .loader:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 11em;\n    height: 11em;\n    border-radius: 0.5em;\n    transform: translate(-50%, -50%);\n  }\n\n  #s-loading .loader:after {\n    height: 1em;\n    animation: move-after 2s infinite;\n  }\n\n  #s-loading .loader:before {\n    width: 1em;\n    animation: move-before 2s infinite;\n  }\n\n  #s-loading .loader-text {\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    width: 20em;\n    margin: -8em -10em;\n    font-size: 18px;\n    text-align: center;\n    color: grey;\n    text-shadow: cornflowerblue;\n  }\n\n  @keyframes move-after {\n    0% {\n      width: 1em;\n      box-shadow: 5em -3em #c9f0fc, -5em 3em #f4a7c4;\n    }\n\n    35% {\n      width: 11em;\n      box-shadow: 0 -3em #c9f0fc, 0 3em #f4a7c4;\n    }\n\n    70% {\n      width: 1em;\n      box-shadow: -5em -3em #c9f0fc, 5em 3em #f4a7c4;\n    }\n\n    100% {\n      width: 1em;\n      box-shadow: 5em -3em #c9f0fc, -5em 3em #f4a7c4;\n    }\n  }\n\n  @keyframes move-before {\n    0% {\n      height: 1em;\n      box-shadow: -3em -5em #b3e5d5, 3em 5em #f7dfac;\n    }\n\n    35% {\n      height: 11em;\n      box-shadow: -3em 0 #b3e5d5, 3em 0 #f7dfac;\n    }\n\n    70% {\n      height: 1em;\n      box-shadow: -3em 5em #b3e5d5, 3em -5em #f7dfac;\n    }\n\n    100% {\n      height: 1em;\n      box-shadow: -3em -5em #b3e5d5, 3em 5em #f7dfac;\n    }\n  }\n  ";
    var loadingHtml = '\n      <div class="loader"></div>\n      <div class="loader-text">Loading...</div>\n  ';
    var styleDom = document.createElement("style");
    var loadingDom = document.createElement("div");
    var firstDom = document.body.firstChild; //得到页面的第一个元素
    styleDom.innerHTML = style;
    loadingDom.innerHTML = loadingHtml;
    styleDom.id = "s-loading-style";
    loadingDom.id = "s-loading";
    document.body.insertBefore(styleDom, firstDom);
    document.body.insertBefore(loadingDom, firstDom);
  }
}
export function hideLoading() {
  if (process.client) {
    const dom = document.getElementById("s-loading");
    const styleDom = document.getElementById("s-loading-style");
    dom && dom.parentNode?.removeChild(dom);
    styleDom && styleDom.parentNode?.removeChild(styleDom);
  }
}
