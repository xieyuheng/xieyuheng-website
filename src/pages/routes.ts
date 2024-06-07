import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.tsx'
import Home from './home/Home.tsx'
;(Home as any).displayName = 'Home'
;(PageNotFound as any).displayName = 'PageNotFound'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/:path(.*)', component: PageNotFound },
]
