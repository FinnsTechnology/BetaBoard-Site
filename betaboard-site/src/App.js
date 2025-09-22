// src/App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/header";
import FirstDetail from "./components/firstDetail";
import SecondDetail from "./components/secondDetail";
import ThirdDetail from "./components/thirdDetail";
import HowItWorks from "./components/Howitworks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Guidelines from "./components/guidelines";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import CardSuccess from "./components/CardSuccess";
import BankSuccess from "./components/BankSuccess";
import SubscriptionSuccess from "./components/SubscriptionSuccess";
import TopBanner from "./components/TopBanner";
import ResultsSection from "./components/ResultsSection";
import RoleInfoPanel from "./components/RoleInfoPanel";
import DiscordCTA from "./components/DiscordCTA";

// (optional) create these pages; you can stub them for now
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfService from "./pages/TermsOfService";

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    // wait for page render
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);
  return null;
}

function Home() {
  return (
    <>
      {/* content */}
      <div className="pt-16">
        <TopBanner />
      </div>
      <ResultsSection />
      <RoleInfoPanel />
      <DiscordCTA />
      <FAQ />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community-guidelines" element={<Guidelines />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/success/card" element={<CardSuccess />} />
          <Route path="/success/bank" element={<BankSuccess />} />
          <Route path="/success/sub" element={<SubscriptionSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
