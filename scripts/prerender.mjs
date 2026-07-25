// Post-build prerender: emits per-route dist/<path>/index.html copies with
// correct <title>, <meta description>, <link canonical>, and og:* tags.
// This fixes "Duplicate without user-selected canonical" in Google Search Console
// caused by the SPA shell serving identical HTML for every URL.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const BASE = "https://blumacawtech.com";

const shell = readFileSync(resolve(DIST, "index.html"), "utf8");

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function renderHtml({ path: routePath, title, description, type = "website" }) {
  const url = `${BASE}${routePath}`;
  let html = shell;

  // <title>
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escape(title)}</title>`
  );

  // <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escape(description)}" />`
  );

  // og:title / og:description / og:type
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escape(title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escape(description)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${escape(type)}" />`
  );

  // twitter:title / twitter:description
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escape(title)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escape(description)}" />`
  );

  // Strip any pre-existing canonical / og:url (guards against re-runs).
  html = html.replace(/\s*<link\s+rel="canonical"[^>]*>/g, "");
  html = html.replace(/\s*<meta\s+property="og:url"[^>]*>/g, "");

  // Inject canonical + og:url right before </head>
  const injected = `    <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`;
  html = html.replace(/\s*<\/head>/, `\n${injected}`);

  return html;
}

function writeRoute(route) {
  const html = renderHtml(route);
  const outDir =
    route.path === "/" ? DIST : resolve(DIST, "." + route.path);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), html);
}

