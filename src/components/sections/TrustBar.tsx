"use client";

import { Clock, Code2, Globe, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const trustItems = [
  { icon: ShieldCheck, label: "Secure by Design" },
  { icon: Globe, label: "GDPR Aware Development" },
  { icon: Code2, label: "Clean Code Standards" },
  { icon: Clock, label: "24/7 Client Support" },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-900 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-700/60 bg-slate-800/40 px-3 py-3 sm:gap-3 sm:px-4"
                >
                  <Icon className="h-4 w-4 shrink-0 text-indigo-400 sm:h-5 sm:w-5" />
                  <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
