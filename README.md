# geonature-fr

Proposed replacement GeoNature promotional site for [geonature.fr](https://geonature.fr). Built using [Next.js](https://nextjs.org/) with TypeScript, it is intended to be hosted as a fully static site on GitHub Pages.

## Principles

- Static HTML (JavaScript used to enhance websiet, but not a requirement)
- SEO friendly (includes sitemap)
- Auto build/deploy (to facilitate updates)
- Open source

## Getting Started

The site uses [PNPM](https://pnpm.io/), an optimised version of NPM. To get started `pnpm install` then run `pnpm dev` for running the site in dev mode at [http://localhost:3000](http://localhost:3000).

## Contributing

Please use Prettier to format code in the `src/` directory, this is automatically checked by GitHub Actions before the site is built and deployed, and will fail if the code does not conform.

```bash
pnpm dlx prettier@latest --write src
```

## Building and Deploying

The site uses Next.js's "export" functionality. To build locally, run `pnpm build` and you can see the result in `out/`. Deployment is handled automatically by GitHub Actions, visible in the `.github/workflows/` directory.

## Architecture

- `.github/workflows/` GitHub Actions (build and deploy)
- `public/` Static assets (images, icons, GeoJSON)
- `src/` Main code
  - `_posts/` **Blog posts** in Markdown format
  - `components/dynamic/` Components for dynamic aspects of the page (API calls, geospatial etc)
  - `components/presentation/` Visual components (cards, features, etc)
  - `layout/` Header, footer etc
  - `lib/` Helper libraries for transforming blog posts
  - `pages/` **Pages** of the website (as per Next.js norms)
  - `styles/` Bootstrap import plus variable overrides and custom SCSS

## TODO

### MVP

- [ ] Optimise images
- [ ] Fix alt text for images
- [ ] Document components in docstrings
- [ ] Add font loading (Open Sans)
- [ ] Check current site layout (links/broken links)
- [ ] Add news/blog from markdown source
- [ ] Home: latest news

### Content

- [ ] Add architectural information
- [ ] Add links to providers of GeoNature
- [ ] Protocols page
- [ ] Actu page (import into blog feature?)
- [ ] Update static map of installations (polygons, type of entity, more information)

### Future

- [ ] Crowd sourcing install information with geospatial information
- [ ] Add custom illustrations
- [ ] Add photos from Ecrins/elsewhere to replace Unsplash
- [ ] Copywrite content (help from NS comms?)
