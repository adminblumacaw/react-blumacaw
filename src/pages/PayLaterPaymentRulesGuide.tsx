import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Wallet, Settings, Mail, Palette } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookOnboarding from "@/components/BookOnboarding";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardDescription, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buildGuideJsonLd } from "@/lib/guideSchema";

const path = "/pay-later-payment-rules-guide";
const description = "Configure payment rules for the Pay Later button in BMT B2B Wholesale Pricing: choose customers, products and markets, set net payment terms, emails, and the button's appearance.";

type Step = { step: number; title: string; description: string };

const steps: Step[] = [
  { step: 1, title: "Go to Payment Terms", description: "Navigate to Payment Terms under BMT B2B Wholesale Pricing." },
  { step: 2, title: "Open the payment terms page", description: "Click Payment Terms to open the payment terms page." },
  { step: 3, title: "Click Manage payment rules", description: "Click Manage payment rules to open the Payment rules page." },
  { step: 4, title: "View or set up payment rules", description: "On the Payment rules page, view your existing rules or click Add new payment rule. If you have no rules yet, click Add payment rule." },
  { step: 5, title: "Edit an existing rule", description: "To modify an existing rule, click Edit on the payment rule you want to update." },
  { step: 6, title: "Work through the three tabs", description: "Work through the three tabs: General Settings, Email Functionality, and Appearance. Save a new rule first; emails need a saved rule." },
];
const generalSteps: Step[] = [
  { step: 1, title: "Set the name and priority", description: "Under General Settings, set the Name and Priority for your payment rule." },
  { step: 2, title: "Choose the customers", description: "Choose which customers the rule applies to: all customers, logged-in customers, non-logged-in customers, customers with a specific tag, or individual customers. Optionally, exclude certain customers." },
  { step: 3, title: "Select the product scope", description: "Select product scope: apply to all products, specific products, or specific collections, then optionally exclude products or collections. Pay Later appears only when every item in the cart matches." },
  { step: 4, title: "Choose the markets", description: "Decide if the rule should apply to all markets or just specific ones." },
  { step: 5, title: "Set Net Payment Term Details", description: "Define when customers must pay: on receipt, after fulfillment, within a set number of days, on a specific day of the month, or after checkout." },
  { step: 6, title: "Add an order tag", description: "Add an Order Tag for tracking or reporting when this rule is applied." },
  { step: 7, title: "Set extra conditions", description: "Set extra conditions, such as a minimum order amount or quantity, or leave as no restrictions." },
  { step: 8, title: "Set the time frame", description: "Set the time frame for the rule — for example, indefinite or from a specific start date." },
];
const emailSteps: Step[] = [
  { step: 1, title: "Choose how emails are sent", description: "Configure how emails are sent to customers and merchants. Use the built-in sender or click Change Delivery to use a different email server." },
  { step: 2, title: "Review the preconfigured emails", description: "One email goes to the customer (\u201corder has been created\u201d), another to the merchant (for a new order). Activate or edit them as needed." },
  { step: 3, title: "Edit CC, Subject and Body", description: "While editing, set CC, Subject, and Body fields. Use the live preview to see changes immediately and add variables if required." },
];
const appearanceSteps: Step[] = [
  { step: 1, title: "Customize the Pay Later button", description: "Customize the Pay Later button\u2019s appearance in your store. Choose to hide the checkout button, update the label, and adjust colors or border radius." },
  { step: 2, title: "Save the rule", description: "Once everything looks good, click Create payment rule, or Save changes on an existing rule. Your Pay Later button is now configured." },
  { step: 3, title: "Preview your store", description: "Preview your store to see the Pay Later button in action. Add a product to your cart, and check for the new payment option on the cart page and in the open cart drawer." },
  { step: 4, title: "Customers order now and pay later", description: "Customers complete a draft-order checkout now and pay by the rule\u2019s due date, streamlining the purchasing process and giving flexible payment options." },
];
const allSteps = [...steps, ...generalSteps, ...emailSteps, ...appearanceSteps].map((s, i) => ({ ...s, step: i + 1 }));

