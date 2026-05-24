import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  Settings, 
  Users, 
  DollarSign,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  ShoppingCart,
  Target,
  Zap
} from "lucide-react";

const WholesalePricingGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Check Wholesale Pricing Feature Status",
      description: "First, open the admin dashboard and visit the B2B wholesale pricing feature site. Notice that the app embed displays as switched off.",
      details: [
        "Open your Shopify admin dashboard",
        "Navigate to the BMT B2B Wholesale Pricing app",
        "Check the current status of the app embed (should show as 'off')",
        "Take note of the current configuration"
      ],
    },
    {
      step: 2,
      title: "Go to the Online Store Section",
      description: "Head to the Online Store section. Here, locate the theme that's actively running on your store.",
      details: [
        "In your Shopify admin, click on 'Online Store' in the left navigation",
        "Look for your current active theme (usually marked with 'Current theme')",
        "Identify which theme is currently live on your store",
        "Ensure you're working with the correct theme"
      ],
    },
    {
      step: 3,
      title: "Customize the Theme",
      description: "Click Customize on your active theme to access theme customization options.",
      details: [
        "Click the 'Customize' button on your active theme",
        "This will open the theme editor in a new tab",
        "Wait for the theme customization interface to load",
        "You'll now have access to theme settings and app embeds"
      ],
    },
    {
      step: 4,
      title: "Enable App Embed",
      description: "A new URL appears, letting you access theme customization options. Go to the App Embed section and enable BMT B2B wholesale pricing.",
      details: [
        "In the theme customizer, look for the 'App embeds' section in the left sidebar",
        "Find 'BMT B2B wholesale pricing' in the list of available app embeds",
        "Toggle the switch to 'ON' to enable the wholesale pricing feature",
        "Click 'Save' to confirm and apply your changes"
      ]
    },
    {
      step: 5,
      title: "Confirm Status in the App",
      description: "Return to the app. The app embed now shows as switched on. You're all set! Wholesale pricing is now active for your store.",
      details: [
        "Navigate back to the BMT B2B Wholesale Pricing app",
        "Verify that the app embed status now shows as 'ON'",
        "Check that all wholesale pricing features are now available",
        "Your store is now ready for B2B wholesale pricing!"
      ]
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Customer Group Pricing",
      description: "Set different pricing tiers for different wholesale customer groups"
    },
    {
      icon: DollarSign,
      title: "Flexible Discount Rules",
      description: "Apply percentage, fixed amount, or tiered discounts based on quantity"
    },
    {
      icon: ShoppingCart,
      title: "Minimum Order Values",
      description: "Set minimum purchase requirements for wholesale customers"
    },
    {
      icon: Target,
      title: "Product-Specific Pricing",
      description: "Override general rules with custom pricing for specific products"
    }
  ];

  const troubleshooting = [
    {
      issue: "Wholesale prices not showing",
      solutions: [
        "Verify that wholesale pricing is enabled in app settings",
        "Check that the customer is assigned to a wholesale customer group",
        "Ensure products have wholesale prices configured",
        "Clear browser cache and try again"
      ]
    },
    {
      issue: "Customer can't see wholesale prices",
      solutions: [
        "Confirm customer account is approved for wholesale",
        "Check customer group assignments",
        "Verify customer is logged into their account",
        "Review wholesale pricing rules configuration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Enable Wholesale Pricing on Shopify — Setup Guide"
        description="Step-by-step guide to enable wholesale pricing on your Shopify store using BMT B2B Wholesale Pricing app. Learn how to activate the app embed and start offering B2B prices."
        canonicalPath="/wholesale-pricing-guide"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Settings className="w-4 h-4 mr-2" />
              Support Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enable <span className="font-semibold text-primary">Wholesale Pricing</span> Feature
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Step-by-step guide to activate and configure wholesale pricing for your B2B customers
            </p>
            <Button size="lg" className="gradient-primary" asChild>
              <a href="#setup-guide">
                <Zap className="w-5 h-5 mr-2" />
                Start Setup
              </a>
            </Button>
          </div>
        </section>

        {/* Back to Documentation */}
        <section className="py-6 px-4">
          <div className="container mx-auto">
            <Button variant="ghost" asChild className="mb-4">
              <a href="/documentation" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Documentation
              </a>
            </Button>
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

        {/* Video Tutorial */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Video Tutorial
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Watch this step-by-step video guide to enable wholesale pricing
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/Enable%20Wholesale%20Pricing%20Feature.mp4" type="video/mp4" />
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
                Setup Guide
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to enable wholesale pricing functionality
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">{step.step}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Issues & Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick fixes for the most common setup problems
              </p>
            </div>

            <div className="space-y-6">
              {troubleshooting.map((item, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                      {item.issue}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any setup issues or questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary" asChild>
                <a href="mailto:support@blumacawtech.com">
                  Contact Support
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/documentation">
                  View Full Documentation
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

export default WholesalePricingGuide;