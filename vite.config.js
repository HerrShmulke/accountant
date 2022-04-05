import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.join(__dirname, '/src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:map';
          @import "@/assets/scss/_variables.scss";
        `,
      },
    },
  },
});
