import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AffiliateSignupForm from "@/components/AffiliateSignupForm";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sparkles,
  Repeat,
  Cookie,
  Globe2,
  TrendingUp,
  DollarSign,
  Users,
  Calendar,
  MessageCircle,
  Phone,
  CheckCircle2,
  Youtube,
  PenLine,
  Mail,
  Briefcase,
  GraduationCap,
  Twitter,
  FileText,
  CreditCard,
  Ban,
  Shield,
  Bell,
  Store,
  Tag,

  EyeOff,
  Lock,
  UserCog,
  Layers,
  BarChart3,
  Receipt,
  ShoppingCart,
  Zap,
  Award,
  Building2,
  Factory,
  Truck,
  Handshake,
  PackageSearch,
  Image as ImageIcon,
  ExternalLink,

} from "lucide-react";

const CALENDAR_URL = "https://calendar.app.google/kxiwZQ9QCWjve2rn7";

const COMMISSION = 0.25; // 25% recurring
const MIN_PLAN = 9.99; // BMT Standard $9.99/mo
const MAX_PLAN = 29.99; // BMT Advanced $29.99/mo


const bmtHelps = [
  { icon: DollarSign, text: "Offer wholesale pricing" },
  { icon: Tag, text: "Create customer-specific pricing" },
  { icon: EyeOff, text: "Hide prices & add-to-cart for guest users" },
  { icon: Lock, text: "Lock products, collections, and pages" },
  { icon: UserCog, text: "Manage B2B customers inside the same Shopify store" },
  { icon: Store, text: "Run B2B and retail together without Shopify Plus" },
];

const stats = [
  {
    icon: Repeat,
    title: "25% Recurring",
    desc: "Lifetime commission on every paying merchant you refer",
  },
  {
    icon: Cookie,
    title: "60-Day Cookies",
    desc: "Extended attribution window so referrals stick",
  },
  {
    icon: Globe2,
    title: "Global Shopify Market",
    desc: "Millions of Shopify merchants exploring B2B wholesale",
  },
];

const whyPromote = [
  {
    icon: BarChart3,
    badge: "Strong Merchant Demand",
    title: "Merchants Need B2B Solutions",
    points: [
      "Wholesale pricing",
      "B2B login systems",
      "Hide-price functionality",
      "Customer-specific pricing",
      "Non-Shopify Plus B2B solutions",
    ],
    footer: "BMT solves these problems in a single app.",
  },
  {
    icon: Layers,
    badge: "Easy to Sell",
    title: "All-in-One B2B Platform",
    points: [
      "Wholesale pricing",
      "Tier pricing",
      "Quantity breaks",
      "Customer tagging",
      "Net payment terms",
      "Quick order forms",
      "Product visibility controls",
      "Locking collections/pages/products",
    ],
    footer: 'Strong "all-in-one B2B solution" positioning.',
  },
  {
    icon: DollarSign,
    badge: "Affordable Pricing",
    title: "Better Value Than Competitors",
    points: [
      "Many wholesale apps are expensive",
      "Many require Shopify Plus",
      "BMT offers a simpler, more affordable alternative",
    ],
    footer: "Merchants get more value at a lower cost.",
  },
];

const whoCanJoin = [
  { icon: Building2, title: "Shopify Agencies" },
  { icon: Zap, title: "Shopify Developers" },
  { icon: Briefcase, title: "Freelancers" },
  { icon: Youtube, title: "YouTubers" },
  { icon: PenLine, title: "Bloggers" },
  { icon: Handshake, title: "Ecommerce Consultants" },
  { icon: GraduationCap, title: "B2B Commerce Experts" },
  { icon: Users, title: "Shopify Educators" },
];


const idealMerchants = [
  { icon: Factory, text: "Wholesale businesses" },
  { icon: Building2, text: "Manufacturers" },
  { icon: Truck, text: "Distributors" },
  { icon: Store, text: "Dealers" },
  { icon: PackageSearch, text: "B2B + DTC hybrid stores" },
  { icon: Lock, text: "Private catalog stores" },
  { icon: Tag, text: "Customer-specific pricing stores" },
];

const programSteps = [
  {
    icon: PenLine,
    title: "Sign up using the button below",
    desc: "Fill in the short partner application — it takes under 3 minutes.",
  },
  {
    icon: MessageCircle,
    title: "Our team contacts you & determines fit",
    desc: "Every application is reviewed manually so we can support you properly.",
  },
  {
    icon: ImageIcon,
    title: "We provide assets to convert new business",
    desc: "Banners, screenshots, demo store access, comparison sheets and email templates.",
  },
  {
    icon: DollarSign,
    title: "You get paid 25% recurring commission",
    desc: "Earn every month for as long as your referred merchant stays subscribed.",
  },
];

