import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/notes", component: () => import("@/views/notes/note-list.vue") },
  // {
  //   path: "/notes/*",
  //   component: () => import("@/views/notes/note-layout.vue"),
  //   props: (route) => ({
  //     articleId: route.params.pathMatch,
  //   }),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("@/views/notes/note.vue"),
  //       props: (route) => ({
  //         noteId: route.params.pathMatch,
  //         baseURL: `${window.location.origin}/articles`,
  //       }),
  //     },
  //   ],
  // },
]
