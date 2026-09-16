// Guards against the regressions that every Lovable export has reintroduced so far.
//
// Exports have repeatedly:
//   1. swapped real image imports for `.png.asset.json` metadata stubs whose
//      `.url` points at /__l5e/assets-v1/..., a host that does not resolve
//   2. shipped a stale scripts/prerender.mjs that drops already-published posts
//      back to the SPA shell
//   3. deleted routes for pages added outside Lovable (export 8 dropped
//      /privacy and /terms). rsync keeps the page files, so the only trace is
//      an App.tsx that no longer routes them — checks 1-7 all passed on it.
//   4. reinstated JSON-LD that was deliberately removed. Export 8 restored the
//      invalid offers.shippingDetails block, undoing a Search Console fix.
//   5. reverted files this repo owns — SEOHead.tsx, index.html's sameAs, and
//      the Header/Footer logo — which were previously restored by hand.
//   6. undone performance work in files exports regenerate: main.tsx
//      hydration, the hero's fade and YouTube facade, and the article ->
//      guide links in BlogPost.tsx (checks 14-18).
//
// Run `npm run check:export` after porting an export, before committing.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = resolve(ROOT, "src");

const failures = [];
const fail = (check, detail) => failures.push({ check, detail });

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = resolve(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const allFiles = walk(SRC);
const codeFiles = allFiles.filter((f) => /\.(tsx?|jsx?)$/.test(f));
const rel = (f) => f.replace(`${ROOT}/`, "");

// ---------------------------------------------------------------- check 1
// Lovable asset stubs must never reach the repo.
for (const f of codeFiles) {
  const src = readFileSync(f, "utf8");
  if (src.includes(".asset.json")) {
    fail("asset-stub-import", `${rel(f)} imports a .asset.json stub (use the real image file)`);
  }
  if (src.includes("__l5e")) {
    fail("dead-l5e-url", `${rel(f)} references /__l5e/ (does not resolve in production)`);
  }
}
// ...and the stub files themselves should not be committed.
for (const f of allFiles) {
  if (f.endsWith(".asset.json")) fail("asset-stub-file", `${rel(f)} should not be committed`);
}

// ---------------------------------------------------------------- check 2
// Every image imported from @/assets must exist on disk.
const IMG = /from\s+["'](@\/assets\/[^"']+\.(?:png|jpe?g|webp|svg|avif))["']/g;
for (const f of codeFiles) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(IMG)) {
    const onDisk = resolve(SRC, m[1].replace("@/", ""));
    if (!existsSync(onDisk)) {
      fail("missing-image", `${rel(f)} imports ${m[1]} which does not exist on disk`);
    }
  }
}

// ---------------------------------------------------------------- check 3
// Every blog slug rendered by the app must be prerendered, or it silently
// falls back to the generic SPA shell (no per-page title/canonical).
const slugsIn = (file) => {
  const src = readFileSync(resolve(ROOT, file), "utf8");
  return new Set([...src.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]));
};
const blogSlugs = slugsIn("src/pages/Blog.tsx");
const prerenderSlugs = slugsIn("scripts/prerender.mjs");

for (const slug of blogSlugs) {
  if (!prerenderSlugs.has(slug)) {
    fail("unprerendered-post", `"${slug}" is in Blog.tsx but missing from scripts/prerender.mjs`);
  }
}

// ---------------------------------------------------------------- check 4
// The sitemap should advertise every prerendered blog post.
const sitemap = readFileSync(resolve(ROOT, "public/sitemap.xml"), "utf8");
for (const slug of prerenderSlugs) {
  if (!sitemap.includes(slug)) {
    fail("missing-from-sitemap", `"${slug}" is prerendered but absent from public/sitemap.xml`);
  }
}

