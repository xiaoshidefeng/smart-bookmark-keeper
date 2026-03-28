# Design System

## Direction
Personality: Precision with Warmth
Foundation: Warm neutral tool UI
Depth: Borders-first, restrained shadows
Density: Medium-dense for bookmark workflows

## Principles
- Prioritize scan, manage, and review workflows over decorative presentation.
- Keep actions close to the content they affect.
- Use one strong visual anchor per section, not competing accents.
- Prefer domain, path, favicon, and status over redundant explanatory copy.
- Mobile adaptation should preserve capability, not hide core controls.

## Tokens

### Spacing
Base: 4px
Scale: 4, 8, 12, 16, 24, 32

### Radius
Small: 6px
Medium: 10px
Large: 16px
Panel: 24px

### Surface Strategy
- App shell: warm neutral background with very subtle tonal variation
- Primary panels: light surface, thin border, minimal shadow
- Nested list items: slightly tinted surface, no stacked heavy shadows
- Selection state: soft green tint with stronger border
- Danger state: muted red tint, never saturated blocks

### Typography
- Display: serif only for page-level emphasis
- Body: clean sans-serif for all controls and lists
- Titles: semibold
- Metadata: small, muted, but still readable

### Iconography
- Favicons should appear without frames by default
- Folder glyphs are utility markers, not decorative badges
- Status chips must stay compact and secondary to title text

## Patterns

### Top Navigation
- Sticky shell header
- Tabs stay horizontally scrollable on narrow screens
- Brand area remains compact

### Scan Controls
- Primary scan action row contains start, pause, stop, settings, refresh
- Advanced settings live in a lightweight dialog, not a persistent card

### Result List
- Title row: favicon/icon, title, compact domain badge
- Meta row: path or diagnostic detail
- Actions align to the right on desktop, wrap below on small screens

### Bookmark Row
- Left to right: selection, drag handle, favicon, title/meta, actions
- Folder actions remain inline with folder header
- Inline rename replaces title only; action placement stays stable

### Motion
- Use fast ease-out transitions only
- No bounce or elastic effects
- Hover should be subtle lift or border emphasis, not large movement
