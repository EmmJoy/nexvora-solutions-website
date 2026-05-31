"use client";

import { CheckCircle2, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  "Senior engineers on every project — no outsourcing bait-and-switch",
  "Transparent weekly updates and shared project boards",
  "Fixed-scope quotes before any code is written",
  "Post-launch support and handover documentation included",
];

export default function AboutSection() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50/50 p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg">
                <Users className="h-7 w-7" />
              </div>
              <p className="mt-6 text-3xl font-bold text-slate-900">Est. 2019</p>
              <p className="mt-2 text-slate-600">
                A focused team of developers, designers, and project leads — not a
                faceless offshore factory.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">8–12</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">Team members</p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">35+</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">Projects shipped</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Who we are
            </p>
            <h2 className="section-heading mt-2">
              A studio that ships,{" "}
              <span className="gradient-text">not slides</span>
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Nexvora Solutions is a software engineering studio based in Banani,
              Dhaka. We work with startups, SMEs, and growing companies across
              Bangladesh and internationally — building web apps, internal tools,
              and customer-facing platforms that actually go live.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              You talk directly to the people writing your code. No account-manager
              middle layer, no inflated promises — just honest timelines, clean
              architecture, and software you can maintain long after we hand it over.
            </p>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