// ---------------------------------------------------------------- check 5
// SSR route parity: every route in App.tsx must also exist in
// entry-server.tsx (except the NotFound catch-all and pure redirects),
// or prerendering silently ships an empty page for it.
const routesOf = (file) =>
  new Set(
    [...readFileSync(resolve(ROOT, file), "utf8").matchAll(/<Route path="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((r) => r !== "*" && r !== "/affiliate/apply")
  );
const appRoutes = routesOf("src/App.tsx");
const ssrRoutes = routesOf("src/entry-server.tsx");
for (const r of appRoutes) {
  if (!ssrRoutes.has(r)) {
    fail("ssr-route-missing", `route "${r}" is in App.tsx but not src/entry-server.tsx (would prerender empty)`);
  }
}

// ---------------------------------------------------------------- check 6
// Every blog post in prerender.mjs needs a date (drives sitemap lastmod).
const prerenderSrc = readFileSync(resolve(ROOT, "scripts/prerender.mjs"), "utf8");
const blogSection = prerenderSrc.slice(prerenderSrc.indexOf("const blogPosts"));
for (const m of blogSection.matchAll(/\{([^{}]*?)\}/gs)) {
  const slug = m[1].match(/slug:\s*"([^"]+)"/);
  if (slug && !/date:\s*"/.test(m[1])) {
    fail("post-missing-date", `"${slug[1]}" in prerender.mjs has no date: (sitemap lastmod needs it)`);
  }
}

// ---------------------------------------------------------------- check 7
// Social/share image must exist — every page's og:image points at it, and a
// missing file gets swallowed by the SPA rewrite and served as text/html.
if (!existsSync(resolve(ROOT, "public/og-image.png"))) {
  fail("missing-og-image", "public/og-image.png does not exist (og:image would serve HTML)");
}

// ---------------------------------------------------------------- check 8
// Orphaned page files: every src/pages/*.tsx must be imported by App.tsx.
// Export 8 deleted the /privacy and /terms routes while rsync kept the page
// files, leaving live pages unreachable — checks 1-7 all passed. This is the
// signature of that class of regression.
const appSrc = readFileSync(resolve(ROOT, "src/App.tsx"), "utf8");
for (const f of allFiles) {
  if (!/src\/pages\/[^/]+\.tsx$/.test(f)) continue;
  const name = f.split("/").pop().replace(/\.tsx$/, "");
  if (!appSrc.includes(`pages/${name}"`)) {
    fail(
      "orphaned-page",
      `src/pages/${name}.tsx exists but App.tsx never imports it (page would be unreachable)`
    );
  }
}

// ---------------------------------------------------------------- check 9
// Every literal path prerendered must be routable by the SPA. A prerendered
// page whose App.tsx route disappeared still serves static HTML, then breaks
// on hydration and falls through to NotFound — invisible without checking.
// (Blog posts are generated as /blog/<slug> from the :slug route, so only
// literal `path:` values appear here.)
for (const m of prerenderSrc.matchAll(/path:\s*"([^"]+)"/g)) {
  const path = m[1];
  if (!appRoutes.has(path)) {
    fail(
      "prerendered-route-missing",
      `"${path}" is prerendered but has no <Route> in src/App.tsx (breaks on hydration)`
    );
  }
}

// ---------------------------------------------------------------- check 10
// The offer markup must not carry shippingDetails/doesNotShip. We sell a
// Shopify app subscription — nothing ships. That block triggered a Search
// Console "Merchant listings" warning (invalid shippingRate: doesNotShip is
// not in Google's spec, value was a string, and shippingDestination had no
// addressCountry). It was removed deliberately, then an older Lovable export
// silently reinstated it. Schema validity is invisible to every other check.
for (const f of codeFiles) {
  const src = readFileSync(f, "utf8");
  for (const bad of ["shippingDetails", "doesNotShip"]) {
    if (src.includes(bad)) {
      fail(
        "invalid-shipping-markup",
        `${rel(f)} contains "${bad}" — removed on purpose; an app subscription ships nothing ` +
          `and this re-triggers the Search Console merchant-listings warning`
      );
    }
  }
}

// ---------------------------------------------------------------- check 11
// SEOHead must stay this repo's version. Every export so far has reverted it
// to one that injects JSON-LD from useEffect (invisible to non-JS crawlers)
// and has no head collector (so the prerendered <title> drifts from the one
// Google sees after rendering). Until now this was restored by hand each port.
const seoHead = readFileSync(resolve(ROOT, "src/components/SEOHead.tsx"), "utf8");
for (const [needle, why] of [
  ["dangerouslySetInnerHTML", "JSON-LD must render in JSX so the prerender emits it statically"],
  ["SeoCollectorContext", "the prerender reads each page's title/description from it"],
  ["normalizeTitle", "strips the brand suffix that pushed titles past Google's display limit"],
  ["normalizeDescription", "keeps meta descriptions within Google's ~160-character snippet"],
]) {
  if (!seoHead.includes(needle)) {
    fail("seohead-reverted", `src/components/SEOHead.tsx lacks ${needle} — ${why} (restore it from main)`);
  }
}

