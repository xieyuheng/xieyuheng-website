import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/papers",
    component: () => import("./PaperLayout.vue"),
    children: [
      { path: "/papers", component: () => import("./PaperList.vue") },
      {
        path: "/papers/:pathMatch(.*)",
        component: () => import("./PaperPage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
