# Listing Content Sync

- [x] Refresh homepage and blog facts from the October 27 Shopify listing, preserving layouts, article publication dates, and unrelated pages.
- [x] Verify homepage, article updates, and matching metadata. Browser checks passed for homepage ratings, the newest testimonial, all 19 article updates and publication/modified dates; no runtime errors or article phone overflow; build OK.

- [x] Compare the live Shopify listing with current website claims.
- [x] Update outdated copy, pricing, reviews, and search/AI summaries where needed.
- [x] Verify affected pages and publishing checks; preserve existing design and public URLs. Browser checks passed; export check retains its pre-existing tracked-environment-file warning.

# Remove FAQ Section

- REVERSED 18 Oct 2026 (owner decision): the FAQ stays on the homepage and pricing page, in its compact form (first 6 questions, "Show all"), with its FAQPage structured data and the footer FAQ link. Do not remove it.
- [x] Remove the "Frequently Asked Questions" section from the homepage and pricing page, its structured data, and the footer FAQ link. Verified in the browser; typecheck and export check clean apart from the pre-existing tracked-environment-file warning.
- [x] Move "Everything You Need to Sell B2B Wholesale on Shopify" below "Loved by merchants worldwide." on the homepage. Verified section order and spacing in the browser (176px gap, in line with the 160-161px gaps between every other pair of sections).

# Homepage Blog Heading

- [x] Replace the "Tips & Stories for Merchants" heading with "Success Stories" and mention successful case studies in the subtitle. Verified in the browser: heading reads "Success Stories", subtitle names successful case studies, two "Success Story" cards show; build OK.

# Homepage Case Studies Section

- [x] Rename the "Success Stories" heading to "Case Studies" and show only success stories there. Verified in the browser: heading "Case Studies", subtitle "Successful case studies from wholesale teams growing with BMT", exactly 3 cards all tagged SUCCESS STORY (Faire to Shopify, European DTC brand, 40% B2B revenue); typecheck and build OK.

# Remove Nav Bar Items

- PARTLY REVERSED 18 Oct 2026 (owner decision): Pricing stays in the top menu (desktop and mobile) and in the footer. Reviews and Features stay out of the menu. Do not remove Pricing.
- [x] Remove Reviews, Pricing, and Features from the top menu (desktop and mobile). Verified in the browser: header shows only Products, Documentation, Blog, Affiliate, Contact plus the Install Free button; typecheck and build OK.
- [x] Remove the Pricing and Features links from the footer. Verified in the browser: footer links are Shopify App Store, Documentation, Blog, Affiliate Program, Contact Us, Support, Privacy; typecheck and build OK.
# Request Quote, Hide Price Documentation

- [x] Add the Creating quote proposal guide from the supplied Google document, link it from the parent guide, and verify its layout, navigation, and discovery entries. Verified 13 steps, FAQ, parent and return links, canonical URL, HowTo data, desktop and phone layout, and no page errors; build OK. Export checks still flag missing article-related links across the Request Quote guide family and the existing tracked environment file; unrelated pages remain unchanged.

- [x] Add the proposal template guide from the supplied Google document, link it from the parent guide, and verify the page and discovery entries. Verified seven steps, FAQ, parent and return links, canonical URL, desktop and phone layout, and no runtime errors; build OK.

- [x] Add the Request for Quote button guide from the supplied Google document, link it from the parent guide, and verify the page and discovery entries. Browser checks passed: 16 configuration steps, seven customer-experience steps, working FAQ, correct canonical URL, no phone overflow or runtime errors; build OK.

- [x] Add the App Embed section and its “Switch on the app embed” guide from the supplied Google document. Verified the link opens the dedicated guide, all eight steps are present, the FAQ opens, and no browser errors occur; build OK.

- [x] Add the quote approval process guide from the supplied Google document as a new card on the Configure Request Quote, Hide Price page. Verified the page renders all four sections (setup, buyer request, merchant response, buyer approval), the FAQ works, the parent card links through, and the page is registered in discovery entries; build OK.


- [x] Add a documentation link on the BMT Request Quote, Hide Price product page that opens a dedicated documentation page for that app. Verified in the browser: the Documentation button in the hero opens /request-quote-hide-price-guide (10 step cards, prerequisites, troubleshooting, FAQ); route registered in App.tsx and entry-server.tsx, prerender, sitemap and llms.txt; typecheck and build OK.

# Remove Guide Heading and CTA

- [x] Remove the "Step-by-Step Configuration Guide" heading and the "Start Configuration" button from the Configure Request Quote, Hide Price guide. Verified in the browser: neither appears, the 10 step cards still render; build OK.

# Guide Support Callout

- [x] Add the "Need Additional Help?" support callout (Contact Support / View Support Options) above the existing conversion callout on the Configure Request Quote, Hide Price guide, matching the supplied screenshot. Verified in the browser: both sections render centered with their buttons; "Contact Support" opens the live chat.

# Remove Guide Configuration Steps

- [x] Remove the configuration steps (the 10 step cards and their data) from the Configure Request Quote, Hide Price guide, and drop the matching HowTo structured data. Verified in the browser: no step cards or "Step" badges remain; the page reads Configure heading, prerequisites, App Embed card, Common Issues and Solutions, FAQ, support callout, onboarding callout; typecheck and build OK.

# Remove Guide FAQ

- [x] Remove the "Frequently Asked Questions" section from the Configure Request Quote, Hide Price guide, its questions data and matching FAQPage structured data, plus the unused common-issues data left over from the previous removal. Verified in the browser: no FAQ heading or questions remain, the App Embed card, support callout and onboarding callout are unchanged, structured data now carries only Organization, WebSite and BreadcrumbList; the App Embed guide keeps its own FAQ; build OK.

# Guide Back Button

- [x] Rename the "Back to Documentation" button on the Configure Request Quote, Hide Price guide to "Back to the homepage" and point it at the product page /products/bmt-request-quote-hide-price. Verified in the browser: one button with the new label and that address; clicking it lands on the product page. Build OK.

# Guide Closing Callout

- [x] On the Configure Request Quote, Hide Price guide, set the closing callout heading to "Try the Request Quote, Hide Price on Shopify", rewrite its description for that app, and point Get Started at https://apps.shopify.com/bmt-request-quote-hide-price. BookOnboarding now takes optional heading/description/appUrl with the previous wording as defaults, so every other page is unchanged. Verified in the browser: new heading and description show, Get Started opens the Request Quote listing, Book Free Onboarding still opens the calendar, documentation and blog keep the original wording; build OK.

# Blog dates (owner decision, 25 Sep 2026)

- Publish dates (date/isoDate) never change. A refresh sets updated/updatedIsoDate instead. The 27 Oct refresh moved all 19 publish dates to Oct 27; they were restored to the originals with updated set to Oct 27.

