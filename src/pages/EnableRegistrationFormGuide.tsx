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
import { buildGuideJsonLd } from "@/lib/guideSchema";
import {
  ClipboardList,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Link,
  Save,
  Menu,
  Eye,
  Edit3,
  Globe,
  ExternalLink
} from "lucide-react";

const EnableRegistrationFormGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Find Your Form's Page URL",
      description: "Go to the relevant form rule and click Edit to access the form settings.",
      details: [
        "Navigate to the Forms section in BMT B2B Wholesale Pricing",
        "Find the registration form you want to enable",
        "Click 'Edit' on the form rule"
      ],
      icon: Edit3
    },
    {
      step: 2,
      title: "Copy the Page URL",
      description: "Click Save. After saving, the page URL appears. Copy this URL — it's your form's unique link.",
      details: [
        "Click 'Save' on the form to generate the page URL",
        "Locate the generated Page URL in the form settings",
        "Copy the full URL to your clipboard"
      ],
      icon: Link
    },
    {
      step: 3,
      title: "Replace Placeholder with Your Shop Name",
      description: "If the URL uses a placeholder like 'yourshop.myshopify.com', replace it with your actual shop name.",
      details: [
        "Check if the URL contains a placeholder shop name",
        "Replace it with your actual Shopify store URL",
        "Example: bmt-officesupplyhub.myshopify.com/pages/template-one-page"
      ],
      icon: Globe
    },
    {
      step: 4,
      title: "Save the Form Page",
      description: "Make sure your form page is saved properly. Click Save form on the form page if required.",
      details: [
        "Click 'Save form' to ensure all settings are stored",
        "Wait for confirmation that the form is saved",
        "The form is now ready to be linked in your navigation"
      ],
      icon: Save
    },
    {
      step: 5,
      title: "Navigate to Store Menus",
      description: "Go to Online Store > Navigation (or Content > Menus) in your Shopify dashboard.",
      details: [
        "Open your Shopify admin dashboard",
        "Navigate to Online Store > Navigation",
        "Or go to Content > Menus depending on your Shopify version"
      ],
      icon: Menu
    },
    {
      step: 6,
      title: "Open Your Main Menu",
      description: "Open your Main menu. You'll see existing links like Home, Catalog, and Contact.",
      details: [
        "Click on 'Main menu' to open it",
        "Review the existing menu items",
        "Identify where you want to add the registration link"
      ],
      icon: Menu
    },
    {
      step: 7,
      title: "Add Registration Menu Item",
      description: "If 'Registration' isn't already in the menu, click Add menu item. Name it Registration.",
      details: [
        "Click 'Add menu item' button",
        "Enter 'Registration' as the menu item name",
        "This will be visible in your store's navigation"
      ],
      icon: ClipboardList
    },
    {
      step: 8,
      title: "Paste the Form URL",
      description: "Paste your copied URL into the Link field for this menu item.",
      details: [
        "Click on the Link field for the Registration menu item",
        "Paste the copied form page URL",
        "Verify the URL is correct and complete"
      ],
      icon: Link
    },
    {
      step: 9,
      title: "Verify the Link",
      description: "Double-check that the link is correct. Adjust the link by swapping in your correct shop name if needed.",
      details: [
        "Review the pasted URL for accuracy",
        "Ensure the shop name in the URL is correct",
        "Confirm the page path matches your form page"
      ],
      icon: CheckCircle
    },
    {
      step: 10,
      title: "Save Menu Changes",
      description: "Click Save to confirm menu changes.",
      details: [
        "Click the 'Save' button to apply menu changes",
        "Wait for confirmation that the menu is updated",
        "Your registration link is now part of your store navigation"
      ],
      icon: Save
    },
    {
      step: 11,
      title: "Test the Registration Link",
      description: "Visit your storefront, refresh the page, and click on the new Registration link in your navigation. The registration form should now be visible.",
      details: [
        "Open your storefront in a new browser tab",
        "Refresh the page to see updated navigation",
        "Click the 'Registration' link in the menu",
        "Verify the registration form loads correctly"
      ],
      icon: Eye
    }
  ];

  const troubleshooting = [
    {
      issue: "Registration link not appearing in navigation",
      solutions: [
        "Ensure you clicked 'Save' on the menu changes",
        "Verify the menu item was added to the correct menu (Main menu)",
        "Refresh the storefront page and clear browser cache",
        "Check that the menu is published and visible on the theme"
      ]
    },
    {
      issue: "Registration form page shows 404 error",
      solutions: [
        "Verify the Page URL was generated by saving the form",
        "Check that the shop name in the URL is correct",
        "Ensure the form is saved and set to 'Active'",
        "Try regenerating the URL by editing and re-saving the form"
      ]
    },
    {
      issue: "Form loads but doesn't display correctly",
      solutions: [
        "Check the form's appearance settings for styling issues",
        "Ensure the app embed is enabled in your theme settings",
        "Test the form on different browsers and devices",
        "Contact support if display issues persist"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I add the registration form to multiple menus?",
      answer: "Yes, you can add the registration form URL to any menu in your Shopify store, including the main menu, footer menu, or any custom menu."
    },
    {
      question: "What if I change my shop's domain?",
      answer: "If your shop domain changes, you'll need to update the registration form URL in your menu items to reflect the new domain."
    },
    {
      question: "Can I create a direct link to the form without adding it to the menu?",
      answer: "Yes, you can use the Page URL directly as a link in email campaigns, social media, or any other marketing channel."
    },
    {
      question: "How do I remove the registration link from the menu?",
      answer: "Go to Online Store > Navigation, open the relevant menu, find the Registration item, click the delete icon, and save your changes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Enable Registration Forms on Your Shopify Store"
        description="Step-by-step guide to enable wholesale registration forms on your Shopify storefront. Let B2B buyers apply directly on your store with BMT B2B Wholesale Pricing."
        canonicalPath="/enable-registration-form-guide"
        jsonLd={buildGuideJsonLd({ title: "How to Enable Registration Forms on Your Shopify Store", description: "Step-by-step guide to enable wholesale registration forms on your Shopify storefront. Let B2B buyers apply directly on your store with BMT B2B Wholesale Pricing.", path: "/enable-registration-form-guide", steps, faqs, })}
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
                <ClipboardList className="w-4 h-4 mr-2" />
                Registration Forms
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enable <span className="font-semibold text-primary">Registration Forms</span> on Store
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Link your registration form to your store's navigation so customers can easily find and use it
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
                <strong>Prerequisites:</strong> Ensure you have a registration form already created in the BMT B2B Wholesale Pricing app and administrative access to your Shopify store.
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
                Watch this step-by-step video guide to enable registration forms on your store
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/registration_store_setup.mp4" type="video/mp4" />
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
                Follow these steps to enable your registration form on your storefront
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
                Resolve common issues when enabling registration forms on your store
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
                Common questions about enabling registration forms
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
            <h2 className="text-3xl font-bold mb-4">Need Help Enabling Your Form?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you set up and link your registration forms
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

export default EnableRegistrationFormGuide;
