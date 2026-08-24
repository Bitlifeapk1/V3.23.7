import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: false
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        post: 'cava-bowl-menu.html'
      }
    }
  }
});
