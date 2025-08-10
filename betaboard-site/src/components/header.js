import React, { useState } from "react";
import { COLORS } from "../constants/Constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import BetaBoardLogo from "../assets/BetaBoard.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      {/* Main Header */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={BetaBoardLogo}
            alt="BetaBoard Logo"
            className="h-20 w-auto sm:h-24 -ml-5" // negative margin to align with button
          />
        </div>

        {/* Desktop Button */}
        <div className="hidden sm:block">
          <a
            href="#download"
            className="flex items-center justify-center px-4 py-2 rounded-lg font-medium text-white"
            style={{ backgroundColor: COLORS.primary }}
          >
            Download BetaBoard
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden">
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
            className="sm:hidden bg-white shadow-md px-4 py-3 space-y-2 items-center text-center"
          >
            <a
              href="#download"
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
