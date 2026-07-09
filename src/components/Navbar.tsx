"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={`container-forge flex h-16 items-center justify-between rounded-full border border-line px-5 transition-all duration-300 ${
          scrolled ? "bg-canvas/80 backdrop-blur-xl shadow-soft" : "bg-canvas-soft/70 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-2.5 w-2.5 rounded-full bg-coral transition-transform group-hover:scale-125" />
          <span className="font-display text-lg font-medium tracking-tight text-paper">
            BodyTech
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    active ? "text-paper" : "text-muted hover:text-paper"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/membership" className="btn-primary !px-5 !py-2.5 !text-sm">
            Join Now
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-paper"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-forge mt-2 rounded-3xl border border-line bg-canvas/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-xl px-3 py-3 font-display text-base ${
                    pathname === link.href ? "bg-coral/10 text-paper" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/membership" className="btn-primary w-full justify-center">
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
