"use client";

import { Headphones, MessageSquare, Shield, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const differentiators = [
  {
    icon: Zap,
    title: "Speed of Delivery",
    description:
      "Most MVPs ship in 6–10 weeks. We scope tightly, cut unnecessary features early, and demo working software every two weeks — not wireframes.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "HTTPS everywhere, secure auth patterns, input validation, and regular dependency updates. We build with security in mind from day one, not as an afterthought.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "You get a direct Slack or WhatsApp line to your project lead. Bugs after launch? We respond within one business day and fix critical issues fast.",
  },
  {
    icon: MessageSquare,
    title: "Proven Scalability",
    description:
      "We choose architectures that grow with you — from a few hundred users to tens of thousands — without requiring a full rewrite when you scale.",
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
            Why teams choose <span className="gradient-text">Nexvora</span>
          </h2>
          <p className="mt-4 text-slate-600">
            We&apos;re not the biggest agency — and that&apos;s intentional. You get
            senior attention, clear communication, and software that works.
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
