# AI Solutions Dashboard & Component Library

A starter kit for a TypeScript-based React dashboard to visualize AI/LLM insights,
with reusable components, Sass theming, Firebase Authentication, protected routing,
and a minimal Node.js (Express) API. Includes Jest + Testing Library for unit tests.

## Tech
- React + TypeScript + Vite
- Sass (SCSS) with theming
- Firebase Auth (email/password as example)
- React Router + Protected routes
- React Context for global auth state
- Node.js + Express (sample API)
- Jest + @testing-library/react
- Git-ready (includes .gitignore)

## Quick Start

### 1) Client (React)
```bash
cd client
npm install
npm run dev
```
- Create a Firebase project and add web app credentials to `.env`:
```
VITE_FIREBASE_API_KEY=YOUR_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```
- Visit `http://localhost:5173`

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
  client/               # React + TS + Sass + Firebase + Jest
    src/
      components/       # Reusable UI components
      context/          # Auth context
      pages/            # App pages (Dashboard, Insights, Settings, Login)
      styles/           # SCSS theming + globals
      lib/              # Firebase init
      tests/            # Unit tests
  server/               # Minimal Node.js Express API
```

## Notes
- This is a minimal scaffold. Replace placeholders with your real logic,
  charts, and data sources.
- The component library folder shows how to build and theme reusable pieces.
