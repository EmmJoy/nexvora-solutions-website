"use client";

import { CheckCircle2, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const highlights = [
  "Senior engineers on every project — no outsourcing bait-and-switch",
  "Transparent weekly updates and shared project boards",
  "Fixed-scope quotes before any code is written",
  "Post-launch support and handover documentation included",
];

export default function AboutSection() {
  return (
    <section className="relative border-t border-slate-200/80 bg-white py-20 sm:py-24">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="glass-panel relative overflow-hidden p-8 sm:p-10">
              <div className="glow-orb absolute -right-8 -top-8 h-32 w-32 bg-indigo-400/20" />
              <div className="icon-badge h-14 w-14">
                <Users className="h-7 w-7" />
              </div>
              <p className="mt-6 text-3xl font-bold text-slate-900">Est. 2019</p>
              <p className="mt-2 text-slate-600">
                A focused team of developers, designers, and project leads — not a
                faceless offshore factory.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="stat-card">
                  <p className="text-2xl font-bold gradient-text">8–12</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">Team members</p>
                </div>
                <div className="stat-card">
                  <p className="text-2xl font-bold gradient-text">35+</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">Projects shipped</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="section-heading mt-4">
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
