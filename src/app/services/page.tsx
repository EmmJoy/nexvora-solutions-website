import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Palette,
} from "lucide-react";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Services",
  description:
    "Enterprise software engineering and premium UI/UX design services from Nexvora Solutions.",
};

const services = [
  {
    icon: Code2,
    title: "Enterprise Software Engineering",
    tagline: "Mission-critical platforms built to scale globally",
    description:
      "Our engineering teams deliver robust, maintainable software systems for organizations that cannot afford downtime. From microservices architecture to legacy modernization, we handle the full software lifecycle with enterprise-grade rigor.",
    features: [
      "Custom ERP, CRM, and operational workflow platforms",
      "Microservices and event-driven architecture design",
      "Legacy system modernization and cloud migration",
      "API design, integration, and third-party connectivity",
      "Automated CI/CD pipelines with blue-green deployments",
      "Performance optimization and load testing at scale",
      "24/7 monitoring, incident response, and SLA management",
      "Dedicated engineering pods with senior architects",
    ],
  },
  {
    icon: Palette,
    title: "Premium UI/UX Design & Prototyping",
    tagline: "Executive-grade experiences that convert and retain",
    description:
      "We craft design systems and user experiences that reflect your brand's authority while maximizing usability across web, mobile, and embedded platforms. Every pixel is validated through research, prototyping, and usability testing.",
    features: [
      "Enterprise design system creation and governance",
      "High-fidelity interactive prototypes in Figma",
      "User research, journey mapping, and persona development",
      "Accessibility compliance (WCAG 2.1 AA) by default",
      "Responsive and adaptive layouts for all device classes",
      "Executive dashboard and data visualization design",
      "Design-to-development handoff with component specs",
      "A/B testing frameworks and conversion optimization",
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
                Comprehensive digital capabilities designed for enterprise complexity,
                regulatory requirements, and long-term strategic value.
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
                Ready to accelerate your digital roadmap?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-400">
                Schedule a consultation with our solutions architects to discuss your
                enterprise requirements and delivery timeline.
              </p>
              <Link href="/contact" className="btn-primary mt-8 px-8 py-3.5 text-base">
                Request a Consultation
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
