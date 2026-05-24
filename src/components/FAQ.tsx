import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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
    q: "What are NET payment terms?",
    a: "On the Advanced plan, you can offer NET 15, NET 30, or NET 60 payment terms — allowing wholesale buyers to purchase now and pay later. You can also set custom shipping rates and sort or hide payment methods.",
  },
  {
    q: "Does it support Shopify Markets and multi-currency?",
    a: "Yes. The Standard and Advanced plans support multi-currency wholesale pricing and Shopify Markets integration, so you can sell globally and manage international B2B buyers easily.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan includes 1 active pricing rule, 50 CSV/XLSX bulk uploads per month, unlimited registration forms, manual or auto-tag and approve customers, and live chat and call support.",
  },
  {
    q: "How do registration forms work?",
    a: "You get unlimited registration forms on all plans. Buyers apply through a custom form, and you can manually or automatically tag and approve customers. Approved buyers are assigned to the correct pricing group.",
  },
  {
    q: "What kind of support do you offer?",
    a: "All plans include live chat and call support. We also offer free onboarding sessions to help you set up pricing rules, configure registration forms, and get your wholesale channel running.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">FAQ</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Everything you need to know about BMT B2B Wholesale Pricing.{" "}
            <a
              href="#support"
              className="text-accent hover:underline"
            >
              Contact us
            </a>{" "}
            if you don't find your answer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border/50 bg-card px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
