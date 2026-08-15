import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby_4AoNVBzv_xd2QxRTrkmszJCKnIu4itqyf7GLxGMgydnALmYOWcYT5E_Y2_VqIAA/exec";

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
});

const AffiliateSignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ full_name: fullName, email });
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
        full_name: parsed.data.full_name,
        email: parsed.data.email,
        company: "",
        country: "",
        website: "",
        shopify_partner_url: "",
        audience_type: "",
        audience_size: "",
        works_with_merchants: "",
        merchants_per_month: "",
        social_links: "",
        promoted_apps_before: "",
        promoted_apps_list: "",
        b2b_experience: "",
        merchant_types: "",
        heard_about: "",
        promotion_plan: "",
        good_fit_reason: "",
        agreed_to_terms: true,
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      setDone(true);
      toast({
        title: "Application received",
        description: "Our team will review your application and get back to you shortly.",
      });
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-background/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-primary-foreground" />
        </div>
        <p className="text-lg font-semibold text-primary-foreground mb-2">Application received!</p>
        <p className="text-primary-foreground/90 text-sm">
          Thanks for applying to the BMT Partner Program. Our team will review your application and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="aff_full_name" className="text-primary-foreground">Full Name *</Label>
        <Input
          id="aff_full_name"
          required
          maxLength={100}
          autoComplete="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="bg-background text-foreground"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="aff_email" className="text-primary-foreground">Email Address *</Label>
        <Input
          id="aff_email"
          type="email"
          required
          maxLength={255}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background text-foreground"
        />
      </div>
      <Button type="submit" size="lg" variant="secondary" className="w-full shadow-lg" disabled={submitting}>
        {submitting ? (
          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting…</>
        ) : (
          "Apply to Join"
        )}
      </Button>
    </form>
  );
};

export default AffiliateSignupForm;
