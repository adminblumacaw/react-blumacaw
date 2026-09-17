import { createContext, useContext, useEffect } from "react";
import { SEO_TITLES } from "@/lib/seoTitles";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  type?: "website" | "article";
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  image?: string;
  jsonLd?: Record<string, any>;
}

export interface SeoHead {
  title: string;
  description: string;
  type: "website" | "article";
}

// Provided only by src/entry-server.tsx. The prerender reads the head values
// from here instead of keeping its own list, so the static HTML crawlers see
// and the title Google sees after rendering can never disagree. The provider
// renders no DOM, so hydration is unaffected.
export const SeoCollectorContext = createContext<{ head?: SeoHead } | null>(null);

const BASE_URL = "https://blumacawtech.com";
const BRAND_SUFFIX = /\s+[|—–-]\s*BMT B2B Wholesale Pricing\s*$/;
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;

// Google truncates titles past ~60 characters and shows the site name
// separately (from the WebSite structured data), so drop the brand suffix
// only when it is what pushes a title over the limit. Headlines that are still
// too long get a hand-written search title in src/lib/seoTitles.ts.
export const normalizeTitle = (title: string) => {
  const trimmed = title.trim();
  return trimmed.length > TITLE_MAX ? trimmed.replace(BRAND_SUFFIX, "").trim() : trimmed;
};

// Google truncates snippets at roughly 160 characters. Prefer ending on a whole
// sentence; otherwise cut at a word boundary and add an ellipsis.
export const normalizeDescription = (description: string) => {
  const text = description.replace(/\s+/g, " ").trim();
  if (text.length <= DESCRIPTION_MAX) return text;

  let sentenceEnd = -1;
  for (const m of text.matchAll(/[.!?](?=\s|$)/g)) {
    if (m.index! < DESCRIPTION_MAX) sentenceEnd = m.index!;
  }
  if (sentenceEnd >= 80) return text.slice(0, sentenceEnd + 1);

  const head = text.slice(0, DESCRIPTION_MAX - 1);
  const lastSpace = head.lastIndexOf(" ");
  return head.slice(0, lastSpace > 0 ? lastSpace : head.length).replace(/[\s,;:—–-]+$/, "") + "…";
};

const SEOHead = ({
  title: rawTitle,
  description: rawDescription,
  canonicalPath,
  type = "website",
  publishedDate,
  modifiedDate,
  author = "BlumacawTech",
  image = "https://blumacawtech.com/og-image.png",
  jsonLd,
}: SEOHeadProps) => {
  const title = normalizeTitle(SEO_TITLES[canonicalPath] ?? rawTitle);
  const description = normalizeDescription(rawDescription);

  const collector = useContext(SeoCollectorContext);
  if (collector) collector.head = { title, description, type };

  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "author", author);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type === "article" ? "article" : "website");
    setMeta("property", "og:url", `${BASE_URL}${canonicalPath}`);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "BMT B2B Wholesale Pricing");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    if (type === "article" && publishedDate) {
      setMeta("property", "article:published_time", publishedDate);
      if (modifiedDate) setMeta("property", "article:modified_time", modifiedDate);
      setMeta("property", "article:author", author);
    }

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${canonicalPath}`);

  }, [title, description, canonicalPath, type, publishedDate, modifiedDate, author, image]);

  // Rendered in JSX (not injected via effect) so server-side rendering emits it
  // statically — non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot) only ever
  // see this copy.
  if (!jsonLd) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SEOHead;
