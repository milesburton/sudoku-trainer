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
# Sudoku Trainer

![GitHub Pages Deploy](https://github.com/milesburton/sudoku-trainer/actions/workflows/pages.yml/badge.svg)
![Static Site](https://img.shields.io/badge/site-static-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-enabled-c6538c?logo=sass&logoColor=white)

**Live Site:** https://milesburton.github.io/sudoku-trainer/

A lightweight, static Sudoku learning app. Built with TypeScript and SCSS (design tokens), deployed via GitHub Pages.

Short description: A static, step-by-step Sudoku tutor built with TypeScript and SCSS.

## Features
- Guided step-by-step solving with clear explanations
- Visual highlights (focus cell, row/column emphasis) and animations
- Design tokens in SCSS for colors, spacing, and effects
- Typed logic in TypeScript for grid and steps

## Project Structure
- `src/index.html` — static HTML shell
- `src/main.ts` — app logic in TypeScript
- `src/types.ts` — shared types (Grid, Step, etc.)
- `src/styles.scss` — main stylesheet
- `src/styles/tokens.scss` — SCSS design tokens
- `dist/` — build output (published to GitHub Pages)
- `.github/workflows/pages.yml` — Pages workflow

## Setup
```bash
npm install
```

## Build
```bash
npm run build:static
```
Outputs to `dist/`:
- `dist/index.html`
- `dist/styles.css`
- `dist/main.js`

## Serve (Production Output)
```bash
npm run serve:static
# http://localhost:8080/
```

## Deploy (GitHub Pages)
- Push to `main`. GitHub Actions (`pages.yml`) builds and publishes `dist/`.
- In repo Settings → Pages, set Source to “GitHub Actions”.

<!-- Deployment trigger: 2025-12-07T11:55Z -->

## Notes
- Source of truth lives in `src/` (TS + SCSS). Built files live in `dist/`.
- Playwright tooling is kept with a placeholder spec under `e2e/`.
- Removed legacy Netlify references and unrelated sample tests.

## Roadmap
- Add favicon and dark mode theme
- Split logic into modules (`steps.ts`, `ui.ts`) for clarity
- Lint: `npm run lint`

- Pre-commit: `lint-staged` via Husky

## Badges (Optional)
- ![Last Commit](https://img.shields.io/github/last-commit/milesburton/sudoku-trainer)
- ![Code Size](https://img.shields.io/github/languages/code-size/milesburton/sudoku-trainer)
