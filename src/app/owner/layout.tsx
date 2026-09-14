import { WorkspaceShell } from "@/components/workspace-shell";
export default function Layout({ children }: { children: React.ReactNode }) { return <WorkspaceShell type="owner">{children}</WorkspaceShell>; }
