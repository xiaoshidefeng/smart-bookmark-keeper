# Smart Bookmark Keeper

A Chrome extension for bookmark detection, insights, hands-on management, and AI-assisted organization.

Current open-source release: `v1.0.0`

## What It Does

- Detect invalid links and empty folders
- Surface bookmark insights such as trends, top domains, and cleanup priorities
- Manage bookmarks with search, multi-select, rename, delete, and drag-and-drop
- Generate AI organization plans with preview, apply, undo, and history
- Provide a popup for quick scan and lightweight cleanup

## Core Modules

- `Detection`
  - Scan bookmarked URLs and empty folders, then clean them up in one place
- `Insights`
  - Review collection trends, top sources, and the areas worth organizing first
- `Management`
  - Search, filter, rename, delete, and drag to adjust bookmark structure
- `AI Organize`
  - Describe how you want bookmarks organized, review the proposed actions, and apply them with confirmation

## AI Endpoint

The extension currently uses the hosted HTTPS AI endpoint by default:

- `https://api.dogclaw.top/ai/api/bookmarks/plan`

The related usage endpoint is derived automatically from the same base path.

## Local Development

1. Open `chrome://extensions`
2. Enable `Developer mode`
3. Click `Load unpacked`
4. Select the `chrome-bookmark-manager` folder

## Project Structure

- `manifest.json`: extension manifest and permissions
- `popup.html` / `popup.js` / `popup.css`: popup UI
- `profile.html` / `profile.js` / `styles.css`: main management page
- `background.js`: background service worker
- `privacy-policy.html`: privacy policy page
- `icons/`: extension icons

## Permissions

- `bookmarks`
  - Read, rename, move, delete, and organize bookmarks and folders
- `storage`
  - Save local settings, scan results, AI history, and preferences
- `tabs`
  - Open bookmarks and jump to target pages from result items
- `webRequest`
  - Check bookmarked URLs during detection
- `favicon`
  - Display site favicons in lists and results
- `host_permissions`
  - Validate bookmark URLs across different sites during detection

## Privacy

Most operational data is stored locally in the browser.

When you actively use `AI Organize`, the extension sends the current organization scope to your AI service, including:

- bookmark titles
- bookmark URLs
- bookmark paths
- folder titles and paths
- your organization request

The AI request is sent only after you actively start `AI Organize`. The server is intended to use this data only for the current plan generation and does not store bookmark content.

Full privacy policy:

- [privacy-policy.html](./privacy-policy.html)

## Open Source Notes

- License: `MIT`
- The repository currently points to the hosted HTTPS AI endpoint by default
- `privacy-policy.html` is included for repository reference; store submission should still use a public policy URL

## Before Publishing

- Publish the privacy policy page on a public URL
- Keep the hosted AI endpoint reachable over HTTPS
- Review permission explanations in the Chrome Web Store listing
- Avoid committing secrets, logs, or SQLite data files

## Minimum Chrome Version

- Manifest V3 compatible
- Recommended Chrome 114+
