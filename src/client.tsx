import { run } from 'remix/spa'

import { enableViteHmrReloads } from './dev/vite-hmr'
import { router } from './router'
import './styles/index.css'

enableViteHmrReloads()

const app = run(router, {
  fallback: <p class="p-6 font-mono text-sm">Loading…</p>,
})

await app.ready()

export { app }
