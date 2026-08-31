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
    "files, drop the .url access, and keep this repo's scripts/prerender.mjs)."
);
process.exit(1);