const programStats = [
  { value: "25%", label: "Recurring commission" },
  { value: "60", label: "Day cookie window" },
  { value: "5.0", label: "Rating on Shopify App Store" },
  { value: "$50", label: "Minimum monthly payout" },
];

const faqs = [

  {
    q: "How much can I earn?",
    a: "You earn 25% of every paying merchant's monthly subscription for as long as they remain a BMT customer. Plans start free, with paid tiers at $9.99/month (Standard), $29.99/month (Advanced), and $49.99/month (Expert), so an agency referring 20 stores on the Advanced plan can earn roughly $150/month recurring.",
  },
  {
    q: "When do I get paid?",
    a: "Commissions are paid monthly. There is a minimum payout threshold of $50. Payouts are made via PayPal or Wise.",
  },
  {
    q: "How long are my referral cookies valid?",
    a: "Our cookies last 60 days. If a merchant clicks your link and installs BMT B2B Wholesale Pricing within 60 days, the referral is credited to you.",
  },
  {
    q: "How do I track my referrals?",
    a: "You get a real-time partner dashboard showing clicks, installs, paying merchants, MRR earned and lifetime commissions — all tied to your unique affiliate link.",
  },
  {
    q: "What marketing materials do you provide?",
    a: "We provide referral tracking links, marketing banners, product screenshots, demo store access, feature comparison sheets, priority support, and launch/update announcements.",
  },
  {
    q: "Are there any restrictions on how I can promote?",
    a: "Yes. You cannot bid on BMT branded keywords, use fake installs or fraudulent referrals, self-refer, spam coupons, or use misleading advertising. Genuine reviews, tutorials, comparisons and educational content are all encouraged.",
  },
  {
    q: "Can I refer myself?",
    a: "No. Self-referrals are not permitted and will result in account termination and withheld payouts.",
  },
  {
    q: "I have a large audience — can we do a custom deal?",
    a: "Absolutely. Agencies, Shopify Experts and creators with large audiences can apply for higher commissions, co-marketing, dedicated onboarding support, early feature access, and custom partnership agreements. Book a 30-minute partnership call below.",
  },
];

