"use client";

import { Quote, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Nexvora rebuilt our customer-facing platform in record time. Their team understood our telecom-scale requirements and delivered a system that handles millions of daily transactions flawlessly.",
    name: "Karim Hassan",
    title: "VP of Digital Engineering",
    company: "Robi Axiata Ltd.",
    rating: 5,
  },
  {
    quote:
      "From core banking integration to regulatory compliance, Nexvora handled every complexity. Our digital channels launched on schedule with zero critical incidents in the first quarter.",
    name: "Farhana Rahman",
    title: "Chief Technology Officer",
    company: "Pubali Bank PLC",
    rating: 5,
  },
  {
    quote:
      "We needed a partner who could scale across our manufacturing divisions nationwide. Nexvora's dedicated squad felt like an extension of our own engineering team.",
    name: "Rashid Ahmed",
    title: "Director of IT",
    company: "Gazi Group",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Client Voices
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-4 text-slate-400">
            Trusted by enterprise leaders across Bangladesh and international markets
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 shadow-lg shadow-black/20 sm:p-8">
                <Quote className="h-8 w-8 text-indigo-500/60" aria-hidden="true" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-slate-700/60 pt-6">
                  <StarRating count={item.rating} />
                  <p className="mt-3 font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.title}</p>
                  <p className="text-sm font-medium text-indigo-400">
                    {item.company}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
