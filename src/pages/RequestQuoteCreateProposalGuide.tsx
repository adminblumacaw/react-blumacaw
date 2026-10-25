import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, FileText } from "lucide-react";
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

const path = "/request-quote-create-proposal-guide";
const description = "Create Shopify quote proposals with BMT Request Quote, Hide Price: choose customers, add products, set pricing and expiration, and email proposals or create draft orders.";
const steps = [
  {
    "step": 1,
    "title": "Open Quote Approval",
    "description": "Go to the Quote Approval main page."
  },
  {
    "step": 2,
    "title": "Create a quote proposal",
    "description": "Click the Create Quote Proposal CTA. Quote proposals are used when a customer or buyer asks for a quote, letting you respond with clear pricing and details."
  },
  {
    "step": 3,
    "title": "Review the quote number",
    "description": "Review the system-generated quote number. If needed, enter a custom quote number."
  },
  {
    "step": 4,
    "title": "Select the customer",
    "description": "Click Select Customer and choose the relevant customer from the list."
  },
  {
    "step": 5,
    "title": "Review customer details",
    "description": "After selecting the customer, review or enter the contact’s email, name, company, and optional wholesale tag."
  },
  {
    "step": 6,
    "title": "Set the quote expiration",
    "description": "Choose the number of days, weeks, or months, then specify the expiration time and time zone."
  },
  {
    "step": 7,
    "title": "Add notes and a PO number (optional)",
    "description": "Add notes and enter a PO number for your records, if needed."
  },
  {
    "step": 8,
    "title": "Add products to the quote",
    "description": "Search for products, click Browse products to select from the catalog, paste SKUs directly, or upload a CSV or Excel file if you have a product list."
  },
  {
    "step": 9,
    "title": "Set quantities and quote prices",
    "description": "Once a product is added, set the quantity and the quote price for each item."
  },
  {
    "step": 10,
    "title": "Adjust the payment method",
    "description": "Adjust the payment method if required."
  },
  {
    "step": 11,
    "title": "Add discounts or offers (optional)",
    "description": "Add any discounts or promotional offers, if needed."
  },
  {
    "step": 12,
    "title": "Enter shipping charges",
    "description": "Enter shipping charges as needed."
  },
  {
    "step": 13,
    "title": "Finalize your next action",
    "description": "Convert the quote to a draft order or send the proposal email directly to the buyer."
  }
];
const faqs = [
  {
    "question": "Where do I create a quote proposal?",
    "answer": "Go to the Quote Approval main page and click Create Quote Proposal. Select the customer and review their contact details before adding products and pricing."
  },
  {
    "question": "How can I add products to a quote?",
    "answer": "Search for products, use Browse products to select from the catalog, paste SKUs directly, or upload a CSV or Excel product list. Then set the quantity and quote price for each item."
  },
  {
    "question": "What can I do after preparing the proposal?",
    "answer": "After reviewing the customer details, expiration, products, payment method, discounts, and shipping charges, convert the quote to a draft order or send the proposal email directly to the buyer."
  }
];

const RequestQuoteCreateProposalGuide = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Create Quote Proposals — BMT Request Quote" description={description} canonicalPath={path}
      jsonLd={buildGuideJsonLd({ title: "Creating quote proposal", description, path, steps, faqs })} />
    <Header />
    <main className="pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/request-quote-hide-price-guide#create-proposal"><ArrowLeft className="w-4 h-4 mr-2" />Back to Request Quote, Hide Price</Link>
          </Button>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4"><FileText className="w-4 h-4 mr-2" />Quote Proposal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Creating quote proposal</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Create quote proposals to respond quickly and professionally when customers request a quote. Capture details, customize pricing, and streamline approvals—all from one place.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert><AlertTriangle className="h-4 w-4" /><AlertDescription><strong>Prerequisites:</strong> Install BMT Request Quote, Hide Price and have administrative access to your Shopify store.</AlertDescription></Alert>
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
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center"><FileText className="w-6 h-6 text-primary" /></div>
                    <div className="min-w-0"><Badge variant="outline" className="mb-2">Step {step.step}</Badge><CardTitle className="text-xl">{step.title}</CardTitle></div>
                  </div>
                </CardHeader>
                <CardContent><CardDescription className="text-base leading-relaxed">{step.description}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
          <Alert className="mt-8"><CheckCircle className="h-4 w-4" /><AlertDescription>Quote proposals keep your response process organized and efficient, making it easier to deliver accurate, personalized pricing to your buyers. Using this workflow ensures faster approvals and a better customer experience.</AlertDescription></Alert>
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

export default RequestQuoteCreateProposalGuide;