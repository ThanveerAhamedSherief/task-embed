

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create separate configs for lib and web builds
const createLibConfig = () => ({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: './src/main.jsx',
      name: 'HelloWorldApp',
      fileName: (format) => `hello-world-app.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          HelloWorldApp: 'HelloWorldApp'
        },
      },
    },
  },
});

const createWebConfig = () => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});

export { createLibConfig, createWebConfig };
export default defineConfig(createWebConfig());









