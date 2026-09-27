"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, FileClock, House, LayoutDashboard, Megaphone, MessageSquare, Settings, ShieldCheck, WalletCards, Wrench } from "lucide-react";
import { PlatformIcon } from "@/components/platform-icon";
import { internalModules } from "@/lib/ecosystem";

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

const internalNav = internalModules.map((item) => ({ href: item.slug === "command" ? "/internal" : `/internal/${item.slug}`, label: item.name, iconName: item.icon, group: item.group, count: item.slug === "support" ? 12 : undefined }));

export function WorkspaceNav({ type }: { type: "owner" | "internal" }) {
  const pathname = usePathname();
  const nav = type === "owner" ? ownerNav : internalNav;

  return (
    <aside className="workspace-sidebar">
      <p>{type === "owner" ? "OWNER PANEL" : "INTERNAL MANAGEMENT"}</p>
      <nav>{nav.map((item) => { const exactRoot = item.href === `/${type}`; const active = exactRoot ? pathname === item.href : pathname.startsWith(item.href); const icon = "icon" in item ? <item.icon size={18} /> : <PlatformIcon name={item.iconName} size={18} />; return <Link key={item.href} className={active ? "is-active" : ""} href={item.href}>{icon}<span>{item.label}</span>{item.count ? <b>{item.count}</b> : null}</Link>; })}</nav>
      <div className="workspace-health"><span><ShieldCheck size={18} /></span><p><strong>{type === "owner" ? "Properti terlindungi" : "System normal"}</strong><small>{type === "owner" ? "Proteksi aktif di 3 unit" : "Diperiksa 2 menit lalu"}</small></p></div>
    </aside>
  );
}
