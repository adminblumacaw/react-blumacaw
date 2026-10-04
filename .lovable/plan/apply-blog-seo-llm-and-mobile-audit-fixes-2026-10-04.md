# Apply Blog SEO, LLM, and Mobile Audit Fixes

## Changes
- Centralize blog listing and search metadata so article cards, prerendering, titles, sitemap generation, and AI-readable summaries use one source of truth.
- Add breadcrumb structured data to every blog article while preserving the existing article schema.
- Expand the one short meta description to a search-friendly length.
- Make sitemap and prerender coverage derive from the shared blog records to reduce URL drift.
- Improve blog image loading reliability without changing the current visual design or article content.

## Verification
- Check every blog URL for a successful response, one H1, canonical metadata, article and breadcrumb schema, and no mobile overflow.
- Confirm the project builds and the blog listing still links to every custom and standard article URL.

## Technical details
- Keep the existing React/Vite structure and server-rendered route registry.
- Preserve current public URLs, redirects, article copy, visual styling, and responsive table behavior.
