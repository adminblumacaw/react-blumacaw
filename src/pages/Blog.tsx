import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookOnboarding from "@/components/BookOnboarding";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const allPosts = [
  {
    slug: "shopify-revenue-leaks",
    category: "Guide",
    title: "5 Shopify Revenue Leaks Growing Stores Should Fix Before Buying More Traffic",
    excerpt: "Find 5 Shopify revenue leaks in wholesale, lead capture, support, phone calls, and retention before spending more on traffic.",
    readTime: "10 min read",
    date: "Aug 2, 2026",
    isoDate: "2026-08-02",
  },
  {
    slug: "sparklayer-alternatives",
    category: "Guide",
    title: "7 SparkLayer Alternatives for Shopify Brands Running B2B and Retail Together",
    excerpt: "Compare 7 SparkLayer alternatives for Shopify B2B pricing, wholesale forms, net terms, order limits, quick orders, and pricing rules.",
    readTime: "12 min read",
    date: "Jun 15, 2026",
    isoDate: "2026-06-15",
  },
  {
    slug: "wholesale-gorilla-alternatives",
    category: "Guide",
    title: "11 Wholesale Gorilla Alternatives for Shopify B2B Pricing",
    excerpt: "Compare Wholesale Gorilla alternatives for Shopify B2B pricing, wholesale forms, bulk discounts, buyer approval, and price hiding.",
    readTime: "12 min read",
    date: "May 31, 2026",
    isoDate: "2026-05-31",
  },
  {
    slug: "shopify-wholesale-registration-form",
    url: "/shopify-wholesale-registration-form",
    category: "Guide",
    title: "How to Create a Shopify Wholesale Registration Form & Approve B2B Customers",
    excerpt: "Learn how to build a wholesale registration form in Shopify, tag and approve B2B customers, and streamline your onboarding process — with credible market data and a practical step-by-step workflow.",
    readTime: "12 min read",
    date: "May 20, 2026",
    isoDate: "2026-05-20",
  },
  {
    slug: "best-shopify-wholesale-apps",
    category: "Guide",
    title: "11 Best Shopify Wholesale Apps for B2B Pricing and Bulk Orders in 2026",
    excerpt: "Compare the 11 best Shopify wholesale apps in 2026 for B2B pricing, bulk discounts, net terms, quick orders, price hiding, and wholesale buyer approvals.",
    readTime: "13 min read",
    date: "May 4, 2026",
    isoDate: "2026-05-04",
  },
  {
    slug: "introducing-page-lock-hide-price",
    category: "Product Update",
    title: "Introducing Page Lock & Hide Price — Built for the Future of Shopify Customer Accounts",
    excerpt: "Shopify is moving to passwordless login. Learn how Page Lock & Hide Price gives you modern, rule-based access control to protect pricing and restrict store access.",
    readTime: "8 min read",
    date: "Apr 8, 2026",
    isoDate: "2026-04-08",
  },
  {
    slug: "shopify-b2b-build-complete-wholesale-store",
    category: "Guide",
    title: "Shopify B2B: How to Build a Complete Wholesale Store (2026 Guide)",
    excerpt: "Complete guide to building a Shopify B2B wholesale store. Learn costs, setup options, and how to create a modern wholesale experience — without Shopify Plus.",
    readTime: "15 min read",
    date: "Mar 19, 2026",
    isoDate: "2026-03-19",
  },
  {
    slug: "guide-creating-wholesale-store-shopify",
    category: "Guide",
    title: "Guide to Creating a Wholesale Store on Shopify: D2C + B2B Step-by-Step",
    excerpt: "A complete step-by-step guide to creating a D2C + B2B wholesale store on Shopify. Learn pricing, bulk ordering, access control, global selling, and scaling your wholesale channel.",
    readTime: "14 min read",
    date: "Mar 15, 2026",
    isoDate: "2026-03-15",
  },
  {
    slug: "best-shopify-wholesale-apps-2026",
    category: "Guide",
    title: "Best Shopify Wholesale Apps in 2026 (Top 6 B2B Apps Compared)",
    excerpt: "Compare the 6 best Shopify wholesale apps in 2026. See which B2B app is right for your store — from flexible pricing to marketplace wholesale and enterprise portals.",
    readTime: "12 min read",
    date: "Mar 14, 2026",
    isoDate: "2026-03-14",
  },
  {
    slug: "bmt-perfect-for-d2c-brands-expanding-wholesale",
    category: "Guide",
    title: "Why BMT B2B Wholesale Pricing App Is Perfect for D2C Brands Expanding Into Wholesale",
    excerpt: "For D2C brands on Shopify, wholesale is the next natural growth step. Learn how BMT lets you launch B2B on top of your existing retail store — without marketplaces or separate storefronts.",
    readTime: "9 min read",
    date: "Mar 8, 2026",
    isoDate: "2026-03-08",
  },
  {
    slug: "bmt-smarter-choice-than-traditional-wholesale-apps",
    category: "Guide",
    title: "Why BMT B2B Wholesale Pricing App Is a Smarter Choice Than Traditional Shopify Wholesale Apps",
    excerpt: "Older doesn't always mean better. Here's why a modern, lean wholesale app outperforms legacy systems for growing Shopify brands.",
    readTime: "7 min read",
    date: "Feb 26, 2026",
    isoDate: "2026-02-26",
  },
  {
    slug: "bmt-b2b-partner-established-us-shopify-store",
    category: "Guide",
    title: "How BMT B2B Wholesale Pricing App Can Partner With an Established US Shopify Store to Unlock B2B Growth",
    excerpt: "For established Shopify brands, wholesale is the next logical growth channel. Here's how BMT enables structured B2B expansion without disrupting DTC operations.",
    readTime: "8 min read",
    date: "Feb 26, 2026",
    isoDate: "2026-02-26",
  },
  {
    slug: "merchant-increased-b2b-revenue-40-percent",
    category: "Success Story",
    title: "How One Merchant Increased B2B Revenue by 40%",
    excerpt: "Learn how a home goods brand used customer groups and volume discounts to grow their wholesale channel in just 3 months.",
    readTime: "4 min read",
    date: "Feb 12, 2026",
    isoDate: "2026-02-12",
  },
  {
    slug: "shopify-wholesale-app-small-business",
    category: "Guide",
    title: "Shopify Wholesale App for Small Business: The Best Affordable Solution in 2026",
    excerpt: "Most wholesale apps are built for enterprises. Here's the most affordable, simple, and effective option for small Shopify stores in 2026.",
    readTime: "7 min read",
    date: "Feb 26, 2026",
    isoDate: "2026-02-26",
  },
];

