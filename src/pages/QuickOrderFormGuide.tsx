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
import {
  ShoppingCart,
  Settings,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Plus,
  Package,
  Hash,
  SlidersHorizontal,
  Palette,
  Save,
  Eye,
  Layers,
} from "lucide-react";

const QuickOrderFormGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Go to Quick Order in the BMT Portal",
      description: "Open the BMT Wholesale Pricing app and find the Quick Order section in the menu.",
      details: [
        "Open your Shopify admin dashboard",
        "Navigate to the BMT B2B Wholesale Pricing app",
        "Click on 'Quick Order' in the app menu",
      ],
      icon: ShoppingCart,
    },
    {
      step: 2,
      title: "Start Creating a New Quick Order Form",
      description: "You'll see a prompt to create your own form. Click Create the Form to begin.",
      details: [
        "Click the 'Create the Form' button",
        "The quick order form configuration screen will open",
      ],
      icon: Plus,
    },
    {
      step: 3,
      title: "Complete the General Settings",
      description: "Enter a Form Name (for example: 'Sample Form'), a Page Title ('Quick Order Form'), and set the Page Handle ('quick-order').",
      details: [
        "Form Name — internal label for the form",
        "Page Title — heading shown to customers on the form page",
        "Page Handle — sets the URL, e.g. storename/pages/web-portal/quick-order",
      ],
      icon: Settings,
    },
    {
      step: 4,
      title: "Configure Product Selection",
      description: "In the Configuration section, choose which products to show on the form — all products, specific products, or specific collections.",
      details: [
        "Select 'All Products' to display your full catalog",
        "Choose 'Specific Product' to browse and pick individual products and variants",
        "Pick 'Specific Collection' to scope the form to one or more collections",
      ],
      icon: Package,
    },
    {
      step: 5,
      title: "Set Up Quantity Settings",
      description: "Decide how quantity increments work when users click plus or minus. For example, set quantity increment to 4 so each click adds 4 items.",
      details: [
        "Set the quantity increment value (e.g., 1, 4, 12)",
        "Enable quantity limits if needed — minimum (e.g., 1) and maximum (e.g., 20) per product",
        "Optionally set a minimum order value for the whole form",
      ],
      icon: Hash,
    },
    {
      step: 6,
      title: "Add Custom Rules (Optional)",
      description: "Set exceptions for specific products by adding custom rules. Click Add Rule, choose a target like product, and configure the rule.",
      details: [
        "Click 'Add Rule' to create an exception",
        "Choose a target (e.g., specific product or variant)",
        "Configure the override values for that rule",
      ],
      icon: SlidersHorizontal,
    },
    {
      step: 7,
      title: "Adjust Appearance Settings",
      description: "Choose how many products show per page and which columns appear on the form, such as product image, selling price, SKU, and checkout button.",
      details: [
        "Set products per page (e.g., 25)",
        "Toggle columns: product image, selling price, SKU, checkout button, and more",
        "Enable the variant selector to show product options inline",
      ],
      icon: Layers,
    },
    {
      step: 8,
      title: "Customize Button Styles",
      description: "Pick background and text colors for the add to cart and variant buttons so the form matches your storefront branding.",
      details: [
        "Set background color for primary buttons",
        "Set text color for button labels",
        "Preview updates in real time as you edit",
      ],
      icon: Palette,
    },
    {
      step: 9,
      title: "Save the Form",
      description: "Click Save. If you get an error (for example, minimum quantity must be 1), correct it and save again.",
      details: [
        "Review all settings before saving",
        "Fix any validation errors that appear",
        "Confirm the form is saved successfully",
      ],
      icon: Save,
    },
    {
      step: 10,
      title: "Activate and Test the Form",
      description: "Activate your form, then use the pen (edit) button for further changes. Copy the Page Handle to visit your live form.",
      details: [
        "Toggle the form to Active",
        "Use the edit icon to make changes later",
        "Open the live URL to confirm products and configuration display correctly",
      ],
      icon: Eye,
    },
  ];

  const troubleshooting = [
    {
      issue: "Quick order form page returns 404",
      solutions: [
        "Ensure the form is set to Active in the BMT app",
        "Confirm the Page Handle matches the URL you're visiting",
        "Republish the form after editing the Page Handle",
        "Clear browser cache and retry",
      ],
    },
    {
      issue: "Wrong products showing on the form",
      solutions: [
        "Recheck product selection: All / Specific Products / Specific Collections",
        "If using collections, confirm products are in the chosen collections",
        "Save and reload after changing product scope",
      ],
    },
    {
      issue: "Quantity increment or limits not working",
      solutions: [
        "Confirm quantity increment is greater than 0",
        "Make sure minimum quantity is at least 1 if quantity limits are enabled",
        "Check custom rules — a product-specific rule may override the form default",
      ],
    },
    {
      issue: "Buttons or columns look off-brand",
      solutions: [
        "Adjust background and text colors in Appearance settings",
        "Toggle off any columns you don't want shown",
        "Test on both desktop and mobile after saving",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is a quick order form?",
      answer: "A quick order form lets wholesale customers add many products to their cart from a single page, without navigating individual product pages. It's ideal for repeat B2B buyers who already know what they want.",
    },
    {
      question: "Can I create more than one quick order form?",
      answer: "Yes. You can create multiple forms with different product scopes, quantity rules, and appearance settings — for example, one form per collection or per customer segment.",
    },
    {
      question: "Does the Page Handle change the URL of my form?",
      answer: "Yes. The Page Handle defines the public URL, e.g. yourstore.com/pages/web-portal/quick-order. Use a short, descriptive handle so it's easy to share with buyers.",
    },
    {
      question: "Can I limit how many of each product a customer can order?",
      answer: "Yes. Enable quantity limits in the Quantity Settings and set minimum and maximum values per product. You can also apply custom rules to override limits for specific products.",
    },
    {
      question: "Can I control which columns customers see?",
      answer: "Yes. In Appearance Settings you can toggle columns such as product image, selling price, SKU, checkout button, and the inline variant selector.",
    },
    {
      question: "Can I match the form to my store's branding?",
      answer: "Yes. You can customize background and text colors for the add to cart and variant buttons so the form blends with your storefront design.",
    },
    {
      question: "How do I edit a form after publishing?",
      answer: "From the Quick Order list, click the pen (edit) icon next to the form. Make your changes, save, and the live page updates instantly.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to Configure a Quick Order Form on Shopify",
        description:
          "Step-by-step guide to creating a Shopify quick order form for wholesale buyers using BMT B2B Wholesale Pricing.",
        totalTime: "PT10M",
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.description,
          url: `https://blumacawtech.com/quick-order-form-guide#step-${s.step}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://blumacawtech.com/" },
          { "@type": "ListItem", position: 2, name: "Documentation", item: "https://blumacawtech.com/documentation" },
          { "@type": "ListItem", position: 3, name: "Quick Order Form Guide", item: "https://blumacawtech.com/quick-order-form-guide" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">

      <SEOHead
        title="How to Configure Quick Order Forms on Shopify — BMT B2B"
        description="Create a Shopify quick order form for wholesale buyers. Configure products, quantity rules, appearance, and publish with BMT B2B Wholesale Pricing."
        canonicalPath="/quick-order-form-guide"
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
                <ShoppingCart className="w-4 h-4 mr-2" />
                Quick Order Form Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Configure <span className="font-semibold text-primary">Quick Order Forms</span> for Your Store
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Quick order forms let wholesale customers order multiple products fast from a single page. Set up a customizable form in minutes.
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
                <strong>Prerequisites:</strong> Ensure you have BMT B2B Wholesale Pricing app installed and administrative access to your Shopify store.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Training Video */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Watch the Training Video</h2>
                <p className="text-muted-foreground">A quick walkthrough of configuring your quick order form</p>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg shadow-card bg-black" style={{ aspectRatio: "16 / 9" }}>
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full"
                  src="https://storage.googleapis.com/bmt-videos/Quick%20Order%20Form%20Configuration%20Guide.mp4"
                >
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
                Follow these detailed steps to create and publish a quick order form
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} id={`step-${step.step}`} className="shadow-card scroll-mt-24">
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
                Resolve common quick order form configuration issues
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
                Common questions about configuring quick order forms
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
      </main>

      <BookOnboarding />
      <Footer />
    </div>
  );
};

export default QuickOrderFormGuide;
