# NOVA STORE

## Build for Netlify Drop

1. Install dependencies with `npm install`.
2. Run `npm run build`.
3. Drag the generated `dist` folder into [Netlify Drop](https://app.netlify.com/drop).

The build includes `public/_redirects`, which routes direct requests for client-side pages (such as `/checkout` and `/product/...`) to the app entry point.

## Local development

- `npm run dev` starts the development server.
- `npm run preview` serves the production build locally.
- `npm run lint` runs Oxlint.
