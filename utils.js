// popup 与 profile 页共享的纯工具函数（i18n.js 同款 window 全局模式）
// background.js 是 service worker，无法使用 window 全局，不引入本文件
(function (global) {
  'use strict';

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function getDomain(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch (error) {
      return url;
    }
  }

  function isScannable(url) {
    return Boolean(
      url &&
      !url.startsWith('chrome://') &&
      !url.startsWith('javascript:') &&
      !url.startsWith('data:')
    );
  }

  function getFaviconUrl(url, size = 32) {
    return chrome.runtime.getURL(`/_favicon/?pageUrl=${encodeURIComponent(url)}&size=${size}`);
  }

  function createFaviconFallback(title = '') {
    const letter = String(title || '?').trim().charAt(0).toUpperCase() || '?';
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="14" fill="#e7f0ff"/>
        <text x="50%" y="54%" text-anchor="middle" font-size="28" font-family="Arial, sans-serif" fill="#2f6fda">${escapeHtml(letter)}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function attachFavicon(image, url, title = '') {
    if (!image || !url) {
      return;
    }
    image.src = getFaviconUrl(url, 16);
    image.addEventListener('error', () => {
      image.src = createFaviconFallback(title);
    }, { once: true });
  }

  function sendScanMessage(payload) {
    return new Promise((resolve) => {
      try {
        chrome.runtime.sendMessage(payload, (response) => {
          if (chrome.runtime.lastError) {
            resolve(null);
            return;
          }
          resolve(response);
        });
      } catch (error) {
        resolve(null);
      }
    });
  }

  function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const diff = end - start;
    let done = false;

    // rAF 在后台标签页会被暂停：兜底定时器保证最终值一定写入
    const finish = () => {
      if (done) {
        return;
      }
      done = true;
      element.textContent = String(Math.round(end));
    };

    function update(currentTime) {
      if (done) {
        return;
      }
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      element.textContent = Math.round(start + diff * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        finish();
      }
    }

    requestAnimationFrame(update);
    setTimeout(finish, duration + 100);
  }

  // 弹窗显隐时长与 tokens.css 保持同步，避免 JS 硬编码和 CSS 过渡脱节
  function getDurationMs(cssVar, fallback) {
    const parsed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(cssVar));
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
  }

  // 确认对话框控制器：统一两页的显隐/焦点归还逻辑，事件绑定仍留在各页面
  function createConfirmController({ dialog, titleEl, messageEl, okBtn, t }) {
    let pending = null;
    let hideDelay = 180;
    let focusDelay = 200;

    function ensureDurations() {
      if (hideDelay === 180 && focusDelay === 200) {
        hideDelay = getDurationMs('--duration-normal', 250);
        focusDelay = getDurationMs('--duration-fast', 150);
      }
    }

    function show({ title, message, confirmText, danger = false } = {}) {
      if (pending) {
        return Promise.resolve(false);
      }
      ensureDurations();
      return new Promise((resolve) => {
        pending = { resolve, lastFocused: document.activeElement };
        titleEl.textContent = title || t('dialog.confirmTitle');
        messageEl.textContent = message || '';
        okBtn.textContent = confirmText || t('dialog.confirm');
        okBtn.className = danger ? 'btn btn-danger' : 'btn btn-primary';
        dialog.classList.remove('hidden');
        requestAnimationFrame(() => dialog.classList.add('show'));
        setTimeout(() => okBtn.focus(), focusDelay);
      });
    }

    function settle(result) {
      if (!pending) {
        return;
      }
      const { resolve, lastFocused } = pending;
      pending = null;
      dialog.classList.remove('show');
      setTimeout(() => dialog.classList.add('hidden'), hideDelay);
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
      resolve(result);
    }

    function isOpen() {
      return pending !== null;
    }

    return { show, settle, isOpen };
  }

  global.BK_UTILS = {
    escapeHtml,
    getDomain,
    isScannable,
    getFaviconUrl,
    createFaviconFallback,
    attachFavicon,
    sendScanMessage,
    animateNumber,
    createConfirmController
  };
})(window);
