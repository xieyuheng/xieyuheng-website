import { run } from 'remix/spa'

import { initializeTheme } from './models/theme'
import { router } from './router'
import './styles/index.css'

initializeTheme()

const app = run(router, {
  fallback: <p class="p-6 font-mono text-sm">Loading…</p>,
})

await app.ready()

export { app }
