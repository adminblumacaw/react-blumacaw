# Add Registration Form CAPTCHA Guide

## What will change
- Add a new “Configure CAPTCHA” link under Registration Forms on the documentation page.
- Create a dedicated guide in the identical format used by the other documentation pages.
- Use the supplied document’s workflow: add CAPTCHA Verification to a form, create Google reCAPTCHA v2 keys, add the store domain, and save the Site Key and Secret Key.
- Include matching troubleshooting, FAQs, page metadata, and search-friendly structured data.
- Add the guide to navigation, prerendering, the sitemap, and the AI-readable documentation index.

## Technical details
- Reuse the existing guide layout, cards, video area, support area, header, footer, and semantic design tokens.
- Add a lazy-loaded client-side route at `/registration-captcha-guide`.
- Keep the existing email functionality guide and link unchanged.
- Verify one main heading, all setup steps, desktop and mobile layout, no horizontal overflow, and a successful build.
