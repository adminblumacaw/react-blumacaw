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
  Eye,
  FileText,
  Languages,
  ListChecks,
  Plus,
  Save,
  Settings,
  SlidersHorizontal,
  ToggleRight,
  Type,
  Zap,
} from "lucide-react";

const RegistrationTranslationsGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Open Settings",
      description: "Open the app settings to access registration form configuration options.",
      details: [
        "Open BMT B2B Wholesale Pricing",
        "Click Settings in the app navigation",
        "Use this area to manage languages and translated form content",
      ],
      icon: Settings,
    },
    {
      step: 2,
      title: "Select Translation",
      description: "Open the Translation area from the Settings menu.",
      details: [
        "Locate Translation in the settings menu",
        "Click Translation",
        "The language management page will open",
      ],
      icon: Languages,
    },
    {
      step: 3,
      title: "Review Available Languages",
      description: "Check the languages currently available for your forms.",
      details: [
        "Review both published and unpublished languages",
        "Confirm whether the language you need is already listed",
        "Select an existing language or add a new one",
      ],
      icon: Eye,
    },
    {
      step: 4,
      title: "Add a Language",
      description: "Add another language when it is not already available.",
      details: [
        "Click Add Language",
        "Choose the language you want to support",
        "The new language will appear in the language list",
      ],
      icon: Plus,
    },
    {
      step: 5,
      title: "Choose a Language to Edit",
      description: "Open the language version you want to customize, such as German.",
      details: [
        "Find the required language in the list",
        "Select the language to open its translation settings",
        "Make sure you are editing the intended language before continuing",
      ],
      icon: Languages,
    },
    {
      step: 6,
      title: "Open the Forms Tab",
      description: "Use the Forms tab to view all registration form translation sections.",
      details: [
        "Locate the tabs in the selected language view",
        "Click Forms",
        "Review the available form content sections",
      ],
      icon: ClipboardList,
    },
    {
      step: 7,
      title: "Choose a Form Section",
      description: "Select the part of the form you want to translate, such as Page.",
      details: [
        "Review the available translation sections",
        "Choose Page to edit page-level text",
        "Return to this list later to translate the remaining sections",
      ],
      icon: ListChecks,
    },
    {
      step: 8,
      title: "Select the Registration Form",
      description: "Find the form you want to localize within the selected section.",
      details: [
        "Look under Page for the required form",
        "Select Registration or the relevant form name",
        "The form's translated text will be displayed for review",
      ],
      icon: FileText,
    },
    {
      step: 9,
      title: "Review the Default Translations",
      description: "Check the literal translations provided by the platform before making changes.",
      details: [
        "Read each translated label and message",
        "Confirm the wording fits the context of your registration form",
        "Identify any text that needs a clearer or more natural translation",
      ],
      icon: Eye,
    },
    {
      step: 10,
      title: "Override Translation Text",
      description: "Replace a default translation with your preferred wording when needed.",
      details: [
        "Find the Override field for the text you want to change",
        "Enter your preferred translation",
        "Keep terminology consistent with your store and brand",
      ],
      icon: Type,
    },
    {
      step: 11,
      title: "Translate Every Form Section",
      description: "Repeat the review and override process across all customer-facing sections.",
      details: [
        "Translate Fields and field labels",
        "Translate Upload instructions and messages",
        "Translate Errors and Success messages",
        "Review every section to ensure complete translation coverage",
      ],
      icon: SlidersHorizontal,
    },
    {
      step: 12,
      title: "Save Your Translations",
      description: "Save the completed language content after reviewing all sections.",
      details: [
        "Review your overrides for accuracy and consistency",
        "Click Save",
        "Confirm that the updated text remains visible after saving",
      ],
      icon: Save,
    },
    {
      step: 13,
      title: "Publish the Language",
      description: "Make the translated registration form available by publishing its language version.",
      details: [
        "Return to the language list",
        "Toggle the new language on",
        "Verify that the language is shown as published",
        "Test the registration form in that language on your store",
      ],
      icon: ToggleRight,
    },
  ];

  const troubleshooting = [
    {
      issue: "A language does not appear on the registration form",
      solutions: [
        "Confirm the language has been added in Translation settings",
        "Check that the language is published, not only saved",
        "Verify the same language is enabled for your Shopify store",
        "Open the storefront again and test the language version",
      ],
    },
    {
      issue: "The form still shows a literal or default translation",
      solutions: [
        "Open the correct language and Forms section",
        "Enter your preferred wording in the Override field",
        "Click Save after updating the override",
        "Refresh the registration form and review the text again",
      ],
    },
    {
      issue: "Some registration form text is not translated",
      solutions: [
        "Review Page, Fields, Upload, Errors, and Success sections",
        "Check each section for untranslated labels or messages",
        "Add overrides where the default text is incomplete",
        "Save and test the entire registration process in the selected language",
      ],
    },
    {
      issue: "Translation changes were not retained",
      solutions: [
        "Confirm you clicked Save before leaving the language view",
        "Check that you edited the intended language and form",
        "Re-enter the override and save it again",
        "Reload the settings page to confirm the saved wording",
      ],
    },
  ];

  const faqs = [
    {
      question: "Where do I translate a registration form?",
      answer: "Open Settings, select Translation, choose the language you want to edit, and open the Forms tab. You can then select each form section and update its text.",
    },
    {
      question: "How do I add another language?",
      answer: "On the Translation page, click Add Language and choose the language you want to support. Select it from the language list to review and customize its registration form translations.",
    },
    {
      question: "What is the Override field for?",
      answer: "The platform displays literal translations by default. Use the Override field to replace any default translation with wording that better fits your store, brand, or form context.",
    },
    {
      question: "Which registration form sections should I translate?",
      answer: "Review every available section, including Page, Fields, Upload, Errors, and Success, so the full registration experience is translated consistently.",
    },
    {
      question: "Does saving a translation publish it automatically?",
      answer: "No. After saving your changes, return to the language list and toggle the language on to publish it.",
    },
    {
      question: "Should I test the translated registration form?",
      answer: "Yes. After publishing, open the form in the selected language and complete the full registration flow to check labels, upload instructions, errors, and success messages.",
    },
  ];

  const title = "Configure Registration Form Translations";
  const description = "Translate Shopify wholesale registration forms, override default text, localize fields and messages, and publish language versions with BMT B2B Wholesale Pricing.";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={description}
        canonicalPath="/registration-translations-guide"
        jsonLd={buildGuideJsonLd({ title, description, path: "/registration-translations-guide", steps, faqs })}
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
                Configure <span className="font-semibold text-primary">Translations</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Localize registration forms, refine default translations, and publish a consistent experience in every supported language.
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
                <strong>Before you begin:</strong> Create and save your registration form, then decide which store languages you want customers to use.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Tutorial</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Review the registration form walkthrough, then follow the translation steps below.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video controls className="w-full h-full object-cover" poster="/placeholder.svg">
                  <source src="https://storage.googleapis.com/bmt-videos/Translating%20Registration%20Forms%20Steps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="setup-guide" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Step-by-Step Translation Guide</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to add a language, customize every form section, save your work, and publish the translation.
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
                Check these settings first if a language, override, or translated form does not appear as expected.
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
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Common questions about registration form translations</p>
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
            <h2 className="text-3xl font-bold mb-4">Need Help Translating a Registration Form?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use our support options for help with languages, translation overrides, and publishing.
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

export default RegistrationTranslationsGuide;