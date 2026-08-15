import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import usePageTracking from "@/hooks/usePageTracking";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

const Documentation = lazy(() => import("./pages/Documentation"));
const WholesalePricingGuide = lazy(() => import("./pages/WholesalePricingGuide"));
const CreatePricingRuleGuide = lazy(() => import("./pages/CreatePricingRuleGuide"));
const CustomerGroupGuide = lazy(() => import("./pages/CustomerGroupGuide"));
const AcceptRejectCustomersGuide = lazy(() => import("./pages/AcceptRejectCustomersGuide"));
const BulkUploadGuide = lazy(() => import("./pages/BulkUploadGuide"));
const VolumeDiscountGuide = lazy(() => import("./pages/VolumeDiscountGuide"));
const RegistrationFormGuide = lazy(() => import("./pages/RegistrationFormGuide"));
const EnableRegistrationFormGuide = lazy(() => import("./pages/EnableRegistrationFormGuide"));
const OrderLimitsGuide = lazy(() => import("./pages/OrderLimitsGuide"));
const EnableOrderLimitsGuide = lazy(() => import("./pages/EnableOrderLimitsGuide"));
const CustomPaymentTermsGuide = lazy(() => import("./pages/CustomPaymentTermsGuide"));
const CustomShippingRulesGuide = lazy(() => import("./pages/CustomShippingRulesGuide"));
const LockPageHidePriceGuide = lazy(() => import("./pages/LockPageHidePriceGuide"));
const QuickOrderFormGuide = lazy(() => import("./pages/QuickOrderFormGuide"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-background" aria-busy="true" />
);

const AppRoutes = () => {
  usePageTracking();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
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
          <Route path="/affiliate/apply" element={<Navigate to="/affiliate#apply" replace />} />
          <Route path="/shopify-wholesale-registration-form" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
