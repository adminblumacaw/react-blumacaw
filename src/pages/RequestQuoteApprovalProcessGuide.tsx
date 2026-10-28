import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, ClipboardCheck } from "lucide-react";
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

const path = "/request-quote-approval-process-guide";
const description = "Learn how the BMT Request Quote, Hide Price quote approval workflow operates, from a buyer submitting a quote request to a merchant approving, adjusting, or declining it, and finally creating a draft order.";
const steps = [
  { step: 1, title: "Open the Quote Approval page", description: "Go to the Quote Approval page from the main navigation." },
  { step: 2, title: "Or open it from the home page", description: "On the app’s home page, select the Quote approval card in the Quotes section." },
  { step: 3, title: "Explore the two main tabs", description: "The Quote Approval page has two main tabs: Manage and Automation." },
  { step: 4, title: "Manage automatic sending and buyer actions", description: "Automation lets you control if quotes send automatically, view proposal settings, and manage buyer actions. You can also handle abandoned quote requests here." },
  { step: 5, title: "Follow the quote life cycle in Manage", description: "Switch to the Manage tab to follow the quote life cycle. Stages include: Quote Request, Quote Proposal, Quote Confirmed, and Quote Rejected." },
];
const buyerRequestSteps = [
  { step: 1, title: "Shop for products and enter your details", description: "As a buyer, shop for products (like a T-shirt) and enter your details to request a quote." },
  { step: 2, title: "Submit the quote request", description: "Submit your quote request to the merchant." },
  { step: 3, title: "Receive a confirmation message", description: "A confirmation message appears stating that your quote request is submitted." },
  { step: 4, title: "Receive a confirmation email", description: "If you switch on the Quote confirmation email (it is off by default), buyers also get a confirmation email for the submitted quote." },
];
const merchantSteps = [
  { step: 1, title: "Refresh the Quote Approval page", description: "As a merchant, refresh the Quote Approval page to view new quote requests." },
  { step: 2, title: "Check the request status", description: "Check the request status—here, it's marked as \"priced but not sent.\"" },
  { step: 3, title: "Respond or decline", description: "Merchants can Respond or Decline. You can also View Quote, Download PDF, or Print." },
  { step: 4, title: "View the quote", description: "Click View Quote to review details." },
  { step: 5, title: "Review the quote details", description: "Review buyer details, quote items, expiration date, payment method, PO number, discount, shipping options, and internal notes." },
  { step: 6, title: "Edit and save the quote", description: "Edit the quote as needed (such as changing the price), then click Save." },
  { step: 7, title: "Send the proposal back", description: "After saving changes, click Send quote to email the proposal to the buyer straight away. From the quote list you can instead click Respond on the request." },
  { step: 8, title: "Re-send if needed", description: "When you use Respond from the quote list, confirm with Send proposal. Once a proposal is sent, the button on the quote page changes to Re-send quote." },
  { step: 9, title: "Track the proposal status", description: "The status updates to Quote Proposal—now waiting for the buyer's response." },
];
const buyerApprovalSteps = [
  { step: 1, title: "Receive the proposal email", description: "The buyer receives an email stating the quote has been prepared and displays the updated price." },
  { step: 2, title: "Choose an action", description: "The buyer can Reject or Approve the quote, or Download PDF." },
  { step: 3, title: "Accept the quote", description: "To accept the quote, click Approve, then choose Accept Quote. Optionally, the buyer can request changes." },
  { step: 4, title: "See the quote confirmed", description: "Once accepted by the buyer, the merchant sees the quote status update to Quote Confirmed upon refreshing the approval page." },
  { step: 5, title: "Convert to a draft order", description: "The merchant can now convert the confirmed quote into a draft order by clicking Convert to draft order." },
  { step: 6, title: "Draft order created", description: "A draft order is created in the system, completing the quote approval process." },
];
const faqs = [
  { question: "What are the stages of the quote life cycle?", answer: "The Manage tab follows the quote through four stages: Quote Request, Quote Proposal, Quote Confirmed, and Quote Rejected." },
  { question: "What does the Automation tab control?", answer: "Automation controls whether quotes send automatically, proposal settings, and buyer actions. You can also handle abandoned quote requests there." },
  { question: "How does a buyer accept a quote?", answer: "The buyer receives an email showing the updated price, clicks Approve, then chooses Accept Quote. They can also Reject the quote, request changes, or download the PDF." },
  { question: "How does a confirmed quote become an order?", answer: "Once the buyer accepts and the status shows Quote Confirmed, the merchant clicks Convert to draft order and a draft order is created in the system." },
];

const StepCard = ({ icon, step }: { icon: React.ReactNode; step: { step: number; title: string; description: string } }) => (
  <Card id={`step-${step.step}`} className="shadow-card scroll-mt-24">
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">{icon}</div>
        <div className="min-w-0"><Badge variant="outline" className="mb-2">Step {step.step}</Badge><CardTitle className="text-xl">{step.title}</CardTitle></div>
      </div>
    </CardHeader>
    <CardContent><CardDescription className="text-base leading-relaxed">{step.description}</CardDescription></CardContent>
  </Card>
);

const RequestQuoteApprovalProcessGuide = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Configure Quote Approval — BMT Request Quote" description={description} canonicalPath={path}
      jsonLd={buildGuideJsonLd({ title: "Configuring quote approval process", description, path, steps, faqs })} />
    <Header />
    <main className="pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/request-quote-hide-price-guide#quote-approval"><ArrowLeft className="w-4 h-4 mr-2" />Back to Request Quote, Hide Price</Link>
          </Button>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4"><ClipboardCheck className="w-4 h-4 mr-2" />Quote Approval Process</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Configuring quote approval process</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Learn how the quote approval workflow operates, from a buyer submitting a quote request to a merchant approving, adjusting, or declining it, and finally creating a draft order. This simple, step-by-step guide walks you through each role and key action in the process.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert><AlertTriangle className="h-4 w-4" /><AlertDescription><strong>Prerequisites:</strong> Install BMT Request Quote, Hide Price, enable its app embed, and have administrative access to your Shopify store.</AlertDescription></Alert>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Tutorial</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Watch the quote approval process overview, then use the steps below to follow each stage of the workflow.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
              <video controls className="w-full h-full object-cover" poster="/placeholder.svg">
                <source src="https://storage.googleapis.com/bmt-videos/Quote%20Approval%20Process%20Overview.mp4" type="video/mp4" />
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
            {steps.map((step) => (<StepCard key={step.step} icon={<ClipboardCheck className="w-6 h-6 text-primary" />} step={step} />))}
          </div>
          <Alert className="mt-8"><CheckCircle className="h-4 w-4" /><AlertDescription>The quote approval workflow helps streamline negotiations, giving both buyers and merchants clear communication and action steps—resulting in efficient, trackable sales conversions.</AlertDescription></Alert>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Buyer: Submitting a Quote Request</h2>
          <div className="space-y-8">
            {buyerRequestSteps.map((step) => (<StepCard key={step.step} icon={<ClipboardCheck className="w-6 h-6 text-primary" />} step={step} />))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Merchant: Reviewing and Responding</h2>
          <div className="space-y-8">
            {merchantSteps.map((step) => (<StepCard key={step.step} icon={<ClipboardCheck className="w-6 h-6 text-primary" />} step={step} />))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Buyer: Approving the Quote</h2>
          <div className="space-y-8">
            {buyerApprovalSteps.map((step) => (<StepCard key={step.step} icon={<ClipboardCheck className="w-6 h-6 text-primary" />} step={step} />))}
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

export default RequestQuoteApprovalProcessGuide;
