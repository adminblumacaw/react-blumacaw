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
  Truck,
  Settings,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Search,
  PlusCircle,
  Save,
  ToggleRight,
  Eye,
  Users,
  ShieldCheck,
  ListOrdered
} from "lucide-react";

const CustomShippingRulesGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Click Settings in Shopify Admin",
      description: "Open your Shopify admin dashboard and navigate to Settings.",
      details: [
        "Log in to your Shopify admin",
        "Click 'Settings' in the lower-left corner of the dashboard"
      ],
      icon: Settings
    },
    {
      step: 2,
      title: "Select Shipping and Delivery",
      description: "Navigate to the Shipping and delivery section to view all shipping configurations.",
      details: [
        "Click 'Shipping and delivery' from the Settings menu",
        "This page shows all your shipping profiles and delivery customizations"
      ],
      icon: Truck
    },
    {
      step: 3,
      title: "Review Your Shipping Routes",
      description: "Under Shipping and delivery, locate and review your shipping routes including general, express, standard, and wholesale options.",
      details: [
        "Review all existing shipping profiles",
        "Note which routes are configured for general, express, standard, and wholesale shipping",
        "Identify which routes need to be restricted to specific customer groups"
      ],
      icon: Search
    },
    {
      step: 4,
      title: "Ensure BMT Delivery Customization Is Active",
      description: "Under Delivery customization, make sure the B2B wholesale pricing rule is active. If not, add it.",
      details: [
        "Scroll to 'Delivery customizations' on the Shipping and delivery page",
        "Check that 'B2B wholesale pricing' is listed and active",
        "If it's not active, click 'Add delivery customization' and choose 'B2B wholesale pricing'"
      ],
      icon: ShieldCheck
    },
    {
      step: 5,
      title: "Navigate to Shipping Rules in the App",
      description: "Return to the BMT B2B Wholesale Pricing app and open the Shipping rules section.",
      details: [
        "Open the BMT B2B Wholesale Pricing app",
        "Click on 'Shipping rules' in the app navigation"
      ],
      icon: ListOrdered
    },
    {
      step: 6,
      title: "Add a New Shipping Rule",
      description: "Click Add shipping rule to configure a new rule for wholesale customers.",
      details: [
        "Click 'Add shipping rule' to start creating a new rule",
        "A form will appear for entering shipping rule details"
      ],
      icon: PlusCircle
    },
    {
      step: 7,
      title: "Configure Your Shipping Rule",
      description: "Name your rule, set the priority, and apply it to the right customer group using tags.",
      details: [
        "Enter a descriptive name (e.g., 'Wholesale Shipping Rule')",
        "Set the priority to 0 (or your preferred priority level)",
        "Apply the rule to customers with a specific tag, such as 'wholesale'"
      ],
      icon: Users
    },
    {
      step: 8,
      title: "Hide Non-Wholesale Shipping Methods",
      description: "Select which shipping methods to hide so wholesale customers only see wholesale shipping at checkout.",
      details: [
        "Choose to hide all shipping methods except wholesale shipping",
        "This ensures tagged wholesale customers see only the relevant shipping option"
      ],
      icon: Eye
    },
    {
      step: 9,
      title: "Save Your Shipping Rule",
      description: "Click Create shipment rule to save. Wholesale customers will now see only the wholesale shipping option at checkout.",
      details: [
        "Click 'Create shipment rule' to save the configuration",
        "The rule takes effect immediately for matching customers"
      ],
      icon: Save
    },
    {
      step: 10,
      title: "Create a Rule for Retail Customers",
      description: "Repeat the process to create a rule that hides wholesale shipping from retail customers.",
      details: [
        "Click 'Add shipping rule' again",
        "Use a different priority (such as 1)",
        "Apply the rule to all customers",
        "Hide the wholesale shipping method",
        "Click 'Create shipment rule' to save"
      ],
      icon: ToggleRight
    }
  ];

  const previewSteps = [
    {
      step: 1,
      description: "Test your store as a wholesale customer — you should see only the wholesale shipping option at checkout."
    },
    {
      step: 2,
      description: "Test as a retail customer — the wholesale shipping method should be hidden if you configured the retail rule."
    },
    {
      step: 3,
      description: "Verify each customer group sees the correct shipping options based on your rules."
    }
  ];

  const troubleshooting = [
    {
      issue: "Shipping rule not applying at checkout",
      solutions: [
        "Verify the BMT delivery customization is active in Settings → Shipping and delivery → Delivery customizations",
        "Ensure the customer is tagged correctly to match your shipping rule",
        "Check that the shipping rule priority is set correctly",
        "Clear browser cache and refresh the checkout page"
      ]
    },
    {
      issue: "Wrong shipping methods appearing for customer group",
      solutions: [
        "Review the customer tags assigned to the shipping rule",
        "Check rule priority — lower numbers are applied first",
        "Verify the customer is logged in if the rule requires authentication",
        "Ensure no conflicting rules exist for the same customer type"
      ]
    },
    {
      issue: "Wholesale shipping visible to retail customers",
      solutions: [
        "Create a separate rule for retail customers that hides the wholesale shipping method",
        "Ensure the retail rule has a higher priority number than the wholesale rule",
        "Verify customer tags are correctly assigned in Shopify admin",
        "Test with different customer accounts to confirm visibility"
      ]
    }
  ];

  const faqs = [
    {
      question: "What types of shipping rules can I create?",
      answer: "You can create rules that show or hide specific shipping methods based on customer tags. This lets you offer wholesale-only shipping rates, free shipping for VIP customers, or restrict certain delivery options to specific customer groups."
    },
    {
      question: "Can I show different shipping options to different customer groups?",
      answer: "Yes! Use BMT's Custom Shipping Rules to control visibility. Create rules targeting different customer tags so wholesale customers see wholesale shipping rates while retail customers see standard options."
    },
    {
      question: "What happens when multiple shipping rules apply to the same customer?",
      answer: "The priority setting determines which rule takes precedence. Rules with lower priority numbers (e.g., 0) are applied first, and higher priority numbers override them."
    },
    {
      question: "Do I need the Advanced Plan for shipping rules?",
      answer: "Yes, Custom Shipping Rules are available on the Advanced Plan ($29.99/month or $299.90/year). This plan also includes Custom Payment Rules and all Standard plan features."
    },
    {
      question: "Can I combine shipping rules with payment rules?",
      answer: "Absolutely. You can use both shipping and payment rules together to give wholesale customers a fully customized checkout experience — with specific shipping methods and payment terms tailored to their group."
    },
    {
      question: "How do I set up wholesale shipping rates in Shopify?",
      answer: "First, create a shipping profile or rate in Shopify's Shipping and delivery settings specifically for wholesale. Then use BMT's shipping rules to ensure only wholesale-tagged customers see that rate at checkout."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Set Up Custom Shipping Rules for B2B Wholesale Customers in Shopify",
    "description": "Step-by-step guide to configuring custom shipping rules for wholesale and retail customers using BMT B2B Wholesale Pricing on Shopify.",
    "step": steps.map((s) => ({
      "@type": "HowToStep",
      "position": s.step,
      "name": s.title,
      "text": s.description
    })),
    "tool": {
      "@type": "SoftwareApplication",
      "name": "BMT B2B Wholesale Pricing",
      "url": "https://apps.shopify.com/blumacawtech"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Set Up Custom Shipping Rules in Shopify — BMT B2B Wholesale Pricing"
        description="Step-by-step guide to setting up custom shipping rules for B2B and wholesale customers in Shopify. Control which shipping methods each customer group sees at checkout with BMT B2B Wholesale Pricing."
        canonicalPath="/custom-shipping-rules-guide"
        jsonLd={jsonLd}
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
                <Truck className="w-4 h-4 mr-2" />
                Custom Shipping Rules Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Set Up <span className="font-semibold text-primary">Custom Shipping Rules</span> in Shopify
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Managing different shipping options for your wholesale and retail customers helps deliver the right experience for each group. Learn how to set up and customize shipping rules for B2B and wholesale customers in your Shopify store.
              </p>
              <Button size="lg" className="gradient-primary" asChild>
                <a href="#setup-guide">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Configuration
                </a>
              </Button>
            </div>
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
                Watch this step-by-step video guide to set up custom shipping rules
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/Configuring%20Shipping%20Rules%20for%20B2B%20and%20Wholesale%20Customers.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Alert className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Prerequisites:</strong> You need the <strong>Advanced Plan</strong> to access Custom Shipping Rules. Make sure you have admin access to your Shopify store and have set up your shipping profiles.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Steps */}
        <section id="setup-guide" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Configure Shipping Rules Step by Step
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to set up custom shipping rules for your wholesale and retail customers
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

        {/* See It In Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Verify your shipping rules are working correctly for each customer group
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {previewSteps.map((item, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Eye className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">Step {item.step}</Badge>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                Resolve common shipping rule configuration issues
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
                Common questions about custom shipping rules
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

        {/* JSON-LD for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Support CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Shipping Rules?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you configure and optimize your shipping rules
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

export default CustomShippingRulesGuide;
