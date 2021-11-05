import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/about", component: () => import("../views/About.vue") },
]
