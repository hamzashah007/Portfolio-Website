"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "../ThemeProvider";
import clsx from "clsx";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.setProperty("overflow", "hidden", "important");
      document.documentElement.style.setProperty("overflow", "hidden", "important");
    } else {
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow");
    }
    return () => {
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow");
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
      style={{
        backgroundColor: isScrolled ? (theme === "dark" ? "rgba(17,17,17,0.85)" : "rgba(255,255,255,0.85)") : "transparent",
        borderColor: isScrolled ? "var(--border-color)" : "transparent",
      }}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            // Only scroll to top if we're already on the home page
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState("", document.title, window.location.pathname + window.location.search);
            }
          }}
          className="text-base sm:text-2xl font-bold tracking-tight flex items-center gap-1 group flex-shrink min-w-0 max-w-[65vw] translate-y-[2px] sm:translate-y-0" 
          style={{ color: "var(--text-primary)" }}
        >
          <span className="text-[#10B981] transition-colors flex-shrink-0">&lt;</span>
          <span className="truncate">Syed Hamza Sohail</span>
          <span className="text-[#10B981] transition-colors flex-shrink-0">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-[#10B981] transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-[#F59E0B]" />
            ) : (
              <Moon size={16} className="text-[#10B981]" />
            )}
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} className="text-[#F59E0B]" /> : <Moon size={16} className="text-[#10B981]" />}
          </button>
          <button
            className="hover:text-[#10B981]"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-center items-center"
            style={{ 
              backgroundColor: theme === "dark" ? "var(--bg-primary)" : "var(--bg-primary)",
            }}
          >
            {/* Close Button in Full Screen */}
            <button
              className="absolute top-6 right-6 p-2 hover:text-[#10B981] transition-colors"
              style={{ color: "var(--text-primary)" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold hover:text-[#10B981] transition-all"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-10 py-4 rounded-full bg-[#10B981] text-white font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social Links in Menu */}
            <div className="absolute bottom-12 flex gap-8">
               {/* Custom icons added earlier in Footer could be reused here if desired, 
                   but for now keeping it simple with text or basic icons */}
               <p className="text-sm tracking-widest uppercase opacity-40">Syed Hamza Sohail</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
