import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: 'hidden',
    target: 'es2015'
  },
  plugins: [
    vue(),
    legacy({
      targets: [
        'last 2 versions',
        'Chrome >= 49',
        'ChromeAndroid >= 49',
        'Edge >= 16',
        'Opera >= 36',
        'Firefox >= 31',
        'FirefoxAndroid >= 31',
        'Safari >= 10',
        'iOS >= 10',
        'Samsung >= 5',
        'not IE > 0',
        'not dead'
      ]
    }),
  ]
})
