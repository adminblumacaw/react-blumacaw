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
      description="BMT B2B Wholesale Pricing App helps you grow wholesale sales directly in Shopify—no extra setup. Tiered and volume pricing, tax inclusive/exclusive price display, lock & hide prices and B2B login, quick order page, bulk CSV/Excel ordering, registration forms, order limits, custom shipping and Net 15/30/45 terms. Built for Shopify. Free plan available."
        canonicalPath="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "name": "BMT B2B Wholesale Pricing",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": [
                { "@type": "Offer", "price": "0", "priceCurrency": "USD", "name": "Free Plan" },
                { "@type": "Offer", "price": "9.99", "priceCurrency": "USD", "name": "Standard Plan" },
                { "@type": "Offer", "price": "29.99", "priceCurrency": "USD", "name": "Advanced Plan" }
              ],
              "description": "BMT B2B Wholesale Pricing App helps you grow wholesale sales directly in Shopify—no extra setup. Boost AOV with tiered pricing, volume discounts, and customer-specific pricing. Display prices tax inclusive or tax exclusive for wholesale buyers. Simplify onboarding with a customizable wholesale registration form and approval workflow. Sell globally with multi-currency support in any language and market, offer Net 15/30/45 payment terms, and protect margins with order limits. Restrict access with B2B login and password-protected pages, and enable faster ordering with a quick-order page. Built for Shopify.",
              "inLanguage": ["en","fr","nl","it","cs","es","ja","zh-Hans","zh-Hant","de","fi","nb","pt-PT","ro","sv","tr"],
              "url": "https://blumacawtech.com",
              "publisher": { "@type": "Organization", "name": "BlumacawTech", "logo": "https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "14" }
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
