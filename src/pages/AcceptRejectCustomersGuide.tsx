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
import {
  Users,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Eye,
  UserCheck,
  UserX,
  Search,
  MoreHorizontal,
  ClipboardList
} from "lucide-react";

const AcceptRejectCustomersGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Go to Customer Management",
      description: "Navigate to the Customer Management section in the BMT B2B Wholesale Pricing dashboard.",
      details: [
        "Open your Shopify admin dashboard",
        "Navigate to the BMT B2B Wholesale Pricing app",
        "Click on 'Customer Management' in the app menu"
      ],
      icon: Users
    },
    {
      step: 2,
      title: "View Customer Tabs",
      description: "Once in Customer Management, you'll see four tabs: Approved, Pending, and Rejected.",
      details: [
        "Review the tab layout to understand customer statuses",
        "Approved tab shows accepted customers",
        "Pending tab shows customers awaiting review",
        "Rejected tab shows declined customers"
      ],
      icon: ClipboardList
    },
    {
      step: 3,
      title: "Open the Pending Tab",
      description: "Click on the Pending tab to view customers awaiting approval.",
      details: [
        "Click the 'Pending' tab",
        "Review the list of customers waiting for approval",
        "Each entry shows basic customer information"
      ],
      icon: Search
    },
    {
      step: 4,
      title: "Open Customer Actions Menu",
      description: "Find the customer you want to review. Click the three dots beside their name to open the actions menu.",
      details: [
        "Locate the customer in the pending list",
        "Click the three-dot menu icon beside their name",
        "The actions menu will appear with available options"
      ],
      icon: MoreHorizontal
    },
    {
      step: 5,
      title: "Preview Customer Details",
      description: "Select Preview to check the customer's details including status, customer tag, and additional information.",
      details: [
        "Click 'Preview' from the actions menu",
        "Review the customer's status (Pending)",
        "Check the assigned customer tag",
        "Review any additional registration information"
      ],
      icon: Eye
    },
    {
      step: 6,
      title: "Approve or Reject the Customer",
      description: "Choose to Approve or Reject the customer. If you click Reject, you must provide a reason for the rejection.",
      details: [
        "Click 'Approve' to grant wholesale access",
        "Click 'Reject' to decline the customer",
        "If rejecting, enter a clear reason for the rejection",
        "Submit your decision to update the customer's status"
      ],
      icon: UserCheck
    },
    {
      step: 7,
      title: "Verify Updated Status",
      description: "After submitting, the customer moves to the appropriate tab. Rejected customers appear under Rejected, approved customers under Approved.",
      details: [
        "Check the Approved tab for newly approved customers",
        "Check the Rejected tab for declined customers",
        "Verify the customer's status has been updated correctly",
        "Use the tabs to monitor customer statuses at a glance"
      ],
      icon: CheckCircle
    }
  ];

  const troubleshooting = [
    {
      issue: "Customer not appearing in Pending tab",
      solutions: [
        "Verify the customer has submitted a registration form",
        "Check if the customer was already approved or rejected previously",
        "Refresh the Customer Management page",
        "Ensure the registration form is active and linked correctly"
      ]
    },
    {
      issue: "Unable to approve or reject a customer",
      solutions: [
        "Ensure you have admin permissions in the app",
        "Try refreshing the page and attempting again",
        "Check your internet connection",
        "Contact support if the issue persists"
      ]
    },
    {
      issue: "Approved customer not seeing wholesale prices",
      solutions: [
        "Verify the customer has the correct wholesale tag assigned",
        "Check that pricing rules target the customer's tag",
        "Ensure the customer is logged into their account",
        "Review wholesale pricing rule configuration"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I change a customer's status after approval or rejection?",
      answer: "Yes, you can revisit a customer's profile and update their status. Move them between Approved and Rejected as your business needs change."
    },
    {
      question: "Is a rejection reason required?",
      answer: "Yes, when rejecting a customer you must provide a reason. This helps maintain clear records and can be communicated to the customer."
    },
    {
      question: "What happens to a customer's tag when they are approved?",
      answer: "When approved, the customer automatically receives the default customer tag configured in your registration form settings, enabling them to access wholesale pricing."
    },
    {
      question: "Can I bulk approve or reject customers?",
      answer: "Currently, customers are reviewed individually to ensure proper vetting. This allows you to carefully review each application before making a decision."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Accept or Reject Wholesale Customers on Shopify"
        description="Learn how to approve or reject wholesale customer applications on Shopify using BMT B2B Wholesale Pricing. Manage B2B buyer access with registration form workflows."
        canonicalPath="/accept-reject-customers-guide"
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
                <Users className="w-4 h-4 mr-2" />
                Customer Management
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="font-semibold text-primary">Accept or Reject</span> Customers
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Learn how to review, approve, or reject wholesale customer applications to manage your B2B onboarding
              </p>
              <Button size="lg" className="gradient-primary" asChild>
                <a href="#setup-guide">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Guide
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
                <strong>Prerequisites:</strong> Ensure you have BMT B2B Wholesale Pricing app installed, administrative access to your Shopify store, and a registration form configured.
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
                Watch this step-by-step video guide to accept or reject customers
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/customer_approval_and_rejection.mp4" type="video/mp4" />
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
                Follow these steps to approve or reject customer applications
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
                Resolve common customer approval issues
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
                Common questions about the customer approval process
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
            <h2 className="text-3xl font-bold mb-4">Need Help with Customer Management?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you manage your wholesale customer approvals
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

export default AcceptRejectCustomersGuide;
