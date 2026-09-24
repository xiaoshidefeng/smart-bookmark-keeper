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

// ===== 后台统一扫描引擎 =====
// 驱动循环运行在 service worker 中，popup / 管理页只负责发起与订阅，
// 页面关闭不会中断扫描；进度通过 storage 键 scanState 节流同步给页面。
const SCAN_ENGINE = {
  CONCURRENCY: 8,
  BATCH_SIZE: 24,
  BATCH_DELAY_MS: 450,
  CHECKPOINT_INTERVAL_MS: 500,
  KEEPALIVE_ALARM: 'scanKeepAlive',
  RESUME_MAX_AGE_MS: 24 * 60 * 60 * 1000,
  DEFAULT_TIMEOUT_MS: 15000,
  BADGE_COLOR: '#2f6fda'
};

const SCAN_STATE_KEY = 'scanState';

// 内存运行时：SW 被回收即丢失，依靠 storage 中的 scanState 断点自愈续扫
let scanRuntime = null;
let latestScanState = { status: 'idle' };
let checkpointTimerId = null;
let badgeColorReady = false;
let engineLock = Promise.resolve();

// 串行化引擎控制操作（start/pause/resume/stop/自愈），避免并发入口双重启动
function withEngineLock(task) {
  const run = engineLock.then(task, task);
  engineLock = run.then(() => {}, () => {});
  return run;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getBookmarkTreeAsync() {
  return new Promise((resolve) => {
    try {
      chrome.bookmarks.getTree((tree) => resolve(tree || []));
    } catch (error) {
      resolve([]);
    }
  });
}

function isScannableUrl(url) {
  return Boolean(
    url &&
    !url.startsWith('chrome://') &&
    !url.startsWith('javascript:') &&
    !url.startsWith('data:')
  );
}

function collectScannableBookmarks(tree) {
  const result = [];
  const walk = (nodes, path) => {
    const list = Array.isArray(nodes) ? nodes : nodes?.children || [];
    list.forEach((node) => {
      const nextPath = node.title ? [...path, node.title] : path;
      if (node.children) {
        walk(node.children, nextPath);
      } else if (isScannableUrl(node.url)) {
        result.push({
          id: node.id,
          title: node.title || node.url,
          url: node.url,
          parentId: node.parentId,
          path: nextPath
        });
      }
    });
  };
  walk(tree, []);
  return result;
}

function freezeElapsed(rt) {
  if (rt.status === 'running') {
    rt.elapsedMs += Date.now() - rt.segmentStart;
    rt.segmentStart = Date.now();
  }
}

function buildPublicState(rt) {
  return {
    status: rt.status,
    total: rt.total,
    checked: rt.checked,
    errorCount: rt.errorCount,
    invalidCount: rt.invalidBookmarks.length,
    invalidBookmarks: rt.invalidBookmarks.map((b) => ({ id: b.id, title: b.title, url: b.url, path: b.path })),
    startTime: rt.startTime,
    elapsedMs: rt.elapsedMs + (rt.status === 'running' ? Date.now() - rt.segmentStart : 0),
    segmentStart: rt.segmentStart,
    timeoutMs: rt.timeoutMs,
    scanTime: rt.scanTime || null
  };
}

function getScanStateSnapshot() {
  // 页面不需要 checkedIds（可能上万条），剥离后再回传
  const snapshot = scanRuntime ? buildPublicState(scanRuntime) : latestScanState;
  const { checkedIds, ...publicState } = snapshot;
  return publicState;
}

async function writeScanState(rt) {
  const snapshot = buildPublicState(rt);
  snapshot.checkedIds = [...rt.checkedIds];
  snapshot.updatedAt = Date.now();
  latestScanState = snapshot;
  try {
    await chrome.storage.local.set({ [SCAN_STATE_KEY]: snapshot });
  } catch (error) {}
}

// 检查点写盘节奏：checkedIds 快照随扫描线性增长，若每次 tick 全量写盘，
// 总写入量是 O(n²) 字节且每 0.5s 广播给所有打开的页面。改为「进度增量达标
// 或距上次写盘超时」才写，暂停/恢复/结束仍走 writeScanState 即时落盘。
const CHECKPOINT_MIN_DELTA = 200;
const CHECKPOINT_MAX_GAP_MS = 3000;

function scheduleCheckpoint() {
  if (checkpointTimerId) return;
  checkpointTimerId = setTimeout(() => {
    checkpointTimerId = null;
    if (!scanRuntime) return;
    const rt = scanRuntime;
    // 没有新进度就不重复写 storage
    if (
      rt.lastWrittenChecked === rt.checked &&
      rt.lastWrittenInvalid === rt.invalidBookmarks.length
    ) {
      return;
    }
    const dueToProgress = rt.checked - (rt.lastWrittenChecked || 0) >= CHECKPOINT_MIN_DELTA;
    const dueToTime = Date.now() - (rt.lastCheckpointAt || 0) >= CHECKPOINT_MAX_GAP_MS;
    if (!dueToProgress && !dueToTime) {
      return;
    }
    rt.lastWrittenChecked = rt.checked;
    rt.lastWrittenInvalid = rt.invalidBookmarks.length;
    rt.lastCheckpointAt = Date.now();
    writeScanState(rt);
    updateRunningBadge(rt);
  }, SCAN_ENGINE.CHECKPOINT_INTERVAL_MS);
}

function setBadgeText(text) {
  if (!badgeColorReady) {
    badgeColorReady = true;
    try {
      chrome.action.setBadgeBackgroundColor({ color: SCAN_ENGINE.BADGE_COLOR });
    } catch (error) {}
  }
  try {
    chrome.action.setBadgeText({ text });
  } catch (error) {}
}

function updateRunningBadge(rt) {
  if (!scanRuntime || scanRuntime !== rt) return;
  if (rt.status === 'paused') {
    setBadgeText('⏸');
    return;
  }
  const percent = rt.total > 0 ? Math.min(100, Math.round((rt.checked / rt.total) * 100)) : 0;
  setBadgeText(`${percent}%`);
}

function updateFinalBadge(snapshot) {
  if (snapshot.invalidCount > 0) {
    setBadgeText(String(snapshot.invalidCount));
    return;
  }
  setBadgeText(snapshot.status === 'completed' ? '✓' : '');
}

async function persistFinalResults(rt, allowClear) {
  if (rt.invalidBookmarks.length === 0) {
    // 完成时清掉旧结果；停止时不清，避免误删用户上一次的结果
    if (allowClear) {
      try {
        await chrome.storage.local.remove('scanResults');
      } catch (error) {}
    }
    return;
  }

  try {
    await chrome.storage.local.set({
      scanResults: {
        invalidCount: rt.invalidBookmarks.length,
        invalidBookmarks: rt.invalidBookmarks.map((b) => ({ id: b.id, title: b.title, url: b.url, path: b.path })),
        scanTime: rt.scanTime || new Date().toISOString()
      }
    });
  } catch (error) {}
}

async function finalizeScan(rt, status) {
  freezeElapsed(rt);
  rt.status = status;
  if (!rt.scanTime) {
    rt.scanTime = new Date().toISOString();
  }
  if (checkpointTimerId) {
    clearTimeout(checkpointTimerId);
    checkpointTimerId = null;
  }
  // 先写 scanResults 再写 scanState，页面收到完成事件时结果已就绪。
  // 仅"完成且有扫过书签"时才允许清空旧结果，与旧版页面行为一致
  await persistFinalResults(rt, status === 'completed' && rt.total > 0);
  const snapshot = buildPublicState(rt);
  snapshot.updatedAt = Date.now();
  latestScanState = snapshot;
  try {
    await chrome.storage.local.set({ [SCAN_STATE_KEY]: snapshot });
  } catch (error) {}
  clearKeepAliveAlarm();
  updateFinalBadge(snapshot);
  if (scanRuntime === rt) {
    scanRuntime = null;
  }
}

function runWorkers(rt) {
  if (scanRuntime !== rt || rt.status !== 'running') return;
  const remaining = rt.total - rt.cursor;
  if (remaining <= 0) {
    finalizeScan(rt, 'completed');
    return;
  }
  const workerCount = Math.min(SCAN_ENGINE.CONCURRENCY, remaining);
  const workers = Array.from({ length: workerCount }, () => scanWorker(rt));
  Promise.all(workers).then(() => {
    if (scanRuntime === rt && rt.status === 'running') {
      finalizeScan(rt, 'completed');
    }
  });
}

async function scanWorker(rt) {
  while (scanRuntime === rt && rt.status === 'running') {
    const index = rt.cursor;
    if (index >= rt.total) return;
    rt.cursor = index + 1;
    const bookmark = rt.bookmarks[index];

    // 与原管理页实现一致的限速：每 BATCH_SIZE 个暂停片刻
    if (index > 0 && index % SCAN_ENGINE.BATCH_SIZE === 0) {
      await sleep(SCAN_ENGINE.BATCH_DELAY_MS);
      if (scanRuntime !== rt || rt.status !== 'running') return;
    }

    const controller = new AbortController();
    activeRequests.add(controller);
    let result;
    try {
      result = await validateUrlWithWebRequest(bookmark.url, controller.signal, rt.timeoutMs);
    } catch (error) {
      result = { valid: false, isInvalid: false, error: true };
    } finally {
      activeRequests.delete(controller);
    }

    // 暂停态仍记录返回结果，停止后的迟到结果直接丢弃
    if (scanRuntime !== rt || (rt.status !== 'running' && rt.status !== 'paused')) return;

    rt.checkedIds.add(bookmark.id);
    if (result?.error) {
      rt.errorCount += 1;
    }
    if (result?.isInvalid) {
      rt.invalidBookmarks.push({
        id: bookmark.id,
        title: bookmark.title,
        url: bookmark.url,
        path: bookmark.path
      });
    }
    rt.checked += 1;
    scheduleCheckpoint();
  }
}

async function startBackgroundScan(timeoutMs) {
  if (scanRuntime) {
    return { ok: false, alreadyRunning: true, state: getScanStateSnapshot() };
  }

  const tree = await getBookmarkTreeAsync();
  // 建树期间可能已有其他入口开始扫描
  if (scanRuntime) {
    return { ok: false, alreadyRunning: true, state: getScanStateSnapshot() };
  }

  const bookmarks = collectScannableBookmarks(tree);
  const rt = {
    status: 'running',
    bookmarks,
    cursor: 0,
    total: bookmarks.length,
    checked: 0,
    errorCount: 0,
    invalidBookmarks: [],
    checkedIds: new Set(),
    startTime: Date.now(),
    elapsedMs: 0,
    segmentStart: Date.now(),
    timeoutMs: Number(timeoutMs) > 0 ? Number(timeoutMs) : SCAN_ENGINE.DEFAULT_TIMEOUT_MS,
    scanTime: null
  };
  scanRuntime = rt;
  await writeScanState(rt);
  updateRunningBadge(rt);
  ensureKeepAliveAlarm();

  if (bookmarks.length === 0) {
    await finalizeScan(rt, 'completed');
    return { ok: true, state: latestScanState };
  }

  runWorkers(rt);
  return { ok: true, state: buildPublicState(rt) };
}

async function pauseBackgroundScan() {
  if (!scanRuntime || scanRuntime.status !== 'running') {
    return { ok: false, state: getScanStateSnapshot() };
  }
  const rt = scanRuntime;
  freezeElapsed(rt);
  rt.status = 'paused';
  await writeScanState(rt);
  updateRunningBadge(rt);
  clearKeepAliveAlarm();
  return { ok: true, state: buildPublicState(rt) };
}

async function resumeBackgroundScan() {
  if (scanRuntime && scanRuntime.status === 'paused') {
    const rt = scanRuntime;
    rt.status = 'running';
    rt.segmentStart = Date.now();
    await writeScanState(rt);
    updateRunningBadge(rt);
    ensureKeepAliveAlarm();
    runWorkers(rt);
    return { ok: true, state: buildPublicState(rt) };
  }

  // SW 可能在暂停期间被回收，从 storage 断点恢复
  if (!scanRuntime && latestScanState?.status === 'paused') {
    return resumeFromCheckpoint(latestScanState);
  }

  return { ok: false, state: getScanStateSnapshot() };
}

async function resumeFromCheckpoint(stored) {
  if (scanRuntime) {
    return { ok: false, alreadyRunning: true, state: buildPublicState(scanRuntime) };
  }

  const tree = await getBookmarkTreeAsync();
  if (scanRuntime) {
    return { ok: false, alreadyRunning: true, state: buildPublicState(scanRuntime) };
  }

  const checkedIds = new Set(stored.checkedIds || []);
  const bookmarks = collectScannableBookmarks(tree).filter((b) => !checkedIds.has(b.id));
  const rt = {
    status: 'running',
    bookmarks,
    cursor: 0,
    total: bookmarks.length + checkedIds.size,
    checked: checkedIds.size,
    errorCount: stored.errorCount || 0,
    invalidBookmarks: (stored.invalidBookmarks || []).map((b) => ({ ...b })),
    checkedIds,
    startTime: stored.startTime || Date.now(),
    elapsedMs: stored.elapsedMs || 0,
    segmentStart: Date.now(),
    timeoutMs: Number(stored.timeoutMs) > 0 ? Number(stored.timeoutMs) : SCAN_ENGINE.DEFAULT_TIMEOUT_MS,
    scanTime: null
  };
  scanRuntime = rt;
  await writeScanState(rt);
  updateRunningBadge(rt);
  ensureKeepAliveAlarm();

  runWorkers(rt);
  return { ok: true, state: buildPublicState(rt) };
}

async function stopBackgroundScan() {
  if (!scanRuntime) {
    return { ok: false, state: getScanStateSnapshot() };
  }
  const rt = scanRuntime;
  freezeElapsed(rt);
  rt.status = 'cancelled';
  // 中止在途请求（与旧 cancelScan 相同的通道）
  activeRequests.forEach((controller) => controller.abort());
  activeRequests.clear();
  await finalizeScan(rt, 'cancelled');
  return { ok: true, state: latestScanState };
}

// SW 冷启动 / 保活唤醒自检：storage 里状态为 running 且内存无任务时从断点续扫
async function selfHealScan() {
  try {
    let stored = null;
    try {
      const data = await chrome.storage.local.get(SCAN_STATE_KEY);
      stored = data?.[SCAN_STATE_KEY] || null;
    } catch (error) {}
    latestScanState = stored || { status: 'idle' };

    if (!stored || stored.status !== 'running' || scanRuntime) return;
    const lastActiveAt = stored.updatedAt || stored.startTime || 0;
    if (Date.now() - lastActiveAt > SCAN_ENGINE.RESUME_MAX_AGE_MS) {
      // 陈旧任务不复活，标记中断即可
      latestScanState = { ...stored, status: 'interrupted', updatedAt: Date.now() };
      try {
        await chrome.storage.local.set({ [SCAN_STATE_KEY]: latestScanState });
      } catch (error) {}
      setBadgeText('');
      return;
    }
    await resumeFromCheckpoint(stored);
  } catch (error) {}
}

function ensureKeepAliveAlarm() {
  try {
    chrome.alarms.create(SCAN_ENGINE.KEEPALIVE_ALARM, { periodInMinutes: 0.5 });
  } catch (error) {}
}

function clearKeepAliveAlarm() {
  try {
    chrome.alarms.clear(SCAN_ENGINE.KEEPALIVE_ALARM);
  } catch (error) {}
}

// SW 每次启动都会执行：从 storage 恢复被中断的扫描
const scanBootPromise = withEngineLock(() => selfHealScan());

chrome.alarms.onAlarm.addListener((alarm) => {
  // 保活唤醒：若内存运行时已丢失（此前 SW 被回收），从断点续扫
  if (alarm.name === SCAN_ENGINE.KEEPALIVE_ALARM && !scanRuntime) {
    withEngineLock(() => selfHealScan());
  }
});

// 当扩展安装时执行
chrome.runtime.onInstalled.addListener(function() {
  console.log('Bookmarker extension installed');
});

// 监听来自popup或网页的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // 停止扫描（cancelScan 为兼容旧版页面的消息名）
  if (request.type === 'cancelScan' || request.type === 'stopScan') {
    scanBootPromise.then(() => withEngineLock(() => stopBackgroundScan())).then(sendResponse);
    return true;
  }

  // 开始一次新的后台扫描
  if (request.type === 'startScan') {
    scanBootPromise.then(() => withEngineLock(() => startBackgroundScan(request.timeoutMs))).then(sendResponse);
    return true;
  }

  if (request.type === 'pauseScan') {
    scanBootPromise.then(() => withEngineLock(() => pauseBackgroundScan())).then(sendResponse);
    return true;
  }

  if (request.type === 'resumeScan') {
    scanBootPromise.then(() => withEngineLock(() => resumeBackgroundScan())).then(sendResponse);
    return true;
  }

  if (request.type === 'getScanState') {
    scanBootPromise.then(() => {
      sendResponse({ state: getScanStateSnapshot() });
    });
    return true;
  }

  // 用户已查看最终结果，清除扩展图标角标
  if (request.type === 'dismissScanBadge') {
    const status = latestScanState?.status;
    if (status === 'completed' || status === 'cancelled' || status === 'interrupted') {
      setBadgeText('');
    }
    sendResponse({ ok: true });
    return;
  }
});

