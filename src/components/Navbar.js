"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-line shadow-[0_1px_20px_rgba(47,51,39,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Chapter 1 logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="font-serif text-xl tracking-wide text-olive-deep">
            Chapter 1
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-muted transition-colors hover:text-olive-deep"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="rounded-full border border-olive px-5 py-2 text-sm uppercase tracking-[0.15em] text-olive-deep transition-colors hover:bg-olive hover:text-cream"
          >
            Find us
          </a>
        </div>

        <button
          className="md:hidden text-olive-deep"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.18em] text-muted"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
