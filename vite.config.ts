import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

import { remixComponentHmr } from './vite/remix-component-hmr.ts'

export default defineConfig({
  server: { host: '0.0.0.0' },
  build: {
    sourcemap: true,
    target: 'es2022',
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'remix/component',
  },
  plugins: [remixComponentHmr(), tailwindcss()],
})
