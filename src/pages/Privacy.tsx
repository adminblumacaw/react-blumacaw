import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/**
 * The privacy policy.
 *
 * This page is load-bearing in three places outside this site: the Shopify App
 * Store listings link it, Google's OAuth consent screen links it (the Google
 * Drive section, 4.6, is required by the Google API Services User Data Policy),
 * and Shopify's Built for Shopify review checks that the processors we actually
 * use are disclosed (section 11). Change it carefully, and keep the effective
 * date honest.
 *
 * Text: the owner's draft of 27 Oct 2026 (covering both apps, the agency and
 * the affiliate program), checked against what the apps and this site do.
 */

const EFFECTIVE_DATE = "October 28, 2026";
const EMAIL = "admin@blumacawtech.com";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mb-12 scroll-mt-28">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Sub = ({ title }: { title: string }) => (
  <h3 className="text-lg font-semibold text-foreground pt-2">{title}</h3>
);

const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const Mail = ({ address = EMAIL }: { address?: string }) => (
  <a className="text-accent underline" href={`mailto:${address}`}>
    {address}
  </a>
);

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="text-accent underline" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const usePurposes: [string, string][] = [
  ["Service delivery", "Operating Shopify apps, providing development services, and maintaining integrations"],
  ["Account administration", "Managing merchants, agency clients, affiliates, and authorized users"],
  ["Customer workflows", "Enabling wholesale registration, quotation processing, and order-related functionality"],
  ["Support", "Responding to questions, investigating problems, and resolving technical issues"],
  ["Communication", "Sending service notifications, updates, and requested business communications"],
  ["Billing and payments", "Processing subscription records, agency invoices, and affiliate commissions"],
  ["Improvement", "Understanding product usage and improving performance, reliability, and usability"],
  ["Security", "Detecting unauthorized access, fraud, misuse, and operational incidents"],
  ["Analytics", "Understanding website and service activity"],
  ["Legal compliance", "Maintaining records and responding to valid legal obligations or requests"],
  ["Marketing", "Communicating about relevant BlumacawTech offerings where permitted"],
  ["Business administration", "Managing contracts, partners, service providers, and operational records"],
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy — BlumacawTech"
        description="How BlumacawTech collects, uses, shares, stores and deletes personal information across its Shopify apps, agency services, affiliate program and website."
        canonicalPath="/privacy"
      />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground">BlumacawTech</p>
        <p className="text-muted-foreground mb-12">
          Effective date: {EFFECTIVE_DATE} · Last updated: {EFFECTIVE_DATE}
          <br />
          Website: <Ext href="https://blumacawtech.com">https://blumacawtech.com</Ext> · Privacy contact: <Mail />
        </p>

        <Section id="introduction" title="1. Introduction">
          <p>Welcome to BlumacawTech.</p>
          <p>
            BlumacawTech (“BlumacawTech”, “BMT”, “we”, “us”, or “our”) is a technology business based in Bengaluru,
            Karnataka, India, specializing in Shopify applications, ecommerce development, consulting, and technology
            services.
          </p>
          <p>
            We are committed to protecting the privacy, confidentiality, and security of personal information entrusted
            to us by our customers, merchants, business partners, affiliates, website visitors, and individuals
            interacting with our services.
          </p>
          <p>
            This Privacy Policy explains how we collect, access, use, process, store, disclose, retain, and protect
            personal information in connection with our products and services. Our business activities include:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Shopify Applications</strong>
              <List
                items={[
                  <>
                    <strong>BMT B2B Wholesale Pricing:</strong> a Shopify application offering wholesale pricing,
                    customer-specific pricing, registration and approval workflows, bulk ordering, order management,
                    invoicing, customer access controls, and other B2B functionality.
                  </>,
                  <>
                    <strong>BMT Request Quote, Hide Price:</strong> a Shopify application enabling merchants to restrict
                    access to prices, products, collections, and pages, receive quotation requests, send proposals, and
                    manage quotation-to-order workflows.
                  </>,
                ]}
              />
            </li>
            <li>
              <strong>Shopify Agency and Development Services:</strong> custom Shopify store development, website
              design, implementation, integrations, migration, customization, maintenance, technical support, and
              related consulting services.
            </li>
            <li>
              <strong>Affiliate and Partner Program:</strong> programs allowing approved individuals, agencies,
              developers, consultants, and other partners to refer merchants to eligible BlumacawTech products and earn
              commissions according to applicable program terms.
            </li>
            <li>
              <strong>Website and Business Operations:</strong> our website, product documentation, demonstrations,
              contact forms, support channels, sales activities, marketing communications, and other business
              interactions.
            </li>
          </ol>
          <p>
            This Privacy Policy applies to personal information processed through these activities unless a separate
            service-specific agreement or privacy notice applies.
          </p>
          <p>
            By using our services, you acknowledge this Privacy Policy. Where applicable law requires consent for
            particular processing activities, we seek that consent separately.
          </p>
        </Section>

        <Section id="who-we-are" title="2. Who We Are and Our Responsibilities">
          <p>
            BlumacawTech may handle personal information in different capacities depending on the service and the
            circumstances.
          </p>
          <Sub title="2.1 When BlumacawTech acts as a data controller" />
          <p>We generally determine the purposes and methods of processing personal information relating to:</p>
          <List
            items={[
              "Visitors to blumacawtech.com.",
              "Merchants registering for or using our applications, insofar as the information relates to our own business relationship with those merchants.",
              "Individuals contacting our sales or support teams.",
              "Prospective and existing agency clients.",
              "Affiliates, referral partners, and program applicants.",
              "Business representatives, suppliers, and professional contacts.",
              "Our own marketing, contractual, financial, security, and administrative activities.",
            ]}
          />
          <p>
            For these activities, BlumacawTech generally acts as a data controller or equivalent entity under applicable
            privacy laws.
          </p>
          <Sub title="2.2 When BlumacawTech acts as a data processor" />
          <p>
            When merchants use our Shopify applications to manage information relating to their customers, buyers,
            wholesale applicants, or orders, the merchant generally determines the purposes for which that information
            is processed. BlumacawTech processes such information on behalf of the merchant to deliver the
            functionality they have configured.
          </p>
          <p>
            Similarly, when our agency develops, maintains, or manages a Shopify website for a client, we may access or
            process the client’s customer information on the client’s instructions. In these circumstances:
          </p>
          <List
            items={[
              "The merchant or client generally acts as the data controller.",
              "BlumacawTech generally acts as a data processor or service provider.",
              "We process personal information in accordance with the relevant service instructions, agreements, and applicable law.",
              "We do not acquire ownership of a merchant’s or client’s customer information.",
            ]}
          />
          <p>
            Some processing activities, such as our independent security logging and legal compliance, may be
            undertaken by BlumacawTech in its own capacity.
          </p>
          <Sub title="2.3 Merchant responsibilities" />
          <p>
            Merchants and agency clients remain responsible for their own customer-facing privacy notices, lawful
            collection of personal information, obtaining necessary consents, and responding to customer privacy
            requests. We provide reasonable assistance with requests involving information we process on their behalf.
          </p>
        </Section>

        <Section id="information-we-collect" title="3. Information We Collect">
          <p>
            The information we collect depends on how you interact with BlumacawTech. We seek to collect and process
            only information reasonably necessary for the relevant business purpose.
          </p>
          <Sub title="3.1 Merchant and Shopify store information" />
          <p>
            When a merchant installs or uses one of our Shopify applications, we may receive information through
            Shopify’s APIs and authorized application permissions. This may include:
          </p>
          <List
            items={[
              "Store name, Shopify domain, and business contact information.",
              "Store owner or authorized staff name, email, phone number, and address. For BMT B2B Wholesale Pricing this includes the name, email address and Shopify admin language of each staff member who opens the app, which Shopify provides when they do.",
              "Shopify store identifiers and configuration settings.",
              "Product, variant, collection, and inventory information.",
              "Customer records, customer tags, and customer groups.",
              "Pricing rules, discounts, price lists, and catalog information.",
              "Shopify Markets, currencies, languages, and translations.",
              "Theme information, store pages, and relevant storefront settings.",
              "Order, draft order, shipping, and payment-term information.",
              "Application configurations and operational settings.",
              "Technical information necessary for app installation, authentication, operation, support, and troubleshooting.",
            ]}
          />
          <p>
            Access to particular information depends on the application’s granted Shopify permissions and the
            functionality used by the merchant. An application’s ability to access a category of Shopify information
            does not necessarily mean that all information in that category is copied or permanently stored by
            BlumacawTech.
          </p>
          <Sub title="3.2 Customer and wholesale buyer information" />
          <p>
            Where necessary to provide merchant-enabled features, our applications may process information about
            customers, prospective wholesale buyers, and other individuals interacting with a merchant’s store.
            Examples include:
          </p>
          <List
            items={[
              "Full name and contact details.",
              "Email address and phone number.",
              "Billing and shipping addresses.",
              "Company name and business contact information.",
              "Customer identifiers, tags, account status, and approval status.",
              "Tax registration, VAT, or other business identification numbers.",
              "Wholesale registration form responses.",
              "Customer-specific pricing or purchasing eligibility.",
              "Product selections, requested quantities, and order details.",
              "Shipping preferences and quotation requests.",
              "Business documents voluntarily submitted through registration forms.",
              "Communications related to registration, quotations, or orders.",
            ]}
          />
          <p>
            Some application functionality may also involve technical data such as IP addresses, browser or operating
            system information, and approximate geolocation where available through Shopify or relevant technical
            services. We process this information only as appropriate for the configured application features,
            security, troubleshooting, and authorized merchant instructions.
          </p>
          <Sub title="3.3 Website visitor information" />
          <p>When you access our website, we may collect:</p>
          <List
            items={[
              "IP address.",
              "Browser type and version.",
              "Device and operating system information.",
              "Pages visited and navigation activity.",
              "Referral URLs and traffic sources.",
              "Approximate geographic location derived from technical information.",
              "Website interactions and analytics events.",
              "Cookies and similar identifiers.",
              "Information voluntarily submitted through website forms or communications.",
            ]}
          />
          <p>
            We use this information to operate, secure, maintain, and improve our website and understand how visitors
            interact with our content.
          </p>
          <Sub title="3.4 Sales, support, and communication information" />
          <p>When you contact BlumacawTech, we may collect:</p>
          <List
            items={[
              "Your name, email address, and other contact information.",
              "Business or organization details.",
              "Shopify store URL or other relevant website addresses.",
              "Product inquiries and requested features.",
              "Support tickets, email correspondence, and chat messages.",
              "Screenshots, recordings, documents, or logs you voluntarily provide.",
              "Meeting information and technical requirements.",
              "Feedback, survey responses, or testimonials.",
            ]}
          />
          <p>
            We use this information to respond to inquiries, resolve issues, provide support, maintain business
            relationships, and improve our services.
          </p>
          <Sub title="3.5 Payment and financial information" />
          <p>For subscriptions, agency services, or affiliate transactions, we may process:</p>
          <List
            items={[
              "Billing name and contact details.",
              "Business billing address.",
              "Tax identification and invoice information.",
              "Subscription plan and billing status.",
              "Transaction amounts and payment status.",
              "Invoice and payment reference numbers.",
              "Affiliate commissions and payout records.",
            ]}
          />
          <p>
            Shopify app subscription payments are generally administered through Shopify’s billing infrastructure.
            Affiliate payments may be processed through third-party payment services, including PayPal or Wise. Agency
            payments may be handled through separately agreed payment providers or banking arrangements. We do not
            generally need to collect or store complete payment card details when payments are handled by these
            providers.
          </p>
        </Section>

        <Section id="bmt-b2b-wholesale-pricing" title="4. Privacy Practices for BMT B2B Wholesale Pricing">
          <p>
            Application: <Ext href="https://apps.shopify.com/blumacawtech">https://apps.shopify.com/blumacawtech</Ext>
          </p>
          <p>
            BMT B2B Wholesale Pricing enables merchants to operate wholesale and retail workflows within their Shopify
            stores.
          </p>
          <Sub title="4.1 Information processed" />
          <p>Depending on merchant configuration, the application may process:</p>
          <List
            items={[
              "Customer profiles, tags, and account status.",
              "Product and variant information.",
              "Pricing rules, discount settings, and customer-specific prices.",
              "Wholesale registration and approval information.",
              "Minimum and maximum order requirements.",
              "Bulk-order CSV/XLSX files and uploaded purchase-order information.",
              "Order and draft order records, and order details buyers add in the cart (such as a purchase-order number, delivery date, notes, or an attached file).",
              "Shipping and payment-term settings.",
              "Invoice, receipt, and order-document information.",
              "Tax exemption information and business tax identifiers. When a merchant enables the tax number field, the number a buyer enters in the cart is saved on their order and printed on their invoice.",
              "Quote requests buyers send through the store, including the details and files they attach.",
              "Relevant customer communications.",
            ]}
          />
          <Sub title="4.2 Purposes of processing" />
          <p>We process this information to enable merchants to:</p>
          <List
            items={[
              "Display appropriate wholesale and customer-specific prices.",
              "Apply volume discounts and pricing rules.",
              "Restrict storefront access where configured.",
              "Review and approve wholesale registrations.",
              "Apply customer and company purchasing rules.",
              "Process bulk ordering workflows.",
              "Support quotations and draft orders.",
              "Generate business documents.",
              "Configure shipping, payment, and tax-related functionality.",
              "Manage customer groups and wholesale purchasing experiences.",
              "Provide technical support and troubleshoot application functionality.",
            ]}
          />
          <Sub title="4.3 Wholesale registration forms" />
          <p>
            Where merchants enable registration forms, applicants may submit business and personal information directly
            through the merchant’s storefront. Merchants determine the form fields and the purposes for which that
            information is collected.
          </p>
          <p>
            Where document uploads are supported, submitted files are stored in Google Cloud Storage. Passwords
            collected by registration forms are encrypted at rest.
          </p>
          <p>
            Where a merchant turns on a CAPTCHA for a registration form, the form loads Google reCAPTCHA with the
            merchant’s own reCAPTCHA keys, and Google receives technical information about the visitor (such as their IP
            address and browser) to tell people from automated submissions.
          </p>
          <p>We encourage merchants to collect only information necessary for their wholesale approval process.</p>
          <Sub title="4.4 Order documents and invoicing" />
          <p>
            Where enabled, the application may process order details to generate invoices, receipts, packing slips, and
            related documents. These documents may contain customer names, business details, addresses, transaction
            information, or tax identifiers. The merchant controls the business content and intended recipients of these
            documents.
          </p>
          <Sub title="4.5 Email communications" />
          <p>
            The application may send merchant-configured transactional communications, including registration
            confirmations, approval notifications, payment-term notices, and order documents. Recipients and content are
            determined by the merchant.
          </p>
          <p>
            Delivery goes through our built-in sender (delivered via Google’s Gmail service), or, where the merchant
            connects one, through their own email provider: Klaviyo, Gmail, Outlook, SendGrid, Mailgun, Brevo, Amazon
            SES, Elastic Email, Zoho ZeptoMail, Netcore, or their own SMTP server. Where a merchant connects its own email
            provider, that provider processes recipient addresses and message contents under the merchant’s arrangements
            with it.
          </p>
          <Sub title="4.6 Google user data (Google Drive sync)" />
          <p>
            Merchants can optionally connect the application to their own Google Drive so that invoice documents are
            saved to a folder in their Drive. If a merchant connects Google Drive:
          </p>
          <List
            items={[
              <>
                We request the <code>drive.file</code> scope, which only allows access to files and folders this
                application creates; we cannot see, read, or change anything else in the connected Drive. We also receive
                the account’s email address, which is shown in the application’s settings to label the connection.
              </>,
              <>
                We use this access solely to create a “BlueMacaw Invoices” folder and upload the merchant’s own invoice
                documents to it. Documents synchronized through this feature are stored in the merchant’s connected Google
                Drive; BlumacawTech does not retain separate copies of them for the Drive integration.
              </>,
              <>
                The Google credential (refresh token) is stored encrypted and is never shared. Google user data is not
                sold, not disclosed for advertising, not used for unrelated purposes or to train generalized
                artificial-intelligence models, and not read by humans except with the merchant’s explicit permission for
                support, or where required for security or by law.
              </>,
              <>
                Merchants can disconnect at any time in the application’s settings, which revokes and deletes the stored
                credential, or from their{" "}
                <Ext href="https://myaccount.google.com/permissions">Google account permissions</Ext>. Uninstalling the
                application deletes the stored credential as well.
              </>,
            ]}
          />
          <p>
            Our use and transfer of information received from Google APIs adheres to the{" "}
            <Ext href="https://developers.google.com/terms/api-services-user-data-policy">
              Google API Services User Data Policy
            </Ext>
            , including the Limited Use requirements.
          </p>
        </Section>

        <Section id="bmt-request-quote-hide-price" title="5. Privacy Practices for BMT Request Quote, Hide Price">
          <p>
            Application:{" "}
            <Ext href="https://apps.shopify.com/bmt-request-quote-hide-price">
              https://apps.shopify.com/bmt-request-quote-hide-price
            </Ext>
          </p>
          <p>
            BMT Request Quote, Hide Price enables Shopify merchants to control storefront visibility and receive, manage,
            and respond to buyer quotation requests.
          </p>
          <Sub title="5.1 Information processed" />
          <p>Depending on how the merchant configures the application, it may process:</p>
          <List
            items={[
              "Merchant and Shopify store information, including the name and email of staff who use the app.",
              "Customer account and customer tag information.",
              "Storefront access and pricing visibility rules.",
              "Product, collection, and variant details.",
              "Buyer names, email addresses, and contact information.",
              "Company and shipping information submitted in quote requests, and files buyers attach to them.",
              "Product quantities and requested quotation details.",
              "Customer-specific prices relevant to preparing quotations.",
              "Merchant proposals and quotation adjustments.",
              "Quote acceptance or rejection information.",
              "Draft order information.",
              "Email communications and related delivery information.",
              "Limited technical information necessary to operate access-control features.",
            ]}
          />
          <Sub title="5.2 Purposes of processing" />
          <p>We use this information on the merchant’s behalf to:</p>
          <List
            items={[
              "Hide product prices and purchasing options from selected visitors.",
              "Restrict access to products, collections, pages, or storefront content.",
              "Apply customer account, tag-based, or other configured access rules.",
              "Enable buyers to request quotations.",
              "Generate and manage quotation records.",
              "Calculate or retrieve applicable buyer-specific pricing.",
              "Enable merchants to prepare and send proposals.",
              "Generate quotation documents and PDFs.",
              "Support online acceptance of merchant proposals.",
              "Convert accepted quotations into Shopify draft orders.",
              "Send merchant-authorized transactional communications.",
            ]}
          />
          <Sub title="5.3 Quotation form submissions" />
          <p>
            When a buyer submits a quotation request through a participating merchant’s store, the information supplied
            is processed for that merchant’s quotation and sales workflow. The merchant determines the information
            requested, the use of that information, and the subsequent commercial relationship with the buyer.
          </p>
          <p>
            Files attached to quote requests are stored in a private Google Cloud Storage bucket. BlumacawTech does not
            independently use a merchant’s quotation submissions to market unrelated products or services to those
            buyers.
          </p>
          <Sub title="5.4 Quotation emails and connected services" />
          <p>
            Quotation notifications, proposals, and related transactional emails are delivered through our built-in
            sender (delivered via Google’s Gmail service) or an email provider configured by the merchant: Klaviyo,
            Gmail, Outlook, SendGrid, Mailgun, Brevo, Amazon SES, Elastic Email, Zoho ZeptoMail, Netcore, or their own
            SMTP server. Where these providers are used, relevant contact details and message content are transmitted to
            the provider to deliver the requested communication.
          </p>
          <Sub title="5.5 Storefront access controls" />
          <p>
            The application may evaluate Shopify customer account information, customer tags, storefront context, or
            other configured criteria to determine whether a visitor may access particular information or pages. This
            activity is performed to enforce the merchant’s storefront configuration.
          </p>
          <p>
            BlumacawTech does not independently use such access-control information to create advertising profiles of
            individual shoppers.
          </p>
          <Sub title="5.6 Moving settings from BMT B2B Wholesale Pricing" />
          <p>
            Merchants who use both of our applications can move their page locks and quote settings from BMT B2B
            Wholesale Pricing to this application. Only rules and settings are transferred; quote requests and buyer
            information are not.
          </p>
        </Section>

        <Section id="agency" title="6. Privacy Practices for Shopify Agency Services">
          <p>
            BlumacawTech provides Shopify agency, ecommerce development, and related technology services to business
            customers. These services may include:
          </p>
          <List
            items={[
              "Shopify website development and design.",
              "Store setup and configuration.",
              "Store redesign and migration.",
              "Shopify application installation and integration.",
              "Custom application development.",
              "Inventory, pricing, and order synchronization.",
              "Payment, tax, and shipping configuration.",
              "Customer account and B2B functionality.",
              "Website maintenance and troubleshooting.",
              "Technology consulting and ongoing support.",
            ]}
          />
          <Sub title="6.1 Information collected from agency clients" />
          <p>During inquiries, onboarding, development, and ongoing service delivery, we may collect:</p>
          <List
            items={[
              "Client names and business contact details.",
              "Company information and registered business details.",
              "Project requirements and business rules.",
              "Shopify store URLs and technical configurations.",
              "Product catalogs, pricing files, and inventory information.",
              "Shipping, payment, and tax requirements.",
              "Technical specifications and integration documentation.",
              "Project files, designs, and supporting documents.",
              "Testing data and access credentials.",
              "Relevant customer or order information where access is necessary.",
              "Contracts, quotations, invoices, and payment information.",
            ]}
          />
          <Sub title="6.2 Access to client Shopify stores" />
          <p>
            With authorization from the client, we may access their Shopify administration, development stores,
            hosting environments, applications, APIs, and other systems required to deliver the agreed services. We use
            this access only for authorized project activities, including implementation, testing, troubleshooting,
            maintenance, and support.
          </p>
          <p>
            Where feasible, access is provided through delegated staff, collaborator, or other role-based mechanisms
            rather than sharing primary account credentials. We do not intentionally access unrelated information
            outside the authorized scope of work.
          </p>
          <Sub title="6.3 Client customer information" />
          <p>
            During development, migration, integration, or troubleshooting, we may encounter or process personal
            information belonging to the client’s customers. This may include:
          </p>
          <List
            items={[
              "Customer names and contact information.",
              "Order and transaction records.",
              "Shipping addresses.",
              "Customer account identifiers.",
              "Business customer information.",
              "Other records necessary for an approved project.",
            ]}
          />
          <p>
            Such information remains under the control of the client, subject to applicable agreements and law. We do
            not use client customer databases for independent marketing, affiliate referrals, or unrelated business
            activities.
          </p>
          <Sub title="6.4 Third-party applications and integrations" />
          <p>
            Clients may ask us to configure third-party Shopify apps, email services, payment systems, logistics
            platforms, inventory systems, or other integrations. These third parties may independently collect and
            process information according to their own agreements and privacy policies.
          </p>
          <p>
            We encourage clients to review the privacy practices and access permissions of third-party services before
            approving their use. Our responsibility for such services is determined by the relevant development
            agreement and applicable law.
          </p>
          <Sub title="6.5 Development, testing, and project records" />
          <p>
            We may retain project documentation, source code, configuration records, technical logs, and communications
            as required to deliver the services and fulfill agreed support obligations.
          </p>
          <p>
            Where reasonable and practical, test environments should use anonymized, fictional, or limited datasets
            rather than unnecessary production personal information.
          </p>
          <p>
            After project completion, we review ongoing access requirements and remove unnecessary permissions or copies
            of personal information, subject to contractual, operational, or legal retention requirements.
          </p>
          <Sub title="6.6 Confidentiality" />
          <p>
            We treat non-public business information and personal information obtained from clients as confidential.
            Access is limited to authorized personnel and service providers who require the information for legitimate
            project purposes.
          </p>
          <p>
            We do not disclose a client’s non-public commercial information or customer information to unrelated parties
            without authorization or another lawful basis. Additional confidentiality obligations may be established
            through project agreements or nondisclosure agreements.
          </p>
        </Section>

        <Section id="affiliate-program" title="7. Privacy Practices for Our Affiliate and Partner Program">
          <p>
            Program: <Ext href="https://blumacawtech.com/affiliate">https://blumacawtech.com/affiliate</Ext>
          </p>
          <p>
            BlumacawTech operates an affiliate and partner program through which eligible individuals and organizations
            can refer merchants to participating BlumacawTech products.
          </p>
          <Sub title="7.1 Affiliate application information" />
          <p>When an individual or business applies to join our affiliate program, we may collect:</p>
          <List
            items={[
              "Applicant name.",
              "Email address.",
              "Business or organization information supplied during follow-up.",
              "Website, promotional channel, or professional profile information voluntarily provided.",
              "Communication preferences.",
              "Application review and approval records.",
              "Affiliate account or referral identifiers.",
            ]}
          />
          <p>
            We use this information to evaluate applications, communicate with applicants, and administer affiliate
            relationships.
          </p>
          <Sub title="7.2 Referral and attribution information" />
          <p>To administer the program, we may process:</p>
          <List
            items={[
              "Unique affiliate identifiers.",
              "Referral links and tracking codes.",
              "Referral click information.",
              "Cookie or similar attribution identifiers.",
              "Referral source information.",
              "Referred merchant identifiers or store information.",
              "Installation or conversion status.",
              "Eligible subscription and commission information.",
              "Referral dates and attribution periods.",
              "Records used to detect duplicate or fraudulent referrals.",
            ]}
          />
          <p>
            Our published program describes a 30-day referral attribution window. When someone follows an affiliate’s
            link, app.blumacawtech.com sets a referral cookie that lasts 30 days, subject to browser settings and
            technical limitations, and passes the referral code on to our Shopify App Store listing.
          </p>
          <p>
            We run the program on PartnerDock, our affiliate platform. If the referred store installs BMT B2B Wholesale
            Pricing, we send PartnerDock the store’s Shopify domain and the referral code so it can credit the
            affiliate. PartnerDock can also match referrals using Google Analytics data from our App Store listing: page
            views that carry a referral code, and installs.
          </p>
          <p>
            Referral information is used to attribute eligible merchant acquisitions, administer commissions, and
            prevent referral fraud.
          </p>
          <Sub title="7.3 Affiliate commission information" />
          <p>For approved affiliates, we may collect or generate:</p>
          <List
            items={[
              "Affiliate account identifiers.",
              "Referred merchant or conversion records.",
              "Commission eligibility information.",
              "Subscription-based commission calculations.",
              "Amounts earned and paid.",
              "Payment status and transaction references.",
              "Tax and payment documentation where required.",
            ]}
          />
          <p>
            This information is used for accurate commission calculations, payment reconciliation, fraud prevention,
            accounting, and contractual compliance.
          </p>
          <Sub title="7.4 Affiliate payouts" />
          <p>
            Affiliate payments may be facilitated through third-party providers, including PayPal and Wise. Depending on
            the payment method, relevant information may include the affiliate’s name, payment account identifier, email
            address, business details, and other information required by the payment provider.
          </p>
          <p>
            Payment providers may process additional information for identity verification, compliance, fraud
            prevention, and payment delivery under their own privacy policies. BlumacawTech does not require access to
            an affiliate’s payment account password.
          </p>
          <Sub title="7.5 Sharing referral and conversion information" />
          <p>
            To operate the affiliate program, limited referral, conversion, and commission information may be available
            to authorized BlumacawTech personnel and approved affiliate tracking or payment service providers.
          </p>
          <p>
            Affiliate dashboards or communications may show information necessary to understand referral performance and
            earned commissions. Where referral performance information relates to identifiable merchants or
            individuals, disclosure is limited to what is necessary, authorized, and permitted by applicable law.
          </p>
          <p>
            We do not authorize affiliates to access unrelated merchant customer databases, order details, or
            confidential store information.
          </p>
          <Sub title="7.6 Affiliate communications" />
          <p>We may contact applicants and approved affiliates regarding:</p>
          <List
            items={[
              "Application review and approval.",
              "Program onboarding.",
              "Referral activity.",
              "Commission statements.",
              "Payment information.",
              "Program changes.",
              "Product updates and promotional resources.",
              "Compliance and account-related matters.",
            ]}
          />
          <p>Promotional communications are subject to applicable consent and opt-out requirements.</p>
          <Sub title="7.7 Affiliate responsibilities" />
          <p>
            Affiliates are independently responsible for complying with applicable privacy, advertising, and consumer
            protection laws in their promotional activities. They must provide any required disclosures about affiliate
            relationships and obtain necessary consent for tracking technologies they independently operate.
          </p>
          <p>Affiliates must not collect, disclose, or misuse merchant information through unauthorized methods.</p>
        </Section>

        <Section id="how-we-use" title="8. How We Use Personal Information">
          <p>
            Across our applications, agency services, website, and affiliate program, we use personal information for
            the following purposes, as applicable.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border/60">
              <thead>
                <tr className="bg-muted/50 text-foreground">
                  <th scope="col" className="text-left p-3 font-semibold">Purpose</th>
                  <th scope="col" className="text-left p-3 font-semibold">Examples</th>
                </tr>
              </thead>
              <tbody>
                {usePurposes.map(([purpose, examples]) => (
                  <tr key={purpose} className="border-t border-border/60 align-top">
                    <th scope="row" className="text-left p-3 font-medium text-foreground">{purpose}</th>
                    <td className="p-3">{examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            We do not use merchant customer data obtained through Shopify apps or agency projects for unrelated
            independent marketing purposes. We may use aggregated or de-identified operational information to improve
            our services, provided it cannot reasonably be used to identify individuals.
          </p>
        </Section>

        <Section id="legal-bases" title="9. Legal Bases for Processing">
          <p>
            Where applicable privacy law requires a legal basis, BlumacawTech processes personal information based on
            one or more of the following:
          </p>
          <List
            items={[
              <>
                <strong>Contractual necessity:</strong> processing necessary to provide a service, administer an
                affiliate relationship, fulfill a development agreement, or take requested steps before entering into a
                contract.
              </>,
              <>
                <strong>Consent:</strong> processing carried out with valid consent, including where required for
                certain cookies, direct marketing, or optional integrations.
              </>,
              <>
                <strong>Legitimate interests:</strong> processing reasonably necessary for purposes such as service
                security, fraud prevention, business communications, support, and service improvement, subject to
                applicable law and individual rights.
              </>,
              <>
                <strong>Legal obligations:</strong> processing necessary to comply with applicable laws, regulations, tax
                obligations, accounting requirements, and lawful requests.
              </>,
              <>
                <strong>Other legally permitted grounds:</strong> processing otherwise authorized under applicable
                privacy legislation.
              </>,
            ]}
          />
          <p>
            Where BlumacawTech acts as a processor for a Shopify merchant or agency client, the merchant or client is
            generally responsible for establishing the lawful basis for its customer-data processing. We follow
            applicable consent and other lawful-processing requirements in the jurisdictions in which our services
            operate.
          </p>
        </Section>

        <Section id="cookies" title="10. Cookies, Analytics, and Tracking Technologies">
          <p>
            BlumacawTech uses cookies and similar technologies where necessary for website operation, analytics,
            security, and affiliate attribution.
          </p>
          <Sub title="10.1 Essential cookies" />
          <p>
            Essential cookies or equivalent technologies support website and application functionality, session
            management, security, and other necessary technical operations. Inside our applications’ admin pages, for
            example, cookies remember which notices a merchant has dismissed.
          </p>
          <Sub title="10.2 Analytics" />
          <p>
            Our website uses Google Analytics to help us understand website traffic, navigation patterns, and overall
            usage. Google Analytics may process information such as page visits, device characteristics, technical
            identifiers, and approximate geographic information. The Shopify App Store listing for BMT B2B Wholesale
            Pricing also uses Google Analytics; that listing data is exported to Google BigQuery, where PartnerDock can
            read it for affiliate attribution (Section 7.2).
          </p>
          <p>
            We use analytics to understand and improve our website and services. You can block analytics cookies in your
            browser or with Google’s{" "}
            <Ext href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out browser add-on</Ext>.
          </p>
          <Sub title="10.3 Affiliate referral cookies" />
          <p>
            Our affiliate program uses referral attribution mechanisms, which include a referral cookie set on
            app.blumacawtech.com and unique tracking links. The published referral attribution window is 30 days, and the
            cookie expires after 30 days.
          </p>
          <p>
            The purpose of these mechanisms is to associate qualifying merchant conversions with eligible affiliates.
            Affiliate tracking is not intended to provide access to a merchant’s customer records or confidential
            commercial information.
          </p>
          <Sub title="10.4 Browser storage used by our applications on storefronts" />
          <p>
            On stores that use our applications, the storefront scripts keep a few items in the shopper’s browser
            storage: the items in a quote request before it is sent, which locked pages the shopper has unlocked with a
            passcode, and whether the shopper is signed in (including their Shopify customer ID), so that the right
            prices and access rules apply.
          </p>
          <Sub title="10.5 Third-party technologies on our website" />
          <p>
            Certain website features involve third-party technologies: the tawk.to chat widget, fonts served by Google
            Fonts, videos stored on Google Cloud Storage, YouTube videos (loaded only when you choose to play one), a
            review badge from Letsmetrix, store logos from logo.dev, Google Calendar booking links, and Google Apps Script,
            which receives what you enter in our website forms. These third parties may set cookies or process
            information such as your IP address in accordance with their own privacy policies and our configured use of
            their services.
          </p>
          <Sub title="10.6 Cookie choices" />
          <p>
            You can generally manage or delete cookies through your browser settings. Blocking certain technologies may
            affect functionality, including affiliate referral attribution.
          </p>
          <p>
            We do not use personal information collected through our services for unrelated third-party behavioral
            advertising.
          </p>
        </Section>

        <Section id="sharing" title="11. Information Sharing and Service Providers">
          <p>
            We share personal information only where reasonably necessary to provide services, operate our business,
            comply with law, or fulfill authorized instructions. Depending on the service used, recipients include the
            following.
          </p>
          <Sub title="11.1 Shopify" />
          <p>
            We integrate with Shopify to access merchant-authorized store information, maintain applications, and
            implement functionality. Shopify’s address service suggests address formats when a buyer types an address
            into a quote form, and Shopify Sidekick can read our application data when a merchant asks it about their
            store. Shopify independently processes information under its applicable privacy policies and platform
            agreements.
          </p>
          <Sub title="11.2 Cloud hosting and databases" />
          <p>
            Our applications run on Google Cloud Platform: application hosting and document rendering (Cloud Run), file
            storage for registration documents, quote attachments, and order files (Cloud Storage), webhook message
            processing (Pub/Sub), background jobs (Cloud Tasks), and operational logging (Cloud Logging). Their
            databases are hosted on MongoDB Atlas, a managed MongoDB database service. Our website is hosted on Firebase
            Hosting, a Google service.
          </p>
          <Sub title="11.3 Email and communication providers" />
          <p>
            Our applications use Google’s Gmail service for built-in email sending. tawk.to provides the support chat
            inside both applications’ admin pages and on our website.
          </p>
          <p>
            Merchants may also connect their own email delivery providers: Klaviyo, Gmail, Outlook, SendGrid, Mailgun,
            Brevo, Amazon SES, Elastic Email, Zoho ZeptoMail, Netcore, or their own SMTP server. These services process
            relevant sender information, recipient information, and communication contents as required to deliver
            communications.
          </p>
          <Sub title="11.4 Google Drive" />
          <p>
            Google Drive processes merchant documents and related connection information where merchants enable optional
            invoice synchronization in BMT B2B Wholesale Pricing (Section 4.6).
          </p>
          <Sub title="11.5 Analytics providers" />
          <p>
            Google Analytics processes usage information from our website and from the BMT B2B Wholesale Pricing App Store
            listing, and Google BigQuery stores the exported listing data, subject to applicable configuration and
            privacy controls.
          </p>
          <Sub title="11.6 Affiliate and payment providers" />
          <p>
            PartnerDock, our affiliate platform, receives referred stores’ Shopify domains and referral codes and can read
            our App Store listing analytics (Section 7.2). PayPal, Wise, or other authorized payment providers process
            information required for payment delivery.
          </p>
          <Sub title="11.7 Security and content delivery" />
          <p>
            Google reCAPTCHA processes technical information about visitors to registration forms where a merchant
            enables it (Section 4.3). When a shopper uploads a CSV or XLSX order file on a store using BMT B2B Wholesale
            Pricing, the spreadsheet library is loaded from jsDelivr, a public content delivery network, which receives
            the shopper’s IP address and browser information. Google Apps Script receives what visitors enter in our
            website forms.
          </p>
          <Sub title="11.8 Agency delivery and business providers" />
          <p>
            Depending on a client project, authorized development personnel, hosting providers, collaboration platforms,
            code repositories, testing services, and integration providers may access information needed to perform
            their assigned services. Where these providers process personal information on our behalf, we seek to apply
            appropriate contractual and security safeguards.
          </p>
          <Sub title="11.9 Professional advisers and legal authorities" />
          <p>
            Information may be disclosed to legal advisers, accountants, auditors, regulators, courts, or government
            authorities where reasonably necessary and legally permitted or required.
          </p>
          <Sub title="11.10 Business transfers" />
          <p>
            If BlumacawTech undergoes a merger, restructuring, acquisition, or sale of relevant business assets,
            necessary information may be transferred subject to applicable confidentiality, privacy, and legal
            requirements.
          </p>
          <Sub title="11.11 Restrictions on disclosure" />
          <List
            items={[
              "We do not sell merchant customer databases, quotation submissions, agency client customer records, or Google Drive user data.",
              "We do not disclose client customer information to affiliates for unrelated marketing.",
              "We do not authorize service providers to use personal information for unrelated purposes contrary to our applicable agreements and privacy obligations.",
            ]}
          />
        </Section>

        <Section id="storage-and-transfers" title="12. Data Storage and International Transfers">
          <p>
            BlumacawTech operates from India and serves merchants, customers, and business partners in multiple
            countries.
          </p>
          <p>
            Both applications and their databases run on Google Cloud Platform and MongoDB Atlas in India (Mumbai). Email
            sending, file handling, and related services for BMT B2B Wholesale Pricing run on Google Cloud Platform in the
            United States.
          </p>
          <p>
            Depending on the services and providers used, personal information may be processed or accessed from other
            countries. This may occur through cloud hosting, technical support, Shopify integrations, connected email
            providers, agency services, and payment platforms.
          </p>
          <p>
            Where applicable law requires safeguards for international transfers, we implement or arrange appropriate
            measures, which may include:
          </p>
          <List
            items={[
              "Contractual data protection commitments.",
              "Applicable standard contractual clauses or other approved transfer mechanisms.",
              "Access restrictions and confidentiality obligations.",
              "Technical and organizational security controls.",
              "Other legally recognized transfer safeguards.",
            ]}
          />
          <p>
            Specific data locations and subprocessors may vary by product, configuration, and client agreement. We comply
            with applicable restrictions on international transfers where they apply.
          </p>
        </Section>

        <Section id="security" title="13. Information Security">
          <p>
            We maintain technical and organizational safeguards designed to protect personal information from
            unauthorized access, loss, misuse, alteration, and disclosure. Depending on the service and system,
            safeguards include:
          </p>
          <List
            items={[
              <><strong>Encryption in transit:</strong> secure communication protocols, including TLS, for supported application and website connections.</>,
              <><strong>Protection of credentials:</strong> encryption at rest for stored connected-account tokens, API keys, email-provider credentials, and passwords collected by registration forms.</>,
              <><strong>Restricted access:</strong> access to production environments and sensitive information is limited to authorized personnel with legitimate operational needs.</>,
              <><strong>Authentication and permissions:</strong> use of appropriate authentication mechanisms and access permissions for administrative and connected services.</>,
              <><strong>Infrastructure controls:</strong> use of cloud platform security features and operational safeguards appropriate to the systems involved.</>,
              <><strong>Operational monitoring:</strong> review of technical events, errors, and security-related activity to identify and address relevant issues.</>,
              <><strong>Confidentiality:</strong> personnel and authorized service providers are expected to protect information accessed through their work.</>,
              <><strong>Data minimization:</strong> we seek to avoid collecting and retaining information that is unnecessary for the intended functionality.</>,
            ]}
          />
          <p>
            Despite these safeguards, no method of transmission, storage, or processing can be guaranteed to be
            completely secure. If we become aware of a personal data breach, we will investigate and take appropriate
            steps, including notifying affected parties and authorities where required by law or applicable contractual
            obligations.
          </p>
        </Section>

        <Section id="retention" title="14. Data Retention and Deletion">
          <p>
            We retain personal information only for as long as reasonably necessary for the purposes described in this
            Privacy Policy, subject to legal, operational, and contractual requirements. Retention practices differ
            depending on the type of information and service.
          </p>
          <Sub title="14.1 Shopify application information" />
          <p>
            <strong>BMT B2B Wholesale Pricing:</strong> uninstalling the application triggers an automated deletion of
            the data we store for that store, including stored connected-account credentials. Files uploaded through the
            store (registration documents, quote attachments, and order files) are deleted when Shopify sends the store’s
            data erasure request. The exceptions are:
          </p>
          <List
            items={[
              "Merchant and staff contact details, used to send the uninstall follow-up and answer the merchant if they reply. We keep them for four weeks after uninstall, then delete them automatically; reinstalling during that period keeps them.",
              "A record of the store’s Shopify domain and whether it has used its free trial, so that each store receives one free trial.",
              "A record that the store uninstalled the application and when, kept for our usage reporting.",
            ]}
          />
          <p>
            <strong>BMT Request Quote, Hide Price:</strong> uninstalling ends the application’s access to the store
            immediately. When Shopify sends the store’s data erasure request, about 48 hours after uninstall, we delete
            everything we hold for that store, including quote requests, buyer information, attached files, settings,
            and email-provider credentials. Nothing is retained.
          </p>
          <Sub title="14.2 Shopify privacy requests" />
          <p>We support Shopify’s mandatory privacy-compliance processes, including:</p>
          <List items={["Customer data access requests.", "Customer data deletion requests.", "Shop data deletion requests."]} />
          <p>
            A customer data deletion request removes that customer’s records from our applications, including their
            registrations, documents, tax exemptions, quote requests, and attached files. We respond to applicable
            Shopify privacy webhooks and complete required actions within Shopify’s prescribed timelines, subject to
            legally permitted or required exceptions.
          </p>
          <Sub title="14.3 Agency project information" />
          <p>
            Agency information may be retained for the duration of the project, agreed maintenance or support periods,
            and any additional period reasonably necessary for contractual, accounting, security, or legal purposes.
            Client-controlled data and system access are managed in accordance with the relevant project agreement and
            authorized instructions.
          </p>
          <Sub title="14.4 Affiliate information" />
          <p>
            Affiliate application and account information may be retained while an application is under review or an
            affiliate relationship remains active. Commission, transaction, tax, and payment records may be retained for
            applicable accounting, auditing, dispute resolution, and legal compliance purposes. Referral cookies expire
            after 30 days.
          </p>
          <Sub title="14.5 Website and support information" />
          <p>
            Website analytics, inquiry records, and support communications are retained for periods reasonably necessary
            for their purposes. Our applications’ operational logs are kept for 30 days and then deleted.
          </p>
          <Sub title="14.6 Legal retention exceptions" />
          <p>
            Certain information may need to be retained where required to comply with applicable laws, resolve disputes,
            maintain financial records, prevent fraud, or establish, exercise, or defend legal claims. Backup copies may
            be removed through established backup rotation processes unless earlier removal is required by applicable
            law.
          </p>
          <p>When information is no longer necessary, we delete or de-identify it using appropriate methods.</p>
        </Section>

        <Section id="your-rights" title="15. Individual Privacy Rights">
          <p>
            Depending on your jurisdiction and the circumstances of processing, you may have rights relating to your
            personal information. These may include:
          </p>
          <List
            items={[
              <><strong>Access:</strong> request confirmation of whether we process your personal information and obtain access to relevant information.</>,
              <><strong>Correction:</strong> request correction of inaccurate or incomplete information.</>,
              <><strong>Deletion:</strong> request erasure of personal information where applicable.</>,
              <><strong>Portability:</strong> request an export or transfer of eligible information.</>,
              <><strong>Restriction:</strong> request restrictions on certain processing activities.</>,
              <><strong>Objection:</strong> object to eligible processing, including certain direct marketing activities.</>,
              <><strong>Withdrawal of consent:</strong> withdraw consent where processing relies on consent.</>,
              <><strong>Marketing preferences:</strong> opt out of promotional communications.</>,
              <><strong>Complaint:</strong> submit a complaint to an appropriate supervisory or regulatory authority where permitted.</>,
              <><strong>Other applicable rights:</strong> exercise additional rights available under relevant privacy legislation.</>,
            ]}
          />
          <Sub title="15.1 Shopify customer requests" />
          <p>
            If you are a customer of a merchant using a BlumacawTech application, we recommend contacting that merchant
            first. The merchant generally controls the personal information processed through its Shopify store and
            determines how customer privacy requests should be handled.
          </p>
          <p>
            We assist the merchant with applicable access, correction, and deletion requests. You may also contact
            BlumacawTech if you are unable to identify the relevant merchant or require help identifying the
            appropriate process.
          </p>
          <Sub title="15.2 Agency customer requests" />
          <p>
            If your personal information is held in a Shopify store or system operated by an agency client, please
            contact the relevant client. We assist clients with applicable requests involving information processed on
            their behalf.
          </p>
          <Sub title="15.3 Merchant, affiliate, and website visitor requests" />
          <p>
            Merchants, agency clients, affiliates, and website visitors may contact us directly at <Mail />. Please
            describe the request and provide enough information for us to locate the relevant records.
          </p>
          <p>
            We may request reasonable information to verify your identity or authority before processing a request. We
            respond within the timeframes applicable under relevant laws.
          </p>
        </Section>

        <Section id="regional" title="16. Regional Privacy Disclosures">
          <p>
            BlumacawTech serves customers internationally and recognizes that privacy rights and obligations differ by
            jurisdiction.
          </p>
          <Sub title="16.1 European Economic Area and United Kingdom" />
          <p>
            Where the EU GDPR or UK GDPR applies, relevant individuals may have rights of access, rectification,
            erasure, restriction, portability, objection, and withdrawal of consent. Individuals may also have the right
            to lodge a complaint with the appropriate supervisory authority.
          </p>
          <p>
            Our legal bases for relevant processing are described in Section 9. Where required, international transfers
            are subject to appropriate legal safeguards.
          </p>
          <Sub title="16.2 California and other United States jurisdictions" />
          <p>
            Where applicable US state privacy laws apply, eligible individuals may have rights to know or access personal
            information, request correction or deletion, obtain portable copies, opt out of certain processing, or limit
            certain uses of sensitive information.
          </p>
          <p>
            In the context of the processing described in this policy, BlumacawTech does not sell personal information
            or share personal information for cross-context behavioral advertising. We do not use merchant customer data
            for unrelated targeted advertising, and we do not discriminate against individuals for exercising applicable
            privacy rights.
          </p>
          <p>
            Where a legally recognized browser-based opt-out preference applies to processing we conduct, we will honor
            it as required by applicable law.
          </p>
          <Sub title="16.3 India" />
          <p>
            BlumacawTech is based in India and is subject to applicable Indian privacy and information-technology laws.
            Where applicable, we recognize obligations under the Digital Personal Data Protection Act, 2023, and
            associated rules as the relevant provisions come into force.
          </p>
          <p>
            These may include requirements relating to transparency, lawful processing, consent and permitted uses,
            security, retention, grievance handling, and individual rights. We will update our practices and notices as
            necessary to meet applicable obligations.
          </p>
          <p>Individuals may submit privacy questions or grievances to the contact identified in this policy.</p>
          <Sub title="16.4 Other jurisdictions" />
          <p>
            Individuals in other countries may have additional rights under applicable privacy laws. We will review and
            respond to relevant requests in accordance with the laws applicable to the particular processing activity.
          </p>
        </Section>

        <Section id="marketing" title="17. Marketing and Business Communications">
          <p>
            BlumacawTech may communicate with merchants, prospective customers, clients, affiliates, and other business
            contacts regarding our services. Communications may include:
          </p>
          <List
            items={[
              "Product onboarding and service information.",
              "Feature and product announcements.",
              "Relevant business opportunities.",
              "Agency proposals and consultations.",
              "Affiliate program updates.",
              "Support and customer-success communications.",
              "Information about service changes.",
            ]}
          />
          <p>
            Where required, we obtain appropriate consent before sending promotional messages. Recipients may opt out of
            marketing communications using the unsubscribe method provided in the message or by contacting us.
          </p>
          <p>
            For BMT B2B Wholesale Pricing, we send the merchant two emails of our own: a welcome email when the app is
            installed, and a single follow-up when it is uninstalled. They go to the store’s email and to the staff
            members who have used the app, in the language they use Shopify in where we can. Each one says how to opt
            out: reply “unsubscribe” and we will not contact you again.
          </p>
          <p>
            Opting out of marketing does not necessarily prevent essential security, transactional, contractual, or
            administrative communications.
          </p>
          <p>
            We do not add buyers whose information is processed through a merchant’s store to unrelated BlumacawTech
            marketing lists merely because they used that store.
          </p>
        </Section>

        <Section id="automated-processing" title="18. Automated Processing and Decision-Making">
          <p>
            Our applications perform automated operations based on merchant-defined business rules and service
            configurations. Examples include:
          </p>
          <List
            items={[
              "Selecting customer-specific pricing.",
              "Applying wholesale discounts.",
              "Enforcing minimum order quantities.",
              "Controlling storefront visibility.",
              "Determining which price or product information is displayed.",
              "Generating quotation calculations.",
              "Checking relevant order conditions.",
              "Calculating affiliate referral attribution and commissions.",
            ]}
          />
          <p>
            These operations are intended to perform merchant-configured business functions or administer our services.
            Merchants remain responsible for the business rules and purchasing conditions they configure.
          </p>
          <p>
            We do not use personal information obtained from Shopify merchants or agency clients to independently make
            unrelated decisions about individuals’ creditworthiness, employment, or other similarly significant personal
            matters. Where an automated activity becomes subject to additional legal obligations, we will provide
            relevant notices and controls as required.
          </p>
        </Section>

        <Section id="children" title="19. Children’s Privacy">
          <p>
            BlumacawTech’s website, Shopify applications, agency services, and affiliate program are primarily intended
            for businesses, merchants, and professional users. They are not designed or marketed specifically to
            children.
          </p>
          <p>
            We do not knowingly collect children’s personal information for our independent marketing or affiliate
            activities. Where information relating to minors is processed through a merchant’s store, the merchant is
            generally responsible for determining the lawful basis and required safeguards for that processing.
          </p>
          <p>
            If you believe we have collected children’s personal information inappropriately, please contact us so that
            we can review the matter.
          </p>
        </Section>

        <Section id="third-party-sites" title="20. Third-Party Websites and Services">
          <p>
            Our website, documentation, applications, and communications may contain links to external websites and
            services. Examples include:
          </p>
          <List
            items={[
              "Shopify.",
              "Google and Google Drive.",
              "Affiliate and payment providers.",
              "Email service providers.",
              "Third-party Shopify applications.",
              "External demonstration stores.",
              "Scheduling and communication platforms.",
            ]}
          />
          <p>
            These services may have their own privacy policies, contractual terms, and information-processing
            practices. BlumacawTech is not responsible for independent third-party privacy practices except to the
            extent required by applicable law or an agreement governing our use of those services.
          </p>
          <p>We encourage users to review the relevant third-party privacy notices before providing personal information.</p>
        </Section>

        <Section id="changes" title="21. Changes to This Privacy Policy">
          <p>We may update this Privacy Policy periodically to reflect:</p>
          <List
            items={[
              "Changes in our products and services.",
              "New Shopify applications or integrations.",
              "Changes to agency or affiliate operations.",
              "Changes in the categories of information processed.",
              "New service providers or processing arrangements.",
              "Changes in security practices.",
              "Legal and regulatory developments.",
            ]}
          />
          <p>
            When we make material changes, we will revise the effective or last-updated date and provide additional
            notice where required by law. The current version will be available at{" "}
            <Ext href="https://blumacawtech.com/privacy">https://blumacawtech.com/privacy</Ext>. We encourage users to
            review this policy periodically.
          </p>
        </Section>

        <Section id="contact" title="22. Contact Information and Privacy Grievances">
          <p>
            If you have questions about this Privacy Policy, wish to exercise privacy rights, report a concern, or submit
            a data protection grievance, please contact:
          </p>
          <div className="rounded-xl border border-border/60 bg-card p-5 space-y-1 text-sm">
            <p className="font-semibold text-foreground">BlumacawTech</p>
            <p>Business location: Bengaluru, Karnataka, India</p>
            <p>Registered business address: B49 St Anns CGHS LTD, Plot 8A, Sector 7, Dwarka, New Delhi 110075</p>
            <p>
              Website: <Ext href="https://blumacawtech.com">https://blumacawtech.com</Ext>
            </p>
            <p>
              Email: <Mail />
            </p>
            <p>
              Privacy / grievance contact: Utakarsh, <Mail address="utakarsh@blumacawtech.com" />
            </p>
          </div>
          <p>
            We will review privacy-related requests, verify relevant information where necessary, and respond in
            accordance with applicable legal requirements. Where a request relates to a Shopify merchant’s or agency
            client’s customer information, we may need to coordinate with that merchant or client before taking action.
          </p>
          <p className="text-sm">© 2026 BlumacawTech. All rights reserved.</p>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
