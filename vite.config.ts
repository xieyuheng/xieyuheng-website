import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: '0.0.0.0' },
  build: {
    sourcemap: true,
  },
  plugins: [vue(), vueJsx(), splitVendorChunkPlugin()],
})
