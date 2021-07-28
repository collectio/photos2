import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true
  },
  plugins: [reactRefresh()],
  publicDir: './src/assets/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
      }
    }
  }
})
