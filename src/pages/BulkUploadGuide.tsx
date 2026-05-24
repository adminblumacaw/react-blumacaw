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
  Upload, 
  Palette,
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Download,
  Eye,
  Save
} from "lucide-react";

const BulkUploadGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Navigate to Bulk Upload Feature",
      description: "Navigate to the Bulk upload feature section under the BMT Wholesale Pricing.",
      details: [
        "Open your Shopify admin dashboard",
        "Go to the BMT B2B Wholesale Pricing app",
        "Locate the Bulk upload feature section",
        "Ensure you have proper access permissions"
      ],
      icon: Upload
    },
    {
      step: 2,
      title: "Open Theme Editor",
      description: "Begin the configuration process by setting up the app block. To do this, head over to the Open Theme editor.",
      details: [
        "Click on 'Open Theme editor' button in the bulk upload section",
        "This will redirect you to your Shopify theme customization area",
        "Wait for the theme editor interface to load completely",
        "Ensure you're working with the correct active theme"
      ],
      icon: Settings
    },
    {
      step: 3,
      title: "Add CSV Upload Block to Header",
      description: "Once you're in the theme editor, navigate to the header and add the blue Macau CSV upload. After adding this, hit the Save button.",
      details: [
        "In the theme editor, locate the header section",
        "Look for available app blocks in the sidebar",
        "Find and add the 'BMT CSV Upload' block to the header",
        "Position the block appropriately within your header layout",
        "Click 'Save' to apply the changes to your theme"
      ],
      icon: Download
    },
    {
      step: 4,
      title: "Configure Button Settings",
      description: "Now, return to the feature section. The next step involves configuring the bulk order, which is essentially the button settings. Here, you're able to customize the upload CSV button to match your store's design system.",
      details: [
        "Navigate back to the BMT B2B Wholesale Pricing app",
        "Go to the bulk upload configuration section",
        "Locate the button customization settings",
        "Prepare to customize button appearance and styling"
      ],
      icon: Palette
    },
    {
      step: 5,
      title: "Change Button Name",
      description: "Change the Name of the button.",
      details: [
        "Find the button name/text field in the configuration",
        "Enter a descriptive name for your CSV upload button",
        "Consider using clear, action-oriented text like 'Upload CSV' or 'Bulk Upload'",
        "Ensure the name is easily understood by your customers"
      ],
      icon: FileText
    },
    {
      step: 6,
      title: "Customize Button Color",
      description: "Alter the Color of the button.",
      details: [
        "Locate the button color settings",
        "Choose a color that matches your store's brand palette",
        "Consider contrast and accessibility when selecting colors",
        "Preview how the color looks with your store theme"
      ],
      icon: Palette
    },
    {
      step: 7,
      title: "Advanced Button Styling",
      description: "Modify the Button text color, Font size, Button corner, Radius, and Font systems.",
      details: [
        "Configure button text color for optimal readability",
        "Set appropriate font size for button text",
        "Adjust button corner radius for rounded or sharp edges",
        "Select font family that matches your store's typography",
        "Ensure all styling choices maintain good user experience"
      ],
      icon: Palette
    },
    {
      step: 8,
      title: "Save Button Settings",
      description: "After making all these changes, click on the Save button settings.",
      details: [
        "Review all button customization changes",
        "Ensure all styling options are configured as desired",
        "Click 'Save' or 'Save Settings' button",
        "Wait for confirmation that settings have been saved"
      ],
      icon: Save
    },
    {
      step: 9,
      title: "Configure User Journey Settings",
      description: "Next, adjust the user journey settings. This involves configuring the Button visibility and Post upload workflow. This determines where the user will land after uploading a CSV file, whether it's the cart page or checkout page. Decide if you want to enable the catalog download functionality for the users and who can view the upload CSV button.",
      details: [
        "Configure button visibility settings (who can see the upload button)",
        "Set post-upload workflow destination (cart page or checkout page)",
        "Enable or disable catalog download functionality",
        "Define user permissions for accessing bulk upload features",
        "Consider your customer workflow and business requirements"
      ],
      icon: Eye
    },
    {
      step: 10,
      title: "Save User Journey Settings",
      description: "Once you've made these changes, click on the Save settings button.",
      details: [
        "Review all user journey configuration options",
        "Ensure workflow settings align with your business process",
        "Click 'Save Settings' to apply user journey changes",
        "Verify that all settings have been saved successfully"
      ],
      icon: Save
    },
    {
      step: 11,
      title: "Configure CSV Excel File Settings",
      description: "The final step is the CSV Excel file configuration. Here, you'll decide which Fields to show in the Excel file, whether they're required or not, and what the Name of each field should be.",
      details: [
        "Define which product fields to include in the CSV template",
        "Mark fields as required or optional based on your needs",
        "Customize field names for clarity and user understanding",
        "Consider including fields like SKU, quantity, product title, and variants",
        "Ensure field configuration matches your product catalog structure"
      ],
      icon: FileText
    },
    {
      step: 12,
      title: "Finalize Configuration",
      description: "After making all these changes, click on the Save setting button. You've successfully configured the Bulk upload feature!",
      details: [
        "Review all CSV file configuration settings",
        "Ensure all required fields are properly configured",
        "Click 'Save Settings' to finalize the bulk upload setup",
        "Test the configuration by downloading a sample CSV template",
        "Your bulk upload feature is now ready for use!"
      ],
      icon: CheckCircle
    }
  ];

  const features = [
    {
      icon: Upload,
      title: "CSV Bulk Upload",
      description: "Allow customers to upload CSV files with multiple products for quick ordering"
    },
    {
      icon: Palette,
      title: "Customizable Design",
      description: "Match the upload button styling with your store's design system"
    },
    {
      icon: Eye,
      title: "User Journey Control",
      description: "Configure where customers go after upload and who can access the feature"
    },
    {
      icon: FileText,
      title: "Flexible CSV Structure",
      description: "Define which fields to include and customize field names for clarity"
    }
  ];

  const troubleshooting = [
    {
      issue: "Upload button not appearing on storefront",
      solutions: [
        "Verify that the BMT CSV Upload block is added to your theme header",
        "Check that the app embed is enabled in your theme settings",
        "Ensure button visibility settings allow the target customers to see it",
        "Clear browser cache and refresh the storefront page"
      ]
    },
    {
      issue: "CSV upload failing or showing errors",
      solutions: [
        "Verify CSV file follows the exact template format provided",
        "Check that required fields are filled in the CSV",
        "Ensure product SKUs exist in your store catalog",
        "Verify file size doesn't exceed upload limits"
      ]
    },
    {
      issue: "Button styling not appearing correctly",
      solutions: [
        "Clear browser cache to see updated styling",
        "Check that button settings were saved properly",
        "Verify color codes are in correct format (hex or RGB)",
        "Test button appearance in different browsers"
      ]
    },
    {
      issue: "Customers not redirected after upload",
      solutions: [
        "Check post-upload workflow settings in user journey configuration",
        "Verify cart or checkout page URLs are accessible",
        "Ensure user journey settings were saved properly",
        "Test the complete upload workflow with sample data"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Set Up CSV/Excel Bulk Ordering on Shopify"
        description="Enable bulk ordering via CSV and Excel file uploads on your Shopify store. Let wholesale buyers place large orders in seconds with BMT B2B Wholesale Pricing app."
        canonicalPath="/bulk-upload-guide"
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
                <Upload className="w-4 h-4 mr-2" />
                Bulk Upload Setup
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Setup <span className="font-semibold text-primary">Bulk Upload</span> on Store
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Complete guide to configure and customize the bulk CSV upload feature for your B2B wholesale customers
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
                Watch this comprehensive video guide to configure the bulk upload feature
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/Bulk%20Upload%20Feature%20Configuration.mp4" type="video/mp4" />
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
                Follow these detailed steps to set up and customize the bulk upload feature for your store
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
                Resolve common bulk upload configuration and usage issues
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

        {/* Support CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Bulk Upload Setup?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you configure and optimize your bulk upload feature
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

export default BulkUploadGuide;