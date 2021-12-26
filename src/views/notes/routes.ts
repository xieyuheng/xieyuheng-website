import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/notes",
    component: () => import("@/views/notes/NoteLayout.vue"),
    children: [
      {
        path: "/notes",
        component: () => import("@/views/notes/NoteList.vue"),
      },
      {
        path: "/notes/:pathMatch(.*)",
        component: () => import("@/views/notes/NotePage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
