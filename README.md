# Portfolio

Personal site for **Aarjav Sheth**, built with [Vite](https://vitejs.dev/) and TypeScript. Content lives in [`src/content.ts`](src/content.ts); layout and styling are in [`src/main.ts`](src/main.ts) and [`src/styles.css`](src/styles.css).

## Development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output is written to `dist/`. Preview locally:

```bash
npm run preview
```

## Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Connect this repository in the Netlify UI and use the settings above.

## GitHub Pages

The repository root [`index.html`](index.html) redirects visitors to the Netlify deployment. The Vite app is meant to be deployed from `dist/` (for example via Netlify). To serve the new site from GitHub Pages instead, replace that redirect with your chosen Pages setup (for example publishing the `dist` output to the default branch or using Actions).

## Resume PDF

Add `public/files/AarjavResume.pdf`, then set `resumeUrl` in `src/content.ts` to `"/files/AarjavResume.pdf"`. See [`public/files/README.txt`](public/files/README.txt).
