import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Benefits from "@/components/Benefits";


import Reviews from "@/components/Reviews";
import FAQ, { faqs } from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import BookOnboarding from "@/components/BookOnboarding";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="BMT B2B Wholesale Pricing — Shopify Wholesale & Bulk Order App"
      description="Turn your Shopify store into a wholesale channel without a second site. Customer-specific wholesale pricing, CSV/XLSX and quick ordering, a gated B2B catalogue, order limits, Request for Quote, net terms, multi-language invoices, multi-currency, and Shopify POS discounts. Built for Shopify."
        canonicalPath="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "name": "BMT B2B Wholesale Pricing",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "image": ["https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png"],
              "offers": [
                { "price": "0", "name": "Free Plan" },
                { "price": "9.99", "name": "Standard Plan" },
                { "price": "29.99", "name": "Advanced Plan" },
                { "price": "49.99", "name": "Expert Plan" }
              ].map((o) => ({
                "@type": "Offer",
                "name": o.name,
                "price": o.price,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "url": "https://blumacawtech.com/pricing",
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "US",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
                }
              })),

              "description": "Turn your Shopify store into a wholesale channel without running a second site. Set customer-specific wholesale, fixed or volume pricing; accept CSV or XLSX purchase order uploads; provide a quick order form; enforce order limits and case-pack multiples; gate pages behind login or approval; offer requests for quote and net terms; invoice in multiple languages and currencies; and enable wholesale discounts on Shopify POS. Built for Shopify.",
              "featureList": [
                "Customer-specific wholesale pricing",
                "Volume and tiered pricing",
                "Request for Quote",
                "CSV/XLSX bulk ordering",
                "Quick order page",
                "Wholesale registration forms",
                "Order limits and case-pack multiples",
                "Net payment terms",
                "Shopify Markets and multi-currency pricing",
                "Multi-language invoicing",
                "Shopify POS wholesale discounts"
              ],
              "inLanguage": ["en","fr","nl","it","cs","es","ja","zh-Hans","zh-Hant","de","fi","nb","pt-PT","ro","sv","tr","da","el","he","ko"],
              "url": "https://blumacawtech.com",
              "publisher": { "@type": "Organization", "name": "BlumacawTech", "logo": "https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "21" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            }
          ]
        }}
      />
      <Header showAnnouncement />
      <main>
        <Hero />
        <LogoBar />
        <Benefits />
        <Reviews />
        <BlogSection />
        <Support />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
