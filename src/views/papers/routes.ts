import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/papers",
    component: () => import("@/views/papers/PaperLayout.vue"),
    children: [
      {
        path: "/papers",
        component: () => import("@/views/papers/PaperList.vue"),
      },
      {
        path: "/papers/*",
        component: () => import("@/views/papers/PaperPage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
