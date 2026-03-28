// background.js - 处理后台任务
console.log('Background script loaded');

// 配置常量
const CONFIG = {
  TIMEOUT: {
    DEFAULT: 8000,    // 默认超时时间 8秒
    MIN: 3000,         // 最小超时时间 3秒
    MAX: 15000         // 最大超时时间 15秒
  },
  BATCH_SIZE: 30
};

// 活动请求控制器集合
const activeRequests = new Set();

// 当扩展安装时执行
chrome.runtime.onInstalled.addListener(function() {
  console.log('Bookmarker extension installed');
});

// 监听扩展图标点击事件，并打开书签管理页面
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL("profile.html") });
});

// 监听来自popup或网页的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // 取消扫描
  if (request.type === 'cancelScan') {
    activeRequests.forEach(controller => controller.abort());
    activeRequests.clear();
    return;
  }

  // 获取所有书签树（包括空文件夹检查）
  if (request.action === 'getAllBookmarks') {
    chrome.bookmarks.getTree((tree) => {
      sendResponse({ bookmarks: tree });
    });
    return true;
  }
  
  // 获取书签
  if (request.action === 'getBookmarks') {
    chrome.bookmarks.getTree((tree) => {
      sendResponse({ bookmarks: tree });
    });
    return true;
  }
  
  // 删除书签
  if (request.action === 'removeBookmark') {
    chrome.bookmarks.remove(request.id, () => {
      console.log('Bookmark removed:', request.id);
    });
    return;
  }
  
  // 删除文件夹
  if (request.action === 'removeFolder') {
    chrome.bookmarks.removeTree(request.id, () => {
      console.log('Folder removed:', request.id);
    });
    return;
  }
  
  // 非侵入式验证URL（使用webRequest API）
  if (request.action === 'validateUrlSimple') {
    const controller = new AbortController();
    activeRequests.add(controller);
    
    // 使用传入的timeout，默认为15秒
    const timeout = request.timeout || 15000;
    
    validateUrlWithWebRequest(request.url, controller.signal, timeout)
      .then(result => {
        activeRequests.delete(controller);
        sendResponse(result);
      })
      .catch(error => {
        activeRequests.delete(controller);
        sendResponse({
          valid: false,
          reason: error.message,
          isInvalid: false
        });
      });
    return true;
  }
});

