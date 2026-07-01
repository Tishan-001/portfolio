# Tishan Shamika — Portfolio

A fast, single-page developer portfolio built with **Astro**, **Tailwind CSS**, and **GSAP + ScrollTrigger**. Ships almost no JavaScript by default — animation and interactivity are added only where they're needed.

**Live site:** [tishan-001.github.io](https://tishan-001.github.io)

## Features

- Animated boot-terminal hero effect that types out a `Developer` class
- Hero headshot with gradient glow and automatic monogram fallback
- Light / dark theme toggle with no-flash load and saved preference
- Downloadable CV button
- Contact form wired to [Formspree](https://formspree.io) for zero-backend email delivery
- Canvas-based particle-network background, auto-paused for reduced motion
- 3D tilt project cards with a cursor-tracking spotlight
- GSAP scroll reveals and ambient parallax
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`
- All content centralized in one file: `src/data/content.js`

## Tech Stack

| Layer      | Choice                  |
| ---------- | ----------------------- |
| Framework  | Astro 7                 |
| Styling    | Tailwind CSS 3          |
| Animation  | GSAP 3 + ScrollTrigger  |
| Fonts      | JetBrains Mono, Inter   |
| Forms      | Formspree               |

## Project Structure

```
src/
├── components/     # Nav, Hero, About, Stack, Projects, Timeline, Contact
├── data/
│   └── content.js  # Single source of truth for all site copy
├── layouts/
│   └── Base.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:4321
```

### Build & Preview

```bash
npm run build    # output in ./dist
npm run preview  # preview the production build locally
```

## Adding Your Assets

Place these in the `public/` folder before deploying:

| File                | Used for                                             |
| ------------------- | ----------------------------------------------------- |
| `public/cv.pdf`     | The hero **Download CV** button                       |
| `public/avatar.jpg` | The hero headshot (falls back to a "TS" monogram)      |

## Editing Content

Open `src/data/content.js` and edit:

- `profile` — name, role, email, social links, hero stats
- `stack` — skill groups
- `projects` — project cards (title, language, description, tags, links)
- `timeline` — experience & education

No component edits are required for normal content updates.

## Contact Form

The contact form (`src/components/Contact.astro`) submits directly to Formspree via `fetch`, showing an inline success or error status without leaving the page. To point it at your own form:

1. Create a free form at [formspree.io](https://formspree.io) and copy your form ID.
2. Update the `action` attribute on the `<form>` in `Contact.astro` to `https://formspree.io/f/yourID`.

## Deployment

### GitHub Pages (recommended)

This project ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on every push to `main`.

1. Push this project to a repo named **`Tishan-001.github.io`** (or update `site` in `astro.config.mjs` to match your repo name).
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Your site goes live at `https://tishan-001.github.io`.

> If deploying to a **project repo** instead (e.g. `portfolio`), set `base: '/portfolio'` in `astro.config.mjs` and update `site` accordingly.

### Netlify / Vercel

- Build command: `npm run build`
- Publish / output directory: `dist`

## License

Personal project — content © Tishan Shamika.
