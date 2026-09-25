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
//   7. brought back what Lovable's own copy still has: over-long search
//      titles and colour tokens that fail WCAG contrast (checks 19-20). The
//      build (title length) and `npm run check:a11y` (every rendered page)
//      are the full gates; these are the fast static versions.
//   8. Lovable's repo commits its .env (Supabase and connector keys), so
//      every ZIP contains one. This repo is public and supplies those values
//      from CI secrets (check 21).
//   9. (the other direction) broke Lovable's own build: Lovable installs with
//      `bun install --frozen-lockfile`, so a package.json change without a
//      matching bun.lock fails there even though npm CI here passes (check 22).
//  10. moved every article's publish date months later to look fresh
//      (export 13, 2026-09-25). Published dates are fixed; revisions go in
//      updated/updatedIsoDate (check 23).
//
// Classes 1-7 came from Lovable editing a copy that never had this repo's
// changes. Since 2026-09-18 scripts/sync-to-lovable.sh pushes this repo into
// Lovable's (UtakarshBluMacawTech/macaw-bloom-renew), so exports start from
// it; run that script after any change made here rather than in Lovable.
//
// Run `npm run check:export` after porting an export, before committing.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
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

// ---------------------------------------------------------------- check 19
// Search titles: SEOHead must prefer the short titles in src/lib/seoTitles.ts,
// each of which must fit, and the prerender must keep failing the build on
// any page whose title does not.
const seoTitlesPath = resolve(ROOT, "src/lib/seoTitles.ts");
if (!existsSync(seoTitlesPath)) {
  fail("seo-titles", "src/lib/seoTitles.ts is missing (short search titles for long headlines)");
} else {
  const titlesSrc = readFileSync(seoTitlesPath, "utf8");
  const max = Number(titlesSrc.match(/SEO_TITLE_MAX\s*=\s*(\d+)/)?.[1] ?? 60);
  const knownPaths = new Set([...appRoutes, ...[...blogSlugs].map((slug) => `/blog/${slug}`)]);
  for (const m of titlesSrc.matchAll(/^\s*"([^"]+)":\s*"([^"]+)",?\s*$/gm)) {
    const [, path, title] = m;
    if (title.length > max) fail("seo-titles", `seoTitles.ts title for ${path} is ${title.length} characters (max ${max})`);
    if (!knownPaths.has(path)) fail("seo-titles", `seoTitles.ts has a title for ${path}, which is not a route or blog post`);
  }
}
if (!seoHead.includes("SEO_TITLES[canonicalPath]")) {
  fail("seo-titles", "src/components/SEOHead.tsx no longer applies SEO_TITLES (restore it from main)");
}
if (!readFileSync(resolve(ROOT, "src/entry-server.tsx"), "utf8").includes("SEO_TITLE_MAX")) {
  fail("seo-titles", "src/entry-server.tsx no longer exports SEO_TITLE_MAX (the prerender's title-length gate reads it)");
}
if (!readFileSync(resolve(ROOT, "scripts/prerender.mjs"), "utf8").includes("longTitles")) {
  fail("seo-titles", "scripts/prerender.mjs lost the title-length gate (restore it from main)");
}

// ---------------------------------------------------------------- check 20
// Colour contrast of the design tokens (WCAG AA: 4.5:1 for body text).
// Lighthouse flagged 72 elements before these were fixed; nearly all came
// from four tokens, so checking the tokens catches a reverted index.css
// without a browser. Markup-level problems are check:a11y's job.
const indexCss = readFileSync(resolve(ROOT, "src/index.css"), "utf8");
const tokensIn = (block) =>
  Object.fromEntries(
    [...(block ?? "").matchAll(/--([\w-]+):\s*([\d.]+)\s+([\d.]+)%\s+([\d.]+)%\s*;/g)].map((m) => [m[1], [+m[2], +m[3], +m[4]]])
  );
const hslToRgb = ([h, s, l]) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)];
};
const luminance = (hsl) =>
  hslToRgb(hsl)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    .reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const rootTokens = tokensIn(indexCss.match(/:root\s*\{([\s\S]*?)\n\s*\}/)?.[1]);
