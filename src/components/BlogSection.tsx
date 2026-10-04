import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogManifest.js";

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
          {/* Three columns: keep a multiple of 3 so no card sits alone on a row.
              Newest first; everything is still listed on /blog. */}
          {blogPosts.slice(0, 6).map((post) => (
            <Link key={post.slug} to={post.path} className="group">
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
                    {post.updated ? `Updated ${post.updated}` : post.date}
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
