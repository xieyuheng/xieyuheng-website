import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

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
  plugins: [tailwindcss()],
})