// 使用webRequest API验证URL（不打开标签页），特别优化DNS错误检测。
// http 书签被明确拒绝时（4xx/5xx、端口拒绝）自动升级 https 重试一次：
// 不少站点已下线 http 端口（如 study.163.com 整站 80 端口 403），
// 浏览器会自动升级 https 访问，按书签原始协议请求会被误判失效。
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
    const first = await probeUrlWithWebRequest(url, signal, timeout);

    if (urlObj.protocol === 'http:' && first.isInvalid && shouldUpgradeRetryWithHttps(first.reason)) {
      const upgraded = await probeUrlWithWebRequest(url.replace(/^http:/, 'https:'), signal, timeout);
      if (upgraded.valid) {
        return { ...upgraded, reason: `${upgraded.reason} (http→https)` };
      }
      // https 也拒绝时采用 https 的结论，与浏览器实际访问行为一致
      return upgraded;
    }

    return first;
  } catch (error) {
    return {
      valid: false,
      reason: `Invalid URL format: ${error.message}`,
      isInvalid: true
    };
  }
}

// 是否值得用 https 重试：仅针对明确拒绝类失败。
// DNS 解析失败与协议无关，超时重试会让等待时间翻倍，均不重试。
function shouldUpgradeRetryWithHttps(reason) {
  const text = String(reason || '');
  if (/not_resolved|name_not_resolved|dns/i.test(text)) return false;
  if (/^HTTP [45]\d{2}/.test(text)) return true;
  if (/refused|unreachable/i.test(text)) return true;
  return false;
}

// 单次探测：对给定 URL 发起请求并监听网络事件
async function probeUrlWithWebRequest(url, signal, timeout = 15000) {
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
