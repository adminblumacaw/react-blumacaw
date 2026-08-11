// Guards against the regressions that every Lovable export has reintroduced so far.
//
// Exports have repeatedly:
//   1. swapped real image imports for `.png.asset.json` metadata stubs whose
//      `.url` points at /__l5e/assets-v1/..., a host that does not resolve
//   2. shipped a stale scripts/prerender.mjs that drops already-published posts
//      back to the SPA shell
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

// ---------------------------------------------------------------- report
const checks = [
  "no .asset.json stubs (imports or files)",
  "no /__l5e/ references",
  "every imported image exists on disk",
  "every Blog.tsx slug is prerendered",
  "every prerendered slug is in the sitemap",
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
