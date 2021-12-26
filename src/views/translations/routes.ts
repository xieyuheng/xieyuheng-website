import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/translations",
    component: () => import("./TranslationLayout.vue"),
    children: [
      {
        path: "/translations",
        component: () => import("./TranslationList.vue"),
      },
      {
        path: "/translations/:pathMatch(.*)",
        component: () => import("./TranslationPage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
