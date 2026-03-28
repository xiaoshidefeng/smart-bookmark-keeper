# Smart Bookmark Keeper

[中文](./README_zh.md) | English

Smart Bookmark Keeper is a Chrome extension for bookmark detection, insights, hands-on management, and AI-assisted organization.

## Screenshots

### Detection

![Detection](./chrome-store-screenshots/dec2.png)

### Insights

![Insights](./chrome-store-screenshots/insight.png)

### Management

![Management](./chrome-store-screenshots/manage.png)

### AI Organize

![AI Organize](./chrome-store-screenshots/ai.png)

## Features

- Detect invalid links and empty folders
- Review bookmark insights such as trends, top domains, and cleanup priorities
- Search, multi-select, rename, delete, and drag to reorganize bookmarks
- Generate AI organization plans with preview, apply, undo, and history
- Use the popup for quick scan and lightweight cleanup

## Core Modules

- `Detection`
  - Scan bookmarked URLs and empty folders, then clean them up in one place
- `Insights`
  - Review collection trends, top sources, and the areas worth organizing first
- `Management`
  - Search, filter, rename, delete, and drag to adjust bookmark structure
- `AI Organize`
  - Describe how you want bookmarks organized, review the proposed actions, and apply them with confirmation

## Installation

1. Open `chrome://extensions`
2. Enable `Developer mode`
3. Click `Load unpacked`
4. Select the `chrome-bookmark-manager` folder

## AI Service

The extension currently uses the hosted HTTPS AI endpoint by default:

- `https://api.dogclaw.top/ai/api/bookmarks/plan`

The related usage endpoint is derived automatically from the same base path.

## Project Structure

- `manifest.json`: extension manifest and permissions
- `popup.html` / `popup.js` / `popup.css`: popup UI
- `profile.html` / `profile.js` / `styles.css`: main management page
- `background.js`: background service worker
- `privacy-policy.html`: privacy policy page
- `icons/`: extension icons

## Permissions

- `bookmarks`
- `storage`
- `tabs`
- `webRequest`
- `favicon`
- `host_permissions`

These permissions are used for bookmark reading and organization, local settings, quick navigation, favicon display, and bookmark link validation.

## Privacy

Most operational data stays in the browser locally.

When you actively use `AI Organize`, the extension sends the current organization scope to the AI service, including:

- bookmark titles
- bookmark URLs
- bookmark paths
- folder titles and paths
- your organization request

The server is used only for plan generation and does not store bookmark content.

Full privacy policy:

- [privacy-policy.html](./privacy-policy.html)

## Development

- Manifest V3 compatible
- Recommended Chrome 114+

## License

MIT
