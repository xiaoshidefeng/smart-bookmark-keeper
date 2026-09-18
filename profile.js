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

  const I18N = {
    'zh-CN': {
      'app.title': '智能书签管家',
      'app.skipToContent': '跳转到主内容',
      'app.brandName': '智能书签管家',
      'app.brandSubtitle': '检测、洞察、整理、AI',
      'app.feedback': '去反馈',
      'app.tabSwitch': '功能切换',
      'tabs.scan': '书签检测',
      'tabs.portrait': '书签洞察',
      'tabs.manage': '书签管理',
      'tabs.ai': 'AI整理',
      'scan.kicker': 'Bookmark Detection',
      'scan.title': '书签检测',
      'scan.copy': '快速扫描书签中的失效链接和空文件夹，集中处理需要清理的问题。',
      'scan.totalBookmarks': '总书签',
      'scan.invalidBookmarks': '失效书签',
      'scan.emptyFolders': '空文件夹',
      'scan.liveProgress': '实时进度',
      'scan.ctaTitle': '一键开始检测你的书签库',
      'scan.keepLastResult': '会持续保存最近一次扫描结果，方便你回来继续处理问题项。',
      'scan.progressAria': '扫描完成百分比',
      'scan.progressLabel': '完成度',
      'scan.duration': '扫描时间',
      'scan.scanned': '已扫描',
      'scan.recentResults': '最近扫描结果',
      'scan.notStarted': '尚未开始扫描',
      'scan.selectAllIssues': '全选问题项',
      'scan.clearResults': '清空结果',
      'scan.selectAllEmptyFolders': '全选空文件夹',
      'scan.start': '开始快速扫描',
      'scan.pause': '暂停',
      'scan.stop': '停止',
      'scan.resume': '继续',
      'scan.settings': '扫描设置',
      'scan.refreshStats': '刷新统计',
      'scan.waiting': '等待开始',
      'scan.stopped': '扫描已停止',
      'scan.paused': '扫描已暂停',
      'scan.resuming': '正在继续扫描...',
      'scan.resumed': '扫描已继续',
      'scan.timeoutLabel': '请求超时时间',
      'scan.timeoutHelp': '网络较差建议调到 15-20 秒，链接很多时可适当缩短。',
      'portrait.kicker': 'Bookmark Insights',
      'portrait.title': '书签洞察',
      'portrait.copy': '先看您的书签现状、活跃趋势和待整理重点，再决定下一步该从哪里开始整理。',
      'portrait.overallConclusion': '整体结论',
      'portrait.analyzing': '分析中',
      'portrait.overallNote': '结合收藏规模、来源分布和结构状态，快速总结这份书签库的整体特点。',
      'portrait.thisInsight': '本次洞察',
      'portrait.generating': '正在生成书签洞察',
      'portrait.generatingNote': '先帮您概括书签库的当前状态，再指出更值得优先整理的方向。',
      'portrait.collectionScale': '收藏规模',
      'portrait.totalBookmarkCount': '当前累计书签数',
      'portrait.sourceBreadth': '来源广度',
      'portrait.uniqueSourceCount': '不同网站来源数量',
      'portrait.actionableItems': '待整理项',
      'portrait.actionableMeta': '重复链接和空文件夹会显示在这里',
      'portrait.trendTitle': '收藏趋势',
      'portrait.trendCopy': '按年、月、日查看收藏节奏，快速判断最近是否还在持续积累。',
      'portrait.trendAria': '趋势粒度切换',
      'portrait.topDomains': '高频域名',
      'portrait.topDomainsCopy': '最常被收藏的网站，能直接看出您的信息来源重心。',
      'portrait.focusTitle': '优先整理这里',
      'portrait.focusCopy': '先看最容易产生混乱的结构位置，再决定是去检测还是直接开始整理。',
      'portrait.openScan': '去书签检测',
      'portrait.openManage': '去书签管理',
      'portrait.largestFolder': '最大文件夹',
      'portrait.viewInManage': '在管理页查看',
      'portrait.duplicateLinks': '重复链接',
      'portrait.viewDuplicates': '查看重复链接',
      'portrait.emptyFoldersFocus': '空文件夹',
      'portrait.emptyFoldersMeta': '优先清理的结构噪音',
      'portrait.handleInDetection': '去检测页处理',
      'portrait.maxDepth': '最大层级',
      'portrait.depthMeta': '目录嵌套深度',
      'portrait.expandToView': '展开目录查看',
      'portrait.folderHotspots': '文件夹热点',
      'portrait.folderHotspotsCopy': '最常承载书签内容的目录，能快速看出哪些地方最值得先整理。',
      'portrait.interestTags': '兴趣标签',
      'portrait.interestTagsCopy': '根据域名和关键词自动推断，只作为轻量参考，不干扰主结论。',
      'portrait.shareSummary': '分享摘要',
      'portrait.shareSummaryCopy': '需要时再复制出去，不再占据洞察页主舞台。',
      'portrait.shareTotal': '总书签',
      'portrait.shareDomains': '唯一域名',
      'portrait.shareScore': '组织分',
      'portrait.shareDays': '收藏天数',
      'portrait.totalFoldersLabel': '文件夹数',
      'portrait.totalFoldersMeta': '当前目录结构数量',
      'portrait.collectionDaysLabel': '收藏天数',
      'portrait.collectionDaysMeta': '持续积累时长',
      'portrait.organizationScoreLabel': '组织分',
      'portrait.organizationScoreMeta': '整理成熟度参考',
      'portrait.httpsRatioLabel': 'HTTPS 占比',
      'portrait.httpsRatioMeta': '来源质量参考',
      'portrait.avgPerFolderLabel': '平均每文件夹',
      'portrait.avgPerFolderMeta': '书签数量',
      'portrait.oldestBookmarkLabel': '最早收藏',
      'portrait.newestBookmarkLabel': '最近收藏',
      'manage.kicker': 'Bookmark Organizing',
      'manage.title': '书签管理',
      'manage.copy': '搜索、筛选、重命名和拖拽调整书签结构，让整理过程更顺手。',
      'manage.refresh': '刷新书签',
      'manage.collapseAll': '全部折叠',
      'manage.expandAll': '全部展开',
      'manage.searchPlaceholder': '搜索标题、网址或路径',
      'manage.selectionNone': '未选中书签',
      'manage.selectionNoneHint': '未选中书签，可直接拖动单条排序',
      'manage.selectAllVisible': '全选当前视图',
      'manage.clearSelection': '清空选择',
      'manage.filterAll': '筛选：全部',
      'manage.filterOptionAll': '全部书签',
      'manage.filterOptionUnused180': '最近半年未打开',
      'manage.filterOptionUnused365': '最近一年未打开',
      'manage.filterOptionAdded180': '半年前添加',
      'manage.filterOptionAdded365': '一年前添加',
      'manage.filterTooltipUnused': '这里统计的是通过书签节点打开的时间，不是网页最近访问时间',
      'manage.dismissTip': '关闭提示',
      'manage.deleteSelection': '删除选中',
      'ai.kicker': 'Bookmark AI',
      'ai.title': 'AI整理',
      'ai.copy': '告诉 AI 您想怎么整理书签，先查看方案，再决定是否应用到书签栏。',
      'ai.suggestedActions': '建议动作',
      'ai.applicable': '可应用',
      'ai.requestTitle': '整理诉求',
      'ai.requestCopy': '告诉 AI 你想怎么整理书签，生成后你可以先看方案，再决定是否应用。',
      'ai.pending': '待生成',
      'ai.scope': '整理范围',
      'ai.scopeAll': '全部书签',
      'ai.scopeFiltered': '当前筛选结果',
      'ai.scopeSelected': '仅选中的书签',
      'ai.scopeHintAll': '本次将基于全部书签生成整理方案。',
      'ai.usageDefault': '今日 AI 整理剩余 8 次。',
      'ai.requestPlaceholder': '例如：帮我把前端学习资料整理到一个文件夹，保留有意义的分类，并把标题改得更统一。',
      'ai.generate': 'AI整理',
      'ai.apply': '应用方案',
      'ai.undoLatest': '撤销最近一次应用',
      'ai.summaryTitle': '方案摘要',
      'ai.summaryCopy': '先看这次整理会带来什么变化，再看 AI 的判断和需要你留意的地方。',
      'ai.judgement': 'AI判断',
      'ai.summaryEmpty': '还没有生成整理方案，先输入诉求再让 AI 帮你整理。',
      'ai.historyTitle': 'AI整理历史',
      'ai.historyCopy': '你之前生成过的整理方案会保存在这里，点一条就能回看当时的结果。',
      'ai.previewTitle': '变更预览',
      'ai.previewCopy': 'AI 准备执行的每一步都会列在这里，你确认后才会真正改动书签。',
      'ai.privacy': '隐私说明',
      'ai.privacyCopy': '书签信息只会在本次生成方案时发送给 AI 服务处理，服务器不会存储您的书签内容。',
      'common.cancel': '取消',
      'common.save': '保存设置',
      'common.undo': '撤销',
      'common.deleteSelected': '删除选中',
      'common.year': '年',
      'common.month': '月',
      'common.day': '日',
      'common.seconds': '秒',
      'common.closeSettings': '关闭设置',
      'common.loadingBookmarks': '正在加载书签...',
      'toast.settingsSaved': '扫描设置已保存',
      'toast.aiServiceUnavailable': 'AI 服务暂时不可用，请稍后再试',
      'toast.feedbackCopied': '已复制反馈邮箱',
      'toast.feedbackCopyFailed': '复制失败，请手动复制邮箱地址'
    },
    'en-US': {
      'app.title': 'Smart Bookmark Keeper',
      'app.skipToContent': 'Skip to main content',
      'app.brandName': 'Smart Bookmark Keeper',
      'app.brandSubtitle': 'Detect, Insight, Organize, AI',
      'app.feedback': 'Feedback',
      'app.tabSwitch': 'Tab switch',
      'tabs.scan': 'Detection',
      'tabs.portrait': 'Insights',
      'tabs.manage': 'Management',
      'tabs.ai': 'AI Organize',
      'scan.kicker': 'Bookmark Detection',
      'scan.title': 'Bookmark Detection',
      'scan.copy': 'Quickly scan invalid links and empty folders, then handle cleanup in one place.',
      'scan.totalBookmarks': 'Bookmarks',
      'scan.invalidBookmarks': 'Invalid',
      'scan.emptyFolders': 'Empty Folders',
      'scan.liveProgress': 'Live Progress',
      'scan.ctaTitle': 'Start checking your bookmark library in one click',
      'scan.keepLastResult': 'The latest scan result is kept so you can come back and continue handling issues.',
      'scan.progressAria': 'Scan completion percentage',
      'scan.progressLabel': 'Progress',
      'scan.duration': 'Duration',
      'scan.scanned': 'Scanned',
      'scan.recentResults': 'Recent Scan Results',
      'scan.notStarted': 'Scan has not started yet',
      'scan.selectAllIssues': 'Select All Issues',
      'scan.clearResults': 'Clear Results',
      'scan.selectAllEmptyFolders': 'Select All Empty Folders',
      'scan.start': 'Start Fast Scan',
      'scan.pause': 'Pause',
      'scan.stop': 'Stop',
      'scan.resume': 'Resume',
      'scan.settings': 'Scan Settings',
      'scan.refreshStats': 'Refresh Stats',
      'scan.waiting': 'Waiting to start',
      'scan.stopped': 'Scan stopped',
      'scan.paused': 'Scan paused',
      'scan.resuming': 'Resuming scan...',
      'scan.resumed': 'Scan resumed',
      'scan.timeoutLabel': 'Request timeout',
      'scan.timeoutHelp': 'If the network is unstable, 15-20 seconds is safer. For large batches, you can shorten it a bit.',
      'portrait.kicker': 'Bookmark Insights',
      'portrait.title': 'Bookmark Insights',
      'portrait.copy': 'Review the current state, activity trend, and cleanup priorities before deciding what to organize first.',
      'portrait.overallConclusion': 'Overall Conclusion',
      'portrait.analyzing': 'Analyzing',
      'portrait.overallNote': 'Summarize the overall characteristics of this bookmark library based on scale, sources, and structure.',
      'portrait.thisInsight': 'This Insight',
      'portrait.generating': 'Generating bookmark insights',
      'portrait.generatingNote': 'We first summarize the current state of your bookmark library, then point out what is worth organizing first.',
      'portrait.collectionScale': 'Collection Scale',
      'portrait.totalBookmarkCount': 'Total bookmarks right now',
      'portrait.sourceBreadth': 'Source Breadth',
      'portrait.uniqueSourceCount': 'Number of unique websites',
      'portrait.actionableItems': 'Actionable Items',
      'portrait.actionableMeta': 'Duplicate links and empty folders will appear here',
      'portrait.trendTitle': 'Collection Trend',
      'portrait.trendCopy': 'View your collection rhythm by year, month, or day to see whether you are still actively saving links.',
      'portrait.trendAria': 'Trend granularity switch',
      'portrait.topDomains': 'Top Domains',
      'portrait.topDomainsCopy': 'The sites you save most often reveal where your information focus is.',
      'portrait.focusTitle': 'Start Here',
      'portrait.focusCopy': 'Review the most disorder-prone areas first, then decide whether to inspect issues or start managing right away.',
      'portrait.openScan': 'Open Detection',
      'portrait.openManage': 'Open Management',
      'portrait.largestFolder': 'Largest Folder',
      'portrait.viewInManage': 'View in Management',
      'portrait.duplicateLinks': 'Duplicate Links',
      'portrait.viewDuplicates': 'View Duplicates',
      'portrait.emptyFoldersFocus': 'Empty Folders',
      'portrait.emptyFoldersMeta': 'Structural noise worth cleaning first',
      'portrait.handleInDetection': 'Handle in Detection',
      'portrait.maxDepth': 'Max Depth',
      'portrait.depthMeta': 'Folder nesting depth',
      'portrait.expandToView': 'Expand to View',
      'portrait.folderHotspots': 'Folder Hotspots',
      'portrait.folderHotspotsCopy': 'These folders hold the most bookmarks and are usually the best places to clean up first.',
      'portrait.interestTags': 'Interest Tags',
      'portrait.interestTagsCopy': 'Inferred from domains and keywords as a lightweight reference without distracting from the main conclusions.',
      'portrait.shareSummary': 'Share Summary',
      'portrait.shareSummaryCopy': 'Copy it only when needed so it does not dominate the insights page.',
      'portrait.shareTotal': 'Bookmarks',
      'portrait.shareDomains': 'Unique Domains',
      'portrait.shareScore': 'Organization',
      'portrait.shareDays': 'Days Saved',
      'portrait.totalFoldersLabel': 'Folders',
      'portrait.totalFoldersMeta': 'Current folder structure count',
      'portrait.collectionDaysLabel': 'Collection Days',
      'portrait.collectionDaysMeta': 'How long you have been saving',
      'portrait.organizationScoreLabel': 'Organization Score',
      'portrait.organizationScoreMeta': 'A reference for structure maturity',
      'portrait.httpsRatioLabel': 'HTTPS Ratio',
      'portrait.httpsRatioMeta': 'A reference for source quality',
      'portrait.avgPerFolderLabel': 'Avg per Folder',
      'portrait.avgPerFolderMeta': 'Bookmarks per folder',
      'portrait.oldestBookmarkLabel': 'Oldest Saved',
      'portrait.newestBookmarkLabel': 'Most Recent Saved',
      'manage.kicker': 'Bookmark Organizing',
      'manage.title': 'Bookmark Management',
      'manage.copy': 'Search, filter, rename, and drag to adjust bookmark structure more efficiently.',
      'manage.refresh': 'Refresh Bookmarks',
      'manage.collapseAll': 'Collapse All',
      'manage.expandAll': 'Expand All',
      'manage.searchPlaceholder': 'Search title, URL, or path',
      'manage.selectionNone': 'No bookmarks selected',
      'manage.selectionNoneHint': 'No bookmarks selected. Drag a single item to reorder.',
      'manage.selectAllVisible': 'Select Current View',
      'manage.clearSelection': 'Clear Selection',
      'manage.filterAll': 'Filter: All',
      'manage.filterOptionAll': 'All Bookmarks',
      'manage.filterOptionUnused180': 'Not Opened via Bookmark in 6 Months',
      'manage.filterOptionUnused365': 'Not Opened via Bookmark in 1 Year',
      'manage.filterOptionAdded180': 'Added Before 6 Months',
      'manage.filterOptionAdded365': 'Added Before 1 Year',
      'manage.filterTooltipUnused': 'This tracks when the bookmark node was opened, not when the page itself was visited.',
      'manage.dismissTip': 'Dismiss tip',
      'manage.deleteSelection': 'Delete Selected',
      'ai.kicker': 'Bookmark AI',
      'ai.title': 'AI Organize',
      'ai.copy': 'Tell AI how you want to organize your bookmarks, review the plan, and decide whether to apply it.',
      'ai.suggestedActions': 'Suggested Actions',
      'ai.applicable': 'Applicable',
      'ai.requestTitle': 'Request',
      'ai.requestCopy': 'Tell AI how you want your bookmarks organized. Review the plan first, then decide whether to apply it.',
      'ai.pending': 'Pending',
      'ai.scope': 'Scope',
      'ai.scopeAll': 'All Bookmarks',
      'ai.scopeFiltered': 'Current Filtered Results',
      'ai.scopeSelected': 'Selected Bookmarks Only',
      'ai.scopeHintAll': 'This plan will be generated based on all bookmarks.',
      'ai.usageDefault': '8 AI organizes remaining today.',
      'ai.requestPlaceholder': 'Example: Organize my frontend study resources into one folder, keep useful categories, and make titles more consistent.',
      'ai.generate': 'AI Organize',
      'ai.apply': 'Apply Plan',
      'ai.undoLatest': 'Undo Latest Apply',
      'ai.summaryTitle': 'Plan Summary',
      'ai.summaryCopy': 'Review what will change first, then read AI’s reasoning and anything you should pay attention to.',
      'ai.judgement': 'AI Reasoning',
      'ai.summaryEmpty': 'No plan yet. Enter your request first and let AI prepare one.',
      'ai.historyTitle': 'AI History',
      'ai.historyCopy': 'Your previously generated plans are kept here so you can reopen them anytime.',
      'ai.previewTitle': 'Change Preview',
      'ai.previewCopy': 'Every step AI plans to execute is listed here. Nothing changes until you confirm.',
      'ai.privacy': 'Privacy notice',
      'ai.privacyCopy': 'Bookmark information is sent to the AI service only for this plan generation. The server does not store your bookmark content.',
      'common.cancel': 'Cancel',
      'common.save': 'Save',
      'common.undo': 'Undo',
      'common.deleteSelected': 'Delete Selected',
      'common.year': 'Year',
      'common.month': 'Month',
      'common.day': 'Day',
      'common.seconds': 'sec',
      'common.closeSettings': 'Close settings',
      'common.loadingBookmarks': 'Loading bookmarks...',
      'toast.settingsSaved': 'Scan settings saved',
      'toast.aiServiceUnavailable': 'The AI service is temporarily unavailable. Please try again later.',
      'toast.feedbackCopied': 'Feedback email copied',
      'toast.feedbackCopyFailed': 'Copy failed. Please copy the email manually'
    }
  };

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
    undoAction: null
  };

  init();

  async function init() {
    setupEventListeners();
    await loadSettings();
    applyTranslations();
    await loadBookmarks();
    await loadStoredScanResults();
    await refreshAiUsage();
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

  function t(key) {
    return I18N[state.locale]?.[key] || I18N['zh-CN'][key] || key;
  }

  function applyTranslations() {
    document.documentElement.lang = state.locale;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      node.setAttribute('placeholder', t(node.dataset.i18nPlaceholder));
    });
    document.querySelectorAll('[data-i18n-title]').forEach((node) => {
      node.textContent = t(node.dataset.i18nTitle);
      document.title = node.textContent;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
      node.setAttribute('aria-label', t(node.dataset.i18nAriaLabel));
    });
    document.querySelectorAll('[data-tooltip-key]').forEach((node) => {
      node.dataset.tooltip = t(node.dataset.tooltipKey);
    });
    if (!state.scanController.isRunning && !state.scanController.isPaused) {
      ui.scanStatusText.textContent = t('scan.waiting');
    }
    ui.toggleExpandText.textContent = state.isExpandedByDefault ? t('manage.collapseAll') : t('manage.expandAll');
    updateManageToolbar();
    ui.langZhBtn?.classList.toggle('is-active', state.locale === 'zh-CN');
    ui.langEnBtn?.classList.toggle('is-active', state.locale === 'en-US');
  }

  async function setLocale(locale) {
    if (locale !== 'zh-CN' && locale !== 'en-US') {
      return;
    }
    state.locale = locale;
    applyTranslations();
    renderAiPlan();
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
    renderPortrait();
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
        const title = node.title || '未命名文件夹';
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
      largestFolder: { title: '未命名文件夹', count: 0 },
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
      level: '新手收藏者',
      headline: '正在建立你的收藏画像',
      subtitle: '先从结构、域名和时间维度来理解你的书签。'
    };

    const domains = new Map();
    const keywords = new Map();
    const urlCounts = new Map();
    const bookmarks = Array.from(state.bookmarkMap.values());
    let httpsCount = 0;

    const directChildCount = new Map();
    bookmarks.forEach((bookmark) => {
      directChildCount.set(bookmark.parentId, (directChildCount.get(bookmark.parentId) || 0) + 1);
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
      try {
        const url = new URL(bookmark.url);
        domains.set(bookmark.domain, (domains.get(bookmark.domain) || 0) + 1);
        if (url.protocol === 'https:') {
          httpsCount += 1;
        }
      } catch (error) {}

      normalizeUrl(bookmark.url, urlCounts);
      tokenizeTitle(bookmark.title).forEach((word) => {
        keywords.set(word, (keywords.get(word) || 0) + 1);
      });

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

    urlCounts.forEach((count) => {
      if (count > 1) {
        stats.duplicateCount += 1;
      }
    });

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
    stats.topKeywords = Array.from(keywords.entries())
      .sort((left, right) => right[1] - left[1])
      .slice(0, 8)
      .map(([keyword, count]) => ({ keyword, count }));
    stats.topFolders = stats.topFolders
      .sort((left, right) => right.count - left.count)
      .slice(0, 6);
    stats.trendSeries.year = Array.from(yearMap.entries())
      .sort((left, right) => left[0].localeCompare(right[0]))
      .slice(-8)
      .map(([label, count]) => ({ label, count }));
    stats.trendSeries.month = Array.from(monthMap.entries())
      .sort((left, right) => left[0].localeCompare(right[0]))
      .slice(-12)
      .map(([label, count]) => ({ label, count }));
    stats.trendSeries.day = Array.from(dayMap.entries())
      .sort((left, right) => left[0].localeCompare(right[0]))
      .slice(-14)
      .map(([label, count]) => ({ label, count }));

    stats.tags = derivePortraitTags(stats.topDomains);

    const folderUsage = stats.totalFolders > 0 ? Math.min(stats.totalBookmarks / Math.max(stats.totalFolders, 1) / 18, 1) : 0;
    const emptyRatio = stats.totalFolders > 0 ? 1 - stats.emptyFolders / stats.totalFolders : 1;
    const depthScore = Math.min(stats.maxDepth / 5, 1);
    const domainScore = stats.totalBookmarks > 0 ? Math.min(stats.uniqueDomains / stats.totalBookmarks * 8, 1) : 0;
    stats.organizationScore = Number((((folderUsage * 3) + (emptyRatio * 3) + (depthScore * 2) + (domainScore * 2)) / 10 * 100).toFixed(0));

    const levelScore = (
      Math.min(stats.totalBookmarks / 300, 1) * 35 +
      Math.min(stats.uniqueDomains / 80, 1) * 20 +
      Math.min(stats.organizationScore / 100, 1) * 25 +
      Math.min(stats.collectionDays / 365, 1) * 20
    );

    if (levelScore > 80) {
      stats.level = state.locale === 'en-US' ? 'Systematic Collector' : '体系化收藏家';
      stats.headline = state.locale === 'en-US' ? 'Your bookmarks already form a stable information system' : '你的书签已经形成稳定的信息系统';
      stats.subtitle = state.locale === 'en-US' ? 'Wide-ranging sources, clear structure, and a consistent organizing habit.' : '来源广、结构清晰，而且有持续整理习惯。';
    } else if (levelScore > 55) {
      stats.level = state.locale === 'en-US' ? 'Advanced Organizer' : '进阶整理者';
      stats.headline = state.locale === 'en-US' ? 'You are intentionally building a personal knowledge base' : '你已经在有意识地构建个人资料库';
      stats.subtitle = state.locale === 'en-US' ? 'Reduce empty folders and duplicate links further to make it even cleaner.' : '再减少空文件夹和重复链接，画像会更完整。';
    } else if (levelScore > 30) {
      stats.level = state.locale === 'en-US' ? 'Exploratory Collector' : '探索型收藏者';
      stats.headline = state.locale === 'en-US' ? 'You are steadily expanding your inspiration pool' : '你更像在不断扩充灵感池';
      stats.subtitle = state.locale === 'en-US' ? 'Your collection is broad, but structure and deduplication still have room to improve.' : '收藏范围不错，但结构和去重还有优化空间。';
    } else {
      stats.level = state.locale === 'en-US' ? 'New Collector' : '新手收藏者';
      stats.headline = state.locale === 'en-US' ? 'Your collection is still in a rapid accumulation stage' : '你的收藏还处在快速积累阶段';
      stats.subtitle = state.locale === 'en-US' ? 'Building a clearer folder structure first will noticeably improve usability.' : '先建立更清晰的文件夹体系，会明显提升可用性。';
    }

    return stats;
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
    setNodeText(ui.portraitHttpsRatio, `${stats.httpsRatio}%`);
    setNodeText(ui.portraitActionableIssues, String(actionableIssues));
    setNodeText(ui.portraitActionableMeta, state.locale === 'en-US'
      ? `${stats.duplicateCount} duplicate links, ${stats.emptyFolders} empty folders`
      : `${stats.duplicateCount} 个重复链接，${stats.emptyFolders} 个空文件夹`);
    setNodeText(ui.portraitLargestFolder, stats.largestFolder.title);
    setNodeText(ui.portraitLargestFolderMeta, state.locale === 'en-US'
      ? `${stats.largestFolder.count} direct child bookmarks`
      : `${stats.largestFolder.count} 个直接子书签`);
    setNodeText(ui.portraitEmptyFolders, String(stats.emptyFolders));
    setNodeText(ui.portraitMaxDepth, String(stats.maxDepth));
    setNodeText(ui.portraitAvgPerFolder, String(stats.avgPerFolder));
    setNodeText(ui.portraitDuplicateUrls, String(stats.duplicateCount));
    setNodeText(ui.portraitDuplicateMeta, state.locale === 'en-US'
      ? `${stats.duplicatePercentage}% of total`
      : `占比 ${stats.duplicatePercentage}%`);
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
        : `<div class="result-empty-state">${state.locale === 'en-US' ? 'Not enough data yet to infer interest tags.' : '还没有足够的数据来推断兴趣标签。'}</div>`;
    }

    if (ui.portraitDomainList) {
      ui.portraitDomainList.innerHTML = stats.topDomains.length > 0
        ? stats.topDomains.map((item, index) => `
        <div class="portrait-domain-item ${index === 0 ? 'primary' : ''}">
          <div class="portrait-domain-rank">#${index + 1}</div>
          <div class="portrait-domain-copy">
            <div class="portrait-domain-name">${escapeHtml(item.domain)}</div>
            <div class="portrait-domain-meta">${state.locale === 'en-US' ? `${item.count} bookmarks · ${item.percentage}%` : `${item.count} 条书签 · ${item.percentage}%`}</div>
          </div>
          <button class="portrait-inline-action" type="button" data-domain="${escapeHtml(item.domain)}">${state.locale === 'en-US' ? 'View' : '查看'}</button>
        </div>
      `).join('')
        : `<div class="result-empty-state">${state.locale === 'en-US' ? 'No domain data yet.' : '暂无域名数据。'}</div>`;
      ui.portraitDomainList.querySelectorAll('[data-domain]').forEach((button) => {
        button.addEventListener('click', () => {
          const domain = button.dataset.domain || '';
          focusManageView(domain, domain ? (state.locale === 'en-US' ? `Focused on bookmarks related to "${domain}"` : `已定位到域名“${domain}”相关书签`) : (state.locale === 'en-US' ? 'Switched to bookmark management' : '已切换到书签整理'));
        });
      });
    }

    if (ui.portraitKeywords) {
      ui.portraitKeywords.innerHTML = stats.topKeywords.length > 0
        ? stats.topKeywords.map((item) => `<span class="portrait-keyword">${escapeHtml(item.keyword)}<small>${item.count}</small></span>`).join('')
        : `<div class="result-empty-state">${state.locale === 'en-US' ? 'No high-frequency keywords yet.' : '暂无高频关键词。'}</div>`;
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
      button.classList.toggle('is-active', state.portraitTrendGranularity === value);
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

  async function renderPortraitTrend(trend, granularity) {
    if (trend.length === 0) {
      ui.portraitTrendChart.innerHTML = `<div class="result-empty-state">${state.locale === 'en-US' ? 'Not enough time data yet.' : '暂无足够的时间数据。'}</div>`;
      if (state.portraitChart) {
        state.portraitChart.dispose();
        state.portraitChart = null;
      }
      return;
    }

    try {
      await loadEcharts();
    } catch (error) {
      ui.portraitTrendChart.innerHTML = `<div class="result-empty-state">${state.locale === 'en-US' ? 'Failed to load chart library.' : '图表库加载失败。'}</div>`;
      return;
    }

    if (!state.portraitChart) {
      state.portraitChart = echarts.init(ui.portraitTrendChart);
    }

    const xAxisLabels = trend.map((item) => formatTrendLabel(item.label, granularity));
    const seriesData = trend.map((item) => item.count);

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
          const unit = granularity === 'year' ? t('common.year') : granularity === 'month' ? t('common.month') : t('common.day');
          return state.locale === 'en-US'
            ? `${point.axisValue}<br/>${point.data} bookmarks / ${unit}`
            : `${point.axisValue}<br/>${point.data} 条书签 / ${unit}`;
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
      ui.portraitFolderList.innerHTML = `<div class="result-empty-state">${state.locale === 'en-US' ? 'No folder ranking data yet.' : '暂无文件夹排行数据。'}</div>`;
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
        <button class="portrait-inline-action" type="button" data-folder="${escapeHtml(folder.title)}">${state.locale === 'en-US' ? 'View' : '查看'}</button>
      </div>
    `).join('');
    ui.portraitFolderList.querySelectorAll('[data-folder]').forEach((button) => {
      button.addEventListener('click', () => {
        const title = button.dataset.folder || '';
        focusManageView(title, title ? (state.locale === 'en-US' ? `Focused on folder "${title}"` : `已定位到文件夹“${title}”`) : (state.locale === 'en-US' ? 'Switched to bookmark management' : '已切换到书签整理'));
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
        : `<span class="portrait-share-tag">${state.locale === 'en-US' ? 'Still organizing' : '持续整理中'}</span>`;
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
      `我的书签洞察：${stats.level}`,
      stats.headline,
      `总书签 ${stats.totalBookmarks} / 唯一域名 ${stats.uniqueDomains} / 组织分 ${stats.organizationScore} / 收藏天数 ${stats.collectionDays}`,
      `兴趣标签：${stats.tags.join('、') || '持续整理中'}`
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      showToast('画像摘要已复制', 'success');
    } catch (error) {
      showToast('复制失败', 'error');
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
    ui.refreshScanStatsBtn.disabled = true;
    try {
      await loadBookmarks();
      await syncScanStorageWithTree();
      await loadStoredScanResults();
      showToast('扫描统计已刷新', 'success');
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

  async function startQuickScan() {
    if (state.scanController.isRunning) {
      return;
    }

    state.activeTab = 'scan';
    renderTabs();
    resetScanRuntime();

    const bookmarks = Array.from(state.bookmarkMap.values());
    state.scanController.total = bookmarks.length;
    state.scanController.startTime = Date.now();
    state.scanController.isRunning = true;
    state.scanController.errorCount = 0;
    state.invalidLinksMap = {};
    state.selectedScanIds.clear();

    ui.pauseBtn.classList.remove('hidden');
    ui.stopBtn.classList.remove('hidden');
    ui.startScanBtn.disabled = true;
    ui.scanStatusText.textContent = '正在快速扫描...';
    ui.scannedCount.textContent = '0';
    ui.scanInvalidCount.textContent = '0';
    ui.scanDuration.textContent = '0s';
    updateProgressRing(0);
    renderScanResults();

    if (bookmarks.length === 0) {
      finishScan('没有可扫描的书签', 'warning');
      return;
    }

    state.scanController.timer = setInterval(updateScanDuration, 1000);

    const queue = bookmarks.slice();
    let cursor = 0;

    const takeNextBookmark = async () => {
      const nextIndex = cursor;
      const bookmark = queue[nextIndex];
      cursor += 1;

      if (!bookmark) {
        return null;
      }

      if (nextIndex > 0 && nextIndex % CONFIG.BATCH_SIZE === 0) {
        await sleep(CONFIG.BATCH_DELAY_MS);
      }

      return bookmark;
    };

    const worker = async () => {
      while (!state.scanController.isCancelled) {
        if (state.scanController.isPaused) {
          await sleep(120);
          continue;
        }

        const bookmark = await takeNextBookmark();
        if (!bookmark) {
          return;
        }

        const result = await validateUrl(bookmark.url);
        if (state.scanController.isCancelled) {
          return;
        }

        if (result.error) {
          state.scanController.errorCount += 1;
        }

        if (result.isInvalid) {
          state.invalidLinksMap[bookmark.id] = {
            id: bookmark.id,
            title: bookmark.title,
            url: bookmark.url,
            path: bookmark.path,
            domain: bookmark.domain
          };
        }

        state.scanController.completed += 1;
        ui.scannedCount.textContent = String(state.scanController.completed);
        ui.scanInvalidCount.textContent = String(Object.keys(state.invalidLinksMap).length);
        updateProgressRing((state.scanController.completed / state.scanController.total) * 100);
      }
    };

    try {
      await Promise.all(Array.from({ length: CONFIG.CONCURRENCY }, () => worker()));
    } finally {
      if (state.scanController.isCancelled) {
        finishScan(t('scan.stopped'), 'warning');
        return;
      }

      state.scanTime = new Date().toISOString();
      await persistScanResults();
      const invalidCount = Object.keys(state.invalidLinksMap).length;
      const errorCount = state.scanController.errorCount;
      finishScan(
        buildScanSummary(invalidCount, errorCount),
        errorCount > 0 || invalidCount > 0 ? 'warning' : 'success'
      );
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
      return `扫描异常，${errorCount} 条链接未完成校验`;
    }

    if (invalidCount > 0 && errorCount > 0) {
      return `扫描完成，发现 ${invalidCount} 个失效书签，另有 ${errorCount} 条校验异常`;
    }

    if (invalidCount > 0) {
      return `扫描完成，发现 ${invalidCount} 个失效书签`;
    }

    if (errorCount > 0) {
      return `扫描完成，但有 ${errorCount} 条链接校验异常`;
    }

    return '扫描完成，未发现失效书签';
  }

  function togglePauseScan() {
    if (!state.scanController.isRunning) {
      return;
    }

    state.scanController.isPaused = !state.scanController.isPaused;
    ui.pauseBtn.textContent = state.scanController.isPaused ? t('scan.resume') : t('scan.pause');
    ui.scanStatusText.textContent = state.scanController.isPaused ? t('scan.paused') : t('scan.resuming');
    showToast(state.scanController.isPaused ? t('scan.paused') : t('scan.resumed'), 'info');
  }

  function stopScan() {
    if (!state.scanController.isRunning) {
      return;
    }

    state.scanController.isCancelled = true;
    state.scanController.isPaused = false;
    chrome.runtime.sendMessage({ type: 'cancelScan' });
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
    ui.scanDuration.textContent = minutes > 0 ? `${minutes}分${seconds}秒` : `${seconds}秒`;
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
      ? (state.locale === 'en-US'
        ? `Last scan: ${new Date(state.scanTime).toLocaleString('en-US')}`
        : `最近扫描时间：${new Date(state.scanTime).toLocaleString('zh-CN')}`)
      : t('scan.notStarted');

    renderScanList(ui.invalidLinksList, invalidBookmarks, 'bookmark');
    renderScanList(ui.emptyFoldersList, state.emptyFolders, 'folder');
    updateScanSelectionUi();
  }

  function updateScanSelectionUi() {
    ui.deleteSelectedScanBtn.disabled = state.selectedScanIds.size === 0;
    ui.deleteSelectedEmptyFoldersBtn.disabled = state.selectedEmptyFolderIds.size === 0;
    ui.selectAllEmptyFoldersBtn.textContent = state.emptyFolders.length > 0 && state.emptyFolders.every((folder) => state.selectedEmptyFolderIds.has(folder.id))
      ? (state.locale === 'en-US' ? 'Clear All' : '取消全选')
      : t('scan.selectAllEmptyFolders');
  }

  function renderScanList(container, items, type) {
    if (items.length === 0) {
      container.innerHTML = `<div class="result-empty-state">${state.locale === 'en-US' ? 'No items' : '暂无内容'}</div>`;
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
              ? '<span class="item-avatar item-avatar-folder">📁</span>'
              : '<img class="item-favicon" alt="" loading="lazy">'}
            <div class="scan-result-title-wrap">
              <div class="scan-result-title">${escapeHtml(item.title || (state.locale === 'en-US' ? 'Untitled' : '未命名'))}</div>
              ${type === 'bookmark' ? `<div class="scan-result-domain">${escapeHtml(item.domain || getDomain(item.url))}</div>` : ''}
            </div>
          </div>
          <div class="scan-result-meta">${escapeHtml(type === 'folder' ? item.path.join(' / ') : `${item.domain || getDomain(item.url)} · ${item.path.join(' / ') || (state.locale === 'en-US' ? 'Root' : '根目录')}`)}</div>
        </div>
        <div class="scan-result-actions">
          ${type === 'bookmark' ? `<button class="btn btn-ghost btn-sm result-open-btn" type="button">${state.locale === 'en-US' ? 'Open' : '打开'}</button>` : ''}
          <button class="btn btn-secondary btn-sm result-manage-btn" type="button">${state.locale === 'en-US' ? 'Manage' : '去整理'}</button>
          <button class="btn btn-danger btn-sm result-delete-btn" type="button">${state.locale === 'en-US' ? 'Delete' : '删除'}</button>
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
          showToast(state.locale === 'en-US' ? 'Invalid bookmark deleted' : '已删除失效书签', 'error');
        } else {
          state.selectedEmptyFolderIds.delete(item.id);
          await removeFoldersByIds([item.id]);
          renderScanResults();
          showToast(state.locale === 'en-US' ? 'Empty folder deleted' : '已删除空文件夹', 'error');
        }
      });

      container.appendChild(row);
    });
  }

  function toggleSelectAllInvalid() {
    const ids = Object.keys(state.invalidLinksMap);
    if (ids.length === 0) {
      showToast(state.locale === 'en-US' ? 'There are no issue bookmarks right now.' : '当前没有问题书签', 'warning');
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
      showToast(state.locale === 'en-US' ? 'Select invalid bookmarks to delete first.' : '请先选择要删除的失效书签', 'warning');
      return;
    }

    if (!confirm(state.locale === 'en-US' ? `Delete ${ids.length} selected invalid bookmarks?` : `确定要删除选中的 ${ids.length} 个失效书签吗？`)) {
      return;
    }

    await removeBookmarksByIds(ids, false);
    await loadBookmarks();
    await persistScanResults();
    await loadStoredScanResults();
    showToast(state.locale === 'en-US' ? `Deleted ${ids.length} invalid bookmarks` : `已删除 ${ids.length} 个失效书签`, 'error');
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
    showToast(state.locale === 'en-US' ? 'Scan results cleared' : '已清空扫描结果', 'success');
  }

  async function refreshBookmarks() {
    ui.refreshBtn.disabled = true;
    try {
      await loadBookmarks();
      await loadStoredScanResults();
      showToast(state.locale === 'en-US' ? 'Bookmarks refreshed' : '书签列表已刷新', 'success');
    } finally {
      ui.refreshBtn.disabled = false;
    }
  }

  function renderManageTree() {
    ui.bookmarkTree.innerHTML = '';

    if (state.rootNodes.length === 0) {
      ui.bookmarkTree.innerHTML = `<div class="empty-tree-state">${state.locale === 'en-US' ? 'No bookmarks yet.' : '暂无书签。'}</div>`;
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
      ui.bookmarkTree.innerHTML = `<div class="empty-tree-state">${state.locale === 'en-US' ? 'No bookmarks match the current filter.' : '当前筛选条件下没有匹配书签。'}</div>`;
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

      const header = document.createElement('button');
      header.type = 'button';
      header.className = `folder-header ${showChildren ? 'expanded' : ''}`;
      header.draggable = !isEditing;
      header.innerHTML = `
        <span class="folder-main">
          <span class="folder-toggle-icon">▸</span>
          <span class="item-avatar item-avatar-folder">📁</span>
          ${isEditing
            ? `<span class="rename-editor rename-editor-inline"><input class="rename-input" type="text" value="${escapeHtml(editingValue)}" aria-label="${state.locale === 'en-US' ? 'Edit folder name' : '编辑文件夹名称'}"></span>`
            : `<span class="folder-title">${escapeHtml(folder?.title || (state.locale === 'en-US' ? 'Untitled Folder' : '未命名文件夹'))}</span>`}
          <span class="folder-meta">${escapeHtml((folder?.path || []).join(' / '))}</span>
        </span>
        <span class="folder-side">
          ${isEmptyFolder ? `<span class="bookmark-chip bookmark-chip-warning">${state.locale === 'en-US' ? 'Empty Folder' : '空文件夹'}</span>` : ''}
          <span class="folder-count">${childCount}</span>
          <span class="folder-actions">
            ${isEditing
              ? `<button class="btn-action btn-save" type="button">${state.locale === 'en-US' ? 'Save' : '保存'}</button><button class="btn-action btn-cancel" type="button">${state.locale === 'en-US' ? 'Cancel' : '取消'}</button>`
              : `<button class="btn-action btn-select-folder" type="button" ${hasDirectBookmarks ? '' : 'disabled'} title="${hasDirectBookmarks ? (state.locale === 'en-US' ? `Select ${directBookmarkIds.length} direct bookmarks in this folder` : `选中当前文件夹下的 ${directBookmarkIds.length} 条直属书签`) : (state.locale === 'en-US' ? 'No selectable bookmarks in this folder' : '当前文件夹下没有可选书签')}">${hasDirectBookmarks && directBookmarkIds.every((id) => state.selectedManageIds.has(id)) ? (state.locale === 'en-US' ? 'Clear Selection' : '取消选择') : (state.locale === 'en-US' ? 'Select Bookmarks' : '选中书签')}</button><button class="btn-action btn-create" type="button">${state.locale === 'en-US' ? 'New Folder' : '新建文件夹'}</button><button class="btn-action btn-rename" type="button">${state.locale === 'en-US' ? 'Rename' : '重命名'}</button>`}
            ${isEmptyFolder ? `<button class="btn-action btn-delete" type="button">${state.locale === 'en-US' ? 'Delete' : '删除'}</button>` : ''}
          </span>
        </span>
      `;

      const content = document.createElement('div');
      content.className = `folder-children ${showChildren ? 'show' : ''}`;
      children.forEach((child) => content.appendChild(child));

      header.addEventListener('click', () => {
        if (isEditing) {
          return;
        }
        if (isFiltering) {
          const nextShown = !content.classList.contains('show');
          header.classList.toggle('expanded', nextShown);
          content.classList.toggle('show', nextShown);
          return;
        }
        const nextExpanded = !state.expandedFolderIds.has(node.id);
        if (nextExpanded) {
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
        } else {
          state.expandedFolderIds.delete(node.id);
        }
        header.classList.toggle('expanded', nextExpanded);
        content.classList.toggle('show', nextExpanded);
      });
      header.addEventListener('dragover', (event) => {
        if (!canDropDraggedItemIntoFolder(node.id)) {
          return;
        }
        event.preventDefault();
        header.classList.add('drop-target');
      });
      header.addEventListener('dragleave', () => header.classList.remove('drop-target'));
      header.addEventListener('drop', async (event) => {
        event.preventDefault();
        header.classList.remove('drop-target');
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
      });
      header.addEventListener('dragend', () => {
        clearDragState();
      });
      header.querySelector('.btn-rename')?.addEventListener('click', (event) => {
        event.stopPropagation();
        startInlineRename('folder', node.id, folder?.title || (state.locale === 'en-US' ? 'Untitled Folder' : '未命名文件夹'));
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
        <input type="checkbox" class="bookmark-checkbox" ${state.selectedManageIds.has(bookmark.id) ? 'checked' : ''} aria-label="${state.locale === 'en-US' ? `Select ${escapeHtml(bookmark.title)}` : `选择 ${escapeHtml(bookmark.title)}`}">
      </div>
      <div class="bookmark-drag-handle" aria-hidden="true" title="${escapeHtml(getBookmarkDragHint(bookmark.id))}">⋮⋮</div>
      <div class="bookmark-content">
        <div class="bookmark-content-top">
          <img class="bookmark-favicon bookmark-favicon-lg" alt="" loading="lazy">
          ${isEditing
            ? `<label class="rename-editor"><input class="rename-input" type="text" value="${escapeHtml(editingValue)}" aria-label="${state.locale === 'en-US' ? 'Edit bookmark name' : '编辑书签名称'}"></label>`
            : `<div class="bookmark-title">${escapeHtml(bookmark.title)}</div>`}
          ${state.invalidLinksMap[bookmark.id] ? `<span class="bookmark-chip bookmark-chip-danger">${state.locale === 'en-US' ? 'Invalid' : '失效'}</span>` : ''}
        </div>
        <div class="bookmark-url">${escapeHtml(bookmark.url)}</div>
        <div class="bookmark-meta-line">
          <span class="bookmark-domain">${escapeHtml(bookmark.domain)}</span>
          <span class="bookmark-path">${escapeHtml(bookmark.path.join(' / ') || (state.locale === 'en-US' ? 'Root' : '根目录'))}</span>
        </div>
      </div>
      <div class="bookmark-actions">
        <button class="btn-action btn-open" type="button">${state.locale === 'en-US' ? 'Open' : '打开'}</button>
        ${isEditing
          ? `<button class="btn-action btn-save" type="button">${state.locale === 'en-US' ? 'Save' : '保存'}</button><button class="btn-action btn-cancel" type="button">${state.locale === 'en-US' ? 'Cancel' : '取消'}</button>`
          : `<button class="btn-action btn-rename" type="button">${state.locale === 'en-US' ? 'Rename' : '重命名'}</button>`}
        <button class="btn-action btn-delete" type="button">${state.locale === 'en-US' ? 'Delete' : '删除'}</button>
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
      if (!confirm(`确定要删除 “${bookmark.title}” 吗？`)) {
        return;
      }
      await removeBookmarksByIds([bookmark.id], true);
      await loadBookmarks();
      await loadStoredScanResults();
      showToast('书签已删除', 'error');
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
    });
    article.addEventListener('dragend', () => {
      clearDragState();
    });
    article.addEventListener('dragover', (event) => {
      if (!state.draggedItem || (state.draggedItem.type !== 'bookmark' && state.draggedItem.type !== 'bookmark-group')) {
        return;
      }
      event.preventDefault();
      article.classList.add('drop-before');
    });
    article.addEventListener('dragleave', () => article.classList.remove('drop-before'));
    article.addEventListener('drop', async (event) => {
      event.preventDefault();
      article.classList.remove('drop-before');
      await moveDraggedBookmarkBefore(bookmark.id);
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
        return state.locale === 'en-US' ? 'Filter: Duplicates' : '筛选：重复链接';
      case 'added_before_180d':
        return state.locale === 'en-US' ? 'Filter: Added Before 6 Months' : '筛选：半年前添加';
      case 'added_before_365d':
        return state.locale === 'en-US' ? 'Filter: Added Before 1 Year' : '筛选：一年前添加';
      case 'unused_180d':
        return state.locale === 'en-US' ? 'Filter: Not Opened via Bookmark in 6 Months' : '筛选：最近半年未打开';
      case 'unused_365d':
        return state.locale === 'en-US' ? 'Filter: Not Opened via Bookmark in 1 Year' : '筛选：最近一年未打开';
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
      ? (state.locale === 'en-US' ? `Focused on folders related to "${title}"` : `已定位到与“${title}”相关的目录`)
      : (state.locale === 'en-US' ? 'Switched to bookmark management' : '已切换到书签整理'));
  }

  function openDuplicateBookmarksFromPortrait() {
    switchTab('manage');
    if (ui.bookmarkSearchInput) {
      ui.bookmarkSearchInput.value = '';
    }
    state.searchTerm = '';
    setManageFilter('duplicates');
    showToast(state.locale === 'en-US' ? 'Duplicate links are filtered. You can continue organizing or deleting them.' : '已筛选出重复链接，您可以继续整理或删除', 'info');
  }

  function openEmptyFoldersFromPortrait() {
    switchTab('scan');
    window.setTimeout(() => {
      ui.emptyFoldersList?.closest('.result-column')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    showToast(state.locale === 'en-US' ? 'Switched to the empty-folder results section.' : '已切换到空文件夹结果区', 'info');
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
    showToast(state.locale === 'en-US' ? 'Expanded folders for easier inspection of deeper levels.' : '已展开目录，方便查看较深层级的文件夹结构', 'info');
  }

  function openBookmarkFromScan(item) {
    const query = item.title || item.domain || '';
    focusManageView(query, query
      ? (state.locale === 'en-US' ? `Focused on bookmarks related to "${query}"` : `已定位到与“${query}”相关的书签`)
      : (state.locale === 'en-US' ? 'Switched to bookmark management' : '已切换到书签整理'));
  }

  function openFolderFromScan(item) {
    const query = item.title || '';
    focusManageView(query, query
      ? (state.locale === 'en-US' ? `Focused on folder "${query}"` : `已定位到文件夹“${query}”`)
      : (state.locale === 'en-US' ? 'Switched to bookmark management' : '已切换到书签整理'));
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
  }

  function getManageSelectionSummary(selectedCount) {
    if (selectedCount <= 0) {
      return t('manage.selectionNoneHint');
    }
    if (selectedCount === 1) {
      return state.locale === 'en-US'
        ? '1 bookmark selected. Drag it into a folder to move.'
        : '已选 1 个书签，可拖到文件夹中移动';
    }
    return state.locale === 'en-US'
      ? `${selectedCount} bookmarks selected. Drag any selected item to move them together.`
      : `已选 ${selectedCount} 个书签，可拖动其中任意一条一起移动`;
  }

  function getBookmarkDragHint(bookmarkId) {
    if (state.selectedManageIds.has(bookmarkId) && state.selectedManageIds.size > 1) {
      return state.locale === 'en-US'
        ? `Drag to move ${state.selectedManageIds.size} selected bookmarks together`
        : `拖动可一起移动 ${state.selectedManageIds.size} 个已选书签`;
    }
    return state.locale === 'en-US'
      ? 'Drag to reorder, or drop into a folder to move'
      : '拖动可调整位置，或拖到文件夹中移动';
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
        ? (state.locale === 'en-US' ? 'Select Bookmarks' : '选中书签')
        : (state.locale === 'en-US' ? 'Clear Selection' : '取消选择');
      triggerButton.title = allSelected
        ? (state.locale === 'en-US'
          ? `Select ${bookmarkIds.length} direct bookmarks in this folder`
          : `选中当前文件夹下的 ${bookmarkIds.length} 条直属书签`)
        : (state.locale === 'en-US'
          ? `Clear ${bookmarkIds.length} direct bookmarks selected in this folder`
          : `取消当前文件夹下的 ${bookmarkIds.length} 条直属书签`);
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
      ? (state.locale === 'en-US'
        ? `${selectedCount} bookmarks selected. Drag any selected item to move them together into a folder or target position.`
        : `提示：已选 ${selectedCount} 个书签，拖动其中任意一条即可一起移动到文件夹或目标位置。`)
      : (state.locale === 'en-US'
        ? 'Tip: drag items directly to reorder. After selecting multiple bookmarks, drag any selected one to move them together.'
        : '提示：支持直接拖拽排序；勾选多条后，拖动其中任意一条即可一起移动。');
    ui.manageTipBanner.classList.remove('hidden');
  }

  async function dismissManageTip() {
    state.manageDragTipDismissed = true;
    ui.manageTipBanner?.classList.add('hidden');
    await new Promise((resolve) => chrome.storage.local.set({ manageDragTipDismissed: true }, resolve));
  }

  function collectAiScope() {
    const scopedBookmarks = Array.from(state.bookmarkMap.values()).filter((bookmark) => {
      if (state.aiScopeMode === 'filtered') {
        return matchesSearch(bookmark.searchText) && passesManageFilter(bookmark);
      }
      if (state.aiScopeMode === 'selected') {
        return state.selectedManageIds.has(bookmark.id);
      }
      return true;
    });

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

    const context = collectAiScope();
    const visibleActions = state.aiPlan.validatedActions.filter((item) => !isAiActionDismissed(item.actionId));
    const validCount = visibleActions.filter((item) => item.executable).length;
    const isBusy = state.aiPlan.status === 'loading' || state.aiPlan.status === 'applying';
    ui.aiScopePicker?.querySelectorAll('[data-ai-scope]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.aiScope === state.aiScopeMode);
    });
    if (ui.aiScopeHint) {
      ui.aiScopeHint.textContent = context.scopeDescription;
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
      ? `<span class="btn-spinner" aria-hidden="true"></span><span>${state.locale === 'en-US' ? 'Working...' : '整理中...'}</span>`
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
      return state.locale === 'en-US' ? 'Loading today’s AI usage quota...' : '正在读取今日 AI 整理额度...';
    }
    const { remaining, limit, used } = state.aiUsage;
    if (remaining <= 0) {
      return state.locale === 'en-US'
        ? `Today’s AI quota is used up (${used}/${limit}). Please try again tomorrow.`
        : `今日 AI 整理次数已用完（${used}/${limit}），请明天再试。`;
    }
    return state.locale === 'en-US'
      ? `${remaining} AI requests remaining today (${used}/${limit} used).`
      : `今日 AI 整理剩余 ${remaining} 次（已用 ${used}/${limit}）。`;
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
      ? (state.locale === 'en-US' ? 'Undoing...' : '撤销中...')
      : (undo.lastError
        ? (state.locale === 'en-US' ? 'Retry Undo Latest Apply' : '重试撤销最近一次应用')
        : t('ai.undoLatest'));
  }

  function renderAiHistory() {
    if (!ui.aiHistoryList) {
      return;
    }
    if (!state.aiHistory.length) {
      ui.aiHistoryList.innerHTML = `<div class="ai-empty-state">${state.locale === 'en-US' ? 'Your generated plans will appear here for review later.' : '你生成过的整理方案会保存在这里，方便随时回看。'}</div>`;
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
              ${isReadonly ? `<span class="ai-history-readonly">${state.locale === 'en-US' ? 'Read Only' : '只读'}</span>` : ''}
            </div>
            <div class="ai-history-side">
              <span class="ai-history-time">${escapeHtml(timeText)}</span>
              <button class="ai-history-delete" type="button" aria-label="${state.locale === 'en-US' ? 'Delete history item' : '删除历史任务'}" data-ai-history-delete="${escapeHtml(item.id)}">${state.locale === 'en-US' ? 'Delete' : '删除'}</button>
            </div>
          </div>
          <div class="ai-history-title">${escapeHtml(item.instruction || (state.locale === 'en-US' ? 'Untitled organize task' : '未命名整理任务'))}</div>
          <div class="ai-history-meta">${escapeHtml(state.locale === 'en-US' ? `${actionCount} actions · ${validCount} applicable · ${formatAiScopeLabel(item.scopeLabel)}` : `${actionCount} 个动作 · ${validCount} 个可应用 · ${formatAiScopeLabel(item.scopeLabel)}`)}</div>
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
        ? (state.locale === 'en-US' ? 'AI is generating the result' : 'AI 正在生成结果')
        : (state.locale === 'en-US' ? 'AI is analyzing bookmark structure' : 'AI 正在分析书签结构');
      const subtitle = state.aiLoadingState.phase === 'generating'
        ? (state.locale === 'en-US' ? 'Composing structured organize actions...' : '正在合成结构化整理动作...')
        : (state.locale === 'en-US' ? 'Reading bookmark nodes and path information...' : '正在读取书签节点与路径信息...');
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
      parts.push({ label: state.locale === 'en-US' ? 'Create Folders' : '新增文件夹', value: state.locale === 'en-US' ? `${counts.create}` : `${counts.create} 个` });
    }
    if (counts.move > 0) {
      parts.push({ label: state.locale === 'en-US' ? 'Move Bookmarks' : '移动书签', value: state.locale === 'en-US' ? `${counts.move}` : `${counts.move} 条` });
    }
    if (counts.rename > 0) {
      parts.push({ label: state.locale === 'en-US' ? 'Rename Titles' : '统一标题', value: state.locale === 'en-US' ? `${counts.rename}` : `${counts.rename} 个` });
    }
    if (counts.other > 0) {
      parts.push({ label: state.locale === 'en-US' ? 'Other Actions' : '其他动作', value: state.locale === 'en-US' ? `${counts.other}` : `${counts.other} 个` });
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
        state.locale === 'en-US' ? 'Scanning bookmark titles and folder structure...' : '扫描书签标题与层级结构...',
        state.locale === 'en-US' ? 'Extracting high-frequency domains and duplicate patterns...' : '提取高频域名与重复模式...',
        state.locale === 'en-US' ? 'Checking reusable folders and target paths...' : '检查可复用文件夹与目标路径...'
      ];
    }

    return bookmarks.map((bookmark) => {
      const pathLabel = Array.isArray(bookmark.path) && bookmark.path.length
        ? bookmark.path.slice(-2).join(' / ')
        : (state.locale === 'en-US' ? 'Uncategorized path' : '未分类路径');
      const domainLabel = bookmark.url ? getDomain(bookmark.url) : (state.locale === 'en-US' ? 'Local bookmark' : '本地书签');
      return `${bookmark.title}  ·  ${domainLabel}  ·  ${pathLabel}`;
    });
  }

  function getAiStatusLabel() {
    switch (state.aiPlan.status) {
      case 'loading':
        return state.locale === 'en-US' ? 'Generating' : '生成中';
      case 'ready':
        return state.locale === 'en-US' ? 'Review' : '待确认';
      case 'applying':
        return state.locale === 'en-US' ? 'Applying' : '应用中';
      case 'applied':
        return state.locale === 'en-US' ? 'Applied' : '已应用';
      case 'error':
        return state.locale === 'en-US' ? 'Failed' : '生成失败';
      default:
        return state.locale === 'en-US' ? 'Pending' : '待生成';
    }
  }

  function getAiHistoryStatusLabel(status) {
    switch (status) {
      case 'applied':
        return state.locale === 'en-US' ? 'Applied' : '已应用';
      case 'error':
        return state.locale === 'en-US' ? 'Failed' : '失败';
      case 'loading':
        return state.locale === 'en-US' ? 'Generating' : '生成中';
      default:
        return state.locale === 'en-US' ? 'Generated' : '已生成';
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

  function formatAiScopeLabel(label) {
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
    const suffix = state.locale === 'en-US'
      ? `This request will send ${bookmarkCount} bookmarks and ${folderCount} folders to AI.`
      : `本次会发送 ${bookmarkCount} 个书签、${folderCount} 个文件夹给 AI。`;
    switch (state.aiScopeMode) {
      case 'filtered':
        return state.locale === 'en-US'
          ? `The plan will be generated from the current filtered results in Management. ${suffix}`
          : `将基于管理页当前筛选结果生成整理方案。${suffix}`;
      case 'selected':
        return state.locale === 'en-US'
          ? `The plan will be generated only from your currently selected bookmarks. ${suffix}`
          : `将只基于你当前选中的书签生成整理方案。${suffix}`;
      default:
        return state.locale === 'en-US'
          ? `The plan will be generated from all bookmarks. ${suffix}`
          : `将基于全部书签生成整理方案。${suffix}`;
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
      return state.locale === 'en-US' ? 'Just now' : '刚刚';
    }
    const date = new Date(timestamp);
    const now = new Date();
    const sameDay = date.toDateString() === now.toDateString();
    const localeTag = state.locale === 'en-US' ? 'en-US' : 'zh-CN';
    const timeText = date.toLocaleTimeString(localeTag, { hour: '2-digit', minute: '2-digit' });
    return sameDay
      ? (state.locale === 'en-US' ? `Today ${timeText}` : `今天 ${timeText}`)
      : `${date.getMonth() + 1}/${date.getDate()} ${timeText}`;
  }

  function renderAiWarnings() {
    ui.aiWarningList.innerHTML = '';
    if (state.aiPlan.status === 'loading' || state.aiPlan.status === 'idle') {
      return;
    }
    if (!state.aiPlan.warnings.length) {
      return;
    }

    const title = document.createElement('div');
    title.className = 'ai-warning-title';
    title.textContent = state.locale === 'en-US' ? 'Attention Needed' : '需要留意';
    ui.aiWarningList.appendChild(title);

    state.aiPlan.warnings.forEach((warning) => {
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
      ui.aiActionList.innerHTML = `<div class="ai-empty-state">${state.locale === 'en-US' ? 'Once a plan is generated, every AI step will be listed here.' : '生成方案后，这里会列出 AI 准备执行的每一步。'}</div>`;
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
            <div class="ai-action-group-meta">${escapeHtml(state.locale === 'en-US' ? `${group.items.length} actions` : `${group.items.length} 条动作`)}</div>
          </div>
          ${group.items.length > 4 ? `<button class="btn btn-ghost btn-sm ai-action-group-toggle" type="button" data-ai-group-toggle="${escapeHtml(group.key)}">${expanded ? (state.locale === 'en-US' ? 'Collapse' : '收起') : (state.locale === 'en-US' ? `Show ${hiddenCount} more` : `展开剩余 ${hiddenCount} 条`)}</button>` : ''}
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
          <span class="ai-action-badge status-${completed ? 'complete' : readonly ? 'readonly' : dismissed ? 'dismissed' : item.status}">${escapeHtml(completed ? (state.locale === 'en-US' ? 'Done' : '已完成') : readonly ? (state.locale === 'en-US' ? 'Not Applied' : '未应用') : dismissed ? (state.locale === 'en-US' ? 'Ignored' : '已忽略') : item.badge)}</span>
          ${readonly || completed ? '' : `<button class="btn ${dismissed ? 'btn-secondary' : 'btn-ghost'} btn-sm ai-action-toggle-btn" type="button" data-ai-action-toggle="${escapeHtml(item.actionId)}">
            ${dismissed ? (state.locale === 'en-US' ? 'Restore' : '恢复') : (state.locale === 'en-US' ? 'Ignore' : '忽略这步')}
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
      <div class="ai-summary-chip">${state.locale === 'en-US' ? `${total} actions` : `${total} 个动作`}</div>
      ${groups.map((group) => `<div class="ai-summary-chip">${escapeHtml(group.label)} ${group.items.length}</div>`).join('')}
    `;
  }

  function groupAiActions(actions) {
    const definitions = [
      { key: 'create', label: state.locale === 'en-US' ? 'Create Folders' : '新建文件夹', match: (item) => item.type === 'create_folder' },
      { key: 'move', label: state.locale === 'en-US' ? 'Move Bookmarks' : '移动书签', match: (item) => item.type === 'move_bookmark' },
      { key: 'rename', label: state.locale === 'en-US' ? 'Rename' : '重命名', match: (item) => item.type === 'rename_bookmark' || item.type === 'rename_folder' },
      { key: 'other', label: state.locale === 'en-US' ? 'Other Actions' : '其他动作', match: () => true }
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
    showToast(state.locale === 'en-US' ? 'History item deleted' : '历史任务已删除', 'warning');
  }

  function openAiHistory(historyId) {
    const item = state.aiHistory.find((entry) => entry.id === historyId);
    if (!item) {
      return;
    }
    clearAiLoadingPhaseTimer();
    state.aiExpandedActionGroups.clear();
    state.aiActiveHistoryId = historyId;
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
      showToast(state.locale === 'en-US' ? 'Tell AI how you want your bookmarks organized first.' : '先告诉 AI 你想怎么整理书签', 'warning');
      return;
    }
    if (instruction.length > 1000) {
      showToast(state.locale === 'en-US' ? 'Your request can be up to 1000 characters.' : '整理诉求最多输入 1000 字', 'warning');
      return;
    }

    await refreshBookmarkStateForAi();
    const context = collectAiScope();
    if (context.bookmarks.length === 0) {
      showToast(state.locale === 'en-US' ? 'There are no bookmarks in the current scope. Adjust the filter or choose a different scope first.' : '当前整理范围里没有书签，先调整筛选或重新选择范围', 'warning');
      return;
    }
    state.aiPlan = {
      status: 'loading',
      summary: state.locale === 'en-US' ? 'Requesting an organize plan from AI...' : '正在请求 AI 生成整理方案...',
      warnings: [],
      actions: [],
      validatedActions: [],
      dismissedActionIds: new Set(),
      rawResponse: null
    };
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

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

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
          throw new Error(`今日 AI 整理次数已达上限（${detail.detail.used}/${detail.detail.limit}）`);
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
        summary: result.summary || (state.locale === 'en-US' ? 'AI has prepared an organize plan. Review it before applying.' : 'AI 已生成整理建议，请确认后再应用。'),
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
      renderAiPlan();
      showToast(state.locale === 'en-US' ? 'Plan generated' : '整理方案已生成', 'success');
    } catch (error) {
      const errorMessage = String(error?.message || error);
      const isFetchError = error instanceof TypeError || /Failed to fetch/i.test(errorMessage);
      const historyId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `history-${Date.now()}`;
      state.aiPlan = {
        status: 'error',
        summary: isFetchError
          ? (state.locale === 'en-US' ? 'The AI service is temporarily unreachable. Make sure the backend service is running.' : '本地 AI 服务暂时不可连接，请先确认后端服务已经启动。')
          : (state.locale === 'en-US' ? 'Failed to generate the AI plan. Check the backend endpoint and response format.' : 'AI 整理方案生成失败，请检查后端接口和返回格式。'),
        warnings: [errorMessage],
        actions: [],
        validatedActions: [],
        dismissedActionIds: new Set(),
        rawResponse: null,
        historyId,
        source: 'current'
      };
      if (isFetchError) {
        state.aiUsageError = state.locale === 'en-US'
          ? 'The AI service is unavailable. Check the endpoint and make sure the backend service is reachable.'
          : 'AI 服务暂时不可达，请检查接口地址并确认后端服务可以访问。';
      }
      await saveAiHistoryEntry(buildAiHistoryEntry({
        id: historyId,
        instruction,
        scopeLabel: context.scopeLabel,
        plan: state.aiPlan
      }));
      renderAiPlan();
      showToast(state.locale === 'en-US' ? 'Failed to generate plan' : '整理方案生成失败', 'error');
    } finally {
      await refreshAiUsage();
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
          validated.push(buildAiValidationResult(actionId, 'invalid', state.locale === 'en-US' ? 'Cannot create folder' : '无法创建文件夹', state.locale === 'en-US' ? 'Missing a valid parent folder or title' : '缺少有效父目录或标题', false, type));
          return;
        }
        const nextPath = [...parentFolder.path, action.title];
        virtualFolders.set(nextPath.join(' / '), { id: null, path: nextPath, actionId });
        validated.push(buildAiValidationResult(
          actionId,
          'valid',
          state.locale === 'en-US'
            ? `${action.autoGenerated ? 'Auto-create folder' : 'Create folder'} "${action.title}"`
            : `${action.autoGenerated ? '补建文件夹' : '新建文件夹'}「${action.title}」`,
          state.locale === 'en-US'
            ? `${action.autoGenerated ? 'Auto-added for a later move, ' : ''}create under ${parentFolder.path.join(' / ')}`
            : `${action.autoGenerated ? '为后续移动自动补齐，' : ''}创建到 ${parentFolder.path.join(' / ')}`,
          true,
          type
        ));
        return;
      }

      if (type === 'rename_bookmark') {
        const bookmark = state.bookmarkMap.get(action.bookmarkId);
        if (!bookmark || !action.newTitle) {
          validated.push(buildAiValidationResult(actionId, 'invalid', state.locale === 'en-US' ? 'Cannot rename bookmark' : '无法重命名书签', state.locale === 'en-US' ? 'Bookmark does not exist or the new title is empty' : '书签不存在或新名称为空', false, type));
          return;
        }
        validated.push(buildAiValidationResult(actionId, 'valid', state.locale === 'en-US' ? `Rename bookmark "${bookmark.title}"` : `重命名书签「${bookmark.title}」`, state.locale === 'en-US' ? `Change to "${action.newTitle}"` : `改为「${action.newTitle}」`, true, type));
        return;
      }

      if (type === 'rename_folder') {
        const folder = state.folderMap.get(action.folderId);
        if (!folder || !action.newTitle) {
          validated.push(buildAiValidationResult(actionId, 'invalid', state.locale === 'en-US' ? 'Cannot rename folder' : '无法重命名文件夹', state.locale === 'en-US' ? 'Folder does not exist or the new title is empty' : '文件夹不存在或新名称为空', false, type));
          return;
        }
        validated.push(buildAiValidationResult(actionId, 'valid', state.locale === 'en-US' ? `Rename folder "${folder.title}"` : `重命名文件夹「${folder.title}」`, state.locale === 'en-US' ? `Change to "${action.newTitle}"` : `改为「${action.newTitle}」`, true, type));
        return;
      }

      if (type === 'move_bookmark') {
        const bookmark = state.bookmarkMap.get(action.bookmarkId);
        const targetFolder = resolveFolderReference(action.targetFolderId, action.targetPath, virtualFolders);
        if (!bookmark || !targetFolder) {
          validated.push(buildAiValidationResult(actionId, 'invalid', state.locale === 'en-US' ? 'Cannot move bookmark' : '无法移动书签', state.locale === 'en-US' ? 'The bookmark or target folder does not exist' : '书签或目标文件夹不存在', false, type));
          return;
        }
        validated.push(buildAiValidationResult(actionId, 'valid', state.locale === 'en-US' ? `Move bookmark "${bookmark.title}"` : `移动书签「${bookmark.title}」`, state.locale === 'en-US' ? `Move to ${targetFolder.path.join(' / ')}` : `移动到 ${targetFolder.path.join(' / ')}`, true, type));
        return;
      }

      validated.push(buildAiValidationResult(actionId, 'warning', state.locale === 'en-US' ? `Unsupported action type: ${type}` : `未支持的动作类型：${type}`, state.locale === 'en-US' ? 'This action type will not be executed by the current frontend.' : '当前前端不会执行这类动作', false, type));
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
      warnings.push(state.locale === 'en-US'
        ? `Automatically added ${autoCreateCount} missing folder-creation steps so move targets exist before moving.`
        : `已自动补齐 ${autoCreateCount} 个缺失的建文件夹步骤，避免移动时目标目录不存在。`);
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
        ? (state.locale === 'en-US' ? 'Applicable' : '可应用')
        : status === 'invalid'
          ? (state.locale === 'en-US' ? 'Invalid' : '无效')
          : (state.locale === 'en-US' ? 'Needs Review' : '待确认')
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
      showToast(state.locale === 'en-US' ? 'There are no applicable AI actions right now.' : '当前没有可应用的 AI 动作', 'warning');
      return;
    }

    state.aiPlan.status = 'applying';
    renderAiPlan();

    const runtimeFolderPaths = new Map();
    const undoSteps = [];
    state.folderMap.forEach((folder) => {
      runtimeFolderPaths.set(folder.path.join(' / '), folder.id);
    });

    try {
      for (let index = 0; index < executableActions.length; index += 1) {
        const action = executableActions[index];
        if (action.type === 'create_folder') {
          const parentFolder = resolveFolderReference(action.parentId, action.parentPath, new Map(
            Array.from(runtimeFolderPaths.entries()).map(([key, id]) => [key, { id, path: key.split(' / ') }])
          ));
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
            title: action.title || (state.locale === 'en-US' ? 'Untitled Folder' : '未命名文件夹')
          });
          runtimeFolderPaths.set([...parentFolder.path, action.title].join(' / '), created.id);
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
            targetFolderId = await ensureRuntimeFolderPath(action.targetPath, runtimeFolderPaths);
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
      showToast(state.locale === 'en-US' ? 'AI plan applied' : 'AI 整理方案已应用', 'success');
    } catch (error) {
      state.aiPlan.status = 'error';
      state.aiPlan.warnings = [String(error.message || error)];
      renderAiPlan();
      showToast(state.locale === 'en-US' ? 'Failed to apply AI plan' : '应用 AI 整理方案失败', 'error');
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
      const response = await fetch(endpoint);
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
      state.aiUsageError = state.locale === 'en-US'
        ? 'The AI service is unavailable. Check the endpoint and backend availability.'
        : 'AI 服务未连接，请检查接口地址和后端可用性。';
    }
    renderAiPlan();
  }

  async function undoLastAiPlanApplication() {
    const undo = state.aiUndoAction;
    if (!undo || undo.status === 'undoing') {
      return;
    }
    if (undo.historyId !== state.aiHistory[0]?.id || state.aiPlan.historyId !== undo.historyId) {
      showToast(state.locale === 'en-US' ? 'Only the most recent AI apply supports undo.' : '只有最近一次 AI 应用支持撤销', 'warning');
      return;
    }

    undo.status = 'undoing';
    undo.lastError = null;
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
    state.aiPlan.warnings = state.aiPlan.warnings.filter((warning) => !warning.startsWith('撤销时有') && !warning.startsWith('未能'));

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
      showToast(state.locale === 'en-US' ? 'Undid the latest AI apply' : '已撤销最近一次 AI 应用', 'success');
      return;
    }

    state.aiUndoAction = {
      ...undo,
      status: 'ready',
      lastError: failures.join('；')
    };
    state.aiPlan.warnings = [
      state.locale === 'en-US'
        ? `${failures.length} undo steps did not complete. Review the result and try again.`
        : `撤销时有 ${failures.length} 项未完成，请核对结果后重试。`,
      ...failures
    ];
    renderAiPlan();
    showToast(state.locale === 'en-US' ? 'AI undo was not fully completed. Please retry or review manually.' : 'AI 撤销未完全完成，请重试或手动核对', 'warning');
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

  async function ensureRuntimeFolderPath(targetPath, runtimeFolderPaths) {
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
    const message = String(error?.message || error || '未知错误');
    switch (step.type) {
      case 'delete_folder':
        return `未能删除回滚文件夹“${step.title}”：${message}`;
      case 'rename_bookmark':
        return `未能恢复书签名称：${message}`;
      case 'rename_folder':
        return `未能恢复文件夹名称：${message}`;
      case 'move_bookmark':
        return `未能恢复书签原位置：${message}`;
      default:
        return `未能完成撤销步骤：${message}`;
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
      showToast('当前视图没有可选书签', 'warning');
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
      showToast('请先选择要删除的书签', 'warning');
      return;
    }
    if (!confirm(`确定要删除选中的 ${ids.length} 个书签吗？`)) {
      return;
    }

    await removeBookmarksByIds(ids, true);
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(`已删除 ${ids.length} 个书签`, 'error');
  }

  function clearDragState() {
    state.draggedItem = null;
    document.querySelectorAll('.dragging').forEach((element) => element.classList.remove('dragging'));
    document.querySelectorAll('.drop-target').forEach((element) => element.classList.remove('drop-target'));
    document.querySelectorAll('.drop-before').forEach((element) => element.classList.remove('drop-before'));
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

  async function moveBookmarkIdsBeforeTarget(ids, targetId, message) {
    const target = state.bookmarkMap.get(targetId);
    if (!target) {
      return;
    }

    const previousState = ids.map((id) => {
      const bookmark = state.bookmarkMap.get(id);
      return {
        id,
        parentId: bookmark.parentId,
        index: bookmark.index
      };
    });

    const shiftCount = ids.reduce((count, id) => {
      const bookmark = state.bookmarkMap.get(id);
      return bookmark && bookmark.parentId === target.parentId && bookmark.index < target.index ? count + 1 : count;
    }, 0);

    let insertIndex = Math.max(0, target.index - shiftCount);
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
        `已移动 ${state.draggedItem.ids.length} 个书签`
      );
      return;
    }

    if (state.draggedItem.type === 'bookmark') {
      const bookmark = state.bookmarkMap.get(state.draggedItem.id);
      if (!bookmark) {
        return;
      }

      await moveBookmarkIdsToFolder([bookmark.id], folderId, `已移动 ${bookmark.title}`);
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
      message: `已移动文件夹 ${folder.title}`
    };
    clearDragState();
    await loadBookmarks();
    await loadStoredScanResults();
    showToast(`已移动文件夹 ${folder.title}`, 'warning');
  }

  async function moveDraggedBookmarkBefore(targetId) {
    if (!state.draggedItem) {
      return;
    }

    if (state.draggedItem.type === 'bookmark-group') {
      if (state.draggedItem.ids.includes(targetId)) {
        return;
      }
      await moveBookmarkIdsBeforeTarget(
        state.draggedItem.ids,
        targetId,
        `已调整 ${state.draggedItem.ids.length} 个书签的位置`
      );
      return;
    }

    if (state.draggedItem.type !== 'bookmark' || state.draggedItem.id === targetId) {
      return;
    }

    const dragged = state.bookmarkMap.get(state.draggedItem.id);
    if (!dragged) {
      return;
    }

    await moveBookmarkIdsBeforeTarget([dragged.id], targetId, `已调整 ${dragged.title} 的位置`);
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
        message: `已删除 ${snapshot.length} 个书签`
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
      showToast('名称不能为空', 'warning');
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
    showToast(editingNode.type === 'bookmark' ? '书签名称已更新' : '文件夹名称已更新', 'success');
  }

  async function createFolderUnder(parentId) {
    const parentFolder = state.folderMap.get(parentId);
    if (!parentFolder) {
      showToast('目标文件夹不存在', 'warning');
      return;
    }

    const insertIndex = Array.isArray(parentFolder.children) ? parentFolder.children.length : 0;
    const createdFolder = await new Promise((resolve, reject) => {
      chrome.bookmarks.create({
        parentId,
        index: insertIndex,
        title: '新建文件夹'
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
      value: createdFolder.title || '新建文件夹'
    };
    state.expandedFolderIds.add(parentId);
    state.expandedFolderIds.add(createdFolder.id);
    await loadBookmarks();
    await loadStoredScanResults({ renderManage: false });
    rerenderManageEntity('folder', parentId);
    showToast('已创建新文件夹', 'success');
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
      showToast('只有空文件夹可以直接删除', 'warning');
      return;
    }

    if (!confirm(`确定要删除空文件夹 “${folder.title}” 吗？`)) {
      return;
    }

    await removeFoldersByIds([id]);
    showToast('空文件夹已删除', 'error');
  }

  function toggleSelectAllEmptyFolders() {
    if (state.emptyFolders.length === 0) {
      showToast('当前没有空文件夹', 'warning');
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
      showToast('请先选择要删除的空文件夹', 'warning');
      return;
    }

    if (!confirm(`确定要删除选中的 ${ids.length} 个空文件夹吗？`)) {
      return;
    }

    await removeFoldersByIds(ids);
    renderScanResults();
    showToast(`已删除 ${ids.length} 个空文件夹`, 'error');
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
      showToast('已撤销删除操作', 'success');
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
      showToast('已撤销移动操作', 'success');
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
    ui.toggleExpandIcon.textContent = state.isExpandedByDefault ? '📂' : '🗂️';
    state.expandedFolderIds.clear();
    if (state.isExpandedByDefault) {
      state.folderMap.forEach((_, id) => state.expandedFolderIds.add(id));
    }
    renderManageTree();
  }

  function validateUrl(url) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({
        action: 'validateUrlSimple',
        url,
        timeout: CONFIG.TIMEOUT * 1000
      }, (response) => {
        if (chrome.runtime.lastError) {
          resolve({
            valid: false,
            isInvalid: false,
            error: true,
            reason: chrome.runtime.lastError.message
          });
          return;
        }

        resolve({
          valid: response?.valid ?? false,
          isInvalid: response?.isInvalid ?? false,
          error: !response
        });
      });
    });
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
        <rect width="64" height="64" rx="18" fill="#e9e1d2"/>
        <text x="50%" y="54%" text-anchor="middle" font-size="28" font-family="Arial, sans-serif" fill="#5a6858">${letter}</text>
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
      { label: '技术学习', match: ['github.com', 'stackoverflow.com', 'developer.mozilla.org', 'juejin.cn', 'csdn.net', 'npmjs.com', 'gitlab.com'] },
      { label: '设计灵感', match: ['dribbble.com', 'behance.net', 'figma.com', 'pinterest.com'] },
      { label: '视频内容', match: ['youtube.com', 'bilibili.com', 'vimeo.com'] },
      { label: '资讯阅读', match: ['medium.com', 'substack.com', 'theverge.com', '36kr.com', 'huxiu.com', 'sspai.com'] },
      { label: 'AI 工具', match: ['openai.com', 'anthropic.com', 'huggingface.co', 'replicate.com', 'poe.com'] },
      { label: '购物决策', match: ['amazon.com', 'taobao.com', 'jd.com', 'tmall.com'] },
      { label: '社交观察', match: ['x.com', 'twitter.com', 'linkedin.com', 'reddit.com', 'weibo.com', 'zhihu.com'] }
    ];

    const found = [];
    TAG_RULES.forEach((rule) => {
      if (topDomains.some((item) => rule.match.some((domain) => item.domain.includes(domain)))) {
        found.push(rule.label);
      }
    });
    return found.slice(0, 5);
  }

  function normalizeUrl(url, urlCounts) {
    try {
      const parsed = new URL(url);
      parsed.hash = '';
      let normalized = parsed.toString();
      normalized = normalized.replace(/\/$/, '');
      urlCounts.set(normalized, (urlCounts.get(normalized) || 0) + 1);
    } catch (error) {
      urlCounts.set(url, (urlCounts.get(url) || 0) + 1);
    }
  }

  function normalizeUrlValue(url) {
    try {
      const parsed = new URL(url);
      parsed.hash = '';
      return parsed.toString().replace(/\/$/, '');
    } catch (error) {
      return url;
    }
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
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
