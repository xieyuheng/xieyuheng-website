import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/cv",
    component: () => import("@/views/cv/cv-layout.vue"),
    children: [
      { path: "/cv/zh", component: () => import("@/views/cv/cv-zh.vue") },
      { path: "/cv/en", component: () => import("@/views/cv/cv-en.vue") },
    ],
  },
]