const faqs = [
  { question: "When can customers be asked to pay?", answer: "In Net Payment Term Details you can set payment on receipt, after fulfillment, within a set number of days, on a specific day of the month, or after checkout." },
  { question: "Who can see the Pay Later button?", answer: "The rule applies to all customers, logged-in customers, non-logged-in customers, customers with a specific tag, or individual customers, and you can exclude certain customers. You can also limit it to specific products, collections and markets." },
  { question: "Which emails are sent when a Pay Later order is placed?", answer: "Two preconfigured emails, both off until you activate them: one tells the customer their order has been created, the other notifies the merchant of a new order. You can activate or edit each, including CC, Subject and Body, with a live preview." },
  { question: "Where does the Pay Later button appear?", answer: "After you save the rule, eligible customers see the new payment option on the cart page and in the open cart drawer. In Appearance you can also hide the checkout button, change the label, and adjust colors or border radius." },
];

const StepCard = ({ icon, step }: { icon: React.ReactNode; step: Step }) => (
  <Card className="shadow-card">
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">{icon}</div>
        <div className="min-w-0"><Badge variant="outline" className="mb-2">Step {step.step}</Badge><CardTitle className="text-xl">{step.title}</CardTitle></div>
      </div>
    </CardHeader>
    <CardContent><CardDescription className="text-base leading-relaxed">{step.description}</CardDescription></CardContent>
  </Card>
);

const StepSection = ({ title, intro, items, icon }: { title: string; intro?: string; items: Step[]; icon: React.ReactNode }) => (
  <section className="py-16 px-4 border-t border-border">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
      {intro && <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">{intro}</p>}
      <div className={`space-y-8 ${intro ? "" : "mt-8"}`}>
        {items.map((step) => (<StepCard key={step.step} icon={icon} step={step} />))}
      </div>
    </div>
  </section>
);

const PayLaterPaymentRulesGuide = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Configure Pay Later Payment Rules — BMT B2B Wholesale" description={description} canonicalPath={path}
      jsonLd={buildGuideJsonLd({ title: "How to Configure Payment Rules for Pay Later Button", description, path, steps: allSteps, faqs })} />
    <Header />
    <main className="pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/documentation"><ArrowLeft className="w-4 h-4 mr-2" />Back to Documentation</Link>
          </Button>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4"><Wallet className="w-4 h-4 mr-2" />Custom Payment Rules Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Configure Payment Rules for <span className="text-primary">Pay Later Button</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Setting up payment rules lets you control when and how your customers pay for their orders. Follow these steps to configure and customize payment rules for your store.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert><AlertTriangle className="h-4 w-4" /><AlertDescription><strong>Prerequisites:</strong> You need the <strong>Advanced Plan</strong> or higher to access Custom Payment Rules, the BMT app embed enabled in your theme, and admin access to your Shopify store.</AlertDescription></Alert>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Configuration Guide</h2>
          <div className="space-y-8">
            {steps.map((step) => (<StepCard key={step.step} icon={<Wallet className="w-6 h-6 text-primary" />} step={step} />))}
          </div>
        </div>
      </section>
      <StepSection title="General Settings" items={generalSteps} icon={<Settings className="w-6 h-6 text-primary" />} />
      <StepSection title="Email Functionality" items={emailSteps} icon={<Mail className="w-6 h-6 text-primary" />} />
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Appearance</h2>
          <div className="space-y-8">
            {appearanceSteps.map((step) => (<StepCard key={step.step} icon={<Palette className="w-6 h-6 text-primary" />} step={step} />))}
          </div>
          <Alert className="mt-8"><CheckCircle className="h-4 w-4" /><AlertDescription>Configuring payment rules ensures you meet your business requirements while offering convenience to your customers. Adjust the settings as needed, and keep your payment experience seamless and user-friendly.</AlertDescription></Alert>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (<AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>))}
          </Accordion>
          <Button variant="outline" asChild className="mt-8"><Link to="/custom-payment-terms-guide">Create custom payment terms<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
        </div>
      </section>
    </main>
    <BookOnboarding />
    <Footer />
  </div>
);

export default PayLaterPaymentRulesGuide;
