"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Cloud,
  Layers,
  Mail,
  MapPin,
  Shield,
} from "lucide-react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import ClientLogosStrip from "../components/sections/ClientLogosStrip";
import TrustBar from "../components/sections/TrustBar";
import AboutSection from "../components/sections/AboutSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CaseStudiesPreview from "../components/sections/CaseStudiesPreview";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTABanner from "../components/sections/CTABanner";

const frameworks = [
  {
    id: "cloud",
    label: "Cloud Native",
    icon: Cloud,
    headline: "Reliable hosting and deployment pipelines",
    description:
      "We deploy on AWS, Vercel, and DigitalOcean with automated CI/CD, staging environments, and monitoring — so releases are predictable and rollbacks are easy.",
    stack: ["AWS", "Vercel", "Docker", "GitHub Actions", "CloudFront"],
  },
  {
    id: "frontend",
    label: "Modern Frontend",
    icon: Layers,
    headline: "Fast, accessible interfaces your users will enjoy",
    description:
      "React, Next.js, and TypeScript with responsive layouts, accessibility basics, and performance tuned for real devices — not just Lighthouse scores.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "data",
    label: "Data & Analytics",
    icon: BarChart3,
    headline: "Dashboards and data that inform decisions",
    description:
      "PostgreSQL, Redis, and practical analytics integrations — built for the reporting you actually need, not over-engineered data lakes.",
    stack: ["PostgreSQL", "Redis", "Prisma", "REST APIs", "Chart.js"],
  },
  {
    id: "security",
    label: "Security First",
    icon: Shield,
    headline: "Security built in from the start",
    description:
      "Secure authentication, encrypted connections, role-based access, and input validation — following OWASP guidelines without unnecessary complexity.",
    stack: ["NextAuth", "JWT", "HTTPS", "RBAC", "Rate limiting"],
  },
];

const trustSignals = [
  { icon: CheckCircle2, text: "Free discovery call" },
  { icon: Clock, text: "Reply within 1 business day" },
  { icon: MapPin, text: "Banani, Dhaka · Remote-friendly" },
  { icon: Mail, text: "contact@nexvora-solutions.com" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(frameworks[0].id);
  const activeFramework = frameworks.find((f) => f.id === activeTab) ?? frameworks[0];
  const ActiveIcon = activeFramework.icon;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur-sm">
                Software studio · Est. 2019 · Dhaka, Bangladesh
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Software your business can{" "}
                <span className="gradient-text">actually rely on</span>
              </h1>

              <p className="mt-6 text-balance text-lg leading-relaxed text-slate-600 sm:text-xl">
                We help startups and growing businesses design, build, and scale
                software products — with the quality and reliability of an
                enterprise engineering team.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary w-full px-8 py-3.5 text-base sm:w-auto"
                >
                  Book a Free Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-secondary w-full px-8 py-3.5 text-base sm:w-auto"
                >
                  See Our Work
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {trustSignals.map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-500"
                  >
                    <Icon className="h-4 w-4 text-indigo-500" />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ClientLogosStrip />
        <TrustBar />
        <AboutSection />
        <WhyChooseUs />
        <CaseStudiesPreview />
        <ProcessSection />

        {/* Technical Stack */}
        <section className="border-t border-slate-200/80 bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Our <span className="gradient-text">tech stack</span>
                </h2>
                <p className="mt-2 text-slate-600">
                  Modern, proven tools — chosen for maintainability, not hype
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/60">
                <div className="relative flex flex-wrap gap-1 border-b border-slate-200 bg-slate-100/60 p-2">
                  {frameworks.map((framework) => {
                    const Icon = framework.icon;
                    const isActive = activeTab === framework.id;

                    return (
                      <button
                        key={framework.id}
                        type="button"
                        onClick={() => setActiveTab(framework.id)}
                        className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "text-indigo-700"
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="framework-tab-indicator"
                            className="absolute inset-0 rounded-xl bg-white shadow-sm"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <span className="hidden sm:inline">{framework.label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <motion.div
                  key={activeFramework.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-badge h-12 w-12">
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {activeFramework.headline}
                      </h3>
                      <p className="mt-3 leading-relaxed text-slate-600">
                        {activeFramework.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {activeFramework.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-slate-200/80 bg-white/70 py-16 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            {[
              { value: "35+", label: "Projects Delivered" },
              { value: "20+", label: "Clients Served" },
              { value: "5+", label: "Years in Business" },
              { value: "12+", label: "Technologies Used" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-6 text-center transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/30"
              >
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-1.5 text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <TestimonialsSection />
        <CTABanner />
      </main>

      <SiteFooter />
    </div>
  );
}
