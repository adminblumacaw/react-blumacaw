export const SHOPIFY_APP_URL = "https://apps.shopify.com/blumacawtech";

export const openExternalUrl = (url: string) => {
  if (typeof window === "undefined") return;

  try {
    if (window.top && window.top !== window) {
      window.top.location.href = url;
      return;
    }
  } catch {
    // Cross-frame access can fail in preview, so fall back below.
  }

  const newWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (!newWindow) {
    window.location.href = url;
  }
};
