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
  Users,
  ListOrdered,
  ShoppingCart,
  Layers
} from "lucide-react";

const VolumeDiscountGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Go to the Pricing Section",
      description: "Navigate to the Pricing section in the BMT B2B Wholesale Pricing app.",
      details: [
        "Open your Shopify admin dashboard",
        "Go to the BMT B2B Wholesale Pricing app",
        "Click on the Pricing section"
      ],
      icon: DollarSign
    },
    {
      step: 2,
      title: "Click Create Pricing Rule",
      description: "Click the 'Create Pricing Rule' button to start a new rule.",
      details: [
        "Click the 'Create Pricing Rule' button",
        "The rule creation form will open"
      ],
      icon: Settings
    },
    {
      step: 3,
      title: "Select Create New Rule",
      description: "Select the option to create a new rule.",
      details: [
        "Choose 'Create new rule' from the options",
        "The Setup B2B Pricing form will appear"
      ],
      icon: Settings
    },
    {
      step: 4,
      title: "Enter Rule Name",
      description: "In the Setup B2B Pricing form, enter a rule name (for example: 'Sample volume pricing').",
      details: [
        "Enter a descriptive name for the volume pricing rule",
        "Example: 'Sample volume pricing'"
      ],
      icon: Settings
    },
    {
      step: 5,
      title: "Set the Priority",
      description: "Set the Priority (enter 0 to keep it highest).",
      details: [
        "Enter priority number (0 = highest priority)",
        "Higher priority rules take precedence"
      ],
      icon: ListOrdered
    },
    {
      step: 6,
      title: "Add a Message",
      description: "Add a message, like 'volumes discount.' This message appears in the cart at checkout.",
      details: [
        "Enter a checkout message (e.g., 'volumes discount')",
        "This message appears in the cart and at checkout"
      ],
      icon: Settings
    },
    {
      step: 7,
      title: "Choose Customer Targeting",
      description: "Choose who should see the discount. For this example, select All customers.",
      details: [
        "Select customer targeting: All, logged-in, non-logged-in, or tagged",
        "For broad offers, select 'All customers'"
      ],
      icon: Users
    },
    {
      step: 8,
      title: "Set Applicable Markets",
      description: "Set the applicable markets. Decide if it's for all markets or specific ones.",
      details: [
        "Choose 'All markets' for global application",
        "Or select specific markets for regional pricing"
      ],
      icon: Globe
    },
    {
      step: 9,
      title: "Navigate to Volume Discount Section",
      description: "Scroll to the Volume Discount section.",
      details: [
        "Scroll down in the pricing rule form",
        "Find the 'Volume Discount' section"
      ],
      icon: Layers
    },
    {
      step: 10,
      title: "Enable Volume Discount",
      description: "Click Enable Volume Discount to activate volume pricing.",
      details: [
        "Click 'Enable Volume Discount' toggle",
        "Volume discount configuration options will appear"
      ],
      icon: ToggleRight
    },
    {
      step: 11,
      title: "Define Quantity Ranges and Discounts",
      description: "Define your quantity ranges and corresponding discounts. For example: 10-19 units: 10%, 20-29 units: 20%, 30-1000 units: 30%.",
      details: [
        "Set first tier: 10-19 units at 10% discount",
        "Set second tier: 20-29 units at 20% discount",
        "Set third tier: 30-1000 units at 30% discount",
        "Add more tiers as needed"
      ],
      icon: Percent
    },
    {
      step: 12,
      title: "Choose Discount Method",
      description: "Choose the Discount Method. For this setup, select Product Level.",
      details: [
        "Select 'Product Level' for per-product volume discounts",
        "Or choose 'Cart Level' for order-wide volume discounts"
      ],
      icon: Settings
    },
    {
      step: 13,
      title: "Show Discount Table on Product Pages",
      description: "Decide whether to show the discount table on product pages. Leave this enabled.",
      details: [
        "Keep the discount table enabled for transparency",
        "Customers can see volume tiers directly on product pages",
        "This encourages larger purchases"
      ],
      icon: Eye
    },
    {
      step: 14,
      title: "Set Product Scope",
      description: "Set which products the rule applies to — All products, specific items, or collections.",
      details: [
        "Choose: All products, specific products, or collections",
        "Select specific products or collections if needed"
      ],
      icon: ShoppingCart
    },
    {
      step: 15,
      title: "Set Active Dates",
      description: "Set the Active Dates. Define when the rule begins.",
      details: [
        "Configure the start date for the rule",
        "Optionally set an end date"
      ],
      icon: Settings
    },
    {
      step: 16,
      title: "Save the Rule",
      description: "Click Save to create the volume pricing rule.",
      details: [
        "Review all settings before saving",
        "Click 'Save' to create the rule",
        "The rule should now appear as Active"
      ],
      icon: Save
    },
    {
      step: 17,
      title: "Verify Rule is Active",
      description: "Check your new rule — it should now appear as Active in the rules list.",
      details: [
        "Verify the rule status shows 'Active'",
        "Toggle ON if it's not active yet"
      ],
      icon: CheckCircle
    },
    {
      step: 18,
      title: "Ensure App Embed is On",
      description: "To ensure the pricing table appears on product pages, make sure your app embed is switched on. Navigate via the Pricing section or Themes > App Embeds.",
      details: [
        "Check that the App Embed is enabled",
        "If off, go to Themes > App Embeds and toggle it on",
        "Or use the 'Go to App Embeds' link in the Pricing section"
      ],
      icon: Settings
    }
  ];

  const previewSteps = [
    {
      step: 1,
      description: "Visit a product page, refresh, and look for the volume pricing table above the Add to Cart button.",
    },
    {
      step: 2,
      description: "The table should update prices based on the quantity selected (for example, 10 units triggers the 10% discount).",
    },
    {
      step: 3,
      description: "Add items to the cart to see volume discounts reflected in the cart summary.",
    },
    {
      step: 4,
      description: "If another product does not meet the minimum quantity, the discount won't apply to it.",
    },
  ];

  const troubleshooting = [
    {
      issue: "Volume discount not applying",
      solutions: [
        "Verify the volume discount rule is set to 'Active'",
        "Check that the customer is in an eligible customer group",
        "Ensure the cart quantity meets the minimum tier threshold",
        "Confirm the products in cart are included in the rule"
      ]
    },
    {
      issue: "Volume pricing table not showing on product pages",
      solutions: [
        "Ensure 'Show discount table' is enabled in the rule",
        "Verify the App Embed is switched on in Themes > App Embeds",
        "Clear browser cache and refresh the product page",
        "Check that the product is included in the rule's product scope"
      ]
    },
    {
      issue: "Wrong discount amount showing",
      solutions: [
        "Review your tier configuration for correct quantities and percentages",
        "Check if multiple volume discounts are conflicting",
        "Verify the discount method (Product Level vs Cart Level)",
        "Clear browser cache and refresh the page"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I create multiple volume pricing tiers?",
      answer: "Yes! You can create as many quantity tiers as needed. Each tier defines a quantity range and its corresponding discount percentage or fixed amount."
    },
    {
      question: "What's the difference between Product Level and Cart Level discounts?",
      answer: "Product Level applies discounts based on individual product quantities. Cart Level applies discounts based on the total quantity of all products in the cart."
    },
    {
      question: "Will the volume pricing table show on all product pages?",
      answer: "The table shows only on product pages that are included in the rule's product scope. You can configure this to be all products, specific products, or specific collections."
    },
    {
      question: "Can I combine volume pricing with wholesale pricing?",
      answer: "Yes, volume pricing can work alongside wholesale pricing rules. Use priorities to control which discounts take precedence when multiple rules apply."
    },
    {
      question: "How do customers see the volume pricing tiers?",
      answer: "When enabled, a volume pricing table appears on product pages showing the quantity ranges and corresponding discounts. As customers change the quantity, the price updates dynamically."
    },
    {
      question: "Can I set different volume tiers for different customer groups?",
      answer: "Yes! Create separate volume pricing rules with different customer targeting. Use customer tags to target specific wholesale groups with tailored volume tiers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Set Up Volume & Tiered Pricing on Shopify"
        description="Create volume discounts and quantity-break pricing on Shopify. Reward bulk buyers with tiered pricing using BMT B2B Wholesale Pricing app. Step-by-step setup guide."
        canonicalPath="/volume-discount-guide"
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
                Create <span className="font-semibold text-primary">Volume Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Volume pricing lets you offer discounts to customers who buy larger quantities, boosting sales and encouraging bigger purchases
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
                <strong>Prerequisites:</strong> Ensure you have BMT B2B Wholesale Pricing app installed and wholesale pricing feature enabled in your store.
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
                Watch this step-by-step video guide to create volume pricing
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/volume_pricing.mp4" type="video/mp4" />
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
                Follow these steps to configure volume pricing rules
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
                See Volume Pricing in Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here's what customers see when volume pricing is active
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
                Quick fixes for common volume pricing problems
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
                Common questions about volume pricing configuration
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
              Our support team is available 24/7 to help you with volume pricing setup
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

export default VolumeDiscountGuide;
