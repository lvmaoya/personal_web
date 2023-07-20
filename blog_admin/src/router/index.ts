import cache from "@/utils/cache";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/LoginView.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("@/views/detail/DetailArticleView.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/main/MainView.vue"),

      children: [
        {
          path: "home",
          name: "home",
          meta: { name: "首页" },

          component: () => import("@/views/main/home/HomeView.vue"),
        },
        {
          path: "article",
          name: "article",
          redirect: "/main/article/articleList",
          children: [
            {
              path: "articleList",
              name: "articleList",
              meta: { name: "文章列表" },

              component: () =>
                import("@/views/main/article/articleList/ArticleList.vue"),
            },
            {
              path: "editArticle",
              name: "editArticle",
              meta: { name: "文章编辑" },

              component: () =>
                import("@/views/main/article/editArticle/EditArticle.vue"),
            },
            {
              path: "recycleBin",
              name: "recycleBin",
              meta: { name: "回收站" },

              component: () =>
                import("@/views/main/article/recycleBin/RecycleBin.vue"),
            },
            {
              path: "temporaryStorage",
              name: "temporaryStorage",
              meta: { name: "暂存箱" },

              component: () =>
                import(
                  "@/views/main/article/temporaryStorage/TemporaryStrorage.vue"
                ),
            },
          ],
        },
        {
          path: "user",
          name: "user",
          redirect: "/main/user/personalInfo",
          children: [
            {
              path: "personalInfo",
              name: "personalInfo",
              meta: { name: "个人简历" },

              component: () =>
                import("@/views/main/user/personInfo/PersonInfo.vue"),
            },
            {
              path: "systemUser",
              name: "systemUser",
              meta: { name: "系统用户" },

              component: () =>
                import("@/views/main/user/systemUser/SystemUser.vue"),
            },
          ],
        },
        {
          path: "/main/system",
          name: "system",
          meta: { name: "年度计划" },

          component: () => import("@/views/main/system/SystemView.vue"),
        },
        {
          path: "/main/category",
          name: "category",
          meta: { name: "类别管理" },

          component: () => import("@/views/main/category/CategoryView.vue"),
        },
        {
          path: "/main/comment",
          name: "comment",
          meta: { name: "评论审核" },

          component: () => import("@/views/main/comment/CommentView.vue"),
        },
      ],
    },
    {
      // pathMatch参数名称
      path: "/:pathMatch(.*)*",
      name: "errorPage",
      component: () => import("@/views/notFound/NotFoundView.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  // 如果路径是login，接着登录。
  // 如果不是login，判断是否有token，当是/main 的时候，跳转到/main/home
  if (to.path !== "/login") {
    const token = cache.getCache("token");
    const _token = cache.getCache("_token");
    if (!_token && !token) {
      next({
        path: "/login",
      });
      // 游客登录
    } else {
      if (to.path === "/main" || to.path === "/main/") {
        next({
          name: "home",
        });
      } else {
        next();
      }
      // {
      //   path: "/login",
      //   query: { redirect: to.fullPath },
      // }
    }
  } else {
    next();
  }
});
export default router;
