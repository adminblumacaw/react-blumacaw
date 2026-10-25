import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, MessageSquareQuote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookOnboarding from "@/components/BookOnboarding";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buildGuideJsonLd } from "@/lib/guideSchema";

const path = "/request-quote-button-guide";
const description = "Configure the Request for Quote button on Shopify: customer visibility, markets, products, styling, email notifications, forms, and the buyer experience.";
const steps = [
  {
    "step": 1,
    "description": "Navigate to the Request a Quote configuration page. You’ll find it below BMT Request Quote and Hide Price.",
    "title": "Open Request a Quote configuration"
  },
  {
    "step": 2,
    "description": "Choose an existing rule to edit or create a new one by clicking New request rule.",
    "title": "Create or select a rule"
  },
  {
    "step": 3,
    "description": "Click the Edit button next to a rule to open its configuration page.",
    "title": "Edit the rule"
  },
  {
    "step": 4,
    "description": "Adjust general settings under the General settings tab. Set a rule name and priority. Use the expiry and notifications section to decide when quotes expire and when customers get reminder emails.",
    "title": "Configure general settings"
  },
  {
    "step": 5,
    "description": "Set the expiration date and reminder period for quotes. For example, if expiry is set to 12 days and reminder is set to 5, buyers will get a reminder 5 days before their quote expires.",
    "title": "Set quote expiry and reminders"
  },
  {
    "step": 6,
    "description": "Define customer visibility for the request quote button: choose to show it for all customers, only logged-in customers, guests, specific customers or customer tags, and exclude customers if needed.",
    "title": "Choose customer visibility"
  },
  {
    "step": 7,
    "description": "Choose the markets where the button appears. Select all or specific markets as needed.",
    "title": "Select markets"
  },
  {
    "step": 8,
    "description": "Decide which products or collections the button applies to. Opt for all products, specific items, collections, or set exclusions.",
    "title": "Choose products and collections"
  },
  {
    "step": 9,
    "description": "Click Save to apply your changes.",
    "title": "Save your changes"
  },
  {
    "step": 10,
    "description": "Switch to the Visibility tab. Configure which pages show the quote request button: product pages, collection/catalog pages, or the cart page. Use the live preview section to see how your settings will look to customers.",
    "title": "Configure page visibility"
  },
  {
    "step": 11,
    "description": "Explore the style section. Adjust the button’s height, margins, text size and style (bold, italic, underline), colors, border, and more. Use the preview pane to see changes instantly.",
    "title": "Customize button styling"
  },
  {
    "step": 12,
    "description": "(Optional) For anything the settings don’t cover, add custom CSS in the Quote request form tab. It applies only inside the quote request popup.",
    "title": "Add custom CSS to the request popup (optional)"
  },
  {
    "step": 13,
    "description": "Add the Request a quote theme block to your product page (Add to theme on the app’s home page). Place it once; every rule uses it.",
    "title": "Add the product page theme block"
  },
  {
    "step": 14,
    "description": "Open the Email Functionality tab. Here you control email notifications sent through quote requests—such as the quote confirmation, the proposal and the expiry reminder. Only the proposal email is on by default; switch on the others you want and edit each one as needed.",
    "title": "Configure email notifications"
  },
  {
    "step": 15,
    "description": "Preview email templates and update content, including subject, body, CC, or variables.",
    "title": "Edit email templates"
  },
  {
    "step": 16,
    "description": "In the Quote Request Form tab, modify the quote form fields and thank-you page. Rearrange fields, make them invisible, or rename as needed.",
    "title": "Customize the quote request form"
  }
];
const customerSteps = [
  {
    "step": 1,
    "description": "On a product page, customers see the Add to quote button, under the Add to cart button by default (you choose the position). Clicking it adds the product to their quote request list.",
    "title": "Add a product to the quote list"
  },
  {
    "step": 2,
    "description": "Customers can browse and add multiple products to their quote request \"cart.\"",
    "title": "Add more products"
  },
  {
    "step": 3,
    "description": "They simply fill out the form and click Submit Request to send you their quote inquiry.",
    "title": "Submit the quote request"
  },
  {
    "step": 4,
    "description": "Before sending, customers can review and change the items in their quote list. After sending, every customer gets an email link to their quote, and signed-in customers can also see it on the My Quote History page if you switch that page on.",
    "title": "Manage pending requests"
  },
  {
    "step": 5,
    "description": "The Add to quote button can also appear on collection pages, and the cart page has its own button for the whole cart (next step).",
    "title": "Request quotes from collections and cart"
  },
  {
    "step": 6,
    "description": "On the Cart page, a dedicated Request a Quote for This Cart button lets customers request quotes on all their cart items at once.",
    "title": "Request a quote for the entire cart"
  },
  {
    "step": 7,
    "description": "Customers don’t have to sign in. When the rule shows the button to guests, they can submit a request and get an email with a link to their quote. Requests from signed-in customers are tied to their account.",
    "title": "Guests can request quotes too"
  }
];
const faqs = [
  {
    "question": "Can guests see the Request a Quote button?",
    "answer": "Yes. Customer visibility can be configured for all customers, logged-in customers, guests, or specific customer tags. Guests can submit requests too and receive an email link to their quote; requests from signed-in customers are tied to their account."
  },
  {
    "question": "How do quote expiry reminders work?",
    "answer": "Set the expiration period and reminder period in the General settings tab. For example, a quote that expires after 12 days with a reminder period of 5 days sends a reminder 5 days before expiry."
  },
  {
    "question": "Where can the quote button appear?",
    "answer": "The Visibility tab controls the button on product pages, collection/catalog pages, and the cart page. Add the Request a quote theme block to your product page once; every rule uses it."
  }
];

