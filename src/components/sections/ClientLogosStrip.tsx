"use client";

import {
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Smartphone,
  Truck,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const industries = [
  { label: "FinTech & Banking", icon: Building2 },
  { label: "E-Commerce & Retail", icon: ShoppingBag },
  { label: "Healthcare", icon: HeartPulse },
  { label: "Logistics & Supply Chain", icon: Truck },
  { label: "SaaS & Startups", icon: Smartphone },
  { label: "Education & EdTech", icon: GraduationCap },
];

function IndustryBadge({
  label,
  icon: Icon,
}: {
  label: string;
  icon: typeof Building2;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 px-5 py-3">
      <Icon className="h-5 w-5 text-slate-400" strokeWidth={1.5} />
      <span className="whitespace-nowrap text-sm font-medium text-slate-600">
        {label}
      </span>
    </div>
  );
}

export default function ClientLogosStrip() {
  const doubled = [...industries, ...industries];

  return (
    <section className="border-y border-slate-200/80 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Industries
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Sectors we work in
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            From local startups to international clients — we&apos;ve shipped software
            across these industries
          </p>
        </AnimatedSection>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="marquee-track flex w-max items-center gap-3 py-2">
          {doubled.map((item, index) => (
            <IndustryBadge key={`${item.label}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
