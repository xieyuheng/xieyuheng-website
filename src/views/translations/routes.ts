import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/translations",
    component: () => import("@/views/translations/TranslationLayout.vue"),
    children: [
      {
        path: "/translations",
        component: () => import("@/views/translations/TranslationList.vue"),
      },
      {
        path: "/translations/*",
        component: () => import("@/views/translations/TranslationPage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
