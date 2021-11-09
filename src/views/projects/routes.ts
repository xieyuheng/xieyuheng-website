import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/projects",
    component: () => import("@/views/projects/project-layout.vue"),
    children: [
      {
        path: "/projects",
        component: () => import("@/views/projects/project-list.vue"),
      },
    ],
  },
]
