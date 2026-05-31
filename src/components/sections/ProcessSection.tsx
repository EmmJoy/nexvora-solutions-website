"use client";

import { Code2, Lightbulb, Rocket, Search } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery call",
    description:
      "A free 30-minute call to understand your goals, budget, and timeline. No sales pressure — just an honest fit check.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Scope & proposal",
    description:
      "We send a written proposal with milestones, deliverables, and a fixed price before any work begins.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build in sprints",
    description:
      "Two-week sprints with demos you can click through. You see progress early and can steer before it's too late.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & support",
    description:
      "Deployment, documentation, and a handover session. Optional ongoing support if you need us after go-live.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative border-t border-slate-200/80 bg-slate-50 py-20 sm:py-24">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="section-heading mt-4">Simple, transparent process</h2>
          <p className="mt-4 text-slate-600">
            No black boxes. You always know what we&apos;re building, what it costs,
            and when it ships.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.step} delay={index * 0.08}>
                <article className="card relative h-full p-6">
                  <span className="text-xs font-bold tracking-widest gradient-text">
                    {item.step}
                  </span>
                  <div className="icon-badge mb-4 mt-3 h-10 w-10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
