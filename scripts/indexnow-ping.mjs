// Notifies IndexNow (Bing, and via it other engines) that site URLs changed.
// Run after a successful deploy. ChatGPT search is built on Bing's index, so
// fast Bing indexing is what gets new content into ChatGPT citations.
// Never fails the build: indexing pings are best-effort.

import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOST = "blumacawtech.com";
const KEY = "2ddc4eceb1878a65af4a54c6178b025d"; // matches public/<key>.txt

const sitemap = readFileSync(resolve(__dirname, "../dist/sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});
console.log(`IndexNow: submitted ${urls.length} urls -> HTTP ${res.status}`);
