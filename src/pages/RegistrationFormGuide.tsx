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
      title: "Open the Forms Overview",
      description: "Open BMT B2B Wholesale Pricing in Shopify Admin and go to Forms to view or create registration forms.",
      details: [
        "Open the BMT B2B Wholesale Pricing app in Shopify Admin",
        "Select Forms in the app navigation",
        "Review your existing forms or prepare to create a new form",
      ],
      icon: ClipboardList
    },
    {
      step: 2,
      title: "Create a New Form",
      description: "Start a new form and choose the preconfigured wholesale registration template.",
      details: [
        "Click Create Form on the forms overview page",
        "Browse the available form templates",
        "Select Wholesale Registration Form",
      ],
      icon: FileText
    },
    {
      step: 3,
      title: "Explore the Form Builder",
      description: "Use the three main tabs to configure the form, customize its appearance, and manage email settings.",
      details: [
        "Configuration controls the form content, fields, pages, and submission settings",
        "Appearance controls the layout, width, typography, and colors",
        "Emails contains the form's email settings",
        "Use the live preview to see changes while you work",
      ],
      icon: Settings
    },
    {
      step: 4,
      title: "Configure the Form Name and Header",
      description: "In Configuration, set the internal form name and customize the information customers see at the top of the form.",
      details: [
        "Click Form Name to update the form name, page title, and handle",
        "Edit the Header Name shown to customers",
        "Add or revise the form Description",
        "Check each change in the live preview",
      ],
      icon: Type
    },
    {
      step: 5,
      title: "Edit Existing Form Fields",
      description: "Select any field in the form to tailor the information requested from wholesale applicants.",
      details: [
        "Click an existing field, such as First Name or Email Address",
        "Change the field label, placeholder, and help text",
        "Choose the field alignment",
        "Mark the field as required or optional",
      ],
      icon: Settings
    },
    {
      step: 6,
      title: "Add Pages and Form Elements",
      description: "Extend the form with additional pages or fields when you need to collect more information.",
      details: [
        "Use the Pages area and click Add Page to create Page 2 or more steps",
        "Click Add Element to insert a new field",
        "Choose from available elements such as rich text, dropdown, terms and conditions, newsletter, checkbox, date, number, or file upload",
        "Arrange related fields across pages to keep longer forms clear",
      ],
      icon: FileText
    },
    {
      step: 7,
      title: "Configure a File Upload Field",
      description: "Add File Upload when applicants need to submit certificates or supporting documents.",
      details: [
        "Select File Upload from the available form elements",
        "Set the field name and help text",
        "Choose the maximum file size and whether the field is required",
        "Confirm that the upload area appears in the live form preview",
      ],
      icon: FileText
    },
    {
      step: 8,
      title: "Customize the Form Appearance",
      description: "Open Appearance and adjust the form to match your storefront branding.",
      details: [
        "Choose the Default or Boxed layout",
        "Set the form width",
        "Select the font style and font size",
        "Adjust the background, heading, text, primary button, and secondary button colors",
        "Review the result in the live preview",
      ],
      icon: Palette
    },
    {
      step: 9,
      title: "Add Extra Form Elements",
      description: "Choose from additional Select and Miscellaneous elements to collect the information your wholesale application needs.",
      details: [
        "Rich Text — add instructions, headings, or other helpful information without asking the applicant to enter a response",
        "Dropdown — let applicants choose one option from a predefined list, such as business type or country",
        "Terms and Conditions — ask applicants to review and accept your wholesale terms before submitting the form",
        "Newsletter — let applicants choose whether they want to receive marketing news and updates",
        "Checkbox — allow applicants to select or confirm one or more options",
        "Date — collect a specific date, such as a business start date or preferred delivery date",
        "Number — collect numeric information, such as the number of locations or estimated order quantity",
        "File Upload — allow applicants to attach supporting documents, such as a resale certificate or business license",
        "Captcha Verification — help protect the form from spam and automated submissions",
        "Add each element where it best fits in the form, then customize its label, help text, options, and required status where available",
        "Check the live preview to confirm every added element is clear and correctly positioned",
      ],
      icon: ClipboardList
    },
    {
      step: 10,
      title: "Configure Approval Settings",
      description: "Choose whether submitted wholesale registrations require review or are approved automatically.",
      details: [
        "Turn on Auto Approval if eligible registrations should be approved instantly",
        "Leave Auto Approval off when each submission should be reviewed manually",
        "Confirm the selected approval flow before activating the form",
      ],
      icon: ToggleRight
    },
    {
      step: 11,
      title: "Set the Default Customer Tag",
      description: "Assign a Shopify customer tag to approved registrants so they can be identified and targeted with wholesale rules.",
      details: [
        "Enter a Default Customer Tag, such as wholesale",
        "The tag is assigned after a registration is approved",
        "Use the same tag in customer-specific wholesale pricing rules when required",
      ],
      icon: Users
    },
    {
      step: 12,
      title: "Activate and Save the Form",
      description: "Make the form available for new submissions and save the completed configuration.",
      details: [
        "Click Mark as Active so the form can accept new registrations",
        "Review the Configuration, Appearance, and approval settings",
        "Click Save to publish the form",
      ],
      icon: Save
    },
    {
      step: 13,
      title: "Copy and Test the Form URL",
      description: "Use the generated URL to open the live registration form and confirm that it is ready for applicants.",
      details: [
        "Copy the generated form URL after saving",
        "Paste the URL into a browser",
        "Confirm the live form displays the correct fields, pages, styling, and file upload options",
        "Submit a test registration before sharing the link with customers",
      ],
      icon: Eye
    }
  ];

  const troubleshooting = [
    {
      issue: "Registration form is not accepting submissions",
      solutions: [
        "Confirm the form is marked as Active",
        "Save any pending changes",
        "Open the generated form URL in a new browser tab",
        "Check that all required fields are completed during testing"
      ]
    },
    {
      issue: "Applicants are approved unexpectedly",
      solutions: [
        "Review the Auto Approval setting",
        "Turn Auto Approval off when submissions must be reviewed manually",
        "Save the form after changing the approval setting",
        "Submit a test registration to confirm the intended flow"
      ]
    },
    {
      issue: "File upload is not working as expected",
      solutions: [
        "Confirm the File Upload element is present on the correct page",
        "Review its permitted file size and required status",
        "Use the help text to tell applicants what document to upload",
        "Test the field from the live form URL"
      ]
    },
    {
      issue: "Form styling does not match the storefront",
      solutions: [
        "Review the Default or Boxed layout selection",
        "Check the form width, font style, and font size",
        "Confirm the background, text, and button colors",
        "Use the live preview while making appearance changes"
      ]
    }
  ];

  const faqs = [
    {
      question: "Which template should I use for wholesale registrations?",
      answer: "Select the Wholesale Registration Form template. It provides a preconfigured starting point for collecting customer and company details from wholesale applicants."
    },
    {
      question: "Can I add custom fields or multiple pages?",
      answer: "Yes. Use Add Element to insert fields such as dropdowns, checkboxes, dates, numbers, terms and conditions, or file uploads. Use Add Page when you want to organize a longer form into multiple steps."
    },
    {
      question: "What can applicants upload through the form?",
      answer: "Add a File Upload field for certificates or supporting documents. You can customize its name and help text, set the maximum file size, and make it required or optional."
    },
    {
      question: "How does Auto Approval work?",
      answer: "When Auto Approval is enabled, submitted registrations can be approved instantly. Leave it disabled when you want to review each application before approval."
    },
    {
      question: "What is the Default Customer Tag used for?",
      answer: "The Default Customer Tag, such as 'wholesale', is assigned to approved registrants. You can use that Shopify customer tag to target the correct buyers with wholesale pricing rules."
    },
    {
      question: "How do I check the form before sharing it?",
      answer: "Mark the form as Active, save it, copy the generated form URL, and open it in a browser. Review the fields, pages, appearance, and upload options, then submit a test registration."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Configure Wholesale Registration Forms"
        description="Configure Shopify wholesale registration forms with custom fields, file uploads, branding, auto approval, customer tags, and a live form URL."
        canonicalPath="/registration-form-guide"
        jsonLd={buildGuideJsonLd({ title: "How to Configure Wholesale Registration Forms", description: "Configure Shopify wholesale registration forms with custom fields, file uploads, branding, auto approval, customer tags, and a live form URL.", path: "/registration-form-guide", steps, faqs, })}
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
                Customize wholesale registration forms, collect supporting files, control approvals, and onboard new B2B customers.
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
                <strong>Before you begin:</strong> Open BMT B2B Wholesale Pricing in Shopify Admin and decide which customer and company details your wholesale application should collect.
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
                Watch the setup walkthrough, then use the updated steps below to configure the current form builder.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/Configuring%20Wholesale%20Registration%20Forms.mp4" type="video/mp4" />
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
                Follow the current BMT app workflow to build, style, activate, and test a wholesale registration form.
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
                Check these settings first if submissions, approvals, uploads, or styling do not work as expected.
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