const Affiliate = () => {
  const [referrals, setReferrals] = useState<number>(10);

  const earnings = useMemo(() => {
    const low = Math.round(referrals * MIN_PLAN * COMMISSION);
    const high = Math.round(referrals * MAX_PLAN * COMMISSION);
    return { low, high };
  }, [referrals]);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "BMT Affiliate Program",
          url: "https://blumacawtech.com/affiliate",
          description:
            "Earn 25% lifetime recurring commission by referring Shopify merchants to BMT B2B Wholesale Pricing.",
        },
        {
          "@type": "Service",
          name: "BMT B2B Wholesale Pricing Affiliate Program",
          provider: {
            "@type": "Organization",
            name: "Blumacaw Tech",
            url: "https://blumacawtech.com",
            logo: "https://blumacawtech.com/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png",
          },
          areaServed: "Worldwide",
          serviceType: "Affiliate / Partner Program",
          offers: {
            "@type": "Offer",
            description: "25% lifetime recurring commission on referred Shopify merchants",
            category: "Affiliate Commission",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
    []
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="BMT Affiliate Program — 25% Recurring Shopify B2B"
        description="Join the BMT B2B Wholesale Pricing affiliate program. Earn 25% lifetime recurring commission for every Shopify merchant you refer."
        canonicalPath="/affiliate"
        jsonLd={jsonLd}
      />


      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
          <div className="container mx-auto px-4 py-16 sm:py-24 relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-5 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Partner Program
              </Badge>
              <p className="text-base sm:text-xl font-semibold text-accent mb-3">
                Do you work with Shopify store owners and want to earn more?
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-[1.15] sm:leading-[1.1]">
                Come join the BMT{" "}
                <span className="text-primary">Partner Program</span> today
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Earn 25% recurring commission by referring merchants to BMT B2B Wholesale Pricing — the all-in-one Shopify wholesale solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="gradient-primary shadow-glow" asChild>
                  <a href="#apply">Become a Partner</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#calculator">See Earnings Calculator</a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Monthly payouts</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Real-time tracking</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Dedicated support</span>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                *The partner program is for new merchants only. Referrals of existing BMT customers cannot be honoured.*
              </p>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="border-y border-border/60 bg-card">
          <div className="container mx-auto px-4 py-8 sm:py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              {programStats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl sm:text-4xl font-bold text-primary">{value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW THE PROGRAM WORKS */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3">
              How Does the BMT Partner Program Work?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Four simple steps from application to your first recurring payout.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {programSteps.map(({ icon: Icon, title, desc }, i) => (
                <Card key={title} className="border-border/60 hover:border-primary/40 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground">Step {i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button size="lg" className="gradient-primary shadow-glow" asChild>
                <a href="#apply">Sign Up Today</a>
              </Button>
            </div>
          </div>
        </section>


        {/* WHAT BMT HELPS MERCHANTS DO */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-3">
                BMT Helps Shopify Merchants
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                BMT B2B Wholesale Pricing is the all-in-one Shopify solution for merchants looking to add wholesale and B2B capabilities to their store.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bmtHelps.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3 p-4 rounded-lg border border-border/60 bg-card">
                    <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STAT CARDS */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-5">
              {stats.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="border-border/60">
                  <CardContent className="p-6">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1.5">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AFFILIATE COMMISSION + EARNINGS TABLE */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-3">Standard Affiliate Commission</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  25% Lifetime Recurring Commission
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  You earn 25% of the merchant's subscription revenue every month for as long as they remain an active paying customer.
                </p>
              </div>

              <Card className="border-border/60">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Example Earnings</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Merchant Plan</TableHead>
                          <TableHead className="text-right">Your Monthly Earnings</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>$10/month</TableCell>
                          <TableCell className="text-right font-medium">$2.50/month</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>$30/month</TableCell>
                          <TableCell className="text-right font-medium">$7.50/month</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>20 merchants on $30 plan</TableCell>
                          <TableCell className="text-right font-medium text-primary">$150/month recurring</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CALCULATOR */}
        <section id="calculator" className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3">Calculate Your Potential Earnings</h2>
              <p className="text-center text-muted-foreground mb-10">Based on BMT subscription values ranging from ${MIN_PLAN} to ${MAX_PLAN}/month.</p>

              <Card className="border-border/60">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-foreground">Monthly paid referrals</label>
                    <span className="text-sm font-semibold text-primary">{referrals} referral{referrals === 1 ? "" : "s"}</span>
                  </div>
                  <Slider
                    value={[referrals]}
                    onValueChange={(v) => setReferrals(v[0])}
                    min={1}
                    max={100}
                    step={1}
                    className="mb-8"
                  />

                  <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-4 sm:p-6 text-center">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Estimated monthly recurring income</p>
                    <p className="text-3xl sm:text-5xl font-bold text-foreground break-words">
                      ${earnings.low.toLocaleString()}<span className="text-muted-foreground mx-1 sm:mx-2 text-xl sm:text-2xl">–</span>${earnings.high.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">Annualized: ${(earnings.low * 12).toLocaleString()} – ${(earnings.high * 12).toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* WHY PROMOTE BMT */}
        <section className="py-12 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Why Promote BMT?</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyPromote.map(({ icon: Icon, badge, title, points, footer }) => (
                <Card key={title} className="border-border/60">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{badge}</Badge>
                    <div className="flex items-baseline gap-2 mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium text-foreground">{footer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHO CAN JOIN */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3">Who Can Join?</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">We welcome partners from across the Shopify ecosystem.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {whoCanJoin.map(({ icon: Icon, title }) => (
                <Card key={title} className="border-border/60 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* COOKIE DURATION + PAYOUT TERMS */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-border/60">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-3">Affiliate Cookie Duration</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">60-Day Attribution Window</h3>
                  <p className="text-sm text-muted-foreground">
                    If a merchant installs BMT within 60 days of clicking your referral link, the referral is credited to you.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-5 h-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="mb-3">Payout Schedule</Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Monthly Payouts</h3>
                  <ul className="text-sm text-muted-foreground space-y-1.5 text-left inline-block">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Monthly payouts</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Minimum payout threshold: $50</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Paid via PayPal or Wise</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AGENCY PARTNER PROGRAM */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Agency Partner Program</h2>
              <p className="text-muted-foreground mb-8">
                Higher-Tier Partner Opportunities. Agencies and high-volume partners may qualify for exclusive benefits.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 text-sm">
                <div className="p-3 rounded-lg border border-border/60 bg-card">Increased commissions</div>
                <div className="p-3 rounded-lg border border-border/60 bg-card">Co-marketing opportunities</div>
                <div className="p-3 rounded-lg border border-border/60 bg-card">Dedicated onboarding support</div>
                <div className="p-3 rounded-lg border border-border/60 bg-card">Early feature access</div>
                <div className="p-3 rounded-lg border border-border/60 bg-card">Custom partnership agreements</div>
                <div className="p-3 rounded-lg border border-border/60 bg-card">Quarterly strategy reviews</div>
              </div>
              <Button size="lg" className="gradient-primary shadow-glow" asChild>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" /> Book a Partnership Call
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* IDEAL MERCHANTS + HOW TO APPLY */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3">Ideal Merchants for BMT</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                BMT works especially well for these types of Shopify stores.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                {idealMerchants.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3 p-4 rounded-lg border border-border/60 bg-card">
                    <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{text}</span>
                  </div>
                ))}
              </div>

              <div id="apply" className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-primary to-accent p-8 sm:p-14 text-center shadow-glow">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">BMT Affiliate Partner Application</h2>
                <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                  Just your name and email — our team reviews every application and will get back to you shortly.
                </p>
                <AffiliateSignupForm />
              </div>
            </div>
          </div>
        </section>

        {/* APP LISTING */}
        <section className="py-8 sm:py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-3">View our official app listing</p>
            <Button variant="outline" className="h-auto max-w-full whitespace-normal py-3" asChild>
              <a href="https://apps.shopify.com/blumacawtech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-center">
                <ExternalLink className="w-4 h-4 shrink-0" />
                BMT B2B Wholesale Pricing on Shopify App Store
              </a>
            </Button>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border/60 rounded-lg px-4 bg-card">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* TERMS */}
        <section id="terms" className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Affiliate Rules & Terms</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: FileText,
                    title: "1. Program Overview",
                    body: (
                      <p>Welcome to the BMT B2B Wholesale Pricing Affiliate Program by Blumacaw Tech. By participating in our program, you agree to these terms and conditions. Our affiliate program allows you to earn commission by referring new paying merchants to the BMT Shopify app.</p>
                    ),
                  },
                  {
                    icon: CreditCard,
                    title: "2. Commission Structure",
                    body: (
                      <ul className="space-y-1.5">
                        <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>25% recurring commission on all referred customers</span></li>
                        <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>60-day cookie duration</span></li>
                        <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>Monthly payouts</span></li>
                        <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>Minimum payout threshold: $50</span></li>
                        <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>Commission tracking through unique affiliate links</span></li>
                      </ul>
                    ),
                  },
                  {
                    icon: Ban,
                    title: "3. Prohibited Activities",
                    body: (
                      <>
                        <p className="mb-2">To maintain program quality, the following are strictly prohibited:</p>
                        <ul className="space-y-1.5">
                          <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>Brand bidding on "BMT" keywords</span></li>
                          <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>Fake installs or fraudulent referrals</span></li>
                          <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>Self-referrals</span></li>
                          <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>Coupon spam</span></li>
                          <li className="flex gap-2"><span className="text-primary mt-1">•</span><span>Misleading advertising</span></li>
                        </ul>
                      </>
                    ),
                  },
                  {
                    icon: Shield,
                    title: "4. Account Termination",
                    body: (
                      <p>Violation of these rules may result in account termination and withheld payouts. We reserve the right to terminate any affiliate account for violations of these terms, including but not limited to: fraudulent activity, misrepresentation, or breach of any program guidelines.</p>
                    ),
                  },
                  {
                    icon: Bell,
                    title: "5. Program Changes",
                    body: (
                      <p>Blumacaw Tech reserves the right to modify these terms, commission rates, or program structure at any time. Changes will be communicated to all active affiliates.</p>
                    ),
                  },
                  {
                    icon: CreditCard,
                    title: "6. Payment Terms",
                    body: (
                      <p>Commissions are calculated monthly and paid within the scheduled payout period, provided the minimum payout threshold of $50 has been met. All payments are made via PayPal or Wise and are final and non-negotiable.</p>
                    ),
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <Card key={title} className="border-border/60">
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground">{title}</h3>
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed sm:pl-12">{body}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT / CONTACT */}
        <section className="py-12 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-3">We're Here For You</h2>
              <p className="text-center text-muted-foreground mb-12">Have questions before applying? Reach out through any of these channels.</p>
              <div className="grid sm:grid-cols-3 gap-5">
                <Card className="border-border/60">
                  <CardContent className="p-6 text-center">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Get instant answers via the chat widget on this site during business hours.</p>
                  </CardContent>
                </Card>
                <Card className="border-border/60">
                  <CardContent className="p-6 text-center">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Partnership Call</h3>
                    <p className="text-sm text-muted-foreground mb-3">Book a free partnership call to discuss commissions and co-marketing.</p>
                    <Button size="sm" variant="outline" asChild>
                      <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">Book a Call</a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-border/60">
                  <CardContent className="p-6 text-center">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground">Prefer to talk? Reach our partnerships team during business hours.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent p-10 sm:p-14 text-center shadow-glow">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Ready to earn recurring income?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                Earn 25% recurring commission by referring merchants to BMT B2B Wholesale Pricing — the all-in-one Shopify wholesale solution.
              </p>
              <Button size="lg" variant="secondary" className="shadow-lg" asChild>
                <a href="#apply">Apply to Join</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Affiliate;
