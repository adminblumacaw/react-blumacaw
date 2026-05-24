import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  ArrowLeft, 
  Users, 
  Download,
  Tag,
  Mail,
  Edit3,
  CheckCircle,
  Play,
  AlertTriangle
} from "lucide-react";

const CustomerGroupGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Navigate to Customer Management",
      description: "Access the customer management section within your BMT B2B wholesale pricing app to begin setting up customer groups.",
      details: [
        "Log into your Shopify admin panel",
        "Navigate to Apps section in the main menu",
        "Find and click on BMT B2B Wholesale Pricing app",
        "Locate the Customer Management section in the app dashboard"
      ],
      icon: Users
    },
    {
      step: 2,
      title: "Start Importing Customers",
      description: "Begin the process of adding customers to your B2B system by using the import functionality.",
      details: [
        "Click on the 'Import' button in the customer management interface",
        "Choose between importing existing customers or adding new ones",
        "Review the import options available to you",
        "Prepare your customer data for import"
      ],
      icon: Download
    },
    {
      step: 3,
      title: "Choose Import Method",
      description: "Select the most appropriate method for importing your customers based on your data organization.",
      details: [
        "Option 1: Import by Tag - Use existing customer tags from Shopify",
        "Option 2: Import by Email - Use a CSV file with customer email addresses",
        "Consider which method best fits your current customer organization",
        "Review the requirements for each import method"
      ],
      icon: Tag
    },
    {
      step: 4,
      title: "Import Customers by Tag",
      description: "Use existing Shopify customer tags to automatically group and import customers into your B2B system.",
      details: [
        "Enter the tag name in the search field",
        "Review the list of customers associated with that tag",
        "Verify that the correct customers are selected",
        "Click import to add these customers to your B2B system",
        "Repeat process for additional tags as needed"
      ],
      icon: Tag
    },
    {
      step: 5,
      title: "Prepare CSV Import Method",
      description: "Set up the email-based import process by downloading and preparing the required CSV template.",
      details: [
        "Click on 'Import by Email' option",
        "Download the sample CSV format provided",
        "Review the CSV structure and required fields",
        "Prepare your customer email list according to the template"
      ],
      icon: Mail
    },
    {
      step: 6,
      title: "Complete CSV Import",
      description: "Upload your prepared CSV file containing customer email addresses to import customers in bulk.",
      details: [
        "Fill in the downloaded CSV template with customer email addresses",
        "Ensure all email addresses are valid and properly formatted",
        "Save the CSV file on your local computer",
        "Upload the completed CSV file using the file upload option",
        "Wait for the import process to complete and review results"
      ],
      icon: Mail
    },
    {
      step: 7,
      title: "Review Imported Customers",
      description: "After successful import, review your customer list and verify that all customers have been properly added to the system.",
      details: [
        "Check the customer list for newly imported customers",
        "Verify customer information is correct",
        "Review any import errors or warnings",
        "Confirm customer status and account details"
      ],
      icon: CheckCircle
    },
    {
      step: 8,
      title: "Manage Customer Tags",
      description: "Organize your imported customers by adding, editing, or removing tags to create meaningful customer groups.",
      details: [
        "Click the pencil/edit icon next to any customer",
        "Add relevant tags such as 'Premium', 'Wholesaler', 'Distributor', 'Reseller'",
        "Remove any irrelevant or outdated tags",
        "Create consistent tagging conventions across your customer base",
        "Save changes to update customer profiles"
      ],
      icon: Edit3
    },
    {
      step: 9,
      title: "Export Customer Data",
      description: "Generate reports and exports of your customer groups for analysis or further processing.",
      details: [
        "Navigate to the customer section within the app",
        "Select the customers you want to export",
        "Choose export format (CSV recommended)",
        "Download the customer list for your records",
        "Use exported data for email marketing or further analysis"
      ],
      icon: Users
    },
    {
      step: 10,
      title: "Finalize Customer Group Setup",
      description: "Complete your customer group configuration and verify that all settings are properly applied.",
      details: [
        "Review all customer groups and their associated tags",
        "Test customer login and pricing visibility",
        "Verify that wholesale pricing rules apply correctly",
        "Document your customer group structure for future reference",
        "Train your team on managing customer groups"
      ],
      icon: CheckCircle
    }
  ];

  const troubleshooting = [
    {
      issue: "CSV import fails or shows errors",
      solutions: [
        "Ensure CSV file follows the exact format provided in the sample",
        "Check that all email addresses are valid and properly formatted",
        "Remove any special characters or extra spaces from email addresses",
        "Verify file size doesn't exceed the upload limit",
        "Try importing smaller batches if dealing with large customer lists"
      ]
    },
    {
      issue: "Customers imported but not showing wholesale prices",
      solutions: [
        "Verify customers have been assigned appropriate wholesale tags",
        "Check that wholesale pricing rules are active and properly configured",
        "Ensure customers are logged into their accounts on the storefront",
        "Confirm customer accounts are approved for wholesale access",
        "Review customer group assignments in the pricing rules"
      ]
    },
    {
      issue: "Tag-based import not finding customers",
      solutions: [
        "Verify the tag name exists in your Shopify customer database",
        "Check for typos in the tag name (tags are case-sensitive)",
        "Ensure customers actually have the tag assigned in Shopify",
        "Try refreshing the customer data sync between Shopify and the app",
        "Contact support if tag synchronization issues persist"
      ]
    },
    {
      issue: "Unable to edit customer tags",
      solutions: [
        "Ensure you have proper permissions in the Shopify store",
        "Check that the customer account is active and not archived",
        "Try refreshing the page and clearing browser cache",
        "Verify the app has necessary permissions to modify customer data",
        "Contact support if permission errors continue"
      ]
    },
    {
      issue: "Customer groups not applying to pricing rules",
      solutions: [
        "Confirm pricing rules are targeting the correct customer tags",
        "Check that pricing rules are active and not expired",
        "Verify customer tags match exactly with those used in pricing rules",
        "Review rule priority settings if multiple rules conflict",
        "Test with a sample customer account to troubleshoot"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Create Customer Groups for Wholesale on Shopify"
        description="Guide to creating and managing wholesale customer groups on Shopify. Tag customers, import via CSV, and assign tiered pricing with BMT B2B Wholesale Pricing app."
        canonicalPath="/customer-group-guide"
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
                Customer Management
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="font-semibold text-primary">Creating Customer Groups</span> Tutorial
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Learn how to import and manage B2B customers using the customer management feature of BMT B2B wholesale pricing app
              </p>
            </div>
          </div>
        </section>

        {/* Video Tutorial Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Video Tutorial
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Watch our comprehensive video guide to see the customer group creation process in action
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-glow">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="https://storage.googleapis.com/bmt-videos/BMT%20B2B%20Customer%20Management%20Tutorial.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Step-by-Step Guide */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Step-by-Step Guide
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Follow these detailed steps to successfully create and manage customer groups for your B2B store
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
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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

        {/* Key Benefits Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Benefits of Customer Groups</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="shadow-card">
                <CardHeader>
                  <Tag className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <CardTitle className="text-lg">Organized Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Group customers by tags like Premium, wholesaler, distributor for better organization
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <Mail className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <CardTitle className="text-lg">Bulk Import</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Import customers in bulk using tags or CSV files for efficient setup
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <CardTitle className="text-lg">Targeted Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Apply specific wholesale pricing rules to different customer groups
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Issues and Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Resolve common customer group management issues with these troubleshooting guides
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
            <h2 className="text-3xl font-bold mb-4">Need Help with Customer Groups?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you set up and optimize your customer management workflow
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

export default CustomerGroupGuide;