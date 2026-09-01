import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      tagline: "Get started at no cost",
      monthlyPrice: "Free",
      annualPrice: "Free",
      badge: null,
      buttonText: "Install Free",
      highlight: false,
      features: [
        "1 Active pricing rule",
        "1 Active hide price and B2B login rule",
        "Set prices for unlimited SKUs",
        "Unlimited registration forms",
        "Manual and tag approve customers",
        "50 CSV XLSX bulk uploads monthly",
        "Get live chat and call support",
      ],
    },
    {
      name: "Standard",
      tagline: "Unlimited wholesale power",
      monthlyPrice: "$9.99",
      annualPrice: "$99.90",
      badge: "Most Popular",
      buttonText: "Start 60-Day Free Trial",
      highlight: true,
      features: [
        "Unlimited active pricing rules",
        "Unlimited CSV XLSX bulk uploads",
        "Set min/max order limits by quantity",
        "Set min/max order limits by amount",
        "Support multi-currency wholesale pricing",
        "Support Shopify markets",
        "Unlimited hide price and B2B login rules",
      ],
    },
    {
      name: "Advanced",
      tagline: "Full checkout control",
      monthlyPrice: "$29.99",
      annualPrice: "$299.90",
      badge: null,
      buttonText: "Start 60-Day Free Trial",
      highlight: false,
      features: [
        "All Standard features included",
        "Set custom shipping rates",
        "Set NET 15/30/60 payment terms",
        "Display tax inclusive/exclusive prices",
        "Setup quick order page",
        "Set qty increments for products",
        "Get Draft order integration",
      ],
    },
    {
      name: "Expert",
      tagline: "Invoicing on autopilot",
      monthlyPrice: "$49.99",
      annualPrice: "$499",
      badge: null,
      buttonText: "Start 60-Day Free Trial",
      highlight: false,
      features: [
        "All Advanced features included",
        "Invoice Generator",
        "Automatic invoice emails",
        "Google Drive sync",
        "Get live chat and call support",
      ],
    },

  ];


  return (
    <section id="pricing" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Pricing</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Free plan available. 60-day free trial on paid plans.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-muted rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Annual
              <Badge variant="secondary" className="bg-accent/10 text-accent text-xs border-0">
                Save 17%
              </Badge>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                plan.highlight
                  ? "shadow-glow border-primary/20 md:scale-[1.02]"
                  : "shadow-card hover:shadow-elevated border-border/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />
              )}
              <CardHeader className={`text-center ${plan.badge ? "pt-8" : ""}`}>
                {plan.badge && (
                  <Badge className="mx-auto mb-3 bg-primary/10 text-primary border-0 text-xs">
                    {plan.badge}
                  </Badge>
                )}
                <CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="text-4xl font-bold text-foreground mt-4">
                  {plan.monthlyPrice === "Free"
                    ? "Free"
                    : isAnnual
                    ? plan.annualPrice
                    : plan.monthlyPrice}
                  {plan.monthlyPrice !== "Free" && (
                    <span className="text-base font-normal text-muted-foreground ml-1">
                      / {isAnnual ? "year" : "mo"}
                    </span>
                  )}
                </div>
                {isAnnual && plan.monthlyPrice !== "Free" && (
                  <p className="text-xs text-accent mt-1">Save 17% vs monthly</p>
                )}
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  variant={plan.highlight ? "default" : "outline"}
                  className={`w-full min-h-[48px] mb-6 group ${
                    plan.highlight ? "gradient-primary shadow-glow" : ""
                  }`}
                  type="button"
                  onClick={() => openExternalUrl(SHOPIFY_APP_URL)}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          All charges billed in USD. Recurring charges billed every 30 days.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
