"use client";

import { Headphones, Rocket, Shield, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const differentiators = [
  {
    icon: Rocket,
    title: "Speed of Delivery",
    description:
      "Agile engineering squads ship production-ready MVPs in weeks, not months — with sprint cadences and transparent milestones that keep enterprise stakeholders aligned.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, OWASP compliance, and audit-ready architecture designed for regulated industries including finance, healthcare, and telecom.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Named account managers, on-call senior engineers, and 24/7 incident response — so your mission-critical systems never wait for help.",
  },
  {
    icon: TrendingUp,
    title: "Proven Scalability",
    description:
      "From thousands to millions of users — our platforms power mobile banking, supply chain systems, and global field operations without breaking stride.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Why Nexvora
          </p>
          <h2 className="section-heading mt-2">
            Why choose <span className="gradient-text">Nexvora</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Global engineering standards, enterprise rigor, and a track record trusted
            by organizations across Bangladesh and beyond.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <article className="card h-full p-6 sm:p-8">
                  <div className="icon-badge mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
