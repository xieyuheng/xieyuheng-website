import { createRouter } from 'remix/router'
import { render } from 'remix/spa'

import { HomePage } from './actions/home-page'
import { NotFoundPage } from './actions/not-found-page'
import { routes } from './routes'

export const router = createRouter({
  middleware: [render()],
  defaultHandler({ render, url }) {
    document.title = '404 | 谢宇恒'
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
      document.title = '谢宇恒'
      return render(<HomePage />)
    },
  },
})

export type AppRouter = typeof router
