document.addEventListener('DOMContentLoaded', () => {
  const totalCount = document.getElementById('totalCount');
  const invalidCount = document.getElementById('invalidCount');
  const quickScanBtn = document.getElementById('quickScanBtn');
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

  let isScanning = false;
  let scanStartTime = 0;
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
  }

  function setVersionInfo() {
    const versionInfo = document.getElementById('versionInfo');
    if (versionInfo) {
      versionInfo.textContent = `${t('app.brandName')} v${chrome.runtime.getManifest().version}`;
    }
  }

  function setupEventListeners() {
    quickScanBtn.addEventListener('click', startQuickScan);
    openManagerBtn.addEventListener('click', openManager);
    refreshBtn.addEventListener('click', handleRefresh);
    selectAllBtn.addEventListener('click', toggleSelectAll);
    deleteSelectedBtn.addEventListener('click', deleteSelectedBookmarks);
    clearResultsBtn.addEventListener('click', clearStoredResults);
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

  async function startQuickScan() {
    if (isScanning) {
      return;
    }

    isScanning = true;
    quickScanBtn.disabled = true;
    scanSection.classList.add('show');
    scanStartTime = Date.now();
    invalidBookmarks = [];
    selectedInvalidIds.clear();
    updateProgress(0);
    scanChecked.textContent = '0';
    scanInvalid.textContent = '0';
    scanTime.textContent = '0s';
    scanText.textContent = t('popup.checking');
    renderResultPanel(null);

    scanDurationInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - scanStartTime) / 1000);
      scanTime.textContent = `${elapsed}s`;
    }, 1000);

    showStatus(t('popup.statusScanning'), 'warning');

    try {
      const tree = await getBookmarkTree();
      const bookmarks = [];

      traverseBookmarks(tree, (node, path) => {
        if (isScannable(node.url)) {
          bookmarks.push({
            id: node.id,
            title: node.title || node.url,
            url: node.url,
            parentId: node.parentId,
            path
          });
        }
      });

      if (bookmarks.length === 0) {
        showStatus(t('popup.statusNoScannable'), 'warning');
        finishScan();
        return;
      }

      let checked = 0;
      const batchSize = 10;

      for (let index = 0; index < bookmarks.length; index += batchSize) {
        const batch = bookmarks.slice(index, index + batchSize);

        await Promise.all(batch.map(async (bookmark) => {
          const result = await validateUrl(bookmark.url);
          if (result.isInvalid) {
            invalidBookmarks.push(bookmark);
          }

          checked += 1;
          scanChecked.textContent = String(checked);
          scanInvalid.textContent = String(invalidBookmarks.length);
          updateProgress(Math.round((checked / bookmarks.length) * 100));
        }));
      }

      selectedInvalidIds = new Set(invalidBookmarks.map((bookmark) => bookmark.id));
      await persistScanResults();

      animateNumber(invalidCount, parseInt(invalidCount.textContent, 10) || 0, invalidBookmarks.length, 500);
      renderResultPanel(new Date().toISOString());

      if (invalidBookmarks.length > 0) {
        showStatus(t('popup.statusFoundInvalid', { n: invalidBookmarks.length }), 'warning');
      } else {
        showStatus(t('popup.statusAllValid'), 'success');
      }
    } catch (error) {
      showStatus(`${t('popup.statusScanFailed')}: ${error.message}`, 'error');
    }

    finishScan();
  }

  function finishScan() {
    isScanning = false;
    quickScanBtn.disabled = false;
    clearInterval(scanDurationInterval);
    scanText.textContent = invalidBookmarks.length > 0 ? t('popup.statusResultsReady') : t('popup.statusScanComplete');
    updateProgress(100);
  }

  function updateProgress(percent) {
    const circumference = 2 * Math.PI * 20;
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
    if (!confirm(t('popup.confirmDeleteSelected', { n: targets.length }))) {
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

  function validateUrl(url) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: 'validateUrlSimple', url }, (response) => {
        if (chrome.runtime.lastError) {
          resolve({ valid: true, isInvalid: false });
          return;
        }

        resolve({
          valid: response?.valid ?? true,
          isInvalid: response?.isInvalid ?? false
        });
      });
    });
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
