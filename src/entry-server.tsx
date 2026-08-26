// Server-side rendering entry, used only by scripts/prerender.mjs at build
// time. Renders each route to static HTML so non-JS crawlers (GPTBot,
// ClaudeBot, PerplexityBot, Bingbot) receive real page content instead of an
// empty SPA shell. Not shipped to the browser.
//
// Pages are imported statically (no React.lazy) so renderToString never
// suspends. Analytics (usePageTracking), ScrollToTop, and toasters are
// deliberately omitted — they are browser-only concerns.

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import PricingPage from "./pages/PricingPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Documentation from "./pages/Documentation";
import WholesalePricingGuide from "./pages/WholesalePricingGuide";
import CreatePricingRuleGuide from "./pages/CreatePricingRuleGuide";
import CustomerGroupGuide from "./pages/CustomerGroupGuide";
import AcceptRejectCustomersGuide from "./pages/AcceptRejectCustomersGuide";
import BulkUploadGuide from "./pages/BulkUploadGuide";
import VolumeDiscountGuide from "./pages/VolumeDiscountGuide";
import RegistrationFormGuide from "./pages/RegistrationFormGuide";
import EnableRegistrationFormGuide from "./pages/EnableRegistrationFormGuide";
import OrderLimitsGuide from "./pages/OrderLimitsGuide";
import EnableOrderLimitsGuide from "./pages/EnableOrderLimitsGuide";
import CustomPaymentTermsGuide from "./pages/CustomPaymentTermsGuide";
import CustomShippingRulesGuide from "./pages/CustomShippingRulesGuide";
import LockPageHidePriceGuide from "./pages/LockPageHidePriceGuide";
import QuickOrderFormGuide from "./pages/QuickOrderFormGuide";
import Affiliate from "./pages/Affiliate";
import Privacy from "./pages/Privacy";

export function render(url: string): string {
  const queryClient = new QueryClient();
  return renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/shopify-wholesale-registration-form" element={<BlogPost />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/wholesale-pricing-guide" element={<WholesalePricingGuide />} />
            <Route path="/create-pricing-rule-guide" element={<CreatePricingRuleGuide />} />
            <Route path="/customer-group-guide" element={<CustomerGroupGuide />} />
            <Route path="/accept-reject-customers-guide" element={<AcceptRejectCustomersGuide />} />
            <Route path="/bulk-upload-guide" element={<BulkUploadGuide />} />
            <Route path="/volume-discount-guide" element={<VolumeDiscountGuide />} />
            <Route path="/registration-form-guide" element={<RegistrationFormGuide />} />
            <Route path="/enable-registration-form-guide" element={<EnableRegistrationFormGuide />} />
            <Route path="/order-limits-guide" element={<OrderLimitsGuide />} />
            <Route path="/enable-order-limits-guide" element={<EnableOrderLimitsGuide />} />
            <Route path="/custom-payment-terms-guide" element={<CustomPaymentTermsGuide />} />
            <Route path="/custom-shipping-rules-guide" element={<CustomShippingRulesGuide />} />
            <Route path="/lock-page-hide-price-guide" element={<LockPageHidePriceGuide />} />
            <Route path="/quick-order-form-guide" element={<QuickOrderFormGuide />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
