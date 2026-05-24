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
  ToggleRight,
  ListOrdered,
  DollarSign,
  MessageSquare,
  Eye,
  Palette,
  Save,
  Users
} from "lucide-react";

const OrderLimitsGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Go to Order Limits",
      description: "Navigate to the Order Limits section inside the BMT Wholesale Pricing app.",
      details: [
        "Open your Shopify admin dashboard",
        "Navigate to the BMT B2B Wholesale Pricing app",
        "Click on 'Order Limits' in the app menu"
      ],
      icon: ShieldCheck
    },
    {
      step: 2,
      title: "Add New Order Limit",
      description: "Click 'Add new order limit' to start creating a new limit.",
      details: [
        "Click the 'Add new order limit' button",
        "The order limit configuration form will open"
      ],
      icon: ToggleRight
    },
    {
      step: 3,
      title: "Name Your Order Limit",
      description: "In General settings, give your order limit a name, such as 'sample'.",
      details: [
        "Enter a descriptive name for the order limit",
        "Use clear naming for easy identification"
      ],
      icon: Settings
    },
    {
      step: 4,
      title: "Set the Priority",
      description: "Set the priority (e.g., 0 means highest priority).",
      details: [
        "Enter a priority number (0 = highest priority)",
        "Higher priority rules override lower priority ones"
      ],
      icon: ListOrdered
    },
    {
      step: 5,
      title: "Choose Application Scope",
      description: "Choose how the rule will apply under order limit rule. For example, select 'order limit per product'.",
      details: [
        "Select 'Per Product' to apply limits per individual product",
        "Select 'Per Order' to apply limits to the entire order"
      ],
      icon: Settings
    },
    {
      step: 6,
      title: "Select Limit Type and Value",
      description: "Pick the type of limit — Minimum Order Quantity, Maximum Order Quantity, Minimum Order Amount, or Maximum Order Amount. Enter your desired value, such as minimum quantity 5.",
      details: [
        "Choose from: Minimum/Maximum Order Quantity or Amount",
        "Enter the numeric value for the limit",
        "Example: Minimum Order Quantity = 5"
      ],
      icon: DollarSign
    },
    {
      step: 7,
      title: "Set Product Scope",
      description: "Select which products this limit applies to, such as all products, specific products, or specific collections.",
      details: [
        "Choose: all products, specific products, or collections",
        "Browse and select specific products if needed",
        "Choose collections for bulk product inclusion"
      ],
      icon: Settings
    },
    {
      step: 8,
      title: "Set Customer Scope",
      description: "Decide which customers this order limit affects — choose from all customers, only logged-in customers, non-logged-in customers, or customers with specific tags.",
      details: [
        "Choose customer scope: all, logged-in, non-logged-in, or tagged",
        "Use customer tags to target specific wholesale groups",
        "Combine with product scope for precise control"
      ],
      icon: Users
    },
    {
      step: 9,
      title: "Customize Design (Advanced Settings)",
      description: "In Advanced settings, adjust design options like background color and text color.",
      details: [
        "Expand the Advanced settings section",
        "Set background color to match your store theme",
        "Configure text color for readability"
      ],
      icon: Palette
    },
    {
      step: 10,
      title: "Edit Warning Message",
      description: "Edit the warning message that customers will see if they don't meet order requirements. Changes update in real time.",
      details: [
        "Write a clear, customer-friendly warning message",
        "Example: 'You must buy at least five products'",
        "Preview updates in real time as you edit"
      ],
      icon: MessageSquare
    },
    {
      step: 11,
      title: "Save Order Limit",
      description: "Click 'Save order limit' to activate your new order restriction.",
      details: [
        "Review all configured settings",
        "Click 'Save order limit' to apply the rule",
        "Your order limit is now active and listed"
      ],
      icon: Save
    }
  ];

  const actionSteps = [
    {
      step: 1,
      description: "Visit a product detail page (PDP) and notice the prices and warning message shown to customers.",
    },
    {
      step: 2,
      description: "Try adding fewer items than allowed (e.g., only one product). The system displays an error — customers must select at least five products.",
    },
    {
      step: 3,
      description: "Add the minimum required quantity (five products) to your cart. The process completes successfully.",
    },
    {
      step: 4,
      description: "In the cart, if you try to reduce quantity below the limit, the same warning appears.",
    },
    {
      step: 5,
      description: "Once the rule is satisfied, you can proceed to checkout.",
    },
  ];

  const troubleshooting = [
    {
      issue: "Order limits not showing on product page",
      solutions: [
        "Verify the order limit rule is enabled (toggled on)",
        "Check that the product scope matches the products in question",
        "Ensure the customer matches the customer scope criteria",
        "Clear browser cache and refresh the page"
      ]
    },
    {
      issue: "Customers can still checkout below minimum",
      solutions: [
        "Ensure BMT Cart validation is enabled in Checkout settings",
        "Verify the checkout validation rule was saved properly",
        "Check that the order limit rule priority is set correctly",
        "Test the checkout flow with a different browser"
      ]
    },
    {
      issue: "Warning message not displaying correctly",
      solutions: [
        "Review the custom message text in the rule settings",
        "Check Advanced Settings for color and font size issues",
        "Ensure the message doesn't exceed the display area",
        "Test on both desktop and mobile views"
      ]
    },
    {
      issue: "Rule not applying to specific customer groups",
      solutions: [
        "Verify customer tags match the rule's customer scope",
        "Check if the customer is logged in (if required by rule)",
        "Review customer group assignments in the app",
        "Ensure no higher-priority rule is overriding this one"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I set both minimum and maximum order limits at the same time?",
      answer: "Yes! You can create multiple order limit rules — one for minimum and one for maximum. Set the priority for each rule to control how they interact with each other."
    },
    {
      question: "Do order limits apply to all customers or just wholesale customers?",
      answer: "You have full control over the customer scope. You can apply limits to all customers, only logged-in customers, non-logged-in customers, or customers with specific tags (e.g., wholesale groups)."
    },
    {
      question: "What's the difference between 'per product' and 'per order' limits?",
      answer: "Per product limits apply to individual product quantities (e.g., must buy at least 5 of this product). Per order limits apply to the entire order (e.g., total order must contain at least 10 items across all products)."
    },
    {
      question: "Will customers be blocked at checkout if they don't meet the order limits?",
      answer: "Yes, but only if BMT Cart validation is enabled in your Shopify Checkout settings. Without checkout validation, the warning messages will display but customers may still be able to proceed."
    },
    {
      question: "Can I customize the warning message and its appearance?",
      answer: "Absolutely! You can customize the message text, background color, text color, and font size in the Advanced Settings of each order limit rule. Changes are previewed in real-time."
    },
    {
      question: "How do rule priorities work?",
      answer: "When multiple order limit rules could apply to the same product or order, the rule with the higher priority takes precedence. This allows you to create general rules with lower priority and specific exceptions with higher priority."
    },
    {
      question: "Can I apply order limits to specific collections only?",
      answer: "Yes! When configuring the product scope, you can choose to apply the rule to all products, specific individual products, or entire collections."
    },
    {
      question: "Do order limits work with quantity-based (volume) discounts?",
      answer: "Yes, order limits work alongside volume discounts. You can set minimum order quantities that complement your volume discount tiers to encourage bulk purchases."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Configure Order Limits for Wholesale on Shopify"
        description="Set minimum and maximum order limits by quantity or value on Shopify. Protect wholesale margins with BMT B2B Wholesale Pricing app order controls."
        canonicalPath="/order-limits-guide"
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
                Order Limits Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Configure <span className="font-semibold text-primary">Order Limits</span> for Your Store
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Setting order limits helps you control how customers place orders, ensuring they meet minimum or maximum quantities or amounts.
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

        {/* Prerequisites */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Alert className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Prerequisites:</strong> Ensure you have BMT B2B Wholesale Pricing app installed, administrative access to your Shopify store, and the wholesale pricing feature enabled.
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
                Watch this step-by-step video guide to configure order limits
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/order_limits_1.mp4" type="video/mp4" />
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
                Step-by-Step Configuration Guide
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these detailed steps to set up and customize order limits for your store
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
                Here's what customers experience when order limits are active
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {actionSteps.map((item, index) => (
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
                Resolve common order limit configuration issues
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
                Common questions about configuring order limits
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
            <h2 className="text-3xl font-bold mb-4">Need Help with Order Limits?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you configure and optimize your order limits
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

export default OrderLimitsGuide;
