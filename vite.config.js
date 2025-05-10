import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
        additionalData: `@import "@/scss/_variables.scss";`
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './node_modules')
    }
  }
})