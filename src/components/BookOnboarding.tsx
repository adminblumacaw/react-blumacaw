import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import { ArrowRight, Star } from "lucide-react";

const BookOnboarding = () => {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-0.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Try the #1 Shopify Wholesale Pricing App
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Join 100+ merchants using BMT B2B Wholesale Pricing for tiered pricing, bulk ordering, and B2B customer management.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gradient-primary shadow-glow text-base px-8 py-6 group" type="button" onClick={() => openExternalUrl(SHOPIFY_APP_URL)}>
              Get Started
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
              <a href="https://calendar.app.google/kxiwZQ9QCWjve2rn7" target="_blank" rel="noopener noreferrer">
                Book Free Onboarding
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Free plan available · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookOnboarding;
