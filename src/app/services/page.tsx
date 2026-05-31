import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Palette,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "Services",
  description:
    "Web development, UI/UX design, and custom software services from Nexvora Solutions — based in Dhaka, serving clients worldwide.",
};

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Web apps, dashboards, and internal tools",
    description:
      "We build production-ready software with clean code and clear documentation. From MVPs for startups to internal tools for established businesses — scoped honestly, delivered on time.",
    features: [
      "Web applications with React & Next.js",
      "Admin dashboards and internal tools",
      "REST API design and third-party integrations",
      "Database design (PostgreSQL, MongoDB)",
      "Automated testing and CI/CD setup",
      "Performance optimization and bug fixes",
      "Post-launch support and maintenance plans",
      "Full source code and documentation handover",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    tagline: "Interfaces people actually enjoy using",
    description:
      "We design responsive, accessible interfaces in Figma before writing code — so you approve the look and flow early, and there are no expensive surprises later.",
    features: [
      "Wireframes and interactive Figma prototypes",
      "Responsive design for mobile, tablet, and desktop",
      "Design systems and reusable component libraries",
      "User flow mapping and usability review",
      "Accessibility best practices (WCAG basics)",
      "Landing pages and marketing site design",
      "Design-to-development handoff with specs",
      "Iterative revisions based on your feedback",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-heading">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Practical software services for startups and growing businesses.
                Fixed quotes, clear timelines, no jargon-filled proposals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className="card flex flex-col p-8">
                    <div className="icon-badge mb-6 h-14 w-14">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-indigo-600">
                      {service.tagline}
                    </p>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <ul className="mt-8 flex-1 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="mt-16 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center shadow-2xl sm:p-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Not sure which service you need?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-400">
                Book a free 30-minute call. We&apos;ll help you figure out the right
                approach and send a written quote — no commitment required.
              </p>
              <Link href="/contact" className="btn-primary mt-8 px-8 py-3.5 text-base">
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
