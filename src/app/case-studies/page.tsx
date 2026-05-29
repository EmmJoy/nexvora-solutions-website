import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Case Studies",
  description:
    "Real-world enterprise deployment logs and proven outcomes from Nexvora Solutions.",
};

const caseStudies = [
  {
    icon: Truck,
    industry: "Logistics & Field Operations",
    title: "Field Force Asset Tracking Systems",
    client: "Global Infrastructure Corp",
    summary:
      "A unified asset tracking platform deployed across 2,400 field technicians in 18 countries, replacing fragmented spreadsheets and legacy GPS hardware with a real-time mobile-first command system.",
    deploymentLog: [
      "Phase 1 — Discovery & Architecture (8 weeks): Mapped 47 legacy data sources, defined event-sourcing model, and established multi-tenant security boundaries.",
      "Phase 2 — Core Platform Build (16 weeks): Delivered iOS/Android field apps, admin dashboard, and REST/GraphQL API layer with offline-first sync.",
      "Phase 3 — Pilot Rollout (6 weeks): Deployed to 200 technicians across 3 regions with parallel run against legacy system for validation.",
      "Phase 4 — Global Scale (12 weeks): Migrated remaining 2,200 users with zero-downtime cutover and automated data reconciliation.",
    ],
    metrics: [
      { label: "Asset visibility improvement", value: "94%" },
      { label: "Field report submission time", value: "-67%" },
      { label: "Annual operational savings", value: "$4.2M" },
      { label: "System uptime post-launch", value: "99.97%" },
      { label: "Mobile app store rating", value: "4.8/5" },
      { label: "Data sync latency (p95)", value: "< 800ms" },
    ],
  },
  {
    icon: Package,
    industry: "Supply Chain & Warehousing",
    title: "Intelligent Warehouse Orchestration Platform",
    client: "Meridian Retail Group",
    summary:
      "End-to-end warehouse management system integrating RFID scanning, predictive restocking, and carrier API orchestration across 12 fulfillment centers processing 180,000 orders daily.",
    deploymentLog: [
      "Phase 1 — Process Audit (6 weeks): Shadowed warehouse operations, identified 23 manual bottlenecks, and modeled throughput optimization scenarios.",
      "Phase 2 — Platform Development (20 weeks): Built WMS core, RFID integration layer, and carrier-agnostic shipping module with real-time inventory ledger.",
      "Phase 3 — Staged Rollout (10 weeks): Activated 4 pilot warehouses with A/B throughput benchmarking against control sites.",
      "Phase 4 — Enterprise Expansion (14 weeks): Onboarded remaining 8 centers with unified analytics and executive KPI dashboards.",
    ],
    metrics: [
      { label: "Order processing speed", value: "+41%" },
      { label: "Inventory accuracy", value: "99.6%" },
      { label: "Shipping cost reduction", value: "-22%" },
      { label: "Pick error rate decrease", value: "-78%" },
      { label: "Dashboard adoption (managers)", value: "100%" },
      { label: "ROI achieved within", value: "11 months" },
    ],
  },
  {
    icon: MapPin,
    industry: "Energy & Utilities",
    title: "Grid Infrastructure Monitoring Suite",
    client: "Pacific Energy Authority",
    summary:
      "Real-time monitoring and predictive maintenance platform for 8,500 substations, integrating IoT sensor feeds, geospatial mapping, and automated incident escalation workflows.",
    deploymentLog: [
      "Phase 1 — Sensor Integration (10 weeks): Connected 12,000 IoT endpoints via MQTT gateway with edge preprocessing and anomaly detection.",
      "Phase 2 — Command Center UI (14 weeks): Delivered geospatial dashboard, alert management system, and role-based escalation workflows.",
      "Phase 3 — Predictive Models (8 weeks): Deployed ML pipeline for transformer failure prediction with 89% accuracy at 72-hour horizon.",
      "Phase 4 — Regulatory Compliance (6 weeks): Implemented audit trails, NERC CIP alignment, and disaster recovery failover testing.",
    ],
    metrics: [
      { label: "Unplanned outage reduction", value: "-35%" },
      { label: "Mean time to detect faults", value: "-58%" },
      { label: "Maintenance cost savings", value: "$6.8M/yr" },
      { label: "Sensor data ingestion rate", value: "2.1M/min" },
      { label: "Alert false-positive rate", value: "< 2%" },
      { label: "Compliance audit score", value: "100%" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-heading">
                Case <span className="gradient-text">Studies</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Documented deployment logs and verified outcomes from enterprise
                engagements delivered on time, on budget, and at scale.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
            {caseStudies.map((study) => {
              const Icon = study.icon;

              return (
                <article key={study.title} className="card overflow-hidden">
                  <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50/30 p-6 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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
                    </div>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      {study.summary}
                    </p>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="border-b border-slate-100 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Deployment Log
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
                        Verified Metrics
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

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center shadow-2xl sm:p-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Your deployment log starts here
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-400">
                Let&apos;s architect a solution with measurable outcomes tailored to your
                enterprise environment.
              </p>
              <Link href="/contact" className="btn-primary mt-8 px-8 py-3.5 text-base">
                Start a Project Brief
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

        {/* <footer className="border-t border-slate-200 bg-slate-900 py-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Nexvora Solutions. All rights reserved.</p>
        </footer> */}
    </div>
  );
}
