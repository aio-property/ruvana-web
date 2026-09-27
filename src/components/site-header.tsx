"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "@/components/brand";

const modes = [
  { href: "/", label: "Explore", match: "public" },
  { href: "/account", label: "Traveler", match: "account" },
  { href: "/owner", label: "Pemilik Properti", match: "owner" },
  { href: "/partner", label: "Partner", match: "partner" },
  { href: "/internal", label: "Nusavyra HQ", match: "internal" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = pathname.startsWith("/owner") ? "owner" : pathname.startsWith("/partner") ? "partner" : pathname.startsWith("/internal") ? "internal" : pathname.startsWith("/account") ? "account" : "public";
  const profileHref = current === "owner" ? "/owner/settings" : current === "partner" ? "/partner/property-owner/settings" : current === "internal" ? "/internal/people" : "/account/profile";
  const notificationHref = current === "internal" ? "/internal/support" : current === "owner" ? "/owner/inbox" : current === "partner" ? "/partner/property-owner/inbox" : "/account/support";

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <Brand />
        <nav className="mode-nav" aria-label="Mode aplikasi">
          {modes.map((item) => <Link key={item.href} className={current === item.match ? "is-active" : ""} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="topbar__actions">
          {current === "public" || current === "account" ? <Link className="topbar__host" href="/partner">Jadi Partner</Link> : null}
          <Link className="icon-button" href={notificationHref} aria-label="Notifikasi"><Bell size={18} /><i /></Link>
          <Link className="profile-chip" href={profileHref}><span>TD</span><strong>Traveler</strong><ChevronDown size={15} /></Link>
          <button className="mobile-toggle" onClick={() => setOpen((value) => !value)} aria-label="Buka menu" aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      {open ? <nav className="mobile-modes" aria-label="Mode aplikasi mobile">{modes.map((item) => <Link key={item.href} className={current === item.match ? "is-active" : ""} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav> : null}
    </header>
  );
}
