// content script to handle extension icon clicks

// 添加一个事件监听器，监听扩展图标点击事件，并打开新页面
chrome.action.onClicked.addListener((tab) => {
  // 打开一个新的标签页并导航至上书签管理页面
  chrome.tabs.create({url: chrome.runtime.getURL("profile.html")});
});