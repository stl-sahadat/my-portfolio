import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('🚀 1. Building production assets...');
execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });

console.log('📄 2. Generating 404.html and .nojekyll for GitHub Pages SPA support...');
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

console.log('🌐 3. Publishing to gh-pages branch...');
const gitOpts = { cwd: distDir, stdio: 'inherit' };
execSync('git init', gitOpts);
execSync('git checkout -B gh-pages', gitOpts);
execSync('git add -A', gitOpts);
execSync('git commit -m "deploy: update live portfolio on GitHub Pages"', gitOpts);

// Get remote URL of parent repository
const remoteUrl = execSync('git config --get remote.origin.url', { cwd: rootDir, encoding: 'utf-8' }).trim();
execSync(`git push -f ${remoteUrl} gh-pages`, gitOpts);

// Clean up .git folder in dist
fs.rmSync(path.join(distDir, '.git'), { recursive: true, force: true });

console.log('✨ Live deployment completed successfully!');
console.log('🔗 URL: https://stl-sahadat.github.io/my-portfolio/');
