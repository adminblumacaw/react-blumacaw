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
  Lock,
  Settings,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  PlusCircle,
  Eye,
  EyeOff,
  Globe,
  Shield,
  Users,
  ToggleRight,
  MousePointerClick,
  MonitorSmartphone,
  FileText,
  Tag,
} from "lucide-react";

const LockPageHidePriceGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Go to Page Locks",
      description: "Navigate to the Page Locks section under BMT B2B Wholesale Pricing.",
      details: [
        "Open your Shopify admin and go to BMT B2B Wholesale Pricing app",
        "Click on 'Page Locks' in the navigation menu"
      ],
      icon: Settings
    },
    {
      step: 2,
      title: "Click Add Page Lock Rule",
      description: "Start creating a new page lock rule to restrict access.",
      details: [
        "Click the 'Add Page Lock Rule' button to open the configuration form"
      ],
      icon: PlusCircle
    },
    {
      step: 3,
      title: "Configure General Settings",
      description: "Enter a name for your lock rule and set the priority.",
      details: [
        "Enter a descriptive name (e.g., 'Sample Lock')",
        "Set the priority — lower numbers take precedence over higher ones"
      ],
      icon: FileText
    },
    {
      step: 4,
      title: "Select Resources to Lock",
      description: "Choose what to lock — whole website, specific products, collections, pages, or URLs.",
      details: [
        "Under Resource Selection, pick what you want to lock",
        "Options include: Whole Website, Specific Products, Collections, Pages, or URLs",
        "For a broad lock, select 'Whole Website'"
      ],
      icon: Globe
    },
    {
      step: 5,
      title: "Set Phone Access",
      description: "Decide if phone users should be allowed access.",
      details: [
        "Set phone access to 'No' if you don't want phone users to have access",
        "Set to 'Yes' if mobile users should bypass the lock"
      ],
      icon: MonitorSmartphone
    },
    {
      step: 6,
      title: "Configure Exclude URLs",
      description: "Paste any URLs that should remain accessible to guest users.",
      details: [
        "In the Exclude URLs field, paste paths that guests can still access",
        "Remove 'https://' from URLs and use the correct path format",
        "This is useful for keeping pages like your contact or about page accessible"
      ],
      icon: Shield
    },
    {
      step: 7,
      title: "Set Access Condition",
      description: "Choose who can access the locked content — logged-in customers, specific tags, or passcode.",
      details: [
        "Choose between: Logged-in Customers, Specific Customer Tags, or Passcode",
        "For tag-based access, select 'Specific Customer Tags' and enter the tag (e.g., 'wholesale')",
        "Only customers matching the condition will be able to access the locked content"
      ],
      icon: Tag
    },
    {
      step: 8,
      title: "Choose Denied Access Action",
      description: "Decide what happens when access is denied — redirect to login, show a modal, or hide elements.",
      details: [
        "Options include: Redirect to Login, Show Modal, or Hide Elements (like price and Add to Cart)",
        "Select 'Show Modal' to display a custom popup prompting users to register or log in",
        "Select 'Hide Elements' to hide prices and Add to Cart buttons from restricted users"
      ],
      icon: EyeOff
    },
    {
      step: 9,
      title: "Set Up Your Modal",
      description: "Customize the modal with a title and button labels for registration and login.",
      details: [
        "Add a descriptive modal title",
        "Set button labels for the Registration action",
        "Set button labels for the Login action"
      ],
      icon: MousePointerClick
    },
    {
      step: 10,
      title: "Create the Lock Rule",
      description: "Click 'Create Block Tool' to activate your page lock rule.",
      details: [
        "Click 'Create Block Tool' to save and activate the lock rule",
        "Your rule is now live and will start restricting access based on your configuration"
      ],
      icon: Lock
    },
    {
      step: 11,
      title: "Enable App Embed in Theme",
      description: "Make sure the app embed is switched on in your Shopify theme.",
      details: [
        "Go to your Shopify admin → Online Store → Themes",
        "Click 'Customize' on your active theme",
        "Navigate to App Embeds and activate the BMT B2B app embed",
        "Save your changes"
      ],
      icon: ToggleRight
    },
    {
      step: 12,
      title: "Test Your Lock Rule",
      description: "Visit your online store as a first-time user to verify the lock is working.",
      details: [
        "Open your store in an incognito/private browser window",
        "You should see the modal prompting you to register or log in",
        "Verify that the correct content is locked based on your settings"
      ],
      icon: Eye
    },
    {
      step: 13,
      title: "Verify Login and Registration Links",
      description: "Test the Login and Register buttons to ensure they redirect correctly.",
      details: [
        "Click the 'Login' button — it should redirect to the Shopify login page",
        "Click the 'Register' button — it should redirect to the registration page",
        "Confirm that logged-in users with the correct tags can access the locked content"
      ],
      icon: Users
    },
  ];

  const previewSteps = [
    {
      step: 1,
      description: "Visit your store as a guest — you should see the modal or hidden elements based on your configuration."
    },
    {
      step: 2,
      description: "Log in as a customer with the correct tag — you should have full access to the locked content."
    },
    {
      step: 3,
      description: "Test excluded URLs — they should remain accessible to guest users."
    }
  ];

  const troubleshooting = [
    {
      issue: "Lock rule not appearing on the store",
      solutions: [
        "Ensure the app embed is enabled in your Shopify theme customizer",
        "Check that the lock rule status is active",
        "Clear your browser cache and try in an incognito window",
        "Verify the resource selection matches the pages you want to lock"
      ]
    },
    {
      issue: "Customers with correct tags still can't access",
      solutions: [
        "Verify the customer tag matches exactly (case-sensitive)",
        "Ensure the customer is logged in before accessing the locked content",
        "Check that no higher-priority rule is overriding access",
        "Confirm the tag is applied to the customer in Shopify admin"
      ]
    },
    {
      issue: "Modal not displaying correctly",
      solutions: [
        "Check your modal title and button label settings",
        "Ensure the app embed is enabled in your theme",
        "Test in a different browser to rule out browser-specific issues",
        "Verify the denied access action is set to 'Show Modal'"
      ]
    }
  ];

  const faqs = [
    {
      question: "What can I lock with Page Lock rules?",
      answer: "You can lock your entire website, specific products, collections, pages, or custom URLs. This gives you full control over which content is restricted to certain customer groups."
    },
    {
      question: "Can I hide prices and Add to Cart buttons instead of showing a modal?",
      answer: "Yes! When configuring the denied access action, select 'Hide Elements' to hide prices and Add to Cart buttons from restricted users. This is useful for price-hidden catalogs."
    },
    {
      question: "How do I allow access based on customer tags?",
      answer: "In the access condition setting, select 'Specific Customer Tags' and enter the tag (e.g., 'wholesale'). Only customers with that tag will be able to view the locked content."
    },
    {
      question: "Can I exclude certain pages from the lock?",
      answer: "Yes. Use the Exclude URLs field to add any paths that should remain accessible to guest users, such as your contact page or about page. Make sure to remove 'https://' and use the correct path format."
    },
    {
      question: "Does the page lock work on mobile devices?",
      answer: "Yes, you can control mobile access separately. In the configuration, you can set whether phone users are allowed access or should also be restricted."
    },
    {
      question: "Can I use a passcode instead of customer tags?",
      answer: "Yes! You can set the access condition to 'Passcode' which requires visitors to enter a specific code to access the locked content. This is useful for exclusive launches or private sales."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Configure Lock Page & Hide Price Rules — BMT B2B Wholesale Pricing"
        description="Step-by-step guide to setting up page locks and hiding prices on your Shopify store. Control access to products, collections, and pages with BMT B2B Wholesale Pricing."
        canonicalPath="/lock-page-hide-price-guide"
        jsonLd={buildGuideJsonLd({ title: "Configure Lock Page & Hide Price Rules — BMT B2B Wholesale Pricing", description: "Step-by-step guide to setting up page locks and hiding prices on your Shopify store. Control access to products, collections, and pages with BMT B2B Wholesale Pricing.", path: "/lock-page-hide-price-guide", steps, faqs, })}
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
                <Lock className="w-4 h-4 mr-2" />
                Lock Page & Hide Price Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Configure <span className="font-semibold text-primary">Lock Page & Hide Price</span> Rules
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Page locks let you restrict pages or sections to specific customer groups, or hide key shopping functions like prices and Add to Cart buttons from selected users. Here's a step-by-step guide to setting up these powerful controls.
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
                <strong>Prerequisites:</strong> You need the BMT B2B Wholesale Pricing app installed on your Shopify store. Make sure you have admin access and the app embed is enabled in your theme.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section id="setup-guide" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Step-by-Step Configuration
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to create and configure a page lock rule on your Shopify store
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
                Verify your page lock rule is working correctly
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
                Resolve common page lock configuration issues
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
                Common questions about page locks and hiding prices
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
            <h2 className="text-3xl font-bold mb-4">Need Help with Page Locks?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you configure and optimize your page lock rules
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

export default LockPageHidePriceGuide;