const staticRoutes = [
  {
    path: "/",
    title: "BMT B2B Wholesale Pricing — Shopify Wholesale & Bulk Order App",
    description:
      "BMT B2B Wholesale Pricing App helps you grow wholesale revenue directly within your Shopify store—no extra setup needed. Tiered and volume pricing, customer-specific discounts, lock & hide prices, quick order page, bulk CSV/Excel ordering, registration forms, smart order limits, custom payment & shipping rules, and net terms like Net 15/Net 30. Free plan available.",
  },
  {
    path: "/blog",
    title: "BMT B2B Wholesale Pricing Blog — Shopify Wholesale Tips & Guides",
    description:
      "Expert guides, merchant success stories, and product updates for Shopify wholesale. Learn how to set up B2B pricing, manage wholesale customers, and grow your bulk order business.",
  },
  {
    path: "/documentation",
    title: "Documentation — BMT B2B Wholesale Pricing App for Shopify",
    description:
      "Complete guides and tutorials for setting up wholesale pricing, customer groups, registration forms, bulk ordering, and order limits on your Shopify store with BMT B2B Wholesale Pricing.",
  },
  {
    path: "/affiliate",
    title: "BMT Affiliate Program — 25% Recurring Shopify B2B",
    description:
      "Join the BMT B2B Wholesale Pricing affiliate program. Earn 25% lifetime recurring commission for every Shopify merchant you refer.",
  },
  {
    path: "/affiliate/apply",
    title: "Apply — BMT Affiliate Program",
    description:
      "Apply to join the BMT B2B Wholesale Pricing affiliate program and earn 25% recurring commission on Shopify merchants you refer.",
  },
  {
    path: "/wholesale-pricing-guide",
    title: "How to Enable Wholesale Pricing on Shopify — Setup Guide",
    description:
      "Step-by-step guide to enable wholesale pricing on your Shopify store using BMT B2B Wholesale Pricing app. Learn how to activate the app embed and start offering B2B prices.",
  },
  {
    path: "/create-pricing-rule-guide",
    title: "How to Create Wholesale Pricing Rules on Shopify — Guide",
    description:
      "Learn how to create wholesale pricing rules on Shopify with BMT B2B Wholesale Pricing. Set percentage discounts, fixed amounts, or custom prices for tagged customer groups.",
  },
  {
    path: "/customer-group-guide",
    title: "How to Create Customer Groups for Wholesale on Shopify",
    description:
      "Guide to creating and managing wholesale customer groups on Shopify. Tag customers, import via CSV, and assign tiered pricing with BMT B2B Wholesale Pricing app.",
  },
  {
    path: "/accept-reject-customers-guide",
    title: "How to Accept or Reject Wholesale Customers on Shopify",
    description:
      "Learn how to approve or reject wholesale customer applications on Shopify using BMT B2B Wholesale Pricing. Manage B2B buyer access with registration form workflows.",
  },
  {
    path: "/bulk-upload-guide",
    title: "How to Set Up CSV/Excel Bulk Ordering on Shopify",
    description:
      "Enable bulk ordering via CSV and Excel file uploads on your Shopify store. Let wholesale buyers place large orders in seconds with BMT B2B Wholesale Pricing app.",
  },
  {
    path: "/volume-discount-guide",
    title: "How to Set Up Volume & Tiered Pricing on Shopify",
    description:
      "Create volume discounts and quantity-break pricing on Shopify. Reward bulk buyers with tiered pricing using BMT B2B Wholesale Pricing app. Step-by-step setup guide.",
  },
  {
    path: "/registration-form-guide",
    title: "How to Create Wholesale Registration Forms on Shopify",
    description:
      "Build custom wholesale registration forms on Shopify to capture B2B leads. Auto-tag approved buyers and manage applications with BMT B2B Wholesale Pricing app.",
  },
  {
    path: "/enable-registration-form-guide",
    title: "How to Enable Registration Forms on Your Shopify Store",
    description:
      "Step-by-step guide to enable wholesale registration forms on your Shopify storefront. Let B2B buyers apply directly on your store with BMT B2B Wholesale Pricing.",
  },
  {
    path: "/order-limits-guide",
    title: "How to Configure Order Limits for Wholesale on Shopify",
    description:
      "Set minimum and maximum order limits by quantity or value on Shopify. Protect wholesale margins with BMT B2B Wholesale Pricing app order controls.",
  },
  {
    path: "/enable-order-limits-guide",
    title: "How to Enable Order Limits on Your Shopify Store",
    description:
      "Step-by-step guide to enable min/max order limits on your Shopify storefront. Control wholesale order quantities and values with BMT B2B Wholesale Pricing app.",
  },
  {
    path: "/custom-payment-terms-guide",
    title: "Create Custom Payment Terms in Shopify — BMT B2B Wholesale Pricing",
    description:
      "Step-by-step guide to creating custom payment terms like Net 30, Net 60, and Net 45 in Shopify and controlling visibility with BMT B2B Wholesale Pricing payment rules.",
  },
  {
    path: "/custom-shipping-rules-guide",
    title: "Set Up Custom Shipping Rules in Shopify — BMT B2B Wholesale Pricing",
    description:
      "Step-by-step guide to setting up custom shipping rules for B2B and wholesale customers in Shopify. Control which shipping methods each customer group sees at checkout with BMT B2B Wholesale Pricing.",
  },
  {
    path: "/lock-page-hide-price-guide",
    title: "Configure Lock Page & Hide Price Rules — BMT B2B Wholesale Pricing",
    description:
      "Step-by-step guide to setting up page locks and hiding prices on your Shopify store. Control access to products, collections, and pages with BMT B2B Wholesale Pricing.",
  },
  {
    path: "/quick-order-form-guide",
    title: "How to Configure Quick Order Forms on Shopify — BMT B2B",
    description:
      "Create a Shopify quick order form for wholesale buyers. Configure products, quantity rules, appearance, and publish with BMT B2B Wholesale Pricing.",
  },
];

