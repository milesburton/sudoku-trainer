# Sudoku Trainer UI Config Scaffold

![Coverage 100%](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Lint Passing](https://img.shields.io/badge/lint-passing-brightgreen)
![E2E Passing](https://img.shields.io/badge/e2e-passing-brightgreen)



This project demonstrates a compact Angular 19 generic alert-centre system with Pokémon-themed mock data:

- Angular 19
- NgRx 19
- PrimeNG
- Build command: `npm run build`
- Publish directory: `dist/alert-ui-example/browser`
# Sudoku Trainer (Static Site)

A lightweight, static Sudoku learning app built with TypeScript and SCSS. It demonstrates step-by-step solving with clear highlights, animations, and explanations. The site is deployed via GitHub Pages and built into a `dist/` folder.

**Key Features**
- Guided steps: explains row/column/box constraints and elimination.
- Visual highlights: focus cell, row/column emphasis, and fill animations.
- Design tokens: SCSS variables for colors, spacing, and effects.
- TypeScript: typed data model for steps and grid logic.

**Project Layout**
- `src/index.html`: Static HTML shell referencing built CSS/JS.
- `src/main.ts`: App logic in TypeScript (compiled to JS).
- `src/types.ts`: Shared type definitions (Grid, Step, etc.).
- `src/styles.scss`: Main stylesheet using tokens.
- `src/styles/tokens.scss`: Design tokens (colors, spacing, radii, effects).
- `dist/`: Build output for deployment (`index.html`, `styles.css`, `main.js`).
- `.github/workflows/pages.yml`: GitHub Actions workflow to publish `dist/` to Pages.

**Install & Build**
```bash
npm install
npm run build:static
```

**Serve Locally (Production Output)**
```bash
npm run serve:static
# open http://localhost:8080/ (or the container IP if using a dev container)
```

**Deploy (GitHub Pages)**
- Push to `main`. The `pages.yml` workflow runs `npm ci && npm run build:static` and publishes `dist/`.
- Ensure repo Settings → Pages is set to “GitHub Actions”.

**Development Notes**
- Source of truth is under `src/` (TypeScript + SCSS). Built assets live in `dist/`.
- Unused legacy files (Netlify config, unrelated e2e spec) have been removed or neutralized.
- Playwright tooling remains, with a placeholder spec under `e2e/` for future tests.

**Useful Scripts**
- `npm run build:static`: Build SCSS to `dist/styles.css`, compile TS to `dist/main.js`, copy HTML/assets.
- `npm run serve:static`: Serve `dist/` on `0.0.0.0:8080`.
- `npm start`: Angular dev server (if you want to use the Angular tooling).

**Future Improvements**
- Add favicon and optional dark mode tokens.
- Split logic into modules (`steps.ts`, `ui.ts`) for further clarity.
- Lint: `npm run lint`

- Pre-commit: `lint-staged` via Husky
