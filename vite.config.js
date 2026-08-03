import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ---------------------------------------------------------------------------
// GITHUB PAGES CONFIG — READ ME
// ---------------------------------------------------------------------------
// GitHub Pages serves project sites from https://USERNAME.github.io/REPO_NAME/
// so every asset path needs to be aware of that "/REPO_NAME/" prefix.
//
// 👉 Change REPO_NAME below to match the exact name of the GitHub repository
//    you push this project to (case-sensitive).
//
// If you are instead deploying to a USER/ORG page (a repo literally named
// "<username>.github.io"), set REPO_NAME to '' so the base path is just "/".
// ---------------------------------------------------------------------------
const REPO_NAME = 'insha-portfolio'

export default defineConfig({
  plugins: [react()],
  base: REPO_NAME ? `/${REPO_NAME}/` : '/',
})
