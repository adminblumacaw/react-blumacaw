import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Benefits from "@/components/Benefits";

import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
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
        description="BMT B2B Wholesale Pricing App helps you grow wholesale revenue directly within your Shopify store—no extra setup needed. Tiered and volume pricing, customer-specific discounts, lock & hide prices, quick order page, bulk CSV/Excel ordering, registration forms, smart order limits, custom payment & shipping rules, and net terms like Net 15/Net 30. Free plan available."
        canonicalPath="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "BMT B2B Wholesale Pricing",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": [
            { "@type": "Offer", "price": "0", "priceCurrency": "USD", "name": "Free Plan" },
            { "@type": "Offer", "price": "9.99", "priceCurrency": "USD", "name": "Standard Plan" },
            { "@type": "Offer", "price": "29.99", "priceCurrency": "USD", "name": "Advanced Plan" }
          ],
          "description": "BMT B2B Wholesale Pricing App helps you grow wholesale revenue directly within your Shopify store. Boost average order value with tiered and volume pricing, customer-specific discounts, and controlled wholesale registration approvals. Lock & hide prices for guest users, enable quick order page, fast bulk ordering via CSV or Excel, protect margins with smart order limits, and offer custom shipping and flexible payment terms like Net 15 or Net 30.",
          "url": "https://blumacawtech.com",
          "publisher": { "@type": "Organization", "name": "BlumacawTech", "logo": "https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "11" }

        }}
      />
      <Header showAnnouncement />
      <main>
        <Hero />
        <LogoBar />
        <Benefits />
        <Reviews />
        <ComparisonTable />
        <Pricing />
        <BlogSection />
        <Support />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
