"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const caseStudies = [
  {
    title: "Field Force Asset Tracking",
    industry: "Logistics & Telecom",
    outcome: "Reduced field reporting time by 67% across 2,400 agents",
    href: "/case-studies",
  },
  {
    title: "Mobile Banking Platform",
    industry: "FinTech",
    outcome: "Reduced load time by 60% and achieved 99.97% uptime",
    href: "/case-studies",
  },
  {
    title: "Warehouse Orchestration System",
    industry: "Supply Chain",
    outcome: "Increased order processing speed by 41% across 12 centers",
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
              Proven Results
            </p>
            <h2 className="section-heading mt-2">Case studies</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Real deployments for banks, manufacturers, and telecom leaders —
              measured by outcomes, not promises.
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
