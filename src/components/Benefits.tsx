import { DollarSign, TrendingUp, Users, ShoppingCart, Globe, Clock, Lock, Zap, Receipt, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";

const benefits = [
  {
    icon: DollarSign,
    title: "Wholesale & Fixed Pricing",
    description: "Set wholesale, fixed or custom prices by customer tag — applied automatically at checkout.",
  },
  {
    icon: TrendingUp,
    title: "Volume & Tiered Pricing",
    description: "Quantity breaks and tiered pricing so bigger orders unlock better prices.",
  },
  {
    icon: Lock,
    title: "Lock Pages & Hide Prices",
    description: "Gate pages behind login or approval and hide prices from guests and retail shoppers.",
  },
  {
    icon: Users,
    title: "Wholesale Application Form",
    description: "Built-in registration forms with manual or automatic tagging and approval of B2B buyers.",
  },
  {
    icon: ShoppingCart,
    title: "Bulk & Quick Ordering",
    description: "CSV or XLSX purchase order uploads, plus a quick order form for repeat buyers.",
  },
  {
    icon: Globe,
    title: "All Languages & Markets",
    description: "Sell globally in any language with Shopify Markets and multi-currency support.",
  },
  {
    icon: Clock,
    title: "Net Terms & Shipping Rules",
    description: "Offer NET 15/30/60 terms, custom shipping rates, and hide payment methods by group.",
  },
  {
    icon: Zap,
    title: "Order Limits & Case Packs",
    description: "Minimum and maximum order quantities, order value minimums, and case-pack multiples.",
  },
  {
    icon: Receipt,
    title: "Tax Inclusive/Exclusive Prices",
    description: "Show ex-VAT prices to trade buyers and inc-VAT prices to retail customers.",
  },
];

const Benefits = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Why Merchants Choose Us</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Everything You Need to Sell B2B Wholesale on Shopify
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A fast, high-performance solution built to scale your B2B channel alongside your D2C store
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-border/60 bg-card p-6 sm:p-7 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elevated hover:border-primary/30"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 tracking-tight">{b.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{b.description}</p>
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
