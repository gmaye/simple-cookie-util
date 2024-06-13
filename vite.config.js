// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CookieUtil',
      fileName: (format) => `cookie-util.${format}.js`,
    },
  },
});
