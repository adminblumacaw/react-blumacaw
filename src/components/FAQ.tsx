import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const faqs = [
  {
    q: "Do I need Shopify Plus to use BMT B2B Wholesale Pricing?",
    a: "No. BMT B2B Wholesale Pricing works on all Shopify plans — Basic, Shopify, and Advanced. You get enterprise-grade B2B features like tiered pricing, net terms, and custom shipping without the $2,000+/month Plus price tag.",
  },
  {
    q: "Can I run both retail (D2C) and wholesale (B2B) from the same store?",
    a: "Yes. BMT lets you serve D2C and B2B customers from a single Shopify storefront — no separate setup required. Wholesale pricing is only visible to tagged or approved buyers, so retail customers always see standard prices.",
  },
  {
    q: "How does wholesale pricing work?",
    a: "Create exclusive customer-specific wholesale pricing to boost loyalty and profit. You can set percentage discounts, fixed prices, or tiered volume pricing per product, variant, or collection. Assign pricing rules to customer groups based on tags — wholesale buyers automatically see their discounted prices.",
  },
  {
    q: "What is CSV/XLSX bulk ordering?",
    a: "Wholesale buyers can upload a CSV or Excel file with SKUs and quantities to place large orders in seconds. The Free plan includes 50 uploads per month, and paid plans offer unlimited bulk uploads.",
  },
  {
    q: "What order limits can I set?",
    a: "On the Standard plan and above, you can set min/max order limits by both quantity and amount. This protects your margins by ensuring wholesale orders meet minimum requirements.",
  },
  {
    q: "Can I sell in case packs or fixed quantity increments?",
    a: "Yes. On the Advanced plan you can set quantity increments per product, so buyers can only order in case-pack multiples such as 6, 12, or 24 units.",
  },
  {
    q: "What are NET payment terms?",
    a: "On the Advanced plan, you can offer NET 15, NET 30, or NET 60 payment terms — allowing wholesale buyers to purchase now and pay later. You can also set custom shipping rates and integrate draft orders.",
  },
  {
    q: "How does Request for Quote work?",
    a: "Request for Quote lets wholesale buyers submit a quote request before an order is finalized. You can review the requested products and quantities, confirm the final terms, and complete the order. This feature is available on the Advanced plan and above.",
  },
  {
    q: "Does it support Shopify Markets and multi-currency?",
    a: "Yes. The Standard, Advanced, and Expert plans support multi-currency wholesale pricing and Shopify Markets integration, so you can sell globally and manage international B2B buyers easily.",
  },
  {
    q: "Can I show tax inclusive or tax exclusive wholesale prices?",
    a: "Yes — this is a new feature. You can choose whether wholesale prices display as tax inclusive or tax exclusive, so B2B buyers see the pricing format they expect while retail customers keep seeing your standard tax display.",
  },
  {
    q: "What languages are supported for my customers?",
    a: "BMT supports English, French, Dutch, Italian, Czech, Spanish, Japanese, Simplified and Traditional Chinese, German, Finnish, Norwegian, Portuguese (Portugal), Romanian, Swedish, Turkish, Danish, Greek, Hebrew, and Korean.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan includes 1 active pricing rule, 50 CSV/XLSX bulk uploads per month, unlimited registration forms, manual or auto-tag and approve customers, and live chat and call support. Paid plans include a 60-day free trial.",
  },
  {
    q: "How do registration forms work?",
    a: "You get unlimited registration forms on all plans. Buyers apply through a custom form, and you can manually or automatically tag and approve customers. Approved buyers are assigned to the correct pricing group.",
  },
  {
    q: "What kind of support do you offer?",
    a: "The Free and Expert plans include live chat and call support. We also offer free onboarding sessions to help you set up pricing rules, configure registration forms, and get your wholesale channel running.",
  },
];

// Compact on purpose: plain divided rows instead of separate cards, two columns
// on wide screens, and only the first INITIAL questions until "Show all". Every
// question stays in the FAQPage JSON-LD on the pages that render this section.
const INITIAL = 6;

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? faqs : faqs.slice(0, INITIAL);
  const half = Math.ceil(shown.length / 2);
  const columns = [shown.slice(0, half), shown.slice(half)];

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base">
            Everything you need to know about BMT B2B Wholesale Pricing.{" "}
            <a
              href="#support"
              className="font-medium text-accent underline underline-offset-4 hover:no-underline"
            >
              Contact us
            </a>{" "}
            if you don't find your answer.
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card px-5 sm:px-6">
          <Accordion type="single" collapsible className="grid lg:grid-cols-2 lg:gap-x-10">
            {columns.map((column, c) => (
              <div
                key={c}
                className={`divide-y divide-border/60 ${c === 1 ? "border-t border-border/60 lg:border-t-0" : ""}`}
              >
                {column.map((faq) => {
                  const i = faqs.indexOf(faq);
                  return (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-b-0">
                      <AccordionTrigger className="py-3.5 gap-3 text-left text-sm sm:text-[0.9375rem] font-semibold hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </div>
            ))}
          </Accordion>
        </div>

        {faqs.length > INITIAL && (
          <div className="text-center mt-5">
            <Button variant="outline" size="sm" aria-expanded={showAll} onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show fewer questions" : `Show all ${faqs.length} questions`}
              <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} aria-hidden />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
