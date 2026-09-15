"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "@/components/brand";

const modes = [
  { href: "/", label: "Explore", match: "public" },
  { href: "/owner", label: "Partner Center", match: "owner" },
  { href: "/internal", label: "Ruvana HQ", match: "internal" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = pathname.startsWith("/owner") ? "owner" : pathname.startsWith("/internal") ? "internal" : "public";

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <Brand />
        <nav className="mode-nav" aria-label="Mode aplikasi">
          {modes.map((item) => <Link key={item.href} className={current === item.match ? "is-active" : ""} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="topbar__actions">
          {current === "public" ? <Link className="topbar__host" href="/owner/properties/new">Jadi Partner</Link> : null}
          <Link className="icon-button" href={current === "internal" ? "/internal/support" : current === "owner" ? "/owner/inbox" : "/messages"} aria-label="Notifikasi"><Bell size={18} /><i /></Link>
          <Link className="profile-chip" href={current === "owner" ? "/owner/settings" : current === "internal" ? "/internal/audit" : "/profile"}><span>EC</span><strong>Evans</strong><ChevronDown size={15} /></Link>
          <button className="mobile-toggle" onClick={() => setOpen((value) => !value)} aria-label="Buka menu" aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      {open ? <nav className="mobile-modes" aria-label="Mode aplikasi mobile">{modes.map((item) => <Link key={item.href} className={current === item.match ? "is-active" : ""} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav> : null}
    </header>
  );
}