const RequestQuoteButtonGuide = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Configure the Request for Quote Button — BMT" description={description} canonicalPath={path}
      jsonLd={buildGuideJsonLd({ title: "Configuring request for quote button on the store", description, path, steps, faqs })} />
    <Header />
    <main className="pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/request-quote-hide-price-guide#request-quote-button"><ArrowLeft className="w-4 h-4 mr-2" />Back to Request Quote, Hide Price</Link>
          </Button>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4"><MessageSquareQuote className="w-4 h-4 mr-2" />Request Quote Button</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Configuring request for quote button on the store</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Let customers add products to a quote list instead of purchasing immediately. Configure the button, customize the form, and receive quote requests from your store.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert><AlertTriangle className="h-4 w-4" /><AlertDescription><strong>Prerequisites:</strong> Install BMT Request Quote, Hide Price, enable its app embed, and have access to your Shopify theme editor.</AlertDescription></Alert>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Configuration Guide</h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <Card key={step.step} id={`step-${step.step}`} className="shadow-card scroll-mt-24">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center"><MessageSquareQuote className="w-6 h-6 text-primary" /></div>
                    <div className="min-w-0"><Badge variant="outline" className="mb-2">Step {step.step}</Badge><CardTitle className="text-xl">{step.title}</CardTitle></div>
                  </div>
                </CardHeader>
                <CardContent><CardDescription className="text-base leading-relaxed">{step.description}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
          <Alert className="mt-8"><CheckCircle className="h-4 w-4" /><AlertDescription>Your Request a Quote button is configured to streamline custom pricing and order negotiations from your storefront.</AlertDescription></Alert>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Experience: Using the Request a Quote Button</h2>
          <div className="space-y-8">
            {customerSteps.map((step) => (
              <Card key={step.step} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center"><MessageSquareQuote className="w-6 h-6 text-primary" /></div>
                    <div className="min-w-0"><Badge variant="outline" className="mb-2">Step {step.step}</Badge><CardTitle className="text-xl">{step.title}</CardTitle></div>
                  </div>
                </CardHeader>
                <CardContent><CardDescription className="text-base leading-relaxed">{step.description}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (<AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>))}
          </Accordion>
          <Button variant="outline" asChild className="mt-8"><Link to="/request-quote-hide-price-guide">Continue configuration<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
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

export default RequestQuoteButtonGuide;