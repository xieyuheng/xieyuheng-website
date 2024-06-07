import type { RouteRecordRaw } from 'vue-router'
import { PageNotFound } from './errors/PageNotFound.tsx'
import { Home } from './home/Home.tsx'

// NOTE To use 'vue-router', we have to
// set `displayName` for all components.
// - https://github.com/vuejs/router/pull/922/files

;(Home as any).displayName = 'Home'
;(PageNotFound as any).displayName = 'PageNotFound'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/:path(.*)', component: PageNotFound },
]
