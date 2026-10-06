import { createRouter } from 'remix/router'
import { render } from 'remix/spa'

import { HomePage } from './actions/home-page'
import { NotFoundPage } from './actions/not-found-page'
import { routes } from './routes'
import { isZh } from './models/lang'

export const router = createRouter({
  middleware: [render()],
  defaultHandler({ render, url }) {
    document.title = isZh() ? '404 | 谢宇恒' : '404 | Xie Yuheng'
    return render(
      <NotFoundPage path={url.pathname + url.search + url.hash} />,
      {
        status: 404,
      },
    )
  },
})

router.map(routes, {
  actions: {
    home({ render }) {
      document.title = isZh() ? '谢宇恒' : 'Xie Yuheng'
      return render(<HomePage />)
    },
  },
})

export type AppRouter = typeof router
