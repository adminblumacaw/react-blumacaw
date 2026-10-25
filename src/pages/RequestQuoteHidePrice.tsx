import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { openExternalUrl } from "@/lib/navigation";
import { Check, EyeOff, FileText, Lock, Mail, MessageSquareQuote, Bell, Palette } from "lucide-react";

const APP_URL = "https://apps.shopify.com/bmt-request-quote-hide-price";
// No demo store link: the demo is a development store, so its storefront asks for a
// password. Only the App Store's own "View demo store" link carries a (one-hour) bypass.
const IMG = "https://cdn.shopify.com/app-store/listing_images/54286e1dce09a4e71ff1f25ae7d285d0";

const highlights = [
  "Hide prices and Add to cart from guests or buyers without a customer tag",
  "Lock products, collections, pages or the whole store with sign-in or a passcode",
  "Show a Request a quote button in place of a hidden price",
  "Requests priced automatically at what each buyer pays at checkout",
  "Send proposals with a PDF; buyers accept online and you convert the quote to a draft order",
];

const screenshots = [
  { src: `${IMG}/promotional_image/CMvkwM-VopcDEAE=.png`, alt: "Home with storefront status, quotes that need you and setup" },
  { src: `${IMG}/desktop_screenshot/CN7j6fKVopcDEAE=.png`, alt: "Product page where a locked price shows a Request a quote button" },
  { src: `${IMG}/desktop_screenshot/CIaW9PKVopcDEAE=.png`, alt: "Quote request form with products, quantities and shipping" },
  { src: `${IMG}/desktop_screenshot/CNvNtquropcDEAE=.png`, alt: "Quote requests list, each priced at the buyer's checkout price" },
  { src: `${IMG}/desktop_screenshot/CJWdifOVopcDEAE=.png`, alt: "A quote request with line items ready to send as a proposal" },
  { src: `${IMG}/desktop_screenshot/CLOkk_OVopcDEAE=.png`, alt: "Page lock rules that hide prices and pages from guests" },
  { src: `${IMG}/desktop_screenshot/CPLTnfOVopcDEAE=.png`, alt: "Email delivery settings: built-in sender, SMTP, API or Klaviyo" },
];

const featureGroups = [
  { icon: EyeOff, title: "Pricing rules", items: ["Hide price", "Price login", "Show and hide", "Request a quote", "Convert quote to order"] },
  { icon: Palette, title: "Customization", items: ["Buttons", "Quote form", "Multi-language", "PDF generation", "File upload", "Pop-ups"] },
  { icon: Bell, title: "Notifications", items: ["Admin alerts", "Auto-email responses", "Email templates", "Quote updates", "Email notifications"] },
];

const integrations = ["Amazon SES", "Brevo", "Elastic Email", "Klaviyo", "Mailgun", "SendGrid"];

const RequestQuoteHidePrice = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="BMT Request Quote, Hide Price — Shopify App"
      description="Hide prices, products and pages from guests on Shopify, and let buyers request a quote where the price was. Send PDF proposals and convert accepted quotes to draft orders."
      canonicalPath="/products/bmt-request-quote-hide-price"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "BMT Request Quote, Hide Price",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://blumacawtech.com/products/bmt-request-quote-hide-price",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: APP_URL },
        publisher: { "@type": "Organization", name: "BlumacawTech" },
      }}
    />
    <Header />
    <main className="pt-24 sm:pt-28">
      <section className="container mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">Free Shopify app</p>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-foreground sm:text-5xl">BMT Request Quote, Hide Price</h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Hide prices, products and pages from guests, and let buyers ask for a quote where the price was.
            </p>
            <ul className="mb-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-foreground sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gradient-primary shadow-glow min-h-[44px]" onClick={() => openExternalUrl(APP_URL)}>
                Install free on Shopify
              </Button>
              <Button size="lg" variant="outline" className="min-h-[44px]" asChild>
                <Link to="/request-quote-hide-price-guide">Documentation</Link>
              </Button>
            </div>
          </div>
          <img
            src={`${screenshots[0].src}?height=720&width=1280`}
            alt={screenshots[0].alt}
            width={1280}
            height={720}
            className="w-full rounded-lg border border-border shadow-elevated"
          />
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Lock, t: "Lock what each shopper sees", d: "Hide prices and Add to cart, or whole products, collections, pages or the store, until shoppers sign in, carry a customer tag or enter a passcode." },
              { icon: MessageSquareQuote, t: "Quote where the price was", d: "Where a price is hidden, show a Request a quote button instead. Each request arrives priced at what that buyer would pay at checkout." },
              { icon: FileText, t: "Proposals to draft orders", d: "Adjust the quote, send a proposal with a PDF, and when the buyer accepts it online, convert it to a draft order." },
              { icon: Mail, t: "Your choice of email", d: "Quote emails go out from our sender, your own email service or Klaviyo." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-lg border border-border bg-card p-5 shadow-card">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md gradient-brand">
                  <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                </div>
                <h3 className="mb-2 font-bold text-foreground">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">Inside the app</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.slice(1).map((s) => (
            <figure key={s.src} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img src={`${s.src}?height=360&width=640`} alt={s.alt} width={640} height={360} loading="lazy" decoding="async" className="w-full" />
              <figcaption className="p-3 text-sm text-muted-foreground">{s.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">Features</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {featureGroups.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-lg border border-border bg-card p-5 shadow-card">
                <h3 className="mb-3 flex items-center gap-2 font-bold text-foreground">
                  <Icon className="h-5 w-5 text-primary" aria-hidden /> {title}
                </h3>
                <ul className="space-y-2">
                  {items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="mb-2 font-bold text-foreground">Works with</h3>
              <div className="flex flex-wrap gap-2">
                {integrations.map((i) => (
                  <span key={i} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground">{i}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-foreground">Pricing</h3>
              <p className="text-sm text-muted-foreground">Free</p>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-foreground">Languages</h3>
              <p className="text-sm text-muted-foreground">English</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default RequestQuoteHidePrice;
