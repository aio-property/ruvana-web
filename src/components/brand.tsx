import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="NUSAVYRA homepage">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="img">
          <path d="M9 28.5V12l22 16.5V12" />
          <path d="M9 29c5.5-3.8 11-3.8 16.5 0 2 1.4 3.8 1.8 5.5 1.2" />
        </svg>
        <i />
      </span>
      {compact ? null : <span className="brand__wordmark"><strong>NUSAVYRA</strong><small>ONE JOURNEY</small></span>}
    </Link>
  );
}
