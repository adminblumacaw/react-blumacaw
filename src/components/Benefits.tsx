import { DollarSign, TrendingUp, Users, ShoppingCart, Globe, Clock, Lock, Zap, Receipt, FileQuestion, ArrowRight, Tags, Workflow, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import FeatureIllustration, { type FeatureIllustrationType } from "@/components/FeatureIllustration";

const benefits = [
  {
    icon: DollarSign,
    title: "Wholesale & Fixed Pricing",
    description: "Set customer-specific price lists and wholesale or fixed prices by tag, product, collection, variant or market.",
    illustration: "pricing",
  },
  {
    icon: TrendingUp,
    title: "Volume & Tiered Pricing",
    description: "Quantity breaks and tiered pricing so bigger orders unlock better prices.",
    illustration: "tiers",
  },
  {
    icon: Lock,
    title: "Lock Pages & Hide Prices",
    description: "Gate pages behind login or approval and hide prices from guests and retail shoppers.",
    illustration: "locked",
  },
  {
    icon: Users,
    title: "Wholesale Application Form",
    description: "Built-in registration forms with manual or automatic tagging and approval of B2B buyers.",
    illustration: "application",
  },
  {
    icon: ShoppingCart,
    title: "Bulk & Quick Ordering",
    description: "CSV or XLSX purchase order uploads, plus a quick order form for repeat buyers.",
    illustration: "bulk-order",
  },
  {
    icon: Globe,
    title: "20 Languages & Shopify Markets",
    description: "Sell globally with 20 supported languages, Shopify Markets, and multi-currency pricing.",
    illustration: "markets",
  },
  {
    icon: Clock,
    title: "Net Terms & Shipping Rules",
    description: "Offer NET 15/30/60 terms, custom shipping rates, and payment rules for wholesale buyers.",
    illustration: "terms",
  },
  {
    icon: FileQuestion,
    title: "Request for Quote",
    description: "Let wholesale buyers request a quote before ordering, then review the request and finalize the order.",
    illustration: "quote",
  },
  {
    icon: Zap,
    title: "Order Limits & Case Packs",
    description: "Set minimum order quantities (MOQ), minimum order values (MOV), maximum limits and case-pack multiples.",
    illustration: "limits",
  },
  {
    icon: Receipt,
    title: "Tax Inclusive/Exclusive Prices",
    description: "Show ex-VAT prices to trade buyers and inc-VAT prices to retail customers.",
    illustration: "tax",
  },
  {
    icon: Receipt,
    title: "Invoicing & Google Drive Sync",
    description: "Generate invoices, send them automatically, and sync invoice files to Google Drive on the Expert plan.",
    illustration: "invoicing",
  },
  {
    icon: ShoppingCart,
    title: "Shopify POS Wholesale Discounts",
    description: "Apply wholesale discounts to in-person sales with Shopify POS on the Expert plan.",
    illustration: "pos",
  },
  {
    icon: Tags,
    title: "Pricing & Customer Controls",
    description: "Import or export pricing, bulk-edit rules, tag customer groups, and support tax-exempt buyers.",
    illustration: "controls",
  },
  {
    icon: Workflow,
    title: "Flexible Order Workflows",
    description: "Manage manual and draft orders, control available shipping and payment methods, and automate rules.",
    illustration: "workflow",
  },
  {
    icon: Plug,
    title: "Connected B2B Operations",
    description: "Connect B2B workflows with Pricing APIs on Expert, plus compatibility with Klaviyo, bundle, search, filter and page builder apps.",
    illustration: "connected",
  },
];

const Benefits = () => {
  return (
    <section id="features" className="bg-muted/30 px-4 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase text-accent">Why Merchants Choose Us</p>
          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            Everything You Need to Sell B2B Wholesale on Shopify
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A fast, high-performance solution built to scale your B2B channel alongside your D2C store
          </p>
        </div>

        <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group relative flex min-h-full flex-col overflow-hidden rounded-lg border border-border/80 bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth z-10" />
                <div className="transition-transform duration-500 group-hover:scale-[1.015]">
                  <FeatureIllustration type={b.illustration as FeatureIllustrationType} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex min-h-10 items-center gap-3">
                    <div className="gradient-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-md shadow-sm">
                      <Icon className="h-[18px] w-[18px] text-primary-foreground" />
                    </div>
                    <h3 className="text-base font-bold leading-snug">{b.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
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
