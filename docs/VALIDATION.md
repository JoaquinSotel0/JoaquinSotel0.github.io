# Delivery validation

Checked locally on November 8, 2026, using Node.js 22.23.4.

| Check | Result |
| --- | --- |
| Clean install with `npm ci --offline --no-audit --no-fund` using the populated local package cache | Passed |
| `npm run check` | Passed: 3 intended repositories, evidence URLs, 16 supplied technologies, English metadata |
| `npm run build` | Passed: Vite production output in `dist/` |
| Production preview HTTP response | 200 OK |
| Browser widths | Inspected at 320, 390, 768, 843, and 1440 pixels |
| Horizontal page overflow after the fix | None at 320, 390, 768, or 1440 pixels |
| Navigation | Section links and back-to-top exercised; all internal anchor targets exist |
| Mobile navigation | Opens, closes after selecting a section, and closes with Escape |
| Contribution disclosures | Project Plan Generator and ProyectoINGE details opened successfully |
| Browser console | No warnings or errors observed in the production preview |
| Outgoing links | All 7 distinct portfolio GitHub URLs returned HTTP 200; external links include `noopener noreferrer` |
| Dependency installation audit | No vulnerabilities reported at installation time |
| Deployment workflow | YAML parsed successfully; Actions and Pages configuration reviewed against official documentation |

A decorative hero element initially caused mobile horizontal overflow. Its paint area was constrained and the affected widths were checked again. The floating caption was also moved within the desktop content boundary.

Reduced-motion support, semantic headings, keyboard focus styles, a skip link, and native disclosures are implemented. These checks are a focused delivery review, not a full accessibility audit or exhaustive cross-browser certification.

## Deployment

Repository: [JoaquinSotel0/JoaquinSotel0.github.io](https://github.com/JoaquinSotel0/JoaquinSotel0.github.io). GitHub Pages is configured to use **GitHub Actions**, with HTTPS enforced on the default domain. The production target is **https://joaquinsotel0.github.io/**.

The original local delivery checks above are separate from the live deployment. The current deployment result is available in the repository's [Actions tab](https://github.com/JoaquinSotel0/JoaquinSotel0.github.io/actions).

The source archive intentionally excludes `node_modules/` and `dist/`. `npm ci` restores dependencies and `npm run build` regenerates the production files. Hidden source files, including the deployment workflow, are included in the archive.

## Flores-MobileNetV2 update — November 9, 2026

ProyectoINGE was replaced by Flores-MobileNetV2 at the owner's request. The project's README, browser inference code, and 104 class labels were inspected. The new card uses the original project icon. The production build and content checks passed. Browser review confirmed the icon and existing Project Plan Generator screenshots load, the model/application disclosure opens, and the layout has no horizontal page overflow at desktop (1280 px) or mobile (390 px) widths. No browser console warnings or errors were observed.
