import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookOnboarding from "@/components/BookOnboarding";
import { buildGuideJsonLd } from "@/lib/guideSchema";
import {
  MessageSquareQuote,
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  Power,
  FileText,
  ClipboardCheck,
} from "lucide-react";

const RequestQuoteHidePriceGuide = () => {

  const jsonLd = buildGuideJsonLd({
    title: "Configure BMT Request Quote, Hide Price",
    description:
      "Guide to hiding prices and pages from guests, showing a Request a quote button, and turning accepted quote proposals into draft orders with BMT Request Quote, Hide Price.",
    path: "/request-quote-hide-price-guide",
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Request Quote & Hide Price Setup Guide — BMT"
        description="Hide prices and pages from guests on Shopify, show a Request a quote button in their place, send PDF proposals and convert accepted quotes into draft orders."
        canonicalPath="/request-quote-hide-price-guide"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" asChild>
                <a href="/products/bmt-request-quote-hide-price" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to the homepage
                </a>
              </Button>
            </div>

            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                <MessageSquareQuote className="w-4 h-4 mr-2" />
                Request Quote, Hide Price Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Configure <span className="font-semibold text-primary">Request Quote, Hide Price</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Hide prices and pages from the shoppers you choose, show a Request a quote button where the price was, and turn accepted proposals into draft orders.
              </p>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Alert className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Prerequisites:</strong> Install BMT Request Quote, Hide Price from the Shopify App Store and have administrative access to your Shopify store.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section id="app-embed" className="py-12 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <Card className="max-w-sm min-h-[294px] shadow-card hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Power className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold leading-none">App Embed</h2>
                <CardDescription>
                  Enable the app embed on your Shopify theme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to="/request-quote-app-embed-guide"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-primary shrink-0" aria-hidden="true" />
                  Switch on the app embed
                </Link>
              </CardContent>
            </Card>
            <Card id="request-quote-button" className="max-w-sm min-h-[294px] shadow-card hover:shadow-glow transition-smooth scroll-mt-24">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquareQuote className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold leading-none">Request Quote Button</h2>
                <CardDescription>Configure the quote button and customer request experience on your store</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/request-quote-button-guide" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-primary shrink-0" aria-hidden="true" />
                  Configuring request for quote button on the store
                </Link>
              </CardContent>
            </Card>
            <Card id="proposal-template" className="max-w-sm min-h-[294px] shadow-card hover:shadow-glow transition-smooth scroll-mt-24">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold leading-none">Quote proposal</h2>
                <CardDescription>Customize your proposal template and create personalized quotes with customer details, products, pricing, and shipping charges</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/request-quote-proposal-template-guide" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-primary shrink-0" aria-hidden="true" />
                  Configuring proposal template
                </Link>
                <Link id="create-proposal" to="/request-quote-create-proposal-guide" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors scroll-mt-24">
                  <ChevronRight className="w-4 h-4 mr-2 text-primary shrink-0" aria-hidden="true" />
                  Creating quote proposal
                </Link>
              </CardContent>
            </Card>
            <Card id="quote-approval" className="max-w-sm min-h-[294px] shadow-card hover:shadow-glow transition-smooth scroll-mt-24">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold leading-none">Quote Approval Process</h2>
                <CardDescription>Approve, adjust, or decline buyer quote requests and convert confirmed quotes into draft orders</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/request-quote-approval-process-guide" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-primary shrink-0" aria-hidden="true" />
                  Configuring quote approval process
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Support CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our expert support team is available 24/7 to help you with implementation, customization, and troubleshooting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary"
                onClick={() => {
                  if ((window as any).Tawk_API) {
                    (window as any).Tawk_API.maximize();
                  }
                }}
              >
                Contact Support
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#support">
                  View Support Options
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <BookOnboarding
        heading="Try the Request Quote, Hide Price on Shopify"
        description="Add a Request a quote button in place of hidden prices, send PDF proposals, and turn accepted quotes into draft orders — free to install on Shopify."
        appUrl="https://apps.shopify.com/bmt-request-quote-hide-price"
      />
      <Footer />
    </div>
  );
};

export default RequestQuoteHidePriceGuide;
