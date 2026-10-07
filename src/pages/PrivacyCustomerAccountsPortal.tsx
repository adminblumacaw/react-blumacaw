import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/**
 * Privacy policy for the BMT Customer Accounts Portal Shopify app.
 *
 * Linked from that app's Shopify App Store listing. Written from what the app
 * does (bmt-customer-accounts-portal, 7 Oct 2026): keep it in step with the
 * app's data handling and keep the effective date honest.
 */

const EFFECTIVE_DATE = "7 October 2026";
const EMAIL = "admin@blumacawtech.com";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Mail = () => (
  <a className="text-accent underline" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

const PrivacyCustomerAccountsPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy — BMT Customer Accounts Portal"
        description="How BlumacawTech processes, stores and deletes data for the BMT Customer Accounts Portal Shopify app, including where data is kept, our subprocessors and your rights."
        canonicalPath="/privacy/customer-accounts-portal"
      />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-3">Privacy Policy: BMT Customer Accounts Portal</h1>
        <p className="text-muted-foreground mb-12">Effective date: {EFFECTIVE_DATE}</p>

        <Section title="Who we are">
          <p>
            BlumacawTech (&ldquo;we&rdquo;, &ldquo;us&rdquo;) makes <strong>BMT Customer Accounts Portal</strong>, a
            Shopify app that adds content, pages, private documents and order buttons to a store&rsquo;s customer
            accounts. You can reach us at <Mail />.
          </p>
          <p>
            If you shop at a store that uses the app, the store (the merchant) is the controller of your personal
            data; we process it on the merchant&rsquo;s behalf and on Shopify&rsquo;s instructions. For
            merchants&rsquo; own account data, we are the controller.
          </p>
        </Section>

        <Section title="Data we process for merchants">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Store information</strong> from Shopify: the shop&rsquo;s domain, name, time zone, currency,
              primary web address and whether it uses the new customer accounts, so the app can run.
            </li>
            <li>
              <strong>Content merchants create</strong>: blocks, pages, segments (the rules), order action forms and
              settings, stored in our database.
            </li>
            <li>
              <strong>Documents merchants upload</strong> (PDFs, images, office files): stored privately and given
              only to the customers the merchant chooses, through download links made for that customer that stop
              working after an hour.
            </li>
            <li>
              <strong>Theme files</strong>, read only when a merchant scans a theme on the app&rsquo;s Migration
              page. We keep the scan report (what was found, with short excerpts of theme code), not the theme.
            </li>
            <li>
              <strong>Support conversations</strong>: if a merchant starts a chat or books a call with us from the
              app, what they send us and their contact details, to answer them.
            </li>
          </ul>
        </Section>

        <Section title="Data we process about a store's customers">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>For showing the right content</strong>: each customer&rsquo;s tags, amount spent and number of
              orders, read from Shopify to work out which of the merchant&rsquo;s segments they are in. We store only
              the result (short segment codes) on the customer&rsquo;s record in the merchant&rsquo;s own Shopify
              store. We don&rsquo;t store customers&rsquo; names, email addresses, phone numbers or addresses.
            </li>
            <li>
              <strong>Order requests</strong>: when a customer sends one of the merchant&rsquo;s order forms (for
              example &ldquo;Request an invoice&rdquo;), we store the order and customer IDs, what they typed and the
              date, so the merchant can see the request in the app. If the merchant uses Shopify Flow, the same
              details go to their Flow workflows.
            </li>
            <li>
              <strong>Usage counts</strong>: daily counts of views, clicks, downloads and requests for each block,
              page, document and order form. Counts only, without anything that identifies a customer.
            </li>
            <li>
              <strong>Download links</strong> contain the customer&rsquo;s Shopify customer ID so a link works only
              for them.
            </li>
          </ul>
          <p>
            We use this data only to provide the app to the merchant. We don&rsquo;t sell it, use it for
            advertising, or combine it across stores.
          </p>
        </Section>

        <Section title="Where data is stored, and who helps us process it">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Cloud</strong> (Cloud Run, Cloud Storage, Cloud Tasks, Cloud Logging), Mumbai, India
              (asia-south1): runs the app and stores uploaded documents.
            </li>
            <li>
              <strong>MongoDB Atlas</strong>, on Google Cloud in Mumbai, India (asia-south1): the app&rsquo;s
              database.
            </li>
            <li>
              <strong>Shopify</strong>: the platform the app runs on.
            </li>
            <li>
              <strong>tawk.to</strong>: the support chat available to merchants inside the app, used only when a
              merchant opens a chat.
            </li>
          </ul>
        </Section>

        <Section title="Retention and deletion">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              When a merchant uninstalls the app, Shopify asks us 48 hours later to delete the store&rsquo;s data;
              we then delete everything we hold for that store, including uploaded documents.
            </li>
            <li>
              When Shopify asks us to delete a customer&rsquo;s data, we delete that customer&rsquo;s order requests.
              Segment codes live in the merchant&rsquo;s store and are removed with the customer&rsquo;s record.
            </li>
            <li>
              When a customer asks a store for their data, we send the merchant the order requests we hold for that
              customer.
            </li>
            <li>Server logs are kept for up to 30 days.</li>
          </ul>
        </Section>

        <Section title="Security">
          <p>
            Data is encrypted in transit (HTTPS) and at rest by our providers. Uploaded documents are private and can
            only be downloaded through links made for the customer. Access to the app&rsquo;s systems is limited to
            the people who maintain it.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Depending on where you live, you may have rights to access, correct, delete or export your personal data.
            Customers of a store should contact that store, which can ask us through Shopify. Merchants can contact
            us at <Mail /> about their own data.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            When this policy changes, we update this page and its effective date. For significant changes, we tell
            merchants who use the app.
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyCustomerAccountsPortal;
