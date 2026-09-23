# Rifat Jahan Mim — Portfolio (React + Vite)

The portfolio site as a Vite + React app.

## Running it

```bash
npm install      # once
npm run dev      # dev server, usually http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built dist/ to check it before deploying
```

Node 20 or newer.

## Layout

```
rifat-portfolio-react/
├── index.html              ← page shell: title, meta, fonts, favicon
├── public/
│   └── assets/
│       ├── portrait.jpg    ← served at /assets/portrait.jpg
│       └── resume.pdf      ← served at /assets/resume.pdf
├── src/
│   ├── main.jsx            ← entry, imports styles.css
│   ├── App.jsx             ← section order lives here
│   ├── styles.css          ← the entire stylesheet, one global file
│   ├── data/site.js        ← all list content and contact details
│   ├── lib/format.js       ← shared formatting helpers (e.g. card numbering)
│   ├── hooks/
│   │   └── useScrollBehaviour.js
│   ├── context/
│   │   └── ResumePreview.jsx  ← "View Resume" modal (context + the modal itself)
│   └── components/         ← one file per section
└── vite.config.js
```

## Where to edit things

**Text and lists** — [`src/data/site.js`](src/data/site.js). Case studies, live products,
documentation cards, skills groups, capabilities, principles, timeline, contact details
and the resume filename are all there.

`caseStudies` holds the deep dives. Each entry is an object: `sector`, `domain`, `title`,
`summary`, `context`, `role`, `process`, `solution`, `decisions`, `challenges`, `outcome`,
`contribution`, plus optional `ecosystem`, `lifecycle` and `workflows` (each workflow is
`{ title, steps, branches? }`). Optional blocks simply disappear when left out, and the
"N products across …" line above the list is built from the entries' `sector` values.

`liveProducts` is a list of `{ name, note? }`. The tiles deliberately carry no description;
a `note` (for example "Government project") replaces the Live badge.

Each `docs` entry is an object: `title`, `tag` (the pill — Spec / Delivery / Process /
Design), `desc`, `inside` (four bullets) and `who`. Keep `inside` to four bullets so the
cards stay level across a row.

**Section prose** — the component for that section in [`src/components/`](src/components/).
Headings and paragraphs that appear once are written directly in the JSX.

**Colours, fonts, spacing** — the `:root` block at the top of
[`src/styles.css`](src/styles.css). `--accent` is the teal, `--dark` the navy used by the
Process and Contact sections.

**Page title, description, social preview** — [`index.html`](index.html).

### Two layout rules worth knowing

- `.thinkrow` and `.loop` are wrapping flex rows whose pills and arrows must stay
  **direct children**. When mapping over them use a `<Fragment>`, never a wrapper
  `<span>`, or the gaps and wrapping break.
- Documentation cards are flex columns with the footer pushed down by
  `margin-top:auto`, so footers line up across a row. Grid rows are equal height, which
  is why a card with short text shows a gap above its divider.

## Behaviour

`useScrollBehaviour.js` holds every scroll/pointer-driven hook, in place of what were
once inline scripts:

- `useStuckHeader` — border and shadow on the sticky header once you scroll past 8px.
- `useActiveSection` — which nav link is underlined. A section becomes current when its
  top passes a line 130px below the viewport top; at the very bottom of the page the
  last section always wins, because the page runs out of scroll before Contact's top
  ever reaches that line.
- `useReveal` — fades `.reveal` elements in on scroll.
- `useScrollProgress` — 0 → 1 reading position, drawn as the accent bar along the bottom
  edge of the header. Scroll reads are batched into one animation frame.
- `useSpotlight` — writes the pointer position into `--mx`/`--my` on the hoverable card
  under it, for the cursor-follow glow. Skipped on touch devices.
- `useHeroParallax` — writes scroll distance into `--sy` on `.hero`, for the slow
  background-grid drift.
- `useTypewriter(words)` — types a word, pauses, deletes it, moves to the next; used for
  the rotating role line under the hero name.

All of these back off to a static, motionless state under `prefers-reduced-motion`.

## Motion

- Everything shares one easing token, `--ease`, and a set of keyframes defined in the
  motion block near the bottom of `styles.css` (`rise`, `settle`, `float`, `pop`, `drop`,
  `drift`, `nudge`, `caret`, plus the workflow/process "glow" keyframes).
- The hero animates itself in on load. Everything below the fold waits for `.reveal`.
- Stagger comes from a `--d` custom property set in the JSX
  (`style={{ "--d": `${i * 55}ms` }}`), not from JavaScript — so a row always cascades
  in the order it is written rather than the order the observer happens to fire. Rows
  inside an already-revealed card (flow steps, process steps, checklist, timeline) hang
  their animation off the parent's `.in` class and add `--d` on top.
- One `prefers-reduced-motion` block at the end of the motion section switches all of it
  off, including the marquee, smooth scrolling and the résumé-modal transition.

## Deploying

The repo is connected to Vercel, which redeploys automatically on every push to `main`:
<https://rifat-jahan-mim-portfolio.vercel.app>. Push a normal commit (or merge a branch
into `main`) and the live site updates within a minute or two — no manual build/upload
step, and no `vercel` CLI needed for routine changes.

Nothing here needs a rewrite/redirects config — the site is one page with anchor links,
not a router.

## Notes

- Fonts (Sora + Manrope) load from Google Fonts, with a system sans-serif fallback.
- Responsive to 360px. Case studies are single-column accordion cards at every width.
  The live-products tiles are 4 columns, dropping to 3 below 1080px, 2 below 700px and
  1 below 340px — where a two-up tile gets narrower than the longest product name.
- If `portrait.jpg` is missing the photo slot falls back to an "RM" monogram rather
  than breaking the layout.
- No analytics, cookies or trackers.
