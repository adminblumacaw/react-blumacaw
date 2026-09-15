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
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  CloudCog,
  Copy,
  FilePlus2,
  KeyRound,
  MousePointerClick,
  Save,
  Settings,
  ShieldCheck,
  Store,
  Tag,
  ToggleRight,
  Zap,
} from "lucide-react";

const RegistrationCaptchaGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Open the Forms Section",
      description: "Open Forms from the BMT B2B Wholesale Pricing app menu.",
      details: [
        "Open BMT B2B Wholesale Pricing in your Shopify admin",
        "Select Forms from the app navigation",
        "Review your existing wholesale registration forms",
      ],
      icon: ClipboardList,
    },
    {
      step: 2,
      title: "Edit Your Registration Form",
      description: "Locate the wholesale registration form where you want to add CAPTCHA protection.",
      details: [
        "Find the correct registration form",
        "Click Edit to open the form builder",
        "Confirm you are editing the intended form before making changes",
      ],
      icon: MousePointerClick,
    },
    {
      step: 3,
      title: "Add a New Element",
      description: "Use the form builder to add another field to your registration form.",
      details: [
        "Click Add Element",
        "Review the available form elements",
        "Choose the location where CAPTCHA should appear in the form",
      ],
      icon: FilePlus2,
    },
    {
      step: 4,
      title: "Add CAPTCHA Verification",
      description: "Choose CAPTCHA Verification from the available elements and add it to the form.",
      details: [
        "Select CAPTCHA Verification",
        "Place the CAPTCHA element near the end of the registration form",
        "Check the form preview to confirm that the element is present",
      ],
      icon: ShieldCheck,
    },
    {
      step: 5,
      title: "Save the Registration Form",
      description: "Save the form so the CAPTCHA element is included in its configuration.",
      details: [
        "Click Save Form",
        "Wait for the save confirmation",
        "Keep the form available while you configure its CAPTCHA keys",
      ],
      icon: Save,
    },
    {
      step: 6,
      title: "Open General Settings",
      description: "Open Settings from the app menu and select the General tab.",
      details: [
        "Select Settings in the app navigation",
        "Open the General tab",
        "Find the CAPTCHA Verification section",
      ],
      icon: Settings,
    },
    {
      step: 7,
      title: "Open the Google reCAPTCHA Console",
      description: "Use the link in CAPTCHA Verification settings to open Google’s reCAPTCHA Admin Console.",
      details: [
        "Click Google reCAPTCHA Admin Console",
        "Sign in to the Google account used to manage your store services if prompted",
        "Keep the BMT settings page open in another tab",
      ],
      icon: CloudCog,
    },
    {
      step: 8,
      title: "Create a reCAPTCHA Project",
      description: "Create a reCAPTCHA configuration for your Shopify store.",
      details: [
        "Click Create in the Google reCAPTCHA Admin Console",
        "Enter a descriptive label for the configuration",
        "Use a name that makes the store easy to identify later",
      ],
      icon: Tag,
    },
    {
      step: 9,
      title: "Choose reCAPTCHA v2",
      description: "Select the visible checkbox challenge required by the registration form.",
      details: [
        "Choose Challenge (v2)",
        "Select the “I’m not a robot” tick box option",
        "Do not choose a different reCAPTCHA type for this setup",
      ],
      icon: ToggleRight,
    },
    {
      step: 10,
      title: "Add Your Store Domain",
      description: "Authorize the main domain where customers will use the registration form.",
      details: [
        "Enter only the domain name, without https:// or page paths",
        "Use your storefront domain, such as example.com",
        "Add any other storefront domain where the same form will appear, when applicable",
      ],
      icon: Store,
    },
    {
      step: 11,
      title: "Confirm the Google Cloud Project",
      description: "Make sure the reCAPTCHA configuration is assigned to the correct Google Cloud project.",
      details: [
        "Review the selected Google Cloud project",
        "Choose the project used for your Shopify store, or create an appropriate project",
        "Confirm that you have permission to manage the selected project",
      ],
      icon: CloudCog,
    },
    {
      step: 12,
      title: "Submit the reCAPTCHA Configuration",
      description: "Review the settings and create the reCAPTCHA keys.",
      details: [
        "Confirm the label, reCAPTCHA type, domains, and project",
        "Accept Google’s required terms when shown",
        "Click Submit",
      ],
      icon: CheckCircle,
    },
    {
      step: 13,
      title: "Copy the Site Key and Secret Key",
      description: "Copy both keys generated by Google for the new reCAPTCHA configuration.",
      details: [
        "Copy the Site Key",
        "Copy the Secret Key",
        "Treat the Secret Key as private and do not share or publish it",
      ],
      icon: Copy,
    },
    {
      step: 14,
      title: "Save the Keys in BMT",
      description: "Return to CAPTCHA Verification settings and add the generated credentials.",
      details: [
        "Paste the Site Key into the Site Key field",
        "Paste the Secret Key into the Secret Key field",
        "Save the CAPTCHA settings, then test the registration form on your storefront",
      ],
      icon: KeyRound,
    },
  ];

  const troubleshooting = [
    {
      issue: "CAPTCHA does not appear on the registration form",
      solutions: [
        "Confirm that CAPTCHA Verification was added as a form element",
        "Save the registration form after adding the element",
        "Verify that both the Site Key and Secret Key are saved in General settings",
        "Refresh the storefront registration page after saving",
      ],
    },
    {
      issue: "The domain is invalid or not accepted",
      solutions: [
        "Enter only the domain name without https://, a slash, or a page path",
        "Use the storefront domain where the registration form is displayed",
        "Add each storefront domain that customers may use",
        "Save the domain list in Google before copying the keys",
      ],
    },
    {
      issue: "CAPTCHA shows an invalid key error",
      solutions: [
        "Confirm that the Site Key and Secret Key belong to the same reCAPTCHA configuration",
        "Check that reCAPTCHA v2 with the “I’m not a robot” checkbox was selected",
        "Confirm that the current storefront domain is included in Google reCAPTCHA",
        "Copy and paste the keys again without extra spaces",
      ],
    },
    {
      issue: "Customers cannot submit the form",
      solutions: [
        "Complete the CAPTCHA checkbox before submitting the test form",
        "Check the form on the exact domain registered in Google reCAPTCHA",
        "Confirm that the CAPTCHA settings and the registration form were both saved",
        "Test in a private browser window to rule out cached settings",
      ],
    },
  ];

  const faqs = [
    {
      question: "Why should I add CAPTCHA to a wholesale registration form?",
      answer: "CAPTCHA helps prevent bots and automated spam submissions, keeping your wholesale applications cleaner and easier to review.",
    },
    {
      question: "Which reCAPTCHA type should I select?",
      answer: "Choose reCAPTCHA v2 and select the “I’m not a robot” checkbox option. This is the challenge type used by the registration form setup in this guide.",
    },
    {
      question: "What should I enter in the domain field?",
      answer: "Enter the main storefront domain without https:// or a page path. For example, enter example.com rather than https://example.com/pages/wholesale.",
    },
    {
      question: "Where do I paste the Google reCAPTCHA keys?",
      answer: "In BMT B2B Wholesale Pricing, open Settings, select the General tab, find CAPTCHA Verification, and paste the Site Key and Secret Key into their matching fields.",
    },
    {
      question: "Is the reCAPTCHA Secret Key safe to share?",
      answer: "No. Keep the Secret Key private. Only paste it into the CAPTCHA Verification settings and do not publish it in storefront content or share it publicly.",
    },
    {
      question: "How do I confirm CAPTCHA is working?",
      answer: "Open the published registration form on your storefront, complete the CAPTCHA checkbox, and submit a test application. Also confirm that submission is blocked when CAPTCHA is not completed.",
    },
  ];

  const title = "Configure CAPTCHA for Wholesale Registration Forms";
  const description = "Add Google reCAPTCHA v2 to Shopify wholesale registration forms, configure your store domain, save Site and Secret Keys, and block spam signups.";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={description}
        canonicalPath="/registration-captcha-guide"
        jsonLd={buildGuideJsonLd({ title, description, path: "/registration-captcha-guide", steps, faqs })}
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
                Configure <span className="font-semibold text-primary">CAPTCHA Verification</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Protect your wholesale registration form from bots and unwanted spam signups with Google reCAPTCHA v2.
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
                <strong>Before you begin:</strong> Have your storefront domain ready and use a Google account with permission to create reCAPTCHA keys.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Tutorial</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Review the registration form walkthrough, then follow the CAPTCHA configuration steps below.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video controls className="w-full h-full object-cover" poster="/placeholder.svg">
                  <source src="https://storage.googleapis.com/bmt-videos/wholesale_registration.mp4" type="video/mp4" />
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
                Add CAPTCHA to the form, create Google reCAPTCHA v2 keys, and connect them to BMT.
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
                Check these settings first if CAPTCHA does not appear or prevents registration form submissions.
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
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Common questions about CAPTCHA verification for registration forms</p>
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
            <h2 className="text-3xl font-bold mb-4">Need Help Configuring CAPTCHA?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use our support options for help adding CAPTCHA, registering your domain, or testing the form.
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

export default RegistrationCaptchaGuide;
