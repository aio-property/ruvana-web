import { LayoutDashboard } from "lucide-react";
import { WorkspaceNav } from "@/components/workspace-nav";

export function WorkspaceShell({ type, children }: { type: "owner" | "internal"; children: React.ReactNode }) {
  return (
    <div className="workspace-shell">
      <WorkspaceNav type={type} />
      <div className="workspace-main">{children}</div>
    </div>
  );
}

export function WorkspaceHeader({ eyebrow, title, copy, actions }: { eyebrow: string; title: string; copy: string; actions?: React.ReactNode }) {
  return <header className="workspace-heading"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div>{actions ? <div className="workspace-heading__actions">{actions}</div> : null}</header>;
}

export function Metric({ icon: Icon, label, value, note, accent = false }: { icon: typeof LayoutDashboard; label: string; value: string; note: string; accent?: boolean }) {
  return <article className={`metric ${accent ? "metric--accent" : ""}`}><div><span><Icon size={18} /></span><small>{label}</small></div><strong>{value}</strong><p>{note}</p></article>;
}
