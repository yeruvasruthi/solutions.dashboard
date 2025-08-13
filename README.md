# AI Solutions Dashboard & Component Library

A TypeScript-based React dashboard for visualizing AI/LLM insights, paired with a reusable component library and a minimal Node.js API. It ships with Firebase Authentication, protected routing, Sass theming, React Context for global state, and Jest unit tests.

## Highlights  
- Reusable UI library for AI/LLM analytics with consistent Sass theming.  

- Dashboard app with Firebase Auth, protected routes, and session-aware global state.

- WCAG-minded: semantic HTML, ARIA, keyboard focus, responsive, mobile-first.

- Quality: unit tests with Jest and Testing Library; Git-based reviews, sprint-friendly.
## Tech
- Frontend: React 18, TypeScript, Vite, React Router, Sass

- Auth: Firebase Authentication (web)

- State: React Context API

- Backend: Node.js, Express 

- Testing: Jest, @testing-library/react

- Tooling: Git, npm

## Quick Start

### 1) Client (React)
```bash
cd client
npm install
npm run dev
```

### 2) Server (Node.js API)
```bash
cd server
npm install
npm run dev
```
- API runs on `http://localhost:4000`
- Example endpoints: `/health`, `/api/insights`

### 3) Tests
```bash
cd client
npm test
```

## Structure
```
ai-solutions-dashboard/
├── client/                  # React + TS + Sass + Firebase
│   ├── src/
│   │   ├── components/      # Reusable UI (Card, NavBar, ChartPlaceholder)
│   │   ├── context/         # AuthContext (login, logout, session)
│   │   ├── lib/             # firebase.ts (app init)
│   │   ├── pages/           # Dashboard, Insights, Settings, Login
│   │   ├── styles/          # SCSS variables + global styles
│   │   └── tests/           # Jest + RTL examples
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── server/                  
│   ├── index.js             # /health, /api/insights
│   └── package.json
├── package.json             
└── README.md

```
## App Architecture
### Authentication & Protected Routes
- 'src/lib/firebase.ts' initializes Firebase from 'import.meta.env.*'

- 'src/context/AuthContext.tsx' wraps the app and exposes user, login, logout (optionally signup).

- 'App.tsx' uses a ProtectedRoute wrapper to guard Dashboard/Insights/Settings; unauthenticated users are redirected to /login.
### State Management
- Lightweight global state via React Context for user/session. Extendable for theme, feature flags, etc.
### Reusable Components & Theming
- Components in src/components/ (e.g., Card, NavBar, ChartPlaceholder).

- Theme variables in src/styles/_variables.scss; global rules in src/styles/global.scss.
Update CSS vars to change palette across the app.

### API Layer
- server/index.js provides example endpoints:

    - GET /health – basic health check

    - GET /api/insights – mock AI metrics payload (usage, p95 latency, costs)

- CORS enabled for local dev. Replace mocks with your real data sources.

### Accessibility
- Semantic HTML, ARIA attributes on forms, focusable controls, keyboard-friendly navigation.

- Color contrast and scale guided by WCAG.
