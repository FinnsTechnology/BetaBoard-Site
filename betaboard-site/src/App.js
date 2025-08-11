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
      <div className="py-16">
        <FirstDetail />
        <SecondDetail />
        <ThirdDetail />
      </div>
      <HowItWorks />
      <FAQ />
    </>
  );
}

function Placeholder({ title }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600">
        Replace this with your full {title} content.{" "}
        <Link to="/#howitworks" className="underline">
          Back to Home
        </Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community-guidelines" element={<Guidelines />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}
