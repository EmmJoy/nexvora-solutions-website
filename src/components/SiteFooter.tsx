import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-transparent to-transparent" />
      <div className="glow-orb absolute bottom-0 left-1/4 h-48 w-48 bg-indigo-600/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group">
              <Logo variant="dark" size="md" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A software engineering studio helping startups and businesses build
              reliable web and mobile products — from Dhaka to clients worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-indigo-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                <a
                  href="mailto:contact@nexvora-solutions.com"
                  className="transition-colors hover:text-white"
                >
                  contact@nexvora-solutions.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                <a href="tel:+88025550199" className="transition-colors hover:text-white">
                  +880 2-555-0199
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                <span>
                  House 113, Road 3, Block F, Banani,
                  <br />
                  Dhaka 1213, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nexvora Solutions. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            nexvora-solutions.com · Software built with care in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
