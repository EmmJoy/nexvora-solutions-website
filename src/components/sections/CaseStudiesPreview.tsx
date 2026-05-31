"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const caseStudies = [
  {
    title: "Inventory Dashboard",
    industry: "Retail",
    outcome: "Cut manual stock updates by 40% for a 12-store retail chain",
    href: "/case-studies",
  },
  {
    title: "Customer Web Portal",
    industry: "FinTech",
    outcome: "Reduced page load time by 60% for a growing payments startup",
    href: "/case-studies",
  },
  {
    title: "Field Reporting App",
    industry: "Logistics",
    outcome: "Replaced paper forms — field team saves ~3 hours per week",
    href: "/case-studies",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Selected work
            </p>
            <h2 className="section-heading mt-2">Recent projects</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              A sample of what we&apos;ve shipped. Client names withheld where
              requested — full details available on request.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="btn-secondary shrink-0 px-5 py-2.5 text-sm"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.title} delay={index * 0.1}>
              <article className="card flex h-full flex-col p-6 sm:p-7">
                <span className="inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {study.industry}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {study.outcome}
                </p>
                <Link
                  href={study.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
