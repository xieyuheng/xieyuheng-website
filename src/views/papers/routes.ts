import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/papers",
    component: () => import("@/views/papers/paper-layout.vue"),
    children: [
      {
        path: "/papers",
        component: () => import("@/views/papers/paper-list.vue"),
      },
      {
        path: "/papers/*",
        component: () => import("@/views/papers/paper-page.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
