import { DollarSign, TrendingUp, Users, ShoppingCart, Globe, Clock, Lock, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";

const benefits = [
  {
    icon: DollarSign,
    title: "Wholesale Pricing",
    description: "Customer-specific wholesale pricing to boost loyalty & profit.",
  },
  {
    icon: TrendingUp,
    title: "Volume & Tiered Pricing",
    description: "Quantity breaks pricing based on customer type.",
  },
  {
    icon: Lock,
    title: "Lock & Hide Prices",
    description: "Lock pages and hide prices from guest or non-wholesale users.",
  },
  {
    icon: Users,
    title: "Registration & Auto-Tag",
    description: "Approve B2B buyers with custom forms and auto-tagging.",
  },
  {
    icon: ShoppingCart,
    title: "Bulk & Quick Ordering",
    description: "CSV/XLSX bulk uploads and quick order page for repeat buyers.",
  },
  {
    icon: Globe,
    title: "Multi-Currency & Markets",
    description: "Sell globally with Shopify Markets and multi-currency support.",
  },
  {
    icon: Clock,
    title: "Net Terms & Shipping",
    description: "NET 15/30/60 terms and custom shipping rules per group.",
  },
  {
    icon: Zap,
    title: "Smart Order Limits",
    description: "Set min/max order limits by quantity or amount to protect margins.",
  },
];

const Benefits = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Why Merchants Choose Us</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Everything You Need to Sell Wholesale on Shopify
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A fast, high-performance solution built to scale your B2B channel alongside your D2C store
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1.5">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="gradient-primary shadow-glow text-base px-8 py-6 rounded-full group" type="button" onClick={() => openExternalUrl(SHOPIFY_APP_URL)}>
            Start Free Trial
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <p className="text-xs text-muted-foreground mt-3">Free plan available · No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
