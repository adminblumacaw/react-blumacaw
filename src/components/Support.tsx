import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, CalendarCheck, Clock } from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Get instant help from our team — available 24/7 with no time limits.",
    availability: "24/7",
    action: "Start Chat",
    primary: true,
    onClick: true,
  },
  {
    icon: CalendarCheck,
    title: "Book a Session",
    description: "Free 30-minute session with personalized help and guidance.",
    availability: "By Appointment",
    action: "Book Now",
    href: "https://calendar.app.google/kxiwZQ9QCWjve2rn7",
    primary: false,
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive setup guides and troubleshooting resources.",
    availability: "Always",
    action: "View Docs",
    href: "/documentation",
    primary: false,
  },
];

const Support = () => {
  return (
    <section id="support" className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Support</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            We're Here to Help You Succeed
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Free setup assistance — our team helps you get selling
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
          {supportOptions.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <div
                key={i}
                className={`rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated ${
                  opt.primary ? "border-primary/20 shadow-glow" : "border-border/50 shadow-card"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
                    <Clock className="w-3 h-3" />
                    {opt.availability}
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-2">{opt.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{opt.description}</p>
                <Button
                  variant={opt.primary ? "default" : "outline"}
                  size="sm"
                  className={`w-full ${opt.primary ? "gradient-primary" : ""}`}
                  asChild={!opt.onClick}
                  onClick={
                    opt.onClick
                      ? () => {
                          if ((window as any).Tawk_API) {
                            (window as any).Tawk_API.maximize();
                          }
                        }
                      : undefined
                  }
                >
                  {opt.href ? (
                    <a
                      href={opt.href}
                      target={opt.href.startsWith("http") ? "_blank" : undefined}
                      rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {opt.action}
                    </a>
                  ) : (
                    <span>{opt.action}</span>
                  )}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-6 text-center max-w-md mx-auto">
          {[
            { value: "99%", label: "Satisfaction" },
            { value: "24/7", label: "Support" },
            { value: "Free", label: "Setup Help" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-xl sm:text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
