import { BrowserRouter as HashRouter , Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { PricingPage } from "./components/PricingPage";

export default function App() {
  return (
   <HashRouter  basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </HashRouter >
  );
}