const categoryColors: Record<string, string> = {
  Guide: "bg-primary/10 text-primary border-primary/20",
  "Success Story": "bg-accent/10 text-accent border-accent/20",
  "Product Update": "bg-secondary/10 text-secondary-foreground border-secondary/20",
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="BMT B2B Wholesale Pricing Blog — Shopify Wholesale Tips & Guides"
        description="Expert guides, merchant success stories, and product updates for Shopify wholesale. Learn how to set up B2B pricing, manage wholesale customers, and grow your bulk order business."
        canonicalPath="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "BMT B2B Wholesale Pricing Blog",
          "description": "Expert guides and tips for Shopify wholesale, B2B pricing, bulk ordering, and wholesale customer management.",
          "url": "https://blumacawtech.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "BlumacawTech",
            "url": "https://blumacawtech.com",
            "logo": "https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png"
          },
          "blogPost": allPosts.map(p => ({
            "@type": "BlogPosting",
            "headline": p.title,
            "description": p.excerpt,
            "url": `https://blumacawtech.com${(p as any).url ?? `/blog/${p.slug}`}`,
            "datePublished": p.isoDate,
            "author": { "@type": "Organization", "name": "BlumacawTech", "logo": "https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png" }
          }))
        }}
      />
      <Header />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
              <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Practical tips, product updates, and merchant success stories to help you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allPosts.map((post) => (
              <Link key={post.slug} to={(post as any).url ?? `/blog/${post.slug}`} className="group">
                <Card className="h-full border-border/60 hover:border-primary/40 hover:shadow-card transition-smooth overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category] || ""}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <BookOnboarding />
      <Footer />
    </div>
  );
};

export default Blog;
