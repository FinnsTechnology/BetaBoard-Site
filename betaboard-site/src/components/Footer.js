import { Link } from "react-router-dom";
import BetaBoardLogo from "../assets/BetaBoardWhite.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Left: Logo + tagline */}
          <div className="flex items-start ">
            <Link
              to="/"
              className="flex items-center"
              style={{ height: 46, overflow: "hidden" }}
            >
              <img
                src={BetaBoardLogo}
                alt="BetaBoard Logo"
                style={{
                  height: 60, // bigger than container
                  width: "auto",
                  transform: "translateX(-15px)",
                }}
              />
            </Link>
          </div>

          {/* Center: Social links */}
          <div className="flex justify-start md:justify-center gap-3">
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm5.75-.88a.88.88 0 1 1-1.75 0a.88.88 0 0 1 1.75 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.36 2H21l-6.35 7.27L21.5 22h-5.43l-4.15-6.2L7 22H2l6.66-7.63L2.5 2h5.43l3.76 5.64L18.36 2Zm-1.04 18h1.18L8.64 4h-1.2L17.32 20Z" />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.75 2c.37 2.65 2.23 4.63 4.75 4.91v3.2a7.04 7.04 0 0 1-4.1-1.34v6.68a5.58 5.58 0 1 1-4.84-5.53v3.27a2.27 2.27 0 1 0 1.64 2.18V2h2.55Z" />
              </svg>
            </a>
          </div>

          {/* Right: Contact */}
          <div className="text-sm text-gray-300 md:text-right">
            <p>Let’s build better apps — together.</p>
            <a
              href="mailto:support@thebetaboard.com"
              className="hover:underline"
            >
              support@thebetaboard.com
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
          <a href="/#howitworks" className="hover:text-white">
            How It Works
          </a>

          <a href="/#faq" className="hover:text-white">
            FAQ
          </a>

          <a
            href="mailto:support@thebetaboard.com"
            className="hover:text-white"
          >
            Contact Us
          </a>
          <a href="/community-guidelines" className="hover:text-white">
            Community Guidelines
          </a>
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-white">
            Terms of Service
          </a>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} BetaBoard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
