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
      description="Turn your Shopify store into a wholesale channel without a second site. Wholesale, fixed and volume pricing by tag, CSV/XLSX bulk ordering, quick order form, order minimums and case packs, tax inclusive/exclusive prices, lock pages & hide prices, and NET 15/30/60 terms. Built for Shopify. Free plan available."
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
                { "price": "29.99", "name": "Advanced Plan" }
              ].map((o) => ({
                "@type": "Offer",
                "name": o.name,
                "price": o.price,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "url": "https://blumacawtech.com/pricing",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
                  "shippingDestination": { "@type": "DefinedRegion", "name": "Worldwide" },
                  "doesNotShip": true
                },
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "US",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
                }
              })),

              "description": "Turn your Shopify store into a wholesale channel without running a second site. Set wholesale, fixed or volume pricing by customer tag so approved buyers see their own prices. Let buyers order fast with CSV or XLSX purchase order uploads and a quick order form. Enforce minimum and maximum order quantities, order value minimums and case-pack multiples. Show ex-VAT prices to trade and inc-VAT to retail. Gate pages behind login or approval, hide shipping and payment methods by customer group, and offer NET 15/30/60 payment terms. Built for Shopify.",
              "inLanguage": ["en","fr","nl","it","cs","es","ja","zh-Hans","zh-Hant","de","fi","nb","pt-PT","ro","sv","tr","da","el","he","ko"],
              "url": "https://blumacawtech.com",
              "publisher": { "@type": "Organization", "name": "BlumacawTech", "logo": "https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "15" }
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
