import { useEffect } from "react";

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

const BASE_URL = "https://blumacawtech.com";

const SEOHead = ({
  title,
  description,
  canonicalPath,
  type = "website",
  publishedDate,
  modifiedDate,
  author = "BlumacawTech",
  image = "https://blumacawtech.com/og-image.png",
  jsonLd,
}: SEOHeadProps) => {
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
