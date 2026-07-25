import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

const ROLE_OPTIONS = [
  "Shopify Agency",
  "Shopify Developer",
  "Freelancer",
  "Content Creator / YouTuber",
  "Blogger",
  "Ecommerce Consultant",
  "Other",
];

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  audience_type: z.string().min(1, "Please select what best describes you"),
  promotion_plan: z.string().trim().min(10, "Please share a bit more (min 10 characters)").max(2000),
  works_with_merchants: z.enum(["Yes", "No"], { errorMap: () => ({ message: "Please select Yes or No" }) }),
  good_fit_reason: z.string().trim().min(10, "Please share a bit more (min 10 characters)").max(2000),
  agree_terms: z.literal(true, { errorMap: () => ({ message: "You must agree to the terms" }) }),
});

type FormState = {
  full_name: string;
  email: string;
  website: string;
  audience_type: string;
  promotion_plan: string;
  works_with_merchants: string;
  good_fit_reason: string;
  agree_terms: boolean;
};

const initialForm: FormState = {
  full_name: "",
  email: "",
  website: "",
  audience_type: "",
  promotion_plan: "",
  works_with_merchants: "",
  good_fit_reason: "",
  agree_terms: false,
};

const AffiliateApply = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  const update = (k: keyof FormState, v: string | boolean) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Please fix the form",
        description: parsed.error.errors[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const applicationId = `BMT-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      const payload = {
        application_id: applicationId,
        full_name: form.full_name,
        email: form.email,
        company: "",
        country: "",
        website: form.website,
        shopify_partner_url: "",
        audience_type: form.audience_type,
        audience_size: "",
        works_with_merchants: form.works_with_merchants,
        merchants_per_month: "",
        social_links: "",
        promoted_apps_before: "",
        promoted_apps_list: "",
        b2b_experience: "",
        merchant_types: "",
        heard_about: "",
        promotion_plan: form.promotion_plan,
        good_fit_reason: form.good_fit_reason,
        agreed_to_terms: form.agree_terms,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycby_4AoNVBzv_xd2QxRTrkmszJCKnIu4itqyf7GLxGMgydnALmYOWcYT5E_Y2_VqIAA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        }
      );

      setDone(true);
      toast({
        title: "Application received",
        description: "Our team will review your application and get back to you shortly.",
      });
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Apply — BMT Affiliate Program"
        description="Apply to join the BMT B2B Wholesale Pricing affiliate program and earn 25% recurring commission on Shopify merchants you refer."
        canonicalPath="/affiliate/apply"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "BMT Affiliate Program Application",
          url: "https://blumacawtech.com/affiliate/apply",
          description:
            "Application form to join the BMT B2B Wholesale Pricing affiliate program with 25% recurring commission.",
          isPartOf: {
            "@type": "WebSite",
            name: "BMT B2B Wholesale Pricing",
            url: "https://blumacawtech.com",
          },
          potentialAction: {
            "@type": "ApplyAction",
            name: "Apply to BMT Affiliate Program",
            target: "https://blumacawtech.com/affiliate/apply",
          },
        }}
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
              <Link to="/affiliate">
                <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Affiliate
              </Link>
            </Button>

            {done ? (
              <Card className="border-border/60">
                <CardContent className="p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    Application received!
                  </h1>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Thanks for applying to the BMT Affiliate Program. Our team will review your application and get back to you shortly.
                  </p>
                  <Button onClick={() => navigate("/affiliate")} variant="outline">
                    Back to Affiliate page
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <>
                <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2 leading-tight">
                  BMT Affiliate Partner Application
                </h1>
                <p className="text-lg font-semibold text-primary mb-1">
                  Earn 25% Recurring Commission
                </p>
                <p className="text-muted-foreground mb-2">
                  Help Shopify merchants grow their wholesale business with BMT B2B Wholesale Pricing and earn recurring monthly commission for every successful referral.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  All applications are reviewed manually.
                </p>

                <Card className="border-border/60">
                  <CardContent className="p-5 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name *</Label>
                        <Input
                          id="full_name"
                          required
                          maxLength={100}
                          value={form.full_name}
                          onChange={(e) => update("full_name", e.target.value)}
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          maxLength={255}
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                        />
                      </div>

                      {/* Website or Social Profile */}
                      <div className="space-y-2">
                        <Label htmlFor="website">Website or Social Profile</Label>
                        <Input
                          id="website"
                          maxLength={255}
                          value={form.website}
                          onChange={(e) => update("website", e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                          Examples: Agency website, LinkedIn, YouTube channel, Blog, Twitter/X profile
                        </p>
                      </div>

                      {/* What best describes you */}
                      <div className="space-y-2">
                        <Label htmlFor="audience_type">What best describes you? *</Label>
                        <Select value={form.audience_type} onValueChange={(v) => update("audience_type", v)}>
                          <SelectTrigger id="audience_type">
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                          <SelectContent>
                            {ROLE_OPTIONS.map((o) => (
                              <SelectItem key={o} value={o}>{o}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* How will you promote BMT */}
                      <div className="space-y-2">
                        <Label htmlFor="promotion_plan">How will you promote BMT? *</Label>
                        <Textarea
                          id="promotion_plan"
                          required
                          rows={4}
                          maxLength={2000}
                          placeholder="Client referrals, YouTube tutorials, blog articles, SEO content, social media, Shopify services…"
                          value={form.promotion_plan}
                          onChange={(e) => update("promotion_plan", e.target.value)}
                        />
                      </div>

                      {/* Do you work with Shopify merchants */}
                      <div className="space-y-3">
                        <Label>Do you work with Shopify merchants? *</Label>
                        <RadioGroup
                          value={form.works_with_merchants}
                          onValueChange={(v) => update("works_with_merchants", v)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="Yes" id="wwm-yes" />
                            <Label htmlFor="wwm-yes" className="font-normal">Yes</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="No" id="wwm-no" />
                            <Label htmlFor="wwm-no" className="font-normal">No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Why a good fit */}
                      <div className="space-y-2">
                        <Label htmlFor="good_fit_reason">
                          Why would you be a good fit for the BMT affiliate program? *
                        </Label>
                        <Textarea
                          id="good_fit_reason"
                          required
                          rows={3}
                          maxLength={2000}
                          placeholder="Tell us about your experience and audience."
                          value={form.good_fit_reason}
                          onChange={(e) => update("good_fit_reason", e.target.value)}
                        />
                      </div>

                      {/* Agreement */}
                      <div className="flex items-start gap-3 pt-1">
                        <Checkbox
                          id="agree_terms"
                          checked={form.agree_terms}
                          onCheckedChange={(c) => update("agree_terms", c === true)}
                        />
                        <Label htmlFor="agree_terms" className="text-sm font-normal text-muted-foreground leading-relaxed">
                          I agree not to use spam, fake installs, misleading promotions, trademark bidding, or self-referrals.
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-primary shadow-glow"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting…</>
                        ) : (
                          "Apply to Join"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AffiliateApply;
