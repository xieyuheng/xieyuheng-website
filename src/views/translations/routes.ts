import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/translations",
    component: () => import("@/views/translations/TranslationLayout.vue"),
    children: [
      {
        path: "/translations",
        component: () => import("@/views/translations/TranslationList.vue"),
      },
      {
        path: "/translations/:pathMatch(.*)",
        component: () => import("@/views/translations/TranslationPage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
