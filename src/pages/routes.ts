import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import { Home } from './home/Home.tsx'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/:path(.*)', component: PageNotFound },
]
