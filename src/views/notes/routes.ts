import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/notes",
    component: () => import("@/views/notes/NoteLayout.vue"),
    children: [
      {
        path: "/notes",
        component: () => import("@/views/notes/NoteList.vue"),
      },
      {
        path: "/notes/*",
        component: () => import("@/views/notes/NotePage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
