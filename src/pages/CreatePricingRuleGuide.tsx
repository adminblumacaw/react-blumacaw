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
  Settings, 
  Users, 
  DollarSign,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Percent,
  Eye,
  Save,
  ToggleRight,
  Globe,
  ShoppingCart,
  Tag
} from "lucide-react";

const CreatePricingRuleGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Go to the Pricing Section",
      description: "Navigate to the Pricing section, just below BMT B2B Wholesale Pricing.",
      details: [
        "Open your Shopify admin dashboard",
        "Go to the BMT B2B Wholesale Pricing app",
        "Click on the Pricing section in the app menu"
      ],
      icon: DollarSign
    },
    {
      step: 2,
      title: "Create B2B Pricing Rule",
      description: "Click the 'Create B2B Pricing Rule' CTA to start a new rule.",
      details: [
        "Click the 'Create B2B Pricing Rule' button",
        "The pricing rule configuration form will open"
      ],
      icon: Settings
    },
    {
      step: 3,
      title: "Fill Out General Settings",
      description: "In the configuration page, fill out the General Settings. Add a name (e.g., 'Sample'), set the priority, and type a message (like 'Wholesale discount') that will appear at checkout.",
      details: [
        "Enter a descriptive name for the pricing rule",
        "Set the priority to control rule precedence",
        "Add a message that appears at checkout (e.g., 'Wholesale discount')"
      ],
      icon: Settings
    },
    {
      step: 4,
      title: "Choose Customer Targeting",
      description: "Choose which customers see this pricing. Options include all customers, only logged-in customers, non-logged-in customers, or customers with a specific tag.",
      details: [
        "Select customer targeting: All, logged-in, non-logged-in, or tagged",
        "For broad B2B offers, select 'All Customers'",
        "Use customer tags for targeted wholesale groups"
      ],
      icon: Users
    },
    {
      step: 5,
      title: "Select Markets",
      description: "Decide whether this rule should appear in all markets or only specific markets.",
      details: [
        "Choose 'All markets' for global application",
        "Or select specific markets for regional pricing"
      ],
      icon: Globe
    },
    {
      step: 6,
      title: "Toggle on Wholesale Pricing",
      description: "Enable the Wholesale Pricing toggle to activate the discount configuration.",
      details: [
        "Find the Wholesale Pricing toggle",
        "Switch it ON to enable wholesale pricing for this rule"
      ],
      icon: ToggleRight
    },
    {
      step: 7,
      title: "Set Up Price Rule",
      description: "For B2B Pricing Setup, select 'Set up Price Rule'.",
      details: [
        "Click 'Set up Price Rule' in the B2B Pricing Setup section",
        "This opens the discount configuration options"
      ],
      icon: DollarSign
    },
    {
      step: 8,
      title: "Set Discount Value",
      description: "Set your discount value — select percentage or fixed amount. For example, enter 20% for a percentage-based discount.",
      details: [
        "Choose discount type: Percentage or Fixed Amount",
        "Enter the discount value (e.g., 20%)",
        "Ensure the value aligns with your profit margins"
      ],
      icon: Percent
    },
    {
      step: 9,
      title: "Choose Products",
      description: "Choose the products this rule applies to. It can cover all products, specific products, or certain collections.",
      details: [
        "Select scope: all products, specific products, or collections",
        "Browse and select individual products if needed",
        "Choose collections for bulk product inclusion"
      ],
      icon: ShoppingCart
    },
    {
      step: 10,
      title: "Set Price Display",
      description: "Set how the price displays: just the new price or both the new and original price. We recommend showing both for transparency.",
      details: [
        "Choose to display only the discounted price",
        "Or show both original and discounted prices (recommended)",
        "Showing both prices increases transparency and perceived value"
      ],
      icon: Eye
    },
    {
      step: 11,
      title: "Set Active Dates",
      description: "Set the active dates for this pricing rule so customers know when to expect the discount.",
      details: [
        "Configure the start date for the rule",
        "Optionally set an end date",
        "Leave end date empty for indefinite pricing"
      ],
      icon: Settings
    },
    {
      step: 12,
      title: "Save the Rule",
      description: "Click Save to save your new B2B pricing rule.",
      details: [
        "Review all configured settings",
        "Click 'Save' to create the pricing rule",
        "Wait for confirmation"
      ],
      icon: Save
    },
    {
      step: 13,
      title: "Activate the Rule",
      description: "Use the toggle button to switch the rule on or off. The status updates to Active when turned on. You can also Edit, Duplicate, or Delete the rule.",
      details: [
        "Toggle the rule ON to activate it",
        "Status changes to 'Active' when enabled",
        "Use Edit, Duplicate, or Delete for rule management"
      ],
      icon: ToggleRight
    },
    {
      step: 14,
      title: "Ensure App Embed is On",
      description: "Make sure the App Embed is always on. If it's not, go to App Embeds under Themes and switch it on so your pricing displays correctly.",
      details: [
        "Check that the App Embed is enabled",
        "If off, go to Themes > App Embeds and toggle it on",
        "This ensures wholesale pricing appears on your storefront"
      ],
      icon: Settings
    }
  ];

  const previewSteps = [
    {
      step: 1,
      description: "Open your store's home page. You'll see products listed with the wholesale discount applied.",
    },
    {
      step: 2,
      description: "Click into a product's PDP (Product Detail Page) to confirm the discounted price appears.",
    },
    {
      step: 3,
      description: "Add a product to your cart.",
    },
    {
      step: 4,
      description: "Go to your cart to ensure the wholesale discount appears, along with your custom message if set.",
    },
  ];

  const troubleshooting = [
    {
      issue: "Rule not appearing in store",
      solutions: [
        "Ensure the rule is activated (not in draft status)",
        "Check that the app embed is enabled in theme settings",
        "Verify customer meets the targeting criteria",
        "Clear browser cache and reload the page"
      ]
    },
    {
      issue: "Multiple rules conflicting",
      solutions: [
        "Review priority order settings for all active rules",
        "Check customer and product targeting overlaps",
        "Ensure rule logic doesn't create conflicts",
        "Test with a single rule first, then add others gradually"
      ]
    },
    {
      issue: "Discount not calculating correctly",
      solutions: [
        "Verify discount type (percentage vs fixed amount)",
        "Check minimum/maximum order requirements",
        "Ensure product pricing is set up correctly",
        "Test with different product combinations"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I create multiple wholesale pricing rules?",
      answer: "Yes, you can create as many pricing rules as needed. Use priorities to control which rule takes precedence when multiple rules could apply to the same customer or product."
    },
    {
      question: "What's the difference between percentage and fixed amount discounts?",
      answer: "Percentage discounts apply a proportional reduction (e.g., 20% off). Fixed amount discounts subtract a specific dollar value (e.g., $5 off). Choose based on your pricing strategy."
    },
    {
      question: "Can I schedule pricing rules for specific dates?",
      answer: "Yes! Set the active dates when configuring the rule. You can define a start date and optionally an end date. Leave the end date empty for ongoing pricing."
    },
    {
      question: "Will customers see the original price alongside the discounted price?",
      answer: "You choose how prices display. We recommend showing both the original and discounted prices for transparency, which helps customers see the value of their wholesale discount."
    },
    {
      question: "How do I apply wholesale pricing to specific collections only?",
      answer: "In the product selection step, choose 'Specific collections' and select the collections you want the rule to apply to. This allows targeted pricing for specific product categories."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Create Wholesale Pricing Rules on Shopify — Guide"
        description="Learn how to create wholesale pricing rules on Shopify with BMT B2B Wholesale Pricing. Set percentage discounts, fixed amounts, or custom prices for tagged customer groups."
        canonicalPath="/create-pricing-rule-guide"
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
                <DollarSign className="w-4 h-4 mr-2" />
                Pricing Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Create <span className="font-semibold text-primary">Wholesale Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Setting up wholesale pricing lets you offer special discounts to certain customers, boosting your B2B business easily
              </p>
              <Button size="lg" className="gradient-primary" asChild>
                <a href="#setup-guide">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Creating
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
                <strong>Prerequisites:</strong> Ensure you have BMT B2B Wholesale Pricing app installed, wholesale pricing feature enabled, and administrative access to your Shopify store.
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
                Watch this step-by-step video guide to create wholesale pricing
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/wholesale_pricing_setup.mp4" type="video/mp4" />
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
                Follow these steps to create and activate a wholesale pricing rule
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

        {/* Preview on Store */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Previewing Wholesale Pricing on Your Store
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Once your wholesale pricing rule is active, here's how it looks on your live store
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
                Common Issues & Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick fixes for common wholesale pricing setup problems
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
                Common questions about creating wholesale pricing rules
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
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with wholesale pricing setup
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary" asChild>
                <a href="mailto:support@blumacawtech.com">
                  Contact Support
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/documentation">
                  View Full Documentation
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

export default CreatePricingRuleGuide;
