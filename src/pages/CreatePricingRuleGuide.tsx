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
import BookOnboarding from "@/components/BookOnboarding";
import { buildGuideJsonLd } from "@/lib/guideSchema";
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
  Upload,
  ListChecks
} from "lucide-react";

const CreatePricingRuleGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Create a B2B Pricing Rule",
      description: "Open BMT B2B Wholesale Pricing in Shopify Admin, go to Pricing, and start a new rule.",
      details: [
        "Open the BMT B2B Wholesale Pricing app in Shopify Admin",
        "Go to Pricing",
        "Click Create B2B pricing rule",
      ],
      icon: DollarSign
    },
    {
      step: 2,
      title: "Configure General Settings",
      description: "Define the rule, its priority, the checkout message, and whether it is active.",
      details: [
        "Enter a clear name, such as 'VIP Wholesale' or 'Distributor Pricing'",
        "Set the priority; 0 is the highest priority",
        "Enter the message customers should see in their cart at checkout",
        "Use the Status field in the Summary panel to keep the rule Active or inactive",
        "Review the Summary panel as it updates with your targeting and pricing choices",
      ],
      icon: Settings
    },
    {
      step: 3,
      title: "Choose the Applied Customers",
      description: "Select which customers should receive the pricing rule.",
      details: [
        "Choose All customers, Logged in customers, Non-logged in customers, or Customers with tag",
        "For tagged customers, enter the required Shopify customer tag",
        "Advanced Plan: select Exempt these customers from tax at checkout when required",
        "Tax exemption must also be enabled in your Shopify tax settings",
      ],
      icon: Users
    },
    {
      step: 4,
      title: "Exclude Customers",
      description: "Prevent selected customers from receiving the rule, even when they match the applied-customer settings.",
      details: [
        "Exclude customers by Shopify customer tag",
        "Select individual customers to exclude when needed",
        "Anyone matching an exclusion is never subject to the rule",
      ],
      icon: Users
    },
    {
      step: 5,
      title: "Select Markets",
      description: "Apply the rule across all Shopify Markets or only selected markets.",
      details: [
        "Choose All markets for store-wide coverage",
        "Choose Specific markets to limit the rule",
        "Search for a market and check each market you want to include",
      ],
      icon: Globe
    },
    {
      step: 6,
      title: "Configure Wholesale Pricing",
      description: "Turn on Wholesale Pricing, then choose one pricing method for the rule.",
      details: [
        "Set up price rule — use the same pricing logic across targeted products",
        "Set up price list — configure prices for individual product variants",
        "Upload prices (CSV/Excel) — configure many variant prices at once",
      ],
      icon: ToggleRight
    },
    {
      step: 7,
      title: "Option A — Set Up a Price Rule, Exclusions, and Display",
      description: "Apply the same pricing logic across targeted products, exclude items when needed, and choose how wholesale prices appear.",
      details: [
        "Percent off — reduce original prices by a percentage",
        "Amount off — subtract a fixed amount from each applicable item",
        "Fixed price — set prices independently of the retail price",
        "Enter the value in Discount per item",
        "Apply the rule to All products, Specific products, or Specific collections",
        "Use Exclude products for individual products that must not receive the rule",
        "Use Exclude collections for collections that must not receive the rule",
        "Choose Show new price only to display only the wholesale price",
        "Choose Show new price and Original price to display both prices",
      ],
      icon: Percent
    },
    {
      step: 8,
      title: "Option B — Set Up a Price List",
      description: "Use a price list to configure pricing for individual product variants.",
      details: [
        "Select Set up price list",
        "Search for a product or click Browse",
        "Add the required products and set pricing for individual variants",
        "Add product or collection exclusions if needed",
        "Choose how the new price should be displayed",
      ],
      icon: ListChecks
    },
    {
      step: 9,
      title: "Option C — Choose an Upload Template",
      description: "Use Upload prices (CSV/Excel) to configure many variant prices at once.",
      details: [
        "Choose an SKU, barcode, or Shopify variant ID price template",
        "Download a Discount template for percentage or fixed-amount discounts",
        "Download a Fixed price template for final selling prices",
        "The app recommends up to 500 rows per file; split larger lists across uploads",
      ],
      icon: Upload
    },
    {
      step: 10,
      title: "Complete and Upload the Price File",
      description: "Fill in the selected template, upload it, and review the imported pricing.",
      details: [
        "Discount files include the identifier, Type, and Value",
        "Use percentage with 10 for 10% off, or fixed_amount with 5 for 5 off",
        "Fixed price files include the identifier and Final Price",
        "Click Add file or drag and drop the completed CSV or Excel file",
        "Review the uploaded pricing before saving the rule",
      ],
      icon: Upload
    },
    {
      step: 11,
      title: "Configure Volume Discount (Optional)",
      description: "Turn on Volume Discount only when you also want quantity-based pricing for this rule.",
      details: [
        "Enable Volume Discount to add quantity-based pricing",
        "Leave it turned off when volume-based pricing is not required",
      ],
      icon: ShoppingCart
    },
    {
      step: 12,
      title: "Set Active Dates, Review, and Save",
      description: "Choose when the rule runs, review the Summary panel, and save the configuration.",
      details: [
        "Choose the Start date for the pricing rule",
        "Select Set end date and specify a date if the rule should stop automatically",
        "Confirm the name, priority, customers, markets, pricing, products, and price display in Summary",
        "Save the pricing rule",
        "Return to B2B Pricing Rules and use the toggle to activate or deactivate it",
      ],
      icon: Save
    }
  ];

  const previewSteps = [
    {
      step: 1,
      description: "Confirm the rule has a clear name, the correct priority, and the intended customer targeting and exclusions.",
    },
    {
      step: 2,
      description: "Check the market selection, pricing method and values, and included or excluded products and collections.",
    },
    {
      step: 3,
      description: "Confirm the price display option and active dates, then make sure the saved rule is Active.",
    },
    {
      step: 4,
      description: "Verify the expected wholesale price and customer message on the storefront and in the cart.",
    },
  ];

  const troubleshooting = [
    {
      issue: "Rule not appearing in store",
      solutions: [
        "Ensure the rule is Active rather than Draft",
        "Confirm the rule's start date has passed and its end date has not passed",
        "Verify the customer and market match the targeting criteria",
        "Check whether the customer, product, or collection is excluded",
        "Review the product targeting and selected pricing method"
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
        "Confirm the selected type: percent off, amount off, or fixed price",
        "Check the value entered for each product or variant",
        "Review the price-list upload identifiers and columns",
        "Remember that a fixed price above the original price leaves the original price unchanged"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I create multiple wholesale pricing rules?",
      answer: "Yes, you can create as many pricing rules as needed. Use priorities to control which rule takes precedence when multiple rules could apply to the same customer or product."
    },
    {
      question: "What pricing methods can I use?",
      answer: "You can apply a percentage discount, subtract a fixed amount, or use Fixed price to set prices independently of the retail price. You can also build a variant-level price list or upload prices in bulk using CSV or Excel."
    },
    {
      question: "Can I exclude customers or products from a rule?",
      answer: "Yes. You can exclude customer tags, individual customers, products, or collections. An exclusion always takes priority when the rule's targeting would otherwise match."
    },
    {
      question: "Will customers see the original price alongside the discounted price?",
      answer: "You choose how prices display. We recommend showing both the original and discounted prices for transparency, which helps customers see the value of their wholesale discount."
    },
    {
      question: "How do I apply wholesale pricing to specific collections only?",
      answer: "In the product selection step, choose 'Specific collections' and select the collections you want the rule to apply to. This allows targeted pricing for specific product categories."
    },
    {
      question: "How many rows can I upload in one price file?",
      answer: "Use one of the provided SKU, barcode, or variant ID templates. We recommend up to 500 rows per CSV or Excel file and splitting larger price lists across multiple uploads."
    },
    {
      question: "Can a pricing rule run only during selected dates?",
      answer: "Yes. Choose a start date and optionally set an end date if the rule should stop automatically. Check these dates when an expected price is not appearing."
    },
    {
      question: "Can volume and wholesale discounts be combined?",
      answer: "Yes. In Settings > Discounts, select 'Combine volume and wholesale discounts for any product' to apply a volume tier on top of the wholesale or price-list price. Leave it unselected if the volume tier price should replace the wholesale price once its quantity is reached."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Configure B2B Pricing Rules on Shopify"
        description="Configure BMT B2B pricing rules with customer targeting, fixed or discounted prices, CSV uploads, volume discounts, and discount combination settings."
        canonicalPath="/create-pricing-rule-guide"
        jsonLd={buildGuideJsonLd({ title: "How to Configure B2B Pricing Rules in BMT B2B Wholesale Pricing", description: "Create targeted wholesale pricing for selected customers, markets, products, or collections using price rules, variant-level price lists, or CSV and Excel uploads.", path: "/create-pricing-rule-guide", steps, faqs, })}
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
                 Configure <span className="font-semibold text-primary">Wholesale Pricing Rules</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Create targeted wholesale pricing for selected customers, markets, products, or collections using standard discounts, variant-level prices, or CSV and Excel uploads.
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
                  <strong>Before you begin:</strong> Open BMT B2B Wholesale Pricing in Shopify Admin and have your customer tags, markets, products, collections, or price file ready.
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
                 Watch the setup walkthrough, then use the updated steps below to configure every current pricing option.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/Configuring%20B2B%20Pricing%20Rules.mp4" type="video/mp4" />
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
                  Follow the current BMT app workflow to configure targeting, pricing, optional volume discounts, active dates, and storefront verification.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                   <Card id={`step-${step.step}`} key={index} className="shadow-card scroll-mt-36">
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
                Quick Checklist
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Review these essentials before relying on the rule for wholesale customers.
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
                 Check these settings first if a rule is missing, conflicting, or calculating unexpectedly.
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

        <Separator />

        {/* Discount Settings */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discount Settings
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose how volume discounts interact with wholesale and price-list prices.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto shadow-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">Settings → Discounts</Badge>
                    <CardTitle className="text-xl">Combining Discounts</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-muted-foreground">
                  Use <strong className="text-foreground">Combine volume and wholesale discounts for any product</strong> to choose whether both discounts apply together.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Combining on:</strong> a volume tier is applied on top of the wholesale or price-list price.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ToggleRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Combining off:</strong> once the tier quantity is reached, its price replaces the wholesale price.</span>
                  </li>
                </ul>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    With combining off, a volume tier that discounts less than your wholesale rule can make buying more cost more per item. It also overrides price-list prices at that quantity.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </section>

        <BookOnboarding />
      </main>

      <Footer />
    </div>
  );
};

export default CreatePricingRuleGuide;
