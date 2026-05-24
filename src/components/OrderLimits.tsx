import { Card, CardContent } from "@/components/ui/card";
import { ToggleRight, ShoppingCart, Package, DollarSign, AlertTriangle } from "lucide-react";

const OrderLimits = () => {
  const steps = [
    {
      icon: ToggleRight,
      title: "Enable Feature",
      description: "Turn on Min/Max Order Limits from the app settings to start controlling order thresholds for your wholesale customers",
    },
    {
      icon: ShoppingCart,
      title: "Set Minimum Order Quantity",
      description: "Define the minimum number of items a customer must add to cart before they can checkout",
    },
    {
      icon: Package,
      title: "Set Maximum Order Quantity",
      description: "Cap the maximum number of items per order to manage inventory and fulfillment capacity",
    },
    {
      icon: DollarSign,
      title: "Set Order Value Limits",
      description: "Enforce minimum and maximum order values to protect margins and ensure profitable wholesale transactions",
    },
    {
      icon: AlertTriangle,
      title: "Custom Limit Messages",
      description: "Display clear messages to customers when their cart doesn't meet the order requirements",
    },
  ];

  return (
    <section id="order-limits" className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 px-4 sm:px-0">
            Min/Max Order Limits
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Control order quantity and value thresholds to protect your margins and streamline wholesale operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-glow transition-smooth border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OrderLimits;
