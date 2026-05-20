import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { NAV, PROFILE } from "../lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-white/10"
          : "bg-transparent border-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] flex items-center gap-2 group"
          data-testid="navbar-logo"
        >
          <span className="inline-block w-2 h-2 bg-acid animate-blink" />
          <span className="text-white">CP</span>
          <span className="text-neutral-500 hidden sm:inline">
            / {PROFILE.title}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-acid link-underline"
              data-testid={`nav-link-${n.label.toLowerCase()}`}
            >
              <span className="text-neutral-600 mr-2">{n.id}</span>
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex font-mono text-xs uppercase tracking-[0.2em] border border-white/30 px-4 py-2 hover:bg-acid hover:text-black hover:border-acid transition-colors"
          data-testid="navbar-cta"
        >
          Let's talk →
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 border border-white/20"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-300 hover:text-acid"
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                >
                  <span className="text-neutral-600 mr-2">{n.id}</span>
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] border border-acid text-acid px-4 py-3 text-center"
                data-testid="mobile-cta"
              >
                Let's talk →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
