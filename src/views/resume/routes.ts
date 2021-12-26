import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/resume",
    component: () => import("./ResumeLayout.vue"),
    children: [
      { path: "/resume", component: () => import("./ResumeList.vue") },
      { path: "/resume/zh", component: () => import("./ResumeZh.vue") },
      { path: "/resume/en", component: () => import("./ResumeEn.vue") },
    ],
  },
  { path: "/cv", redirect: "/resume" },
  { path: "/cv/zh", redirect: "/resume/zh" },
  { path: "/cv/en", redirect: "/resume/en" },
]
