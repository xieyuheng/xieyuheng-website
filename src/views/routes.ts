import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: () => import("@/views/home/home.vue") },
  ...require("@/views/notes/routes").routes,
  ...require("@/views/projects/routes").routes,
  ...require("@/views/translations/routes").routes,
  ...require("@/views/papers/routes").routes,
  ...require("@/views/courses/routes").routes,
  ...require("@/views/live/routes").routes,
  ...require("@/views/resume/routes").routes,
  { path: "*", component: () => import("@/views/errors/page-not-found.vue") },
]
