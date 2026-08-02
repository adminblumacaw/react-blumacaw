import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "shopify-revenue-leaks",
    category: "Guide",
    title: "5 Shopify Revenue Leaks Growing Stores Should Fix Before Buying More Traffic",
    excerpt: "Find 5 Shopify revenue leaks in wholesale, lead capture, support, phone calls, and retention before spending more on traffic.",
    readTime: "10 min read",
    date: "Aug 2, 2026",
  },
  {
    slug: "sparklayer-alternatives",
    category: "Guide",
    title: "7 SparkLayer Alternatives for Shopify Brands Running B2B and Retail Together",
    excerpt: "Compare 7 SparkLayer alternatives for Shopify B2B pricing, wholesale forms, net terms, order limits, and quick orders.",
    readTime: "12 min read",
    date: "Jun 15, 2026",
  },
  {
    slug: "shopify-b2b-build-complete-wholesale-store",
    category: "Guide",
    title: "Shopify B2B: How to Build a Complete Wholesale Store (2026 Guide)",
    excerpt: "Complete guide to building a Shopify B2B wholesale store. Learn costs, setup options, and how to create a modern wholesale experience.",
    readTime: "15 min read",
    date: "Mar 19, 2026",
  },
  {
    slug: "guide-creating-wholesale-store-shopify",
    category: "Guide",
    title: "Guide to Creating a Wholesale Store on Shopify: D2C + B2B Step-by-Step",
    excerpt: "A complete step-by-step guide to creating a D2C + B2B wholesale store on Shopify. Learn pricing, bulk ordering, access control, and scaling.",
    readTime: "14 min read",
    date: "Mar 15, 2026",
  },
  {
    slug: "best-shopify-wholesale-apps-2026",
    category: "Guide",
    title: "Best Shopify Wholesale Apps in 2026 (Top 6 B2B Apps Compared)",
    excerpt: "Compare the 6 best Shopify wholesale apps in 2026. See which B2B app is right for your store.",
    readTime: "12 min read",
    date: "Mar 14, 2026",
  },
  {
    slug: "bmt-smarter-choice-than-traditional-wholesale-apps",
    category: "Guide",
    title: "Why BMT B2B Wholesale Pricing Is a Smarter Choice Than Traditional Apps",
    excerpt: "Older doesn't always mean better. Here's why a modern wholesale app outperforms legacy systems.",
    readTime: "7 min read",
    date: "Feb 26, 2026",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Blog</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Tips & Stories for Merchants
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Practical advice and success stories to grow your wholesale business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <div className="h-full rounded-2xl border border-border/50 bg-card p-6 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                <span className="text-xs font-medium text-accent mb-3 uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="text-base font-semibold mb-3 group-hover:text-primary transition-colors leading-snug flex-grow">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/30">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to="/blog">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
