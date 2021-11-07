import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/notes", component: () => import("@/views/notes/note-list.vue") },
]
