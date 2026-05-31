import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layout,
  Smartphone,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import SiteFooter from "../../components/SiteFooter";
import PageHero from "../../components/sections/PageHero";

export const metadata = {
  title: "Case Studies",
  description:
    "Selected software projects delivered by Nexvora Solutions for startups and growing businesses.",
};

const caseStudies = [
  {
    icon: Layout,
    industry: "Retail & E-Commerce",
    title: "Multi-Store Inventory Dashboard",
    client: "Regional retail chain (confidential)",
    summary:
      "A web-based inventory system for a 12-store retail chain in Dhaka, replacing spreadsheet tracking with real-time stock levels, low-stock alerts, and a manager dashboard.",
    deploymentLog: [
      "Week 1–2 — Discovery: Mapped existing workflow, interviewed store managers, defined MVP scope.",
      "Week 3–8 — Build: Next.js admin panel, PostgreSQL backend, role-based access for staff vs. managers.",
      "Week 9–10 — Pilot: Rolled out to 3 stores, gathered feedback, fixed edge cases.",
      "Week 11–12 — Launch: Deployed to all 12 locations with training sessions and written docs.",
    ],
    metrics: [
      { label: "Manual stock-update time", value: "-40%" },
      { label: "Stock-out incidents (monthly)", value: "-28%" },
      { label: "Manager dashboard adoption", value: "100%" },
      { label: "Project duration", value: "12 weeks" },
      { label: "Post-launch critical bugs", value: "2 (fixed in 48h)" },
      { label: "Client satisfaction", value: "5/5" },
    ],
  },
  {
    icon: Smartphone,
    industry: "FinTech",
    title: "Customer Account Portal",
    client: "Payments startup (confidential)",
    summary:
      "A customer-facing web portal for a growing fintech startup, allowing users to view transactions, download statements, and manage profile settings — rebuilt from a slow legacy PHP site.",
    deploymentLog: [
      "Week 1–2 — Audit: Performance profiling of legacy site, identified bottlenecks and UX pain points.",
      "Week 3–7 — Frontend: Next.js rebuild with responsive design and accessible forms.",
      "Week 5–8 — Backend: REST API integration with existing payment gateway, secure session handling.",
      "Week 9 — Launch: Staged rollout with monitoring; zero downtime cutover.",
    ],
    metrics: [
      { label: "Page load time", value: "-60%" },
      { label: "Mobile bounce rate", value: "-22%" },
      { label: "Support tickets (account issues)", value: "-35%" },
      { label: "Project duration", value: "9 weeks" },
      { label: "Lighthouse performance score", value: "92" },
      { label: "Uptime since launch", value: "99.8%" },
    ],
  },
  {
    icon: Code2,
    industry: "Logistics",
    title: "Field Reporting Mobile Web App",
    client: "Logistics SME (confidential)",
    summary:
      "A mobile-friendly web app for field agents to submit daily delivery reports, upload photos, and track route completion — replacing WhatsApp messages and paper forms.",
    deploymentLog: [
      "Week 1 — Field research: Rode along with 5 agents to understand daily workflow.",
      "Week 2–6 — Build: Progressive web app with offline support for poor connectivity areas.",
      "Week 7 — Training: On-site session with 20 field agents, printed quick-start guide.",
      "Week 8 — Go-live: Full team adoption with daily report exports for management.",
    ],
    metrics: [
      { label: "Paper forms eliminated", value: "100%" },
      { label: "Daily reporting time per agent", value: "-3 hrs/wk" },
      { label: "Report accuracy (management audit)", value: "+45%" },
      { label: "Project duration", value: "8 weeks" },
      { label: "Active daily users", value: "20+" },
      { label: "Data sync success rate", value: "98%" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          label="Portfolio"
          title={
            <>
              Case <span className="gradient-text">Studies</span>
            </>
          }
          description="Real projects with real outcomes. Some client names are withheld by request — we're happy to share references during a discovery call."
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
            {caseStudies.map((study) => {
              const Icon = study.icon;

              return (
                <article
                  key={study.title}
                  className="card overflow-hidden"
                >
                  <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50/30 p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="icon-badge">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-indigo-600">
                          {study.industry}
                        </p>
                        <h2 className="mt-1 text-2xl font-bold text-slate-900">
                          {study.title}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                          Client: {study.client}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      {study.summary}
                    </p>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="border-b border-slate-100 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Project Timeline
                      </h3>
                      <ol className="space-y-4">
                        {study.deploymentLog.map((entry, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                              {index + 1}
                            </span>
                            <p className="text-sm leading-relaxed text-slate-700">
                              {entry}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Outcomes
                      </h3>
                      <ul className="space-y-3">
                        {study.metrics.map((metric) => (
                          <li
                            key={metric.label}
                            className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3"
                          >
                            <span className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600" />
                              {metric.label}
                            </span>
                            <span className="text-sm font-bold text-indigo-700">
                              {metric.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-center shadow-2xl sm:p-12">
              <div className="glow-orb absolute -left-16 -bottom-16 h-48 w-48 bg-violet-500/20" />
              <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Want results like these?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-400">
                Tell us about your project. We&apos;ll respond within one business
                day with an honest assessment and a fixed-scope quote.
              </p>
              <Link href="/contact" className="btn-primary mt-8 px-8 py-3.5 text-base">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
