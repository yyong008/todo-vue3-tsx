import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Vuejsx from '@vitejs/plugin-vue-jsx'

import url from 'node:url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  // https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Vuejsx()],
  resolve: {
    alias: {
      '@': path.join(__dirname,'src'),
    }}
})
