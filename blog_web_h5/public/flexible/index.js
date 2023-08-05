// 移动端自适应方案
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // 根据设备像素比设置body的字体大小: 12*dpr
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 根据设备的可视宽度设置根元素的大小：clientwidth/25
  function setRemUnit() {
    var rem = docEl.clientWidth / 25;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // 设备宽度变化rem单位px变化
  window.addEventListener("resize", setRemUnit);
  //当窗口加载时触发，无论是否来自缓存
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
