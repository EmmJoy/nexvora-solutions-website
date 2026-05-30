"use client";

import AnimatedSection from "./AnimatedSection";

const clients = [
  { name: "GrameenPhone", abbr: "GP" },
  { name: "Robi", abbr: "RB" },
  { name: "Pubali Bank", abbr: "PB" },
  { name: "Gazi Group", abbr: "GG" },
  { name: "TechCorp", abbr: "TC" },
  { name: "GlobalBank", abbr: "GB" },
  { name: "MediSys", abbr: "MS" },
  { name: "BRAC", abbr: "BR" },
  { name: "Square", abbr: "SQ" },
  { name: "City Bank", abbr: "CB" },
];

function LogoPlaceholder({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-6 grayscale transition-all duration-300 hover:grayscale-0">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-slate-400"
      >
        <rect
          x="1"
          y="1"
          width="42"
          height="42"
          rx="10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="#f8fafc"
        />
        <text
          x="22"
          y="26"
          textAnchor="middle"
          fill="#64748b"
          fontSize="11"
          fontWeight="700"
          fontFamily="var(--font-inter), sans-serif"
        >
          {abbr}
        </text>
      </svg>
      <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-slate-500">
        {name}
      </span>
    </div>
  );
}

export default function ClientLogosStrip() {
  const doubled = [...clients, ...clients];

  return (
    <section className="border-y border-slate-200/80 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Our Partners
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Trusted by industry leaders
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            Delivering enterprise software for leading organizations across Bangladesh
            and worldwide
          </p>
        </AnimatedSection>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="marquee-track flex w-max items-center gap-2 py-2">
          {doubled.map((client, index) => (
            <LogoPlaceholder
              key={`${client.name}-${index}`}
              name={client.name}
              abbr={client.abbr}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
