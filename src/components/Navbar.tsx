"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
        isActive
          ? "bg-indigo-50 text-indigo-700 shadow-sm"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-600/10">
            N
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Nexvora
            </span>
            <span className="text-xs font-medium text-slate-500">Solutions</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <Link href="/contact" className="btn-primary ml-3 px-5 py-2">
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-all duration-200 hover:scale-[1.01] hover:bg-slate-50 active:scale-[0.99] md:hidden"
        >
          {drawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 top-[73px] z-40 bg-slate-900/30 backdrop-blur-sm md:hidden"
            onClick={closeDrawer}
            aria-hidden="true"
          />
          <nav className="fixed left-0 right-0 top-[73px] z-50 border-b border-slate-200 bg-white px-4 py-6 shadow-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onNavigate={closeDrawer}
                />
              ))}
              <Link
                href="/contact"
                onClick={closeDrawer}
                className="btn-primary mt-2 w-full py-3"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
