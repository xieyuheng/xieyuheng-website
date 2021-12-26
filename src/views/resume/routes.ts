import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/resume",
    component: () => import("@/views/resume/ResumeLayout.vue"),
    children: [
      {
        path: "/resume",
        component: () => import("@/views/resume/ResumeList.vue"),
      },
      {
        path: "/resume/zh",
        component: () => import("@/views/resume/ResumeZh.vue"),
      },
      {
        path: "/resume/en",
        component: () => import("@/views/resume/ResumeEn.vue"),
      },
    ],
  },
  { path: "/cv", redirect: "/resume" },
  { path: "/cv/zh", redirect: "/resume/zh" },
  { path: "/cv/en", redirect: "/resume/en" },
]
