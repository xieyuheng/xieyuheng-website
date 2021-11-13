import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/live",
    component: () => import("@/views/live/live-list.vue"),
  },
]
