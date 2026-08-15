import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restores scroll position on route change and reliably scrolls to
 * hash anchors (e.g. /#reviews) even when the target section renders
 * after the initial paint.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const id = decodeURIComponent(hash.replace("#", ""));
    let attempts = 0;
    let frame = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts++ < 40) {
        frame = window.setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
    return () => window.clearTimeout(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
