# Project Architecture Rules

- Register every public page in both the client router and the server-rendered route list so visitors and crawlers receive matching content.
- Link Request Quote app task guides from their matching section on the parent configuration guide so product-specific instructions stay grouped together.
- Keep blog card, canonical URL, date, and search-description metadata in the shared blog manifest so listing, article, and prerender output cannot drift.
- The site's address is https://blumacawtech.com. Use it in every canonical URL, og:url, sitemap entry, robots.txt, llms.txt and JSON-LD; never the lovable.app preview address.
- Search titles are 60 characters at most. For a longer headline, add a short title for its path in src/lib/seoTitles.ts; never raise SEO_TITLE_MAX.
- Never change a published article's date or isoDate. When an article is revised, set updated and updatedIsoDate on its record in src/data/blogManifest.js.
- More rules for keeping the live site intact are in README.md under "How this site ships".
- `public/developers/api/` is a private, standalone page (the BMT app's API reference). Never add it to the router, the prerender list, the sitemap, llms.txt or any menu. See README.md, "Private pages".
- Keep Pricing in the header menu and the footer, the FAQ section (compact, with its FAQPage data) on the homepage and /pricing, and the Support section (live chat, book a session, documentation). The owner decided to keep these on 18 Oct 2026; scripts/check-export.mjs fails without them.
