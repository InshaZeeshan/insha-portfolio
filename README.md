# Insha Zeeshan — Portfolio

A personal developer portfolio built as a playful "digital workspace" — cute interactive
project folders, a berry-toned color system, and a scrapbook-meets-editorial aesthetic.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion (for the folder-opening and hover interactions)
- Lucide icons

## Run Locally

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Production Build

```
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/`.

## Customize

Everything personal lives in `src/data/`, so you shouldn't need to dig through
component code to update content:

| What to change | File |
|---|---|
| Email, LinkedIn, GitHub, resume link | `src/data/profile.js` |
| The three projects (descriptions, tech, links) | `src/data/projects.js` |
| Work experience (HCLTech, Megasoft) | `src/data/experience.js` |
| Toolbox / skills groups | `src/data/skills.js` |
| Repository name / GitHub Pages base path | `vite.config.js` (`REPO_NAME` constant) |

Look for `YOUR_EMAIL`, `YOUR_GITHUB_URL`, `YOUR_LINKEDIN_URL`, and `YOUR_RESUME_URL`
in `src/data/profile.js` — replace those placeholders with your real links. Project
`githubUrl` / `liveUrl` fields work the same way: leave them as empty strings until
a link exists, and the corresponding button will hide itself (or show a "coming soon"
label for the code link) instead of pointing nowhere.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `insha-portfolio`).
2. **Important:** open `vite.config.js` and set `REPO_NAME` to the exact name of that
   repository. If you're deploying to a user/org page instead (a repo literally named
   `<your-username>.github.io`), set `REPO_NAME = ''`.
3. Push this project to the repository's `main` branch:
   ```
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
4. In the repository on GitHub, go to **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Push (or re-push) to `main` — this repo already includes
   `.github/workflows/deploy.yml`, which will install dependencies, run
   `npm run build`, and deploy the `dist/` folder automatically.
7. Once the workflow finishes (check the **Actions** tab), your site will be live at
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

This is a single-page scrolling site by design, so refreshing the deployed page won't
produce GitHub Pages 404s.

## Notes

- No external images are hotlinked — all decorative elements are CSS/SVG so nothing
  breaks if a third-party image host goes down.
- `prefers-reduced-motion` is respected globally.
- Only the three real projects and two real employers described are included —
  update `src/data/` directly if that ever changes, rather than adding placeholders.
