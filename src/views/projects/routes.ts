import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
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
