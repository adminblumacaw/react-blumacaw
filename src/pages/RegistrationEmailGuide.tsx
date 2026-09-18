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
  ArrowLeft,
  ArrowRight,
  AtSign,
  CheckCircle,
  ClipboardList,
  Eye,
  Mail,
  Save,
  Send,
  Server,
  Settings,
  ShieldCheck,
  Signature,
  ToggleRight,
  UserRound,
  Zap,
  AlertTriangle,
} from "lucide-react";

const RegistrationEmailGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Open Your Registration Form",
      description: "Open an existing registration form in BMT B2B Wholesale Pricing and enter its settings.",
      details: [
        "Go to Forms in the app navigation",
        "Find the registration form you want to update",
        "Click Edit to open the form builder",
      ],
      icon: ClipboardList,
    },
    {
      step: 2,
      title: "Open the Emails Tab",
      description: "Select Emails from the tabs at the top of the form builder.",
      details: [
        "Locate the Configuration, Appearance, and Emails tabs",
        "Click Emails",
        "Use this area to manage notifications for the selected registration form",
      ],
      icon: Mail,
    },
    {
      step: 3,
      title: "Review Delivery and Email Settings",
      description: "The Emails tab separates delivery controls from individual email templates.",
      details: [
        "Delivery controls how form emails are sent",
        "Emails lists the available notification formats",
        "Review both areas before activating notifications",
      ],
      icon: Settings,
    },
    {
      step: 4,
      title: "Choose an Email to Customize",
      description: "Available email formats are inactive by default and can be configured individually.",
      details: [
        "Review the available email formats",
        "Click Edit beside the email you want to customize",
        "Configure each notification separately for its intended audience",
      ],
      icon: AtSign,
    },
    {
      step: 5,
      title: "Set the Recipient, Subject, and Body",
      description: "Define who receives the notification and customize the message content.",
      details: [
        "Set the recipient, such as the merchant",
        "Enter a clear subject line",
        "Write the email body",
        "Switch between Rich Text and HTML formats when needed",
      ],
      icon: UserRound,
    },
    {
      step: 6,
      title: "Preview the Email",
      description: "Check the rendered message before sending or activating it.",
      details: [
        "Scroll to the preview at the bottom of the configuration page",
        "Review the layout, wording, and formatting",
        "Return to the editor to make any required changes",
      ],
      icon: Eye,
    },
    {
      step: 7,
      title: "Send a Test Email",
      description: "Send the configured notification to your own inbox to confirm the final result.",
      details: [
        "Enter your email address in the test email field",
        "Click Send",
        "Check your inbox and review the sender, subject, body, and formatting",
      ],
      icon: Send,
    },
    {
      step: 8,
      title: "Activate the Email Notification",
      description: "Enable the notification after its content and test result are correct.",
      details: [
        "Set the email status to Active",
        "Only activate templates that are ready to send",
        "Repeat the edit, test, and activation process for other email formats",
      ],
      icon: ToggleRight,
    },
    {
      step: 9,
      title: "Open Delivery Settings",
      description: "Use Change Delivery to choose the service that sends registration emails.",
      details: [
        "Click Change Delivery in the Delivery section",
        "The app opens the notification delivery settings",
        "Review the available sending methods before choosing one",
      ],
      icon: Server,
    },
    {
      step: 10,
      title: "Choose a Delivery Method",
      description: "Select the sending option that matches your store's email setup.",
      details: [
        "Built-in Sender uses the platform's default server",
        "Klaviyo Integration uses your Klaviyo private API key",
        "SMTP/API uses provider server details and credentials, such as Google, SendGrid, Trello, or Zoho",
        "Enter the required connection details for the selected method",
      ],
      icon: ShieldCheck,
    },
    {
      step: 11,
      title: "Save Delivery Settings",
      description: "Save the selected method so active notifications use it for delivery.",
      details: [
        "Review the delivery details for accuracy",
        "Click Save",
        "Registration emails will use the chosen delivery method",
      ],
      icon: Save,
    },
    {
      step: 12,
      title: "Set the Sender Identity",
      description: "Choose the name customers and merchants see as the email sender.",
      details: [
        "Locate the Sender Identity setting",
        "Edit the sender name",
        "Use a recognizable store or brand name",
        "Save the sender identity and send another test when needed",
      ],
      icon: Signature,
    },
  ];

  const troubleshooting = [
    {
      issue: "A registration email is not being sent",
      solutions: [
        "Confirm the email template status is Active",
        "Verify that the selected delivery method is saved",
        "Check the recipient address and required delivery credentials",
        "Send a test email to isolate the template or delivery setting",
      ],
    },
    {
      issue: "The test email does not match the preview",
      solutions: [
        "Check whether the body is set to Rich Text or HTML",
        "Review the message for unsupported or incomplete HTML",
        "Send the test to the same email client your team normally uses",
        "Simplify the formatting and send another test",
      ],
    },
    {
      issue: "The sender name is incorrect",
      solutions: [
        "Open the Sender Identity setting",
        "Update the name displayed as the email sender",
        "Save the change",
        "Send another test email to confirm the updated identity",
      ],
    },
    {
      issue: "A connected delivery service is not working",
      solutions: [
        "Review the API key, server details, username, and credentials",
        "Confirm the selected method matches the details you entered",
        "Save the delivery settings again after making corrections",
        "Use the Built-in Sender while you verify the external service configuration",
      ],
    },
  ];

  const faqs = [
    {
      question: "Where do I configure registration form emails?",
      answer: "Open the registration form, click Edit, and select the Emails tab. This area contains Delivery settings and the available email templates.",
    },
    {
      question: "Are registration email templates active by default?",
      answer: "No. Available email formats are inactive by default. Edit and test each template, then set its status to Active when it is ready.",
    },
    {
      question: "Can I use HTML for the email body?",
      answer: "Yes. The email editor lets you switch between Rich Text and HTML formats for the message body.",
    },
    {
      question: "How do I test a registration email?",
      answer: "Enter your email address in the test email field, click Send, and check your inbox. Review the sender name, recipient, subject, body, and formatting before activation.",
    },
    {
      question: "Which delivery methods are available?",
      answer: "You can use the Built-in Sender, connect Klaviyo with a private API key, or configure SMTP/API delivery with supported provider server details and credentials.",
    },
    {
      question: "What is Sender Identity?",
      answer: "Sender Identity is the name displayed as the sender of the email. Set it to a recognizable store or brand name so recipients can identify your messages.",
    },
  ];

  const title = "Configure Registration Form Email Functionality";
  const description = "Configure Shopify wholesale registration emails, customize templates, send tests, activate notifications, choose delivery methods, and set sender identity.";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={description}
        canonicalPath="/registration-email-guide"
        jsonLd={buildGuideJsonLd({ title, description, path: "/registration-email-guide", steps, faqs })}
      />
      <Header />
      <main className="pt-20">
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
                Configure <span className="font-semibold text-primary">Email Functionality</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Customize registration notifications, test email content, choose a delivery method, and present a consistent sender identity.
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

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Alert className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Before you begin:</strong> Create and save your registration form, then decide which notifications you want to send and who should receive them.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Tutorial</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Review the registration form walkthrough, then follow the email configuration steps below.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video controls className="w-full h-full object-cover" poster="/placeholder.svg">
                  <source src="https://storage.googleapis.com/bmt-videos/Configuring%20Email%20Functionality%20Guide.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="setup-guide" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Step-by-Step Configuration Guide</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to configure content, delivery, activation, and sender identity for registration emails.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <Card key={step.step} id={`step-${step.step}`} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Badge variant="outline" className="mb-2">Step {step.step}</Badge>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">{step.description}</CardDescription>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
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

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Issues and Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Check these settings first if a template, test message, sender identity, or delivery method does not work as expected.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {troubleshooting.map((item) => (
                <Card key={item.issue} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                      {item.issue}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-sm mb-3">Solutions:</p>
                    <ul className="space-y-2">
                      {item.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Common questions about registration form email functionality</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Configuring Registration Emails?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use our support options for help with templates, testing, and delivery settings.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="/#support">View Support Options</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationEmailGuide;
