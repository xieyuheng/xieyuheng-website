import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("./home/HomePage.vue") },
  ...require("./notes/routes").routes,
  ...require("./projects/routes").routes,
  ...require("./translations/routes").routes,
  ...require("./papers/routes").routes,
  ...require("./live/routes").routes,
  ...require("./resume/routes").routes,
  {
    path: "/:pathMatch(.*)",
    component: () => import("./errors/PageNotFound.vue"),
  },
]
