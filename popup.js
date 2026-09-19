document.addEventListener('DOMContentLoaded', () => {
  const totalCount = document.getElementById('totalCount');
  const invalidCount = document.getElementById('invalidCount');
  const quickScanBtn = document.getElementById('quickScanBtn');
  const stopScanBtn = document.getElementById('stopScanBtn');
  const openManagerBtn = document.getElementById('openManagerBtn');
  const refreshBtn = document.getElementById('refreshBtn');
  const statusMessage = document.getElementById('statusMessage');
  const scanSection = document.getElementById('scanSection');
  const scanProgress = document.getElementById('scanProgress');
  const scanPercent = document.getElementById('scanPercent');
  const scanText = document.getElementById('scanText');
  const scanChecked = document.getElementById('scanChecked');
  const scanInvalid = document.getElementById('scanInvalid');
  const scanTime = document.getElementById('scanTime');
  const resultPanel = document.getElementById('resultPanel');
  const resultMeta = document.getElementById('resultMeta');
  const resultList = document.getElementById('resultList');
  const resultEmptyState = document.getElementById('resultEmptyState');
  const selectedCountBadge = document.getElementById('selectedCountBadge');
  const selectAllBtn = document.getElementById('selectAllBtn');
  const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
  const clearResultsBtn = document.getElementById('clearResultsBtn');
  const confirmDialog = document.getElementById('confirmDialog');
  const confirmDialogTitle = document.getElementById('confirmDialogTitle');
  const confirmDialogMessage = document.getElementById('confirmDialogMessage');
  const confirmDialogOkBtn = document.getElementById('confirmDialogOkBtn');
  const confirmDialogCancelBtn = document.getElementById('confirmDialogCancelBtn');

  // 后台扫描引擎的状态镜像（scanState 快照）
  let currentScanState = null;
  let scanDurationInterval = null;
  let invalidBookmarks = [];
  let selectedInvalidIds = new Set();

  const t = (key, params) => window.BK_I18N.t(key, params);

  init();

  async function init() {
    await window.BK_I18N.initLocale();
    document.documentElement.lang = window.BK_I18N.getLocale();
    window.BK_I18N.applyElementTranslations();
    setupEventListeners();
    setVersionInfo();
    loadStats();
    syncScanStateFromBackground();
  }

  function setVersionInfo() {
    const versionInfo = document.getElementById('versionInfo');
    if (versionInfo) {
      versionInfo.textContent = `${t('app.brandName')} v${chrome.runtime.getManifest().version}`;
    }
  }

  function setupEventListeners() {
    quickScanBtn.addEventListener('click', handleScanButtonClick);
    stopScanBtn.addEventListener('click', handleStopScan);
    openManagerBtn.addEventListener('click', openManager);
    refreshBtn.addEventListener('click', handleRefresh);
    selectAllBtn.addEventListener('click', toggleSelectAll);
    deleteSelectedBtn.addEventListener('click', deleteSelectedBookmarks);
    clearResultsBtn.addEventListener('click', clearStoredResults);
    confirmDialogOkBtn.addEventListener('click', () => settleConfirmDialog(true));
    confirmDialogCancelBtn.addEventListener('click', () => settleConfirmDialog(false));
    confirmDialog.addEventListener('click', (event) => {
      if (event.target === confirmDialog) {
        settleConfirmDialog(false);
      }
    });
    confirmDialog.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        settleConfirmDialog(false);
      }
    });
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === 'local' && changes.scanState) {
        applyScanState(changes.scanState.newValue);
      }
    });
  }

  // ---- 自定义确认对话框：替代原生 confirm()
  let confirmDialogState = null;

  function showConfirmDialog({ title, message, confirmText } = {}) {
    if (confirmDialogState) {
      return Promise.resolve(false);
    }
    return new Promise((resolve) => {
      confirmDialogState = { resolve, lastFocused: document.activeElement };
      confirmDialogTitle.textContent = title || t('dialog.confirmTitle');
      confirmDialogMessage.textContent = message || '';
      confirmDialogOkBtn.textContent = confirmText || t('dialog.confirm');
      confirmDialog.classList.remove('hidden');
      confirmDialog.classList.add('show');
      setTimeout(() => confirmDialogOkBtn.focus(), 120);
    });
  }

  function settleConfirmDialog(result) {
    if (!confirmDialogState) {
      return;
    }
    const { resolve, lastFocused } = confirmDialogState;
    confirmDialogState = null;
    confirmDialog.classList.remove('show');
    setTimeout(() => confirmDialog.classList.add('hidden'), 160);
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
    resolve(result);
  }

  async function handleRefresh() {
    refreshBtn.disabled = true;
    try {
      await loadStats({ syncStoredResults: true });
      showStatus(t('popup.statusRefreshed'), 'success');
    } catch (error) {
      showStatus(t('popup.statusRefreshFailed'), 'error');
    } finally {
      refreshBtn.disabled = false;
    }
  }

  async function loadStats(options = {}) {
    try {
      const tree = await getBookmarkTree();
      let total = 0;
      const currentBookmarks = new Map();

      traverseBookmarks(tree, (node, path) => {
        if (isScannable(node.url)) {
          total += 1;
          currentBookmarks.set(node.id, {
            id: node.id,
            title: node.title || node.url,
            url: node.url,
            parentId: node.parentId,
            path
          });
        }
      });

      const scanResults = await getStoredScanResults();
      invalidBookmarks = sanitizeStoredBookmarks(scanResults?.invalidBookmarks || [])
        .filter((bookmark) => currentBookmarks.has(bookmark.id))
        .map((bookmark) => {
          const currentBookmark = currentBookmarks.get(bookmark.id);
          return {
            ...bookmark,
            title: currentBookmark.title,
            url: currentBookmark.url,
            path: currentBookmark.path
          };
        });
      selectedInvalidIds = new Set(invalidBookmarks.map((bookmark) => bookmark.id));

      if (options.syncStoredResults) {
        await persistScanResults();
      }

      animateNumber(totalCount, parseInt(totalCount.textContent, 10) || 0, total, 600);
      animateNumber(invalidCount, parseInt(invalidCount.textContent, 10) || 0, invalidBookmarks.length, 600);

      renderResultPanel(scanResults?.scanTime || null);
    } catch (error) {
      showStatus(t('popup.statusLoadFailed'), 'error');
    }
  }

  function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const diff = end - start;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      element.textContent = Math.round(start + diff * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  async function handleScanButtonClick() {
    if (currentScanState?.status === 'running') {
      return;
    }

    // 暂停中：主按钮此时是「继续扫描」
    if (currentScanState?.status === 'paused') {
      const resumeResponse = await sendScanMessage({ type: 'resumeScan' });
      applyScanState(resumeResponse?.state, { announce: true });
      return;
    }

    invalidBookmarks = [];
    selectedInvalidIds.clear();
    renderResultPanel(null);
    resetScanProgressUi();
    showStatus(t('popup.statusScanning'), 'warning');

    const response = await sendScanMessage({ type: 'startScan' });
    if (response?.state) {
      applyScanState(response.state, { announce: true });
    } else {
      applyScanState({ status: 'idle' });
      showStatus(t('popup.statusScanFailed'), 'error');
    }
  }

  function handleStopScan() {
    sendScanMessage({ type: 'stopScan' }).then((response) => {
      if (response?.state) {
        applyScanState(response.state, { announce: true });
      }
    });
  }

  // 打开 popup 时接上后台扫描状态
  async function syncScanStateFromBackground() {
    const response = await sendScanMessage({ type: 'getScanState' });
    if (response?.state) {
      applyScanState(response.state, { announce: false });
      const status = response.state.status;
      if (status === 'completed' || status === 'cancelled' || status === 'interrupted') {
        // 用户已看到最终结果，清除扩展图标角标
        sendScanMessage({ type: 'dismissScanBadge' });
      }
    }
  }

  function applyScanState(scan, options = {}) {
    if (!scan || !scan.status) {
      return;
    }

    const prevStatus = currentScanState?.status || 'idle';
    currentScanState = scan;

    if (scan.status === 'running' || scan.status === 'paused') {
      scanSection.classList.add('show');
      stopScanBtn.classList.remove('hidden');
      updateProgress(scan.total > 0 ? Math.round((scan.checked / scan.total) * 100) : 0);
      scanChecked.textContent = String(scan.checked);
      scanInvalid.textContent = String(scan.invalidCount);

      clearInterval(scanDurationInterval);
      updateElapsedDisplay(scan);
      if (scan.status === 'running') {
        scanDurationInterval = setInterval(() => updateElapsedDisplay(currentScanState), 1000);
        quickScanBtn.disabled = true;
        setScanButtonLabel(t('popup.quickScan'));
        scanText.textContent = t('popup.checking');
      } else {
        quickScanBtn.disabled = false;
        setScanButtonLabel(t('popup.resumeScan'));
        scanText.textContent = t('popup.paused');
      }
      return;
    }

    // completed / cancelled / interrupted / idle
    clearInterval(scanDurationInterval);
    scanDurationInterval = null;
    stopScanBtn.classList.add('hidden');
    quickScanBtn.disabled = false;
    setScanButtonLabel(t('popup.quickScan'));

    const wasActive = prevStatus === 'running' || prevStatus === 'paused';
    if ((scan.status === 'completed' || scan.status === 'cancelled') && (wasActive || options.announce === true)) {
      updateProgress(100);
      if (options.announce !== false) {
        loadStats().then(() => showFinalStatus(scan));
      }
    }
  }

  function showFinalStatus(scan) {
    if (scan.total === 0) {
      showStatus(t('popup.statusNoScannable'), 'warning');
      return;
    }
    if (scan.status === 'cancelled' || scan.status === 'interrupted') {
      showStatus(t('popup.statusScanCancelled'), 'warning');
      return;
    }
    if (scan.invalidCount > 0) {
      showStatus(t('popup.statusFoundInvalid', { n: scan.invalidCount }), 'warning');
    } else {
      showStatus(t('popup.statusAllValid'), 'success');
    }
  }

  function resetScanProgressUi() {
    updateProgress(0);
    scanChecked.textContent = '0';
    scanInvalid.textContent = '0';
    scanTime.textContent = '0s';
    scanText.textContent = t('popup.checking');
  }

  function updateElapsedDisplay(scan) {
    if (!scan) return;
    const elapsedMs = (scan.elapsedMs || 0) + (scan.status === 'running' ? Date.now() - (scan.segmentStart || Date.now()) : 0);
    scanTime.textContent = `${Math.max(0, Math.floor(elapsedMs / 1000))}s`;
  }

  function setScanButtonLabel(text) {
    const label = quickScanBtn.querySelector('[data-i18n]');
    if (label) {
      label.textContent = text;
    }
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

  function updateProgress(percent) {
    const circumference = 2 * Math.PI * 25;
    const offset = circumference - (percent / 100) * circumference;
    scanProgress.style.strokeDashoffset = offset;
    scanPercent.textContent = `${percent}%`;
  }

  function renderResultPanel(scanTimeIso) {
    const hasStoredResults = invalidBookmarks.length > 0 || Boolean(scanTimeIso);
    resultPanel.classList.toggle('hidden', !hasStoredResults);

    if (!hasStoredResults) {
      return;
    }

    if (scanTimeIso) {
      const formattedTime = new Date(scanTimeIso).toLocaleString(window.BK_I18N.getLocale(), {
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      resultMeta.textContent = `${t('popup.recentScanPrefix')}: ${formattedTime}`;
    } else {
      resultMeta.textContent = t('popup.preparingResults');
    }

    updateSelectionUi();

    if (invalidBookmarks.length === 0) {
      resultList.innerHTML = '';
      resultEmptyState.classList.remove('hidden');
      return;
    }

    resultEmptyState.classList.add('hidden');
    resultList.innerHTML = '';

    invalidBookmarks.forEach((bookmark) => {
      const item = document.createElement('label');
      item.className = `result-item${selectedInvalidIds.has(bookmark.id) ? ' selected' : ''}`;
      item.innerHTML = `
        <input class="result-checkbox" type="checkbox" ${selectedInvalidIds.has(bookmark.id) ? 'checked' : ''} />
        <div class="result-item-copy">
          <div class="result-item-title-row">
            <img class="result-item-favicon" alt="" loading="lazy" />
            <div class="result-item-title-wrap">
              <div class="result-item-title">${escapeHtml(bookmark.title || t('popup.untitled'))}</div>
              <div class="result-item-domain">${escapeHtml(getDomain(bookmark.url))}</div>
            </div>
          </div>
          <div class="result-item-url">${escapeHtml(bookmark.url)}</div>
        </div>
        <button class="result-item-open" type="button">打开</button>
      `;

      const checkbox = item.querySelector('.result-checkbox');
      const openButton = item.querySelector('.result-item-open');
      attachFavicon(item.querySelector('.result-item-favicon'), bookmark.url, bookmark.title);

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          selectedInvalidIds.add(bookmark.id);
        } else {
          selectedInvalidIds.delete(bookmark.id);
        }
        item.classList.toggle('selected', checkbox.checked);
        updateSelectionUi();
      });

      openButton.addEventListener('click', (event) => {
        event.preventDefault();
        chrome.tabs.create({ url: bookmark.url });
      });

      resultList.appendChild(item);
    });
  }

  function updateSelectionUi() {
    selectedCountBadge.textContent = `${selectedInvalidIds.size} ${t('popup.selectedBadge')}`;
    deleteSelectedBtn.disabled = selectedInvalidIds.size === 0;
    selectAllBtn.textContent = selectedInvalidIds.size === invalidBookmarks.length && invalidBookmarks.length > 0 ? t('popup.deselectAll') : t('popup.selectAll');
  }

  function toggleSelectAll() {
    if (invalidBookmarks.length === 0) {
      return;
    }

    const shouldSelectAll = selectedInvalidIds.size !== invalidBookmarks.length;
    selectedInvalidIds = shouldSelectAll
      ? new Set(invalidBookmarks.map((bookmark) => bookmark.id))
      : new Set();

    getStoredScanResults().then((result) => {
      renderResultPanel(result?.scanTime || null);
    });
  }

  async function deleteSelectedBookmarks() {
    if (selectedInvalidIds.size === 0) {
      showStatus(t('popup.statusSelectFirst'), 'warning');
      return;
    }

    const targets = invalidBookmarks.filter((bookmark) => selectedInvalidIds.has(bookmark.id));
    if (!(await showConfirmDialog({
      title: t('dialog.deleteTitle'),
      message: t('popup.confirmDeleteSelected', { n: targets.length }),
      confirmText: t('dialog.delete')
    }))) {
      return;
    }

    let deleted = 0;
    for (const bookmark of targets) {
      try {
        await new Promise((resolve, reject) => {
          chrome.bookmarks.remove(bookmark.id, () => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve();
            }
          });
        });
        deleted += 1;
      } catch (error) {
        showStatus(`${t('popup.statusDeleteFailed')}: ${bookmark.title}`, 'error');
      }
    }

    invalidBookmarks = invalidBookmarks.filter((bookmark) => !selectedInvalidIds.has(bookmark.id));
    selectedInvalidIds = new Set(invalidBookmarks.map((bookmark) => bookmark.id));
    await persistScanResults();
    await loadStats();
    showStatus(t('popup.statusDeleted', { n: deleted }), deleted > 0 ? 'success' : 'warning');
  }

  async function clearStoredResults() {
    invalidBookmarks = [];
    selectedInvalidIds.clear();
    await new Promise((resolve) => chrome.storage.local.remove(['scanResults'], resolve));
    await loadStats();
    showStatus(t('popup.statusCleared'), 'success');
  }

  function openManager() {
    chrome.tabs.create({ url: chrome.runtime.getURL('profile.html') });
  }

  function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status-message status-${type} show`;
    setTimeout(() => {
      statusMessage.classList.remove('show');
    }, 3000);
  }

  async function persistScanResults() {
    if (invalidBookmarks.length === 0) {
      await new Promise((resolve) => chrome.storage.local.remove(['scanResults'], resolve));
      return;
    }

    await new Promise((resolve) => {
      chrome.storage.local.set({
        scanResults: {
          invalidCount: invalidBookmarks.length,
          invalidBookmarks,
          scanTime: new Date().toISOString()
        }
      }, resolve);
    });
  }

  function getStoredScanResults() {
    return new Promise((resolve) => {
      chrome.storage.local.get(['scanResults'], (result) => resolve(result.scanResults || null));
    });
  }

  function getBookmarkTree() {
    return new Promise((resolve) => chrome.bookmarks.getTree(resolve));
  }

  function traverseBookmarks(tree, callback, path = []) {
    const nodes = Array.isArray(tree) ? tree : tree?.children || [];
    nodes.forEach((node) => {
      const nextPath = node.title ? [...path, node.title] : path;
      if (node.children) {
        traverseBookmarks(node.children, callback, nextPath);
      } else {
        callback(node, path);
      }
    });
  }

  function isScannable(url) {
    return Boolean(
      url &&
      !url.startsWith('chrome://') &&
      !url.startsWith('javascript:') &&
      !url.startsWith('data:')
    );
  }

  function sanitizeStoredBookmarks(bookmarks) {
    return bookmarks.filter((bookmark) => bookmark && bookmark.id && bookmark.url);
  }

  function getDomain(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch (error) {
      return url;
    }
  }

  function getFaviconUrl(url, size = 32) {
    return chrome.runtime.getURL(`/_favicon/?pageUrl=${encodeURIComponent(url)}&size=${size}`);
  }

  function createFaviconFallback(title = '') {
    const letter = String(title || '?').trim().charAt(0).toUpperCase() || '?';
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="14" fill="#e7f0ff"/>
        <text x="50%" y="54%" text-anchor="middle" font-size="28" font-family="Arial, sans-serif" fill="#2f6fda">${letter}</text>
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

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
});
