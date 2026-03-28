# 智能书签管家

一个用于书签检测、洞察、管理和 AI 辅助整理的 Chrome 扩展。

当前开源版本：`v1.0.0`

## 它能做什么

- 检测失效链接和空文件夹
- 展示书签洞察，包括趋势、常用域名和待整理重点
- 支持搜索、多选、重命名、删除和拖拽整理书签
- 通过 AI 生成整理方案，并支持预览、应用、撤销和历史回看
- 提供 Popup 快速扫描和轻量清理入口

## 四个核心模块

- `检测`
  - 扫描失效链接和空文件夹，并在同一处集中处理
- `洞察`
  - 查看收藏趋势、来源分布，以及最值得优先整理的地方
- `管理`
  - 搜索、筛选、重命名、删除，并通过拖拽调整书签结构
- `AI整理`
  - 用自然语言描述整理诉求，先看方案，再确认是否真正应用到书签栏

## AI 接口

扩展当前默认使用托管的 HTTPS AI 服务地址：

- `https://api.dogclaw.top/ai/api/bookmarks/plan`

对应的 usage 接口会基于同一路径自动推导，不需要额外配置。

## 本地开发

1. 打开 `chrome://extensions`
2. 开启 `开发者模式`
3. 点击 `加载已解压的扩展程序`
4. 选择 `chrome-bookmark-manager` 文件夹

## 项目结构

- `manifest.json`：扩展配置和权限
- `popup.html` / `popup.js` / `popup.css`：弹窗页面
- `profile.html` / `profile.js` / `styles.css`：主功能页
- `background.js`：后台 service worker
- `privacy-policy.html`：隐私政策页面
- `icons/`：扩展图标

## 权限说明

- `bookmarks`
  - 读取、重命名、移动、删除和整理书签及文件夹
- `storage`
  - 保存本地设置、扫描结果、AI 历史任务和偏好
- `tabs`
  - 打开书签，以及从结果项跳转到目标页面
- `webRequest`
  - 在检测阶段判断书签链接是否可访问
- `favicon`
  - 在列表和结果中显示网站图标
- `host_permissions`
  - 在检测阶段校验不同站点上的书签 URL

## 隐私说明

扩展的大部分运行数据都保存在浏览器本地。

当您主动使用 `AI整理` 时，扩展会把当前整理范围内的信息发送到 AI 服务，包括：

- 书签标题
- 书签 URL
- 书签路径
- 文件夹标题和路径
- 您输入的整理诉求

只有在您主动发起 `AI整理` 时，相关数据才会发送到服务端。服务端仅用于本次生成方案，不存储您的书签内容。

完整隐私政策见：

- [privacy-policy.html](./privacy-policy.html)

## 开源说明

- 许可证：`MIT`
- 当前仓库默认指向托管的 HTTPS AI 服务
- `privacy-policy.html` 适合仓库展示；商店发布时仍建议使用公开可访问的隐私政策 URL

## 发布前建议

- 将隐私政策页面部署到公开 URL
- 确认托管的 AI HTTPS 接口稳定可访问
- 在 Chrome Web Store 描述中补充权限用途说明
- 确保仓库中不包含密钥、日志和 SQLite 数据文件

## Chrome 版本建议

- 兼容 Manifest V3
- 建议 Chrome 114 及以上
