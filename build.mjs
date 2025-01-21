

import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildAll() {
  await build({
    configFile: path.resolve(__dirname, 'vite.lib.config.js'),
  });

  const libOutputDir = path.resolve(__dirname, 'lib'); 
  const distDir = path.resolve(__dirname, 'dist');

  console.log('Copying library build to dist folder...');
  

  // Build web version
  console.log("Building web version...");
  await build({
    configFile: path.resolve(__dirname, 'vite.web.config.js'),
    emptyOutDir: false, 
  });
  try {
    await fs.copy(libOutputDir, distDir); 
    console.log('Library build copied successfully.');
  } catch (err) {
    console.error('Error copying library build:', err);
  }

  console.log('Web build completed.');
}

buildAll().catch((e) => {
  console.error(e);
  process.exit(1);
});
