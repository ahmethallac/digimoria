import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/digimoria_yatay_logo.png";

const services = [
  { label: "AI-Powered Digital Performance", href: "/#services" },
  { label: "Custom AI Automation Solutions", href: "/#services" },
  { label: "Website Development", href: "/#services" },
  { label: "AI Content Production", href: "/#services" },
  { label: "AI Agent Development", href: "/#services" },
  { label: "Full AI System Infrastructure", href: "/#services" },
  { label: "Vibe Coding Software Solutions", href: "/#services" },
];

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="DigiMoria" className="h-8 md:h-10" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 glass-strong rounded-xl overflow-hidden"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        className="block px-4 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              <Link to="/" onClick={() => setMobileOpen(false)} className="block text-sm text-foreground/80">Home</Link>
              <div>
                <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 text-sm text-foreground/80">
                  Services <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((s) => (
                      <Link key={s.label} to={s.href} onClick={() => setMobileOpen(false)} className="block text-xs text-foreground/60">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-sm text-foreground/80">About</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-sm text-foreground/80">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
