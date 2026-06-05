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
import SectionLabel from "../components/sections/SectionLabel";

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
  { icon: MapPin, text: "Uttara, Dhaka · Remote-friendly" },
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
        <section className="relative overflow-hidden mesh-bg">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="glow-orb absolute -left-32 top-20 h-80 w-80 bg-indigo-400/20" />
          <div
            className="glow-orb absolute -right-20 bottom-0 h-72 w-72 bg-blue-400/15"
            style={{ animationDelay: "-4s" }}
          />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <SectionLabel>Software studio · Est. 2019 · Dhaka</SectionLabel>

              <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl xl:leading-[1.08]">
                Software your business can{" "}
                <span className="gradient-text-animated">actually rely on</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-600 sm:text-xl">
                We help startups and growing businesses design, build, and scale
                software products — with the quality and reliability of an
                enterprise engineering team.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary px-8 py-3.5 text-base">
                  Book a Free Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary px-8 py-3.5 text-base">
                  See Our Work
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {trustSignals.map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/70 px-3 py-2 text-xs text-slate-600 backdrop-blur-sm sm:text-sm"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-indigo-500" />
                    {text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <ClientLogosStrip />
        <TrustBar />
        <AboutSection />
        <WhyChooseUs />
        <CaseStudiesPreview />
        <ProcessSection />

        {/* Technical Stack */}
        <section className="relative border-t border-slate-200/80 bg-slate-50 py-20 sm:py-24">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <SectionLabel>Technologies</SectionLabel>
                <h2 className="section-heading mt-4">
                  Our <span className="gradient-text">tech stack</span>
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-slate-600">
                  Modern, proven tools — chosen for maintainability, not hype
                </p>
              </div>

              <div className="glass-panel overflow-hidden">
                <div className="relative flex flex-wrap gap-1 border-b border-slate-200/60 bg-slate-100/40 p-2">
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
                            className="absolute inset-0 rounded-xl bg-white shadow-md shadow-indigo-500/10"
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
                      <h3 className="text-xl font-bold text-slate-900">
                        {activeFramework.headline}
                      </h3>
                      <p className="mt-3 leading-relaxed text-slate-600">
                        {activeFramework.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {activeFramework.stack.map((tech) => (
                          <span key={tech} className="tech-pill">
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
        <section className="border-t border-slate-200/80 bg-white py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            {[
              { value: "35+", label: "Projects Delivered" },
              { value: "20+", label: "Clients Served" },
              { value: "5+", label: "Years in Business" },
              { value: "12+", label: "Technologies Used" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
                <p className="mt-1.5 text-sm font-medium text-slate-600">{stat.label}</p>
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
