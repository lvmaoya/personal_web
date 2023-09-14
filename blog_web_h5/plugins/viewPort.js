import { isElementInViewport } from "~~/utils/isElementInViewport";

export default defineNuxtPlugin(() => {
  useNuxtApp().vueApp.directive("viewport", {
    mounted(el, binding) {
      el.classList.add("is-inside-viewport");
      window.addEventListener("scroll", function () {
        if (!isElementInViewport(el)) {
          el.classList.add("is-outside-viewport");
        } else {
          el.classList.remove("is-outside-viewport");
        }
      });
    },
  });
});
