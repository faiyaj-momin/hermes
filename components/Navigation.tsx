"use client";

import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm font-medium text-slate-100">
        <a
          href="#hero"
          className="text-base font-semibold tracking-wide text-emerald-400"
          onClick={() => setMenuOpen(false)}
        >
          JS Environment Developer
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-emerald-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs uppercase tracking-widest text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="text-xs text-emerald-400">JS</span>
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-white/5 bg-slate-950/90 px-4 pb-4 text-sm text-slate-300 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-slate-900 hover:text-emerald-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
