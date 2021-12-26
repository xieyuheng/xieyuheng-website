import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/live", component: () => import("./LiveList.vue") },
]
