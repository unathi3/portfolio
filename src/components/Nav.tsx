"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_75%,transparent)] backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="display text-xl no-underline" aria-label="Unathi Dlamini, home">
          UD<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm font-semibold uppercase tracking-[.14em] no-underline hover:text-[var(--accent-text)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 border-2 border-[var(--line)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`absolute left-2 right-2 h-[2px] bg-[var(--text)] transition-transform ${open ? "top-[17px] rotate-45" : "top-[12px]"}`} />
          <span className={`absolute left-2 right-2 top-[17px] h-[2px] bg-[var(--text)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-2 right-2 h-[2px] bg-[var(--text)] transition-transform ${open ? "top-[17px] -rotate-45" : "top-[22px]"}`} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t-2 border-[var(--line)] bg-[var(--bg)] md:hidden" aria-label="Mobile">
          <ul className="wrap py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="display block py-3 text-4xl no-underline hover:text-[var(--accent)]" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
