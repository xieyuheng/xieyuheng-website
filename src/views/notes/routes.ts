import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/notes",
    component: () => import("@/views/notes/note-layout.vue"),
    children: [
      {
        path: "/notes",
        component: () => import("@/views/notes/note-list.vue"),
      },
      {
        path: "/notes/*",
        component: () => import("@/views/notes/note.vue"),
        props: (route) => ({
          baseURL: `${window.location.origin}/notes`,
        }),
      },
    ],
  },
]
