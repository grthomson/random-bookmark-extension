import { build } from 'esbuild';
import { mkdirSync, copyFileSync, existsSync, cpSync } from 'fs';

await build({
  entryPoints: ['src/background.ts'],
  bundle: true,
  outfile: 'dist/background.js',
  platform: 'browser',
  format: 'esm',
  legalComments: 'none',
});

mkdirSync('dist', { recursive: true });

// always copy manifest
copyFileSync('manifest.json', 'dist/manifest.json');

// copy optional newtab.html if present
if (existsSync('src/newtab.html')) {
  copyFileSync('src/newtab.html', 'dist/newtab.html');
}

// copy icons folder if present
if (existsSync('icons')) {
  cpSync('icons', 'dist/icons', { recursive: true });
}

console.log('Build complete. Files in dist/');
