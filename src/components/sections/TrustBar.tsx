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
    <section className="relative overflow-hidden bg-slate-950 py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/50 via-transparent to-violet-950/50" />
      <div className="glow-orb absolute left-1/4 top-1/2 h-32 w-32 -translate-y-1/2 bg-indigo-500/20" />
      <div
        className="glow-orb absolute right-1/4 top-1/2 h-32 w-32 -translate-y-1/2 bg-violet-500/15"
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-700/50 bg-slate-800/40 px-3 py-3.5 backdrop-blur-sm transition-colors hover:border-indigo-500/40 hover:bg-slate-800/60 sm:gap-3 sm:px-4"
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
