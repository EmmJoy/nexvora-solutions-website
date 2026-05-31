"use client";

import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "We needed an MVP in six weeks for investor demos. Nexvora delivered a working product on time, and they explained every technical decision in plain language.",
    name: "Arif K.",
    title: "Co-founder",
    company: "B2B SaaS startup",
    initials: "AK",
  },
  {
    quote:
      "Our old website was slow and hard to update. They rebuilt it in Next.js, cut load times noticeably, and trained our team to manage content ourselves.",
    name: "Sarah M.",
    title: "Marketing Director",
    company: "E-commerce brand",
    initials: "SM",
  },
  {
    quote:
      "Honest communication throughout — when a feature would blow the budget, they told us upfront and suggested a simpler alternative. That kind of integrity is rare.",
    name: "Imran H.",
    title: "Operations Manager",
    company: "Logistics company",
    initials: "IH",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Client feedback
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What clients tell us
          </h2>
          <p className="mt-4 text-sm text-slate-500">
            Names shortened for privacy · Real feedback from recent projects
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 shadow-lg shadow-black/20 sm:p-8">
                <Quote className="h-7 w-7 text-indigo-500/50" aria-hidden="true" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-700/60 pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600/20 text-sm font-semibold text-indigo-300">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-slate-400">
                      {item.title}, {item.company}
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
