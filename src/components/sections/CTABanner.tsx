"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build something remarkable?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
            Partner with Nexvora Solutions to design, engineer, and deploy
            enterprise-grade software — trusted by industry leaders in Bangladesh
            and around the world.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary w-full px-8 py-3.5 text-base sm:w-auto"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-500/60 bg-slate-800/60 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-[1.01] hover:border-slate-400 hover:bg-slate-800 active:scale-[0.99] sm:w-auto"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
