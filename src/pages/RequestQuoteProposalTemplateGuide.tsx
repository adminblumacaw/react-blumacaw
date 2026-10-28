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

const path = "/request-quote-proposal-template-guide";
const description = "Customize your Shopify quote proposal template with BMT Request Quote, Hide Price: add your logo, adjust styles, edit content sections, and update the footer.";
const steps = [
  { step: 1, title: "Navigate to the Proposal Template section", description: "Go to the BMT area and select Proposal Template from the menu." },
  { step: 2, title: "Open the proposal template", description: "After clicking Proposal Template, the proposal page appears. This is your default account proposal template." },
  { step: 3, title: "Customize the template", description: "Click the Customise button. On the left, you'll see all the options you can configure. On the right is a live preview so you can see changes as you make them." },
  { step: 4, title: "Add your logo", description: "First, upload your logo in Shopify under Content > Files. Once you upload your logo, Shopify provides a new URL. Copy that URL and paste it into the logo field in the template, then choose the logo size (small, medium or large)." },
  { step: 5, title: "Adjust style settings", description: "Go to Style and pick your proposal’s accent colour." },
  { step: 6, title: "Edit content sections", description: "Under Content, configure the sections you want to display in the template." },
  { step: 7, title: "Update the footer", description: "Use the Footer section to add or modify footer details, making the template truly your own." },
];
const faqs = [
  { question: "Where do I find the proposal template?", answer: "Go to the BMT area and select Proposal Template from the menu. The proposal page shows your default account proposal template; click Customise to edit it." },
  { question: "How do I add my logo to the proposal?", answer: "Upload your logo in Shopify under Content > Files, copy the URL Shopify provides, and paste it into the designated logo field in the template." },
  { question: "What can I customize in the proposal template?", answer: "Use Style to set the accent colour, Content to configure the sections to display, and Footer to add or modify footer details. The live preview on the right shows your changes as you make them." },
];

const RequestQuoteProposalTemplateGuide = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Configure Proposal Template — BMT Request Quote" description={description} canonicalPath={path}
      jsonLd={buildGuideJsonLd({ title: "Configuring proposal template", description, path, steps, faqs })} />
    <Header />
    <main className="pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/request-quote-hide-price-guide#proposal-template"><ArrowLeft className="w-4 h-4 mr-2" />Back to Request Quote, Hide Price</Link>
          </Button>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4"><FileText className="w-4 h-4 mr-2" />Proposal Template</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Configuring proposal template</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Set up and customize your proposal template to match your brand and business needs. Add a logo, adjust styles, and edit content for a polished, professional presentation.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert><AlertTriangle className="h-4 w-4" /><AlertDescription><strong>Prerequisites:</strong> Install BMT Request Quote, Hide Price and have administrative access to your Shopify store. Have your logo ready to upload to Shopify Files.</AlertDescription></Alert>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Tutorial</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Watch the proposal template being configured, then use the steps below to customize your own.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
              <video controls className="w-full h-full object-cover" poster="/placeholder.svg">
                <source src="https://storage.googleapis.com/bmt-videos/Configuring%20Proposal%20Templates%20Tutorial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
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
          <Alert className="mt-8"><CheckCircle className="h-4 w-4" /><AlertDescription>Customizing your proposal template ensures every quote you send looks professional and on-brand. Adjust the details to meet your requirements and make a great impression on your customers.</AlertDescription></Alert>
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

export default RequestQuoteProposalTemplateGuide;