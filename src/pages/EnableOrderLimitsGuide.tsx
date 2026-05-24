import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {
  ShieldCheck,
  Settings,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Search,
  ToggleRight,
  Save
} from "lucide-react";

const EnableOrderLimitsGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Go to Settings",
      description: "Navigate to Settings from your Shopify store's main navigation.",
      details: [
        "Open your Shopify admin dashboard",
        "Click on 'Settings' in the bottom-left corner of the admin panel"
      ],
      icon: Settings
    },
    {
      step: 2,
      title: "Search for Checkout",
      description: "In Settings, search for Checkout to find checkout configuration options.",
      details: [
        "Use the search bar in Settings",
        "Type 'Checkout' to filter settings",
        "Click on the Checkout option when it appears"
      ],
      icon: Search
    },
    {
      step: 3,
      title: "Open Checkout Settings",
      description: "Click on Checkout to open the checkout settings page.",
      details: [
        "Click on the Checkout result to open its settings",
        "Wait for the checkout configuration page to load"
      ],
      icon: Settings
    },
    {
      step: 4,
      title: "Find Checkout Rules",
      description: "Scroll to the bottom of the Checkout page until you find Checkout Rules.",
      details: [
        "Scroll down through the checkout settings",
        "Look for the 'Checkout Rules' section near the bottom",
        "This section controls validation rules during checkout"
      ],
      icon: ShieldCheck
    },
    {
      step: 5,
      title: "Enable BMT Cart Validation",
      description: "Locate the BMT card validation option within Checkout Rules. Make sure this rule is present and activated. If it's missing or switched off, turn it on.",
      details: [
        "Look for 'BMT Cart validation' in the Checkout Rules list",
        "If present, ensure the toggle is switched ON",
        "If missing, proceed to the next step to add it"
      ],
      icon: ToggleRight
    },
    {
      step: 6,
      title: "Add Rule if Missing",
      description: "If the rule isn't listed, select Add Rule to create and activate the BMT card validation.",
      details: [
        "Click 'Add Rule' button in the Checkout Rules section",
        "Search for 'BMT Cart validation'",
        "Select it and activate the rule",
        "Click Save to confirm your changes"
      ],
      icon: Save
    }
  ];

  const troubleshooting = [
    {
      issue: "BMT Cart validation not appearing in Checkout Rules",
      solutions: [
        "Ensure the BMT B2B Wholesale Pricing app is properly installed",
        "Try refreshing the Checkout settings page",
        "Uninstall and reinstall the app if the rule doesn't appear",
        "Contact support for assistance"
      ]
    },
    {
      issue: "Order limits not enforced at checkout",
      solutions: [
        "Verify BMT Cart validation is toggled ON in Checkout Rules",
        "Check that order limit rules are configured and active in the app",
        "Ensure the checkout settings were saved after enabling the rule",
        "Test with a new browser session to avoid caching issues"
      ]
    }
  ];

  const faqs = [
    {
      question: "Do I need to enable checkout validation for order limits to work?",
      answer: "Yes! While order limit warnings will display on product and cart pages without checkout validation, customers won't be blocked from completing their purchase unless BMT Cart validation is enabled in Checkout Rules."
    },
    {
      question: "Will enabling BMT Cart validation affect other checkout functionality?",
      answer: "No, the BMT Cart validation only validates order limits configured in the BMT B2B Wholesale Pricing app. It doesn't interfere with other checkout processes or payment methods."
    },
    {
      question: "Can I temporarily disable checkout validation?",
      answer: "Yes, you can toggle the BMT Cart validation off in Checkout Rules at any time. This will stop enforcing order limits at checkout while still showing warnings on product pages."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Enable Order Limits on Your Shopify Store"
        description="Step-by-step guide to enable min/max order limits on your Shopify storefront. Control wholesale order quantities and values with BMT B2B Wholesale Pricing app."
        canonicalPath="/enable-order-limits-guide"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" asChild>
                <a href="/documentation" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Documentation
                </a>
              </Button>
            </div>

            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Order Limits
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enable <span className="font-semibold text-primary">Order Limits</span> on Store
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Configure checkout validation to enforce order limits and ensure customers comply with your purchase policies
              </p>
              <Button size="lg" className="gradient-primary" asChild>
                <a href="#setup-guide">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Setup
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Alert className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Prerequisites:</strong> Ensure you have BMT B2B Wholesale Pricing app installed, order limit rules configured, and administrative access to your Shopify store.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Video Tutorial */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Video Tutorial
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Watch this step-by-step video guide to enable order limits on your store
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/order_limits_on_store.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Guide */}
        <section id="setup-guide" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Step-by-Step Guide
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to enable order limit validation at checkout
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">Step {step.step}</Badge>
                          </div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {step.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Separator />

        {/* Troubleshooting */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Issues and Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Resolve common issues when enabling order limits on your store
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {troubleshooting.map((item, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      {item.issue}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium text-sm mb-3">Solutions:</p>
                      <ul className="space-y-2">
                        {item.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Common questions about enabling order limits
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Enabling Order Limits?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you configure checkout validation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary" asChild>
                <a href="mailto:support@blumacawtech.com">
                  Contact Support
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/documentation">
                  Back to Documentation
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EnableOrderLimitsGuide;
