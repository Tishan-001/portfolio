# Tishan Shamika — Portfolio

A fast, single-page developer portfolio built with **Astro**, **Tailwind CSS**, and **GSAP + ScrollTrigger**. Ships almost no JavaScript by default; animation runs only where it's needed.

## Features

- **Animated boot terminal** in the hero that types out a `Developer` class
- **Hero headshot** with gradient glow + automatic monogram fallback
- **Light / dark toggle** with no-flash load and saved preference
- **Downloadable CV** button in the hero
- **Contact form** that works with zero backend (mailto), or POSTs to Formspree
- **Particle-network background** (canvas, auto-paused for reduced-motion)
- **3D tilt project cards** with a cursor-tracking spotlight
- **GSAP scroll reveals + ambient parallax**
- Fully responsive, keyboard-accessible, `prefers-reduced-motion` respected
- All content lives in **one editable file**: `src/data/content.js`

## Add your assets

Place these in the `public/` folder before deploying:

| File             | Used for                                              |
| ---------------- | ----------------------------------------------------- |
| `public/cv.pdf`  | The hero **Download CV** button                       |
| `public/avatar.jpg` | The hero headshot (falls back to a "TS" monogram)  |

## Contact form

By default the form opens the visitor's mail app pre-filled — no server needed. For messages delivered straight to your inbox:

1. Create a free form at [formspree.io](https://formspree.io) and copy your form ID.
2. In `src/components/Contact.astro`, set `action="https://formspree.io/f/yourID"` and change `data-mode="mailto"` to `data-mode="post"` on the `<form>`.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # output in ./dist
npm run preview  # preview the production build
```

## Editing content

Open `src/data/content.js` and edit:

- `profile` — name, role, email, social links, hero stats
- `stack` — skill groups
- `projects` — project cards (title, language, description, tags, links)
- `timeline` — experience & education

No component edits needed for normal updates.

## Deploy

### GitHub Pages (recommended, free)

1. Create a repo named **`Tishan-001.github.io`** and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push.
4. Your site goes live at `https://tishan-001.github.io`.

> If you instead use a **project repo** (e.g. `portfolio`), set `base: '/portfolio'` in `astro.config.mjs` and update `site` accordingly.

### Netlify / Vercel

- Build command: `npm run build`
- Publish / output directory: `dist`

## Tech

| Layer      | Choice                |
| ---------- | --------------------- |
| Framework  | Astro 4               |
| Styling    | Tailwind CSS 3        |
| Animation  | GSAP 3 + ScrollTrigger|
| Fonts      | JetBrains Mono, Inter |

## License

Personal project — content © Tishan Shamika.
