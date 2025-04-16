# 📦 EVE Companion App – Tech Stack & Libraries

This document outlines the full technology stack and external libraries used in the EVE Companion App. Each library is included for practical utility, rapid development, and long-term scalability.

---

## ⚙️ Core Frameworks & Tooling

| Tool | Purpose | Install |
|------|---------|---------|
| **Electron Forge** | Electron app scaffolding & packaging | `npm install --save-dev @electron-forge/cli && npx electron-forge import` |
| **Webpack** | Build system for main & renderer processes | `npm install --save-dev webpack webpack-cli webpack-dev-server` |
| **Node.js** | Backend logic & API handling | *(Included in runtime)* |

---

## 🎨 UI & Styling

| Library | Purpose | Install |
|--------|---------|---------|
| **Halfmoon.css** | Layouts and utilities | `npm install halfmoon` |
| **Topcoat.css** | Flat UI component styles | *(Download manually or self-host)* |
| **Augmented-ui.css** | Sci-fi panel effects | `npm install augmented-ui` |
| **Bootstrap.js** | Optional behaviors (modals, dropdowns) | `npm install bootstrap` |
| **Popper.js** | Tooltip/dropdown positioning (used by Tippy.js) | `npm install @popperjs/core` |

---

## 🧠 State Management & Re-rendering

| Library | Purpose | Install |
|--------|---------|---------|
| **Zustand** | Global app state manager | `npm install zustand` |

---

## 📊 Graphics & Visualization

| Library | Purpose | Install |
|--------|---------|---------|
| **three.js** | 3D rendering | `npm install three` |
| **svg.js** | Dynamic SVG manipulation | `npm install @svgdotjs/svg.js` |
| **D3.js** | Data-driven visuals (maps, routes) | `npm install d3` |
| **Chart.js** | Statistical charting | `npm install chart.js` |
| **AOS** (optional) | Scroll-triggered animations | `npm install aos` |

---

## 🧰 Utility Libraries

| Library | Purpose | Install |
|--------|---------|---------|
| **tippy.js** | Tooltips (uses Popper.js) | `npm install tippy.js` |
| **notyf** | Toast notifications | `npm install notyf` |
| **interact.js** | Window drag/resize behavior | `npm install interactjs` |
| **p-queue** | Request throttling & lazy loading | `npm install p-queue` |
| **electron-store** | Config storage for settings | `npm install electron-store` |
| **electron-log** | Logging across Electron | `npm install electron-log` |
| **dexie.js** | IndexedDB abstraction | `npm install dexie` |

---

## 🔐 Authentication & API Access

| Library | Purpose | Install |
|--------|---------|---------|
| **simple-oauth2** | OAuth2 handling (Electron main) | `npm install simple-oauth2` |
| **oidc-client-ts** | Web/fallback OAuth2 | `npm install oidc-client-ts` |
| **axios** | HTTP client | `npm install axios` |
| **eve-swagger-interface** | ESI API wrapper (or generate via Swagger) | *(Custom fork or codegen preferred)* |

---

## 🔬 Testing & Dev Tools

| Tool | Purpose | Install |
|------|---------|---------|
| **vitest** | Modern test runner | `npm install --save-dev vitest` |
| **mocha** | Traditional test runner for Electron | `npm install --save-dev mocha` |
| **esbuild** (optional) | Build helper for CLI tooling | `npm install esbuild` |

---

## 🧭 Internal Module Overview

| Module | Libraries Involved |
|--------|--------------------|
| **Window Manager** | `interact.js`, `zustand`, `augmented-ui.css` |
| **Fitting Viewer** | `svg.js`, `zustand`, `dexie.js` |
| **Starmap & Routes** | `three.js`, `d3.js`, `zustand`, `p-queue` |
| **Mail System** | `zustand`, `dexie.js`, `electron-store`, `electron-log` |
| **Market Tools** | `chart.js`, `dexie.js`, `axios`, `p-queue` |
| **Fleet Manager** | `zustand`, `tippy.js`, `notyf`, `p-queue` |
| **Login/Auth** | `simple-oauth2`, `electron-store`, `axios` |

---

## ⏭️ Future Refactors & Plans

- Replace Halfmoon and Topcoat with scoped component styles
- Build a custom ESI wrapper to replace `eve-swagger-interface`
- Use shared hooks and state subscriptions for targeted rendering
- Create a unified panel/window rendering system (no third-party UI frameworks)

---

## 🧪 Quick Start

```bash
# 1. Clone the repo and install dependencies
npm install

# 2. Run the app
npm start

# 3. Package for production
npm run make