const darkSection = tokensIn(indexCss.match(/\.section-dark\s*\{([\s\S]*?)\}/)?.[1]);
const pairs = [
  ["foreground", "background"], ["foreground", "card"],
  ["muted-foreground", "background"], ["muted-foreground", "card"], ["muted-foreground", "muted"],
  ["accent-text", "background"], ["accent-text", "card"], ["accent-text", "muted"],
  ["primary", "background"], ["primary", "card"],
  ["destructive", "background"], ["destructive", "card"],
  ["primary-foreground", "primary"], ["secondary-foreground", "secondary"],
  ["accent-foreground", "accent"], ["destructive-foreground", "destructive"],
];
const missingTokens = new Set(pairs.flat().filter((t) => !rootTokens[t]));
for (const t of missingTokens) fail("contrast-tokens", `src/index.css :root is missing --${t}`);
for (const [fg, bg] of pairs) {
  if (missingTokens.has(fg) || missingTokens.has(bg)) continue;
  const ratio = contrast(rootTokens[fg], rootTokens[bg]);
  if (ratio < 4.5) fail("contrast-tokens", `--${fg} on --${bg} is ${ratio.toFixed(2)}:1 (needs 4.5:1) in src/index.css`);
}
if (!darkSection["accent-text"]) {
  fail("contrast-tokens", "src/index.css .section-dark must set --accent-text (the light-mode teal is 3:1 on the dark footer)");
} else if (rootTokens["dark-bg"] && contrast(darkSection["accent-text"], rootTokens["dark-bg"]) < 4.5) {
  fail("contrast-tokens", "src/index.css .section-dark --accent-text is under 4.5:1 on --dark-bg");
}
for (const name of ["accent", "secondary"]) {
  if (!new RegExp(`textColor:[\\s\\S]*?\\b${name}:\\s*\\{\\s*DEFAULT:\\s*['"]hsl\\(var\\(--accent-text\\)\\)['"]`).test(tailwindSrc)) {
    fail("contrast-tokens", `tailwind.config.ts textColor.${name} must use --accent-text (bright teal text is 2.1:1)`);
  }
}
if (!indexCss.includes(".prose blockquote")) {
  fail("contrast-tokens", "src/index.css lost the .prose blockquote colour (muted text on the teal quote panel is 3.3:1)");
}

// ---------------------------------------------------------------- check 21
// .env must never be committed here: this repository is public. Lovable's
// repo tracks its .env, so every ZIP export contains one; .gitignore is what
// keeps it out when the export is copied over this tree.
const gitignore = readFileSync(resolve(ROOT, ".gitignore"), "utf8");
if (!/^\.env$/m.test(gitignore)) {
  fail("env-committed", ".gitignore must list .env (Lovable exports include one; this repo is public)");
}
try {
  const tracked = execFileSync("git", ["ls-files", "--", ".env", ".env.*"], { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter((f) => f && f !== ".env.example");
  for (const f of tracked) fail("env-committed", `${f} is tracked by git — run: git rm --cached ${f}`);
} catch {
  // Not a git checkout (e.g. a CI step without .git): .gitignore check above still applies.
}

// ---------------------------------------------------------------- check 22
// bun.lock must list exactly package.json's dependencies. Lovable installs
// with a frozen bun lockfile; the first sync (2026-09-18) failed Lovable's
// build because axe-core and puppeteer-core were only in package-lock.json.
// Fix: `npx bun@1 install` (not --frozen-lockfile) and commit bun.lock.
const bunLockPath = resolve(ROOT, "bun.lock");
if (existsSync(bunLockPath)) {
  const pkg = JSON.parse(readFileSync(resolve(ROOT, "package.json"), "utf8"));
  // bun.lock is JSON with trailing commas.
  const lock = JSON.parse(readFileSync(bunLockPath, "utf8").replace(/,(\s*[}\]])/g, "$1"));
  const ws = lock.workspaces?.[""] ?? {};
  for (const field of ["dependencies", "devDependencies", "optionalDependencies", "peerDependencies"]) {
    const want = pkg[field] ?? {};
    const have = ws[field] ?? {};
    for (const name of new Set([...Object.keys(want), ...Object.keys(have)])) {
      if (want[name] !== have[name]) {
        fail(
          "bun-lock-drift",
          `bun.lock ${field}.${name} is ${have[name] ?? "missing"}, package.json has ${want[name] ?? "nothing"} — ` +
            "run `npx bun@1 install` and commit bun.lock (Lovable's build uses a frozen bun lockfile)"
        );
      }
    }
  }
}

