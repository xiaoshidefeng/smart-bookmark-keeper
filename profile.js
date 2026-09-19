document.addEventListener('DOMContentLoaded', () => {
  const ui = {
    tabScan: document.getElementById('tabScan'),
    tabPortrait: document.getElementById('tabPortrait'),
    tabManage: document.getElementById('tabManage'),
    tabAiManage: document.getElementById('tabAiManage'),
    langZhBtn: document.getElementById('langZhBtn'),
    langEnBtn: document.getElementById('langEnBtn'),
    scanPage: document.getElementById('scanPage'),
    portraitPage: document.getElementById('portraitPage'),
    managePage: document.getElementById('managePage'),
    aiManagePage: document.getElementById('aiManagePage'),
    openSettingsBtn: document.getElementById('openSettingsBtn'),
    settingsDialog: document.getElementById('settingsDialog'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn'),
    cancelSettingsBtn: document.getElementById('cancelSettingsBtn'),
    saveSettingsBtn: document.getElementById('saveSettingsBtn'),
    timeoutValue: document.getElementById('timeoutValue'),
    timeoutDisplay: document.getElementById('timeoutDisplay'),
    totalCount: document.getElementById('totalCount'),
    invalidCount: document.getElementById('invalidCount'),
    startScanBtn: document.getElementById('startScanBtn'),
    pauseBtn: document.getElementById('pauseBtn'),
    stopBtn: document.getElementById('stopBtn'),
    refreshScanStatsBtn: document.getElementById('refreshScanStatsBtn'),
    scanSection: document.getElementById('scanSection'),
    progressCircle: document.getElementById('progressCircle'),
    progressText: document.getElementById('progressText'),
    scanDuration: document.getElementById('scanDuration'),
    scannedCount: document.getElementById('scannedCount'),
    scanInvalidCount: document.getElementById('scanInvalidCount'),
    scanEmptyFolderCount: document.getElementById('scanEmptyFolderCount'),
    scanStatusText: document.getElementById('scanStatusText'),
    resultsMeta: document.getElementById('resultsMeta'),
    invalidLinksList: document.getElementById('invalidLinksList'),
    emptyFoldersList: document.getElementById('emptyFoldersList'),
    invalidCountBadge: document.getElementById('invalidCountBadge'),
    emptyFolderCountBadge: document.getElementById('emptyFolderCountBadge'),
    selectAllInvalidBtn: document.getElementById('selectAllInvalidBtn'),
    selectAllEmptyFoldersBtn: document.getElementById('selectAllEmptyFoldersBtn'),
    deleteSelectedScanBtn: document.getElementById('deleteSelectedScanBtn'),
    deleteSelectedEmptyFoldersBtn: document.getElementById('deleteSelectedEmptyFoldersBtn'),
    clearScanResultsBtn: document.getElementById('clearScanResultsBtn'),
    refreshBtn: document.getElementById('refreshBtn'),
    toggleExpandBtn: document.getElementById('toggleExpandBtn'),
    toggleExpandText: document.getElementById('toggleExpandText'),
    toggleExpandIcon: document.getElementById('toggleExpandIcon'),
    bookmarkSearchInput: document.getElementById('bookmarkSearchInput'),
    selectionSummary: document.getElementById('selectionSummary'),
    selectAllVisibleBtn: document.getElementById('selectAllVisibleBtn'),
    clearSelectionBtn: document.getElementById('clearSelectionBtn'),
    deleteSelectionBtn: document.getElementById('deleteSelectionBtn'),
    moveSelectionBtn: document.getElementById('moveSelectionBtn'),
    moveFolderDialog: document.getElementById('moveFolderDialog'),
    moveFolderDialogTitleSummary: document.getElementById('moveFolderDialogSummary'),
    moveFolderSearchInput: document.getElementById('moveFolderSearchInput'),
    moveFolderList: document.getElementById('moveFolderList'),
    closeMoveFolderBtn: document.getElementById('closeMoveFolderBtn'),
    cancelMoveFolderBtn: document.getElementById('cancelMoveFolderBtn'),
    manageFilterToggleBtn: document.getElementById('manageFilterToggleBtn'),
    manageFilterPanel: document.getElementById('manageFilterPanel'),
    manageTipBanner: document.getElementById('manageTipBanner'),
    manageTipCopy: document.getElementById('manageTipCopy'),
    dismissManageTipBtn: document.getElementById('dismissManageTipBtn'),
    bookmarkTree: document.getElementById('bookmarkTree'),
    aiScopePicker: document.getElementById('aiScopePicker'),
    aiScopeHint: document.getElementById('aiScopeHint'),
    aiUsageHint: document.getElementById('aiUsageHint'),
    aiInstructionInput: document.getElementById('aiInstructionInput'),
    generateAiPlanBtn: document.getElementById('generateAiPlanBtn'),
    applyAiPlanBtn: document.getElementById('applyAiPlanBtn'),
    undoAiPlanBtn: document.getElementById('undoAiPlanBtn'),
    aiPlanStatus: document.getElementById('aiPlanStatus'),
    aiPlanActionCount: document.getElementById('aiPlanActionCount'),
    aiPlanValidCount: document.getElementById('aiPlanValidCount'),
    aiHistoryList: document.getElementById('aiHistoryList'),
    aiResultSummary: document.getElementById('aiResultSummary'),
    aiSummaryText: document.getElementById('aiSummaryText'),
    aiWarningList: document.getElementById('aiWarningList'),
    aiActionSummary: document.getElementById('aiActionSummary'),
    aiActionList: document.getElementById('aiActionList'),
    aiPreviewCard: document.getElementById('aiPreviewCard'),
    copyFeedbackEmailBtn: document.getElementById('copyFeedbackEmailBtn'),
    undoBanner: document.getElementById('undoBanner'),
    undoMessage: document.getElementById('undoMessage'),
    undoActionBtn: document.getElementById('undoActionBtn'),
    toastContainer: document.getElementById('toastContainer'),
    portraitLevel: document.getElementById('portraitLevel'),
    portraitHeadline: document.getElementById('portraitHeadline'),
    portraitSubtitle: document.getElementById('portraitSubtitle'),
    portraitTotalBookmarks: document.getElementById('portraitTotalBookmarks'),
    portraitTotalFolders: document.getElementById('portraitTotalFolders'),
    portraitCollectionDays: document.getElementById('portraitCollectionDays'),
    portraitOrganizationScore: document.getElementById('portraitOrganizationScore'),
    portraitOrganizationScoreLabel: document.getElementById('portraitOrganizationScoreLabel'),
    portraitHttpsRatio: document.getElementById('portraitHttpsRatio'),
    portraitActionableIssues: document.getElementById('portraitActionableIssues'),
    portraitActionableMeta: document.getElementById('portraitActionableMeta'),
    portraitTags: document.getElementById('portraitTags'),
    portraitDomainList: document.getElementById('portraitDomainList'),
    portraitLargestFolder: document.getElementById('portraitLargestFolder'),
    portraitLargestFolderMeta: document.getElementById('portraitLargestFolderMeta'),
    portraitEmptyFolders: document.getElementById('portraitEmptyFolders'),
    portraitMaxDepth: document.getElementById('portraitMaxDepth'),
    portraitAvgPerFolder: document.getElementById('portraitAvgPerFolder'),
    portraitDuplicateUrls: document.getElementById('portraitDuplicateUrls'),
    portraitDuplicateMeta: document.getElementById('portraitDuplicateMeta'),
    portraitUniqueDomains: document.getElementById('portraitUniqueDomains'),
    portraitOldestBookmark: document.getElementById('portraitOldestBookmark'),
    portraitOldestDate: document.getElementById('portraitOldestDate'),
    portraitNewestBookmark: document.getElementById('portraitNewestBookmark'),
    portraitNewestDate: document.getElementById('portraitNewestDate'),
    portraitKeywords: document.getElementById('portraitKeywords'),
    portraitTrendChart: document.getElementById('portraitTrendChart'),
    portraitTrendSummary: document.getElementById('portraitTrendSummary'),
    trendYearBtn: document.getElementById('trendYearBtn'),
    trendMonthBtn: document.getElementById('trendMonthBtn'),
    trendDayBtn: document.getElementById('trendDayBtn'),
    portraitFolderList: document.getElementById('portraitFolderList'),
    portraitOpenScanBtn: document.getElementById('portraitOpenScanBtn'),
    portraitOpenManageBtn: document.getElementById('portraitOpenManageBtn'),
    portraitFocusLargestBtn: document.getElementById('portraitFocusLargestBtn'),
    portraitFocusDuplicateBtn: document.getElementById('portraitFocusDuplicateBtn'),
    portraitFocusEmptyBtn: document.getElementById('portraitFocusEmptyBtn'),
    portraitFocusDepthBtn: document.getElementById('portraitFocusDepthBtn'),
    copyPortraitSummaryBtn: document.getElementById('copyPortraitSummaryBtn'),
    portraitShareLevel: document.getElementById('portraitShareLevel'),
    portraitShareHeadline: document.getElementById('portraitShareHeadline'),
    portraitShareTotal: document.getElementById('portraitShareTotal'),
    portraitShareDomains: document.getElementById('portraitShareDomains'),
    portraitShareScore: document.getElementById('portraitShareScore'),
    portraitShareDays: document.getElementById('portraitShareDays'),
    portraitShareTags: document.getElementById('portraitShareTags')
  };

  const CONFIG = {
    TIMEOUT: 15,
    CONCURRENCY: 8,
    BATCH_SIZE: 24,
    BATCH_DELAY_MS: 450,
    AI_ENDPOINT_DEFAULT: 'https://api.dogclaw.top/ai/api/bookmarks/plan'
  };

  const LEGACY_AI_ENDPOINTS = new Set([
    '',
    'http://127.0.0.1:8000/api/bookmarks/plan'
  ]);

  const ICONS = {
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>',
    folderOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>'
  };

  function t(key, params) {
    return window.BK_I18N.t(key, params);
  }

  const state = {
    activeTab: 'scan',
    tree: [],
    rootNodes: [],
    bookmarkMap: new Map(),
    folderMap: new Map(),
    folderOptions: [],
    emptyFolders: [],
    duplicateBookmarkIds: new Set(),
    invalidLinksMap: {},
    selectedScanIds: new Set(),
    selectedEmptyFolderIds: new Set(),
    selectedManageIds: new Set(),
    searchTerm: '',
    manageFilter: 'all',
    aiScopeMode: 'all',
    aiEndpoint: '',
    aiClientId: null,
    aiUsage: null,
    aiUsageError: '',
    locale: 'zh-CN',
    isExpandedByDefault: false,
    expansionInitialized: false,
    expandedFolderIds: new Set(),
    scanTime: null,
    portraitStats: null,
    portraitTrendGranularity: 'month',
    portraitChart: null,
    manageDragTipDismissed: false,
    scanController: {
      isRunning: false,
      isPaused: false,
      isCancelled: false,
      total: 0,
      completed: 0,
      errorCount: 0,
      startTime: 0,
      timer: null
    },
    draggedItem: null,
    dragAutoScroll: null,
    dragExpandTimer: null,
    dragGhost: null,
    editingNode: null,
    aiPlan: {
      status: 'idle',
      summary: '',
      warnings: [],
      actions: [],
      validatedActions: [],
      dismissedActionIds: new Set(),
      rawResponse: null,
      historyId: null,
      source: 'draft'
    },
    aiHistory: [],
    aiActiveHistoryId: null,
    aiLoadingState: {
      phase: 'analyzing',
      previewLines: [],
      feedIndex: 0,
      feedTicker: null,
      phaseTimer: null
    },
    aiExpandedActionGroups: new Set(),
    aiUndoAction: null,
    aiUndoWarnings: [],
    undoAction: null
  };

  init();

  async function init() {
    setupEventListeners();
    await loadSettings();
    applyTranslations();
    await loadBookmarks();
    await Promise.all([
      loadStoredScanResults(),
      restoreBackgroundScanUi(),
      refreshAiUsage()
    ]);
    renderTabs();
  }

  function setupEventListeners() {
    ui.tabScan.addEventListener('click', () => switchTab('scan'));
    ui.tabPortrait.addEventListener('click', () => switchTab('portrait'));
    ui.tabManage.addEventListener('click', () => switchTab('manage'));
    ui.tabAiManage.addEventListener('click', () => switchTab('ai-manage'));
    ui.langZhBtn?.addEventListener('click', () => setLocale('zh-CN'));
    ui.langEnBtn?.addEventListener('click', () => setLocale('en-US'));
    ui.openSettingsBtn.addEventListener('click', showSettingsDialog);
    ui.closeSettingsBtn.addEventListener('click', hideSettingsDialog);
    ui.cancelSettingsBtn.addEventListener('click', hideSettingsDialog);
    ui.saveSettingsBtn.addEventListener('click', saveSettings);
    ui.timeoutValue.addEventListener('input', () => {
      ui.timeoutDisplay.textContent = ui.timeoutValue.value;
      ui.timeoutValue.setAttribute('aria-valuenow', ui.timeoutValue.value);
    });
    ui.settingsDialog.addEventListener('click', (event) => {
      if (event.target === ui.settingsDialog) {
        hideSettingsDialog();
      }
    });

    ui.startScanBtn.addEventListener('click', startQuickScan);
    ui.pauseBtn.addEventListener('click', togglePauseScan);
    ui.stopBtn.addEventListener('click', stopScan);
    // 后台扫描引擎的状态推送：进度实时同步，完成/取消时走统一收尾
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === 'local' && changes.scanState) {
        applyBackgroundScanState(changes.scanState.newValue);
      }
    });
    // 页面可见且已有最终结果时，清除扩展图标角标
    document.addEventListener('visibilitychange', dismissBadgeIfFinalSeen);
    ui.refreshScanStatsBtn.addEventListener('click', refreshScanStats);
    ui.selectAllInvalidBtn.addEventListener('click', toggleSelectAllInvalid);
    ui.selectAllEmptyFoldersBtn.addEventListener('click', toggleSelectAllEmptyFolders);
    ui.deleteSelectedScanBtn.addEventListener('click', deleteSelectedScanResults);
    ui.deleteSelectedEmptyFoldersBtn.addEventListener('click', deleteSelectedEmptyFolders);
    ui.clearScanResultsBtn.addEventListener('click', clearStoredScanResults);

    ui.refreshBtn.addEventListener('click', refreshBookmarks);
    ui.toggleExpandBtn.addEventListener('click', toggleExpandFolders);
    let searchDebounceTimer = null;
    ui.bookmarkSearchInput.addEventListener('input', (event) => {
      const value = event.target.value;
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        state.searchTerm = value.trim().toLowerCase();
        renderManageTree();
      }, 250);
    });
    ui.selectAllVisibleBtn.addEventListener('click', selectAllVisibleBookmarks);
    ui.clearSelectionBtn.addEventListener('click', clearManageSelection);
    ui.deleteSelectionBtn.addEventListener('click', deleteSelectedBookmarks);
    ui.moveSelectionBtn.addEventListener('click', openMoveFolderDialog);
    ui.closeMoveFolderBtn.addEventListener('click', hideMoveFolderDialog);
    ui.cancelMoveFolderBtn.addEventListener('click', hideMoveFolderDialog);
    ui.moveFolderDialog.addEventListener('click', (event) => {
      if (event.target === ui.moveFolderDialog) {
        hideMoveFolderDialog();
      }
    });
    ui.moveFolderSearchInput.addEventListener('input', () => {
      moveFolderActiveIndex = 0;
      renderMoveFolderOptions();
    });
    ui.moveFolderSearchInput.addEventListener('keydown', handleMoveFolderSearchKeydown);
    document.addEventListener('keydown', handleManageShortcuts);
    ui.manageFilterToggleBtn?.addEventListener('click', toggleManageFilterPanel);
    ui.manageFilterPanel?.querySelectorAll('[data-filter]').forEach((button) => {
      button.addEventListener('click', () => setManageFilter(button.dataset.filter));
    });
    ui.dismissManageTipBtn?.addEventListener('click', dismissManageTip);
    ui.aiScopePicker?.querySelectorAll('[data-ai-scope]').forEach((button) => {
      button.addEventListener('click', () => setAiScopeMode(button.dataset.aiScope));
    });
    ui.generateAiPlanBtn?.addEventListener('click', generateAiPlan);
    ui.applyAiPlanBtn?.addEventListener('click', applyAiPlan);
    ui.undoAiPlanBtn?.addEventListener('click', undoLastAiPlanApplication);
    ui.aiActionList?.addEventListener('click', handleAiActionListClick);
    ui.aiHistoryList?.addEventListener('click', handleAiHistoryClick);
    ui.copyFeedbackEmailBtn?.addEventListener('click', copyFeedbackEmail);
    ui.undoActionBtn.addEventListener('click', undoLastAction);
    ui.copyPortraitSummaryBtn?.addEventListener('click', copyPortraitSummary);
    ui.portraitOpenScanBtn?.addEventListener('click', () => switchTab('scan'));
    ui.portraitOpenManageBtn?.addEventListener('click', () => switchTab('manage'));
    ui.portraitFocusLargestBtn?.addEventListener('click', openLargestFolderFromPortrait);
    ui.portraitFocusDuplicateBtn?.addEventListener('click', openDuplicateBookmarksFromPortrait);
    ui.portraitFocusEmptyBtn?.addEventListener('click', openEmptyFoldersFromPortrait);
    ui.portraitFocusDepthBtn?.addEventListener('click', openDeepFoldersFromPortrait);
    ui.trendYearBtn.addEventListener('click', () => setPortraitTrendGranularity('year'));
    ui.trendMonthBtn.addEventListener('click', () => setPortraitTrendGranularity('month'));
    ui.trendDayBtn.addEventListener('click', () => setPortraitTrendGranularity('day'));
    window.addEventListener('resize', () => {
      if (state.portraitChart) {
        state.portraitChart.resize();
      }
    });
    document.addEventListener('click', (event) => {
      if (!ui.manageFilterPanel || !ui.manageFilterToggleBtn) {
        return;
      }
      if (event.target.closest('.manage-filter')) {
        return;
      }
      ui.manageFilterPanel.classList.add('hidden');
      ui.manageFilterToggleBtn.setAttribute('aria-expanded', 'false');
    });
  }

  async function loadSettings() {
    const result = await new Promise((resolve) => chrome.storage.local.get(['scanTimeout', 'manageDragTipDismissed', 'aiPlanHistory', 'aiClientId', 'locale', 'aiEndpoint'], resolve));
    CONFIG.TIMEOUT = result.scanTimeout || 15;
    state.manageDragTipDismissed = !!result.manageDragTipDismissed;
    state.aiHistory = Array.isArray(result.aiPlanHistory) ? result.aiPlanHistory : [];
    state.aiEndpoint = normalizeAiEndpoint(result.aiEndpoint);
    state.aiClientId = result.aiClientId || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `client-${Date.now()}`);
    state.locale = result.locale === 'en-US' ? 'en-US' : 'zh-CN';
    window.BK_I18N.setLocale(state.locale);
    state.aiActiveHistoryId = null;
    ui.timeoutValue.value = String(CONFIG.TIMEOUT);
    ui.timeoutDisplay.textContent = String(CONFIG.TIMEOUT);
    if (!result.aiClientId) {
      await new Promise((resolve) => chrome.storage.local.set({ aiClientId: state.aiClientId }, resolve));
    }
    if (result.aiEndpoint !== state.aiEndpoint) {
      await new Promise((resolve) => chrome.storage.local.set({ aiEndpoint: state.aiEndpoint }, resolve));
    }
  }

  async function saveSettings() {
    CONFIG.TIMEOUT = parseInt(ui.timeoutValue.value, 10);
    await new Promise((resolve) => chrome.storage.local.set({
      scanTimeout: CONFIG.TIMEOUT
    }, resolve));
    hideSettingsDialog();
    await refreshAiUsage();
    showToast(t('toast.settingsSaved'), 'success');
  }

  function getAiEndpoint() {
    return state.aiEndpoint || CONFIG.AI_ENDPOINT_DEFAULT;
  }

  function normalizeAiEndpoint(endpoint) {
    const normalized = typeof endpoint === 'string' ? endpoint.trim() : '';
    if (LEGACY_AI_ENDPOINTS.has(normalized)) {
      return CONFIG.AI_ENDPOINT_DEFAULT;
    }
    return normalized || CONFIG.AI_ENDPOINT_DEFAULT;
  }

  function t(key, params) {
    return window.BK_I18N.t(key, params);
  }

  function applyTranslations() {
    document.documentElement.lang = state.locale;
    window.BK_I18N.setLocale(state.locale);
    window.BK_I18N.applyElementTranslations();
    if (!state.scanController.isRunning && !state.scanController.isPaused) {
      ui.scanStatusText.textContent = t('scan.waiting');
    }
    ui.toggleExpandText.textContent = state.isExpandedByDefault ? t('manage.collapseAll') : t('manage.expandAll');
    ui.toggleExpandIcon.innerHTML = state.isExpandedByDefault ? ICONS.folderOpen : ICONS.folder;
    updateManageToolbar();
    ui.langZhBtn?.classList.toggle('is-active', state.locale === 'zh-CN');
    ui.langEnBtn?.classList.toggle('is-active', state.locale === 'en-US');
  }

  async function setLocale(locale) {
    if (locale !== 'zh-CN' && locale !== 'en-US') {
      return;
    }
    state.locale = locale;
    window.BK_I18N.setLocale(locale);
    applyTranslations();
    renderAiPlan();
    // 洞察页的日期、等级文案、标签和关键词都是缓存的动态渲染结果，翻译切换后需要重算并重渲染
    if (state.portraitStats) {
      assignPortraitConclusion(state.portraitStats);
      state.portraitStats.tags = derivePortraitTags(state.portraitStats.topDomains);
      state.portraitStats.topKeywords = extractPortraitKeywords(Array.from(state.bookmarkMap.values()));
    }
    if (state.activeTab === 'portrait') {
      renderPortrait();
    }
    await new Promise((resolve) => chrome.storage.local.set({ locale }, resolve));
  }

  function showSettingsDialog() {
    ui.settingsDialog.classList.remove('hidden');
    requestAnimationFrame(() => ui.settingsDialog.classList.add('show'));
  }

  function hideSettingsDialog() {
    ui.settingsDialog.classList.remove('show');
    setTimeout(() => ui.settingsDialog.classList.add('hidden'), 180);
  }

  async function copyFeedbackEmail() {
    const email = 'a1330661071@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      showToast(t('toast.feedbackCopied'), 'success');
    } catch (error) {
      showToast(t('toast.feedbackCopyFailed'), 'warning');
    }
  }

  function switchTab(tab) {
    state.activeTab = tab;
    renderTabs();
  }

  function renderTabs() {
    const isScan = state.activeTab === 'scan';
    const isPortrait = state.activeTab === 'portrait';
    const isManage = state.activeTab === 'manage';
    const isAiManage = state.activeTab === 'ai-manage';
    ui.tabScan.classList.toggle('active', isScan);
    ui.tabPortrait.classList.toggle('active', isPortrait);
    ui.tabManage.classList.toggle('active', isManage);
    ui.tabAiManage.classList.toggle('active', isAiManage);
    ui.scanPage.classList.toggle('hidden', !isScan);
    ui.portraitPage.classList.toggle('hidden', !isPortrait);
    ui.managePage.classList.toggle('hidden', !isManage);
    ui.aiManagePage.classList.toggle('hidden', !isAiManage);

    if (isAiManage) {
      renderAiPlan();
    }

    if (isPortrait && state.portraitStats) {
      renderPortrait();
      requestAnimationFrame(() => {
        if (state.portraitChart) {
          state.portraitChart.resize();
        }
      });
    }

    if (isAiManage) {
      refreshAiUsage();
      renderAiPlan();
    }
  }

  async function loadBookmarks() {
    const tree = await new Promise((resolve) => chrome.bookmarks.getTree(resolve));
    state.tree = tree;
    state.rootNodes = tree[0]?.children || [];
    state.bookmarkMap = new Map();
    state.folderMap = new Map();
    state.folderOptions = [];
    state.emptyFolders = [];

    indexNodes(state.rootNodes, [], null);
    state.duplicateBookmarkIds = collectDuplicateBookmarkIds();
    syncExpandedFolderState();
    state.portraitStats = calculatePortraitStats();
    updateOverviewStats();
    // 洞察页隐藏时只算不渲染：否则 ECharts 会在 display:none 容器上初始化成 0×0，
    // 且图表库会在用户从未打开洞察页的情况下被提前加载
    if (state.activeTab === 'portrait') {
      renderPortrait();
    }
    renderAiPlan();
  }

  function syncExpandedFolderState() {
    const validFolderIds = new Set(state.folderMap.keys());
    state.expandedFolderIds.forEach((id) => {
      if (!validFolderIds.has(id)) {
        state.expandedFolderIds.delete(id);
      }
    });

    if (!state.expansionInitialized) {
      state.expansionInitialized = true;
      validFolderIds.forEach((id) => {
        const folder = state.folderMap.get(id);
        if (folder && folder.path.length === 1) {
          state.expandedFolderIds.add(id);
        }
      });
    }
  }

  function indexNodes(nodes, path, parentFolderId) {
    nodes.forEach((node, index) => {
      if (node.children) {
        const title = node.title || t('manage.untitledFolder');
        const nextPath = [...path, title];

        state.folderMap.set(node.id, {
          ...node,
          title,
          path: nextPath,
          index,
          parentFolderId
        });

        if (!isRootFolder(title)) {
          state.folderOptions.push({
            id: node.id,
            label: nextPath.join(' / ')
          });
        }

        if (node.children.length === 0 && !isRootFolder(title)) {
          state.emptyFolders.push({
            id: node.id,
            title,
            path: nextPath,
            parentId: node.parentId,
            index
          });
        }

        indexNodes(node.children, nextPath, node.id);
        return;
      }

      if (!isScannable(node.url)) {
        return;
      }

      const title = node.title || node.url;
      state.bookmarkMap.set(node.id, {
        ...node,
        title,
        path,
        domain: getDomain(node.url),
        dateAdded: node.dateAdded || null,
        dateLastUsed: node.dateLastUsed || null,
        index,
        parentFolderId,
        searchText: `${title} ${node.url} ${path.join(' ')}`.toLowerCase()
      });
    });
  }

  async function loadStoredScanResults(options = {}) {
    const { renderManage = true } = options;
    const result = await new Promise((resolve) => chrome.storage.local.get(['scanResults'], resolve));
    const scanResults = result.scanResults || null;

    state.invalidLinksMap = {};
    state.selectedScanIds.clear();
    state.selectedEmptyFolderIds.clear();
    state.scanTime = scanResults?.scanTime || null;

    if (scanResults?.invalidBookmarks?.length) {
      scanResults.invalidBookmarks.forEach((bookmark) => {
        const current = state.bookmarkMap.get(bookmark.id);
        if (!current) {
          return;
        }

        state.invalidLinksMap[current.id] = {
          id: current.id,
          title: current.title,
          url: current.url,
          path: current.path,
          domain: current.domain
        };
      });
    }

    updateOverviewStats();
    renderScanResults();
    if (renderManage) {
      renderManageTree();
    }
  }

  function updateOverviewStats() {
    animateNumber(ui.totalCount, state.bookmarkMap.size);
    animateNumber(ui.invalidCount, Object.keys(state.invalidLinksMap).length);
    ui.scanEmptyFolderCount.textContent = String(state.emptyFolders.length);
    ui.invalidCountBadge.textContent = String(Object.keys(state.invalidLinksMap).length);
    ui.emptyFolderCountBadge.textContent = String(state.emptyFolders.length);
  }

  function calculatePortraitStats() {
    const stats = {
      totalBookmarks: state.bookmarkMap.size,
      totalFolders: state.folderMap.size,
      emptyFolders: state.emptyFolders.length,
      maxDepth: 0,
      largestFolder: { title: t('manage.untitledFolder'), count: 0 },
      oldestBookmark: null,
      newestBookmark: null,
      collectionDays: 0,
      httpsRatio: 0,
      duplicateCount: 0,
      duplicatePercentage: 0,
      avgPerFolder: 0,
      organizationScore: 0,
      uniqueDomains: 0,
      topDomains: [],
      topFolders: [],
      trendSeries: {
        year: [],
        month: [],
        day: []
      },
      topKeywords: [],
      tags: [],
      level: t('portrait.levelNew'),
      headline: t('portrait.headlineDefault'),
      subtitle: t('portrait.subtitleDefault')
    };

    const domains = new Map();
    const bookmarks = Array.from(state.bookmarkMap.values());
    let httpsCount = 0;

    const directChildCount = new Map();
    bookmarks.forEach((bookmark) => {
      // 用 parentFolderId（indexNodes 写入的权威字段），不依赖原始节点是否带 parentId
      directChildCount.set(bookmark.parentFolderId, (directChildCount.get(bookmark.parentFolderId) || 0) + 1);
    });

    state.folderMap.forEach((folder) => {
      stats.maxDepth = Math.max(stats.maxDepth, folder.path.length);
      const childBookmarks = directChildCount.get(folder.id) || 0;
      if (childBookmarks > stats.largestFolder.count) {
        stats.largestFolder = { title: folder.title, count: childBookmarks };
      }
      if (childBookmarks > 0) {
        stats.topFolders.push({
          title: folder.title,
          path: folder.path,
          count: childBookmarks
        });
      }
    });

    const yearMap = new Map();
    const monthMap = new Map();
    const dayMap = new Map();
    bookmarks.forEach((bookmark) => {
      const parsedUrl = parseUrlSafe(bookmark.url);
      if (parsedUrl) {
        domains.set(bookmark.domain, (domains.get(bookmark.domain) || 0) + 1);
        if (parsedUrl.protocol === 'https:') {
          httpsCount += 1;
        }
      }

      if (bookmark.dateAdded) {
        const date = new Date(bookmark.dateAdded);
        if (!stats.oldestBookmark || date < stats.oldestBookmark.date) {
          stats.oldestBookmark = { title: bookmark.title, date };
        }
        if (!stats.newestBookmark || date > stats.newestBookmark.date) {
          stats.newestBookmark = { title: bookmark.title, date };
        }
        const yearKey = String(date.getFullYear());
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        const dayKey = `${monthKey}-${String(date.getDate()).padStart(2, '0')}`;
        yearMap.set(yearKey, (yearMap.get(yearKey) || 0) + 1);
        monthMap.set(monthKey, (monthMap.get(monthKey) || 0) + 1);
        dayMap.set(dayKey, (dayMap.get(dayKey) || 0) + 1);
      }
    });

    if (stats.oldestBookmark && stats.newestBookmark) {
      const diff = stats.newestBookmark.date.getTime() - stats.oldestBookmark.date.getTime();
      stats.collectionDays = Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }

    // 口径统一：重复链接按“涉及的重复书签数”展示，与“查看重复链接”在管理页高亮的条数一致。
    // loadBookmarks 已先跑过 collectDuplicateBookmarkIds，这里直接复用，不再重复归一化。
    stats.duplicateCount = state.duplicateBookmarkIds?.size ?? 0;
    stats.duplicatePercentage = stats.totalBookmarks > 0
      ? Number(((stats.duplicateCount / stats.totalBookmarks) * 100).toFixed(1))
      : 0;
    stats.httpsRatio = stats.totalBookmarks > 0
      ? Number(((httpsCount / stats.totalBookmarks) * 100).toFixed(1))
      : 0;
    stats.avgPerFolder = stats.totalFolders > 0
      ? Number((stats.totalBookmarks / stats.totalFolders).toFixed(1))
      : 0;
    stats.uniqueDomains = domains.size;
    stats.topDomains = Array.from(domains.entries())
      .sort((left, right) => right[1] - left[1])
      .slice(0, 6)
      .map(([domain, count]) => ({
        domain,
        count,
        percentage: stats.totalBookmarks > 0 ? Number(((count / stats.totalBookmarks) * 100).toFixed(1)) : 0
      }));
    stats.topKeywords = extractPortraitKeywords(bookmarks);
    stats.topFolders = stats.topFolders
      .sort((left, right) => right.count - left.count)
      .slice(0, 6);
    stats.trendSeries.year = buildTrendSeries(yearMap, 'year');
    stats.trendSeries.month = buildTrendSeries(monthMap, 'month');
    stats.trendSeries.day = buildTrendSeries(dayMap, 'day');

    stats.tags = derivePortraitTags(stats.topDomains);

    // 口径：文件夹利用率(3) + 空文件夹占比(2) + 目录深度(2) + 来源多样性(2) + 无重复(1)。
    // 深度只在 1-3 层内给满，更深的嵌套不再加分，避免与“最大层级”整理提示自相矛盾。
    const folderUsage = stats.totalFolders > 0 ? Math.min(stats.totalBookmarks / Math.max(stats.totalFolders, 1) / 18, 1) : 0;
    const emptyRatio = stats.totalFolders > 0 ? 1 - stats.emptyFolders / stats.totalFolders : 1;
    const depthScore = Math.min(stats.maxDepth, 3) / 3;
    const domainScore = stats.totalBookmarks > 0 ? Math.min(stats.uniqueDomains / stats.totalBookmarks * 8, 1) : 0;
    const duplicateFreeRatio = stats.totalBookmarks > 0 ? Math.max(0, 1 - stats.duplicateCount / stats.totalBookmarks) : 1;
    stats.organizationScore = Math.round(((folderUsage * 3) + (emptyRatio * 2) + (depthScore * 2) + (domainScore * 2) + duplicateFreeRatio) / 10 * 100);

    assignPortraitConclusion(stats);

    return stats;
  }

  // level/headline/subtitle 是缓存的 t() 文案，语言切换时需要对已有 stats 重算。
  // headline/subtitle 优先注入真实数据（待清理项、结构特征），没有可指出的问题时回退到等级固定文案。
  function assignPortraitConclusion(stats) {
    const levelScore = (
      Math.min(stats.totalBookmarks / 300, 1) * 35 +
      Math.min(stats.uniqueDomains / 80, 1) * 20 +
      Math.min(stats.organizationScore / 100, 1) * 25 +
      Math.min(stats.collectionDays / 365, 1) * 20
    );

    let fallbackHeadline;
    let fallbackSubtitle;

    if (levelScore > 80) {
      stats.level = t('portrait.levelSystematic');
      fallbackHeadline = t('portrait.headlineSystematic');
      fallbackSubtitle = t('portrait.subtitleSystematic');
    } else if (levelScore > 55) {
      stats.level = t('portrait.levelAdvanced');
      fallbackHeadline = t('portrait.headlineAdvanced');
      fallbackSubtitle = t('portrait.subtitleAdvanced');
    } else if (levelScore > 30) {
      stats.level = t('portrait.levelExploratory');
      fallbackHeadline = t('portrait.headlineExploratory');
      fallbackSubtitle = t('portrait.subtitleExploratory');
    } else {
      stats.level = t('portrait.levelNew');
      fallbackHeadline = t('portrait.headlineNew');
      fallbackSubtitle = t('portrait.subtitleNew');
    }

    stats.headline = buildPortraitHeadline(stats) || fallbackHeadline;
    stats.subtitle = buildPortraitSubtitle(stats) || fallbackSubtitle;
  }

  function buildPortraitHeadline(stats) {
    if (stats.duplicateCount > 0 && stats.emptyFolders > 0) {
      return t('portrait.headlineCleanupBoth', { n: stats.duplicateCount, m: stats.emptyFolders });
    }
    if (stats.duplicateCount > 0) {
      return t('portrait.headlineCleanupDup', { n: stats.duplicateCount });
    }
    if (stats.emptyFolders > 0) {
      return t('portrait.headlineCleanupEmpty', { m: stats.emptyFolders });
    }
    return '';
  }

  function buildPortraitSubtitle(stats) {
    const largestShare = stats.totalBookmarks > 0 ? stats.largestFolder.count / stats.totalBookmarks : 0;
    if (largestShare >= 0.3) {
      return t('portrait.subtitleLargeFolder', { folder: stats.largestFolder.title, n: stats.largestFolder.count });
    }
    if (stats.maxDepth >= 6) {
      return t('portrait.subtitleDeep', { n: stats.maxDepth });
    }
    const topDomain = stats.topDomains.length > 0 ? stats.topDomains[0] : null;
    if (topDomain && topDomain.percentage >= 35) {
      return t('portrait.subtitleTopDomain', { domain: topDomain.domain, p: topDomain.percentage });
    }
    return '';
  }

  // 趋势横轴按日历生成到今天，缺失的时间点补 0：如果只取“最近 N 个有数据的点”，
  // 长期没收藏书签时旧数据会被当成最近数据展示，看不出停滞。
  function buildTrendSeries(counts, granularity) {
    if (counts.size === 0) {
      return [];
    }

    const now = new Date();
    const earliestLabel = Array.from(counts.keys()).sort()[0];
    let cursor;
    let labelOf;
    let next;

    if (granularity === 'year') {
      const floor = new Date(now.getFullYear() - 7, 0, 1);
      const earliest = new Date(Number(earliestLabel), 0, 1);
      cursor = earliest > floor ? earliest : floor;
      labelOf = (date) => String(date.getFullYear());
      next = (date) => new Date(date.getFullYear() + 1, 0, 1);
    } else if (granularity === 'month') {
      const [earliestYear, earliestMonth] = earliestLabel.split('-').map(Number);
      const floor = new Date(now.getFullYear(), now.getMonth() - 11, 1);
      const earliest = new Date(earliestYear, earliestMonth - 1, 1);
      cursor = earliest > floor ? earliest : floor;
      labelOf = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      next = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 1);
    } else {
      const [earliestYear, earliestMonth, earliestDay] = earliestLabel.split('-').map(Number);
      const floor = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 13);
      const earliest = new Date(earliestYear, earliestMonth - 1, earliestDay);
      cursor = earliest > floor ? earliest : floor;
      labelOf = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      next = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    }

    const endLabel = labelOf(now);
    const series = [];
    while (labelOf(cursor) <= endLabel) {
      const label = labelOf(cursor);
      series.push({ label, count: counts.get(label) || 0 });
      cursor = next(cursor);
    }
    return series;
  }

  function renderPortrait() {
    const stats = state.portraitStats;
    if (!stats) {
      return;
    }

    const actionableIssues = stats.emptyFolders + stats.duplicateCount;
    setNodeText(ui.portraitLevel, stats.level);
    setNodeText(ui.portraitHeadline, stats.headline);
    setNodeText(ui.portraitSubtitle, stats.subtitle);
    setNodeText(ui.portraitTotalBookmarks, String(stats.totalBookmarks));
    setNodeText(ui.portraitTotalFolders, String(stats.totalFolders));
    setNodeText(ui.portraitCollectionDays, String(stats.collectionDays));
    setNodeText(ui.portraitOrganizationScore, `${stats.organizationScore}`);
    ui.portraitOrganizationScoreLabel?.setAttribute('title', t('portrait.organizationScoreTip'));
    setNodeText(ui.portraitHttpsRatio, `${stats.httpsRatio}%`);
    setNodeText(ui.portraitActionableIssues, String(actionableIssues));
    setNodeText(ui.portraitActionableMeta, t('portrait.duplicateEmptyMeta', { n: stats.duplicateCount, m: stats.emptyFolders }));
    if (stats.largestFolder.count > 0) {
      setNodeText(ui.portraitLargestFolder, stats.largestFolder.title);
      setNodeText(ui.portraitLargestFolderMeta, t('portrait.largestFolderMeta', { n: stats.largestFolder.count }));
    } else {
      setNodeText(ui.portraitLargestFolder, '-');
      setNodeText(ui.portraitLargestFolderMeta, '-');
    }
    setNodeText(ui.portraitEmptyFolders, String(stats.emptyFolders));
    setNodeText(ui.portraitMaxDepth, String(stats.maxDepth));
    setNodeText(ui.portraitAvgPerFolder, String(stats.avgPerFolder));
    setNodeText(ui.portraitDuplicateUrls, String(stats.duplicateCount));
    setNodeText(ui.portraitDuplicateMeta, t('portrait.duplicateMeta', { p: stats.duplicatePercentage }));
    setNodeText(ui.portraitUniqueDomains, String(stats.uniqueDomains));
    setNodeText(ui.portraitOldestBookmark, stats.oldestBookmark ? stats.oldestBookmark.title : '-');
    setNodeText(ui.portraitOldestDate, stats.oldestBookmark ? formatShortDate(stats.oldestBookmark.date) : '-');
    setNodeText(ui.portraitNewestBookmark, stats.newestBookmark ? stats.newestBookmark.title : '-');
    setNodeText(ui.portraitNewestDate, stats.newestBookmark ? formatShortDate(stats.newestBookmark.date) : '-');
    if (ui.portraitFocusDuplicateBtn) {
      ui.portraitFocusDuplicateBtn.classList.toggle('hidden', stats.duplicateCount <= 0);
    }

    if (ui.portraitTags) {
      ui.portraitTags.innerHTML = stats.tags.length > 0
        ? stats.tags.map((tag) => `<span class="portrait-tag">${escapeHtml(tag)}</span>`).join('')
        : `<div class="result-empty-state">${t('portrait.noTagData')}</div>`;
    }

    if (ui.portraitDomainList) {
      ui.portraitDomainList.innerHTML = stats.topDomains.length > 0
        ? stats.topDomains.map((item, index) => `
        <div class="portrait-domain-item ${index === 0 ? 'primary' : ''}">
          <div class="portrait-domain-rank">#${index + 1}</div>
          <div class="portrait-domain-copy">
            <div class="portrait-domain-name">${escapeHtml(item.domain)}</div>
            <div class="portrait-domain-meta">${t('portrait.domainMeta', { n: item.count, p: item.percentage })}</div>
          </div>
          <button class="portrait-inline-action" type="button" data-domain="${escapeHtml(item.domain)}">${t('portrait.view')}</button>
        </div>
      `).join('')
        : `<div class="result-empty-state">${t('portrait.noDomainData')}</div>`;
      ui.portraitDomainList.querySelectorAll('[data-domain]').forEach((button) => {
        button.addEventListener('click', () => {
          const domain = button.dataset.domain || '';
          focusManageView(domain, domain ? t('portrait.focusDomain', { q: domain }) : t('portrait.switchedToManage'));
        });
      });
    }

    if (ui.portraitKeywords) {
      ui.portraitKeywords.innerHTML = stats.topKeywords.length > 0
        ? stats.topKeywords.map((item) => `<span class="portrait-keyword">${escapeHtml(item.keyword)}<small>${item.count}</small></span>`).join('')
        : `<div class="result-empty-state">${t('portrait.noKeywordData')}</div>`;
    }

    updatePortraitTrendTabs();
    renderPortraitTrend(stats.trendSeries[state.portraitTrendGranularity] || [], state.portraitTrendGranularity);
    renderPortraitFolders(stats.topFolders);
    renderPortraitShareCard(stats);
  }

  function setPortraitTrendGranularity(granularity) {
    if (state.portraitTrendGranularity === granularity) {
      return;
    }
    state.portraitTrendGranularity = granularity;
    updatePortraitTrendTabs();
    if (state.portraitStats) {
      renderPortraitTrend(state.portraitStats.trendSeries[granularity] || [], granularity);
    }
  }

  function updatePortraitTrendTabs() {
    const buttons = [
      [ui.trendYearBtn, 'year'],
      [ui.trendMonthBtn, 'month'],
      [ui.trendDayBtn, 'day']
    ];

    buttons.forEach(([button, value]) => {
      const active = state.portraitTrendGranularity === value;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
  }

  let echartsLoaderPromise = null;

  function loadEcharts() {
    if (typeof echarts !== 'undefined') {
      return Promise.resolve();
    }
    if (!echartsLoaderPromise) {
      echartsLoaderPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = chrome.runtime.getURL('echarts.min.js');
        script.onload = () => resolve();
        script.onerror = () => {
          echartsLoaderPromise = null;
          reject(new Error('Failed to load chart library.'));
        };
        document.head.appendChild(script);
      });
    }
    return echartsLoaderPromise;
  }

  function trendUnitLabel(granularity) {
    if (granularity === 'year') {
      return t('common.year');
    }
    if (granularity === 'month') {
      return t('common.month');
    }
    return t('common.day');
  }

  async function renderPortraitTrend(trend, granularity) {
    if (trend.length === 0) {
      ui.portraitTrendChart.innerHTML = `<div class="result-empty-state">${t('portrait.noTrendData')}</div>`;
      setNodeText(ui.portraitTrendSummary, '');
      if (state.portraitChart) {
        state.portraitChart.dispose();
        state.portraitChart = null;
      }
      return;
    }

    try {
      await loadEcharts();
    } catch (error) {
      ui.portraitTrendChart.innerHTML = `<div class="result-empty-state">${t('portrait.chartLoadFailed')}</div>`;
      return;
    }

    if (!state.portraitChart) {
      state.portraitChart = echarts.init(ui.portraitTrendChart);
    }

    const xAxisLabels = trend.map((item) => formatTrendLabel(item.label, granularity));
    const seriesData = trend.map((item) => item.count);
    const totalCount = trend.reduce((sum, item) => sum + item.count, 0);
    const peakPoint = trend.reduce((top, item) => (item.count > top.count ? item : top), trend[0]);
    setNodeText(ui.portraitTrendSummary, t('portrait.trendAriaSummary', {
      u: trendUnitLabel(granularity),
      n: totalCount,
      peak: formatTrendLabel(peakPoint.label, granularity),
      m: peakPoint.count
    }));

    state.portraitChart.setOption({
      animationDuration: 450,
      grid: {
        left: 16,
        right: 18,
        top: 24,
        bottom: 20,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15, 23, 42, 0.92)',
        borderWidth: 0,
        textStyle: {
          color: '#f8fafc'
        },
        formatter: (params) => {
          const point = params[0];
          return t('portrait.trendTooltip', { x: point.axisValue, n: point.data, u: trendUnitLabel(granularity) });
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisLabels,
        axisLine: {
          lineStyle: {
            color: 'rgba(148, 163, 184, 0.35)'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#64748b',
          fontSize: 11
        }
      },
      yAxis: {
        type: 'value',
        splitNumber: 4,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#94a3b8',
          fontSize: 11
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(148, 163, 184, 0.18)'
          }
        }
      },
      series: [{
        data: seriesData,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 4,
          color: '#4387f4'
        },
        itemStyle: {
          color: '#4387f4',
          borderColor: '#ffffff',
          borderWidth: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(67, 135, 244, 0.28)' },
            { offset: 1, color: 'rgba(67, 135, 244, 0.04)' }
          ])
        }
      }]
    }, true);
  }

  function renderPortraitFolders(folders) {
    if (folders.length === 0) {
      ui.portraitFolderList.innerHTML = `<div class="result-empty-state">${t('portrait.noFolderData')}</div>`;
      return;
    }

    ui.portraitFolderList.innerHTML = folders.map((folder, index) => `
      <div class="portrait-folder-item">
        <div class="portrait-folder-rank">#${index + 1}</div>
        <div class="portrait-folder-copy">
          <div class="portrait-folder-name">${escapeHtml(folder.title)}</div>
          <div class="portrait-folder-meta">${escapeHtml(folder.path.join(' / '))}</div>
        </div>
        <div class="portrait-folder-count">${folder.count}</div>
        <button class="portrait-inline-action" type="button" data-folder="${escapeHtml(folder.title)}">${t('portrait.view')}</button>
      </div>
    `).join('');
    ui.portraitFolderList.querySelectorAll('[data-folder]').forEach((button) => {
      button.addEventListener('click', () => {
        const title = button.dataset.folder || '';
        focusManageView(title, title ? t('portrait.focusFolder', { q: title }) : t('portrait.switchedToManage'));
      });
    });
  }

  function formatTrendLabel(label, granularity) {
    if (granularity === 'year') {
      return label;
    }

    if (granularity === 'month') {
      return label.slice(2).replace('-', '.');
    }

    return label.slice(5).replace('-', '/');
  }

  function renderPortraitShareCard(stats) {
    setNodeText(ui.portraitShareLevel, stats.level);
    setNodeText(ui.portraitShareHeadline, stats.headline);
    setNodeText(ui.portraitShareTotal, String(stats.totalBookmarks));
    setNodeText(ui.portraitShareDomains, String(stats.uniqueDomains));
    setNodeText(ui.portraitShareScore, String(stats.organizationScore));
    setNodeText(ui.portraitShareDays, String(stats.collectionDays));
    if (ui.portraitShareTags) {
      ui.portraitShareTags.innerHTML = stats.tags.length > 0
        ? stats.tags.map((tag) => `<span class="portrait-share-tag">${escapeHtml(tag)}</span>`).join('')
        : `<span class="portrait-share-tag">${t('portrait.stillOrganizing')}</span>`;
    }
  }

  function setNodeText(node, value) {
    if (node) {
      node.textContent = value;
    }
  }

  async function copyPortraitSummary() {
    const stats = state.portraitStats;
    if (!stats) {
      return;
    }
    const text = [
      `${t('portrait.shareTitle')}${stats.level}`,
      stats.headline,
      t('portrait.shareStats', { a: stats.totalBookmarks, b: stats.uniqueDomains, c: stats.organizationScore, d: stats.collectionDays }),
      `${t('portrait.shareTagsLabel')}${stats.tags.join(state.locale === 'en-US' ? ', ' : '、') || t('portrait.stillOrganizing')}`
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      showToast(t('toast.summaryCopied'), 'success');
    } catch (error) {
      showToast(t('toast.copyFailed'), 'error');
    }
  }

  function animateNumber(element, target, duration = 400) {
    const start = parseInt(element.textContent, 10) || 0;
    const diff = target - start;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      element.textContent = String(Math.round(start + diff * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  async function refreshScanStats() {
    if (state.scanController.isRunning || state.scanController.isPaused) {
      showToast(t('scan.scanningNow'), 'info');
      return;
    }

    ui.refreshScanStatsBtn.disabled = true;
    try {
      await loadBookmarks();
      await syncScanStorageWithTree();
      await loadStoredScanResults();
      showToast(t('toast.scanStatsRefreshed'), 'success');
    } finally {
      ui.refreshScanStatsBtn.disabled = false;
    }
  }

  async function syncScanStorageWithTree() {
    const invalidBookmarks = Object.values(state.invalidLinksMap)
      .filter((bookmark) => state.bookmarkMap.has(bookmark.id))
      .map((bookmark) => {
        const current = state.bookmarkMap.get(bookmark.id);
        return {
          id: current.id,
          title: current.title,
          url: current.url,
          path: current.path
        };
      });

    if (invalidBookmarks.length === 0) {
      await new Promise((resolve) => chrome.storage.local.remove(['scanResults'], resolve));
      state.scanTime = null;
      return;
    }

    await new Promise((resolve) => {
      chrome.storage.local.set({
        scanResults: {
          invalidCount: invalidBookmarks.length,
          invalidBookmarks,
          scanTime: state.scanTime || new Date().toISOString()
        }
      }, resolve);
    });
  }

  // 后台扫描引擎的状态快照缓存（用于角标清理判断）
  let latestBgScanState = null;

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

  async function startQuickScan() {
    if (state.scanController.isRunning || state.scanController.isPaused) {
      return;
    }

    state.activeTab = 'scan';
    renderTabs();
    resetScanRuntime();
    state.invalidLinksMap = {};
    state.selectedScanIds.clear();

    ui.pauseBtn.classList.add('hidden');
    ui.stopBtn.classList.add('hidden');
    ui.startScanBtn.disabled = true;
    ui.scanStatusText.textContent = t('scan.scanningNow');
    ui.scannedCount.textContent = '0';
    ui.scanInvalidCount.textContent = '0';
    ui.scanDuration.textContent = '0s';
    updateProgressRing(0);
    renderScanResults();

    // 扫描循环由 background service worker 驱动，页面只发起并订阅进度
    const response = await sendScanMessage({ type: 'startScan', timeoutMs: CONFIG.TIMEOUT * 1000 });
    const bgState = response?.state;

    if (!bgState) {
      ui.startScanBtn.disabled = false;
      ui.scanStatusText.textContent = t('scan.waiting');
      showToast(t('scan.startFailed'), 'error');
      return;
    }

    if (bgState.status === 'completed' && bgState.total === 0) {
      finishScan(t('scan.noScannableBookmarks'), 'warning');
      return;
    }

    applyBackgroundScanState(bgState, { force: true });
  }

  // 将后台 scanState 快照同步到页面 UI；页面刷新 / 关闭重开都会经此恢复
  function applyBackgroundScanState(bg, options = {}) {
    if (!bg || !bg.status) {
      return;
    }

    latestBgScanState = bg;
    let mirror = state.scanController;
    const wasActive = mirror.isRunning || mirror.isPaused;

    if (bg.status === 'running' || bg.status === 'paused') {
      if (!wasActive) {
        resetScanRuntime();
        // resetScanRuntime 会整体替换 scanController 对象，这里取最新引用
        mirror = state.scanController;

        mirror.isRunning = true;
        mirror.isPaused = bg.status === 'paused';
        mirror.total = bg.total;
        mirror.completed = bg.checked;
        mirror.errorCount = bg.errorCount;
        const elapsedNow = (bg.elapsedMs || 0) + (bg.status === 'running' ? Date.now() - (bg.segmentStart || Date.now()) : 0);
        mirror.startTime = Date.now() - elapsedNow;

        state.invalidLinksMap = {};
        state.selectedScanIds.clear();
        ui.startScanBtn.disabled = true;
        ui.pauseBtn.classList.remove('hidden');
        ui.stopBtn.classList.remove('hidden');
        ui.pauseBtn.textContent = mirror.isPaused ? t('scan.resume') : t('scan.pause');
        ui.scanStatusText.textContent = mirror.isPaused ? t('scan.paused') : t('scan.scanningNow');
        mirror.timer = setInterval(updateScanDuration, 1000);
        updateScanDuration();
        renderScanResults();
      } else if (mirror.isPaused !== (bg.status === 'paused')) {
        mirror.isPaused = bg.status === 'paused';
        ui.pauseBtn.textContent = mirror.isPaused ? t('scan.resume') : t('scan.pause');
        ui.scanStatusText.textContent = mirror.isPaused ? t('scan.paused') : t('scan.resuming');
      }

      mirror.total = bg.total;
      mirror.completed = bg.checked;
      mirror.errorCount = bg.errorCount;
      ui.scannedCount.textContent = String(mirror.completed);
      ui.scanInvalidCount.textContent = String(bg.invalidCount);
      updateProgressRing(mirror.total > 0 ? (mirror.completed / mirror.total) * 100 : 0);
      return;
    }

    if (bg.status !== 'completed' && bg.status !== 'cancelled' && bg.status !== 'interrupted') {
      return;
    }

    if (!wasActive && !options.force) {
      return;
    }

    clearInterval(mirror.timer);
    mirror.isRunning = false;
    mirror.isPaused = false;
    mirror.total = bg.total;
    mirror.completed = bg.checked;
    mirror.errorCount = bg.errorCount;
    state.scanTime = bg.scanTime || new Date().toISOString();

    // 后台已写入 scanResults（含取消时的部分结果），从 storage 读回并走原有收尾
    loadStoredScanResults({ renderManage: false }).then(() => {
      if (bg.status === 'cancelled' || bg.status === 'interrupted') {
        finishScan(t('scan.stopped'), 'warning');
      } else {
        const invalidCount = Object.keys(state.invalidLinksMap).length;
        finishScan(
          buildScanSummary(invalidCount, bg.errorCount),
          bg.errorCount > 0 || invalidCount > 0 ? 'warning' : 'success'
        );
      }
      dismissBadgeIfFinalSeen();
    });
  }

  async function restoreBackgroundScanUi() {
    const response = await sendScanMessage({ type: 'getScanState' });
    applyBackgroundScanState(response?.state);
    dismissBadgeIfFinalSeen();
  }

  function dismissBadgeIfFinalSeen() {
    const status = latestBgScanState?.status;
    if (
      document.visibilityState !== 'hidden' &&
      (status === 'completed' || status === 'cancelled' || status === 'interrupted')
    ) {
      sendScanMessage({ type: 'dismissScanBadge' });
    }
  }

  function resetScanRuntime() {
    clearInterval(state.scanController.timer);
    state.scanController = {
      isRunning: false,
      isPaused: false,
      isCancelled: false,
      total: 0,
      completed: 0,
      errorCount: 0,
      startTime: 0,
      timer: null
    };
  }

  function buildScanSummary(invalidCount, errorCount) {
    if (errorCount >= state.scanController.total && state.scanController.total > 0) {
      return t('scan.summaryErrors', { n: errorCount });
    }

    if (invalidCount > 0 && errorCount > 0) {
      return t('scan.summaryInvalidAndErrors', { a: invalidCount, b: errorCount });
    }

    if (invalidCount > 0) {
      return t('scan.summaryInvalid', { n: invalidCount });
    }

    if (errorCount > 0) {
      return t('scan.summaryErrorsOnly', { n: errorCount });
    }

    return t('scan.summaryClean');
  }

  function togglePauseScan() {
    if (!state.scanController.isRunning && !state.scanController.isPaused) {
      return;
    }

    const action = state.scanController.isPaused ? 'resumeScan' : 'pauseScan';
    sendScanMessage({ type: action }).then((response) => {
      if (response?.state) {
        applyBackgroundScanState(response.state);
      }
    });
  }

  function stopScan() {
    if (!state.scanController.isRunning && !state.scanController.isPaused) {
      return;
    }

    sendScanMessage({ type: 'stopScan' }).then((response) => {
      if (response?.state) {
        applyBackgroundScanState(response.state);
      }
    });
  }

  function finishScan(message, toastType) {
    clearInterval(state.scanController.timer);
    state.scanController.isRunning = false;
    state.scanController.isPaused = false;
    ui.startScanBtn.disabled = false;
    ui.pauseBtn.classList.add('hidden');
    ui.stopBtn.classList.add('hidden');
    ui.pauseBtn.textContent = t('scan.pause');
    ui.scanStatusText.textContent = message;
    updateProgressRing(state.scanController.total === 0 ? 0 : (state.scanController.completed / state.scanController.total) * 100);
    renderScanResults();
    renderManageTree();
    updateOverviewStats();
    showToast(message, toastType);
  }

  function updateScanDuration() {
    const elapsed = Math.floor((Date.now() - state.scanController.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    ui.scanDuration.textContent = minutes > 0 ? t('scan.durationMinSec', { m: minutes, s: seconds }) : t('scan.durationSec', { s: seconds });
  }

  function updateProgressRing(percent) {
    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    ui.progressCircle.style.strokeDashoffset = offset;
    ui.progressText.textContent = `${Math.round(percent)}%`;
    ui.scanSection.querySelector('.scan-progress-ring')?.setAttribute('aria-valuenow', String(Math.round(percent)));
  }

  async function persistScanResults() {
    const invalidBookmarks = Object.values(state.invalidLinksMap).map((bookmark) => ({
      id: bookmark.id,
      title: bookmark.title,
      url: bookmark.url,
      path: bookmark.path
    }));

    if (invalidBookmarks.length === 0) {
      await new Promise((resolve) => chrome.storage.local.remove(['scanResults'], resolve));
      return;
    }

    await new Promise((resolve) => {
      chrome.storage.local.set({
        scanResults: {
          invalidCount: invalidBookmarks.length,
          invalidBookmarks,
          scanTime: state.scanTime || new Date().toISOString()
        }
      }, resolve);
    });
  }

  function renderScanResults() {
    const invalidBookmarks = Object.values(state.invalidLinksMap);
    ui.invalidCountBadge.textContent = String(invalidBookmarks.length);
    ui.emptyFolderCountBadge.textContent = String(state.emptyFolders.length);
    ui.resultsMeta.textContent = state.scanTime
      ? `${t('scan.lastScanPrefix')}${new Date(state.scanTime).toLocaleString(state.locale)}`
      : t('scan.notStarted');

    renderScanList(ui.invalidLinksList, invalidBookmarks, 'bookmark');
    renderScanList(ui.emptyFoldersList, state.emptyFolders, 'folder');
    updateScanSelectionUi();
  }

  function updateScanSelectionUi() {
    ui.deleteSelectedScanBtn.disabled = state.selectedScanIds.size === 0;
    ui.deleteSelectedEmptyFoldersBtn.disabled = state.selectedEmptyFolderIds.size === 0;
    ui.selectAllEmptyFoldersBtn.textContent = state.emptyFolders.length > 0 && state.emptyFolders.every((folder) => state.selectedEmptyFolderIds.has(folder.id))
      ? t('scan.deselectAllEmptyFolders')
      : t('scan.selectAllEmptyFolders');
  }

  function renderScanList(container, items, type) {
    if (items.length === 0) {
      container.innerHTML = `<div class="result-empty-state">${t('scan.noItems')}</div>`;
      return;
    }

    container.innerHTML = '';
    items.forEach((item) => {
      const row = document.createElement('label');
      const isSelected = type === 'bookmark'
        ? state.selectedScanIds.has(item.id)
        : state.selectedEmptyFolderIds.has(item.id);
      row.className = `scan-result-item${isSelected ? ' selected' : ''}`;
      row.innerHTML = `
        <input class="result-checkbox" type="checkbox" ${isSelected ? 'checked' : ''}>
        <div class="scan-result-copy">
          <div class="scan-result-title-row">
            ${type === 'folder'
              ? `<span class="item-avatar item-avatar-folder">${ICONS.folder}</span>`
              : '<img class="item-favicon" alt="" loading="lazy">'}
            <div class="scan-result-title-wrap">
              <div class="scan-result-title">${escapeHtml(item.title || t('scan.untitled'))}</div>
              ${type === 'bookmark' ? `<div class="scan-result-domain">${escapeHtml(item.domain || getDomain(item.url))}</div>` : ''}
            </div>
          </div>
          <div class="scan-result-meta">${escapeHtml(type === 'folder' ? item.path.join(' / ') : `${item.domain || getDomain(item.url)} · ${item.path.join(' / ') || t('scan.root')}`)}</div>
        </div>
        <div class="scan-result-actions">
          ${type === 'bookmark' ? `<button class="btn btn-ghost btn-sm result-open-btn" type="button">${t('manage.open')}</button>` : ''}
          <button class="btn btn-secondary btn-sm result-manage-btn" type="button">${t('scan.goManage')}</button>
          <button class="btn btn-danger btn-sm result-delete-btn" type="button">${t('manage.delete')}</button>
        </div>
      `;

      const applySelectionChange = (selected) => {
        row.classList.toggle('selected', selected);
        updateScanSelectionUi();
      };

      const checkbox = row.querySelector('.result-checkbox');
      checkbox?.addEventListener('change', () => {
        if (checkbox.checked) {
          if (type === 'bookmark') {
            state.selectedScanIds.add(item.id);
          } else {
            state.selectedEmptyFolderIds.add(item.id);
          }
        } else if (type === 'bookmark') {
          state.selectedScanIds.delete(item.id);
        } else {
          state.selectedEmptyFolderIds.delete(item.id);
        }
        applySelectionChange(checkbox.checked);
      });

      row.addEventListener('click', (event) => {
        if (event.target.closest('button') || event.target.classList.contains('result-checkbox')) {
          return;
        }
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
          if (type === 'bookmark') {
          state.selectedScanIds.add(item.id);
          } else {
            state.selectedEmptyFolderIds.add(item.id);
          }
        } else if (type === 'bookmark') {
          state.selectedScanIds.delete(item.id);
        } else {
          state.selectedEmptyFolderIds.delete(item.id);
        }
        applySelectionChange(checkbox.checked);
      });

      row.querySelector('.result-open-btn')?.addEventListener('click', () => chrome.tabs.create({ url: item.url }));
      row.querySelector('.result-manage-btn')?.addEventListener('click', () => {
        if (type === 'bookmark') {
          openBookmarkFromScan(item);
        } else {
          openFolderFromScan(item);
        }
      });
      if (type === 'bookmark') {
        attachFavicon(row.querySelector('.item-favicon'), item.url, item.title);
      }
      row.querySelector('.result-delete-btn').addEventListener('click', async () => {
        if (type === 'bookmark') {
          await removeBookmarksByIds([item.id], false);
          await loadBookmarks();
          await persistScanResults();
          await loadStoredScanResults();
          showToast(t('scan.invalidBookmarkDeleted'), 'error');
        } else {
          state.selectedEmptyFolderIds.delete(item.id);
          await removeFoldersByIds([item.id]);
          renderScanResults();
          showToast(t('scan.emptyFolderDeleted'), 'error');
        }
      });

      container.appendChild(row);
    });
  }

  function toggleSelectAllInvalid() {
    const ids = Object.keys(state.invalidLinksMap);
    if (ids.length === 0) {
      showToast(t('scan.noIssueBookmarks'), 'warning');
      return;
    }

    const allSelected = ids.every((id) => state.selectedScanIds.has(id));
    ids.forEach((id) => {
      if (allSelected) {
        state.selectedScanIds.delete(id);
      } else {
        state.selectedScanIds.add(id);
      }
    });
    renderScanResults();
  }

  async function deleteSelectedScanResults() {
    const ids = Array.from(state.selectedScanIds);
    if (ids.length === 0) {
      showToast(t('scan.selectInvalidFirst'), 'warning');
      return;
    }

    if (!confirm(t('scan.confirmDeleteInvalid', { n: ids.length }))) {
      return;
    }

    await removeBookmarksByIds(ids, false);
    await loadBookmarks();
    await persistScanResults();
    await loadStoredScanResults();
    showToast(t('scan.invalidDeleted', { n: ids.length }), 'error');
  }

  async function clearStoredScanResults() {
    state.invalidLinksMap = {};
    state.selectedScanIds.clear();
    state.selectedEmptyFolderIds.clear();
    state.scanTime = null;
    await new Promise((resolve) => chrome.storage.local.remove(['scanResults'], resolve));
    renderScanResults();
    renderManageTree();
    updateOverviewStats();
    showToast(t('toast.scanResultsCleared'), 'success');
  }

  async function refreshBookmarks() {
    ui.refreshBtn.disabled = true;
    try {
      await loadBookmarks();
      await loadStoredScanResults();
      showToast(t('manage.bookmarksRefreshed'), 'success');
    } finally {
      ui.refreshBtn.disabled = false;
    }
  }

  function renderManageTree() {
    ui.bookmarkTree.innerHTML = '';

    if (state.rootNodes.length === 0) {
      ui.bookmarkTree.innerHTML = `<div class="empty-tree-state">${t('manage.noBookmarks')}</div>`;
      updateManageToolbar();
      return;
    }

    const fragment = document.createDocumentFragment();
    let renderedCount = 0;

    state.rootNodes.forEach((node) => {
      const rendered = renderManageNode(node);
      if (rendered) {
        fragment.appendChild(rendered);
        renderedCount += 1;
      }
    });

    if (renderedCount === 0) {
      ui.bookmarkTree.innerHTML = `<div class="empty-tree-state">${t('manage.noMatchingBookmarks')}</div>`;
    } else {
      ui.bookmarkTree.appendChild(fragment);
    }

    updateManageToolbar();
    renderManageTip();
    renderUndoBanner();
    focusInlineEditor();
  }

  function findNodeById(nodes, id) {
    for (const node of nodes) {
      if (node.id === id) {
        return node;
      }
      if (node.children) {
        const childMatch = findNodeById(node.children, id);
        if (childMatch) {
          return childMatch;
        }
      }
    }
    return null;
  }

  function rerenderManageEntity(type, id) {
    const selector = type === 'folder' ? `[data-folder-id="${id}"]` : `[data-bookmark-id="${id}"]`;
    const currentElement = ui.bookmarkTree.querySelector(selector);
    const node = findNodeById(state.rootNodes, id);
    const rendered = node ? renderManageNode(node) : null;

    if (!currentElement) {
      renderManageTree();
      return;
    }

    if (!rendered) {
      currentElement.remove();
      updateManageToolbar();
      renderUndoBanner();
      return;
    }

    currentElement.replaceWith(rendered);
    updateManageToolbar();
    renderUndoBanner();
    focusInlineEditor();
  }

  function syncBookmarkSelectionUi(bookmarkId) {
    const row = ui.bookmarkTree.querySelector(`[data-bookmark-id="${bookmarkId}"]`);
    if (!row) {
      updateManageToolbar();
      return;
    }

    const selected = state.selectedManageIds.has(bookmarkId);
    row.classList.toggle('selected', selected);
    const checkbox = row.querySelector('.bookmark-checkbox');
    if (checkbox) {
      checkbox.checked = selected;
    }
    updateManageToolbar();
  }

  function renderManageNode(node) {
    if (node.children) {
      const folder = state.folderMap.get(node.id);
      const matchesFolder = matchesSearch(`${folder?.title || ''} ${(folder?.path || []).join(' ')}`);
      // 搜索或筛选激活时保持全量渲染，让折叠文件夹内的匹配项可见；
      // 浏览态下折叠文件夹的子节点延迟到展开时再渲染，控制初始 DOM 规模
      const isFiltering = Boolean(state.searchTerm) || state.manageFilter !== 'all';
      const isExpanded = state.expandedFolderIds.has(node.id);

      let children = [];
      if (isFiltering) {
        children = node.children
          .map((child) => renderManageNode(child))
          .filter(Boolean);
        if (!matchesFolder && children.length === 0) {
          return null;
        }
      } else if (isExpanded) {
        children = node.children
          .map((child) => renderManageNode(child))
          .filter(Boolean);
      }

      const section = document.createElement('section');
      section.className = 'folder folder-shell';
      section.dataset.folderId = node.id;
      const isEmptyFolder = !!folder && folder.path.length > 0 && node.children.length === 0;
      const isEditing = state.editingNode?.type === 'folder' && state.editingNode.id === node.id;
      const editingValue = isEditing ? state.editingNode.value : '';
      const showChildren = isFiltering ? children.length > 0 : isExpanded;
      const childCount = isFiltering || isExpanded
        ? children.length
        : node.children.reduce((count, child) => (child.children || isScannable(child.url) ? count + 1 : count), 0);
      const directBookmarkIds = (node.children || [])
        .filter((child) => !child.children && isScannable(child.url))
        .map((child) => child.id);
      const hasDirectBookmarks = directBookmarkIds.length > 0;

      const header = document.createElement('div');
      header.className = `folder-header ${showChildren ? 'expanded' : ''}`;
      header.setAttribute('role', 'button');
      header.tabIndex = 0;
      header.draggable = !isEditing;
      header.innerHTML = `
        <span class="folder-main">
          <span class="folder-toggle-icon">▸</span>
          <span class="item-avatar item-avatar-folder">${ICONS.folder}</span>
          ${isEditing
            ? `<span class="rename-editor rename-editor-inline"><input class="rename-input" type="text" value="${escapeHtml(editingValue)}" aria-label="${t('manage.editFolderName')}"></span>`
            : `<span class="folder-title">${escapeHtml(folder?.title || t('manage.untitledFolder'))}</span>`}
          <span class="folder-meta">${escapeHtml((folder?.path || []).join(' / '))}</span>
        </span>
        <span class="folder-side">
          ${isEmptyFolder ? `<span class="bookmark-chip bookmark-chip-warning">${t('manage.emptyFolderChip')}</span>` : ''}
          <span class="folder-count">${childCount}</span>
          <span class="folder-actions">
            ${isEditing
              ? `<button class="btn-action btn-save" type="button">${t('manage.save')}</button><button class="btn-action btn-cancel" type="button">${t('manage.cancel')}</button>`
              : `<button class="btn-action btn-select-folder" type="button" ${hasDirectBookmarks ? '' : 'disabled'} title="${hasDirectBookmarks ? t('manage.selectFolderBookmarksTitle', { n: directBookmarkIds.length }) : t('manage.noSelectableBookmarks')}">${hasDirectBookmarks && directBookmarkIds.every((id) => state.selectedManageIds.has(id)) ? t('manage.clearFolderSelection') : t('manage.selectFolderBookmarks')}</button><button class="btn-action btn-create" type="button">${t('manage.newFolder')}</button><button class="btn-action btn-rename" type="button">${t('manage.rename')}</button>`}
            ${isEmptyFolder ? `<button class="btn-action btn-delete" type="button">${t('manage.delete')}</button>` : ''}
          </span>
        </span>
      `;

      const content = document.createElement('div');
      content.className = `folder-children ${showChildren ? 'show' : ''}`;
      children.forEach((child) => content.appendChild(child));

      const expandFolderNow = () => {
        state.expandedFolderIds.add(node.id);
        if (content.childElementCount === 0) {
          const fragment = document.createDocumentFragment();
          node.children.forEach((child) => {
            const rendered = renderManageNode(child);
            if (rendered) {
              fragment.appendChild(rendered);
            }
          });
          content.appendChild(fragment);
        }
        header.classList.add('expanded');
        content.classList.add('show');
      };

      const collapseFolderNow = () => {
        state.expandedFolderIds.delete(node.id);
        header.classList.remove('expanded');
        content.classList.remove('show');
      };

      const toggleFolderExpand = () => {
        if (isEditing) {
          return;
        }
        if (isFiltering) {
          const nextShown = !content.classList.contains('show');
          header.classList.toggle('expanded', nextShown);
          content.classList.toggle('show', nextShown);
          return;
        }
        if (state.expandedFolderIds.has(node.id)) {
          collapseFolderNow();
        } else {
          expandFolderNow();
        }
      };

      header.addEventListener('click', toggleFolderExpand);
      header.addEventListener('keydown', (event) => {
        if (event.target !== header || (event.key !== 'Enter' && event.key !== ' ')) {
          return;
        }
        event.preventDefault();
        toggleFolderExpand();
      });
      header.addEventListener('dragover', (event) => {
        if (!canDropDraggedItemIntoFolder(node.id)) {
          return;
        }
        event.preventDefault();
        header.classList.add('drop-target');
        // 折叠文件夹悬停片刻自动展开，一次拖拽就能深入多层目录
        if (!isFiltering && !state.expandedFolderIds.has(node.id)) {
          scheduleDragExpand(node.id, expandFolderNow);
        }
      });
      header.addEventListener('dragleave', (event) => {
        header.classList.remove('drop-target');
        if (!header.contains(event.relatedTarget)) {
          cancelDragExpand(node.id);
        }
      });
      header.addEventListener('drop', async (event) => {
        event.preventDefault();
        header.classList.remove('drop-target');
        cancelDragExpand(node.id);
        await moveDraggedItemToFolder(node.id);
      });
      header.addEventListener('dragstart', (event) => {
        if (state.editingNode) {
          event.preventDefault();
          return;
        }
        state.draggedItem = {
          id: node.id,
          type: 'folder'
        };
        section.classList.add('dragging');
        event.dataTransfer.effectAllowed = 'move';
        setDragGhostFromFolder(node.id);
        applyDragGhostImage(event);
        startDragAutoScroll();
      });
      header.addEventListener('dragend', () => {
        clearDragState();
      });
      header.querySelector('.btn-rename')?.addEventListener('click', (event) => {
        event.stopPropagation();
        startInlineRename('folder', node.id, folder?.title || t('manage.untitledFolder'));
      });
      header.querySelector('.btn-create')?.addEventListener('click', async (event) => {
        event.stopPropagation();
        await createFolderUnder(node.id);
      });
      header.querySelector('.btn-select-folder')?.addEventListener('click', (event) => {
        event.stopPropagation();
        selectFolderBookmarks(directBookmarkIds, event.currentTarget);
      });
      header.querySelector('.btn-save')?.addEventListener('click', async (event) => {
        event.stopPropagation();
        await saveInlineRename();
      });
      header.querySelector('.btn-cancel')?.addEventListener('click', (event) => {
        event.stopPropagation();
        cancelInlineRename();
      });
      header.querySelector('.btn-delete')?.addEventListener('click', async (event) => {
        event.stopPropagation();
        await deleteEmptyFolderFromManage(node.id);
      });
      header.querySelector('.rename-input')?.addEventListener('input', (event) => {
        if (state.editingNode) {
          state.editingNode.value = event.target.value;
        }
      });
      header.querySelector('.rename-input')?.addEventListener('keydown', async (event) => {
        event.stopPropagation();
        if (event.key === 'Enter') {
          event.preventDefault();
          await saveInlineRename();
        } else if (event.key === 'Escape') {
          event.preventDefault();
          cancelInlineRename();
        }
      });

      section.appendChild(header);
      section.appendChild(content);
      return section;
    }

    if (!isScannable(node.url)) {
      return null;
    }

    const bookmark = state.bookmarkMap.get(node.id);
    if (!bookmark || !matchesSearch(bookmark.searchText) || !passesManageFilter(bookmark)) {
      return null;
    }

    const article = document.createElement('article');
    article.className = `bookmark-item ${state.selectedManageIds.has(bookmark.id) ? 'selected' : ''} ${state.invalidLinksMap[bookmark.id] ? 'invalid' : ''}`;
    article.dataset.bookmarkId = bookmark.id;
    const isEditing = state.editingNode?.type === 'bookmark' && state.editingNode.id === bookmark.id;
    const editingValue = isEditing ? state.editingNode.value : '';
    article.draggable = !isEditing;
    article.innerHTML = `
      <div class="bookmark-select-cell">
        <input type="checkbox" class="bookmark-checkbox" ${state.selectedManageIds.has(bookmark.id) ? 'checked' : ''} aria-label="${escapeHtml(t('manage.selectBookmarkAria', { t: bookmark.title }))}">
      </div>
      <div class="bookmark-drag-handle" aria-hidden="true" title="${escapeHtml(getBookmarkDragHint(bookmark.id))}">⋮⋮</div>
      <div class="bookmark-content">
        <div class="bookmark-content-top">
          <img class="bookmark-favicon bookmark-favicon-lg" alt="" loading="lazy">
          ${isEditing
            ? `<label class="rename-editor"><input class="rename-input" type="text" value="${escapeHtml(editingValue)}" aria-label="${t('manage.editBookmarkName')}"></label>`
            : `<div class="bookmark-title">${escapeHtml(bookmark.title)}</div>`}
          ${state.invalidLinksMap[bookmark.id] ? `<span class="bookmark-chip bookmark-chip-danger">${t('manage.invalidChip')}</span>` : ''}
        </div>
        <div class="bookmark-url">${escapeHtml(bookmark.url)}</div>
        <div class="bookmark-meta-line">
          <span class="bookmark-domain">${escapeHtml(bookmark.domain)}</span>
          <span class="bookmark-path">${escapeHtml(bookmark.path.join(' / ') || t('manage.root'))}</span>
        </div>
      </div>
      <div class="bookmark-actions">
        <button class="btn-action btn-open" type="button">${t('manage.open')}</button>
        ${isEditing
          ? `<button class="btn-action btn-save" type="button">${t('manage.save')}</button><button class="btn-action btn-cancel" type="button">${t('manage.cancel')}</button>`
          : `<button class="btn-action btn-rename" type="button">${t('manage.rename')}</button>`}
        <button class="btn-action btn-delete" type="button">${t('manage.delete')}</button>
      </div>
      <div class="drop-indicator" aria-hidden="true"></div>
    `;

    const checkbox = article.querySelector('.bookmark-checkbox');
    checkbox.addEventListener('change', () => {
      toggleManageSelection(bookmark.id, checkbox.checked);
    });

    article.addEventListener('click', (event) => {
      if (event.target.closest('button') || event.target.closest('.rename-editor') || event.target.classList.contains('bookmark-checkbox')) {
        return;
      }
      checkbox.checked = !checkbox.checked;
      toggleManageSelection(bookmark.id, checkbox.checked);
    });

    article.querySelector('.btn-open').addEventListener('click', () => chrome.tabs.create({ url: bookmark.url }));
    attachFavicon(article.querySelector('.bookmark-favicon'), bookmark.url, bookmark.title);
    article.querySelector('.btn-rename')?.addEventListener('click', (event) => {
      event.stopPropagation();
      startInlineRename('bookmark', bookmark.id, bookmark.title);
    });
    article.querySelector('.btn-save')?.addEventListener('click', async (event) => {
      event.stopPropagation();
      await saveInlineRename();
    });
    article.querySelector('.btn-cancel')?.addEventListener('click', (event) => {
      event.stopPropagation();
      cancelInlineRename();
    });
    article.querySelector('.btn-delete').addEventListener('click', async () => {
      if (!confirm(t('manage.confirmDeleteBookmark', { t: bookmark.title }))) {
        return;
      }
      await removeBookmarksByIds([bookmark.id], true);
      await loadBookmarks();
      await loadStoredScanResults();
      showToast(t('manage.bookmarkDeleted'), 'error');
    });
    article.querySelector('.rename-input')?.addEventListener('input', (event) => {
      if (state.editingNode) {
        state.editingNode.value = event.target.value;
      }
    });
    article.querySelector('.rename-input')?.addEventListener('keydown', async (event) => {
      event.stopPropagation();
      if (event.key === 'Enter') {
        event.preventDefault();
        await saveInlineRename();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        cancelInlineRename();
      }
    });

    article.addEventListener('dragstart', (event) => {
      if (state.editingNode) {
        event.preventDefault();
        return;
      }
      const selectedIds = state.selectedManageIds.has(bookmark.id)
        ? getVisibleSelectedBookmarkIds()
        : [];
      if (selectedIds.length > 1) {
        state.draggedItem = {
          ids: selectedIds,
          type: 'bookmark-group'
        };
        selectedIds.forEach((id) => {
          ui.bookmarkTree.querySelector(`[data-bookmark-id="${id}"]`)?.classList.add('dragging');
        });
      } else {
        state.draggedItem = {
          id: bookmark.id,
          type: 'bookmark'
        };
        article.classList.add('dragging');
      }
      event.dataTransfer.effectAllowed = 'move';
      setDragGhostFromDraggedItem();
      applyDragGhostImage(event);
      startDragAutoScroll();
    });
    article.addEventListener('dragend', () => {
      clearDragState();
    });
    article.addEventListener('dragover', (event) => {
      if (!isBookmarkCardDropAllowed(bookmark.id)) {
        return;
      }
      event.preventDefault();
      // 上半区插到目标前面，下半区插到目标后面
      const rect = article.getBoundingClientRect();
      const insertAfter = event.clientY > rect.top + rect.height / 2;
      article.classList.toggle('drop-before', !insertAfter);
      article.classList.toggle('drop-after', insertAfter);
    });
    article.addEventListener('dragleave', (event) => {
      if (article.contains(event.relatedTarget)) {
        return;
      }
      article.classList.remove('drop-before');
      article.classList.remove('drop-after');
    });
    article.addEventListener('drop', async (event) => {
      if (!isBookmarkCardDropAllowed(bookmark.id)) {
        return;
      }
      event.preventDefault();
      const insertAfter = article.classList.contains('drop-after');
      article.classList.remove('drop-before');
      article.classList.remove('drop-after');
      await moveDraggedItemBesideBookmark(bookmark.id, insertAfter);
    });

    return article;
  }

  function matchesSearch(searchText) {
    if (!state.searchTerm) {
      return true;
    }
    return searchText.toLowerCase().includes(state.searchTerm);
  }

  function passesManageFilter(bookmark) {
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;

    switch (state.manageFilter) {
      case 'duplicates':
        return state.duplicateBookmarkIds.has(bookmark.id);
      case 'added_before_180d':
        return !!bookmark.dateAdded && bookmark.dateAdded < now - (180 * day);
      case 'added_before_365d':
        return !!bookmark.dateAdded && bookmark.dateAdded < now - (365 * day);
      case 'unused_180d':
        return !bookmark.dateLastUsed || bookmark.dateLastUsed < now - (180 * day);
      case 'unused_365d':
        return !bookmark.dateLastUsed || bookmark.dateLastUsed < now - (365 * day);
      default:
        return true;
    }
  }

  function getManageFilterLabel() {
    switch (state.manageFilter) {
      case 'duplicates':
        return t('manage.filterDuplicates');
      case 'added_before_180d':
        return t('manage.filterAddedBefore180');
      case 'added_before_365d':
        return t('manage.filterAddedBefore365');
      case 'unused_180d':
        return t('manage.filterUnused180');
      case 'unused_365d':
        return t('manage.filterUnused365');
      default:
        return t('manage.filterAll');
    }
  }

  function toggleManageFilterPanel() {
    if (!ui.manageFilterPanel || !ui.manageFilterToggleBtn) {
      return;
    }
    const isHidden = ui.manageFilterPanel.classList.toggle('hidden');
    ui.manageFilterToggleBtn.setAttribute('aria-expanded', String(!isHidden));
  }

  function setManageFilter(filter) {
    state.manageFilter = filter || 'all';
    ui.manageFilterToggleBtn.textContent = getManageFilterLabel();
    ui.manageFilterPanel?.classList.add('hidden');
    ui.manageFilterToggleBtn?.setAttribute('aria-expanded', 'false');
    ui.manageFilterPanel?.querySelectorAll('[data-filter]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.filter === state.manageFilter);
    });
    renderManageTree();
  }

  function openLargestFolderFromPortrait() {
    const title = state.portraitStats?.largestFolder?.title;
    focusManageView(title || '', title
      ? t('portrait.focusFoldersRelated', { q: title })
      : t('portrait.switchedToManage'));
  }

  function openDuplicateBookmarksFromPortrait() {
    switchTab('manage');
    if (ui.bookmarkSearchInput) {
      ui.bookmarkSearchInput.value = '';
    }
    state.searchTerm = '';
    setManageFilter('duplicates');
    showToast(t('toast.duplicatesFiltered'), 'info');
  }

  function openEmptyFoldersFromPortrait() {
    switchTab('scan');
    window.setTimeout(() => {
      ui.emptyFoldersList?.closest('.result-column')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    showToast(t('toast.switchedToEmptyFolders'), 'info');
  }

  function openDeepFoldersFromPortrait() {
    switchTab('manage');
    if (ui.bookmarkSearchInput) {
      ui.bookmarkSearchInput.value = '';
    }
    state.searchTerm = '';
    setManageFilter('all');
    state.isExpandedByDefault = true;
    state.expandedFolderIds = new Set(state.folderMap.keys());
    renderManageTree();
    showToast(t('manage.expandFoldersToast'), 'info');
  }

  function openBookmarkFromScan(item) {
    const query = item.title || item.domain || '';
    focusManageView(query, query
      ? t('portrait.focusBookmarks', { q: query })
      : t('portrait.switchedToManage'));
  }

  function openFolderFromScan(item) {
    const query = item.title || '';
    focusManageView(query, query
      ? t('portrait.focusFolder', { q: query })
      : t('portrait.switchedToManage'));
  }

  function focusManageView(query, message) {
    switchTab('manage');
    setManageFilter('all');
    state.searchTerm = query ? query.toLowerCase() : '';
    if (ui.bookmarkSearchInput) {
      ui.bookmarkSearchInput.value = query || '';
    }
    renderManageTree();
    showToast(message, 'info');
  }

  function toggleManageSelection(bookmarkId, selected) {
    if (selected) {
      state.selectedManageIds.add(bookmarkId);
    } else {
      state.selectedManageIds.delete(bookmarkId);
    }
    syncBookmarkSelectionUi(bookmarkId);
  }

  function updateManageToolbar() {
    const selectedCount = state.selectedManageIds.size;
    ui.selectionSummary.textContent = getManageSelectionSummary(selectedCount);
    ui.deleteSelectionBtn.disabled = selectedCount === 0;
    if (ui.moveSelectionBtn) {
      ui.moveSelectionBtn.disabled = selectedCount === 0;
    }
  }

  function getManageSelectionSummary(selectedCount) {
    if (selectedCount <= 0) {
      return t('manage.selectionNoneHint');
    }
    if (selectedCount === 1) {
      return t('manage.selectionOne');
    }
    return t('manage.selectionMany', { n: selectedCount });
  }

  function getBookmarkDragHint(bookmarkId) {
    if (state.selectedManageIds.has(bookmarkId) && state.selectedManageIds.size > 1) {
      return t('manage.dragHintGroup', { n: state.selectedManageIds.size });
    }
    return t('manage.dragHintSingle');
  }

  function selectFolderBookmarks(bookmarkIds, triggerButton) {
    if (!bookmarkIds.length) {
      return;
    }

    const allSelected = bookmarkIds.every((id) => state.selectedManageIds.has(id));
    bookmarkIds.forEach((id) => {
      if (allSelected) {
        state.selectedManageIds.delete(id);
      } else {
        state.selectedManageIds.add(id);
      }
    });
    updateManageToolbar();
    bookmarkIds.forEach((id) => syncBookmarkSelectionUi(id));
    if (triggerButton instanceof HTMLElement) {
      triggerButton.textContent = allSelected
        ? t('manage.selectFolderBookmarks')
        : t('manage.clearFolderSelection');
      triggerButton.title = allSelected
        ? t('manage.selectFolderBookmarksTitle', { n: bookmarkIds.length })
        : t('manage.clearFolderSelectionTitle', { n: bookmarkIds.length });
    }
  }

  function renderManageTip() {
    if (!ui.manageTipBanner) {
      return;
    }

    if (state.manageDragTipDismissed) {
      ui.manageTipBanner.classList.add('hidden');
      return;
    }

    const selectedCount = state.selectedManageIds.size;
    ui.manageTipCopy.textContent = selectedCount > 1
      ? t('manage.tipMulti', { n: selectedCount })
      : t('manage.tipSingle');
    ui.manageTipBanner.classList.remove('hidden');
  }

  async function dismissManageTip() {
    state.manageDragTipDismissed = true;
    ui.manageTipBanner?.classList.add('hidden');
    await new Promise((resolve) => chrome.storage.local.set({ manageDragTipDismissed: true }, resolve));
  }

  function isBookmarkInAiScope(bookmark) {
    if (state.aiScopeMode === 'filtered') {
      return matchesSearch(bookmark.searchText) && passesManageFilter(bookmark);
    }
    if (state.aiScopeMode === 'selected') {
      return state.selectedManageIds.has(bookmark.id);
    }
    return true;
  }

  function getAiScopeCounts() {
    let bookmarkCount = 0;
    const folderIds = new Set();
    const needsFolderWalk = state.aiScopeMode !== 'all';
    state.bookmarkMap.forEach((bookmark) => {
      if (!isBookmarkInAiScope(bookmark)) {
        return;
      }
      bookmarkCount += 1;
      if (!needsFolderWalk) {
        return;
      }
      let currentFolderId = bookmark.parentId || bookmark.parentFolderId || null;
      while (currentFolderId && !folderIds.has(currentFolderId)) {
        folderIds.add(currentFolderId);
        const currentFolder = state.folderMap.get(currentFolderId);
        currentFolderId = currentFolder?.parentId || currentFolder?.parentFolderId || null;
      }
    });
    return {
      bookmarkCount,
      folderCount: needsFolderWalk ? folderIds.size : state.folderMap.size
    };
  }

  function collectAiScope() {
    const scopedBookmarks = Array.from(state.bookmarkMap.values()).filter(isBookmarkInAiScope);

    const folderIds = new Set();
    scopedBookmarks.forEach((bookmark) => {
      let currentFolderId = bookmark.parentId || bookmark.parentFolderId || null;
      while (currentFolderId) {
        folderIds.add(currentFolderId);
        const currentFolder = state.folderMap.get(currentFolderId);
        currentFolderId = currentFolder?.parentId || currentFolder?.parentFolderId || null;
      }
    });

    const folders = Array.from(state.folderMap.values())
      .filter((folder) => state.aiScopeMode === 'all' || folderIds.has(folder.id))
      .map((folder) => ({
        id: folder.id,
        title: folder.title,
        path: folder.path,
        parentId: folder.parentId || folder.parentFolderId || null
      }));

    const bookmarks = scopedBookmarks.map((bookmark) => ({
      id: bookmark.id,
      title: bookmark.title,
      url: bookmark.url,
      path: bookmark.path,
      parentId: bookmark.parentId || bookmark.parentFolderId || null
    }));

    return {
      bookmarks,
      folders,
      scopeLabel: getAiScopeLabel(),
      scopeDescription: getAiScopeDescription(bookmarks.length, folders.length)
    };
  }

  function renderAiPlan() {
    if (!ui.aiPlanStatus) {
      return;
    }
    if (ui.aiManagePage?.classList.contains('hidden')) {
      return;
    }

    const scopeCounts = getAiScopeCounts();
    const visibleActions = state.aiPlan.validatedActions.filter((item) => !isAiActionDismissed(item.actionId));
    const validCount = visibleActions.filter((item) => item.executable).length;
    const isBusy = state.aiPlan.status === 'loading' || state.aiPlan.status === 'applying';
    ui.aiScopePicker?.querySelectorAll('[data-ai-scope]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.aiScope === state.aiScopeMode);
    });
    if (ui.aiScopeHint) {
      ui.aiScopeHint.textContent = getAiScopeDescription(scopeCounts.bookmarkCount, scopeCounts.folderCount);
    }
    if (ui.aiUsageHint) {
      ui.aiUsageHint.textContent = getAiUsageDescription();
    }
    ui.aiPlanActionCount.textContent = String(visibleActions.length);
    ui.aiPlanValidCount.textContent = String(validCount);
    ui.aiPlanStatus.textContent = getAiStatusLabel();
    ui.aiPlanStatus.dataset.status = state.aiPlan.status;
    renderAiSummary();
    ui.generateAiPlanBtn.disabled = isBusy || Boolean(state.aiUsageError) || (state.aiUsage?.remaining ?? 1) <= 0;
    ui.generateAiPlanBtn.classList.toggle('is-loading', state.aiPlan.status === 'loading');
    ui.generateAiPlanBtn.innerHTML = state.aiPlan.status === 'loading'
      ? `<span class="btn-spinner" aria-hidden="true"></span><span>${t('ai.working')}</span>`
      : `<span>${t('ai.generate')}</span>`;
    const canApply = canApplyCurrentAiPlan(validCount);
    ui.applyAiPlanBtn.disabled = !canApply || isBusy;
    renderAiUndoButton();

    renderAiWarnings();
    renderAiActions();
    renderAiHistory();
  }

  function getAiUsageDescription() {
    if (state.aiUsageError) {
      return state.aiUsageError;
    }
    if (!state.aiUsage) {
      return t('ai.loadingUsage');
    }
    const { remaining, limit, used } = state.aiUsage;
    if (remaining <= 0) {
      return t('ai.quotaExhausted', { used, limit });
    }
    return t('ai.usageRemaining', { remaining, used, limit });
  }

  function renderAiUndoButton() {
    if (!ui.undoAiPlanBtn) {
      return;
    }
    const undo = state.aiUndoAction;
    const isVisible = !!undo
      && undo.historyId === state.aiHistory[0]?.id
      && state.aiPlan.historyId === undo.historyId
      && state.aiPlan.status === 'applied';
    ui.undoAiPlanBtn.classList.toggle('hidden', !isVisible);
    if (!isVisible) {
      return;
    }
    ui.undoAiPlanBtn.disabled = undo.status === 'undoing';
    ui.undoAiPlanBtn.textContent = undo.status === 'undoing'
      ? t('ai.undoing')
      : (undo.lastError ? t('ai.retryUndoLatest') : t('ai.undoLatest'));
  }

  function renderAiHistory() {
    if (!ui.aiHistoryList) {
      return;
    }
    if (!state.aiHistory.length) {
      ui.aiHistoryList.innerHTML = `<div class="ai-empty-state">${t('ai.historyEmpty')}</div>`;
      return;
    }

    ui.aiHistoryList.innerHTML = state.aiHistory.map((item) => {
      const isActive = item.id === state.aiActiveHistoryId;
      const isReadonly = item.status !== 'applied' && !isAiHistoryEntryApplicable(item);
      const timeText = formatAiHistoryTime(item.createdAt);
      const actionCount = Array.isArray(item.actions) ? item.actions.length : 0;
      const validCount = Array.isArray(item.validatedActions)
        ? item.validatedActions.filter((action) => action.executable).length
        : 0;
      return `
        <article class="ai-history-item${isActive ? ' is-active' : ''}${isReadonly ? ' is-readonly' : ''}" data-ai-history-id="${escapeHtml(item.id)}" tabindex="0" role="button">
          <div class="ai-history-topline">
            <div class="ai-history-state-tags">
              <span class="ai-history-status status-${escapeHtml(item.status)}">${escapeHtml(getAiHistoryStatusLabel(item.status))}</span>
              ${isReadonly ? `<span class="ai-history-readonly">${t('ai.readonly')}</span>` : ''}
            </div>
            <div class="ai-history-side">
              <span class="ai-history-time">${escapeHtml(timeText)}</span>
              <button class="ai-history-delete" type="button" aria-label="${t('ai.deleteHistoryAria')}" data-ai-history-delete="${escapeHtml(item.id)}">${t('manage.delete')}</button>
            </div>
          </div>
          <div class="ai-history-title">${escapeHtml(item.instruction || t('ai.untitledTask'))}</div>
          <div class="ai-history-meta">${escapeHtml(t('ai.historyMeta', { n: actionCount, v: validCount, s: formatAiScopeLabel(item.scopeLabel, item.scopeMode) }))}</div>
        </article>
      `;
    }).join('');
  }

  function renderAiSummary() {
    if (state.aiPlan.status === 'loading') {
      if (ui.aiResultSummary) {
        ui.aiResultSummary.innerHTML = '';
      }
      const title = state.aiLoadingState.phase === 'generating'
        ? t('ai.generatingResult')
        : t('ai.analyzingStructure');
      const subtitle = state.aiLoadingState.phase === 'generating'
        ? t('ai.composingActions')
        : t('ai.readingNodes');
      const existingShell = ui.aiSummaryText.querySelector('.ai-summary-loading');

      if (!existingShell) {
        ui.aiSummaryText.innerHTML = `
          <div class="ai-summary-loading" aria-live="polite">
            <div class="ai-orbit-loader" aria-hidden="true">
              <span class="ai-orbit-ring"></span>
              <span class="ai-orbit-dot ai-orbit-dot-a"></span>
              <span class="ai-orbit-dot ai-orbit-dot-b"></span>
            </div>
            <div class="ai-summary-loading-copy">
              <div class="ai-summary-loading-title"></div>
              <div class="ai-summary-loading-subtitle"></div>
              <div class="ai-summary-loading-stage"></div>
            </div>
          </div>
        `;
      }

      const titleNode = ui.aiSummaryText.querySelector('.ai-summary-loading-title');
      const subtitleNode = ui.aiSummaryText.querySelector('.ai-summary-loading-subtitle');
      const stageNode = ui.aiSummaryText.querySelector('.ai-summary-loading-stage');

      if (titleNode) {
        titleNode.textContent = title;
      }
      if (subtitleNode) {
        subtitleNode.textContent = subtitle;
      }
      if (stageNode) {
        stageNode.innerHTML = state.aiLoadingState.phase === 'analyzing' && state.aiLoadingState.previewLines.length
          ? `
            <div class="ai-summary-feed ai-summary-feed-ticker">
              ${getAiLoadingVisibleLines().map((line, index) => `
                <div class="ai-summary-feed-line" style="animation-delay:${index * 0.06}s">${escapeHtml(line)}</div>
              `).join('')}
            </div>
          `
          : `
            <div class="ai-summary-loading-bars">
              <span class="ai-summary-bar bar-wide"></span>
              <span class="ai-summary-bar bar-mid"></span>
              <span class="ai-summary-bar bar-short"></span>
            </div>
          `;
      }
      return;
    }

    clearAiLoadingPhaseTimer();
    renderAiResultSummary();
    ui.aiSummaryText.textContent = state.aiPlan.summary || t('ai.summaryEmpty');
  }

  function renderAiResultSummary() {
    if (!ui.aiResultSummary) {
      return;
    }
    if (!state.aiPlan.actions.length) {
      ui.aiResultSummary.innerHTML = '';
      return;
    }

    const counts = state.aiPlan.actions.reduce((acc, action) => {
      if (action.type === 'create_folder') {
        acc.create += 1;
      } else if (action.type === 'move_bookmark') {
        acc.move += 1;
      } else if (action.type === 'rename_bookmark' || action.type === 'rename_folder') {
        acc.rename += 1;
      } else {
        acc.other += 1;
      }
      return acc;
    }, { create: 0, move: 0, rename: 0, other: 0 });

    const parts = [];
    if (counts.create > 0) {
      parts.push({ label: t('ai.summaryCreateFolders'), value: t('ai.summaryCount', { n: counts.create }) });
    }
    if (counts.move > 0) {
      parts.push({ label: t('ai.summaryMoveBookmarks'), value: t('ai.summaryCountItems', { n: counts.move }) });
    }
    if (counts.rename > 0) {
      parts.push({ label: t('ai.summaryRenameTitles'), value: t('ai.summaryCount', { n: counts.rename }) });
    }
    if (counts.other > 0) {
      parts.push({ label: t('ai.summaryOtherActions'), value: t('ai.summaryCount', { n: counts.other }) });
    }

    ui.aiResultSummary.innerHTML = parts
      .map((part) => `
        <div class="ai-result-chip">
          <span class="ai-result-chip-label">${escapeHtml(part.label)}</span>
          <strong class="ai-result-chip-value">${escapeHtml(part.value)}</strong>
        </div>
      `)
      .join('');
  }

  function beginAiLoadingSequence(context) {
    clearAiLoadingPhaseTimer();
    state.aiLoadingState.phase = 'analyzing';
    state.aiLoadingState.previewLines = buildAiLoadingPreviewLines(context);
    state.aiLoadingState.feedIndex = 0;
    if (state.aiLoadingState.feedTicker) {
      window.clearInterval(state.aiLoadingState.feedTicker);
    }
    state.aiLoadingState.feedTicker = window.setInterval(() => {
      if (state.aiPlan.status !== 'loading' || state.aiLoadingState.phase !== 'analyzing') {
        return;
      }
      state.aiLoadingState.feedIndex = (state.aiLoadingState.feedIndex + 1) % state.aiLoadingState.previewLines.length;
      renderAiSummary();
    }, 180);
    state.aiLoadingState.phaseTimer = window.setTimeout(() => {
      if (state.aiPlan.status !== 'loading') {
        return;
      }
      state.aiLoadingState.phase = 'generating';
      state.aiLoadingState.previewLines = [];
      if (state.aiLoadingState.feedTicker) {
        window.clearInterval(state.aiLoadingState.feedTicker);
        state.aiLoadingState.feedTicker = null;
      }
      renderAiSummary();
    }, 4000);
  }

  function clearAiLoadingPhaseTimer() {
    if (state.aiLoadingState.feedTicker) {
      window.clearInterval(state.aiLoadingState.feedTicker);
      state.aiLoadingState.feedTicker = null;
    }
    if (state.aiLoadingState.phaseTimer) {
      window.clearTimeout(state.aiLoadingState.phaseTimer);
      state.aiLoadingState.phaseTimer = null;
    }
  }

  function getAiLoadingVisibleLines() {
    if (!state.aiLoadingState.previewLines.length) {
      return [];
    }
    const lines = [];
    for (let index = 0; index < 2; index += 1) {
      const lineIndex = (state.aiLoadingState.feedIndex + index) % state.aiLoadingState.previewLines.length;
      lines.push(state.aiLoadingState.previewLines[lineIndex]);
    }
    return lines;
  }

  function buildAiLoadingPreviewLines(context) {
    const bookmarks = Array.isArray(context?.bookmarks) ? context.bookmarks.slice(0, 8) : [];
    if (!bookmarks.length) {
      return [
        t('ai.scanTitles'),
        t('ai.extractDomains'),
        t('ai.checkFolders')
      ];
    }

    return bookmarks.map((bookmark) => {
      const pathLabel = Array.isArray(bookmark.path) && bookmark.path.length
        ? bookmark.path.slice(-2).join(' / ')
        : t('ai.uncategorizedPath');
      const domainLabel = bookmark.url ? getDomain(bookmark.url) : t('ai.localBookmark');
      return `${bookmark.title}  ·  ${domainLabel}  ·  ${pathLabel}`;
    });
  }

  function getAiStatusLabel() {
    switch (state.aiPlan.status) {
      case 'loading':
        return t('ai.statusGenerating');
      case 'ready':
        return t('ai.statusReview');
      case 'applying':
        return t('ai.statusApplying');
      case 'applied':
        return t('ai.statusApplied');
      case 'error':
        return t('ai.statusFailedPlan');
      default:
        return t('ai.statusPending');
    }
  }

  function getAiHistoryStatusLabel(status) {
    switch (status) {
      case 'applied':
        return t('ai.statusApplied');
      case 'error':
        return t('ai.statusFailedShort');
      case 'loading':
        return t('ai.statusGenerating');
      default:
        return t('ai.statusGenerated');
    }
  }

  function getAiScopeLabel() {
    switch (state.aiScopeMode) {
      case 'filtered':
        return t('ai.scopeFiltered');
      case 'selected':
        return t('ai.scopeSelected');
      default:
        return t('ai.scopeAll');
    }
  }

  function formatAiScopeLabel(label, scopeMode) {
    if (scopeMode === 'all') {
      return t('ai.scopeAll');
    }
    if (scopeMode === 'filtered') {
      return t('ai.scopeFiltered');
    }
    if (scopeMode === 'selected') {
      return t('ai.scopeSelected');
    }
    // 旧历史条目未存 scopeMode，回退到按当时渲染出的文案反查
    if (!label) {
      return t('ai.scopeAll');
    }
    if (label === '全部书签' || label === 'All Bookmarks') {
      return t('ai.scopeAll');
    }
    if (label === '当前筛选结果' || label === 'Current Filtered Results') {
      return t('ai.scopeFiltered');
    }
    if (label === '仅选中的书签' || label === 'Selected Bookmarks Only') {
      return t('ai.scopeSelected');
    }
    return label;
  }

  function getAiScopeDescription(bookmarkCount, folderCount) {
    const suffix = t('ai.scopeDescriptionSuffix', { b: bookmarkCount, f: folderCount });
    switch (state.aiScopeMode) {
      case 'filtered':
        return t('ai.scopeDescFiltered', { suffix });
      case 'selected':
        return t('ai.scopeDescSelected', { suffix });
      default:
        return t('ai.scopeDescAll', { suffix });
    }
  }

  function setAiScopeMode(mode) {
    state.aiScopeMode = ['all', 'filtered', 'selected'].includes(mode) ? mode : 'all';
    renderAiPlan();
  }

  function canApplyCurrentAiPlan(validCount) {
    if (state.aiPlan.status !== 'ready' || validCount <= 0) {
      return false;
    }
    if (state.aiPlan.source !== 'history') {
      return true;
    }
    if (!state.aiPlan.historyId || state.aiHistory[0]?.id !== state.aiPlan.historyId) {
      return false;
    }
    return state.aiHistory[0]?.status === 'ready';
  }

  function isAiHistoryEntryApplicable(item) {
    return !!item && item.id === state.aiHistory[0]?.id && item.status === 'ready';
  }

  function formatAiHistoryTime(timestamp) {
    if (!timestamp) {
      return t('ai.justNow');
    }
    const date = new Date(timestamp);
    const now = new Date();
    const sameDay = date.toDateString() === now.toDateString();
    const localeTag = state.locale === 'en-US' ? 'en-US' : 'zh-CN';
    const timeText = date.toLocaleTimeString(localeTag, { hour: '2-digit', minute: '2-digit' });
    return sameDay
      ? t('ai.todayAt', { t: timeText })
      : `${date.getMonth() + 1}/${date.getDate()} ${timeText}`;
  }

  function renderAiWarnings() {
    ui.aiWarningList.innerHTML = '';
    if (state.aiPlan.status === 'loading' || state.aiPlan.status === 'idle') {
      return;
    }
    const warnings = [...state.aiPlan.warnings, ...state.aiUndoWarnings];
    if (!warnings.length) {
      return;
    }

    const title = document.createElement('div');
    title.className = 'ai-warning-title';
    title.textContent = t('ai.attentionNeeded');
    ui.aiWarningList.appendChild(title);

    warnings.forEach((warning) => {
      const item = document.createElement('div');
      item.className = 'ai-warning-item';
      item.textContent = warning;
      ui.aiWarningList.appendChild(item);
    });
  }

  function renderAiActions() {
    ui.aiActionList.innerHTML = '';
    renderAiActionSummary();
    if (!state.aiPlan.validatedActions.length) {
      ui.aiActionList.innerHTML = `<div class="ai-empty-state">${t('ai.actionsEmpty')}</div>`;
      return;
    }
    const groups = groupAiActions(state.aiPlan.validatedActions);
    const completed = state.aiPlan.status === 'applied';
    const readonly = !completed && state.aiPlan.source === 'history' && !canApplyCurrentAiPlan(1);

    groups.forEach((group) => {
      const expanded = state.aiExpandedActionGroups.has(group.key);
      const visibleItems = expanded ? group.items : group.items.slice(0, 4);
      const hiddenCount = Math.max(0, group.items.length - visibleItems.length);
      const section = document.createElement('section');
      section.className = 'ai-action-group';
      section.innerHTML = `
        <div class="ai-action-group-header">
          <div>
            <div class="ai-action-group-title">${escapeHtml(group.label)}</div>
            <div class="ai-action-group-meta">${escapeHtml(t('ai.groupActions', { n: group.items.length }))}</div>
          </div>
          ${group.items.length > 4 ? `<button class="btn btn-ghost btn-sm ai-action-group-toggle" type="button" data-ai-group-toggle="${escapeHtml(group.key)}">${expanded ? t('ai.collapse') : t('ai.showMore', { n: hiddenCount })}</button>` : ''}
        </div>
        <div class="ai-action-group-list">
          ${visibleItems.map((item) => renderAiActionItem(item, { completed, readonly })).join('')}
        </div>
      `;
      ui.aiActionList.appendChild(section);
    });
  }

  function renderAiActionItem(item, context) {
    const dismissed = isAiActionDismissed(item.actionId);
    const completed = context.completed;
    const readonly = context.readonly;
    return `
      <article class="ai-action-item status-${item.status}${dismissed ? ' is-dismissed' : ''}${completed ? ' is-complete' : ''}${readonly ? ' is-readonly' : ''}">
        <div class="ai-action-copy">
          <div class="ai-action-title">${escapeHtml(item.title)}</div>
          <div class="ai-action-meta">${escapeHtml(item.description)}</div>
        </div>
        <div class="ai-action-side">
          <span class="ai-action-badge status-${completed ? 'complete' : readonly ? 'readonly' : dismissed ? 'dismissed' : item.status}">${escapeHtml(completed ? t('ai.done') : readonly ? t('ai.notApplied') : dismissed ? t('ai.ignored') : item.badge)}</span>
          ${readonly || completed ? '' : `<button class="btn ${dismissed ? 'btn-secondary' : 'btn-ghost'} btn-sm ai-action-toggle-btn" type="button" data-ai-action-toggle="${escapeHtml(item.actionId)}">
            ${dismissed ? t('ai.restore') : t('ai.ignore')}
          </button>`}
        </div>
      </article>
    `;
  }

  function renderAiActionSummary() {
    if (!ui.aiActionSummary) {
      return;
    }
    const actions = state.aiPlan.validatedActions;
    if (!actions.length) {
      ui.aiActionSummary.innerHTML = '';
      return;
    }
    const groups = groupAiActions(actions);
    const total = actions.length;
    ui.aiActionSummary.innerHTML = `
      <div class="ai-summary-chip">${t('ai.groupActions', { n: total })}</div>
      ${groups.map((group) => `<div class="ai-summary-chip">${escapeHtml(group.label)} ${group.items.length}</div>`).join('')}
    `;
  }

  function groupAiActions(actions) {
    const definitions = [
      { key: 'create', label: t('ai.filterCreate'), match: (item) => item.type === 'create_folder' },
      { key: 'move', label: t('ai.filterMove'), match: (item) => item.type === 'move_bookmark' },
      { key: 'rename', label: t('ai.filterRename'), match: (item) => item.type === 'rename_bookmark' || item.type === 'rename_folder' },
      { key: 'other', label: t('ai.filterOther'), match: () => true }
    ];
    const groups = definitions.map((definition) => ({ ...definition, items: [] }));
    actions.forEach((item) => {
      const group = groups.find((candidate) => candidate.match(item));
      group.items.push(item);
    });
    return groups.filter((group) => group.items.length > 0);
  }

  function handleAiActionListClick(event) {
    const groupToggle = event.target.closest('[data-ai-group-toggle]');
    if (groupToggle) {
      toggleAiActionGroup(groupToggle.dataset.aiGroupToggle);
      return;
    }
    const toggleButton = event.target.closest('[data-ai-action-toggle]');
    if (!toggleButton) {
      return;
    }
    toggleAiActionDismissed(toggleButton.dataset.aiActionToggle);
  }

  function toggleAiActionGroup(groupKey) {
    if (!groupKey) {
      return;
    }
    if (state.aiExpandedActionGroups.has(groupKey)) {
      state.aiExpandedActionGroups.delete(groupKey);
    } else {
      state.aiExpandedActionGroups.add(groupKey);
    }
    renderAiActions();
  }

  function handleAiHistoryClick(event) {
    const deleteButton = event.target.closest('[data-ai-history-delete]');
    if (deleteButton) {
      deleteAiHistory(deleteButton.dataset.aiHistoryDelete);
      return;
    }
    const historyButton = event.target.closest('[data-ai-history-id]');
    if (!historyButton) {
      return;
    }
    openAiHistory(historyButton.dataset.aiHistoryId);
  }

  document.addEventListener('keydown', (event) => {
    const historyItem = event.target.closest?.('[data-ai-history-id]');
    if (!historyItem || (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }
    event.preventDefault();
    openAiHistory(historyItem.dataset.aiHistoryId);
  });

  async function deleteAiHistory(historyId) {
    if (!historyId) {
      return;
    }
    state.aiHistory = state.aiHistory.filter((item) => item.id !== historyId);
    await new Promise((resolve) => chrome.storage.local.set({ aiPlanHistory: state.aiHistory }, resolve));

    if (state.aiActiveHistoryId === historyId) {
      if (state.aiHistory.length > 0) {
        openAiHistory(state.aiHistory[0].id);
        return;
      }
      resetAiPlanDraft();
      return;
    }

    renderAiHistory();
    showToast(t('toast.aiHistoryDeleted'), 'warning');
  }

  function openAiHistory(historyId) {
    const item = state.aiHistory.find((entry) => entry.id === historyId);
    if (!item) {
      return;
    }
    clearAiLoadingPhaseTimer();
    state.aiExpandedActionGroups.clear();
    state.aiActiveHistoryId = historyId;
    state.aiUndoWarnings = [];
    state.aiPlan = {
      status: item.status,
      summary: item.summary || '',
      warnings: Array.isArray(item.warnings) ? item.warnings : [],
      actions: Array.isArray(item.actions) ? item.actions : [],
      validatedActions: Array.isArray(item.validatedActions) ? item.validatedActions : validateAiActions(item.actions || []),
      dismissedActionIds: new Set(item.dismissedActionIds || []),
      rawResponse: item.rawResponse || null,
      historyId: item.id,
      source: 'history'
    };
    renderAiPlan();
  }

  function toggleAiActionDismissed(actionId) {
    if (!actionId) {
      return;
    }
    if (state.aiPlan.dismissedActionIds.has(actionId)) {
      state.aiPlan.dismissedActionIds.delete(actionId);
    } else {
      state.aiPlan.dismissedActionIds.add(actionId);
    }
    renderAiPlan();
  }

  function isAiActionDismissed(actionId) {
    return state.aiPlan.dismissedActionIds?.has(actionId);
  }

  async function fetchAiWithTimeout(url, options, timeoutMs) {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } finally {
      window.clearTimeout(timer);
    }
  }

  async function generateAiPlan() {
    if (state.aiPlan.status === 'loading' || state.aiPlan.status === 'applying') {
      return;
    }
    const endpoint = getAiEndpoint();
    if (!endpoint) {
      state.aiUsageError = t('toast.aiServiceUnavailable');
      renderAiPlan();
      showToast(t('toast.aiServiceUnavailable'), 'warning');
      return;
    }
    const instruction = ui.aiInstructionInput.value.trim();
    if (!instruction) {
      showToast(t('toast.aiRequestRequired'), 'warning');
      return;
    }
    if (instruction.length > 1000) {
      showToast(t('toast.aiRequestTooLong'), 'warning');
      return;
    }

    await refreshBookmarkStateForAi();
    const context = collectAiScope();
    if (context.bookmarks.length === 0) {
      showToast(t('toast.aiScopeEmpty'), 'warning');
      return;
    }
    state.aiPlan = {
      status: 'loading',
      summary: t('ai.requestingPlan'),
      warnings: [],
      actions: [],
      validatedActions: [],
      dismissedActionIds: new Set(),
      rawResponse: null
    };
    state.aiUndoWarnings = [];
    beginAiLoadingSequence(context);
    renderAiPlan();

    const payload = {
      requestId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `req-${Date.now()}`,
      clientId: state.aiClientId,
      instruction,
      context: {
        bookmarks: context.bookmarks,
        folders: context.folders
      }
    };

    let planGenerated = false;
    try {
      const response = await fetchAiWithTimeout(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }, 60000);

      if (!response.ok) {
        let detail = null;
        try {
          detail = await response.json();
        } catch (error) {}
        if (response.status === 429 && detail?.detail?.code === 'DAILY_LIMIT_EXCEEDED') {
          state.aiUsage = {
            limit: detail.detail.limit,
            used: detail.detail.used,
            remaining: detail.detail.remaining,
            date: detail.detail.date
          };
          renderAiPlan();
          throw new Error(t('ai.quotaLimitReached', { used: detail.detail.used, limit: detail.detail.limit }));
        }
        throw new Error(detail?.detail?.message || detail?.detail || `HTTP ${response.status}`);
      }

      const result = await response.json();
      const rawActions = Array.isArray(result.actions)
        ? result.actions.map((action, index) => ({
            ...action,
            actionId: action?.actionId || `action-${index + 1}`
          }))
        : [];
      const normalizedPlan = normalizeAiActions(rawActions);
      const historyId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `history-${Date.now()}`;
      const validatedActions = validateAiActions(normalizedPlan.actions);
      state.aiPlan = {
        status: 'ready',
        summary: result.summary || t('ai.planReadySummary'),
        warnings: [...(Array.isArray(result.warnings) ? result.warnings : []), ...normalizedPlan.warnings],
        actions: normalizedPlan.actions,
        validatedActions,
        dismissedActionIds: new Set(),
        rawResponse: result,
        historyId,
        source: 'current'
      };
      state.aiExpandedActionGroups.clear();
      await saveAiHistoryEntry(buildAiHistoryEntry({
        id: historyId,
        instruction,
        scopeLabel: context.scopeLabel,
        plan: state.aiPlan
      }));
      state.aiUsageError = '';
      planGenerated = true;
      renderAiPlan();
      showToast(t('toast.aiPlanGenerated'), 'success');
    } catch (error) {
      const errorMessage = String(error?.message || error);
      const isFetchError = error instanceof TypeError || error?.name === 'AbortError' || /Failed to fetch/i.test(errorMessage);
      state.aiPlan = {
        status: 'error',
        summary: isFetchError
          ? t('toast.aiUnreachable')
          : t('toast.aiPlanFailedDetail'),
        warnings: [error?.name === 'AbortError' ? t('toast.aiUnreachable') : errorMessage],
        actions: [],
        validatedActions: [],
        dismissedActionIds: new Set(),
        rawResponse: null,
        historyId: null,
        source: 'current'
      };
      if (isFetchError) {
        state.aiUsageError = t('ai.usageServiceUnavailable');
      }
      state.aiUndoWarnings = [];
      renderAiPlan();
      showToast(t('toast.aiPlanFailed'), 'error');
    } finally {
      if (planGenerated) {
        await refreshAiUsage();
      }
    }
  }

  function validateAiActions(actions) {
    const validated = [];
    const virtualFolders = new Map();
    state.folderMap.forEach((folder) => {
      virtualFolders.set(folder.path.join(' / '), { id: folder.id, path: folder.path });
    });

    actions.forEach((action, index) => {
      const type = action?.type || 'unknown';
      const actionId = action?.actionId || `action-${index + 1}`;
      if (type === 'create_folder') {
        const parentFolder = resolveFolderReference(action.parentId, action.parentPath, virtualFolders);
        if (!parentFolder || !action.title) {
          validated.push(buildAiValidationResult(actionId, 'invalid', t('ai.cannotCreateFolder'), t('ai.createFolderMissingInfo'), false, type));
          return;
        }
        const nextPath = [...parentFolder.path, action.title];
        virtualFolders.set(nextPath.join(' / '), { id: null, path: nextPath, actionId });
        validated.push(buildAiValidationResult(
          actionId,
          'valid',
          action.autoGenerated ? t('ai.autoCreateFolderTitle', { t: action.title }) : t('ai.createFolderTitle', { t: action.title }),
          `${action.autoGenerated ? t('ai.autoAddedForMove') : ''}${t('ai.createFolderDesc', { p: parentFolder.path.join(' / ') })}`,
          true,
          type
        ));
        return;
      }

      if (type === 'rename_bookmark') {
        const bookmark = state.bookmarkMap.get(action.bookmarkId);
        if (!bookmark || !action.newTitle) {
          validated.push(buildAiValidationResult(actionId, 'invalid', t('ai.cannotRenameBookmark'), t('ai.renameBookmarkMissingInfo'), false, type));
          return;
        }
        validated.push(buildAiValidationResult(actionId, 'valid', t('ai.renameBookmarkTitle', { t: bookmark.title }), t('ai.renameChangeTo', { t: action.newTitle }), true, type));
        return;
      }

      if (type === 'rename_folder') {
        const folder = state.folderMap.get(action.folderId);
        if (!folder || !action.newTitle) {
          validated.push(buildAiValidationResult(actionId, 'invalid', t('ai.cannotRenameFolder'), t('ai.renameFolderMissingInfo'), false, type));
          return;
        }
        validated.push(buildAiValidationResult(actionId, 'valid', t('ai.renameFolderTitle', { t: folder.title }), t('ai.renameChangeTo', { t: action.newTitle }), true, type));
        return;
      }

      if (type === 'move_bookmark') {
        const bookmark = state.bookmarkMap.get(action.bookmarkId);
        const targetFolder = resolveFolderReference(action.targetFolderId, action.targetPath, virtualFolders);
        if (!bookmark || !targetFolder) {
          validated.push(buildAiValidationResult(actionId, 'invalid', t('ai.cannotMoveBookmark'), t('ai.moveMissingInfo'), false, type));
          return;
        }
        validated.push(buildAiValidationResult(actionId, 'valid', t('ai.moveBookmarkTitle', { t: bookmark.title }), t('ai.moveTo', { p: targetFolder.path.join(' / ') }), true, type));
        return;
      }

      validated.push(buildAiValidationResult(actionId, 'warning', t('ai.unsupportedType', { t: type }), t('ai.unsupportedDetail'), false, type));
    });

    return validated;
  }

  function normalizeAiActions(actions) {
    const normalized = [];
    const warnings = [];
    const knownFolders = new Map();
    let autoCreateCount = 0;

    state.folderMap.forEach((folder) => {
      knownFolders.set(folder.path.join(' / '), { id: folder.id, path: folder.path });
    });

    actions.forEach((action) => {
      if (action.type === 'create_folder') {
        const parentAutoCreates = ensureFolderPathActions(action.parentPath, knownFolders, () => {
          autoCreateCount += 1;
          return `auto-create-${autoCreateCount}`;
        });
        normalized.push(...parentAutoCreates);
        normalized.push(action);
        const parentPath = resolveKnownFolderPath(action.parentId, action.parentPath, knownFolders);
        if (parentPath && action.title) {
          knownFolders.set([...parentPath, action.title].join(' / '), { id: null, path: [...parentPath, action.title] });
        }
        return;
      }

      if (action.type === 'move_bookmark' && Array.isArray(action.targetPath) && action.targetPath.length) {
        const autoCreates = ensureFolderPathActions(action.targetPath, knownFolders, () => {
          autoCreateCount += 1;
          return `auto-create-${autoCreateCount}`;
        });
        normalized.push(...autoCreates, action);
        return;
      }

      normalized.push(action);
    });

    if (autoCreateCount > 0) {
      warnings.push(t('ai.autoCreateWarning', { n: autoCreateCount }));
    }

    return { actions: normalized, warnings };
  }

  function ensureFolderPathActions(targetPath, knownFolders, nextActionId) {
    if (!Array.isArray(targetPath) || targetPath.length === 0) {
      return [];
    }

    const existingPath = resolveKnownFolderPath(null, targetPath, knownFolders);
    if (existingPath && existingPath.length === targetPath.length) {
      return [];
    }

    let deepestExistingLength = 0;
    for (let length = targetPath.length; length > 0; length -= 1) {
      if (knownFolders.has(targetPath.slice(0, length).join(' / '))) {
        deepestExistingLength = length;
        break;
      }
    }

    const actions = [];
    for (let index = deepestExistingLength + 1; index <= targetPath.length; index += 1) {
      const parentPath = targetPath.slice(0, index - 1);
      const title = targetPath[index - 1];
      if (!parentPath.length || knownFolders.has(targetPath.slice(0, index).join(' / '))) {
        continue;
      }
      const action = {
        actionId: nextActionId(),
        type: 'create_folder',
        title,
        parentPath,
        autoGenerated: true
      };
      actions.push(action);
      knownFolders.set(targetPath.slice(0, index).join(' / '), { id: null, path: targetPath.slice(0, index) });
    }

    return actions;
  }

  function resolveKnownFolderPath(folderId, path, knownFolders) {
    if (folderId && state.folderMap.has(folderId)) {
      return state.folderMap.get(folderId).path;
    }
    if (Array.isArray(path) && path.length > 0) {
      const key = path.join(' / ');
      if (knownFolders.has(key)) {
        return knownFolders.get(key).path;
      }
    }
    return null;
  }

  function buildAiValidationResult(actionId, status, title, description, executable, type = 'other') {
    return {
      actionId,
      status,
      type,
      title,
      description,
      executable,
      badge: status === 'valid'
        ? t('ai.applicable')
        : status === 'invalid'
          ? t('ai.invalidShort')
          : t('ai.needsReview')
    };
  }

  function resolveFolderReference(folderId, path, virtualFolders) {
    if (folderId && state.folderMap.has(folderId)) {
      const folder = state.folderMap.get(folderId);
      return { id: folder.id, path: folder.path };
    }
    if (Array.isArray(path) && path.length > 0) {
      const key = path.join(' / ');
      if (virtualFolders?.has(key)) {
        return virtualFolders.get(key);
      }
      for (const folder of state.folderMap.values()) {
        if (folder.path.join(' / ') === key) {
          return { id: folder.id, path: folder.path };
        }
      }
    }
    return null;
  }

  async function applyAiPlan() {
    if (state.aiPlan.status === 'loading' || state.aiPlan.status === 'applying') {
      return;
    }

    await refreshBookmarkStateForAi();
    state.aiPlan.validatedActions = validateAiActions(state.aiPlan.actions);
    renderAiPlan();

    const executableActions = state.aiPlan.actions.filter((action) => {
      const validation = state.aiPlan.validatedActions.find((item) => item.actionId === (action.actionId || ''));
      return validation?.executable && !isAiActionDismissed(validation.actionId);
    });

    if (executableActions.length === 0) {
      showToast(t('toast.aiNoApplicableActions'), 'warning');
      return;
    }

    state.aiPlan.status = 'applying';
    renderAiPlan();

    const runtimeFolderPaths = new Map();
    const virtualFolderRefs = new Map();
    const undoSteps = [];
    state.folderMap.forEach((folder) => {
      const pathKey = folder.path.join(' / ');
      runtimeFolderPaths.set(pathKey, folder.id);
      virtualFolderRefs.set(pathKey, { id: folder.id, path: folder.path });
    });

    try {
      for (let index = 0; index < executableActions.length; index += 1) {
        const action = executableActions[index];
        if (action.type === 'create_folder') {
          const parentFolder = resolveFolderReference(action.parentId, action.parentPath, virtualFolderRefs);
          if (!parentFolder) {
            continue;
          }
          const created = await new Promise((resolve, reject) => {
            chrome.bookmarks.create({
              parentId: parentFolder.id,
              title: action.title
            }, (node) => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else {
                resolve(node);
              }
            });
          });
          undoSteps.push({
            type: 'delete_folder',
            folderId: created.id,
            title: action.title || t('manage.untitledFolder')
          });
          const createdPath = [...parentFolder.path, action.title];
          const createdKey = createdPath.join(' / ');
          runtimeFolderPaths.set(createdKey, created.id);
          virtualFolderRefs.set(createdKey, { id: created.id, path: createdPath });
          continue;
        }

        if (action.type === 'rename_bookmark') {
          const bookmark = state.bookmarkMap.get(action.bookmarkId);
          if (bookmark) {
            undoSteps.push({
              type: 'rename_bookmark',
              bookmarkId: action.bookmarkId,
              title: bookmark.title
            });
          }
          await new Promise((resolve, reject) => {
            chrome.bookmarks.update(action.bookmarkId, { title: action.newTitle }, () => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else {
                resolve();
              }
            });
          });
          continue;
        }

        if (action.type === 'rename_folder') {
          const folder = state.folderMap.get(action.folderId);
          if (folder) {
            undoSteps.push({
              type: 'rename_folder',
              folderId: action.folderId,
              title: folder.title
            });
          }
          await new Promise((resolve, reject) => {
            chrome.bookmarks.update(action.folderId, { title: action.newTitle }, () => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else {
                resolve();
              }
            });
          });
          continue;
        }

        if (action.type === 'move_bookmark') {
          const bookmark = state.bookmarkMap.get(action.bookmarkId);
          if (bookmark) {
            undoSteps.push({
              type: 'move_bookmark',
              bookmarkId: action.bookmarkId,
              parentId: bookmark.parentId,
              index: bookmark.index
            });
          }
          let targetFolderId = action.targetFolderId || null;
          if (!targetFolderId && Array.isArray(action.targetPath)) {
            targetFolderId = await ensureRuntimeFolderPath(action.targetPath, runtimeFolderPaths, virtualFolderRefs);
          }
          if (!targetFolderId) {
            continue;
          }
          await new Promise((resolve, reject) => {
            chrome.bookmarks.move(action.bookmarkId, { parentId: targetFolderId }, () => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else {
                resolve();
              }
            });
          });
        }
      }

      await loadBookmarks();
      await loadStoredScanResults();
      state.aiPlan.status = 'applied';
      state.aiUndoAction = {
        historyId: state.aiPlan.historyId,
        status: 'ready',
        lastError: null,
        steps: undoSteps.reverse()
      };
      if (state.aiPlan.historyId) {
        await updateAiHistoryEntry(state.aiPlan.historyId, {
          status: 'applied',
          validatedActions: state.aiPlan.validatedActions
        });
      }
      renderAiPlan();
      focusAiPreviewResults();
      showToast(t('toast.aiPlanApplied'), 'success');
    } catch (error) {
      state.aiPlan.status = 'error';
      state.aiPlan.warnings = [String(error.message || error)];
      renderAiPlan();
      showToast(t('toast.aiPlanApplyFailed'), 'error');
    }
  }

  async function refreshBookmarkStateForAi() {
    await loadBookmarks();
    await loadStoredScanResults({ renderManage: false });
  }

  async function refreshAiUsage() {
    const endpointBase = getAiEndpoint();
    if (!state.aiClientId) {
      return;
    }
    if (!endpointBase) {
      state.aiUsage = null;
      state.aiUsageError = t('toast.aiServiceUnavailable');
      renderAiPlan();
      return;
    }
    try {
      const endpoint = `${endpointBase.replace(/\/plan$/, '/usage')}?clientId=${encodeURIComponent(state.aiClientId)}`;
      const response = await fetchAiWithTimeout(endpoint, {}, 10000);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const result = await response.json();
      state.aiUsageError = '';
      state.aiUsage = {
        limit: result.limit,
        used: result.used,
        remaining: result.remaining,
        date: result.date
      };
    } catch (error) {
      state.aiUsage = null;
      state.aiUsageError = t('ai.usageUnreachable');
    }
    renderAiPlan();
  }

  async function undoLastAiPlanApplication() {
    const undo = state.aiUndoAction;
    if (!undo || undo.status === 'undoing') {
      return;
    }
    if (undo.historyId !== state.aiHistory[0]?.id || state.aiPlan.historyId !== undo.historyId) {
      showToast(t('toast.aiUndoOnlyLatest'), 'warning');
      return;
    }

    undo.status = 'undoing';
    undo.lastError = null;
    state.aiUndoWarnings = [];
    renderAiPlan();
    const failures = [];

    for (const step of undo.steps) {
      try {
        await runAiUndoStep(step);
      } catch (error) {
        failures.push(describeAiUndoFailure(step, error));
      }
    }

    await loadBookmarks();
    await loadStoredScanResults();

    if (failures.length === 0) {
      state.aiUndoAction = null;
      state.aiPlan.status = 'ready';
      if (state.aiPlan.historyId) {
        await updateAiHistoryEntry(state.aiPlan.historyId, {
          status: 'ready',
          validatedActions: state.aiPlan.validatedActions
        });
      }
      renderAiPlan();
      showToast(t('toast.aiUndoDone'), 'success');
      return;
    }

    state.aiUndoAction = {
      ...undo,
      status: 'ready',
      lastError: failures.join('；')
    };
    state.aiUndoWarnings = [
      t('ai.undoWarning', { n: failures.length }),
      ...failures
    ];
    renderAiPlan();
    showToast(t('toast.aiUndoIncomplete'), 'warning');
  }

  function focusAiPreviewResults() {
    if (!ui.aiPreviewCard) {
      return;
    }
    ui.aiPreviewCard.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    window.setTimeout(() => {
      ui.aiPreviewCard?.focus({ preventScroll: true });
    }, 240);
  }

  async function ensureRuntimeFolderPath(targetPath, runtimeFolderPaths, virtualFolderRefs) {
    if (!Array.isArray(targetPath) || !targetPath.length) {
      return null;
    }

    const existingId = runtimeFolderPaths.get(targetPath.join(' / ')) || null;
    if (existingId) {
      return existingId;
    }

    let deepestExistingLength = 0;
    for (let length = targetPath.length; length > 0; length -= 1) {
      if (runtimeFolderPaths.has(targetPath.slice(0, length).join(' / '))) {
        deepestExistingLength = length;
        break;
      }
    }

    for (let index = deepestExistingLength + 1; index <= targetPath.length; index += 1) {
      const currentPath = targetPath.slice(0, index);
      const currentKey = currentPath.join(' / ');
      if (runtimeFolderPaths.has(currentKey)) {
        continue;
      }
      const parentPath = currentPath.slice(0, -1);
      const parentId = runtimeFolderPaths.get(parentPath.join(' / ')) || null;
      const title = currentPath[currentPath.length - 1];
      if (!parentId || !title) {
        return null;
      }
      const created = await new Promise((resolve, reject) => {
        chrome.bookmarks.create({ parentId, title }, (node) => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve(node);
          }
        });
      });
      runtimeFolderPaths.set(currentKey, created.id);
      virtualFolderRefs.set(currentKey, { id: created.id, path: currentPath });
    }

    return runtimeFolderPaths.get(targetPath.join(' / ')) || null;
  }

  async function runAiUndoStep(step) {
    if (step.type === 'delete_folder') {
      await new Promise((resolve, reject) => {
        chrome.bookmarks.remove(step.folderId, () => {
          if (chrome.runtime.lastError) {
            const message = chrome.runtime.lastError.message || '';
            if (message.includes('Can\'t find bookmark')) {
              resolve();
              return;
            }
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
      return;
    }

    if (step.type === 'rename_bookmark') {
      await new Promise((resolve, reject) => {
        chrome.bookmarks.update(step.bookmarkId, { title: step.title }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
      return;
    }

    if (step.type === 'rename_folder') {
      await new Promise((resolve, reject) => {
        chrome.bookmarks.update(step.folderId, { title: step.title }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
      return;
    }

    if (step.type === 'move_bookmark') {
      const safeIndex = await getSafeBookmarkMoveIndex(step.parentId, step.index);
      await new Promise((resolve, reject) => {
        chrome.bookmarks.move(step.bookmarkId, { parentId: step.parentId, index: safeIndex }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
    }
  }

  function describeAiUndoFailure(step, error) {
    const message = String(error?.message || error || t('ai.unknownError'));
    switch (step.type) {
      case 'delete_folder':
        return t('ai.undoFailDeleteFolder', { t: step.title, msg: message });
      case 'rename_bookmark':
        return t('ai.undoFailRestoreBookmarkTitle', { msg: message });
      case 'rename_folder':
        return t('ai.undoFailRestoreFolderTitle', { msg: message });
      case 'move_bookmark':
        return t('ai.undoFailRestorePosition', { msg: message });
      default:
        return t('ai.undoFailStep', { msg: message });
    }
  }

  async function getSafeBookmarkMoveIndex(parentId, desiredIndex) {
    if (!parentId || typeof desiredIndex !== 'number' || Number.isNaN(desiredIndex)) {
      return undefined;
    }

    const children = await new Promise((resolve, reject) => {
      chrome.bookmarks.getChildren(parentId, (nodes) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(Array.isArray(nodes) ? nodes : []);
        }
      });
    });

    return Math.max(0, Math.min(desiredIndex, children.length));
  }

  function resetAiPlanDraft() {
    state.aiActiveHistoryId = null;
    state.aiExpandedActionGroups.clear();
    if (ui.aiInstructionInput) {
      ui.aiInstructionInput.value = '';
    }
    state.aiPlan = {
      status: 'idle',
      summary: '',
      warnings: [],
      actions: [],
      validatedActions: [],
      dismissedActionIds: new Set(),
      rawResponse: null,
      historyId: null,
      source: 'draft'
    };
    renderAiPlan();
  }

  function buildAiHistoryEntry({ id, instruction, scopeLabel, plan }) {
    return {
      id,
      instruction,
      scopeLabel,
      scopeMode: state.aiScopeMode,
      createdAt: Date.now(),
      status: plan.status,
      summary: plan.summary,
      warnings: [...plan.warnings],
      actions: [...plan.actions],
      validatedActions: [...plan.validatedActions],
      dismissedActionIds: [],
      rawResponse: plan.rawResponse || null
    };
  }

  async function saveAiHistoryEntry(entry) {
    state.aiHistory = [entry, ...state.aiHistory.filter((item) => item.id !== entry.id)].slice(0, 20);
    state.aiActiveHistoryId = entry.id;
    await new Promise((resolve) => chrome.storage.local.set({ aiPlanHistory: state.aiHistory }, resolve));
  }

  async function updateAiHistoryEntry(historyId, updates) {
    state.aiHistory = state.aiHistory.map((item) => {
      if (item.id !== historyId) {
        return item;
      }
      return {
        ...item,
        ...updates
      };
    });
    state.aiActiveHistoryId = historyId;
    await new Promise((resolve) => chrome.storage.local.set({ aiPlanHistory: state.aiHistory }, resolve));
  }

  function getVisibleSelectedBookmarkIds() {
    return Array.from(ui.bookmarkTree.querySelectorAll('[data-bookmark-id]'))
      .map((node) => node.dataset.bookmarkId)
      .filter((id) => state.selectedManageIds.has(id));
  }

  function selectAllVisibleBookmarks() {
    const visibleIds = Array.from(ui.bookmarkTree.querySelectorAll('[data-bookmark-id]')).map((node) => node.dataset.bookmarkId);
    if (visibleIds.length === 0) {
      showToast(t('manage.noVisibleBookmarks'), 'warning');
      return;
    }

    const allSelected = visibleIds.every((id) => state.selectedManageIds.has(id));
    visibleIds.forEach((id) => {
      if (allSelected) {
        state.selectedManageIds.delete(id);
      } else {
        state.selectedManageIds.add(id);
      }
      syncBookmarkSelectionUi(id);
    });
  }

  function clearManageSelection() {
    Array.from(state.selectedManageIds).forEach((id) => {
      state.selectedManageIds.delete(id);
      syncBookmarkSelectionUi(id);
    });
    updateManageToolbar();
  }

  async function deleteSelectedBookmarks() {
    const ids = Array.from(state.selectedManageIds);
    if (ids.length === 0) {
      showToast(t('manage.selectDeleteFirst'), 'warning');
      return;
    }
    if (!confirm(t('manage.confirmDeleteBookmarks', { n: ids.length }))) {
      return;
    }

    await removeBookmarksByIds(ids, true);
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(t('manage.bookmarksDeleted', { n: ids.length }), 'error');
  }

  // ===== "移动到…"批量移动对话框 =====

  let moveFolderOptions = [];
  let moveFolderActiveIndex = 0;

  function handleManageShortcuts(event) {
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
      return;
    }
    if (event.key !== 'm' && event.key !== 'M') {
      return;
    }
    if (ui.managePage.classList.contains('hidden')) {
      return;
    }
    const activeTag = document.activeElement?.tagName;
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') {
      return;
    }
    if (state.selectedManageIds.size === 0) {
      return;
    }
    event.preventDefault();
    openMoveFolderDialog();
  }

  function buildMoveFolderOptions() {
    // 根层级（书签栏/其他书签等）不在 folderOptions 里，这里补上
    const rootOptions = state.rootNodes
      .filter((node) => node.children)
      .map((node) => ({
        id: node.id,
        label: node.title || t('manage.untitledFolder')
      }));
    return [...rootOptions, ...state.folderOptions];
  }

  function isMoveTargetCurrent(folderId) {
    const parentIds = new Set();
    state.selectedManageIds.forEach((id) => {
      const bookmark = state.bookmarkMap.get(id);
      if (bookmark?.parentId) {
        parentIds.add(bookmark.parentId);
      }
    });
    return parentIds.size === 1 && parentIds.has(folderId);
  }

  function openMoveFolderDialog() {
    if (state.selectedManageIds.size === 0) {
      showToast(t('manage.selectMoveFirst'), 'warning');
      return;
    }
    ui.moveFolderSearchInput.value = '';
    moveFolderActiveIndex = 0;
    renderMoveFolderOptions();
    if (ui.moveFolderDialogTitleSummary) {
      ui.moveFolderDialogTitleSummary.textContent = t('manage.moveDialogSummary', { n: state.selectedManageIds.size });
    }
    ui.moveFolderDialog.classList.remove('hidden');
    requestAnimationFrame(() => ui.moveFolderDialog.classList.add('show'));
    // 过渡窗口期内 focus() 会静默失败（实测），等弹窗过渡结束后再聚焦
    setTimeout(() => ui.moveFolderSearchInput.focus(), 260);
  }

  function hideMoveFolderDialog() {
    ui.moveFolderDialog.classList.remove('show');
    setTimeout(() => ui.moveFolderDialog.classList.add('hidden'), 180);
  }

  function renderMoveFolderOptions() {
    const query = (ui.moveFolderSearchInput.value || '').trim().toLowerCase();
    moveFolderOptions = buildMoveFolderOptions()
      .filter((option) => !query || option.label.toLowerCase().includes(query));
    moveFolderActiveIndex = Math.min(moveFolderActiveIndex, Math.max(0, moveFolderOptions.length - 1));

    ui.moveFolderList.innerHTML = '';
    if (moveFolderOptions.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'move-folder-empty';
      empty.textContent = t('manage.moveDialogEmpty');
      ui.moveFolderList.appendChild(empty);
      return;
    }

    moveFolderOptions.forEach((option, index) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = `move-folder-option${index === moveFolderActiveIndex ? ' is-active' : ''}`;
      row.dataset.folderId = option.id;
      row.disabled = isMoveTargetCurrent(option.id);
      row.innerHTML = `
        <span class="move-folder-icon">${ICONS.folder}</span>
        <span class="move-folder-label">${escapeHtml(option.label)}</span>
      `;
      row.addEventListener('click', () => confirmMoveSelectionTo(option.id));
      ui.moveFolderList.appendChild(row);
    });
  }

  function updateMoveFolderActiveRow() {
    const rows = ui.moveFolderList.querySelectorAll('.move-folder-option');
    rows.forEach((row, index) => {
      row.classList.toggle('is-active', index === moveFolderActiveIndex);
    });
    rows[moveFolderActiveIndex]?.scrollIntoView({ block: 'nearest' });
  }

  function handleMoveFolderSearchKeydown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (moveFolderOptions.length === 0) {
        return;
      }
      const delta = event.key === 'ArrowDown' ? 1 : -1;
      moveFolderActiveIndex = (moveFolderActiveIndex + delta + moveFolderOptions.length) % moveFolderOptions.length;
      updateMoveFolderActiveRow();
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const option = moveFolderOptions[moveFolderActiveIndex];
      if (option && !isMoveTargetCurrent(option.id)) {
        confirmMoveSelectionTo(option.id);
      }
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      hideMoveFolderDialog();
    }
  }

  async function confirmMoveSelectionTo(folderId) {
    const ids = Array.from(state.selectedManageIds);
    hideMoveFolderDialog();
    if (ids.length === 0) {
      return;
    }
    await moveBookmarkIdsToFolder(ids, folderId, t('manage.movedCount', { n: ids.length }));
    clearManageSelection();
  }

  function clearDragState() {
    state.draggedItem = null;
    document.querySelectorAll('.dragging').forEach((element) => element.classList.remove('dragging'));
    document.querySelectorAll('.drop-target').forEach((element) => element.classList.remove('drop-target'));
    document.querySelectorAll('.drop-before').forEach((element) => element.classList.remove('drop-before'));
    document.querySelectorAll('.drop-after').forEach((element) => element.classList.remove('drop-after'));
    cancelDragExpand();
    stopDragAutoScroll();
    removeDragGhost();
  }

  const DRAG_AUTO_SCROLL_EDGE_PX = 80;
  const DRAG_AUTO_SCROLL_MAX_SPEED = 22;
  const DRAG_EXPAND_DELAY_MS = 650;

  // 拖拽接近视口上下边缘时自动滚动，长距离移动不再需要"拖一段、放一下"
  function startDragAutoScroll() {
    stopDragAutoScroll();
    const scrollElement = document.scrollingElement;
    if (!scrollElement) {
      return;
    }
    let lastClientY = null;
    const handleDragOver = (event) => {
      lastClientY = event.clientY;
    };
    const tick = () => {
      if (lastClientY !== null) {
        const viewHeight = window.innerHeight;
        if (lastClientY < DRAG_AUTO_SCROLL_EDGE_PX) {
          scrollElement.scrollTop -= DRAG_AUTO_SCROLL_MAX_SPEED * (1 - lastClientY / DRAG_AUTO_SCROLL_EDGE_PX);
        } else if (lastClientY > viewHeight - DRAG_AUTO_SCROLL_EDGE_PX) {
          scrollElement.scrollTop += DRAG_AUTO_SCROLL_MAX_SPEED * (1 - (viewHeight - lastClientY) / DRAG_AUTO_SCROLL_EDGE_PX);
        }
      }
      autoScroll.frame = requestAnimationFrame(tick);
    };
    const autoScroll = { handleDragOver, frame: requestAnimationFrame(tick) };
    document.addEventListener('dragover', handleDragOver);
    state.dragAutoScroll = autoScroll;
  }

  function stopDragAutoScroll() {
    const autoScroll = state.dragAutoScroll;
    if (!autoScroll) {
      return;
    }
    if (autoScroll.frame) {
      cancelAnimationFrame(autoScroll.frame);
    }
    document.removeEventListener('dragover', autoScroll.handleDragOver);
    state.dragAutoScroll = null;
  }

  function scheduleDragExpand(folderId, expand) {
    const pending = state.dragExpandTimer;
    if (pending && pending.folderId === folderId) {
      // dragover 会连续触发，不能每次都重置倒计时，否则永远到不了 650ms
      return;
    }
    cancelDragExpand();
    state.dragExpandTimer = {
      folderId,
      timer: setTimeout(() => {
        state.dragExpandTimer = null;
        expand();
      }, DRAG_EXPAND_DELAY_MS)
    };
  }

  function cancelDragExpand(folderId) {
    const pending = state.dragExpandTimer;
    if (!pending) {
      return;
    }
    if (!folderId || pending.folderId === folderId) {
      clearTimeout(pending.timer);
      state.dragExpandTimer = null;
    }
  }

  // 自定义拖影：小尺寸 chip 替代浏览器默认的整卡截图
  function setDragGhostFromDraggedItem() {
    const dragged = state.draggedItem;
    if (!dragged) {
      return;
    }
    if (dragged.type === 'bookmark-group') {
      const first = state.bookmarkMap.get(dragged.ids[0]);
      setDragGhost(first?.title || t('manage.dragHintGroup', { n: dragged.ids.length }), dragged.ids.length);
      return;
    }
    if (dragged.type === 'bookmark') {
      const bookmark = state.bookmarkMap.get(dragged.id);
      setDragGhost(bookmark?.title || '', 1, false);
      return;
    }
    if (dragged.type === 'folder') {
      const folder = state.folderMap.get(dragged.id);
      setDragGhost(folder?.title || '', 1, true);
    }
  }

  function setDragGhostFromFolder(folderId) {
    const folder = state.folderMap.get(folderId);
    setDragGhost(folder?.title || '', 1, true);
  }

  function setDragGhost(label, count, isFolder) {
    removeDragGhost();
    const ghost = document.createElement('div');
    ghost.className = 'drag-ghost';
    ghost.setAttribute('aria-hidden', 'true');
    ghost.innerHTML = `
      <span class="drag-ghost-icon">${isFolder ? ICONS.folder : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>'}</span>
      <span class="drag-ghost-label">${escapeHtml(label)}</span>
      ${count > 1 ? `<span class="drag-ghost-count">${count}</span>` : ''}
    `;
    document.body.appendChild(ghost);
    state.dragGhost = ghost;
    return ghost;
  }

  function removeDragGhost() {
    state.dragGhost?.remove();
    state.dragGhost = null;
  }

  function applyDragGhostImage(event) {
    if (state.dragGhost && event.dataTransfer) {
      event.dataTransfer.setDragImage(state.dragGhost, 14, 14);
    }
  }

  function canDropDraggedItemIntoFolder(folderId) {
    if (!state.draggedItem) {
      return false;
    }

    if (state.draggedItem.type === 'bookmark' || state.draggedItem.type === 'bookmark-group') {
      return true;
    }

    if (state.draggedItem.id === folderId) {
      return false;
    }

    return !isFolderDescendant(state.draggedItem.id, folderId);
  }

  function isBookmarkCardDropAllowed(targetId) {
    const dragged = state.draggedItem;
    if (!dragged) {
      return false;
    }
    if (dragged.type === 'bookmark') {
      return dragged.id !== targetId;
    }
    if (dragged.type === 'bookmark-group') {
      return !dragged.ids.includes(targetId);
    }
    if (dragged.type === 'folder') {
      const target = state.bookmarkMap.get(targetId);
      return !!target && !isFolderDescendant(dragged.id, target.parentId);
    }
    return false;
  }

  function isFolderDescendant(folderId, possibleDescendantId) {
    let currentId = possibleDescendantId;
    while (currentId) {
      if (currentId === folderId) {
        return true;
      }
      const currentFolder = state.folderMap.get(currentId);
      currentId = currentFolder?.parentId || currentFolder?.parentFolderId || null;
    }
    return false;
  }

  function getFolderInsertIndex(folderId) {
    const folder = state.folderMap.get(folderId);
    return Array.isArray(folder?.children) ? folder.children.length : 0;
  }

  async function moveBookmarkIdsToFolder(ids, folderId, message) {
    const previousState = ids.map((id) => {
      const bookmark = state.bookmarkMap.get(id);
      return {
        id,
        parentId: bookmark.parentId,
        index: bookmark.index
      };
    });

    let insertIndex = getFolderInsertIndex(folderId);
    for (const id of ids) {
      await new Promise((resolve, reject) => {
        chrome.bookmarks.move(id, { parentId: folderId, index: insertIndex }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
      insertIndex += 1;
    }

    state.undoAction = {
      type: 'move',
      payload: previousState,
      message
    };
    clearDragState();
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(message, 'warning');
  }

  async function moveBookmarkIdsBesideTarget(ids, targetId, insertAfter, message) {
    const target = state.bookmarkMap.get(targetId);
    if (!target) {
      return;
    }

    const getMovedNode = (id) => state.bookmarkMap.get(id) || state.folderMap.get(id);

    const previousState = ids.map((id) => {
      const node = getMovedNode(id);
      return node ? {
        id,
        parentId: node.parentId,
        index: node.index
      } : null;
    }).filter(Boolean);
    if (previousState.length === 0) {
      return;
    }

    const shiftCount = ids.reduce((count, id) => {
      const node = getMovedNode(id);
      return node && node.parentId === target.parentId && node.index < target.index ? count + 1 : count;
    }, 0);

    let insertIndex = Math.max(0, target.index - shiftCount + (insertAfter ? 1 : 0));
    for (const id of ids) {
      await new Promise((resolve, reject) => {
        chrome.bookmarks.move(id, { parentId: target.parentId, index: insertIndex }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
      insertIndex += 1;
    }

    state.undoAction = {
      type: 'move',
      payload: previousState,
      message
    };
    clearDragState();
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(message, 'warning');
  }

  async function moveDraggedItemToFolder(folderId) {
    if (!state.draggedItem || !canDropDraggedItemIntoFolder(folderId)) {
      return;
    }

    if (state.draggedItem.type === 'bookmark-group') {
      await moveBookmarkIdsToFolder(
        state.draggedItem.ids,
        folderId,
        t('manage.movedCount', { n: state.draggedItem.ids.length })
      );
      return;
    }

    if (state.draggedItem.type === 'bookmark') {
      const bookmark = state.bookmarkMap.get(state.draggedItem.id);
      if (!bookmark) {
        return;
      }

      await moveBookmarkIdsToFolder([bookmark.id], folderId, t('manage.movedTitle', { t: bookmark.title }));
      return;
    }

    const folder = state.folderMap.get(state.draggedItem.id);
    if (!folder) {
      return;
    }

    const previousState = [{
      id: folder.id,
      parentId: folder.parentId,
      index: folder.index
    }];
    const insertIndex = getFolderInsertIndex(folderId);

    await new Promise((resolve, reject) => {
      chrome.bookmarks.move(folder.id, { parentId: folderId, index: insertIndex }, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });

    state.undoAction = {
      type: 'move',
      payload: previousState,
      message: t('manage.movedFolder', { t: folder.title })
    };
    clearDragState();
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(t('manage.movedFolder', { t: folder.title }), 'warning');
  }

  async function moveDraggedItemBesideBookmark(targetId, insertAfter) {
    if (!state.draggedItem) {
      return;
    }

    if (state.draggedItem.type === 'bookmark-group') {
      if (state.draggedItem.ids.includes(targetId)) {
        return;
      }
      await moveBookmarkIdsBesideTarget(
        state.draggedItem.ids,
        targetId,
        insertAfter,
        t('manage.reorderedCount', { n: state.draggedItem.ids.length })
      );
      return;
    }

    if (state.draggedItem.type === 'bookmark') {
      if (state.draggedItem.id === targetId) {
        return;
      }
      const dragged = state.bookmarkMap.get(state.draggedItem.id);
      if (!dragged) {
        return;
      }
      await moveBookmarkIdsBesideTarget(
        [dragged.id],
        targetId,
        insertAfter,
        t('manage.reorderedTitle', { t: dragged.title })
      );
      return;
    }

    if (state.draggedItem.type === 'folder') {
      const folder = state.folderMap.get(state.draggedItem.id);
      if (!folder) {
        return;
      }
      await moveBookmarkIdsBesideTarget(
        [folder.id],
        targetId,
        insertAfter,
        t('manage.movedFolder', { t: folder.title })
      );
    }
  }

  async function removeBookmarksByIds(ids, recordUndo) {
    const snapshot = recordUndo
      ? ids.map((id) => {
          const bookmark = state.bookmarkMap.get(id);
          return bookmark ? {
            id: bookmark.id,
            parentId: bookmark.parentId,
            index: bookmark.index,
            title: bookmark.title,
            url: bookmark.url
          } : null;
        }).filter(Boolean)
      : [];

    for (const id of ids) {
      await new Promise((resolve, reject) => {
        chrome.bookmarks.remove(id, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
      delete state.invalidLinksMap[id];
      state.selectedManageIds.delete(id);
      state.selectedScanIds.delete(id);
    }

    if (recordUndo && snapshot.length > 0) {
      state.undoAction = {
        type: 'delete',
        payload: snapshot,
        message: t('manage.bookmarksDeleted', { n: snapshot.length })
      };
    }
  }

  async function removeFoldersByIds(ids) {
    for (const id of ids) {
      await new Promise((resolve, reject) => {
        chrome.bookmarks.removeTree(id, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
      state.selectedEmptyFolderIds.delete(id);
    }
    await loadBookmarks();
    await loadStoredScanResults();
  }

  function startInlineRename(type, id, currentTitle) {
    state.editingNode = {
      type,
      id,
      value: currentTitle
    };
    rerenderManageEntity(type, id);
  }

  function cancelInlineRename() {
    if (!state.editingNode) {
      return;
    }
    const { type, id } = state.editingNode;
    state.editingNode = null;
    rerenderManageEntity(type, id);
  }

  async function saveInlineRename() {
    const editingNode = state.editingNode;
    if (!editingNode) {
      return;
    }

    const trimmedTitle = editingNode.value.trim();
    if (!trimmedTitle) {
      showToast(t('manage.nameRequired'), 'warning');
      return;
    }

    const currentNode = editingNode.type === 'bookmark'
      ? state.bookmarkMap.get(editingNode.id)
      : state.folderMap.get(editingNode.id);
    if (!currentNode) {
      state.editingNode = null;
      rerenderManageEntity(editingNode.type, editingNode.id);
      return;
    }

    if (trimmedTitle === currentNode.title) {
      cancelInlineRename();
      return;
    }

    await new Promise((resolve, reject) => {
      chrome.bookmarks.update(editingNode.id, { title: trimmedTitle }, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });

    state.editingNode = null;
    await loadBookmarks();
    await loadStoredScanResults({ renderManage: false });
    rerenderManageEntity(editingNode.type, editingNode.id);
    showToast(editingNode.type === 'bookmark' ? t('manage.bookmarkRenamed') : t('manage.folderRenamed'), 'success');
  }

  async function createFolderUnder(parentId) {
    const parentFolder = state.folderMap.get(parentId);
    if (!parentFolder) {
      showToast(t('manage.folderNotFound'), 'warning');
      return;
    }

    const insertIndex = Array.isArray(parentFolder.children) ? parentFolder.children.length : 0;
    const createdFolder = await new Promise((resolve, reject) => {
      chrome.bookmarks.create({
        parentId,
        index: insertIndex,
        title: t('manage.newFolderDefault')
      }, (node) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(node);
        }
      });
    });

    state.editingNode = {
      type: 'folder',
      id: createdFolder.id,
      value: createdFolder.title || t('manage.newFolderDefault')
    };
    state.expandedFolderIds.add(parentId);
    state.expandedFolderIds.add(createdFolder.id);
    await loadBookmarks();
    await loadStoredScanResults({ renderManage: false });
    rerenderManageEntity('folder', parentId);
    showToast(t('manage.folderCreated'), 'success');
  }

  function focusInlineEditor() {
    const input = ui.bookmarkTree.querySelector('.rename-input');
    if (!input) {
      return;
    }
    requestAnimationFrame(() => {
      input.focus();
      input.select();
    });
  }

  async function deleteEmptyFolderFromManage(id) {
    const folder = state.emptyFolders.find((item) => item.id === id);
    if (!folder) {
      showToast(t('manage.onlyEmptyFolderDeletable'), 'warning');
      return;
    }

    if (!confirm(t('manage.confirmDeleteEmptyFolder', { t: folder.title }))) {
      return;
    }

    await removeFoldersByIds([id]);
    showToast(t('manage.emptyFolderDeletedToast'), 'error');
  }

  function toggleSelectAllEmptyFolders() {
    if (state.emptyFolders.length === 0) {
      showToast(t('manage.noEmptyFolders'), 'warning');
      return;
    }

    const allSelected = state.emptyFolders.every((folder) => state.selectedEmptyFolderIds.has(folder.id));
    state.emptyFolders.forEach((folder) => {
      if (allSelected) {
        state.selectedEmptyFolderIds.delete(folder.id);
      } else {
        state.selectedEmptyFolderIds.add(folder.id);
      }
    });
    renderScanResults();
  }

  async function deleteSelectedEmptyFolders() {
    const ids = Array.from(state.selectedEmptyFolderIds);
    if (ids.length === 0) {
      showToast(t('manage.selectEmptyFolderFirst'), 'warning');
      return;
    }

    if (!confirm(t('manage.confirmDeleteEmptyFolders', { n: ids.length }))) {
      return;
    }

    await removeFoldersByIds(ids);
    renderScanResults();
    showToast(t('manage.emptyFoldersDeleted', { n: ids.length }), 'error');
  }

  async function undoLastAction() {
    if (!state.undoAction) {
      return;
    }

    const action = state.undoAction;
    state.undoAction = null;

    if (action.type === 'delete') {
      for (const bookmark of action.payload) {
        await new Promise((resolve, reject) => {
          chrome.bookmarks.create({
            parentId: bookmark.parentId,
            index: bookmark.index,
            title: bookmark.title,
            url: bookmark.url
          }, () => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve();
            }
          });
        });
      }
      showToast(t('manage.undoDeleteDone'), 'success');
    }

    if (action.type === 'move') {
      for (const bookmark of action.payload) {
        await new Promise((resolve, reject) => {
          chrome.bookmarks.move(bookmark.id, { parentId: bookmark.parentId, index: bookmark.index }, () => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve();
            }
          });
        });
      }
      showToast(t('manage.undoMoveDone'), 'success');
    }

    await loadBookmarks();
    await loadStoredScanResults();
  }

  function renderUndoBanner() {
    if (!state.undoAction) {
      ui.undoBanner.classList.add('hidden');
      ui.undoBanner.classList.remove('is-move', 'is-delete', 'is-create');
      return;
    }

    ui.undoMessage.textContent = state.undoAction.message;
    ui.undoBanner.classList.remove('is-move', 'is-delete', 'is-create');
    if (state.undoAction.type === 'move') {
      ui.undoBanner.classList.add('is-move');
    } else if (state.undoAction.type === 'delete') {
      ui.undoBanner.classList.add('is-delete');
    } else if (state.undoAction.type === 'create') {
      ui.undoBanner.classList.add('is-create');
    }
    ui.undoBanner.classList.remove('hidden');
  }

  function toggleExpandFolders() {
    state.isExpandedByDefault = !state.isExpandedByDefault;
    ui.toggleExpandText.textContent = state.isExpandedByDefault ? t('manage.collapseAll') : t('manage.expandAll');
    ui.toggleExpandIcon.innerHTML = state.isExpandedByDefault ? ICONS.folderOpen : ICONS.folder;
    state.expandedFolderIds.clear();
    if (state.isExpandedByDefault) {
      state.folderMap.forEach((_, id) => state.expandedFolderIds.add(id));
    }
    renderManageTree();
  }

  function showToast(message, type = 'info', duration = 2600) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️'}</span>
      <span class="toast-content">${escapeHtml(message)}</span>
      <button class="toast-close" type="button">&times;</button>
    `;

    ui.toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    const remove = () => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 220);
    };

    toast.querySelector('.toast-close').addEventListener('click', remove);
    if (duration > 0) {
      setTimeout(remove, duration);
    }
  }

  function isScannable(url) {
    return Boolean(url && !url.startsWith('chrome://') && !url.startsWith('javascript:') && !url.startsWith('data:'));
  }

  function isRootFolder(title) {
    return ['书签栏', '其他书签', '移动设备书签', 'Bookmarks Bar', 'Other Bookmarks', 'Mobile Bookmarks'].includes(title);
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
    const size = image.classList.contains('bookmark-favicon-lg') ? 20 : 16;
    image.src = getFaviconUrl(url, size);
    image.addEventListener('error', () => {
      image.src = createFaviconFallback(title);
    }, { once: true });
  }

  function derivePortraitTags(topDomains) {
    const TAG_RULES = [
      { label: t('tags.techLearning'), match: ['github.com', 'stackoverflow.com', 'developer.mozilla.org', 'juejin.cn', 'csdn.net', 'npmjs.com', 'gitlab.com'] },
      { label: t('tags.designInspiration'), match: ['dribbble.com', 'behance.net', 'figma.com', 'pinterest.com'] },
      { label: t('tags.videoContent'), match: ['youtube.com', 'bilibili.com', 'vimeo.com'] },
      { label: t('tags.newsReading'), match: ['medium.com', 'substack.com', 'theverge.com', '36kr.com', 'huxiu.com', 'sspai.com'] },
      { label: t('tags.aiTools'), match: ['openai.com', 'anthropic.com', 'huggingface.co', 'replicate.com', 'poe.com'] },
      { label: t('tags.shoppingDecisions'), match: ['amazon.com', 'taobao.com', 'jd.com', 'tmall.com'] },
      { label: t('tags.socialObservation'), match: ['x.com', 'twitter.com', 'linkedin.com', 'reddit.com', 'weibo.com', 'zhihu.com'] }
    ];

    const found = [];
    TAG_RULES.forEach((rule) => {
      // 后缀匹配而非子串匹配：netflix.com / xbox.com 都包含 "x.com"，子串会误打社交标签
      if (topDomains.some((item) => rule.match.some((domain) => matchesDomainSuffix(item.domain, domain)))) {
        found.push(rule.label);
      }
    });
    return found.slice(0, 5);
  }

  function matchesDomainSuffix(domain, ruleDomain) {
    return domain === ruleDomain || domain.endsWith(`.${ruleDomain}`);
  }

  // 中文标题没有分词，纯 token 统计对中文几乎无效（整句变成一个 token、重复率趋近 0），
  // 所以用一份小型主题词典按词匹配；拉丁词沿用 tokenizeTitle 作为补充。只作为轻量参考。
  const PORTRAIT_KEYWORD_DICT = [
    { zh: '前端', en: 'Frontend', terms: ['前端', 'frontend', 'css', 'html', 'javascript', 'typescript', 'vue', 'react'] },
    { zh: '后端', en: 'Backend', terms: ['后端', 'backend', 'api', '数据库', 'database', 'python', 'java', 'golang', 'rust'] },
    { zh: 'AI', en: 'AI', terms: ['ai', '人工智能', '机器学习', '深度学习', 'gpt', 'llm', 'claude', 'prompt'] },
    { zh: '设计', en: 'Design', terms: ['设计', 'design', 'figma', 'ui', 'ux', '配色', '字体', 'icon', '灵感'] },
    { zh: '产品', en: 'Product', terms: ['产品', 'product', '需求', '用户体验', '原型'] },
    { zh: '效率工具', en: 'Productivity', terms: ['工具', 'tool', '效率', '插件', 'extension', '自动化'] },
    { zh: '教程文档', en: 'Tutorials', terms: ['教程', 'tutorial', '入门', '指南', 'guide', '课程', 'course', '文档', 'docs', '手册'] },
    { zh: '博客阅读', en: 'Reading', terms: ['博客', 'blog', '周刊', 'newsletter', 'weekly', '文章', 'article', '资讯'] },
    { zh: '视频播客', en: 'Video', terms: ['视频', 'video', 'youtube', 'bilibili', 'b站', '播客', 'podcast'] },
    { zh: '面试求职', en: 'Career', terms: ['面试', 'interview', '简历', 'resume', '求职', '招聘', 'career'] },
    { zh: '理财投资', en: 'Finance', terms: ['理财', '投资', '股票', '基金', 'finance', 'stock', '保险'] },
    { zh: '生活兴趣', en: 'Lifestyle', terms: ['旅行', 'travel', '菜谱', 'recipe', '健身', 'fitness', '摄影', '电影', '音乐', '游戏'] },
    { zh: '学术研究', en: 'Research', terms: ['论文', 'paper', 'arxiv', '学术', '文献', 'research'] }
  ];

  const keywordRegexCache = new Map();

  function extractPortraitKeywords(bookmarks) {
    const isEn = state.locale === 'en-US';
    const dictCounts = new Map();
    const tokenCounts = new Map();

    bookmarks.forEach((bookmark) => {
      const lowerTitle = String(bookmark.title || '').toLowerCase();
      PORTRAIT_KEYWORD_DICT.forEach((entry) => {
        if (keywordMatchesTitle(lowerTitle, entry.terms)) {
          dictCounts.set(entry, (dictCounts.get(entry) || 0) + 1);
        }
      });
      tokenizeTitle(bookmark.title).forEach((word) => {
        tokenCounts.set(word, (tokenCounts.get(word) || 0) + 1);
      });
    });

    const merged = new Map();
    dictCounts.forEach((count, entry) => {
      merged.set(isEn ? entry.en : entry.zh, count);
    });
    tokenCounts.forEach((count, word) => {
      merged.set(word, (merged.get(word) || 0) + count);
    });

    return Array.from(merged.entries())
      .sort((left, right) => right[1] - left[1])
      .slice(0, 8)
      .map(([keyword, count]) => ({ keyword, count }));
  }

  function keywordMatchesTitle(lowerTitle, terms) {
    return terms.some((term) => {
      if (/[\u4e00-\u9fff]/.test(term)) {
        return lowerTitle.includes(term);
      }
      // 拉丁词用词边界匹配，避免 "js" 这类短词误命中 "json" 的子串
      let pattern = keywordRegexCache.get(term);
      if (!pattern) {
        pattern = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
        keywordRegexCache.set(term, pattern);
      }
      return pattern.test(lowerTitle);
    });
  }

  function parseUrlSafe(url) {
    try {
      return new URL(url);
    } catch (error) {
      return null;
    }
  }

  function normalizeParsedUrl(parsed) {
    parsed.hash = '';
    return parsed.toString().replace(/\/$/, '');
  }

  function normalizeUrlValue(url) {
    const parsed = parseUrlSafe(url);
    return parsed ? normalizeParsedUrl(parsed) : url;
  }

  function collectDuplicateBookmarkIds() {
    const counts = new Map();
    const idsByUrl = new Map();

    state.bookmarkMap.forEach((bookmark) => {
      const normalized = normalizeUrlValue(bookmark.url);
      counts.set(normalized, (counts.get(normalized) || 0) + 1);
      if (!idsByUrl.has(normalized)) {
        idsByUrl.set(normalized, []);
      }
      idsByUrl.get(normalized).push(bookmark.id);
    });

    const duplicateIds = new Set();
    idsByUrl.forEach((ids, normalized) => {
      if ((counts.get(normalized) || 0) > 1) {
        ids.forEach((id) => duplicateIds.add(id));
      }
    });
    return duplicateIds;
  }

  function tokenizeTitle(title) {
    return String(title)
      .toLowerCase()
      .split(/[\s\-_/|]+/)
      .map((part) => part.replace(/[^\p{L}\p{N}]/gu, ''))
      .filter((part) => part.length >= 2 && !['http', 'https', 'www', 'com', 'net', 'the', 'and', 'for', 'with', 'bookmark'].includes(part));
  }

  function formatShortDate(date) {
    return new Intl.DateTimeFormat(state.locale || 'zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
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
