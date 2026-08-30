import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

/**
 * The terms of service.
 *
 * Like /privacy, this URL is load-bearing outside this site: Google's OAuth
 * consent screen has a terms-of-service field pointing here, and the Shopify
 * App Store listing links it. Before this page existed, /terms fell through to
 * the SPA catch-all and rendered the marketing homepage — a 200 that looked
 * like a real page to a crawler and to a reviewer.
 *
 * Deliberately free of hard-coded prices: plans change, and a stale number in
 * a contract is worse than a link. Point at /pricing instead.
 */

const EFFECTIVE_DATE = "30 August 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms of Service — BMT B2B Wholesale Pricing"
        description="The terms governing use of the BMT B2B Wholesale Pricing Shopify app and blumacawtech.com — plans and billing, merchant responsibilities, acceptable use, connected accounts, liability and termination."
        canonicalPath="/terms"
      />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Effective date: {EFFECTIVE_DATE}</p>

        <Section title="Agreement to these terms">
          <p>
            These terms are an agreement between you and BlumacawTech
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;), covering the{" "}
            <strong>BMT B2B Wholesale Pricing</strong> Shopify app, its theme and
            checkout extensions, and this website (blumacawtech.com) — together,
            the &ldquo;Service&rdquo;.
          </p>
          <p>
            By installing the app or using the Service you accept these terms. If
            you are accepting on behalf of a company, you confirm you are
            authorised to bind it. If you do not accept these terms, uninstall the
            app and stop using the Service.
          </p>
          <p>
            Our{" "}
            <Link className="text-accent underline" to="/privacy">
              Privacy Policy
            </Link>{" "}
            explains what data we process and forms part of this agreement.
          </p>
        </Section>

        <Section title="Who may use the Service">
          <p>
            The app is for Shopify merchants and the staff they authorise. You need
            an active Shopify store, and your use of the app is also governed by
            your agreement with Shopify. If Shopify suspends or closes your store,
            your access to the app ends with it.
          </p>
          <p>
            You are responsible for everything done through your store&rsquo;s
            account, including by your staff and collaborators.
          </p>
        </Section>

        <Section title="Plans, billing and trials">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Billing runs through Shopify.</strong> Charges are approved by
              you in Shopify&rsquo;s admin and appear on your Shopify invoice. We do
              not take or store your card details.
            </li>
            <li>
              <strong>Current plans, features and prices</strong> are listed on our{" "}
              <Link className="text-accent underline" to="/pricing">
                pricing page
              </Link>
              . A free plan is available, and paid plans are offered with a free
              trial as described there.
            </li>
            <li>
              <strong>Subscriptions renew</strong> on Shopify&rsquo;s billing cycle
              until cancelled. Uninstalling the app cancels the recurring charge
              going forward.
            </li>
            <li>
              <strong>Changing plans</strong> takes effect as Shopify applies it;
              downgrading may disable features tied to a higher plan, including
              features you have already configured.
            </li>
            <li>
              <strong>Refunds</strong> are handled case by case and are subject to
              Shopify&rsquo;s billing mechanics. Contact us and we will do what we
              reasonably can.
            </li>
            <li>
              <strong>Prices may change.</strong> We will give reasonable notice
              before a change affects an existing subscription, and Shopify will ask
              you to approve any increased charge.
            </li>
          </ul>
        </Section>

        <Section title="Your responsibilities as a merchant">
          <p>
            The app changes what your buyers see and pay. You own those decisions,
            and we ask you to take them seriously:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Check your configuration.</strong> Pricing rules, discounts,
              order limits, payment terms, shipping rules and page locks apply
              exactly as you configure them. Test your rules on your own store
              before relying on them for live orders.
            </li>
            <li>
              <strong>Your prices and offers must be lawful</strong> and accurate in
              the markets you sell to, including tax, VAT and consumer-pricing
              rules.
            </li>
            <li>
              <strong>Your buyers&rsquo; data is yours to govern.</strong> Where the
              app collects data from your buyers — registration forms, uploaded
              business documents, tax numbers entered at checkout — you are the
              controller of that data. Collect it lawfully, tell your buyers what
              you do with it, and handle their requests about it.
            </li>
            <li>
              <strong>Keep your own store terms current</strong>, including anything
              your buyers need to know about wholesale approval, minimum orders or
              payment terms you set with our features.
            </li>
          </ul>
        </Section>

        <Section title="Emails sent through the app">
          <p>
            The app sends transactional email you configure — registration
            confirmations, approval notices, payment-term notices, order documents
            and similar. You decide the recipients and the content, which makes you
            the sender in every sense that matters.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You may only send to people who have a genuine relationship with your
              store, and you must comply with anti-spam law that applies to you.
            </li>
            <li>
              The built-in sender has a monthly volume allowance tied to your plan.
              Connecting your own provider — such as Klaviyo, your own SMTP server
              or an email API account — moves volume onto your agreement with that
              provider.
            </li>
            <li>
              We may suspend sending from a store that is generating spam
              complaints, sending to purchased lists, or putting delivery for other
              merchants at risk.
            </li>
          </ul>
        </Section>

        <Section title="Connected accounts">
          <p>
            Some features work by connecting an account you own — for example Google
            Drive for invoice sync, or an email provider for delivery. When you
            connect one:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You confirm you are entitled to connect that account and to grant the
              access requested.
            </li>
            <li>
              We use the access only for the feature it was granted for. For Google
              Drive that means the <code>drive.file</code> scope — files this app
              creates, nothing else in your Drive. The{" "}
              <Link className="text-accent underline" to="/privacy">
                Privacy Policy
              </Link>{" "}
              sets out the detail, including our adherence to the Google API
              Services User Data Policy.
            </li>
            <li>
              That provider&rsquo;s own terms continue to apply to you, and you can
              disconnect at any time in the app&rsquo;s settings.
            </li>
          </ul>
        </Section>

        <Section title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              copy, resell, sublicense or white-label the Service, or use it to
              build a competing product;
            </li>
            <li>
              reverse engineer, decompile or attempt to extract source code, except
              where that restriction is unenforceable by law;
            </li>
            <li>
              probe, scan or interfere with the Service, circumvent plan limits, or
              access it by any means other than the interfaces we provide;
            </li>
            <li>
              use the Service to store or transmit unlawful, infringing or malicious
              content, or to collect data from your buyers deceptively;
            </li>
            <li>
              place a load on the Service that degrades it for other merchants.
            </li>
          </ul>
          <p>
            We may suspend access where we reasonably believe this section has been
            breached, or where a store poses a security or legal risk. Where it is
            practical and lawful to do so, we will tell you first.
          </p>
        </Section>

        <Section title="Availability, support and changes">
          <p>
            We work to keep the Service available and dependable, but we do not
            offer a guaranteed uptime commitment, and the Service depends on
            platforms outside our control — principally Shopify and Google Cloud.
            Maintenance, upstream incidents and platform changes can interrupt it.
          </p>
          <p>
            Support is available at{" "}
            <a className="text-accent underline" href="mailto:admin@blumacawtech.com">
              admin@blumacawtech.com
            </a>{" "}
            and through the in-app chat. We may add, change or remove features as
            the product develops; where a change materially reduces functionality
            you depend on, we will give reasonable notice.
          </p>
        </Section>

        <Section title="Third-party platforms">
          <p>
            The Service runs on and integrates with platforms we do not control,
            including Shopify, Google Cloud, Google Drive, and any email provider
            you connect. Your use of those platforms is governed by their terms, and
            their outages, policy changes or account actions can affect the Service.
            We are not responsible for those platforms&rsquo; own acts or omissions.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            We own the Service — the app, its extensions, this website, and the
            underlying software, design and documentation. These terms grant you a
            limited, non-exclusive, non-transferable right to use it while your
            subscription is active, and nothing more.
          </p>
          <p>
            You keep everything of yours: your store, your catalogue, your
            branding, your buyer data and the content you put into the app. You
            grant us only the permission we need to operate the Service for you. If
            you send us feedback, we may use it to improve the product without
            obligation to you.
          </p>
        </Section>

        <Section title="Disclaimers">
          <p>
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo;. To the extent permitted by law, we disclaim implied
            warranties of merchantability, fitness for a particular purpose and
            non-infringement.
          </p>
          <p>
            We do not warrant that the Service will be uninterrupted or error-free,
            or that it will produce any particular commercial result. Nothing in the
            Service is legal, tax or accounting advice — including anything the app
            calculates or prints on an invoice, and anything on this website.
            Confirm your tax and invoicing obligations with your own advisers.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the extent permitted by law, neither party is liable for indirect,
            incidental, special or consequential damages, or for lost profits,
            revenue, goodwill or data, even if advised of the possibility.
          </p>
          <p>
            Our total aggregate liability arising out of or relating to the Service
            is limited to the amounts you paid us for the Service in the twelve
            months before the event giving rise to the claim. Where you are on a
            free plan, that amount may be zero.
          </p>
          <p>
            Nothing here limits liability that cannot be limited by law, including
            for fraud.
          </p>
        </Section>

        <Section title="Indemnity">
          <p>
            You agree to indemnify us against third-party claims arising from your
            use of the Service in breach of these terms, from your store&rsquo;s
            content, pricing or offers, or from your handling of your buyers&rsquo;
            personal data.
          </p>
        </Section>

        <Section title="Termination">
          <p>
            You may stop at any time by uninstalling the app from your Shopify
            admin. We may suspend or terminate access if you materially breach these
            terms, if required by law or by Shopify, or if we discontinue the
            Service.
          </p>
          <p>
            Uninstalling triggers deletion of the data we hold for your store, as
            described in the{" "}
            <Link className="text-accent underline" to="/privacy">
              Privacy Policy
            </Link>
            . Export anything you want to keep — invoices, registration
            submissions, customer groups — before you uninstall. Sections that by
            their nature should survive termination do so, including intellectual
            property, disclaimers, liability and indemnity.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these terms as the Service changes. When we make a
            material change we will update this page and revise the effective date
            above, and where the change significantly affects your rights we will
            give notice through the app or by email. Continuing to use the Service
            after a change takes effect means you accept the updated terms.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by the laws of India, and the courts of India
            have exclusive jurisdiction over disputes arising from them, without
            affecting any mandatory consumer-protection rights you have where you
            live.
          </p>
          <p>
            If any provision is held unenforceable, the rest remains in force. Our
            not enforcing a provision is not a waiver of it.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms:{" "}
            <a className="text-accent underline" href="mailto:admin@blumacawtech.com">
              admin@blumacawtech.com
            </a>
            .
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
