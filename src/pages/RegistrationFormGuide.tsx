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
  Palette,
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Users,
  Eye,
  Save,
  Settings,
  Type,
  ToggleRight
} from "lucide-react";

const RegistrationFormGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Go to the Forms Section",
      description: "Navigate to the Forms section under BMT B2B. You'll see a prompt to create a registration form if none exists.",
      details: [
        "Open your Shopify admin dashboard",
        "Go to the BMT B2B Wholesale Pricing app",
        "Click on 'Forms' in the app navigation",
        "Review existing forms or prepare to create a new one"
      ],
      icon: ClipboardList
    },
    {
      step: 2,
      title: "Click Create Form",
      description: "Click the Create Form button to begin building your registration form.",
      details: [
        "Click the 'Create Form' button",
        "The form builder interface will open"
      ],
      icon: FileText
    },
    {
      step: 3,
      title: "Select a Form Template",
      description: "Select a form template. For this demo, use the available template and proceed.",
      details: [
        "Browse available form templates",
        "Select a template that fits your needs",
        "The template provides a starting structure for your form"
      ],
      icon: FileText
    },
    {
      step: 4,
      title: "Set Form Name and Page Title",
      description: "Configure your form by setting the Form Name and Page Title to help organize and identify your form.",
      details: [
        "Enter a descriptive form name (e.g., 'Wholesale Registration')",
        "Set the page title for the form page",
        "These help organize and identify your forms"
      ],
      icon: Type
    },
    {
      step: 5,
      title: "Add Header and Description",
      description: "Add a header, description, and adjust text alignment as needed.",
      details: [
        "Enter a header text displayed to customers",
        "Add a description explaining the form's purpose",
        "Adjust text alignment (left, center, right)"
      ],
      icon: Type
    },
    {
      step: 6,
      title: "Edit Form Fields",
      description: "Edit the form fields on Page 1. Standard fields include first name, last name, email, phone number, company name, company website, address, and years in business. Required fields are marked with an asterisk.",
      details: [
        "Review the default form fields",
        "Mark required fields with an asterisk (*)",
        "Standard fields: first name, last name, email, phone number",
        "Additional fields: company name, website, address, years in business"
      ],
      icon: Settings
    },
    {
      step: 7,
      title: "Add New Elements",
      description: "Add new elements if needed. For example, insert a Text field and configure its label, alignment, and validation settings.",
      details: [
        "Click 'Add Element' to insert new fields",
        "Choose the field type (Text, Dropdown, Checkbox, etc.)",
        "Configure the label, alignment, and validation rules",
        "Set whether the field is required or optional"
      ],
      icon: Settings
    },
    {
      step: 8,
      title: "Add Additional Pages",
      description: "If more sections are needed, add another page using the Add Page button. If your form only has one page, skip page navigation settings.",
      details: [
        "Click 'Add Page' to create multi-page forms",
        "Organize related fields across pages",
        "Skip this step if a single page is sufficient"
      ],
      icon: FileText
    },
    {
      step: 9,
      title: "Configure Submit Button and Success Message",
      description: "Set up the Submit Button text and customize the message shown after the form is successfully submitted.",
      details: [
        "Customize the submit button text",
        "Write a clear success message for customers",
        "Example: 'Thank you for registering! We will review your application.'"
      ],
      icon: CheckCircle
    },
    {
      step: 10,
      title: "Preview Your Form",
      description: "Preview your form on desktop and mobile to check its appearance.",
      details: [
        "Click 'Preview' to see how the form looks",
        "Test on desktop view",
        "Test on mobile view",
        "Make adjustments as needed"
      ],
      icon: Eye
    },
    {
      step: 11,
      title: "Customize Appearance",
      description: "Adjust the Appearance settings — select form width (default or boxed), font style, size, background, and text colors to match your store's branding.",
      details: [
        "Select form width: default or boxed layout",
        "Choose font style and size",
        "Set background color to match your brand",
        "Configure text colors for readability"
      ],
      icon: Palette
    },
    {
      step: 12,
      title: "Configure Form Settings",
      description: "Configure form settings. Choose a Default Customer Tag — this is the tag assigned after you approve the registration. Mark the form as Active so it's ready for use.",
      details: [
        "Set the Default Customer Tag (e.g., 'wholesale')",
        "This tag is applied to approved registrations",
        "Toggle the form status to 'Active'",
        "Active forms are ready for customer submissions"
      ],
      icon: Users
    },
    {
      step: 13,
      title: "Save the Form",
      description: "Click Save to finalize the form. Note the generated Page URL — keep this handy, as you'll need it to share or embed the form.",
      details: [
        "Click 'Save' to store your form configuration",
        "Note the generated Page URL",
        "Keep the URL for linking in your store navigation",
        "The form is now ready for use"
      ],
      icon: Save
    },
    {
      step: 14,
      title: "Save Form to Complete Setup",
      description: "Click Save Form to complete the setup. Your registration form is now ready to be published on your store.",
      details: [
        "Click 'Save Form' for final confirmation",
        "Your form is now ready to be linked on your store",
        "Proceed to enable the form on your storefront"
      ],
      icon: Save
    }
  ];

  const troubleshooting = [
    {
      issue: "Registration form not appearing on storefront",
      solutions: [
        "Verify that the form status is set to 'Active'",
        "Check that the menu link is correctly pointing to the form URL",
        "Ensure the menu containing the link is published",
        "Clear browser cache and refresh the storefront page"
      ]
    },
    {
      issue: "Customers not receiving confirmation after registration",
      solutions: [
        "Check that the success message is properly configured",
        "Verify email notification settings are enabled",
        "Ensure customer email addresses are valid",
        "Test the registration flow with a different email"
      ]
    },
    {
      issue: "Customer tag not being applied after approval",
      solutions: [
        "Verify the default customer tag is set in form configuration",
        "Check that the approval was completed successfully",
        "Refresh the customer list in Shopify admin",
        "Manually verify the tag in customer details"
      ]
    },
    {
      issue: "Form styling not matching store theme",
      solutions: [
        "Use the Appearance settings to customize colors and fonts",
        "Ensure color codes match your store's brand palette",
        "Preview the form on both desktop and mobile views",
        "Save and refresh to see styling updates"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I create multiple registration forms?",
      answer: "Yes, you can create multiple registration forms for different purposes or customer segments. Each form can have its own fields, styling, and default customer tag."
    },
    {
      question: "What happens when a customer submits a registration form?",
      answer: "The submission appears in the Customer Management section under the 'Pending' tab. You can then review, approve, or reject the application. Approved customers automatically receive the default customer tag."
    },
    {
      question: "Can I add custom fields to the form?",
      answer: "Yes, you can add various field types including text fields, dropdowns, checkboxes, and more. Each field can be configured with labels, alignment, and validation rules."
    },
    {
      question: "How do I make the form match my store's branding?",
      answer: "Use the Appearance settings to customize form width, font style, font size, background color, and text colors. Preview the form on desktop and mobile to ensure it looks great."
    },
    {
      question: "Can I edit a form after publishing it?",
      answer: "Yes, you can edit any form at any time. Changes are saved when you click 'Save Form'. The form URL remains the same after editing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Create Wholesale Registration Forms on Shopify"
        description="Build custom wholesale registration forms on Shopify to capture B2B leads. Auto-tag approved buyers and manage applications with BMT B2B Wholesale Pricing app."
        canonicalPath="/registration-form-guide"
        jsonLd={buildGuideJsonLd({ title: "How to Create Wholesale Registration Forms on Shopify", description: "Build custom wholesale registration forms on Shopify to capture B2B leads. Auto-tag approved buyers and manage applications with BMT B2B Wholesale Pricing app.", path: "/registration-form-guide", steps, faqs, })}
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
                Create <span className="font-semibold text-primary">Registration Forms</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Configure registration forms for your wholesale customers to collect information and streamline onboarding
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
                <strong>Prerequisites:</strong> Ensure you have BMT B2B Wholesale Pricing app installed, administrative access to your Shopify store, and theme customization permissions.
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
                Watch this step-by-step video guide to create registration forms
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/wholesale_registration.mp4" type="video/mp4" />
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
                Follow these detailed steps to create and configure registration forms for your wholesale customers
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

        {/* Troubleshooting Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Issues and Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Resolve common registration form configuration and usage issues
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
                Common questions about creating registration forms
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
            <h2 className="text-3xl font-bold mb-4">Need Help with Registration Form Setup?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you configure and optimize your registration forms
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

export default RegistrationFormGuide;