// ---------------------------------------------------------------- check 12
// The Organization markup must keep its sameAs link to the Shopify App Store
// listing — the third-party corroboration AI assistants weight. Exports drop it.
const indexHtml = readFileSync(resolve(ROOT, "index.html"), "utf8");
if (!indexHtml.includes("apps.shopify.com/blumacawtech")) {
  fail("sameas-dropped", "index.html Organization JSON-LD lost sameAs -> https://apps.shopify.com/blumacawtech");
}

// ---------------------------------------------------------------- check 13
// The 1024x1024 logo is 1.1 MB. It is fine inside JSON-LD (only crawlers
// fetch it) but must not be an <img> — it rendered at 36px on every page.
const BIG_LOGO = "/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png";
const bigLogoAsImage = [`src="${BIG_LOGO}"`, `src={"${BIG_LOGO}"}`, "src={`" + BIG_LOGO + "`}"];
for (const f of codeFiles) {
  const src = readFileSync(f, "utf8");
  if (bigLogoAsImage.some((form) => src.includes(form))) {
    fail("oversized-logo", `${rel(f)} renders the 1.1 MB logo as an image — use @/assets/blumacaw-mark-120.png`);
  }
}

// ---------------------------------------------------------------- check 14
// main.tsx must hydrate the prerendered markup. Exports ship createRoot, which
// discards it and repaints once the JS arrives — measured on the emulator,
// that alone took mobile LCP from 1.6s to 5.6s.
const mainSrc = readFileSync(resolve(ROOT, "src/main.tsx"), "utf8");
if (!mainSrc.includes("hydrateRoot") || !mainSrc.includes("ssrPath")) {
  fail("hydration-removed", "src/main.tsx no longer hydrates prerendered pages (restore it from main)");
}

// ---------------------------------------------------------------- check 15
// Hydration only works if entry-server.tsx renders the same component tree as
// App.tsx outside <Routes>. A provider or widget added to App.tsx alone makes
// React throw the server markup away — silently, with no visible breakage.
const shellTags = (src) => {
  const outside = src.replace(/<Routes>[\s\S]*?<\/Routes>/g, "");
  return new Set(
    [...outside.matchAll(/<([A-Z][A-Za-z0-9]*(?:\.[A-Za-z]+)?)[\s/>]/g)]
      .map((m) => m[1])
      .map((t) => (t === "BrowserRouter" || t === "StaticRouter" ? "Router" : t))
      .filter((t) => !t.startsWith("SeoCollectorContext") && t !== "AppRoutes" && t !== "App" && t !== "PageFallback")
  );
};
const appTags = shellTags(appSrc);
const ssrTags = shellTags(readFileSync(resolve(ROOT, "src/entry-server.tsx"), "utf8"));
for (const t of appTags) {
  if (!ssrTags.has(t)) fail("ssr-tree-drift", `App.tsx renders <${t}> but src/entry-server.tsx does not — hydration will fall back to a full re-render`);
}
for (const t of ssrTags) {
  if (!appTags.has(t)) fail("ssr-tree-drift", `src/entry-server.tsx renders <${t}> but App.tsx does not — hydration will fall back to a full re-render`);
}

// ---------------------------------------------------------------- check 16
// Nothing above the fold may start invisible. The hero's fade-up animation
// begins at opacity 0, which Chrome ignores for LCP — it held mobile LCP at
// 4.3s. The hero video must also stay a click-to-load facade: a bare embed
// fetched ~1 MB of YouTube scripts on every visit.
const heroSrc = readFileSync(resolve(ROOT, "src/components/Hero.tsx"), "utf8");
if (/animate-fade-up/.test(heroSrc)) {
  fail("hero-fade", "src/components/Hero.tsx uses animate-fade-up* — above-the-fold content must not start at opacity 0");
}
// On desktop the hero poster is the LCP element; a YouTube-hosted thumbnail
// put a third-party connection inside LCP.
if (heroSrc.includes("<YouTubeFacade") && !/<YouTubeFacade[^>]*\bposter=/.test(heroSrc)) {
  fail("hero-poster", "src/components/Hero.tsx <YouTubeFacade> has no self-hosted poster= (desktop LCP)");
}
for (const f of codeFiles) {
  if (f.endsWith("/YouTubeFacade.tsx")) continue;
  if (readFileSync(f, "utf8").includes("youtube.com/embed")) {
    fail("youtube-embed", `${rel(f)} embeds YouTube directly — use <YouTubeFacade>`);
  }
}

