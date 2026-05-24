import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Headphones, Users } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with enterprise-grade security and reliability standards for your peace of mind"
    },
    {
      icon: Award,
      title: "5.0 Star Rating",
      description: "Rated 5.0 out of 5 stars on the Shopify App Store with 5 reviews — 100% are 5 stars"
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Direct access to our development team for technical assistance, setup help, and customizations"
    },
    {
      icon: Users,
      title: "B2B Specialists",
      description: "Deep expertise in wholesale operations, complex B2B ordering workflows, and tiered pricing"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              About BluMacawTech
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your All-in-One B2B Wholesale Solution on Shopify
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-primary">BMT B2B Wholesale Pricing</span> is an all-in-one B2B wholesale solution that lets merchants generate bulk sales and run retail and wholesale together seamlessly.
              </p>
              <p>
                It enables custom pricing for different customer groups, flexible discounts, quantity breaks, tiered pricing, and bulk ordering via CSV/Excel uploads. Wholesale buyers can register easily via forms, and smart minimum and maximum order limits protect your margins.
              </p>
              <p>
                Based in Bangalore, India, and launched in June 2025, we're dedicated to simplifying wholesale operations for Shopify merchants worldwide. Our app works seamlessly with Shopify Checkout and Admin.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Launched June 2025
              </Badge>
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                Bangalore, India
              </Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Works with Checkout
              </Badge>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {credential.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
