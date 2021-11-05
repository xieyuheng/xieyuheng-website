import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: () => import("../views/home.vue") },
  { path: "/about", component: () => import("../views/about.vue") },
]
