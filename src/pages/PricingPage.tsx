import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import FAQ, { faqs } from "@/components/FAQ";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";

const included = [
  "Tiered, volume and customer-specific wholesale pricing",
  "Set prices for unlimited SKUs",
  "Wholesale registration form with approval workflow",
  "Lock pages, hide prices and require B2B login",
  "Bulk CSV/XLSX price uploads",
  "Min/max order limits by quantity or amount",
  "Quick order page and quantity increments per product",
  "Tax inclusive/exclusive price display and draft order integration",
  "Multi-currency, all languages and Shopify Markets",
  "Live chat and call support on every plan",
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pricing — BMT B2B Wholesale Pricing App for Shopify"
        description="BMT B2B Wholesale Pricing plans: Free plan available, Standard at $9.99/mo and Advanced at $29.99/mo with a 60-day free trial. Wholesale pricing, registration forms, order limits, custom shipping and Net terms for Shopify."
        canonicalPath="/pricing"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              name: "BMT B2B Wholesale Pricing",
              description:
                "Shopify B2B wholesale app with tiered pricing, volume discounts, registration forms, order limits, custom shipping and Net payment terms.",
              brand: { "@type": "Brand", name: "BlumacawTech" },
              url: "https://blumacawtech.com/pricing",
              image: [
                "https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "15",
              },
              offers: [
                { name: "Free", price: "0" },
                { name: "Standard", price: "9.99" },
                { name: "Advanced", price: "29.99" },
              ].map((o) => ({
                "@type": "Offer",
                name: o.name,
                price: o.price,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: "https://blumacawtech.com/pricing",
                hasMerchantReturnPolicy: {
                  "@type": "MerchantReturnPolicy",
                  applicableCountry: "US",
                  returnPolicyCategory:
                    "https://schema.org/MerchantReturnNotPermitted",
                },
              })),
            },

            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      <Header showAnnouncement />
      <main>
        <section className="pt-40 sm:pt-44 pb-8 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
              Plans &amp; Pricing
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Wholesale Pricing Plans for Every Shopify Store
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Free plan available. 60-day free trial on paid plans. All charges billed in USD and you
              can change or cancel your plan any time from Shopify.
            </p>
            <div className="mt-7 flex justify-center">
              <Button
                size="lg"
                className="gradient-primary shadow-glow min-h-[48px] group"
                type="button"
                onClick={() => openExternalUrl(SHOPIFY_APP_URL)}
              >
                Install Free on Shopify
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <Pricing />

        <section className="py-14 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8">
              What You Get With BMT
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Support />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
