#!/usr/bin/env node
// Accessibility gate. Serves the built site (dist/) locally, opens every
// sitemap URL in headless Chrome at a phone and a desktop width, and runs
// every automated axe-core rule that Lighthouse's Accessibility category runs
// (list below, from Lighthouse 12.8). Any failure fails the build, so the
// score cannot quietly slip after a Lovable port.
//
// Run after `npm run build`:  npm run check:a11y
// Chrome: set CHROME_PATH, or it tries the usual install locations (GitHub's
// ubuntu runners ship google-chrome).
//
// Fix failures with the design tokens in src/index.css and
// tailwind.config.ts, not per-element overrides: Lovable exports rewrite page
// markup, and a token fix survives that.

import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const require = createRequire(import.meta.url);
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DIST = join(ROOT, "dist");
const AXE_SOURCE = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const VIEWPORTS = [
  { name: "mobile", width: 412, height: 823, deviceScaleFactor: 1.75, isMobile: true, hasTouch: true },
  { name: "desktop", width: 1350, height: 940, deviceScaleFactor: 1 },
];

// The fade-up entrance animation runs for at most 0.9s; text mid-fade is
// partly transparent and would be measured at the wrong colour.
const SETTLE_MS = 1200;
const CONCURRENCY = 4;
// Lighthouse 12.8 accessibility audits backed by axe-core (the manual audits
// such as logical-tab-order cannot be automated and are not listed).
const RULES = [
  "accesskeys", "aria-allowed-attr", "aria-allowed-role", "aria-command-name",
  "aria-conditional-attr", "aria-deprecated-role", "aria-dialog-name",
  "aria-hidden-body", "aria-hidden-focus", "aria-input-field-name",
  "aria-meter-name", "aria-progressbar-name", "aria-prohibited-attr",
  "aria-required-attr", "aria-required-children", "aria-required-parent",
  "aria-roles", "aria-text", "aria-toggle-field-name", "aria-tooltip-name",
  "aria-treeitem-name", "aria-valid-attr-value", "aria-valid-attr", "button-name",
  "bypass", "color-contrast", "definition-list", "dlitem", "document-title",
  "duplicate-id-aria", "empty-heading", "form-field-multiple-labels", "frame-title",
  "heading-order", "html-has-lang", "html-lang-valid", "html-xml-lang-mismatch",
  "identical-links-same-purpose", "image-alt", "image-redundant-alt",
  "input-button-name", "input-image-alt", "label", "label-content-name-mismatch",
  "landmark-one-main", "link-in-text-block", "link-name", "list", "listitem",
  "meta-refresh", "meta-viewport", "object-alt", "select-name", "skip-link",
  "tabindex", "table-duplicate-name", "table-fake-caption", "target-size",
  "td-has-header", "td-headers-attr", "th-has-data-cells", "valid-lang", "video-caption",
];

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

// Mirrors firebase.json's cleanUrls/trailingSlash:false: /foo -> dist/foo/index.html.
function resolveFile(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(/^(\.\.[/\\])+/, "");
  const direct = join(DIST, clean);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  const index = join(DIST, clean, "index.html");
  if (existsSync(index)) return index;
  return null;
}

function serve() {
  const server = createServer((req, res) => {
    const file = resolveFile(req.url);
    if (!file) {
      res.writeHead(404).end("not found");
      return;
    }
    res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
    res.end(readFileSync(file));
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function routesFromSitemap() {
  const xml = readFileSync(join(DIST, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>https?:\/\/[^/<]+([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
}

async function main() {
  if (!existsSync(join(DIST, "sitemap.xml"))) {
    console.error("check:a11y needs a build first (dist/sitemap.xml is missing). Run `npm run build`.");
    process.exit(2);
  }
  const executablePath = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!executablePath) {
    console.error(`check:a11y could not find Chrome. Set CHROME_PATH. Tried:\n  ${CHROME_CANDIDATES.join("\n  ")}`);
    process.exit(2);
  }

  const routes = routesFromSitemap();
  const server = await serve();
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--no-sandbox"] });

  // key -> { rule, summary, html, target, where: Set }
  const failures = new Map();
  let checked = 0;

  const record = (viewport, route, violations) => {
    for (const v of violations) {
      for (const node of v.nodes) {
        const data = node.any.find((c) => c.id === "color-contrast")?.data;
        const summary = data
          ? `${data.contrastRatio} (needs ${data.expectedContrastRatio})  text ${data.fgColor} on ${data.bgColor}`
          : node.failureSummary.replace(/\s+/g, " ").replace(/^Fix (any|all) of the following: /, "");
        const key = `${v.id}|${node.target.join(" ")}|${summary}`;
        const entry = failures.get(key) ?? {
          rule: v.id,
          summary,
          html: node.html.replace(/\s+/g, " ").slice(0, 160),
          target: node.target.join(" "),
          where: new Set(),
        };
        entry.where.add(`${viewport.name} ${route}`);
        failures.set(key, entry);
      }
    }
  };

  const checkRoutes = async (viewport, queue) => {
    const page = await browser.newPage();
    await page.setViewport(viewport);
    // Only our own origin: third-party widgets (chat, video, fonts CDN)
    // are not ours to fix and would make the result depend on the network.
    await page.setRequestInterception(true);
    page.on("request", (r) => (r.url().startsWith(origin) || r.url().startsWith("data:") ? r.continue() : r.abort()));
    for (let route = queue.shift(); route !== undefined; route = queue.shift()) {
      await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 60_000 });
      await new Promise((r) => setTimeout(r, SETTLE_MS));
      await page.evaluate(AXE_SOURCE);
      const result = await page.evaluate(
        (rules) => window.axe.run(document, { runOnly: { type: "rule", values: rules }, resultTypes: ["violations"] }),
        RULES,
      );
      record(viewport, route, result.violations);
      checked++;
    }
    await page.close();
  };

  try {
    for (const viewport of VIEWPORTS) {
      const queue = [...routes];
      await Promise.all(Array.from({ length: CONCURRENCY }, () => checkRoutes(viewport, queue)));
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (failures.size === 0) {
    console.log(`check:a11y passed: ${RULES.length} Lighthouse accessibility rules clean on ${routes.length} pages x ${VIEWPORTS.length} viewports (${checked} page loads).`);
    return;
  }

  console.error(`check:a11y FAILED: ${failures.size} element(s).\n`);
  for (const f of failures.values()) {
    const where = [...f.where];
    console.error(`  [${f.rule}] ${f.summary}`);
    console.error(`    ${f.target}`);
    console.error(`    ${f.html}`);
    console.error(`    on ${where.slice(0, 3).join(", ")}${where.length > 3 ? ` +${where.length - 3} more` : ""}\n`);
  }
  console.error(
    "Fix colour failures with the tokens in src/index.css / tailwind.config.ts; see https://dequeuniversity.com/rules/axe/4.10/<rule> for the others.",
  );
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
