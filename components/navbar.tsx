"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PILOT_CTA_LABEL, PILOT_PAGE_URL } from "@/lib/constants";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Pricing", href: "/#pilot-offer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      const menu = document.getElementById("mobile-nav");
      const toggle = document.getElementById("mobile-nav-toggle");

      if (menu?.contains(target) || toggle?.contains(target)) {
        return;
      }

      setMobileOpen(false);
    };

    if (mobileOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onPointerDown);
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl"
          onClick={closeMenu}
        >
          DentalMeet
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={PILOT_PAGE_URL} className="btn-primary px-5 py-2.5 text-sm shadow-md">
            {PILOT_CTA_LABEL}
          </a>
        </div>

        <button
          id="mobile-nav-toggle"
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
          <div className="flex w-5 flex-col gap-1.5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full rounded-full bg-current"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-full rounded-full bg-current"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-full rounded-full bg-current"
            />
          </div>
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full z-50 mt-px border-b border-gray-200 bg-white shadow-lg md:hidden"
            >
              <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Menu
                </p>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-base font-medium text-gray-900 shadow-sm transition-all hover:border-accent/30 hover:bg-accent-light active:scale-[0.99]"
                    >
                      {link.label}
                      <ChevronRight
                        className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <a
                    href={PILOT_PAGE_URL}
                    onClick={closeMenu}
                    className="btn-primary w-full px-6 py-3.5 text-center text-base shadow-md"
                  >
                    {PILOT_CTA_LABEL}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
