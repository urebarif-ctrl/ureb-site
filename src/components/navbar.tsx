"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-jakarta)] font-extrabold text-xl tracking-tight"
          aria-label="Ureb Arif — Home"
        >
          UREB<span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-shine bg-foreground text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-foreground-secondary transition-all duration-200"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden border-t border-border bg-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        role="menu"
      >
        <div className="px-6 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              role="menuitem"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 bg-foreground text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
            role="menuitem"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
