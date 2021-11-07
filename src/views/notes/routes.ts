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
        component: () => import("@/views/notes/note-page.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
          baseURL: `${window.location.origin}/notes`,
        }),
      },
    ],
  },
]
