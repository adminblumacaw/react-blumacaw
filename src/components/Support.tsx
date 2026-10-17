import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby_4AoNVBzv_xd2QxRTrkmszJCKnIu4itqyf7GLxGMgydnALmYOWcYT5E_Y2_VqIAA/exec";
const NOTIFY_EMAIL = "utakarsh@blumacawtech.com";
// Bots fill every field and submit at once; people take longer than this.
const MIN_FILL_MS = 3000;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  goals: z.string().trim().min(5, "Please tell us a little about your goals").max(2000),
});

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  // Spam traps: a field people never see (named so browsers won't autofill it)
  // and the time since the form appeared. A trapped submission is shown the
  // normal thank-you but nothing is sent.
  const trapRef = useRef<HTMLInputElement>(null);
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, goals });
    if (!parsed.success) {
      toast({
        title: "Please fix the form",
        description: parsed.error.errors[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    if (trapRef.current?.value || Date.now() - shownAt.current < MIN_FILL_MS) {
      setDone(true);
      return;
    }
    setSubmitting(true);
    try {
      // no-cors: the script's reply can't be read, so a failure inside the
      // script is invisible here. The analytics event below gives a count to
      // check against the emails that actually arrive.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          form_type: "demo_request",
          notify_email: NOTIFY_EMAIL,
          request_id: `DEMO-${Date.now()}`,
          full_name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.goals,
          submitted_at: new Date().toISOString(),
        }),
      });
      (window as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "generate_lead", { form: "demo_request" });
      setDone(true);
    } catch {
      toast({ title: "Submission failed", description: "Please try again in a moment.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="support" className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Request a Demo to learn about all of our B2B wholesale solutions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Reach out to us and speak with a BMT expert to find the perfect solution for your Shopify business requirements
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl border border-border/50 bg-card shadow-card p-6 sm:p-10">
          {done ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">Thanks — your request was sent!</p>
              <p className="text-sm text-muted-foreground">
                A BMT expert will get back to you shortly. If you don't hear from us,{" "}
                <Link to="/contact" className="font-medium text-accent underline underline-offset-4">contact us</Link>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="space-y-2">
                <Label htmlFor="demo_name">Name <span className="text-destructive">*</span></Label>
                <Input id="demo_name" required maxLength={100} autoComplete="name" placeholder="Your name"
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo_email">Email Address <span className="text-destructive">*</span></Label>
                <Input id="demo_email" type="email" required maxLength={255} autoComplete="email" placeholder="your@email.com"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo_goals">Tell us about your wholesale goals <span className="text-destructive">*</span></Label>
                <Textarea id="demo_goals" required maxLength={2000} rows={5}
                  placeholder="Describe what you're looking to achieve with BMT..."
                  value={goals} onChange={(e) => setGoals(e.target.value)} />
              </div>
              <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                <label htmlFor="demo_hp_x7">Leave this field empty</label>
                <input id="demo_hp_x7" name="demo_hp_x7" type="text" tabIndex={-1} autoComplete="off" ref={trapRef} />
              </div>
              <Button type="submit" size="lg" className="w-full gradient-primary" disabled={submitting}>
                {submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : "Send Message"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                We use these details only to reply to your request. See our{" "}
                <Link to="/privacy" className="underline underline-offset-2 hover:text-foreground">Privacy Policy</Link>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Support;
