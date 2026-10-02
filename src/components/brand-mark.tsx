import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Ureb Arif home">
      <span className="brand-mark relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-foreground text-white shadow-sm">
        <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
          <path
            d="M10 11v9.5C10 26.3 13.8 30 19 30s9-3.7 9-9.5V11"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            className="brand-stroke"
          />
          <path
            d="M22 27.5 30.2 12 35 21.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="brand-stroke brand-stroke-delay"
          />
        </svg>
        <span className="brand-orbit absolute inset-[3px] rounded-[10px] border border-white/20" />
        <span className="brand-dot absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-[family-name:var(--font-jakarta)] text-sm font-extrabold tracking-[0.16em] text-foreground">
            UREB ARIF
          </span>
          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
            Growth strategist
          </span>
        </span>
      )}
    </Link>
  );
}
