import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const CONTACT_EMAIL = "marketing@blumacawtech.com";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact BlumacawTech — BMT B2B Wholesale Pricing"
        description="Contact BlumacawTech about BMT B2B Wholesale Pricing, partnerships, marketing, or general enquiries. Email marketing@blumacawtech.com."
        canonicalPath="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact BlumacawTech",
          url: "https://blumacawtech.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "BlumacawTech",
            email: CONTACT_EMAIL,
            url: "https://blumacawtech.com",
          },
        }}
      />
      <Header />

      <main>
        <section className="border-b border-border/50 bg-muted/30 pt-32 pb-16 sm:pt-36 sm:pb-20">
          <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MessageCircle className="h-7 w-7" aria-hidden="true" />
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Contact BlumacawTech</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Connect with our team about BMT B2B Wholesale Pricing, partnerships, marketing, or general enquiries.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6">
            <div className="rounded-lg border border-border bg-card p-6 text-center shadow-sm sm:p-10">
              <Mail className="mx-auto mb-5 h-8 w-8 text-accent" aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-card-foreground">Email our team</h2>
              <p className="mt-3 text-muted-foreground">
                Send us a message and we’ll connect you with the right person.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-5 inline-block text-base font-semibold [overflow-wrap:anywhere] sm:text-lg text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                {CONTACT_EMAIL}
              </a>
              <div className="mt-8">
                <Button asChild size="lg" className="gradient-primary shadow-glow">
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                    Send an email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;