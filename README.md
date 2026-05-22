# AgenticAI — React (Vite)

Marketing site migrated from HTML/CSS/JS to React with pixel-faithful UI.

## Setup

```bash
npm install
npm run dev
```

Open the URL from the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/services` | Services |
| `/solutions` | Solutions |
| `/industries` | Industries |
| `/pricing` | Pricing (3 premium plans) |
| `/resources` | Resources |
| `/contact` | Contact Us |

## Project structure

```
public/images/          Static images
src/
  components/           Layout, Navbar, WorkflowMarquee, HeroChatbotVisual, CampaignAnalytics, LiveSupportSimulation, …
  pages/                Route wrappers
  pages/content/        Page markup
  hooks/                Animations, modal, page-specific effects
  styles/               Site CSS (from original css/)
  utils/                Lucide CDN helper
index.html              Vite entry + CDN fonts/icons
```

## Notes

- Lucide and Font Awesome load from CDN (same as the original site).
- Home hero uses a rotating typed-word cycle (`data-typed-cycle`); subpages use single-line type-in (`data-typed-text`).
