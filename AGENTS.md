# Project Architecture Rules

- Register every public page in both the client router and the server-rendered route list so visitors and crawlers receive matching content.
- Keep blog card, canonical URL, date, and search-description metadata in the shared blog manifest so listing, article, and prerender output cannot drift.
- The site's address is https://blumacawtech.com. Use it in every canonical URL, og:url, sitemap entry, robots.txt, llms.txt and JSON-LD; never the lovable.app preview address.
- Search titles are 60 characters at most. For a longer headline, add a short title for its path in src/lib/seoTitles.ts; never raise SEO_TITLE_MAX.
- Never change a published article's date or isoDate. When an article is revised, set updated and updatedIsoDate on its record in src/data/blogManifest.js.
- More rules for keeping the live site intact are in README.md under "How this site ships".
- `public/developers/api/` is a private, standalone page (the BMT app's API reference). Never add it to the router, the prerender list, the sitemap, llms.txt or any menu. See README.md, "Private pages".
