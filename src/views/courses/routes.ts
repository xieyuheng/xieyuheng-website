import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/courses",
    component: () => import("@/views/courses/course-layout.vue"),
    children: [
      {
        path: "/courses",
        component: () => import("@/views/courses/course-list.vue"),
      },
      {
        path: "/courses/*",
        component: () => import("@/views/courses/course-page.vue"),
        props: (route) => ({
          path: route.params.pathMatch,
        }),
      },
    ],
  },
]
