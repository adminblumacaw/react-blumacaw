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
  CreditCard,
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

const CustomPaymentTermsGuide = () => {
  const createSteps = [
    {
      step: 1,
      title: "Go to Your Shopify Admin Page",
      description: "Log in to your Shopify admin dashboard to get started.",
      details: [
        "Open your browser and navigate to your Shopify admin",
        "Make sure you have admin-level access"
      ],
      icon: Settings
    },
    {
      step: 2,
      title: "Click Settings",
      description: "Open the admin settings menu from the bottom-left of the dashboard.",
      details: [
        "Click 'Settings' in the lower-left corner of your Shopify admin"
      ],
      icon: Search
    },
    {
      step: 3,
      title: "Find Manual Payment Methods",
      description: "Navigate to the manual payment methods section in your settings.",
      details: [
        "Go to Settings → Payments",
        "Scroll down to find 'Manual payment methods'",
        "Select it to open the configuration page"
      ],
      icon: CreditCard
    },
    {
      step: 4,
      title: "Click Create Custom Payment Method",
      description: "Start creating a new custom payment method for your net terms.",
      details: [
        "Click 'Create custom payment method'",
        "A dialog will appear for entering payment method details"
      ],
      icon: PlusCircle
    },
    {
      step: 5,
      title: "Enter Your Desired Payment Term",
      description: "Type your payment term name, such as 'Net 45', 'Net 30', or 'Net 60'.",
      details: [
        "Enter a clear, descriptive name like 'Net 45' or 'Net 30 — Pay within 30 days'",
        "This label will be visible to customers at checkout",
        "You can add additional payment instructions if needed"
      ],
      icon: ListOrdered
    },
    {
      step: 6,
      title: "Click Activate",
      description: "Activate your new payment term to make it live on your store.",
      details: [
        "Click 'Activate' to save and enable the payment method",
        "Your new payment term is now active and visible to all customers by default"
      ],
      icon: ToggleRight
    }
  ];

  const ruleSteps = [
    {
      step: 1,
      title: "Ensure BMT Payment Rules Is Active",
      description: "Under Payment Method customization, make sure BMT payment rules is active. If not, click Manage and add it.",
      details: [
        "Go to Settings → Payments → Payment customizations",
        "Check that 'BMT payment rules' is listed and active",
        "If not active, click 'Manage' and enable it"
      ],
      icon: ShieldCheck
    },
    {
      step: 2,
      title: "Add a Payment Rule",
      description: "Go to BMT B2B Wholesale Pricing and click Add Payment Rule to create a new rule.",
      details: [
        "Navigate to the BMT B2B Wholesale Pricing app",
        "Click 'Add Payment rule' to start creating a new rule"
      ],
      icon: PlusCircle
    },
    {
      step: 3,
      title: "Configure Your Payment Rule",
      description: "Set up your payment rule — name it, set the priority, and apply it to the right customer group using tags.",
      details: [
        "Enter a descriptive name (e.g., 'Wholesale Pricing Rule')",
        "Set the priority to zero (or your preferred priority level)",
        "Apply the rule to customers with a specific tag, such as 'wholesale'"
      ],
      icon: Users
    },
    {
      step: 4,
      title: "Click Create Payment Rule",
      description: "Save your payment rule to apply the settings.",
      details: [
        "Click 'Create payment rule' to save",
        "Only wholesale customers tagged appropriately will now see the net payment options at checkout"
      ],
      icon: Save
    },
    {
      step: 5,
      title: "Hide Net Terms from Retail Customers (Optional)",
      description: "Create another payment rule to hide net payment terms from retail customers.",
      details: [
        "Click 'Add new payment rule'",
        "Set its priority to one",
        "Apply it to all customers",
        "Select to hide the net payment options",
        "Click 'Create Payment rule' to save"
      ],
      icon: Eye
    }
  ];

  const previewSteps = [
    {
      step: 1,
      description: "Test your store as a wholesale customer — you should see the net payment terms at checkout."
    },
    {
      step: 2,
      description: "Test as a retail customer — net payment terms should be hidden if you configured the hide rule."
    },
    {
      step: 3,
      description: "Verify each customer group sees the correct payment options based on your rules."
    }
  ];

  const troubleshooting = [
    {
      issue: "Payment terms not showing at checkout",
      solutions: [
        "Verify the manual payment method is activated in Shopify Settings → Payments",
        "Check that BMT payment rules is active under Payment customizations",
        "Ensure the customer is tagged correctly to match your payment rule",
        "Clear browser cache and refresh the checkout page"
      ]
    },
    {
      issue: "Wrong payment methods appearing for customer group",
      solutions: [
        "Review the customer tags assigned to the payment rule",
        "Check rule priority — higher priority rules override lower ones",
        "Verify the customer is logged in if the rule requires it",
        "Ensure no conflicting rules exist for the same customer type"
      ]
    },
    {
      issue: "Net terms visible to retail customers",
      solutions: [
        "Create a 'hide' rule for all customers with a higher priority number",
        "Make sure the 'show' rule for wholesale customers has a lower priority (e.g., 0)",
        "Verify customer tags are correctly assigned in your Shopify admin",
        "Test with different customer accounts to confirm visibility"
      ]
    }
  ];

  const faqs = [
    {
      question: "What net payment terms can I create?",
      answer: "You can create any custom payment term including Net 15, Net 30, Net 45, Net 60, or any other terms that fit your business model. These are set up as manual payment methods in Shopify."
    },
    {
      question: "Can I show different terms to different customer groups?",
      answer: "Yes! Use BMT's Custom Payment Rules to control visibility. Create rules targeting different customer tags so wholesale customers see net terms while retail customers don't."
    },
    {
      question: "What happens when multiple rules apply to the same customer?",
      answer: "The priority setting determines which rule takes precedence. Rules with lower priority numbers (e.g., 0) are applied first, and higher priority numbers override them."
    },
    {
      question: "Can I hide standard payment methods from wholesale customers?",
      answer: "Yes. Use the 'Hide' action to remove specific payment methods like credit card or PayPal from tagged wholesale customers, leaving only net terms visible."
    },
    {
      question: "Are there any Shopify limitations for NET terms?",
      answer: "Yes — the credit card payment option (Shopify Payments) can only be modified on a Shopify Plus plan. Also, payment methods with logos such as Klarna, PayPal, Google Pay, etc. cannot be renamed."
    },
    {
      question: "Do I need the Advanced Plan for payment rules?",
      answer: "Yes, Custom Payment Rules are available on the Advanced Plan ($30/month or $300/year). This plan also includes Custom Shipping Rules and all Standard plan features."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Create Custom Payment Terms in Shopify — BMT B2B Wholesale Pricing"
        description="Step-by-step guide to creating custom payment terms like Net 30, Net 60, and Net 45 in Shopify and controlling visibility with BMT B2B Wholesale Pricing payment rules."
        canonicalPath="/custom-payment-terms-guide"
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
                <CreditCard className="w-4 h-4 mr-2" />
                Custom Payment Rules Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Create <span className="font-semibold text-primary">Custom Payment Terms</span> in Shopify
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                With Shopify, you can quickly set up custom payment terms like Net 30, Net 60, or Net 45 for different segments of your customers. This is especially useful if you handle both wholesale and retail sales, letting you control who sees and uses specific payment options.
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
                Watch this step-by-step video guide to create custom payment terms
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/Creating%20Custom%20Payment%20Terms.mp4" type="video/mp4" />
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
                <strong>Prerequisites:</strong> You need the <strong>Advanced Plan</strong> to access Custom Payment Rules. Make sure you have admin access to your Shopify store to create manual payment methods.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Part 1: Creating Payment Terms */}
        <section id="setup-guide" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Part 1: Create a Custom Payment Term
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to create a manual payment method like Net 30, Net 45, or Net 60 in your Shopify admin
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {createSteps.map((step, index) => {
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

        {/* Part 2: Payment Rules */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Part 2: Control Payment Terms Visibility with Payment Rules
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Make sure only specific customer groups see certain payment terms by creating custom payment rules
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {ruleSteps.map((step, index) => {
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

        {/* Shopify Limitations */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Alert className="mb-8">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Shopify Limitations for NET Terms:</strong>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>The credit card payment option (Shopify Payments) can only be modified on a Shopify Plus plan</li>
                    <li>Payment methods with logos, such as Klarna, PayPal, Google Pay etc. cannot be renamed</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* See It In Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Verify your payment terms are working correctly for each customer group
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
                Resolve common payment terms configuration issues
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
                Common questions about custom payment terms
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
            <h2 className="text-3xl font-bold mb-4">Need Help with Payment Terms?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you configure and optimize your payment rules
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

export default CustomPaymentTermsGuide;
