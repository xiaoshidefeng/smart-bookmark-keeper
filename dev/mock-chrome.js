/* eslint-disable */
/**
 * 开发用 chrome.* 模拟层 —— 让 profile.html / popup.html 脱离扩展环境直接渲染。
 * 用法：dev/build-harness.mjs 生成 dev/harness.html（在 i18n.js 之前注入本文件），
 * 浏览器直接打开 dev/harness.html 即可。种子书签树见 SEED 下方的 buildSeedTree()。
 */
(function initMockChrome() {
  'use strict';

  const DAY = 24 * 60 * 60 * 1000;
  const now = Date.now();

  // ---- 种子书签树：约 40 条，含嵌套文件夹 / 空文件夹 / 重复链接 / http 链接 / 跨两年时间分布
  function node(id, title, url, dateAdded, children) {
    const n = { id, title, dateAdded, parentId: null };
    if (url) {
      n.url = url;
    } else {
      n.children = children || [];
    }
    return n;
  }

  let nextId = 1000;
  function buildSeedTree() {
    const t = (daysAgo) => now - daysAgo * DAY;

    const root = node('0', '', null, t(900), []);
    const bar = node('1', '书签栏', null, t(900));
    const other = node('2', '其他书签', null, t(900));

    const dev = node('10', '开发工具', null, t(700));
    const learn = node('11', '前端学习', null, t(650));
    const jsFolder = node('20', 'JavaScript', null, t(640));
    const cssFolder = node('21', 'CSS', null, t(630));
    const todoFolder = node('22', '待整理资料', null, t(500)); // 空文件夹
    const design = node('12', '设计灵感', null, t(700));
    const daily = node('13', '常用站点', null, t(800));
    const tools = node('30', '工具', null, t(600));
    const articles = node('31', '文章收藏', null, t(600));
    const stale = node('32', '旧链接', null, t(500));

    const B = (title, url, daysAgo) => node(String(nextId++), title, url, t(daysAgo));

    dev.children = [
      B('GitHub', 'https://github.com/', 720),
      B('MDN Web Docs', 'https://developer.mozilla.org/zh-CN/', 710),
      B('Stack Overflow', 'https://stackoverflow.com/', 705),
      B('掘金', 'https://juejin.cn/', 300),
      B('V2EX', 'https://v2ex.com/', 690),
      B('npm', 'https://www.npmjs.com/', 680),
      B('Can I Use', 'https://caniuse.com/', 660),
      B('CSS-Tricks', 'https://css-tricks.com/', 655),
      B('React 官网', 'https://react.dev/', 320),
      B('Vue 官网', 'https://cn.vuejs.org/', 315),
      B('GitHub 镜像', 'https://github.com/', 150) // 与 GitHub 重复
    ];

    jsFolder.children = [
      B('你不知道的JavaScript', 'https://book.douban.com/subject/26762339/', 620),
      B('ES6 入门教程', 'https://es6.ruanyifeng.com/', 610),
      B('现代 JavaScript 教程', 'https://zh.javascript.info/', 605),
      B('JavaScript 深入系列', 'https://juejin.cn/post/6844903470466527240', 400),
      B('闭包详解', 'http://blog.example.com/closure', 430) // http 链接
    ];
    cssFolder.children = [
      B('Flexbox Froggy', 'https://flexboxfroggy.com/#zh-cn', 600),
      B('Grid Garden', 'https://cssgridgarden.com/#zh-cn', 598),
      B('现代 CSS 方案', 'https://modern-css.dev/', 285)
    ];
    learn.children = [jsFolder, cssFolder, todoFolder, B('TypeScript 手册', 'https://typescript.bootcss.com/', 290)];

    design.children = [
      B('Dribbble', 'https://dribbble.com/', 670),
      B('Behance', 'https://www.behance.net/', 665),
      B('站酷 ZCOOL', 'https://www.zcool.com.cn/', 660),
      B('Awwwards', 'https://www.awwwards.com/', 640),
      B('Mobbin', 'https://mobbin.com/', 95)
    ];

    daily.children = [
      B('哔哩哔哩', 'https://www.bilibili.com/', 810),
      B('知乎', 'https://www.zhihu.com/', 805),
      B('微博', 'https://weibo.com/', 800),
      B('淘宝', 'https://www.taobao.com/', 795),
      B('京东', 'https://www.jd.com/', 790),
      B('网易云音乐', 'https://music.163.com/', 78)
    ];

    tools.children = [
      B('TinyPNG', 'https://tinypng.com/', 590),
      B('Excalidraw', 'https://excalidraw.com/', 580),
      B('Regex101', 'https://regex101.com/', 570),
      B('JSON 格式化', 'https://www.json.cn/', 560),
      B('快照助手', 'http://tools.example.net/snapshot', 480) // http 链接
    ];

    articles.children = [
      B('2025 前端趋势盘点', 'https://juejin.cn/post/2025-trends', 240),
      B('浏览器渲染原理', 'https://juejin.cn/post/6844903470466527240', 235), // 与 JS 深入系列重复
      B('性能优化实战', 'https://web.dev/performance/', 200),
      B('WebGL 入门', 'https://webglfundamentals.org/', 190),
      B('2026 设计系统漫谈', 'https://www.woshipm.com/design-system', 45),
      B('AI Agent 综述', 'https://www.promptingguide.ai/', 30)
    ];

    stale.children = [
      B('旧博客', 'http://myblog.example.org/', 480), // http 链接
      B('已归档论坛', 'http://forum.example.com/archived', 470), // http 链接
      B('旧版 MDN', 'https://developer.mozilla.org/zh-CN/', 460) // 与 MDN 重复
    ];

    bar.children = [dev, learn, design, daily];
    other.children = [tools, articles, stale];
    root.children = [bar, other];
    return root;
  }

  // ---- 树辅助
  const ROOT = buildSeedTree();
  const nodeMap = new Map();
  (function indexTree(n, parentId) {
    n.parentId = parentId;
    nodeMap.set(n.id, n);
    (n.children || []).forEach((c) => indexTree(c, n.id));
  })(ROOT, null);

  function clone(n) {
    const c = { id: n.id, parentId: n.parentId, title: n.title, dateAdded: n.dateAdded };
    if (n.url) {
      c.url = n.url;
    } else {
      c.children = (n.children || []).map(clone);
    }
    return c;
  }
  function findAndIndex(id) {
    return nodeMap.get(id) || null;
  }
  function removeFromParent(n) {
    const p = nodeMap.get(n.parentId);
    if (!p) return -1;
    const i = p.children.indexOf(n);
    if (i >= 0) p.children.splice(i, 1);
    return i;
  }

  // ---- chrome.storage（内存实现 + onChanged）
  const localStore = {
    locale: 'zh-CN',
    scanTimeout: 15,
    scanResults: {
      invalidCount: 3,
      invalidBookmarks: [
        { id: '1055', title: '旧博客', url: 'http://myblog.example.org/', path: '其他书签/旧链接/旧博客' },
        { id: '1056', title: '已归档论坛', url: 'http://forum.example.com/archived', path: '其他书签/旧链接/已归档论坛' },
        { id: '1058', title: '快照助手', url: 'http://tools.example.net/snapshot', path: '其他书签/工具/快照助手' }
      ],
      scanTime: new Date(now - 2 * DAY).toISOString()
    }
  };
  const sessionStore = {};

  function makeStorageArea(store) {
    const listeners = [];
    return {
      get(keys, cb) {
        const out = {};
        if (keys == null) {
          Object.assign(out, store);
        } else if (Array.isArray(keys)) {
          keys.forEach((k) => { if (k in store) out[k] = store[k]; });
        } else if (typeof keys === 'string') {
          if (keys in store) out[keys] = store[keys];
        } else if (typeof keys === 'object') {
          Object.keys(keys).forEach((k) => { out[k] = k in store ? store[k] : keys[k]; });
        }
        setTimeout(() => cb(out), 0);
      },
      set(items, cb) {
        const changes = {};
        Object.keys(items).forEach((k) => {
          changes[k] = { oldValue: store[k], newValue: items[k] };
          store[k] = items[k];
        });
        if (cb) setTimeout(cb, 0);
        setTimeout(() => listeners.forEach((l) => l(changes, 'mock')), 0);
      },
      remove(keys, cb) {
        (Array.isArray(keys) ? keys : [keys]).forEach((k) => delete store[k]);
        if (cb) setTimeout(cb, 0);
      },
      clear(cb) { Object.keys(store).forEach((k) => delete store[k]); if (cb) setTimeout(cb, 0); },
      onChanged: { addListener: (l) => listeners.push(l), removeListener: (l) => { const i = listeners.indexOf(l); if (i >= 0) listeners.splice(i, 1); } }
    };
  }

  // ---- chrome.bookmarks
  const bookmarksApi = {
    getTree(cb) { setTimeout(() => cb([clone(ROOT)]), 0); },
    getChildren(id, cb) {
      const n = findAndIndex(id);
      setTimeout(() => cb(n && n.children ? n.children.map(clone) : []), 0);
    },
    create(props, cb) {
      const parent = findAndIndex(props.parentId || '1');
      const n = node(String(nextId++), props.title || '', props.url || undefined, Date.now());
      parent.children = parent.children || [];
      parent.children.push(n);
      n.parentId = parent.id;
      nodeMap.set(n.id, n);
      setTimeout(() => cb(clone(n)), 0);
    },
    update(id, changes, cb) {
      const n = findAndIndex(id);
      if (!n) { mockRuntime._lastError = { message: 'not found' }; setTimeout(() => cb(undefined), 0); return; }
      if (changes.title) n.title = changes.title;
      if (changes.url) n.url = changes.url;
      setTimeout(() => cb(clone(n)), 0);
    },
    move(id, dest, cb) {
      const n = findAndIndex(id);
      const parent = findAndIndex(dest.parentId);
      if (!n || !parent) { mockRuntime._lastError = { message: 'not found' }; setTimeout(() => cb(undefined), 0); return; }
      removeFromParent(n);
      parent.children = parent.children || [];
      const idx = typeof dest.index === 'number' ? dest.index : parent.children.length;
      parent.children.splice(idx, 0, n);
      n.parentId = parent.id;
      setTimeout(() => cb(clone(n)), 0);
    },
    remove(id, cb) {
      const n = findAndIndex(id);
      if (!n || n.children && n.children.length) {
        mockRuntime._lastError = { message: n ? 'folder not empty' : 'not found' };
        setTimeout(() => cb(undefined), 0);
        return;
      }
      removeFromParent(n);
      nodeMap.delete(id);
      setTimeout(() => cb(), 0);
    },
    removeTree(id, cb) {
      const n = findAndIndex(id);
      if (!n) { mockRuntime._lastError = { message: 'not found' }; setTimeout(() => cb(undefined), 0); return; }
      (function drop(x) { nodeMap.delete(x.id); (x.children || []).forEach(drop); })(n);
      removeFromParent(n);
      setTimeout(() => cb(), 0);
    },
    search() { setTimeout(() => cb([]), 0); }
  };

  // ---- chrome.runtime
  const EXT_ROOT = new URL('..', document.currentScript.src).href;
  const PLACEHOLDER_FAVICON =
    'data:image/svg+xml,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#dfe9f6"/><circle cx="16" cy="16" r="6" fill="#4387f4"/></svg>'
    );

  const mockRuntime = {
    _lastError: undefined,
    getURL(path) {
      if (String(path).startsWith('_favicon')) {
        const pageUrl = new URL('https://mock.invalid/' + String(path)).searchParams.get('pageUrl') || '';
        let host = '';
        try { host = new URL(pageUrl).hostname; } catch (e) { /* ignore */ }
        const letter = (host.replace(/^www\./, '')[0] || '?').toUpperCase();
        return (
          'data:image/svg+xml,' +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#dfe9f6"/><text x="16" y="21" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#2f6fda">' +
              letter +
            '</text></svg>'
          )
        );
      }
      return EXT_ROOT + String(path).replace(/^\//, '');
    },
    sendMessage(payload, cb) {
      if (typeof cb === 'function') {
        mockRuntime._lastError = { message: 'mock: background 不可用' };
        setTimeout(() => {
          cb(undefined);
          mockRuntime._lastError = undefined;
        }, 0);
      }
    },
    getManifest() { return { version: '0.0.0-mock' }; },
    lastError: undefined
  };
  Object.defineProperty(mockRuntime, 'lastError', {
    get() { return mockRuntime._lastError; }
  });

  // ---- 组装
  const storageOnChanged = { addListener: () => {}, removeListener: () => {} }; // 顶层事件，页面仅注册不依赖触发
  window.chrome = {
    bookmarks: bookmarksApi,
    storage: {
      local: makeStorageArea(localStore),
      session: makeStorageArea(sessionStore),
      sync: makeStorageArea({}),
      onChanged: storageOnChanged
    },
    runtime: mockRuntime,
    tabs: {
      create(props, cb) { window.open(props.url, '_blank'); if (cb) setTimeout(cb, 0); }
    }
  };

  // 供 harness 控制台调试用
  window.__MOCK__ = { ROOT, nodeMap, localStore };
})();
