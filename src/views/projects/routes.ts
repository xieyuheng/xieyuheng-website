import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/projects",
    component: () => import("./ProjectLayout.vue"),
    children: [
      { path: "/projects", component: () => import("./ProjectList.vue") },
    ],
  },
]