// 使用webRequest API验证URL（不打开标签页），特别优化DNS错误检测
async function validateUrlWithWebRequest(url, signal, timeout = 15000) {
  try {
    const specialProtocols = [
      'chrome:', 'chrome-extension:', 'firefox:', 'file:', 'data:', 'javascript:', 'about:', 'edge:', 'brave:'
    ];

    if (specialProtocols.some(protocol => url.startsWith(protocol))) {
      return {
        valid: true,
        reason: 'Special protocol',
        isInvalid: false
      };
    }

    const urlObj = new URL(url);

    return new Promise((resolve) => {
      let isResolved = false;
      let hasAnyResponse = false;
      let fetchController = new AbortController();
      const urlPatterns = [
        url,
        urlObj.protocol === 'https:' ? url.replace(/^https:/, 'http:') : url.replace(/^http:/, 'https:')
      ];

      const resolveResult = (result) => {
        if (!isResolved) {
          isResolved = true;
          clearTimeout(fetchTimeoutId);
          clearTimeout(responseTimeoutId);
          signal?.removeEventListener('abort', abortListener);
          removeListeners();
          resolve(result);
        }
      };

      const removeListeners = () => {
        try {
          chrome.webRequest.onResponseStarted.removeListener(responseListener);
          chrome.webRequest.onBeforeRedirect.removeListener(redirectListener);
          chrome.webRequest.onCompleted.removeListener(completeListener);
          chrome.webRequest.onErrorOccurred.removeListener(errorListener);
        } catch (error) {}
      };

      const abortListener = () => {
        fetchController.abort();
        resolveResult({
          valid: false,
          reason: 'Scan cancelled',
          isInvalid: false
        });
      };

      const errorListener = (details) => {
        if (isResolved) return;
        hasAnyResponse = true;

        const errorLower = details.error.toLowerCase();
        const connectionErrors = ['not_resolved', 'name_not_resolved', 'dns', 'unreachable', 'refused'];
        const maybeAccessibleErrors = ['timed_out', 'timeout', 'reset', 'aborted', 'blocked', 'failed'];

        if (connectionErrors.some(fragment => errorLower.includes(fragment))) {
          resolveResult({
            valid: false,
            reason: details.error,
            isInvalid: true
          });
          return;
        }

        if (maybeAccessibleErrors.some(fragment => errorLower.includes(fragment))) {
          resolveResult({
            valid: true,
            reason: details.error,
            isInvalid: false
          });
          return;
        }

        resolveResult({
          valid: false,
          reason: details.error,
          isInvalid: false
        });
      };

      const responseListener = (details) => {
        if (isResolved) return;
        hasAnyResponse = true;
        if (details.statusCode >= 200 && details.statusCode < 400) {
          resolveResult({
            valid: true,
            reason: `HTTP ${details.statusCode}`,
            isInvalid: false
          });
        }
      };

      const redirectListener = (details) => {
        if (isResolved) return;
        hasAnyResponse = true;
        if (details.redirectUrl) {
          resolveResult({
            valid: true,
            reason: `Redirected to ${details.redirectUrl}`,
            isInvalid: false
          });
        }
      };

      const completeListener = (details) => {
        if (isResolved) return;
        hasAnyResponse = true;

        if (details.statusCode >= 200 && details.statusCode < 400) {
          resolveResult({
            valid: true,
            reason: `HTTP ${details.statusCode}`,
            isInvalid: false
          });
        } else if (details.statusCode >= 400 && details.statusCode < 500) {
          resolveResult({
            valid: false,
            reason: `HTTP ${details.statusCode}`,
            isInvalid: true
          });
        } else if (details.statusCode >= 500) {
          resolveResult({
            valid: false,
            reason: `HTTP ${details.statusCode}`,
            isInvalid: true
          });
        } else {
          resolveResult({
            valid: false,
            reason: `HTTP ${details.statusCode}`,
            isInvalid: false
          });
        }
      };

      signal?.addEventListener('abort', abortListener, { once: true });
      chrome.webRequest.onResponseStarted.addListener(
        responseListener,
        { urls: urlPatterns, types: ['main_frame', 'xmlhttprequest'] }
      );
      chrome.webRequest.onBeforeRedirect.addListener(
        redirectListener,
        { urls: urlPatterns, types: ['main_frame', 'xmlhttprequest'] }
      );
      chrome.webRequest.onErrorOccurred.addListener(
        errorListener,
        { urls: urlPatterns, types: ['main_frame', 'xmlhttprequest'] }
      );
      chrome.webRequest.onCompleted.addListener(
        completeListener,
        { urls: urlPatterns, types: ['main_frame', 'xmlhttprequest'] }
      );

      const fetchTimeoutId = setTimeout(() => {
        fetchController.abort();
      }, timeout);

      fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        signal: fetchController.signal,
        cache: 'no-cache',
        credentials: 'omit',
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      })
      .then(() => {
        hasAnyResponse = true;
        clearTimeout(fetchTimeoutId);
      })
      .catch(error => {
        clearTimeout(fetchTimeoutId);
        if (isResolved || error.name === 'AbortError') {
          return;
        }

        const message = String(error.message || '').toLowerCase();
        if (message.includes('failed to fetch') || message.includes('cors')) {
          resolveResult({
            valid: true,
            reason: 'Site blocks automated access',
            isInvalid: false
          });
        }
      });

      const responseTimeoutId = setTimeout(() => {
        if (!isResolved) {
          if (!hasAnyResponse) {
            resolveResult({
              valid: false,
              reason: 'Request timeout',
              isInvalid: true
            });
          } else {
            resolveResult({
              valid: true,
              reason: 'Slow response',
              isInvalid: false
            });
          }
        }
      }, timeout);
    });
  } catch (error) {
    return {
      valid: false,
      reason: `Invalid URL format: ${error.message}`,
      isInvalid: true
    };
  }
}

// 轻量验证（仅检查URL结构）
async function validateUrlSimple(url) {
  try {
    const urlObj = new URL(url);
    
    // 检查协议
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      return { valid: true, reason: 'Non-HTTP protocol', isInvalid: false };
    }
    
    // 简单域名检查
    const hostname = urlObj.hostname.toLowerCase();
    if (!hostname || hostname.length < 2) {
      return { valid: false, reason: 'Invalid hostname', isInvalid: true };
    }
    
    // 检查常见的无效域名模式
    if (hostname.includes("..") || hostname.startsWith(" ") || hostname.endsWith(" ")) {
      return { valid: false, reason: 'Suspicious domain format', isInvalid: true };
    }
    
    return { valid: true, reason: 'Format OK', isInvalid: false };
  } catch (error) {
    return { valid: false, reason: 'Invalid URL', isInvalid: true };
  }
}
