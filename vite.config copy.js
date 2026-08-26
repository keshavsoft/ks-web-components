import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webComponentsDir = path.join(__dirname, 'webComponents');
const webComponentDirs = fs.existsSync(webComponentsDir) ? fs.readdirSync(webComponentsDir) : [];
const distDir = path.join(__dirname, 'dist');
const distDirs = fs.existsSync(distDir) ? fs.readdirSync(distDir) : [];

let maxV = 0;
const getVNumber = (name) => {
  const match = name.match(/^v(\d+)$/);
  return match ? parseInt(match[1], 10) : 0;
};

for (const dir of webComponentDirs) {
  const v = getVNumber(dir);
  if (v > maxV) maxV = v;
}

// Target the highest version found in webComponents
const targetV = maxV;

const targetDist = path.join(distDir, `v${targetV}`);
if (fs.existsSync(targetDist)) {
  console.error(`\n❌ Error: dist/v${targetV} already exists! Please delete it manually if you want to rebuild this version.\n`);
  process.exit(1);
}

export default defineConfig({
  build: {
    outDir: `dist/v${targetV}`,
    lib: {
      entry: 'index.js',
      name: 'ksWebComponents',
      fileName: 'ks-web-components'
    }
  }
});