// Blog posts — keep in sync with src/pages/BlogPost.tsx `posts` map.
const blogPosts = [
  {
    slug: "introducing-page-lock-hide-price",
    title: "Introducing Page Lock & Hide Price — Built for the Future of Shopify Customer Accounts",
    description: "Shopify is transitioning to passwordless login. Learn how Page Lock & Hide Price from BMT B2B Wholesale Pricing gives you modern, rule-based access control to protect pricing, restrict pages, and manage B2B visibility on Shopify.",
  },
  {
    slug: "guide-creating-wholesale-store-shopify",
    title: "Guide to Creating a Wholesale Store on Shopify: D2C + B2B Step-by-Step",
    description: "A complete step-by-step guide to creating a D2C + B2B wholesale store on Shopify. Learn pricing, bulk ordering, access control, global selling, and scaling your wholesale channel.",
  },
  {
    slug: "bmt-perfect-for-d2c-brands-expanding-wholesale",
    title: "Why BMT B2B Wholesale Pricing App Is Perfect for D2C Brands Expanding Into Wholesale",
    description: "For D2C brands on Shopify, wholesale is the next natural growth step. Learn how BMT lets you launch B2B on top of your existing retail store — without marketplaces or separate storefronts.",
  },
  {
    slug: "bmt-smarter-choice-than-traditional-wholesale-apps",
    title: "Why BMT B2B Wholesale Pricing App Is a Smarter Choice Than Traditional Shopify Wholesale Apps",
    description: "Older doesn't always mean better. Here's why a modern, lean wholesale app outperforms legacy systems for growing Shopify brands.",
  },
  {
    slug: "bmt-b2b-partner-established-us-shopify-store",
    title: "How BMT B2B Wholesale Pricing App Can Partner With an Established US Shopify Store to Unlock B2B Growth",
    description: "For established Shopify brands, wholesale is the next logical growth channel. Here's how BMT enables structured B2B expansion without disrupting DTC operations.",
  },
  {
    slug: "merchant-increased-b2b-revenue-40-percent",
    title: "How One Merchant Increased B2B Revenue by 40%",
    description: "Learn how a home goods brand used customer groups and volume discounts to grow their wholesale channel in just 3 months.",
  },
  {
    slug: "shopify-wholesale-app-small-business",
    title: "Shopify Wholesale App for Small Business: The Best Affordable Solution in 2026",
    description: "Most wholesale apps are built for enterprises. Here's the most affordable, simple, and effective option for small Shopify stores in 2026.",
  },
  {
    slug: "best-shopify-wholesale-apps-2026",
    title: "Best Shopify Wholesale Apps in 2026 (Top 6 B2B Apps Compared)",
    description: "Compare the 6 best Shopify wholesale apps in 2026. See which B2B app is right for your store — from flexible pricing to marketplace wholesale and enterprise portals.",
  },
  {
    slug: "shopify-b2b-build-complete-wholesale-store",
    title: "Shopify B2B: How to Build a Complete Wholesale Store (2026 Guide)",
    description: "Complete guide to building a Shopify B2B wholesale store. Learn costs, setup options, and how to create a modern wholesale experience — without Shopify Plus.",
  },
  {
    slug: "best-shopify-wholesale-apps",
    title: "11 Best Shopify Wholesale Apps for B2B Pricing and Bulk Orders in 2026",
    description: "Compare the 11 best Shopify wholesale apps in 2026 for B2B pricing, bulk discounts, net terms, quick orders, price hiding, and wholesale buyer approvals.",
  },
  {
    slug: "shopify-wholesale-registration-form",
    path: "/shopify-wholesale-registration-form",
    title: "How to Create a Shopify Wholesale Registration Form & Approve B2B Customers",
    description: "Learn how to build a wholesale registration form in Shopify, tag and approve B2B customers, and streamline your onboarding process — with credible market data and a practical step-by-step workflow.",
  },
  {
    slug: "wholesale-gorilla-alternatives",
    title: "11 Wholesale Gorilla Alternatives for Shopify B2B Pricing",
    description: "Compare Wholesale Gorilla alternatives for Shopify B2B pricing, wholesale forms, bulk discounts, buyer approval, and price hiding.",
  },
  {
    slug: "sparklayer-alternatives",
    title: "7 SparkLayer Alternatives for Shopify Brands Running B2B and Retail Together",
    description: "Compare 7 SparkLayer alternatives for Shopify B2B pricing, wholesale forms, net terms, order limits, quick orders, and pricing rules.",
  },
];

const blogRoutes = blogPosts.map((p) => ({
  path: p.path ?? `/blog/${p.slug}`,
  title: `${p.title} | BMT B2B Wholesale Pricing`,
  description: p.description,
  type: "article",
}));

const all = [...staticRoutes, ...blogRoutes];
for (const r of all) writeRoute(r);
console.log(`prerendered ${all.length} routes`);
