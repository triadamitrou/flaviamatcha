import { site } from "@/lib/site";

/**
 * Their mark, carried as a mask over currentColor so it keeps its exact
 * shape and still inverts between light and dark sections.
 */
export function Mark({ className = "" }: { className?: string }) {
  return <span role="img" aria-label={site.fullName} className={`u-mark ${className}`} />;
}

/**
 * The lockup as they set it: the mark above the name, the name in wide
 * capitals, the words "Cafe & Matcha Bar" underneath.
 */
export default function Wordmark({
  className = "",
  stacked = false,
  withTagline = false,
}: {
  className?: string;
  stacked?: boolean;
  withTagline?: boolean;
}) {
  if (!stacked) {
    return (
      <span className={`inline-flex items-center gap-[0.5em] ${className}`}>
        <Mark className="h-[1.5em] w-[1.5em]" />
        <span className="u-caps leading-none">{site.name}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <Mark className="h-[1.9em] w-[1.9em]" />
      <span className="u-caps mt-[0.42em] text-[1em] leading-none">{site.name}</span>
      {withTagline && (
        <span className="mt-[0.5em] font-[family-name:var(--font-body)] text-[max(0.26em,0.625rem)] tracking-[0.3em] text-smoke uppercase">
          {site.tagline}
        </span>
      )}
    </span>
  );
}
