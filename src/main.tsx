import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// Every route is prerendered with its server-rendered markup (see
// scripts/prerender.mjs). Hydrating adopts that DOM instead of replacing it;
// replacing it repainted the whole page once the JS arrived, which was most of
// the mobile LCP. Only hydrate when the markup was rendered for this exact
// path — an unknown URL is served the homepage shell by the SPA rewrite, and
// hydrating that into a different page would mismatch.
const ssrPath = root.dataset.ssrPath;
const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

if (ssrPath === currentPath) {
  hydrateRoot(root, <App />, {
    onRecoverableError: (error) => console.error("[hydration]", error),
  });
} else {
  createRoot(root).render(<App />);
}
