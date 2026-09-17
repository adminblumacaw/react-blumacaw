// Search-result titles (<title>, og:title, twitter:title) for pages whose
// on-page headline is longer than Google shows. Google cuts titles at about
// 60 characters (~580px), so "How BMT B2B Wholesale Pricing App Can Partner
// With an Established US Shopify…" loses the part that says what the page is.
//
// Keyed by canonical path. The on-page <h1>, the article JSON-LD headline and
// the blog cards keep the full headline — only the search title changes.
//
// scripts/prerender.mjs fails the build when any page's title is over
// SEO_TITLE_MAX, so a new article with a long headline needs an entry here.
// Keep this map out of Lovable-managed files: exports regenerate the pages.

export const SEO_TITLE_MAX = 60;

export const SEO_TITLES: Record<string, string> = {
  "/": "BMT B2B Wholesale Pricing — Shopify Wholesale & Bulk Orders",
  "/blog": "Shopify Wholesale Tips & Guides | BMT B2B Blog",
  "/shopify-wholesale-registration-form": "How to Create a Shopify Wholesale Registration Form",
  "/blog/bmt-b2b-partner-established-us-shopify-store": "How BMT Helps Established US Shopify Stores Grow B2B",
  "/blog/sami-b2b-wholesale-pricing-alternatives": "7 SAMI B2B Wholesale Pricing Alternatives for Shopify",
  "/blog/bmt-smarter-choice-than-traditional-wholesale-apps": "Why BMT Beats Traditional Shopify Wholesale Apps",
  "/blog/bss-b2b-wholesale-pricing-alternatives": "6 BSS B2B Wholesale Pricing Alternatives for Shopify",
  "/blog/introducing-page-lock-hide-price": "Page Lock & Hide Price for New Shopify Customer Accounts",
  "/blog/bmt-perfect-for-d2c-brands-expanding-wholesale": "Why BMT Suits D2C Brands Expanding Into Wholesale",
  "/blog/shopify-wholesale-app-small-business": "Affordable Shopify Wholesale App for Small Business (2026)",
  "/blog/shopify-revenue-leaks": "5 Shopify Revenue Leaks to Fix Before Buying Traffic",
  "/blog/sparklayer-alternatives": "7 SparkLayer Alternatives for Shopify B2B and Retail",
  "/blog/best-shopify-wholesale-apps": "11 Best Shopify Wholesale Apps for B2B Pricing (2026)",
  "/blog/guide-creating-wholesale-store-shopify": "How to Create a Wholesale Store on Shopify (D2C + B2B)",
  "/blog/shopify-b2b-build-complete-wholesale-store": "Shopify B2B: Build a Complete Wholesale Store (2026 Guide)",
  "/blog/best-shopify-wholesale-apps-2026": "Best Shopify Wholesale Apps 2026: Top 6 B2B Apps Compared",
};
