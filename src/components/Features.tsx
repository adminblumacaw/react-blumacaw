import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileSpreadsheet, 
  ShoppingCart, 
  Download, 
  Database, 
  Palette, 
  DollarSign,
  Truck,
  ClipboardList,
  CreditCard,
  ShieldCheck
} from "lucide-react";

const Features = () => {
  const currentFeatures = [
    {
      icon: FileSpreadsheet,
      title: "Customer Groups & Tiers",
      description: "Create exclusive customer-specific wholesale pricing to boost loyalty and profit",
      status: "current"
    },
    {
      icon: ShoppingCart,
      title: "Flexible Wholesale Pricing",
      description: "Offer amount, percentage, or wholesale pricing based on customer type — tailored for your B2B customers",
      status: "current"
    },
    {
      icon: DollarSign,
      title: "Volume & Tiered Pricing",
      description: "Increase average order value with quantity breaks pricing on customer type with automatic calculations",
      status: "current"
    },
    {
      icon: Database,
      title: "Bulk Order Upload via CSV/Excel",
      description: "Enable fast, high-volume CSV XLSX ordering for repeat buyers directly on your store",
      status: "current"
    },
    {
      icon: ClipboardList,
      title: "Registration Forms",
      description: "Approve and manage B2B buyers with registration forms with auto tag for seamless onboarding",
      status: "current"
    },
    {
      icon: ShieldCheck,
      title: "Min/Max Order Limits",
      description: "Set min/max wholesale order limits to protect margins at product or order value level",
      status: "current"
    },
    {
      icon: Palette,
      title: "Unified B2C/B2B Experience",
      description: "Run retail and wholesale together seamlessly in one storefront with consistent pricing across all pages",
      status: "current"
    },
    {
      icon: CreditCard,
      title: "Custom Payment & Shipping Rules",
      description: "Show or hide payment methods by customer tags, create wholesale-only shipping options, and apply rules for logged-in or tagged customers",
      status: "current"
    }
  ];

  const upcomingFeatures = [
    {
      icon: Download,
      title: "Wholesale Pricing List",
      description: "Create and manage comprehensive pricing lists for different wholesale customer tiers",
      status: "upcoming"
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
    const IconComponent = feature.icon;
    return (
      <Card className="shadow-card hover:shadow-glow transition-smooth border-border/50 h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-primary" />
            </div>
            {feature.status === "upcoming" && (
              <Badge variant="secondary" className="text-xs">
                Coming Soon
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Current Features */}
        <div className="mb-12 lg:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 px-4 sm:px-0">
              Everything You Need for B2B Wholesale
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              An all-in-one wholesale solution that lets you generate bulk sales and run retail and wholesale together seamlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Upcoming Features */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 px-4 sm:px-0">
              Advanced Features Coming Soon
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Next-generation wholesale capabilities to further streamline your B2B operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {upcomingFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
