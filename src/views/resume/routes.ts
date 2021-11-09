import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/resume",
    component: () => import("@/views/resume/resume-layout.vue"),
    children: [
      {
        path: "/resume/zh",
        component: () => import("@/views/resume/resume-zh.vue"),
      },
      {
        path: "/resume/en",
        component: () => import("@/views/resume/resume-en.vue"),
      },
    ],
  },
]
