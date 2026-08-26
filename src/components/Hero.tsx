import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import { ArrowRight, Star } from "lucide-react";
import builtForShopifyBadge from "@/assets/badge-built-for-shopify-light.png";

const Hero = () => {
  return (
    <section className="relative pt-56 sm:pt-28 pb-14 sm:pb-24 px-4 overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-24 -right-32 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs sm:text-sm text-primary font-medium mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Rated 5.0 ★ on the Shopify App Store
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <span className="inline-flex h-9 sm:h-10 w-[150px] sm:w-[160px] items-center justify-center overflow-hidden rounded-md border border-primary/10 bg-card shadow-sm">
                <img
                  src={builtForShopifyBadge}
                  alt="Built for Shopify badge"
                  width={830}
                  height={220}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">Official Shopify Partner</span>
            </div>

            <h1 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[3.25rem] sm:leading-[1.12] font-bold mb-5 sm:mb-6 tracking-tight text-balance">
              Transform Your Shopify Store Into a{" "}
              <span className="text-gradient">B2B Wholesale Powerhouse</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 sm:mb-8 max-w-lg">
              Turn your store into a wholesale channel without running a second site. Set wholesale, fixed or volume pricing by tag so approved buyers see their own prices, let them order by CSV/XLSX upload or quick order form, enforce order minimums and case-pack multiples, and offer net payment terms — in any language.
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
              Free plan available · No credit card required · 60-day free trial on paid plans
            </p>
          </div>

          {/* Right — Video */}
          <div className="animate-fade-up-delay-2 flex items-center justify-center">
            <div className="w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <iframe
                src="https://www.youtube.com/embed/JQo9cGHlY_E?rel=0"
                title="BMT B2B Wholesale Pricing — Introductory App Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust stats bar */}
      <div className="container mx-auto mt-16 sm:mt-20 max-w-4xl rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-card px-6 py-8 sm:py-10">
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
            <p className="text-sm text-muted-foreground mt-1">Star rating (15 reviews)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
