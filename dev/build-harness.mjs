#!/usr/bin/env node
/**
 * 生成 dev/harness.html：复制 profile.html，注入 dev/mock-chrome.js，
 * 并把根目录资源路径改写为 ../，使其可在 file:// 下直接打开。
 * 运行：node dev/build-harness.mjs（profile.html 变更后重新执行即可）
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const devDir = dirname(fileURLToPath(import.meta.url));
const rootDir = join(devDir, '..');

let html = await readFile(join(rootDir, 'profile.html'), 'utf8');

// 根目录静态资源 → 上一级
html = html
  .replace(/href="styles\.css"/g, 'href="../styles.css"')
  .replace(/src="icons\//g, 'src="../icons/')
  .replace('<title data-i18n-title="app.title">智能书签管家</title>', '<title>HARNESS · 智能书签管家</title>');

// 注入错误收集器 + mock（都必须在 i18n.js / profile.js 之前执行）
html = html.replace(
  '  <script src="i18n.js"></script>',
  `  <script>
    window.__ERRORS__ = [];
    window.addEventListener('error', (e) => window.__ERRORS__.push((e.message || 'error') + ' @ ' + (e.filename || '') + ':' + e.lineno));
    window.addEventListener('unhandledrejection', (e) => window.__ERRORS__.push('rejection: ' + ((e.reason && e.reason.stack) || e.reason)));
    // 每次加载强制刷新样式表，避免开发时命中缓存
    document.addEventListener('DOMContentLoaded', () => {
      const link = document.querySelector('link[rel="stylesheet"]');
      if (link) link.href = link.href.split('?')[0] + '?v=' + Date.now();
    });
  </script>
  <script src="mock-chrome.js"></script>
  <script src="../i18n.js"></script>`
);
html = html.replace('  <script src="profile.js"></script>', '  <script src="../profile.js"></script>');

if (!html.includes('mock-chrome.js')) {
  console.error('注入失败：未找到 <script src="i18n.js"> 标记');
  process.exit(1);
}

await writeFile(join(devDir, 'harness.html'), html, 'utf8');
console.log('已生成 dev/harness.html —— 浏览器直接打开即可（chrome.* 均为内存 mock）');
