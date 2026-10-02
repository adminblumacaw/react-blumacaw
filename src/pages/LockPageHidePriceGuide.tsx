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
      description: "Open BMT B2B Wholesale Pricing and navigate to Page Locks.",
      details: [
        "Open your Shopify admin and go to BMT B2B Wholesale Pricing app",
        "Select Page Locks from the app navigation"
      ],
      icon: Settings
    },
    {
      step: 2,
      title: "Open the Page Locks Dashboard",
      description: "Click Page Locks to open the rule configuration dashboard.",
      details: [
        "The dashboard lists your page lock rules and their current status",
        "You can create, edit, duplicate, delete, or switch rules on and off here"
      ],
      icon: Lock
    },
    {
      step: 3,
      title: "Start a New Page Lock",
      description: "Select the Add Page Lock call-to-action on the dashboard.",
      details: [
        "If this is your first rule, select Add page lock rule",
        "The setup screen opens with all available configuration sections"
      ],
      icon: PlusCircle
    },
    {
      step: 4,
      title: "Enable the App Embed",
      description: "Make sure the BMT app embed is switched on so page lock rules can appear on your storefront.",
      details: [
        "Use Go to App Embeds from the Page Locks dashboard",
        "Turn on the BMT B2B app embed in your active theme and save the theme settings",
        "Return to Page Locks after the embed is enabled"
      ],
      icon: ToggleRight
    },
    {
      step: 5,
      title: "Click Add Page Lock",
      description: "Select Add Page Lock to begin configuring the new rule.",
      details: [
        "The Set up lock rule screen opens",
        "Complete each section before saving the rule"
      ],
      icon: PlusCircle
    },
    {
      step: 6,
      title: "Configure General Settings",
      description: "Enter a clear rule name and assign its priority.",
      details: [
        "Use a descriptive name, such as 'Sample' or 'Wholesale Catalogue Lock'",
        "Set the priority; a lower number has higher priority",
        "Rules are evaluated in ascending priority order"
      ],
      icon: FileText
    },
    {
      step: 7,
      title: "Choose the Resources to Lock",
      description: "Select which storefront content this rule should restrict.",
      details: [
        "Whole website — lock every storefront page",
        "Specific products — choose individual products",
        "Specific collections — lock everything inside selected collections",
        "Specific pages or URLs — target selected pages or matching paths, including wildcards",
        "Blogs — lock blog articles and listings"
      ],
      icon: Globe
    },
    {
      step: 8,
      title: "Configure Whole-Website Access",
      description: "For a whole-site lock, choose whether visitors can browse until checkout or access the home page.",
      details: [
        "Allow access till checkout lets visitors browse and applies the restriction when they try to check out",
        "Allow home page access keeps the home page open while the rest of the selected content remains protected",
        "Use exclusions when certain URLs, products, or collections should remain public"
      ],
      icon: Shield
    },
    {
      step: 9,
      title: "Review Resource-Specific Options",
      description: "Additional controls appear when you select products, collections, pages, URLs, or blogs.",
      details: [
        "Browse and select the exact products or collections to protect",
        "For selected products, choose whether to hide them from storefront listings and recommendations",
        "Add excluded products or collections that must stay open even when the broader rule matches",
        "Choose the options that fit your storefront access requirements"
      ],
      icon: EyeOff
    },
    {
      step: 10,
      title: "Set Access and Exclusions",
      description: "For the whole-website example, configure the available access and exclusion settings.",
      details: [
        "Enable Allow access till checkout or Allow home page access only if needed",
        "Add excluded URLs, products, or collections that everyone should still be able to open",
        "Review your choices before moving to the customer condition"
      ],
      icon: Shield
    },
    {
      step: 11,
      title: "Choose Who Can Access the Content",
      description: "Set the condition that determines which visitors can view the locked content.",
      details: [
        "All customers — everyone can view the content except customers included in your exclusions",
        "Logged-in customers — anyone with a customer account can view the content",
        "Specific customer tags — only customers carrying an allowed tag get access",
        "Passcode — visitors enter a shared code to unlock the content",
        "Use excluded customer tags or specific customer exclusions when required"
      ],
      icon: Users
    },
    {
      step: 12,
      title: "Choose the Denied-Access Action",
      description: "Decide what visitors see when they do not have permission to access the content.",
      details: [
        "Redirect to Login sends the visitor to /account/login or another store path you provide",
        "Show Modal displays a configurable login and registration prompt",
        "Hide Elements removes selected storefront elements, such as prices and Add to Cart controls",
        "The document's example uses Show Modal"
      ],
      icon: MousePointerClick
    },
    {
      step: 13,
      title: "Configure the Access Modal",
      description: "Customize the modal that restricted visitors see.",
      details: [
        "Enter a modal title, such as 'Restricted Content'",
        "Add a message explaining that the visitor must log in to view the content",
        "Set the login button text and destination",
        "Set the registration button text and registration page URL",
        "First-time visitors see both Login and Register; logged-in visitors without access see only Register"
      ],
      icon: MousePointerClick
    },
    {
      step: 14,
      title: "Save the Page Lock Rule",
      description: "Click Save to create the rule with your selected resources, conditions, and action.",
      details: [
        "Review the rule name, priority, targeting, exclusions, condition, and denied-access action",
        "Click Save to create the page lock",
        "Return to the Page Locks dashboard after the rule is saved"
      ],
      icon: CheckCircle
    },
    {
      step: 15,
      title: "Confirm the Rule Is Active",
      description: "Check that the new page lock appears in the list and its status is switched on.",
      details: [
        "Confirm the correct name, priority, resource type, and condition appear in the list",
        "Make sure the status is Active",
        "Use the dashboard actions later to edit, duplicate, or delete the rule"
      ],
      icon: ToggleRight
    },
    {
      step: 16,
      title: "Test While Access Is Allowed",
      description: "Visit the storefront while logged in as a customer who meets the rule condition.",
      details: [
        "Open the storefront and navigate through the content covered by the rule",
        "A qualifying logged-in customer should be able to access the content normally",
        "Confirm that allowed pages and products open without the restriction prompt"
      ],
      icon: Eye
    },
    {
      step: 17,
      title: "Test as a Restricted Visitor",
      description: "Log out and visit a locked page to confirm the denied-access experience.",
      details: [
        "Open the storefront as a logged-out visitor or in a private browser window",
        "Attempt to open content covered by the rule",
        "Confirm that the configured redirect, modal, or hidden elements appear",
        "For the modal example, verify both Login and Register actions"
      ],
      icon: Lock
    },
    {
      step: 18,
      title: "Verify Other Restricted Pages",
      description: "Test additional protected pages or products to make sure the rule works consistently.",
      details: [
        "Try another selected product, page, catalogue area, URL, or blog",
        "Confirm exclusions remain available to visitors who would otherwise be restricted",
        "Repeat the test for each customer condition your store uses"
      ],
      icon: MonitorSmartphone
    },
  ];

  const previewSteps = [
    {
      step: 1,
      description: "Visit the selected content as an allowed customer — the page should open normally."
    },
    {
      step: 2,
      description: "Log out or use a private window — the configured redirect, modal, or hidden elements should appear."
    },
    {
      step: 3,
      description: "Test excluded URLs, products, collections, and customers — each exclusion should bypass the rule as configured."
    }
  ];

  const troubleshooting = [
    {
      issue: "Lock rule not appearing on the store",
      solutions: [
        "Ensure the app embed is enabled in your Shopify theme customizer",
        "Check that the lock rule status is active",
        "Clear your browser cache and try in an incognito window",
        "Verify the resource selection and customer condition match the content and visitor you are testing"
      ]
    },
    {
      issue: "Customers with correct tags still can't access",
      solutions: [
        "Verify the customer tag matches exactly (case-sensitive)",
        "Ensure the customer is logged in before accessing the locked content",
        "Check that no higher-priority rule is overriding access",
        "Confirm the tag is applied to the customer in Shopify admin",
        "Check that the customer is not included in an exclusion"
      ]
    },
    {
      issue: "Modal not displaying correctly",
      solutions: [
        "Check your modal title and button label settings",
        "Ensure the app embed is enabled in your theme",
        "Test in a different browser to rule out browser-specific issues",
        "Verify the denied access action is set to 'Show Modal'",
        "Check the modal title, message, button text, and registration URL"
      ]
    }
  ];

  const faqs = [
    {
      question: "What can I lock with Page Lock rules?",
      answer: "You can lock your entire website, specific products, collections, pages, custom URLs with wildcard matching, or blogs and article listings. Resource-specific options appear after you make a selection."
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
      answer: "Yes. Depending on the selected resource, you can exclude URLs, products, or collections so they remain available even when the broader rule matches. Each rule keeps its own exclusions."
    },
    {
      question: "Can I exclude selected customers from a rule?",
      answer: "Yes. You can add excluded customer tags or specific customers. Anyone matching a customer exclusion is not subject to that rule, regardless of the selected access condition."
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
        description="Configure page locks and hidden storefront content by customer login, tag, passcode, product, collection, page, URL, or blog with BMT B2B Wholesale Pricing."
        canonicalPath="/lock-page-hide-price-guide"
        jsonLd={buildGuideJsonLd({ title: "Configure Lock Page & Hide Price Rules — BMT B2B Wholesale Pricing", description: "Configure page locks and hidden storefront content by customer login, tag, passcode, product, collection, page, URL, or blog with BMT B2B Wholesale Pricing.", path: "/lock-page-hide-price-guide", steps, faqs, })}
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
                 Page locks control who can access selected storefront content by login status, customer tag, exclusions, or passcode. Follow this guide to protect your whole site, products, collections, pages, URLs, or blogs and choose what restricted visitors see.
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
                 Follow these steps to create, activate, and test a page lock rule on your Shopify store
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
                <a href="https://calendar.app.google/kxiwZQ9QCWjve2rn7" target="_blank" rel="noopener noreferrer">
                  Book Onboarding Session
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
