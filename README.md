# Joaquin Sotelo · Full-Stack Portfolio

A complete, responsive, English-language portfolio built with React, Vite, JavaScript, Tailwind CSS, and Motion. Designed for **[JoaquinSotel0/JoaquinSotel0.github.io](https://github.com/JoaquinSotel0/JoaquinSotel0.github.io)** and the root URL **https://joaquinsotel0.github.io/**.

The dark interface includes a developer-profile hero, three repository-backed projects, expandable contribution details, an about section, the supplied technology inventory, and GitHub contact links. Project Plan Generator and COVID-2020-Durango include owner-supplied screenshots. Flores-MobileNetV2 includes a YouTube demo with a direct viewing link. Fonts are self-hosted.

## Run locally

Install **Node.js 22.12 or newer** and npm. With [nvm](https://github.com/nvm-sh/nvm), run `nvm install` and `nvm use` in this folder to follow `.nvmrc`.

```bash
npm ci
npm run dev
```

Open the Local URL printed by Vite, usually http://127.0.0.1:5173. The site reloads as you edit. No API keys, database, or environment variables are needed.

## Scripts

| Command           | Purpose                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| `npm run dev`     | Local development with live reload                                     |
| `npm run check`   | Offline safeguards for repository links, supplied skills, and metadata |
| `npm run build`   | Create production files in `dist/`                                     |
| `npm run preview` | Serve the production build, usually on http://127.0.0.1:4173           |

To inspect the production version:

```bash
npm run check
npm run build
npm run preview
```

`check` does not contact GitHub or replace browser testing. See [validation notes](docs/VALIDATION.md) for checks performed on this delivery.

## Deploy to GitHub Pages

1. Create or open **JoaquinSotel0/JoaquinSotel0.github.io** on GitHub. Use that exact repository name for a user site. A public repository works with GitHub Free.
2. Put **the contents of this folder** at the repository root, including `.github`, `.gitignore`, `.nvmrc`, `package.json`, and `package-lock.json`. Do not upload a parent folder, `node_modules`, or the ZIP itself. Use Git to preserve the hidden files.
3. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**. Ensure repository Actions are enabled.
4. Push to **main**. The included `.github/workflows/deploy.yml` installs locked dependencies, runs content checks, builds, uploads `dist/`, and deploys it to the `github-pages` environment. Pull requests run checks/build without deployment.
5. Watch **Actions → Build and deploy portfolio**. Once the deploy job succeeds, open **https://joaquinsotel0.github.io/**. You can also start it with **Run workflow** from `main`.

For a new, empty GitHub repository, run from this folder:

```bash
git init -b main
git add .
git commit -m "Build full-stack portfolio"
git remote add origin https://github.com/JoaquinSotel0/JoaquinSotel0.github.io.git
git push -u origin main
```

Authenticate with your own GitHub account when prompted. If the repository already has content, clone it first and copy these files into that checkout; review the changes before committing. Do not force-push over existing work.

No personal access token or `gh-pages` branch is needed for this workflow. It uses GitHub's built-in token with `pages: write` and `id-token: write` only in the deploy job. A repository environment rule may require you to approve a deployment in GitHub.

`vite.config.js` uses `base: '/'`, appropriate for this **user-site** repository. If you later deploy to a project repository under `/another-repo/`, change the base and root-relative metadata/favicon URLs accordingly. This is a single-page portfolio with hash navigation; a client-side router or custom 404 fallback is unnecessary.

## Edit the portfolio

```text
.github/workflows/deploy.yml  Build and Pages deployment
public/                     Favicon, robots, sitemap
src/
  components/               Header, hero, project art/cards, icons, reveal animation
  data/portfolio.js          Profile, project copy, contribution notes, skills
  App.jsx                   Section composition, about, contact, footer
  main.jsx                  React entry point and local fonts
  styles.css                Tailwind integration, design tokens, responsive styling
scripts/check-content.mjs   Offline content checks
docs/CONTENT_SOURCES.md      Claim-by-claim attribution and commit evidence
docs/VALIDATION.md           Delivery checks and remaining deployment step
index.html                  SEO and English document metadata
vite.config.js              Vite + React + Tailwind; root-site base
```

- **Content:** edit `src/data/portfolio.js`; about/contact copy lives in `src/App.jsx`.
- **Project media:** edit each project’s `screenshots` or `video` field in `src/data/portfolio.js`. Image paths start with `/images/` and refer to files inside `public/images/`. Videos use a YouTube video ID, title, and watch URL; playback supports full screen and does not start automatically. Screenshot links open the full image in a new tab.
- **Design:** edit `src/styles.css`. The `@theme` block defines Tailwind font/color tokens; component rules handle the art and layouts. Tailwind utilities are available throughout JSX.
- **Motion:** `Reveal.jsx` provides restrained viewport transitions, with system reduced-motion support in both Motion and CSS.
- **Projects:** keep project scope separate from your own verified work. Review [content sources](docs/CONTENT_SOURCES.md) before changing attribution.
- **Contact:** GitHub is the supplied contact destination. Add an email or LinkedIn only after confirming the real address or URL. There is no nonfunctional contact form or résumé download.
- **SEO:** update title/description/canonical and Open Graph metadata in `index.html`, plus `public/sitemap.xml` and `public/robots.txt` if the domain changes.

Navigation supports keyboard focus, Escape closes the mobile menu, native disclosures work without custom keyboard handlers, and a skip link reaches the main content. The sticky header keeps section anchors visible.

## Troubleshooting

- **Unsupported Node version:** use `.nvmrc` and reinstall with `npm ci`.
- **Pages 404:** confirm the repository name, `main`, Actions source, and a successful deploy job. Pages setup happens in the repository settings, not in Vite.
- **Blank page or missing assets:** confirm you uploaded the project contents at the root and retained `base: '/'` for this user site.
- **Workflow permission or environment error:** check Actions policies, Pages availability, and `github-pages` environment rules in the repository.
- **Dependency mismatch:** commit `package-lock.json` with `package.json`; CI uses `npm ci` for a reproducible installation.
- **Preview without a server:** opening `dist/index.html` directly as a file is unsupported. Use `npm run preview`.

Production URL: **https://joaquinsotel0.github.io/**. Updates pushed to `main` are built and published by the included workflow. Check the repository Actions tab for the latest deployment result.
