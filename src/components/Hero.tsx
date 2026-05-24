import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import { ArrowRight, Star } from "lucide-react";
import blumacawMascot from "@/assets/blumacaw-mascot-nobg.webp";

const Hero = () => {
  return (
    <section className="pt-20 sm:pt-28 pb-14 sm:pb-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs sm:text-sm text-primary font-medium mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Rated 5.0 ★ on the Shopify App Store
            </div>

            <h1 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[3.25rem] sm:leading-[1.12] font-bold mb-5 sm:mb-6 tracking-tight text-balance">
              Unlock Wholesale Revenue with{" "}
              <span className="text-gradient">Custom Pricing, Lock &amp; Hide Prices, Smart Order Limits</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 sm:mb-8 max-w-lg">
              BMT B2B Wholesale Pricing App helps you grow wholesale revenue directly within your Shopify store — no extra setup needed. Increase AOV with tiered pricing, customer-specific discounts, and custom wholesale registration forms with approval workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button size="lg" className="gradient-primary shadow-glow text-base px-7 py-6 group" type="button" onClick={() => openExternalUrl(SHOPIFY_APP_URL)}>
                Install Free on Shopify
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-7 py-6" asChild>
                <a href="https://calendar.app.google/kxiwZQ9QCWjve2rn7" target="_blank" rel="noopener noreferrer">
                  Book Onboarding Session
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Free plan available · No credit card required · 7-day free trial on paid plans
            </p>
          </div>

          {/* Right — Logo */}
          <div className="animate-fade-up-delay-2 hidden md:flex items-center justify-center">
            <img
              src={blumacawMascot}
              alt="BluMacawTech — Where your vision takes flight"
              className="w-full max-w-sm"
              width={720}
              height={720}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Trust stats bar */}
      <div className="container mx-auto mt-16 sm:mt-20">
        <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by the fastest growing merchants
        </p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-foreground">100+</p>
            <p className="text-sm text-muted-foreground mt-1">Shopify merchants</p>
          </div>
          <div className="hidden sm:block w-px h-14 bg-border/60 self-center" />
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-foreground">15+</p>
            <p className="text-sm text-muted-foreground mt-1">Countries</p>
          </div>
          <div className="hidden sm:block w-px h-14 bg-border/60 self-center" />
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-1.5">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">5.0</p>
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mt-1" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">Star rating (8 reviews)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