// ---------------------------------------------------------------- check 17
// Metric-matched font fallbacks stop the web-font swap from reflowing the
// page (it pushed CLS to 0.12 once the hero was visible from first paint).
const tailwindSrc = readFileSync(resolve(ROOT, "tailwind.config.ts"), "utf8");
for (const family of ["Montserrat Fallback", "Inter Fallback"]) {
  if (!indexHtml.includes(`font-family: "${family}"`)) {
    fail("font-fallback", `index.html lost the @font-face for "${family}"`);
  }
  if (!tailwindSrc.includes(family)) {
    fail("font-fallback", `tailwind.config.ts fontFamily no longer lists "${family}"`);
  }
}

// ---------------------------------------------------------------- check 18
// Articles must keep linking to the setup guides — the guides were unindexed
// with no referring page before this. Every mapped path must be a real route,
// and every guide route must be linked from at least one article.
const blogPostSrc = readFileSync(resolve(ROOT, "src/pages/BlogPost.tsx"), "utf8");
if (!blogPostSrc.includes("<RelatedGuides")) {
  fail("related-guides", "src/pages/BlogPost.tsx no longer renders <RelatedGuides slug={slug} />");
}
const relatedSrc = readFileSync(resolve(ROOT, "src/components/RelatedGuides.tsx"), "utf8");
const linkedGuides = new Set([...relatedSrc.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]));
for (const g of linkedGuides) {
  if (!appRoutes.has(g)) fail("related-guides", `RelatedGuides links ${g}, which has no <Route> in App.tsx`);
}
for (const r of appRoutes) {
  if (r.endsWith("-guide") && !linkedGuides.has(r)) {
    fail("related-guides", `guide ${r} is not linked from any article — add it to src/components/RelatedGuides.tsx`);
  }
}

// ---------------------------------------------------------------- report
const checks = [
  "no .asset.json stubs (imports or files)",
  "no /__l5e/ references",
  "every imported image exists on disk",
  "every Blog.tsx slug is prerendered",
  "every prerendered slug is in the sitemap",
  "every App.tsx route exists in entry-server.tsx",
  "every prerender blog post has a date",
  "public/og-image.png exists",
  "every page file is imported by App.tsx",
  "every prerendered path has an App.tsx route",
  "no shippingDetails/doesNotShip in offer markup",
  "SEOHead keeps static JSON-LD, head collector and normalizers",
  "index.html keeps the App Store sameAs",
  "no component renders the 1.1 MB logo",
  "main.tsx hydrates prerendered pages",
  "entry-server.tsx renders the same shell as App.tsx",
  "hero has no fade-in and uses the YouTube facade",
  "metric-matched font fallbacks are in place",
  "articles link every setup guide",
];

if (failures.length === 0) {
  console.log("check:export passed");
  for (const c of checks) console.log(`  ok  ${c}`);
  console.log(`\n  ${blogSlugs.size} blog posts, ${prerenderSlugs.size} prerendered slugs`);
  process.exit(0);
}

console.error(`check:export FAILED - ${failures.length} problem(s)\n`);
const byCheck = {};
for (const { check, detail } of failures) (byCheck[check] ??= []).push(detail);
for (const [check, details] of Object.entries(byCheck)) {
  console.error(`  [${check}]`);
  for (const d of details) console.error(`    - ${d}`);
}
console.error(
  "\nThese are the regressions Lovable exports reintroduce. Re-run the port's\n" +
    "normalization step (rewrite .asset.json imports back to the real image\n" +
    "files, drop the .url access, keep this repo's scripts/prerender.mjs,\n" +
    "SEOHead.tsx, App.tsx routes and index.html, and strip shippingDetails)."
);
process.exit(1);
