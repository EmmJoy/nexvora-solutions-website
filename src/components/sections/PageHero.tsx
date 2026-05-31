import type { ReactNode } from "react";
import SectionLabel from "./SectionLabel";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  description: string;
};

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 mesh-bg">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="glow-orb absolute -left-32 top-10 h-64 w-64 bg-indigo-400/20" />
      <div
        className="glow-orb absolute -right-20 bottom-0 h-56 w-56 bg-violet-400/15"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="section-heading mt-6">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
