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
    feedbackDialog: document.getElementById('feedbackDialog'),
    closeFeedbackBtn: document.getElementById('closeFeedbackBtn'),
    cancelFeedbackBtn: document.getElementById('cancelFeedbackBtn'),
    feedbackSubmitBtn: document.getElementById('feedbackSubmitBtn'),
    feedbackCopyEmailBtn: document.getElementById('feedbackCopyEmailBtn'),
    feedbackContentInput: document.getElementById('feedbackContentInput'),
    feedbackContactInput: document.getElementById('feedbackContactInput'),
    timeoutValue: document.getElementById('timeoutValue'),
    timeoutDisplay: document.getElementById('timeoutDisplay'),
    totalCount: document.getElementById('totalCount'),
    invalidCount: document.getElementById('invalidCount'),
    invalidCountStat: document.getElementById('invalidCountStat'),
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
    confirmDialog: document.getElementById('confirmDialog'),
    confirmDialogTitle: document.getElementById('confirmDialogTitle'),
    confirmDialogMessage: document.getElementById('confirmDialogMessage'),
    confirmDialogOkBtn: document.getElementById('confirmDialogOkBtn'),
    confirmDialogCancelBtn: document.getElementById('confirmDialogCancelBtn'),
    confirmDialogCloseBtn: document.getElementById('confirmDialogCloseBtn'),
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
    openFeedbackDialogBtn: document.getElementById('openFeedbackDialogBtn'),
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
    AI_ENDPOINT_DEFAULT: 'https://api.dogclaw.top/ai/api/bookmarks/plan',
    FEEDBACK_ENDPOINT_DEFAULT: 'https://api.dogclaw.top/ai/api/feedback',
    FEEDBACK_TIMEOUT_MS: 15000
  };

  const LEGACY_AI_ENDPOINTS = new Set([
    '',
    'http://127.0.0.1:8000/api/bookmarks/plan'
  ]);

  const ICONS = {
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>',
    folderOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
    alertTriangle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 20h16a2 2 0 0 0 1.73-2Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    xCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
    infoCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>'
  };

  const TOAST_ICONS = {
    success: () => ICONS.checkCircle,
    warning: () => ICONS.alertTriangle,
    error: () => ICONS.xCircle,
    info: () => ICONS.infoCircle
  };

  function t(key, params) {
    return window.BK_I18N.t(key, params);
  }

  // 共享工具：来自 utils.js（popup 页同源，避免两份实现漂移）
  const {
    escapeHtml, getDomain, isScannable, sendScanMessage
  } = window.BK_UTILS;

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
    selectionAnchorId: null,
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
    pendingExpandedFolderIds: null,
    scanTime: null,
    portraitStats: null,
    // 画像统计的脏标记：书签变更后走轻量路径，等真正打开洞察页才重算
    portraitDirty: false,
    // 展开全部分帧渲染进行中：renderManageNode 只出骨架，子节点排队按帧填充
    deferFolderChildren: false,
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
    undoStack: [],
  };

  init();

  async function init() {
    setupEventListeners();
    await loadSettings();
    await restoreUiState();
    applyTranslations();
    applyRestoredManageFilter();
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

    ui.openFeedbackDialogBtn?.addEventListener('click', showFeedbackDialog);
    ui.closeFeedbackBtn?.addEventListener('click', hideFeedbackDialog);
    ui.cancelFeedbackBtn?.addEventListener('click', hideFeedbackDialog);
    ui.feedbackSubmitBtn?.addEventListener('click', submitFeedback);
    ui.feedbackCopyEmailBtn?.addEventListener('click', copyFeedbackEmail);
    ui.feedbackDialog?.addEventListener('click', (event) => {
      if (event.target === ui.feedbackDialog) {
        hideFeedbackDialog();
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
    setupExternalBookmarkSync();
    // 页面可见且已有最终结果时，清除扩展图标角标
    document.addEventListener('visibilitychange', dismissBadgeIfFinalSeen);
    ui.refreshScanStatsBtn.addEventListener('click', refreshScanStats);
    ui.selectAllInvalidBtn.addEventListener('click', toggleSelectAllInvalid);
    // hero 失效数一键直达：全选失效项并滚动到结果列表
    ui.invalidCountStat?.addEventListener('click', () => {
      const invalidIds = Object.keys(state.invalidLinksMap);
      if (invalidIds.length === 0) {
        return;
      }
      invalidIds.forEach((id) => state.selectedScanIds.add(id));
      renderScanResults();
      ui.invalidLinksList?.closest('.result-column')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
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
    let moveSearchDebounceTimer = null;
    ui.moveFolderSearchInput.addEventListener('input', () => {
      clearTimeout(moveSearchDebounceTimer);
      moveSearchDebounceTimer = setTimeout(() => {
        moveFolderActiveIndex = 0;
        renderMoveFolderOptions();
      }, 200);
    });
    ui.moveFolderSearchInput.addEventListener('keydown', handleMoveFolderSearchKeydown);
    ui.confirmDialogOkBtn.addEventListener('click', () => settleConfirmDialog(true));
    ui.confirmDialogCancelBtn.addEventListener('click', () => settleConfirmDialog(false));
    ui.confirmDialogCloseBtn.addEventListener('click', () => settleConfirmDialog(false));
    ui.confirmDialog.addEventListener('click', (event) => {
      if (event.target === ui.confirmDialog) {
        settleConfirmDialog(false);
      }
    });
    ui.confirmDialog.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        settleConfirmDialog(false);
        return;
      }
      if (event.key === 'Tab') {
        // 对话框内只有三个可聚焦控件，Tab 循环困住焦点
        const focusables = [ui.confirmDialogOkBtn, ui.confirmDialogCancelBtn, ui.confirmDialogCloseBtn];
        const index = focusables.indexOf(document.activeElement);
        event.preventDefault();
        const next = event.shiftKey
          ? focusables[(index - 1 + focusables.length) % focusables.length]
          : focusables[(index + 1) % focusables.length];
        next.focus();
      }
    });
    ui.bookmarkTree.addEventListener('keydown', handleTreeKeydown);
    setupTreeDelegatedEvents();
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || isConfirmDialogOpen()) {
        return;
      }
      if (!ui.settingsDialog.classList.contains('hidden')) {
        hideSettingsDialog();
        return;
      }
      if (ui.feedbackDialog && !ui.feedbackDialog.classList.contains('hidden')) {
        hideFeedbackDialog();
        return;
      }
      if (!ui.moveFolderDialog.classList.contains('hidden')) {
        hideMoveFolderDialog();
      }
    });
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
    let resizeScheduled = false;
    window.addEventListener('resize', () => {
      if (!state.portraitChart || resizeScheduled) {
        return;
      }
      // 拖动窗口时 resize 事件连发，按帧合并 chart 重排
      resizeScheduled = true;
      requestAnimationFrame(() => {
        resizeScheduled = false;
        if (state.portraitChart) {
          state.portraitChart.resize();
        }
      });
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
      if (state.portraitDirty) {
        // 数据已变但尚未重算：丢弃缓存，等打开洞察页时按新语言全量计算
        state.portraitStats = null;
      } else {
        assignPortraitConclusion(state.portraitStats);
        state.portraitStats.tags = derivePortraitTags(state.portraitStats.topDomains);
        state.portraitStats.topKeywords = extractPortraitKeywords(Array.from(state.bookmarkMap.values()));
      }
    }
    if (state.activeTab === 'portrait') {
      ensurePortraitStats();
      renderPortrait();
    }
    // 管理树/提示横幅/撤销横幅/扫描结果里的按钮与空态文案也是动态渲染，切换语言后需重建
    renderManageTree();
    renderScanResults();
    await new Promise((resolve) => chrome.storage.local.set({ locale }, resolve));
  }

  // ---- 对话框关闭后焦点归还
  let dialogReturnFocus = null;

  function rememberDialogFocus() {
    dialogReturnFocus = document.activeElement;
  }

  function restoreDialogFocus() {
    if (dialogReturnFocus && typeof dialogReturnFocus.focus === 'function') {
      dialogReturnFocus.focus();
    }
    dialogReturnFocus = null;
  }

  // ---- 外部书签变更同步（云同步 / 其他标签页 / Chrome 自带管理器）：
  // 防抖后走轻量 reindex，避免 UI 长期停留在过期数据上
  let externalSyncDebounceTimer = null;

  function scheduleExternalBookmarkRefresh() {
    clearTimeout(externalSyncDebounceTimer);
    externalSyncDebounceTimer = setTimeout(() => {
      if (state.editingNode) {
        // 行内重命名进行中不打断，稍后再试
        scheduleExternalBookmarkRefresh();
        return;
      }
      void (async () => {
        await loadBookmarks();
        await loadStoredScanResults();
      })();
    }, 1000);
  }

  function setupExternalBookmarkSync() {
    ['onCreated', 'onRemoved', 'onChanged', 'onMoved'].forEach((eventName) => {
      chrome.bookmarks[eventName]?.addListener?.(scheduleExternalBookmarkRefresh);
    });
  }

  function showSettingsDialog() {
    rememberDialogFocus();
    ui.settingsDialog.classList.remove('hidden');
    requestAnimationFrame(() => ui.settingsDialog.classList.add('show'));
  }

  // 隐藏延迟对齐 tokens.css 的 --duration-normal（overlay 透明过渡时长）
  const DIALOG_HIDE_DELAY_MS = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--duration-normal')) || 250;

  function hideSettingsDialog() {
    ui.settingsDialog.classList.remove('show');
    setTimeout(() => ui.settingsDialog.classList.add('hidden'), DIALOG_HIDE_DELAY_MS);
    restoreDialogFocus();
  }

  // ---- 自定义确认对话框：显隐/焦点归还逻辑在 utils.js 的 createConfirmController
  const confirmController = window.BK_UTILS.createConfirmController({
    dialog: ui.confirmDialog,
    titleEl: ui.confirmDialogTitle,
    messageEl: ui.confirmDialogMessage,
    okBtn: ui.confirmDialogOkBtn,
    t
  });
  const showConfirmDialog = confirmController.show;
  const settleConfirmDialog = confirmController.settle;
  const isConfirmDialogOpen = confirmController.isOpen;

  // ---- 反馈：弹窗表单提交到后端，复制邮箱保留为提交失败时的兜底
  const FEEDBACK_EMAIL = 'a1330661071@gmail.com';

  async function copyFeedbackEmail() {
    try {
      await navigator.clipboard.writeText(FEEDBACK_EMAIL);
      showToast(t('toast.feedbackCopied'), 'success');
    } catch (error) {
      showToast(t('toast.feedbackCopyFailed'), 'warning');
    }
  }

  function showFeedbackDialog() {
    rememberDialogFocus();
    ui.feedbackDialog.classList.remove('hidden');
    requestAnimationFrame(() => ui.feedbackDialog.classList.add('show'));
    ui.feedbackContentInput?.focus();
  }

  function hideFeedbackDialog() {
    ui.feedbackDialog.classList.remove('show');
    setTimeout(() => ui.feedbackDialog.classList.add('hidden'), DIALOG_HIDE_DELAY_MS);
    restoreDialogFocus();
  }

  function getFeedbackEndpoint() {
    // 自定义 AI 端点且以 /bookmarks/plan 结尾时同源派生；否则回退默认地址
    const planEndpoint = getAiEndpoint();
    if (planEndpoint && /\/bookmarks\/plan$/.test(planEndpoint)) {
      return planEndpoint.replace(/\/bookmarks\/plan$/, '/feedback');
    }
    return CONFIG.FEEDBACK_ENDPOINT_DEFAULT;
  }

  async function submitFeedback() {
    if (ui.feedbackSubmitBtn.disabled) {
      return;
    }
    const content = ui.feedbackContentInput.value.trim();
    if (!content) {
      showToast(t('toast.feedbackContentRequired'), 'warning');
      ui.feedbackContentInput.focus();
      return;
    }
    const contact = ui.feedbackContactInput.value.trim();
    if (contact && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      showToast(t('toast.feedbackContactInvalid'), 'warning');
      ui.feedbackContactInput.focus();
      return;
    }

    ui.feedbackSubmitBtn.disabled = true;
    ui.feedbackSubmitBtn.textContent = t('feedback.submitting');
    try {
      const response = await fetchAiWithTimeout(getFeedbackEndpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId: state.aiClientId,
          content,
          contact: contact || null,
          locale: window.BK_I18N.getLocale(),
          appVersion: chrome.runtime?.getManifest?.()?.version || null
        })
      }, CONFIG.FEEDBACK_TIMEOUT_MS);

      if (!response.ok) {
        let detail = null;
        try {
          detail = await response.json();
        } catch (error) {}
        if (response.status === 429 && detail?.detail?.code === 'FEEDBACK_LIMIT_EXCEEDED') {
          showToast(t('toast.feedbackLimit'), 'warning');
          return;
        }
        throw new Error(detail?.detail?.message || `HTTP ${response.status}`);
      }

      ui.feedbackContentInput.value = '';
      ui.feedbackContactInput.value = '';
      hideFeedbackDialog();
      showToast(t('toast.feedbackSent'), 'success');
    } catch (error) {
      showToast(t('toast.feedbackFailed'), 'error');
    } finally {
      ui.feedbackSubmitBtn.disabled = false;
      ui.feedbackSubmitBtn.textContent = t('feedback.submit');
    }
  }

  // ---- UI 状态持久化：activeTab / 展开文件夹 / 管理筛选（写入即存，启动恢复）
  const UI_STATE_KEY = 'manageUiState';

  function persistUiState() {
    const record = {
      activeTab: state.activeTab,
      manageFilter: state.manageFilter,
      expandedFolderIds: Array.from(state.expandedFolderIds)
    };
    chrome.storage.local.set({ [UI_STATE_KEY]: record }, () => void chrome.runtime.lastError);
  }

  async function restoreUiState() {
    const stored = await new Promise((resolve) => chrome.storage.local.get([UI_STATE_KEY], resolve));
    const record = stored[UI_STATE_KEY];
    if (!record || typeof record !== 'object') {
      return;
    }
    if (['scan', 'portrait', 'manage', 'ai-manage'].includes(record.activeTab)) {
      state.activeTab = record.activeTab;
    }
    // URL 深链优先：popup「打开管理器」等入口可带 #tab=scan 直达目标页
    const hashTab = new URLSearchParams(window.location.hash.replace(/^#/, '')).get('tab');
    if (['scan', 'portrait', 'manage', 'ai-manage'].includes(hashTab)) {
      state.activeTab = hashTab;
    }
    if (typeof record.manageFilter === 'string') {
      state.manageFilter = record.manageFilter;
    }
    if (Array.isArray(record.expandedFolderIds)) {
      state.pendingExpandedFolderIds = record.expandedFolderIds.filter((id) => typeof id === 'string');
    }
  }

  function switchTab(tab) {
    state.activeTab = tab;
    renderTabs();
    persistUiState();
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

    if (isPortrait) {
      ensurePortraitStats();
      renderPortrait();
      requestAnimationFrame(() => {
        if (state.portraitChart) {
          state.portraitChart.resize();
        }
      });
    }

    if (isAiManage) {
      renderAiPlan();
      refreshAiUsageThrottled();
    }
  }

  // 用量接口有配额含义，切换 tab 反复进出时不该每次都打一遍
  let aiUsageLastFetchAt = 0;
  const AI_USAGE_THROTTLE_MS = 60 * 1000;

  function refreshAiUsageThrottled() {
    if (Date.now() - aiUsageLastFetchAt < AI_USAGE_THROTTLE_MS) {
      return;
    }
    aiUsageLastFetchAt = Date.now();
    void refreshAiUsage();
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
    // 画像统计（含逐书签关键词提取）开销大，标记脏位延迟到洞察页真正打开时才算
    state.portraitStats = null;
    state.portraitDirty = true;
    updateOverviewStats();
    // 洞察页隐藏时只算不渲染：否则 ECharts 会在 display:none 容器上初始化成 0×0，
    // 且图表库会在用户从未打开洞察页的情况下被提前加载
    if (state.activeTab === 'portrait') {
      ensurePortraitStats();
      renderPortrait();
    }
    renderAiPlan();
  }

  // 画像统计懒计算：脏标记置位（或首次）时重算，否则复用缓存
  function ensurePortraitStats() {
    if (state.portraitStats && !state.portraitDirty) {
      return state.portraitStats;
    }
    state.portraitStats = calculatePortraitStats();
    state.portraitDirty = false;
    return state.portraitStats;
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
      // 有持久化记录时恢复；否则默认展开一层
      if (Array.isArray(state.pendingExpandedFolderIds) && state.pendingExpandedFolderIds.length > 0) {
        state.pendingExpandedFolderIds.forEach((id) => {
          if (validFolderIds.has(id)) {
            state.expandedFolderIds.add(id);
          }
        });
      } else {
        validFolderIds.forEach((id) => {
          const folder = state.folderMap.get(id);
          if (folder && folder.path.length === 1) {
            state.expandedFolderIds.add(id);
          }
        });
      }
      state.pendingExpandedFolderIds = null;
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
          parentFolderId,
          searchText: `${title} ${nextPath.join(' ')}`.toLowerCase()
        });

        if (parentFolderId === null) {
          // 根层级（书签栏/其他书签等）：不进入移动目标与空文件夹扫描
        } else {
          state.folderOptions.push({
            id: node.id,
            label: nextPath.join(' / ')
          });

          if (node.children.length === 0) {
            state.emptyFolders.push({
              id: node.id,
              title,
              path: nextPath,
              parentId: node.parentId,
              index
            });
          }
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
        stats.largestFolder = { title: folder.title, count: childBookmarks, id: folder.id };
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

  // 本页签名 (element, target)：转接到 utils.js 的 (element, start, end, duration)
  function animateNumber(element, target, duration = 400) {
    window.BK_UTILS.animateNumber(element, parseInt(element.textContent, 10) || 0, target, duration);
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

  // sendScanMessage / isScannable / getDomain / attachFavicon / escapeHtml 见顶部 BK_UTILS 解构

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
    ui.scanDuration.textContent = t('scan.durationSec', { s: 0 });
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

    renderScanList(ui.invalidLinksList, invalidBookmarks, 'bookmark', invalidBookmarks.length === 0 ? {
      label: t('scan.startScanNow'),
      onClick: () => startQuickScan()
    } : null);
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

  function renderScanList(container, items, type, emptyAction = null) {
    if (items.length === 0) {
      if (emptyAction) {
        container.innerHTML = `
          <div class="result-empty-state result-empty-state-cta">
            <div>${t('scan.noItems')}</div>
            <button class="btn btn-primary btn-sm" type="button">${escapeHtml(emptyAction.label)}</button>
          </div>`;
        container.querySelector('button')?.addEventListener('click', emptyAction.onClick);
      } else {
        container.innerHTML = `<div class="result-empty-state">${t('scan.noItems')}</div>`;
      }
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
        const deleteMessage = type === 'bookmark'
          ? t('scan.confirmDeleteInvalid', { n: 1 })
          : t('manage.confirmDeleteEmptyFolder', { t: item.title });
        if (!(await showConfirmDialog({
          title: t('dialog.deleteTitle'),
          message: deleteMessage,
          confirmText: t('dialog.delete'),
          danger: true
        }))) {
          return;
        }
        if (type === 'bookmark') {
          await removeBookmarksByIds([item.id], true);
          await loadBookmarks();
          await persistScanResults();
          await loadStoredScanResults();
          showToast(t('scan.invalidBookmarkDeleted'), 'success');
        } else {
          state.selectedEmptyFolderIds.delete(item.id);
          await removeFoldersByIds([item.id]);
          renderScanResults();
          showToast(t('scan.emptyFolderDeleted'), 'success');
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

    if (!(await showConfirmDialog({
      title: t('dialog.deleteTitle'),
      message: t('scan.confirmDeleteInvalid', { n: ids.length }),
      confirmText: t('dialog.delete'),
      danger: true
    }))) {
      return;
    }

    await removeBookmarksByIds(ids, true);
    await loadBookmarks();
    await persistScanResults();
    await loadStoredScanResults();
    showToast(t('scan.invalidDeleted', { n: ids.length }), 'success');
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
    cancelProgressiveFolderFill();
    state.deferFolderChildren = false;
    renderManageTreeCore();
  }

  // 展开全部专用：先同步渲染骨架（文件夹壳、不含子节点），再按帧填充子节点，
  // 万级书签下不会出现一帧内创建上万个节点的长任务
  function renderManageTreeProgressive() {
    cancelProgressiveFolderFill();
    state.deferFolderChildren = true;
    renderManageTreeCore();
  }

  function renderManageTreeCore() {
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
      // 有搜索词或筛选时给出清除入口，无匹配时用户不会被卡死
      const hasQuery = Boolean(state.searchTerm) || state.manageFilter !== 'all';
      ui.bookmarkTree.innerHTML = hasQuery
        ? `<div class="empty-tree-state">
             <div>${t('manage.noMatchingBookmarks')}</div>
             <button class="btn btn-secondary btn-sm" type="button" data-action="clear-manage-search">${t('manage.clearSearch')}</button>
           </div>`
        : `<div class="empty-tree-state">${t('manage.noBookmarks')}</div>`;
    } else {
      ui.bookmarkTree.appendChild(fragment);
    }

    if (progressiveFillQueue.length > 0) {
      scheduleProgressiveFolderFill();
    } else {
      // 筛选/搜索态下 renderManageNode 会忽略 defer 直接全量渲染，
      // 队列为空时必须复位标记，否则后续浏览态渲染会只出骨架不填充
      state.deferFolderChildren = false;
    }

    updateManageToolbar();
    renderManageTip();
    renderUndoBanner();
    updateTreeRovingTabindex();
    focusInlineEditor();
  }

  // ===== 展开全部分帧填充 =====
  const progressiveFillQueue = [];
  let progressiveFillFrame = null;
  const PROGRESSIVE_FILL_BATCH = 150;

  function cancelProgressiveFolderFill() {
    if (progressiveFillFrame) {
      clearTimeout(progressiveFillFrame);
      progressiveFillFrame = null;
    }
    progressiveFillQueue.length = 0;
  }

  function scheduleProgressiveFolderFill() {
    if (progressiveFillFrame) {
      return;
    }
    // 用 setTimeout 而非 rAF 调度：后台标签页 rAF 暂停会导致填充停滞
    progressiveFillFrame = setTimeout(drainProgressiveFolderFill, 0);
  }

  function drainProgressiveFolderFill() {
    progressiveFillFrame = null;
    let processed = 0;
    while (progressiveFillQueue.length > 0 && processed < PROGRESSIVE_FILL_BATCH) {
      const { content, folderId } = progressiveFillQueue.shift();
      processed += 1;
      fillFolderChildren(content, folderId);
    }
    if (progressiveFillQueue.length > 0) {
      progressiveFillFrame = requestAnimationFrame(drainProgressiveFolderFill);
    } else {
      state.deferFolderChildren = false;
    }
  }

  function fillFolderChildren(content, folderId) {
    if (!content || !content.isConnected || content.childElementCount > 0) {
      return;
    }
    const folder = state.folderMap.get(folderId);
    if (!folder) {
      return;
    }
    const fragment = document.createDocumentFragment();
    (folder.children || []).forEach((child) => {
      const rendered = renderManageNode(child);
      if (rendered) {
        fragment.appendChild(rendered);
      }
    });
    content.appendChild(fragment);
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

  // 批量选择专用：一趟 DOM 扫描同步所有行，工具栏摘要只算一次。
  // 逐条走 syncBookmarkSelectionUi 是 O(n²)（每条都全量扫 bookmarkMap 算摘要）
  function syncBookmarkSelectionUiBatch() {
    ui.bookmarkTree.querySelectorAll('[data-bookmark-id]').forEach((row) => {
      const selected = state.selectedManageIds.has(row.dataset.bookmarkId);
      row.classList.toggle('selected', selected);
      const checkbox = row.querySelector('.bookmark-checkbox');
      if (checkbox) {
        checkbox.checked = selected;
      }
    });
    updateManageToolbar();
  }

  // ===== 树容器事件委托：所有行级交互监听统一挂在 ui.bookmarkTree 上，
  // renderManageNode 只生成结构，不再给每个节点挂 ~13 个监听器 =====

  function getFolderPartsFromTarget(target) {
    const header = target.closest('.folder-header');
    if (!header || !ui.bookmarkTree.contains(header)) {
      return null;
    }
    const section = header.closest('.folder');
    const folderId = section?.dataset.folderId;
    if (!folderId) {
      return null;
    }
    return { header, section, content: header.nextElementSibling, folderId };
  }

  function getBookmarkArticleFromTarget(target) {
    const article = target.closest('[data-bookmark-id]');
    return article && ui.bookmarkTree.contains(article) ? article : null;
  }

  function isManageFiltering() {
    return Boolean(state.searchTerm) || state.manageFilter !== 'all';
  }

  function expandFolderElement(parts) {
    state.expandedFolderIds.add(parts.folderId);
    if (parts.content && parts.content.childElementCount === 0) {
      // 折叠时子节点未渲染（懒渲染），展开瞬间按当前数据补齐
      const folder = state.folderMap.get(parts.folderId);
      const fragment = document.createDocumentFragment();
      (folder?.children || []).forEach((child) => {
        const rendered = renderManageNode(child);
        if (rendered) {
          fragment.appendChild(rendered);
        }
      });
      parts.content.appendChild(fragment);
    }
    parts.header.classList.add('expanded');
    parts.content?.classList.add('show');
    // 入场动画只在运行时展开时播放；全量重渲染不加此标记，避免动画重播
    parts.content?.classList.add('folder-anim');
    persistUiState();
  }

  function collapseFolderElement(parts) {
    state.expandedFolderIds.delete(parts.folderId);
    parts.header.classList.remove('expanded');
    parts.content?.classList.remove('show');
    persistUiState();
  }

  function toggleFolderExpandFromElement(parts) {
    if (state.editingNode?.type === 'folder' && state.editingNode.id === parts.folderId) {
      return;
    }
    if (isManageFiltering()) {
      const nextShown = !parts.content.classList.contains('show');
      parts.header.classList.toggle('expanded', nextShown);
      parts.content.classList.toggle('show', nextShown);
      if (nextShown) {
        parts.content.classList.add('folder-anim');
      }
      return;
    }
    if (state.expandedFolderIds.has(parts.folderId)) {
      collapseFolderElement(parts);
    } else {
      expandFolderElement(parts);
    }
  }

  function getFolderDirectBookmarkIds(folderId) {
    const folder = state.folderMap.get(folderId);
    return (folder?.children || [])
      .filter((child) => !child.children && isScannable(child.url))
      .map((child) => child.id);
  }

  async function confirmAndDeleteBookmark(bookmarkId) {
    const bookmark = state.bookmarkMap.get(bookmarkId);
    if (!bookmark) {
      return;
    }
    if (!(await showConfirmDialog({
      title: t('dialog.deleteTitle'),
      message: t('manage.confirmDeleteBookmark', { t: bookmark.title }),
      confirmText: t('dialog.delete'),
      danger: true
    }))) {
      return;
    }
    await removeBookmarksByIds([bookmarkId], true);
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(t('manage.bookmarkDeleted'), 'success');
  }

  // 返回 true 表示点击已被某个行内按钮消费（不再触发行选择/文件夹折叠）
  function handleTreeButtonClick(event, button) {
    const article = button.closest('[data-bookmark-id]');
    if (article) {
      const bookmarkId = article.dataset.bookmarkId;
      if (button.classList.contains('btn-open')) {
        const bookmark = state.bookmarkMap.get(bookmarkId);
        if (bookmark?.url) {
          chrome.tabs.create({ url: bookmark.url });
        }
        return true;
      }
      if (button.classList.contains('btn-rename')) {
        const bookmark = state.bookmarkMap.get(bookmarkId);
        startInlineRename('bookmark', bookmarkId, bookmark?.title || '');
        return true;
      }
      if (button.classList.contains('btn-save')) {
        void saveInlineRename();
        return true;
      }
      if (button.classList.contains('btn-cancel')) {
        cancelInlineRename();
        return true;
      }
      if (button.classList.contains('btn-delete')) {
        void confirmAndDeleteBookmark(bookmarkId);
        return true;
      }
      return false;
    }

    const folderId = button.closest('.folder-header')?.closest('.folder')?.dataset.folderId;
    if (!folderId) {
      return false;
    }
    if (button.classList.contains('btn-create')) {
      void createFolderUnder(folderId);
      return true;
    }
    if (button.classList.contains('btn-select-folder')) {
      selectFolderBookmarks(getFolderDirectBookmarkIds(folderId), button);
      return true;
    }
    if (button.classList.contains('btn-rename')) {
      const folder = state.folderMap.get(folderId);
      startInlineRename('folder', folderId, folder?.title || t('manage.untitledFolder'));
      return true;
    }
    if (button.classList.contains('btn-save')) {
      void saveInlineRename();
      return true;
    }
    if (button.classList.contains('btn-cancel')) {
      cancelInlineRename();
      return true;
    }
    if (button.classList.contains('btn-delete')) {
      void deleteEmptyFolderFromManage(folderId);
      return true;
    }
    return false;
  }

  // dragover 是高频事件：行矩形按行缓存，滚动时整体失效，避免每帧强制布局
  const treeDragRectCache = new Map();

  function getCachedDragRect(article) {
    let rect = treeDragRectCache.get(article);
    if (!rect) {
      rect = article.getBoundingClientRect();
      treeDragRectCache.set(article, rect);
    }
    return rect;
  }

  function invalidateTreeDragRectCache() {
    if (treeDragRectCache.size > 0) {
      treeDragRectCache.clear();
    }
  }

  function setupTreeDelegatedEvents() {
    ui.bookmarkTree.addEventListener('click', (event) => {
      const clearSearchBtn = event.target.closest('[data-action="clear-manage-search"]');
      if (clearSearchBtn) {
        state.searchTerm = '';
        if (ui.bookmarkSearchInput) {
          ui.bookmarkSearchInput.value = '';
        }
        setManageFilter('all');
        return;
      }

      const button = event.target.closest('button');
      if (button && handleTreeButtonClick(event, button)) {
        return;
      }

      const parts = getFolderPartsFromTarget(event.target);
      if (parts) {
        toggleFolderExpandFromElement(parts);
        return;
      }

      const article = getBookmarkArticleFromTarget(event.target);
      if (!article) {
        return;
      }
      if (event.target.closest('button') || event.target.closest('.rename-editor') || event.target.classList.contains('bookmark-checkbox')) {
        return;
      }
      const bookmarkId = article.dataset.bookmarkId;
      // Ctrl/Cmd 单击切换并记录锚点；Shift 单击从锚点到当前行范围选择
      if (event.shiftKey || event.metaKey || event.ctrlKey) {
        event.preventDefault();
        handleRangeSelectionClick(bookmarkId, event.shiftKey);
        return;
      }
      state.selectionAnchorId = bookmarkId;
      const checkbox = article.querySelector('.bookmark-checkbox');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        toggleManageSelection(bookmarkId, checkbox.checked);
      }
    });

    ui.bookmarkTree.addEventListener('change', (event) => {
      const checkbox = event.target.closest('.bookmark-checkbox');
      if (!checkbox) {
        return;
      }
      const article = checkbox.closest('[data-bookmark-id]');
      if (article) {
        toggleManageSelection(article.dataset.bookmarkId, checkbox.checked);
      }
    });

    ui.bookmarkTree.addEventListener('keydown', (event) => {
      if (event.target.classList.contains('rename-input')) {
        event.stopPropagation();
        if (event.key === 'Enter') {
          event.preventDefault();
          void saveInlineRename();
        } else if (event.key === 'Escape') {
          event.preventDefault();
          cancelInlineRename();
        }
        return;
      }
      const header = event.target.closest('.folder-header');
      if (header && event.target === header && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        const parts = getFolderPartsFromTarget(header);
        if (parts) {
          toggleFolderExpandFromElement(parts);
        }
      }
    });

    ui.bookmarkTree.addEventListener('input', (event) => {
      if (event.target.classList.contains('rename-input') && state.editingNode) {
        state.editingNode.value = event.target.value;
      }
    });

    ui.bookmarkTree.addEventListener('dragstart', (event) => {
      if (state.editingNode) {
        event.preventDefault();
        return;
      }
      const parts = getFolderPartsFromTarget(event.target);
      if (parts) {
        state.draggedItem = { id: parts.folderId, type: 'folder' };
        parts.section.classList.add('dragging');
        event.dataTransfer.effectAllowed = 'move';
        setDragGhostFromFolder(parts.folderId);
        applyDragGhostImage(event);
        startDragAutoScroll();
        return;
      }
      const article = getBookmarkArticleFromTarget(event.target);
      if (!article) {
        return;
      }
      const bookmarkId = article.dataset.bookmarkId;
      const selectedIds = state.selectedManageIds.has(bookmarkId) ? getVisibleSelectedBookmarkIds() : [];
      if (selectedIds.length > 1) {
        state.draggedItem = { ids: selectedIds, type: 'bookmark-group' };
        // 一趟 DOM 扫描标出所有被拖动行
        ui.bookmarkTree.querySelectorAll('[data-bookmark-id]').forEach((row) => {
          if (state.selectedManageIds.has(row.dataset.bookmarkId)) {
            row.classList.add('dragging');
          }
        });
      } else {
        state.draggedItem = { id: bookmarkId, type: 'bookmark' };
        article.classList.add('dragging');
      }
      event.dataTransfer.effectAllowed = 'move';
      setDragGhostFromDraggedItem();
      applyDragGhostImage(event);
      startDragAutoScroll();
    });

    ui.bookmarkTree.addEventListener('dragend', () => {
      invalidateTreeDragRectCache();
      clearDragState();
    });

    ui.bookmarkTree.addEventListener('dragover', (event) => {
      const parts = getFolderPartsFromTarget(event.target);
      if (parts) {
        if (!canDropDraggedItemIntoFolder(parts.folderId)) {
          return;
        }
        event.preventDefault();
        parts.header.classList.add('drop-target');
        // 折叠文件夹悬停片刻自动展开，一次拖拽就能深入多层目录
        if (!isManageFiltering() && !state.expandedFolderIds.has(parts.folderId)) {
          scheduleDragExpand(parts.folderId, () => expandFolderElement(parts));
        }
        return;
      }
      const article = getBookmarkArticleFromTarget(event.target);
      if (!article) {
        return;
      }
      const bookmarkId = article.dataset.bookmarkId;
      if (!isBookmarkCardDropAllowed(bookmarkId)) {
        return;
      }
      event.preventDefault();
      // 上半区插到目标前面，下半区插到目标后面（矩形走缓存，见 getCachedDragRect）
      const rect = getCachedDragRect(article);
      const insertAfter = event.clientY > rect.top + rect.height / 2;
      article.classList.toggle('drop-before', !insertAfter);
      article.classList.toggle('drop-after', insertAfter);
    });

    ui.bookmarkTree.addEventListener('dragleave', (event) => {
      const parts = getFolderPartsFromTarget(event.target);
      if (parts) {
        parts.header.classList.remove('drop-target');
        if (!parts.header.contains(event.relatedTarget)) {
          cancelDragExpand(parts.folderId);
        }
        return;
      }
      const article = getBookmarkArticleFromTarget(event.target);
      if (!article || article.contains(event.relatedTarget)) {
        return;
      }
      article.classList.remove('drop-before');
      article.classList.remove('drop-after');
    });

    ui.bookmarkTree.addEventListener('drop', async (event) => {
      const parts = getFolderPartsFromTarget(event.target);
      if (parts) {
        event.preventDefault();
        parts.header.classList.remove('drop-target');
        cancelDragExpand(parts.folderId);
        invalidateTreeDragRectCache();
        await moveDraggedItemToFolder(parts.folderId);
        return;
      }
      const article = getBookmarkArticleFromTarget(event.target);
      if (!article) {
        return;
      }
      const bookmarkId = article.dataset.bookmarkId;
      if (!isBookmarkCardDropAllowed(bookmarkId)) {
        return;
      }
      event.preventDefault();
      const insertAfter = article.classList.contains('drop-after');
      article.classList.remove('drop-before');
      article.classList.remove('drop-after');
      invalidateTreeDragRectCache();
      await moveDraggedItemBesideBookmark(bookmarkId, insertAfter);
    });

    // 拖拽期间任何滚动（树容器、页面）都会让缓存的行矩形失真
    document.addEventListener('scroll', invalidateTreeDragRectCache, { capture: true, passive: true });
  }

  function renderManageNode(node) {
    if (node.children) {
      const folder = state.folderMap.get(node.id);
      const matchesFolder = matchesSearch(folder?.searchText);
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
      } else if (isExpanded && state.deferFolderChildren) {
        // 展开全部分帧模式：此处只出骨架，子节点由 drainProgressiveFolderFill 补
        children = [];
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
          <span class="folder-toggle-icon">${ICONS.chevronRight}</span>
          <span class="item-avatar item-avatar-folder">${ICONS.folder}</span>
          ${isEditing
            ? `<span class="rename-editor rename-editor-inline"><input class="rename-input" type="text" value="${escapeHtml(editingValue)}" aria-label="${t('manage.editFolderName')}"></span>`
            : `<span class="folder-title">${highlightMatch(folder?.title || t('manage.untitledFolder'), state.searchTerm)}</span>`}
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
      if (isExpanded && state.deferFolderChildren) {
        progressiveFillQueue.push({ content, folderId: node.id });
      }

      // 展开/折叠/拖拽/行内按钮等交互全部由 ui.bookmarkTree 上的委托监听处理
      // （见 setupTreeDelegatedEvents），这里只负责生成结构
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
            : `<div class="bookmark-title">${highlightMatch(bookmark.title, state.searchTerm)}</div>`}
          ${state.invalidLinksMap[bookmark.id] ? `<span class="bookmark-chip bookmark-chip-danger">${t('manage.invalidChip')}</span>` : ''}
        </div>
        <div class="bookmark-url">${highlightMatch(bookmark.url, state.searchTerm)}</div>
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

    // 交互（选择/打开/重命名/删除/拖拽）全部由 setupTreeDelegatedEvents 统一委托处理
    attachFavicon(article.querySelector('.bookmark-favicon'), bookmark.url, bookmark.title);

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

  function setManageFilter(filter, options = {}) {
    state.manageFilter = filter || 'all';
    ui.manageFilterToggleBtn.textContent = getManageFilterLabel();
    ui.manageFilterPanel?.classList.add('hidden');
    ui.manageFilterToggleBtn?.setAttribute('aria-expanded', 'false');
    ui.manageFilterPanel?.querySelectorAll('[data-filter]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.filter === state.manageFilter);
    });
    renderManageTree();
    if (!options.skipPersist) {
      persistUiState();
    }
  }

  function applyRestoredManageFilter() {
    if (state.manageFilter && state.manageFilter !== 'all') {
      setManageFilter(state.manageFilter, { skipPersist: true });
    }
  }

  function openLargestFolderFromPortrait() {
    const largest = state.portraitStats?.largestFolder;
    if (largest?.id && state.folderMap.has(largest.id)) {
      revealManageNode(largest.id, 'folder');
      return;
    }
    // 兜底：缓存的统计里没有文件夹 id（旧版本数据），退回文本搜索
    const title = largest?.title || '';
    focusManageView(title, title
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
    revealManageNode(item.id, 'bookmark');
  }

  function openFolderFromScan(item) {
    revealManageNode(item.id, 'folder');
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

  // ID 级定位：展开目标的所有祖先文件夹 → 滚动到节点并高亮闪烁。
  // 比旧的“填搜索框文本”精确：重名书签不会命中多行
  function revealManageNode(nodeId, type = 'bookmark') {
    switchTab('manage');
    setManageFilter('all');
    state.searchTerm = '';
    if (ui.bookmarkSearchInput) {
      ui.bookmarkSearchInput.value = '';
    }

    // 收集需要展开的祖先链（文件夹目标不展开它自己，只要可见即可）
    const chain = [];
    let walkId = type === 'bookmark'
      ? state.bookmarkMap.get(nodeId)?.parentFolderId || null
      : state.folderMap.get(nodeId)?.parentFolderId || null;
    while (walkId) {
      const folder = state.folderMap.get(walkId);
      if (!folder) {
        break;
      }
      chain.push(walkId);
      walkId = folder.parentFolderId || null;
    }
    chain.forEach((id) => state.expandedFolderIds.add(id));

    renderManageTree();

    const selector = type === 'bookmark'
      ? `[data-bookmark-id="${CSS.escape(nodeId)}"]`
      : `[data-folder-id="${CSS.escape(nodeId)}"] .folder-header`;
    const target = ui.bookmarkTree.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('highlight-flash');
      setTimeout(() => target.classList.remove('highlight-flash'), 2000);
      showToast(type === 'bookmark' ? t('manage.revealedBookmark') : t('manage.revealedFolder'), 'info');
    } else {
      showToast(t('manage.revealNotFound'), 'warning');
    }
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
    const total = getModelVisibleBookmarkIds().length;
    if (total > selectedCount) {
      return t('manage.selectionFraction', { s: selectedCount, total });
    }
    if (selectedCount === 1) {
      return t('manage.selectionOne');
    }
    return t('manage.selectionMany', { n: selectedCount });
  }

  // 与渲染树一致的“当前视图”范围：搜索 + 筛选后的全部书签（含折叠文件夹内的）
  function getModelVisibleBookmarkIds() {
    const ids = [];
    state.bookmarkMap.forEach((bookmark) => {
      if (matchesSearch(bookmark.searchText) && passesManageFilter(bookmark)) {
        ids.push(bookmark.id);
      }
    });
    return ids;
  }

  function handleRangeSelectionClick(bookmarkId, isRange) {
    if (!isRange) {
      // Ctrl/Cmd 单击：切换单行并更新锚点
      state.selectionAnchorId = bookmarkId;
      const willSelect = !state.selectedManageIds.has(bookmarkId);
      toggleManageSelection(bookmarkId, willSelect);
      return;
    }
    const visibleIds = Array.from(ui.bookmarkTree.querySelectorAll('[data-bookmark-id]')).map((node) => node.dataset.bookmarkId);
    if (visibleIds.length === 0) {
      return;
    }
    const anchor = state.selectionAnchorId && visibleIds.includes(state.selectionAnchorId)
      ? state.selectionAnchorId
      : bookmarkId;
    const a = visibleIds.indexOf(anchor);
    const b = visibleIds.indexOf(bookmarkId);
    const [start, end] = a <= b ? [a, b] : [b, a];
    for (let i = start; i <= end; i += 1) {
      state.selectedManageIds.add(visibleIds[i]);
    }
    syncBookmarkSelectionUiBatch();
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
    syncBookmarkSelectionUiBatch();
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

    // 批量改动书签前明确确认：按动作类型汇总数量
    const counts = executableActions.reduce((acc, action) => {
      acc[action.type] = (acc[action.type] || 0) + 1;
      return acc;
    }, {});
    const parts = [
      counts.create_folder ? t('ai.confirmCountsCreate', { n: counts.create_folder }) : '',
      counts.rename ? t('ai.confirmCountsRename', { n: counts.rename }) : '',
      counts.move ? t('ai.confirmCountsMove', { n: counts.move }) : ''
    ].filter(Boolean).join(t('ai.confirmCountsJoin'));
    const confirmed = await showConfirmDialog({
      title: t('ai.applyConfirmTitle'),
      message: t('ai.applyConfirmBody', { n: executableActions.length, detail: parts })
    });
    if (!confirmed) {
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
    // 基于数据模型而非 DOM 节点：折叠文件夹内的书签同样纳入全选
    const visibleIds = getModelVisibleBookmarkIds();
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
    });
    syncBookmarkSelectionUiBatch();
  }

  function clearManageSelection() {
    if (state.selectedManageIds.size === 0) {
      return;
    }
    state.selectedManageIds.clear();
    syncBookmarkSelectionUiBatch();
  }

  async function deleteSelectedBookmarks() {
    const ids = Array.from(state.selectedManageIds);
    if (ids.length === 0) {
      showToast(t('manage.selectDeleteFirst'), 'warning');
      return;
    }
    if (!(await showConfirmDialog({
      title: t('dialog.deleteTitle'),
      message: t('manage.confirmDeleteBookmarks', { n: ids.length }),
      confirmText: t('dialog.delete'),
      danger: true
    }))) {
      return;
    }

    await removeBookmarksByIds(ids, true);
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(t('manage.bookmarksDeleted', { n: ids.length }), 'success');
  }

  // ===== "移动到…"批量移动对话框 =====

  let moveFolderOptions = [];
  let moveFolderActiveIndex = 0;

  // ---- 树键盘导航：roving tabindex + 方向键展开/折叠/移动焦点
  function getTreeFocusableItems() {
    return Array.from(ui.bookmarkTree.querySelectorAll('.folder-header, .bookmark-item'));
  }

  function updateTreeRovingTabindex() {
    getTreeFocusableItems().forEach((item, index) => {
      item.tabIndex = index === 0 ? 0 : -1;
    });
  }

  function focusTreeItemAt(items, index) {
    if (index < 0 || index >= items.length) {
      return;
    }
    items.forEach((item, i) => {
      item.tabIndex = i === index ? 0 : -1;
    });
    items[index].focus();
    items[index].scrollIntoView({ block: 'nearest' });
  }

  function focusParentFolderHeader(current, items) {
    let parentId = null;
    if (current.classList.contains('bookmark-item')) {
      parentId = state.bookmarkMap.get(current.dataset.bookmarkId)?.parentId || null;
    } else {
      const folderId = current.closest('.folder')?.dataset.folderId;
      parentId = folderId ? state.folderMap.get(folderId)?.parentId : null;
    }
    if (!parentId) {
      return;
    }
    const parentHeader = ui.bookmarkTree.querySelector(`.folder[data-folder-id="${parentId}"] > .folder-header`);
    if (parentHeader) {
      focusTreeItemAt(items, items.indexOf(parentHeader));
    }
  }

  function handleTreeKeydown(event) {
    if (isConfirmDialogOpen() || state.editingNode) {
      return;
    }
    if (event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }
    const items = getTreeFocusableItems();
    if (items.length === 0) {
      return;
    }
    const current = event.target.closest('.folder-header, .bookmark-item');
    if (!current) {
      return;
    }
    const index = items.indexOf(current);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusTreeItemAt(items, index + 1);
        return;
      case 'ArrowUp':
        event.preventDefault();
        focusTreeItemAt(items, index - 1);
        return;
      case 'ArrowRight': {
        event.preventDefault();
        const folderId = current.closest('.folder')?.dataset.folderId;
        if (folderId && !state.expandedFolderIds.has(folderId)) {
          current.click();
          return;
        }
        focusTreeItemAt(items, index + 1);
        return;
      }
      case 'ArrowLeft': {
        event.preventDefault();
        const folderId = current.closest('.folder')?.dataset.folderId;
        // 书签行：← 直接回到所属文件夹；文件夹：已展开则折叠，否则回到上级
        if (!current.classList.contains('bookmark-item') && folderId && state.expandedFolderIds.has(folderId)) {
          current.click();
          return;
        }
        focusParentFolderHeader(current, items);
        return;
      }
      case 'Enter': {
        if (current.classList.contains('bookmark-item')) {
          const bookmark = state.bookmarkMap.get(current.dataset.bookmarkId);
          if (bookmark?.url) {
            event.preventDefault();
            chrome.tabs.create({ url: bookmark.url });
          }
        }
        return;
      }
      case ' ': {
        if (current.classList.contains('bookmark-item')) {
          event.preventDefault();
          current.querySelector('.bookmark-checkbox')?.click();
        }
        return;
      }
    }
  }

  function handleManageShortcuts(event) {
    if (isConfirmDialogOpen()) {
      return;
    }
    // Ctrl/Cmd+Z：撤销上一步（书签树有焦点或在管理页时生效，输入框内不劫持）
    if ((event.ctrlKey || event.metaKey) && !event.altKey && !event.shiftKey && (event.key === 'z' || event.key === 'Z')) {
      if (ui.managePage.classList.contains('hidden')) {
        return;
      }
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') {
        return;
      }
      if (state.undoStack.length === 0) {
        return;
      }
      event.preventDefault();
      void undoLastAction();
      return;
    }
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
    rememberDialogFocus();
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
    setTimeout(() => ui.moveFolderDialog.classList.add('hidden'), DIALOG_HIDE_DELAY_MS);
    restoreDialogFocus();
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
      ui.moveFolderList.removeAttribute('aria-activedescendant');
      return;
    }

    moveFolderOptions.forEach((option, index) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.id = `move-folder-option-${index}`;
      row.className = `move-folder-option${index === moveFolderActiveIndex ? ' is-active' : ''}`;
      row.setAttribute('role', 'option');
      row.setAttribute('aria-selected', String(index === moveFolderActiveIndex));
      row.dataset.folderId = option.id;
      row.disabled = isMoveTargetCurrent(option.id);
      row.innerHTML = `
        <span class="move-folder-icon">${ICONS.folder}</span>
        <span class="move-folder-label">${escapeHtml(option.label)}</span>
      `;
      row.addEventListener('click', () => confirmMoveSelectionTo(option.id));
      ui.moveFolderList.appendChild(row);
    });
    updateMoveFolderActiveRow();
  }

  function updateMoveFolderActiveRow() {
    const rows = ui.moveFolderList.querySelectorAll('.move-folder-option');
    rows.forEach((row, index) => {
      row.classList.toggle('is-active', index === moveFolderActiveIndex);
      row.setAttribute('aria-selected', String(index === moveFolderActiveIndex));
    });
    const activeRow = rows[moveFolderActiveIndex];
    if (activeRow) {
      ui.moveFolderList.setAttribute('aria-activedescendant', activeRow.id);
      activeRow.scrollIntoView({ block: 'nearest' });
    } else {
      ui.moveFolderList.removeAttribute('aria-activedescendant');
    }
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

  function moveBookmarkSafe(id, destination) {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.move(id, destination, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
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

    // 顺序移动保证 index 语义，单条失败不中断后续
    let insertIndex = getFolderInsertIndex(folderId);
    let movedCount = 0;
    const moveResults = [];
    for (const id of ids) {
      try {
        await moveBookmarkSafe(id, { parentId: folderId, index: insertIndex });
        movedCount += 1;
        moveResults.push({ status: 'fulfilled' });
      } catch (error) {
        moveResults.push({ status: 'rejected', reason: error });
      }
      insertIndex += 1;
    }
    reportPartialFailures(moveResults);
    if (movedCount === 0) {
      clearDragState();
      return;
    }

    recordUndoAction({
      type: 'move',
      payload: previousState,
      message
    });
    clearDragState();
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(message, 'success');
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
    let movedCount = 0;
    const moveResults = [];
    for (const id of ids) {
      try {
        await moveBookmarkSafe(id, { parentId: target.parentId, index: insertIndex });
        movedCount += 1;
        moveResults.push({ status: 'fulfilled' });
      } catch (error) {
        moveResults.push({ status: 'rejected', reason: error });
      }
      insertIndex += 1;
    }
    reportPartialFailures(moveResults);
    if (movedCount === 0) {
      clearDragState();
      return;
    }

    recordUndoAction({
      type: 'move',
      payload: previousState,
      message
    });
    clearDragState();
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(message, 'success');
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

    try {
      await moveBookmarkSafe(folder.id, { parentId: folderId, index: insertIndex });
    } catch (error) {
      showToast(t('manage.moveFailed'), 'error');
      clearDragState();
      return;
    }

    recordUndoAction({
      type: 'move',
      payload: previousState,
      message: t('manage.movedFolder', { t: folder.title })
    });
    clearDragState();
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(t('manage.movedFolder', { t: folder.title }), 'success');
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

  function removeBookmarkSafe(id) {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.remove(id, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }

  function removeFolderSafe(id) {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.removeTree(id, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }

  function reportPartialFailures(results) {
    const failedCount = results.filter((result) => result.status === 'rejected').length;
    if (failedCount > 0) {
      showToast(t('common.batchPartialFailed', { n: failedCount }), 'warning');
    }
    return failedCount;
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

    // 逐条容错：单条失败（如已在其他标签页被删除）不中断整批
    const results = await Promise.allSettled(ids.map((id) => removeBookmarkSafe(id)));
    results.forEach((result, position) => {
      if (result.status !== 'fulfilled') {
        return;
      }
      const id = ids[position];
      delete state.invalidLinksMap[id];
      state.selectedManageIds.delete(id);
      state.selectedScanIds.delete(id);
    });
    reportPartialFailures(results);

    if (recordUndo && snapshot.length > 0) {
      recordUndoAction({
        type: 'delete',
        payload: snapshot,
        message: t('manage.bookmarksDeleted', { n: snapshot.length })
      });
    }
  }

  async function removeFoldersByIds(ids) {
    // 删除前快照，撤销时按原位置重建（空文件夹无子节点，重建即完整还原）
    const snapshot = ids.map((id) => {
      const folder = state.folderMap.get(id);
      return folder ? {
        id: folder.id,
        parentId: folder.parentId,
        index: folder.index,
        title: folder.title
      } : null;
    }).filter(Boolean);

    const results = await Promise.allSettled(ids.map((id) => removeFolderSafe(id)));
    const removedIds = [];
    results.forEach((result, position) => {
      if (result.status === 'fulfilled') {
        removedIds.push(ids[position]);
        state.selectedEmptyFolderIds.delete(ids[position]);
      }
    });
    reportPartialFailures(results);

    if (removedIds.length > 0) {
      recordUndoAction({
        type: 'folderDelete',
        payload: snapshot.filter((item) => removedIds.includes(item.id)),
        message: t('manage.undoHintFolderDelete')
      });
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

    try {
      await new Promise((resolve, reject) => {
        chrome.bookmarks.update(editingNode.id, { title: trimmedTitle }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
    } catch (error) {
      // 保留编辑态，用户可重试或取消
      showToast(t('manage.renameFailed'), 'error');
      return;
    }

    recordUndoAction({
      type: 'rename',
      payload: {
        id: editingNode.id,
        type: editingNode.type,
        previousTitle: currentNode.title
      },
      message: t('manage.undoHintRename')
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
    let createdFolder;
    try {
      createdFolder = await new Promise((resolve, reject) => {
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
    } catch (error) {
      showToast(t('manage.createFailed'), 'error');
      return;
    }

    state.editingNode = {
      type: 'folder',
      id: createdFolder.id,
      value: createdFolder.title || t('manage.newFolderDefault')
    };
    recordUndoAction({
      type: 'create',
      payload: { id: createdFolder.id, parentId },
      message: t('manage.undoHintCreate')
    });
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

    if (!(await showConfirmDialog({
      title: t('dialog.deleteTitle'),
      message: t('manage.confirmDeleteEmptyFolder', { t: folder.title }),
      confirmText: t('dialog.delete'),
      danger: true
    }))) {
      return;
    }

    await removeFoldersByIds([id]);
    showToast(t('manage.emptyFolderDeletedToast'), 'success');
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

    if (!(await showConfirmDialog({
      title: t('dialog.deleteTitle'),
      message: t('manage.confirmDeleteEmptyFolders', { n: ids.length }),
      confirmText: t('dialog.delete'),
      danger: true
    }))) {
      return;
    }

    await removeFoldersByIds(ids);
    renderScanResults();
    showToast(t('manage.emptyFoldersDeleted', { n: ids.length }), 'success');
  }

  // ---- 撤销栈：保留最近 10 步可撤销操作，banner 每次撤销一步
  const UNDO_STACK_LIMIT = 10;

  function recordUndoAction(action) {
    state.undoStack.push(action);
    if (state.undoStack.length > UNDO_STACK_LIMIT) {
      state.undoStack.shift();
    }
  }

  function createBookmarkSafe(item) {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.create({
        parentId: item.parentId,
        index: item.index,
        title: item.title,
        url: item.url
      }, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }

  async function undoLastAction() {
    if (state.undoStack.length === 0) {
      return;
    }

    const action = state.undoStack.pop();
    let failedCount = 0;

    const runStep = async (step) => {
      try {
        await step();
      } catch (error) {
        failedCount += 1;
      }
    };

    if (action.type === 'delete' || action.type === 'folderDelete') {
      // 删除恢复：书签带 url，文件夹快照没有；逐条容错
      const steps = action.payload.map((item) => item.url !== undefined
        ? () => createBookmarkSafe(item)
        : () => new Promise((resolve, reject) => {
            chrome.bookmarks.create({
              parentId: item.parentId,
              index: item.index,
              title: item.title
            }, () => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
              } else {
                resolve();
              }
            });
          }));
      // 顺序恢复保证 index 语义（同批多项时按原相对顺序落位）
      for (const step of steps) {
        await runStep(step);
      }
      showToast(failedCount > 0 ? t('manage.undoRetryFailed') : t('manage.undoDeleteDone'), failedCount > 0 ? 'warning' : 'success');
    }

    if (action.type === 'move') {
      for (const bookmark of action.payload) {
        await runStep(() => moveBookmarkSafe(bookmark.id, { parentId: bookmark.parentId, index: bookmark.index }));
      }
      showToast(failedCount > 0 ? t('manage.undoRetryFailed') : t('manage.undoMoveDone'), failedCount > 0 ? 'warning' : 'success');
      if (failedCount > 0) {
        // move 可幂等重试：放回栈顶，用户可再按一次撤销
        state.undoStack.push(action);
      }
    }

    if (action.type === 'create') {
      // 撤销新建 = 删除该文件夹（连同期间放入的内容一并移除）
      await runStep(() => removeFolderSafe(action.payload.id));
      showToast(failedCount > 0 ? t('manage.undoRetryFailed') : t('manage.undoHintCreate'), failedCount > 0 ? 'warning' : 'success');
    }

    if (action.type === 'rename') {
      await runStep(() => new Promise((resolve, reject) => {
        chrome.bookmarks.update(action.payload.id, { title: action.payload.previousTitle }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      }));
      showToast(failedCount > 0 ? t('manage.undoRetryFailed') : t('manage.undoHintRename'), failedCount > 0 ? 'warning' : 'success');
      if (failedCount > 0) {
        // rename 同样可幂等重试
        state.undoStack.push(action);
      }
    }

    await loadBookmarks();
    await loadStoredScanResults();
  }

  function renderUndoBanner() {
    const action = state.undoStack[state.undoStack.length - 1];
    if (!action) {
      ui.undoBanner.classList.add('hidden');
      ui.undoBanner.classList.remove('is-move', 'is-delete', 'is-create');
      return;
    }

    const remaining = state.undoStack.length - 1;
    ui.undoMessage.textContent = remaining > 0
      ? `${action.message}${t('manage.undoMore', { n: remaining })}`
      : action.message;
    ui.undoBanner.classList.remove('is-move', 'is-delete', 'is-create');
    if (action.type === 'move') {
      ui.undoBanner.classList.add('is-move');
    } else if (action.type === 'delete') {
      ui.undoBanner.classList.add('is-delete');
    } else if (action.type === 'create') {
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
      renderManageTreeProgressive();
    } else {
      renderManageTree();
    }
  }

  const TOAST_MAX_VISIBLE = 4;

  function showToast(message, type = 'info', duration = 2600) {
    // 堆叠上限：防止连续操作时 toast 淹没屏幕
    while (ui.toastContainer.children.length >= TOAST_MAX_VISIBLE) {
      ui.toastContainer.firstElementChild.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${(TOAST_ICONS[type] || TOAST_ICONS.info)()}</span>
      <span class="toast-content">${escapeHtml(message)}</span>
      <button class="toast-close" type="button">&times;</button>
    `;

    ui.toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    const remove = () => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 220);
    };

    let removeTimer = null;
    const scheduleRemove = (delay) => {
      clearTimeout(removeTimer);
      removeTimer = setTimeout(remove, delay);
    };

    toast.querySelector('.toast-close').addEventListener('click', remove);
    // 悬停暂停自动消失，移开后给一段短缓冲
    toast.addEventListener('mouseenter', () => clearTimeout(removeTimer));
    toast.addEventListener('mouseleave', () => scheduleRemove(1200));
    if (duration > 0) {
      scheduleRemove(duration);
    }
  }

  // 本页存在 20px 大图标场景（bookmark-favicon-lg），基于 utils.js 的子函数做尺寸分支
  function attachFavicon(image, url, title = '') {
    if (!image || !url) {
      return;
    }
    const size = image.classList.contains('bookmark-favicon-lg') ? 20 : 16;
    image.src = window.BK_UTILS.getFaviconUrl(url, size);
    image.addEventListener('error', () => {
      image.src = window.BK_UTILS.createFaviconFallback(title);
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

  // 把命中搜索词的片段包上 <mark>；未命中时原样转义返回
  function highlightMatch(text, term) {
    const raw = String(text ?? '');
    const needle = String(term || '').toLowerCase();
    if (!needle) {
      return escapeHtml(raw);
    }
    const lower = raw.toLowerCase();
    let out = '';
    let cursor = 0;
    let idx = lower.indexOf(needle);
    while (idx !== -1) {
      out += escapeHtml(raw.slice(cursor, idx));
      out += `<mark>${escapeHtml(raw.slice(idx, idx + needle.length))}</mark>`;
      cursor = idx + needle.length;
      idx = lower.indexOf(needle, cursor);
    }
    out += escapeHtml(raw.slice(cursor));
    return out;
  }
});
