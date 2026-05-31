import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  dark?: boolean;
};

export default function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <p className={dark ? "section-label section-label-dark" : "section-label"}>
      {children}
    </p>
  );
}
