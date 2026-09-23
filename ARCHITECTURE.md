# GorillaMade Astro architecture

This project uses the Astro starter as the foundation and keeps the GorillaMade website component/content structure.

## Styling contract

- `sass/` contains the framework-agnostic design-system source.
- Only `base.scss`, `patterns.scss`, `utilities.scss`, and `global.scss` are Sass entrypoints.
- They compile to `src/styles/*.css`.
- `BaseLayout.astro` imports only `@/styles/global.css`.
- Component-specific styles live in their `.astro` components and are scoped by Astro.
- There is no global `components.scss` bundle.

## Content

The existing `blog` and `showcase` collections are retained. `services` is added using the same content-collection approach. Dynamic detail routes use `[...id].astro`.

## SEO

SEO metadata and the base Schema.org `@graph` are centralized in `src/components/seo/SEO.astro`, with business/site identity in `src/data/business.ts`. Pages can add page-specific structured data through the layout props.
