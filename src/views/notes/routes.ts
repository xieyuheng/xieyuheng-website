import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/notes",
    component: () => import("./NoteLayout.vue"),
    children: [
      { path: "/notes", component: () => import("./NoteList.vue") },
      {
        path: "/notes/:pathMatch(.*)",
        component: () => import("./NotePage.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
