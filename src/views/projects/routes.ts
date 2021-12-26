import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/projects",
    component: () => import("@/views/projects/ProjectLayout.vue"),
    children: [
      {
        path: "/projects",
        component: () => import("@/views/projects/ProjectList.vue"),
      },
    ],
  },
]
