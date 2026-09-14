import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="RUVANA homepage">
      <span className="brand__mark" aria-hidden="true"><i /><i /></span>
      {compact ? null : <strong>RUVANA</strong>}
    </Link>
  );
}
