"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Building2, CalendarDays, CreditCard, FileClock, FileText, House, LayoutDashboard, Megaphone, MessageSquare, Settings, Shield, ShieldCheck, WalletCards, Wrench } from "lucide-react";

const ownerNav = [
  { href: "/owner", label: "Ringkasan", icon: LayoutDashboard },
  { href: "/owner/properties", label: "Properti", icon: House },
  { href: "/owner/reservations", label: "Reservasi", icon: CalendarDays },
  { href: "/owner/calendar", label: "Kalender", icon: FileClock },
  { href: "/owner/operations", label: "Operasional", icon: Wrench },
  { href: "/owner/finance", label: "Keuangan", icon: WalletCards },
  { href: "/owner/campaigns", label: "Campaign", icon: Megaphone },
  { href: "/owner/inbox", label: "Inbox", icon: MessageSquare, count: 4 },
  { href: "/owner/settings", label: "Pengaturan", icon: Settings },
];

const internalNav = [
  { href: "/internal", label: "Command center", icon: LayoutDashboard },
  { href: "/internal/supply", label: "Supply", icon: Building2 },
  { href: "/internal/bookings", label: "Booking", icon: CalendarDays },
  { href: "/internal/payments", label: "Payment", icon: CreditCard },
  { href: "/internal/risk", label: "Risk & trust", icon: Shield },
  { href: "/internal/growth", label: "Growth", icon: BarChart3 },
  { href: "/internal/support", label: "Support", icon: MessageSquare, count: 12 },
  { href: "/internal/audit", label: "Audit log", icon: FileText },
];

export function WorkspaceNav({ type }: { type: "owner" | "internal" }) {
  const pathname = usePathname();
  const nav = type === "owner" ? ownerNav : internalNav;

  return (
    <aside className="workspace-sidebar">
      <p>{type === "owner" ? "OWNER PANEL" : "INTERNAL MANAGEMENT"}</p>
      <nav>{nav.map((item) => { const Icon = item.icon; const exactRoot = item.href === `/${type}`; const active = exactRoot ? pathname === item.href : pathname.startsWith(item.href); return <Link key={item.href} className={active ? "is-active" : ""} href={item.href}><Icon size={18} /><span>{item.label}</span>{item.count ? <b>{item.count}</b> : null}</Link>; })}</nav>
      <div className="workspace-health"><span><ShieldCheck size={18} /></span><p><strong>{type === "owner" ? "Properti terlindungi" : "System normal"}</strong><small>{type === "owner" ? "Proteksi aktif di 3 unit" : "Diperiksa 2 menit lalu"}</small></p></div>
    </aside>
  );
}
