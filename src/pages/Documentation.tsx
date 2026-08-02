import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookOnboarding from "@/components/BookOnboarding";
import {
  BookOpen,
  Settings,
  Users,
  ExternalLink,
  ChevronRight,
  ClipboardList,
  ShieldCheck,
  CreditCard,
  Truck,
  Lock,
  ShoppingCart,
} from "lucide-react";


const Documentation = () => {
  const sections = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Set up customer groups and manage B2B relationships",
      items: [
        { text: "Creating Customer Groups", href: "/customer-group-guide" },
        { text: "Accept / Reject Customers", href: "/accept-reject-customers-guide" }
      ]
    },
    {
      icon: Settings,
      title: "Pricing",
      description: "Configure wholesale pricing rules and discount structures",
      items: [
        { text: "Enable Feature", href: "/wholesale-pricing-guide" },
        { text: "Create Wholesale Pricing", href: "/create-pricing-rule-guide" },
        { text: "Create Volume Pricing", href: "/volume-discount-guide" }
      ]
    },
    {
      icon: BookOpen,
      title: "Bulk Upload",
      description: "Upload and manage large product catalogs and orders efficiently",
      items: [
        { text: "Setup on Store", href: "/bulk-upload-guide" }
      ]
    },
    {
      icon: ClipboardList,
      title: "Registration Forms",
      description: "Create and manage wholesale customer registration forms with approval workflows",
      items: [
        { text: "Create Registration Forms", href: "/registration-form-guide" },
        { text: "Enable Registration Forms on Store", href: "/enable-registration-form-guide" }
      ]
    },
    {
      icon: ShieldCheck,
      title: "Order Limits",
      description: "Set minimum and maximum order quantity or value limits to protect margins and control wholesale orders",
      items: [
        { text: "Configure Order Limits", href: "/order-limits-guide" },
        { text: "Enable Order Limits on Store", href: "/enable-order-limits-guide" }
      ]
    },
    {
      icon: CreditCard,
      title: "Custom Payment Rules",
      description: "Set net terms like Net 15, Net 30, or Net 60 and control which payment methods customers see at checkout",
      items: [
        { text: "Create Custom Payment Terms in Shopify", href: "/custom-payment-terms-guide" }
      ]
    },
    {
      icon: Truck,
      title: "Custom Shipping Rules",
      description: "Configure shipping methods per customer group so wholesale and retail customers see the right delivery options at checkout",
      items: [
        { text: "Create Custom Shipping Rules in Shopify", href: "/custom-shipping-rules-guide" }
      ]
    },
    {
      icon: Lock,
      title: "Lock Page & Hide Price",
      description: "Restrict access to pages, products, or your entire store and hide prices or Add to Cart buttons from specific customer groups",
      items: [
        { text: "Configure Lock Page & Hide Price Rule", href: "/lock-page-hide-price-guide" }
      ]
    },
    {
      icon: ShoppingCart,
      title: "Quick Order Form",
      description: "Create a customizable quick order page where wholesale buyers can add multiple products to cart from one screen",
      items: [
        { text: "Configure Quick Order Forms", href: "/quick-order-form-guide" }
      ]
    }
  ];

  const quickLinks = [
    { label: "Installation Guide", href: "#installation" },
    { label: "Customer Setup", href: "#customers" },
    { label: "Pricing Rules", href: "#pricing" },
    { label: "Troubleshooting", href: "#troubleshooting" },
    { label: "Support Center", href: "mailto:support@blumacawtech.com" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Documentation — BMT B2B Wholesale Pricing App for Shopify"
        description="Complete guides and tutorials for setting up wholesale pricing, customer groups, registration forms, bulk ordering, and order limits on your Shopify store with BMT B2B Wholesale Pricing."
        canonicalPath="/documentation"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://blumacawtech.com/documentation",
              name: "BMT B2B Wholesale Pricing Documentation",
              description:
                "Guides and tutorials for setting up wholesale pricing, customer groups, registration forms, bulk ordering, and order limits on Shopify.",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://blumacawtech.com/" },
                { "@type": "ListItem", position: 2, name: "Documentation", item: "https://blumacawtech.com/documentation" },
              ],
            },
          ],
        }}
      />

      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="font-semibold text-primary">BMT B2B Wholesale Pricing</span> Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive guides and tutorials to help you get the most out of your B2B Shopify store
            </p>
          </div>
        </section>


        {/* Documentation Sections */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Documentation
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know to successfully implement and manage your B2B wholesale operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                
                return (
                  <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a 
                              href={item.href} 
                              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                              <ChevronRight className="w-4 h-4 mr-2 text-primary" />
                              {item.text}
                            </a>
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

        {/* Support CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our expert support team is available 24/7 to help you with implementation, customization, and troubleshooting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary" asChild>
                <a href="mailto:support@blumacawtech.com">
                  Contact Support
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#support">
                  View Support Options
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <BookOnboarding />
      <Footer />
    </div>
  );
};

export default Documentation;