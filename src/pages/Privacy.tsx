import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/**
 * The privacy policy.
 *
 * This page is load-bearing in three places outside this site: the Shopify App
 * Store listing links it, Google's OAuth consent screen links it (the Drive
 * section below is required by the Google API Services User Data Policy), and
 * Shopify's Built for Shopify review checks that the processors we actually
 * use are disclosed. Change it carefully, and keep the effective date honest.
 */

const EFFECTIVE_DATE = "26 August 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy — BMT B2B Wholesale Pricing"
        description="How BlumacawTech collects, uses, stores and deletes data for the BMT B2B Wholesale Pricing Shopify app and this website, including our subprocessors and your rights."
        canonicalPath="/privacy"
      />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Effective date: {EFFECTIVE_DATE}</p>

        <Section title="Who we are">
          <p>
            BlumacawTech (&ldquo;we&rdquo;, &ldquo;us&rdquo;) makes{" "}
            <strong>BMT B2B Wholesale Pricing</strong>, a Shopify app for wholesale
            pricing, registration forms, bulk ordering, order documents and related
            B2B features, and operates this website (blumacawtech.com). You can
            reach us at{" "}
            <a className="text-accent underline" href="mailto:admin@blumacawtech.com">
              admin@blumacawtech.com
            </a>
            .
          </p>
          <p>
            This policy covers both the app and this website. If you shop at a store
            that uses our app, the store (the merchant) is the controller of your
            personal data; we process it on their behalf and on Shopify&rsquo;s
            instructions. For merchants&rsquo; own account data and for visitors to
            this website, we are the controller.
          </p>
        </Section>

        <Section title="Data we process for merchants">
          <p>When a merchant installs the app, we process, per the permissions granted through Shopify:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Store data</strong> — shop domain, store details and contact
              email, theme information, products, collections and settings, used to
              run the features the merchant configures.
            </li>
            <li>
              <strong>Customer data</strong> — customer records Shopify sends us
              (such as name, email, tags and default address), used for
              customer-specific pricing, customer groups and approval workflows.
            </li>
            <li>
              <strong>Registration form submissions</strong> — the details a
              wholesale applicant enters on a merchant&rsquo;s registration form
              (typically name, email, phone, company, address, tax or VAT numbers)
              and any documents they upload, such as business licences. Passwords
              collected by registration forms are encrypted at rest.
            </li>
            <li>
              <strong>Order data</strong> — orders and draft orders, used to
              generate invoices, packing slips and receipts, to run payment terms,
              order limits and related features, and to show the merchant usage
              analytics for their own store. When a merchant enables the tax number
              field, the number a buyer enters in the cart is saved on their order
              and printed on their invoice.
            </li>
            <li>
              <strong>Support conversations</strong> — messages sent through the
              in-app support chat or by email.
            </li>
          </ul>
        </Section>

        <Section title="Emails sent by the app">
          <p>
            The app sends transactional emails that merchants configure — for
            example registration confirmations, approval notices, payment term
            notices and order documents. Recipients and content are determined by
            the merchant. Delivery goes through our built-in sender (delivered via
            Google&rsquo;s Gmail service), or, where the merchant connects one,
            through their own email provider such as Klaviyo or their own
            SMTP/email API account — in which case that provider processes the
            recipient addresses and message content under the merchant&rsquo;s
            agreement with them.
          </p>
        </Section>

        <Section title="Google user data (Google Drive sync)">
          <p>
            Merchants can optionally connect the app to their own Google Drive so
            that invoice documents are saved to a folder in their Drive. If a
            merchant connects Google Drive:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We request the <code>drive.file</code> scope, which only allows
              access to files and folders this app creates — we cannot see, read
              or change anything else in the connected Drive — plus the
              account&rsquo;s email address, which is shown in the app&rsquo;s
              settings to label the connection.
            </li>
            <li>
              We use this access solely to create a &ldquo;BlueMacaw
              Invoices&rdquo; folder and upload the merchant&rsquo;s own invoice
              documents to it. Documents are stored in the merchant&rsquo;s Drive,
              not retained by us.
            </li>
            <li>
              The Google credential (refresh token) is stored encrypted and is
              never shared. Google user data is not used for advertising, is not
              sold, and is not read by humans except with the merchant&rsquo;s
              explicit permission for support, or where required for security or
              by law.
            </li>
            <li>
              Merchants can disconnect at any time in the app&rsquo;s settings —
              which revokes and deletes the stored credential — or from their{" "}
              <a
                className="text-accent underline"
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google account permissions
              </a>
              . Uninstalling the app deletes the stored credential as well.
            </li>
          </ul>
          <p>
            Our use of information received from Google APIs adheres to the{" "}
            <a
              className="text-accent underline"
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </Section>

        <Section title="Where data is stored, and who helps us process it">
          <p>
            The app runs on Google Cloud Platform in the United States and India.
            We use the following service providers (subprocessors):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Shopify</strong> — the platform the app runs on; all app
              data originates from or is delivered through Shopify&rsquo;s APIs.
            </li>
            <li>
              <strong>Google Cloud Platform</strong> — application hosting (Cloud
              Run), file storage for documents uploaded through registration forms
              (Cloud Storage), and webhook message processing (Pub/Sub).
            </li>
            <li>
              <strong>Managed MongoDB database hosting</strong> — the app&rsquo;s
              database.
            </li>
            <li>
              <strong>Google (Gmail)</strong> — delivery of emails sent by the
              built-in sender.
            </li>
            <li>
              <strong>tawk.to</strong> — the support chat available to merchants
              inside the app&rsquo;s admin pages.
            </li>
            <li>
              <strong>Klaviyo</strong> — only where a merchant connects their own
              Klaviyo account for email delivery.
            </li>
            <li>
              <strong>Google Drive</strong> — only where a merchant connects their
              own Google Drive for document sync, as described above.
            </li>
          </ul>
        </Section>

        <Section title="Retention and deletion">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Uninstalling the app</strong> triggers an automated deletion
              of the data we store for that store, including uploaded files and
              stored credentials.
            </li>
            <li>
              <strong>Shopify data erasure requests</strong> — we honour
              Shopify&rsquo;s customer and shop redaction webhooks automatically,
              deleting the relevant personal data when Shopify instructs us to.
            </li>
            <li>
              <strong>Operational logs</strong> are retained for a short, fixed
              period for security and troubleshooting, then deleted.
            </li>
          </ul>
        </Section>

        <Section title="Security">
          <p>
            Data is encrypted in transit (TLS). Credentials merchants trust us
            with — such as API keys and connected-account tokens — and passwords
            collected by registration forms are encrypted at rest. Access to
            production systems is limited to the people who operate the app.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Depending on where you live (for example under the GDPR or CCPA), you
            may have rights to access, correct, delete or export your personal
            data, and to object to or restrict its processing.
          </p>
          <p>
            If you are a customer of a store that uses our app, please contact
            that store first — they control your data, and we act on their
            instructions. We support merchants in fulfilling these requests. If
            you are a merchant, or cannot reach the store, contact us at{" "}
            <a className="text-accent underline" href="mailto:admin@blumacawtech.com">
              admin@blumacawtech.com
            </a>{" "}
            and we will respond promptly.
          </p>
        </Section>

        <Section title="This website">
          <p>
            blumacawtech.com uses Google Analytics to understand aggregate site
            usage. We do not sell personal data, and we do not use it for
            third-party advertising. Forms on this site (such as the affiliate
            application) collect only what they ask for, used to respond to your
            request.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            When this policy changes materially we will update it here and revise
            the effective date above. Questions and requests:{" "}
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

export default Privacy;
