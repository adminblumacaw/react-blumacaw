import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, Upload, ShieldCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Create Customer Groups",
      description: "Create pricing tiers and groups of customer segments to boost loyalty and profit",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Set Wholesale Pricing",
      description: "Offer amount, percentage, or volume pricing based on customer type or order type",
      color: "text-accent"
    },
    {
      icon: Upload,
      title: "Enable Bulk Ordering",
      description: "Let customers place large orders quickly by uploading CSV or Excel files directly",
      color: "text-primary"
    },
    {
      icon: ShieldCheck,
      title: "Protect Your Margins",
      description: "Set min/max wholesale order limits on order value or order quantity to safeguard profits",
      color: "text-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="font-semibold text-primary">BMT B2B Wholesale Pricing</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your store into a wholesale powerhouse
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-glow transition-smooth border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
