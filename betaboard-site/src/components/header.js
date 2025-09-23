import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../constants/Constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import BetaBoardLogoWhite from "../assets/BetaBoardWhite.png";
import { APPLE_LINK } from "../constants/Constants";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="shadow-sm fixed w-full z-50 pt-5 pb-5"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Main Header */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          style={{ height: 46, overflow: "hidden" }}
        >
          <img
            src={BetaBoardLogoWhite}
            alt="BetaBoard Logo"
            style={{
              height: 60,
              width: "auto",
              transform: "translateX(-13px)",
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            to="/#faq"
            className="text-white hover:text-[#9AE6B4] font-medium"
          >
            FAQ
          </Link>
          <a
            href="mailto:support@thebetaboard.com"
            className="text-white hover:text-[#9AE6B4] font-medium"
          >
            Contact
          </a>
          <a
            href={APPLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 rounded-lg font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: COLORS.primary }}
          >
            Download BetaBoard
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden bg-[#0A0A0A] px-4 py-3 space-y-2 text-center"
          >
            <Link
              to="/#faq"
              className="block px-4 py-2 rounded-lg text-white hover:text-[#9AE6B4] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
            <a
              href="mailto:support@thebetaboard.com"
              className="block px-4 py-2 rounded-lg text-white hover:text-[#9AE6B4] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href={APPLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg text-white font-medium transition-transform transform hover:scale-105"
              style={{ backgroundColor: COLORS.primary }}
              onClick={() => setMenuOpen(false)}
            >
              Download BetaBoard
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
