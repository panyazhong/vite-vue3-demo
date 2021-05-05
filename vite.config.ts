import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { svgBuilder } from './src/plugins/svgBuilder';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgBuilder('./src/icons/svg/')],
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
});
