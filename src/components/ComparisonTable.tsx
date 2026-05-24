import { Check, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import { ArrowRight } from "lucide-react";

const features = [
  {
    name: "Wholesale Pricing",
    bmt: "full",
    plus: "full",
    others: "partial",
  },
  {
    name: "Volume & Tiered Discounts",
    bmt: "full",
    plus: "partial",
    others: "partial",
  },
  {
    name: "Lock & Hide Prices",
    bmt: "full",
    plus: "partial",
    others: "partial",
  },
  {
    name: "Quick Order Page",
    bmt: "full",
    plus: "none",
    others: "partial",
  },
  {
    name: "CSV/Excel Bulk Ordering",
    bmt: "full",
    plus: "none",
    others: "partial",
  },
  {
    name: "Custom Registration Forms",
    bmt: "full",
    plus: "partial",
    others: "partial",
  },
  {
    name: "Min/Max Order Limits",
    bmt: "full",
    plus: "full",
    others: "partial",
  },
  {
    name: "Net Payment Terms (Net 15/30/60)",
    bmt: "full",
    plus: "full",
    others: "none",
  },
  {
    name: "Custom Shipping Rules",
    bmt: "full",
    plus: "full",
    others: "none",
  },
  {
    name: "Multi-Currency & Shopify Markets",
    bmt: "full",
    plus: "full",
    others: "partial",
  },
  {
    name: "No Shopify Plus Required",
    bmt: "full",
    plus: "none",
    others: "full",
  },
  {
    name: "Free Plan Available",
    bmt: "full",
    plus: "none",
    others: "partial",
  },
  {
    name: "Starting Price",
    bmt: "free",
    plus: "$2,000/mo",
    others: "$20–$100/mo",
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "full") return <Check className="w-5 h-5 text-accent mx-auto" />;
  if (status === "partial") return <AlertTriangle className="w-4 h-4 text-yellow-500 mx-auto" />;
  if (status === "none") return <X className="w-5 h-5 text-destructive/60 mx-auto" />;
  return <span className="text-sm font-medium text-muted-foreground">{status}</span>;
};

const ComparisonTable = () => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
            Platform Comparison
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            How BMT Stacks Up Against Alternatives
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            All the B2B features you need — without the enterprise price tag
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Scroll hint for mobile */}
          <p className="text-xs text-muted-foreground text-center mb-2 sm:hidden">
            ← Swipe to compare →
          </p>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full border-collapse min-w-[540px]">
              <thead>
                <tr>
                  <th className="text-left p-3 sm:p-4 text-xs sm:text-sm font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="p-3 sm:p-4 text-center">
                    <div className="inline-flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-xl bg-primary/5 border border-primary/10">
                      <span className="text-xs sm:text-sm font-bold text-primary">BMT B2B</span>
                      <span className="text-[10px] text-accent font-medium">RECOMMENDED</span>
                    </div>
                  </th>
                  <th className="p-3 sm:p-4 text-center">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">Shopify Plus B2B</span>
                  </th>
                  <th className="p-3 sm:p-4 text-center">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">Other Apps</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-t border-border/30 ${i % 2 === 0 ? "bg-muted/20" : ""}`}
                  >
                    <td className="p-3 sm:p-4 text-xs sm:text-sm font-medium">{f.name}</td>
                    <td className="p-3 sm:p-4 text-center">
                      <StatusIcon status={f.bmt} />
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <StatusIcon status={f.plus} />
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <StatusIcon status={f.others} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="gradient-primary shadow-glow text-base px-8 py-6 group" type="button" onClick={() => openExternalUrl(SHOPIFY_APP_URL)}>
            Start Free — No Credit Card
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
