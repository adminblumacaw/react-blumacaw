import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookOnboarding from "@/components/BookOnboarding";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import builtForShopifyBadge from "@/assets/badge-built-for-shopify-light.png";
import { blogPosts } from "@/data/blogManifest.js";

const allPosts = blogPosts;

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
        description="Expert Shopify wholesale guides covering B2B pricing, Request for Quote, buyer approvals, net terms, bulk ordering, and wholesale growth."
        canonicalPath="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "BMT B2B Wholesale Pricing Blog",
          "description": "Expert guides and tips for Shopify wholesale, B2B pricing, Request for Quote, bulk ordering, and wholesale customer management.",
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
            "url": `https://blumacawtech.com${p.path}`,
            "datePublished": p.isoDate,
            "dateModified": p.updatedIsoDate ?? p.isoDate,
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
            <div className="flex items-center gap-3 mt-4">
              <img
                src={builtForShopifyBadge}
                alt="Built for Shopify badge"
                width={830}
                height={220}
                className="h-8 w-auto rounded-md border border-border/50 shadow-sm"
                loading="eager"
                decoding="async"
              />
              <span className="text-sm text-muted-foreground">Official Shopify Partner</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allPosts.map((post) => (
              <Link key={post.slug} to={post.path} className="group">
                <Card className="h-full border-border/60 hover:border-primary/40 hover:shadow-card transition-smooth overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category] || ""}`}>
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.updated ? `Updated ${post.updated}` : post.date}
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
