import { useId } from "react";

type LogoProps = {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "dark";
};

const sizes = { sm: 36, md: 42, lg: 48 } as const;

function LogoMark({
  size,
  gradId,
  shineId,
  className,
}: {
  size: number;
  gradId: string;
  shineId: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4338CA" />
          <stop stopColor="#6366F1" offset="0.45" />
          <stop stopColor="#7C3AED" offset="0.75" />
          <stop stopColor="#2563EB" offset="1" />
        </linearGradient>
        <linearGradient id={shineId} x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.35" />
          <stop stopColor="white" stopOpacity="0" offset="0.55" />
        </linearGradient>
      </defs>

      <rect width="48" height="48" rx="13" fill={`url(#${gradId})`} />
      <rect width="48" height="48" rx="13" fill={`url(#${shineId})`} />

      <path
        d="M14 34V14"
        stroke="white"
        strokeWidth="3.75"
        strokeLinecap="round"
      />
      <path
        d="M14 14L34 34"
        stroke="white"
        strokeWidth="3.75"
        strokeLinecap="round"
      />
      <path
        d="M34 34V14"
        stroke="white"
        strokeWidth="3.75"
        strokeLinecap="round"
      />

      <circle cx="24" cy="24" r="3.25" fill="white" />
      <circle cx="24" cy="24" r="5.5" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />

      <path
        d="M33.5 12.5C36 14.5 37.2 17.5 36.5 20.5"
        stroke="#C7D2FE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="37.5" cy="11.5" r="2.25" fill="#E0E7FF" />
    </svg>
  );
}

export default function Logo({
  showWordmark = true,
  size = "md",
  className = "",
  variant = "default",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `nexvora-grad-${uid}`;
  const shineId = `nexvora-shine-${uid}`;
  const px = sizes[size];

  const isDark = variant === "dark";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 rounded-[13px] bg-indigo-500/30 blur-md" />
        <LogoMark size={px} gradId={gradId} shineId={shineId} className="relative drop-shadow-lg" />
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-tight">
          <span
            className={`text-base font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Nexvora
          </span>
          <span
            className={`text-xs font-semibold tracking-wide ${
              isDark ? "text-indigo-300" : "text-indigo-600"
            }`}
          >
            Solutions
          </span>
        </span>
      )}
    </span>
  );
}

export { LogoMark };
