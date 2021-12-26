import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/live",
    component: () => import("@/views/live/LiveList.vue"),
  },
]
