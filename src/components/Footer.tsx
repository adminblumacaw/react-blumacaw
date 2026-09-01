import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import builtForShopifyBadge from "@/assets/badge-built-for-shopify-light.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-[hsl(var(--dark-border))]">
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2.5 mb-4">
              <img
                src="/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png"
                alt="BlumacawTech Logo"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-lg font-inter font-semibold">
                Blumacaw<span className="text-accent">Tech</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm leading-relaxed">
              Transform your Shopify store into a unified B2C + B2B hub with wholesale pricing, customer groups, and bulk ordering.
            </p>
            <Button size="sm" className="gradient-primary" type="button" onClick={() => openExternalUrl(SHOPIFY_APP_URL)}>
              Install on Shopify
            </Button>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/#features" className="text-muted-foreground hover:text-accent transition-smooth">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-accent transition-smooth">Pricing</Link></li>
              <li>
                <a href="https://apps.shopify.com/blumacawtech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-smooth inline-flex items-center gap-1">
                  Shopify App Store <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/documentation" className="text-muted-foreground hover:text-accent transition-smooth">Documentation</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-accent transition-smooth">Blog</Link></li>
              <li><Link to="/affiliate" className="text-muted-foreground hover:text-accent transition-smooth">Affiliate Program</Link></li>
              <li><Link to="/#support" className="text-muted-foreground hover:text-accent transition-smooth">Support</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6 bg-[hsl(var(--dark-border))]" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground text-center">
          <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-2">
            <span>&copy; {currentYear} BlumacawTech</span>
            <a href="https://blumacawtech.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">Privacy</a>
            <a href="https://blumacawtech.com/#faqs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={builtForShopifyBadge}
              alt="Built for Shopify badge"
              width={830}
              height={220}
              className="h-7 w-auto rounded-md bg-background border border-border/50"
              loading="lazy"
            />
            <span>Official Shopify Partner</span>
            <div className="w-2 h-2 bg-accent rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
