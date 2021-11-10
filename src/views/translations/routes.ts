import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/translations",
    component: () => import("@/views/translations/translation-layout.vue"),
    children: [
      {
        path: "/translations",
        component: () => import("@/views/translations/translation-list.vue"),
      },
      {
        path: "/translations/*",
        component: () => import("@/views/translations/translation-page.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