// ---------------------------------------------------------------- check 23
// Blog dates. A published date records when the article first went out; it
// never moves. A revision sets `updated`/`updatedIsoDate`, which the page
// shows as "Updated …" and which feeds dateModified and the sitemap lastmod.
// Google already indexed these articles with these dates, and says
// datePublished must stay the original date. The four copies of each date
// (BlogPost.tsx, Blog.tsx, BlogSection.tsx, prerender.mjs) must also agree.
const PUBLISHED = {
  "introducing-page-lock-hide-price": "2026-04-08",
  "guide-creating-wholesale-store-shopify": "2026-03-15",
  "bmt-perfect-for-d2c-brands-expanding-wholesale": "2026-03-08",
  "bmt-smarter-choice-than-traditional-wholesale-apps": "2026-02-26",
  "bmt-b2b-partner-established-us-shopify-store": "2026-02-26",
  "merchant-increased-b2b-revenue-40-percent": "2026-02-12",
  "shopify-wholesale-app-small-business": "2026-02-26",
  "best-shopify-wholesale-apps-2026": "2026-03-14",
  "shopify-b2b-build-complete-wholesale-store": "2026-03-19",
  "best-shopify-wholesale-apps": "2026-05-04",
  "shopify-wholesale-registration-form": "2026-05-20",
  "wholesale-gorilla-alternatives": "2026-05-31",
  "sparklayer-alternatives": "2026-06-15",
  "shopify-revenue-leaks": "2026-08-02",
  "bss-b2b-wholesale-pricing-alternatives": "2026-08-11",
  "sami-b2b-wholesale-pricing-alternatives": "2026-08-11",
};
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const displayDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};
const field = (chunk, name) => chunk.match(new RegExp(`\\n\\s*${name}: "([^"]*)"`))?.[1];
// slug -> the text of its record, for files that list posts as { slug: "…", … }
const recordsBySlugField = (file) => {
  const src = readFileSync(resolve(ROOT, file), "utf8");
  const starts = [...src.matchAll(/\n\s*slug: "([^"]+)"/g)];
  return new Map(starts.map((m, i) => [m[1], src.slice(m.index, starts[i + 1]?.index ?? src.length)]));
};
const postDates = (chunk) => ({
  date: field(chunk, "date"),
  isoDate: field(chunk, "isoDate"),
  updated: field(chunk, "updated"),
  updatedIsoDate: field(chunk, "updatedIsoDate"),
});
const blogPostRecords = (() => {
  const src = readFileSync(resolve(ROOT, "src/pages/BlogPost.tsx"), "utf8");
  const starts = [...src.matchAll(/\n  "([a-z0-9-]+)": \{\n/g)];
  return new Map(starts.map((m, i) => {
    const chunk = src.slice(m.index, starts[i + 1]?.index ?? src.length);
    return [m[1], chunk.slice(0, chunk.search(/\n\s*content:/) >>> 0)];
  }));
})();
const blogList = recordsBySlugField("src/pages/Blog.tsx");
const homeCards = recordsBySlugField("src/components/BlogSection.tsx");
const prerenderPosts = recordsBySlugField("scripts/prerender.mjs");
const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
const dateFail = (detail) => fail("blog-dates", detail);
for (const [slug, listChunk] of blogList) {
  const list = postDates(listChunk);
  const post = postDates(blogPostRecords.get(slug) ?? "");
  const pre = prerenderPosts.get(slug) ?? "";
  if (!list.isoDate) { dateFail(`Blog.tsx ${slug} has no isoDate`); continue; }
  if (PUBLISHED[slug] && list.isoDate !== PUBLISHED[slug]) {
    dateFail(`${slug} publish date changed ${PUBLISHED[slug]} -> ${list.isoDate}. Keep the original; set updated/updatedIsoDate for a revision`);
  }
  if (list.date !== displayDate(list.isoDate)) dateFail(`Blog.tsx ${slug} date "${list.date}" does not match isoDate ${list.isoDate}`);
  if (post.isoDate !== list.isoDate || post.date !== list.date) dateFail(`BlogPost.tsx ${slug} published date differs from Blog.tsx`);
  if (field(pre, "date") !== list.isoDate) dateFail(`prerender.mjs ${slug} date ${field(pre, "date")} differs from Blog.tsx ${list.isoDate}`);
  if (list.isoDate > tomorrow) dateFail(`${slug} is dated in the future (${list.isoDate})`);
  if (list.updatedIsoDate || post.updatedIsoDate || field(pre, "updated")) {
    const u = list.updatedIsoDate;
    if (!u || u !== post.updatedIsoDate || u !== field(pre, "updated")) {
      dateFail(`${slug} updated date differs: Blog.tsx ${u}, BlogPost.tsx ${post.updatedIsoDate}, prerender.mjs ${field(pre, "updated")}`);
    } else {
      if (list.updated !== displayDate(u) || post.updated !== list.updated) dateFail(`${slug} updated label does not match updatedIsoDate ${u}`);
      if (u < list.isoDate) dateFail(`${slug} updated ${u} is before it was published ${list.isoDate}`);
      if (u > tomorrow) dateFail(`${slug} updated date is in the future (${u})`);
    }
  }
  const card = homeCards.get(slug);
  if (card) {
    const c = postDates(card);
    if (c.date !== list.date || c.updated !== list.updated) dateFail(`BlogSection.tsx ${slug} dates differ from Blog.tsx`);
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
  "long headlines have a short search title",
  "colour tokens meet WCAG AA contrast",
  ".env is ignored and not tracked",
  "bun.lock matches package.json (Lovable's install)",
  "blog publish dates unchanged; updated dates consistent",
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
