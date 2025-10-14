// App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { HomePage } from "./components/HomePage";
import { PricingPage } from "./components/PricingPage";
import TermsPage from "./components/TermsPage";
import PolicyPage from "./components/PolicyPage";
import SafeDating from "./components/SafeDating";

// Global ScrollToTop component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll smoothly to section if URL contains hash
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll smoothly to top on normal route change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router basename="/">
      {/* Global scroll-to-top handler */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/safedatingpolicy" element={<SafeDating />} />
      </Routes>
    </Router>
  );
}
