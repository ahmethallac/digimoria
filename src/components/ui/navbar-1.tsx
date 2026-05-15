"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "AI-Powered Digital Performance", href: "/#services" },
  { label: "Custom AI Automation Solutions", href: "/#services" },
  { label: "Website Development", href: "/#services" },
  { label: "AI Content Production", href: "/#services" },
  { label: "AI Agent Development", href: "/#services" },
  { label: "Full AI System Infrastructure", href: "/#services" },
  { label: "Vibe Coding Software Solutions", href: "/#services" },
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between px-5 md:px-6 py-2.5 rounded-full w-full max-w-3xl relative z-10 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-lg shadow-primary/5 border border-border/60"
            : "glass-strong/70 border border-border/40"
        }`}
      >
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/lovable-uploads/0c07502c-8613-4443-9cc9-341a26c5f106.png"
              alt="DigiMoria"
              className="h-7 md:h-8"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full"
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </motion.button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-background rounded-2xl border border-border shadow-xl overflow-hidden"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.label}
                          to={s.href}
                          className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full inline-block"
                >
                  {item.label}
                </Link>
              </motion.div>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 pt-20 px-6 md:hidden flex flex-col"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="absolute top-5 right-5 p-2 rounded-full text-foreground"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </motion.button>

            <div className="flex flex-col space-y-5 mt-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: i * 0.06 + 0.05 }}
                >
                  <Link
                    to={item.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar1 };