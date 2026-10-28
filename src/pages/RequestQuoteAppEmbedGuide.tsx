import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Power } from "lucide-react";
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

const path = "/request-quote-app-embed-guide";
const description = "Switch on the BMT Request Quote, Hide Price app embed in your Shopify theme, save your changes and confirm the green storefront status in the app dashboard.";
const steps = [
  { step: 1, title: "Check the storefront status", description: "On the app’s home page, check the storefront status to see whether the app embed is currently switched off." },
  { step: 2, title: "Select Enable app embed", description: "On the storefront status card, select Enable app embed. (Add to theme, on the same card, adds the separate Request a quote theme block, not the app embed.)" },
  { step: 3, title: "Check the app embed in the theme editor", description: "Shopify opens your theme editor with the BMT Request Quote, Hide Price app embed already switched on under App embeds. If you opened the theme editor yourself, switch the toggle on there." },
  { step: 4, title: "Save your changes", description: "Click Save in the theme editor. The app embed is not active until you save." },
  { step: 5, title: "Return to the app dashboard", description: "Return to your app’s dashboard to verify the storefront status." },
  { step: 6, title: "Confirm the green status indicator", description: "Check that the status indicator shows green and confirms that the app embed is switched on. The app’s features are now active in your theme." },
];
const faqs = [
  { question: "Why do I need to switch on the app embed?", answer: "Enabling the app embed integrates and activates the app’s functionalities directly within your store’s theme." },
  { question: "How do I confirm the app embed is active?", answer: "After clicking Save in the theme editor, return to the app dashboard. The storefront status indicator should show green and confirm that the app embed is switched on." },
];

const RequestQuoteAppEmbedGuide = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Switch on the App Embed — BMT Request Quote" description={description} canonicalPath={path}
      jsonLd={buildGuideJsonLd({ title: "Switch on the app embed", description, path, steps, faqs })} />
    <Header />
    <main className="pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/request-quote-hide-price-guide#app-embed"><ArrowLeft className="w-4 h-4 mr-2" />Back to Request Quote, Hide Price</Link>
          </Button>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4"><Power className="w-4 h-4 mr-2" />App Embed</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Switch on the app embed</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Activate BMT Request Quote, Hide Price within your store’s theme and confirm it is active from your dashboard.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert><AlertTriangle className="h-4 w-4" /><AlertDescription><strong>Prerequisites:</strong> Install BMT Request Quote, Hide Price and have access to your Shopify theme editor.</AlertDescription></Alert>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Tutorial</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Watch the app embed being switched on, then use the steps below to do the same in your own theme.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
              <video controls className="w-full h-full object-cover" poster="/placeholder.svg">
                <source src="https://storage.googleapis.com/bmt-videos/Enabling%20App%20Embed%20Feature.mp4" type="video/mp4" />
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
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center"><Power className="w-6 h-6 text-primary" /></div>
                    <div className="min-w-0"><Badge variant="outline" className="mb-2">Step {step.step}</Badge><CardTitle className="text-xl">{step.title}</CardTitle></div>
                  </div>
                </CardHeader>
                <CardContent><CardDescription className="text-base leading-relaxed">{step.description}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
          <Alert className="mt-8"><CheckCircle className="h-4 w-4" /><AlertDescription>With the app embed enabled, your app’s features are active in your theme.</AlertDescription></Alert>
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

export default RequestQuoteAppEmbedGuide;