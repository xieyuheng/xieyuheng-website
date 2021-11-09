import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: () => import("@/views/home/home.vue") },
  ...require("@/views/notes/routes").routes,
  ...require("@/views/projects/routes").routes,
  ...require("@/views/cv/routes").routes,
  { path: "*", component: () => import("@/views/errors/page-not-found.vue") },
]
