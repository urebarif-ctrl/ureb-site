"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border"
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

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-border bg-white px-6 py-4 space-y-3"
          role="menu"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted hover:text-foreground"
              role="menuitem"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-accent-hover transition-colors"
            role="menuitem"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
