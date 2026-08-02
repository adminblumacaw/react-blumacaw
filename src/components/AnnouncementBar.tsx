import { Sparkles, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative gradient-hero text-white text-center text-xs sm:text-sm py-2 sm:py-2.5 pl-3 pr-9 sm:px-4 z-[60]">
      <div className="container mx-auto flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden sm:block" />
        <span className="font-medium">
          New: NET 15/30/60 &amp; Custom Shipping now available
        </span>
        <button
          type="button"
          onClick={() => openExternalUrl(SHOPIFY_APP_URL)}
          className="inline-flex items-center gap-1 min-h-11 sm:min-h-0 font-semibold underline underline-offset-2 hover:no-underline"
        >
          Install free
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center justify-center min-h-11 min-w-11 hover:bg-white/10 rounded transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
