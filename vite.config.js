// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: './src/main.jsx', 
//       name: 'HelloWorldApp',
//       fileName: (format) => `hello-world-app.${format}.js`,
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//         }
//       },
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the Vite config
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.jsx', 
      name: 'HelloWorldApp',
      fileName: (format) => `hello-world-app.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Externalize react and react-dom
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',  // Output directory
    assetsDir: 'assets', // Directory for assets like images
  },
});





