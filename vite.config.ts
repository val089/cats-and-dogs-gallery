import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pluginRewriteAll from 'vite-plugin-rewrite-all';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
  },
});
