import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/papers",
    component: () => import("@/views/papers/PaperLayout.vue"),
    children: [
      {
        path: "/papers",
        component: () => import("@/views/papers/PaperList.vue"),
      },
      {
        path: "/papers/:pathMatch(.*)",
        component: () => import("@/views/papers/PaperPage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
