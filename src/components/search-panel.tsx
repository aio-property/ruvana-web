"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, Clock3, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";

export function SearchPanel({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [stay, setStay] = useState("harian");
  const [location, setLocation] = useState("Jakarta Selatan");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/search?location=${encodeURIComponent(location)}&stay=${stay}`);
  }

  return (
    <form className={`search-panel ${compact ? "search-panel--compact" : ""}`} onSubmit={submit}>
      <div className="stay-switch" role="group" aria-label="Durasi sewa">
        {["harian", "bulanan", "tahunan"].map((item) => <button type="button" key={item} className={stay === item ? "is-active" : ""} onClick={() => setStay(item)}>{item[0].toUpperCase() + item.slice(1)}</button>)}
      </div>
      <div className="search-fields">
        <label><small>Lokasi</small><span><MapPin size={18} /><input value={location} onChange={(event) => setLocation(event.target.value)} aria-label="Lokasi" /></span></label>
        <label><small>Mulai tinggal</small><span><CalendarDays size={18} /><input type="date" defaultValue="2026-09-20" aria-label="Mulai tinggal" /></span></label>
        <label><small>Durasi</small><span><Clock3 size={18} /><input key={stay} defaultValue={stay === "harian" ? "3 malam" : stay === "bulanan" ? "3 bulan" : "1 tahun"} aria-label="Durasi" /></span></label>
        <label><small>Penghuni</small><span><Users size={18} /><input defaultValue="2 orang" aria-label="Jumlah penghuni" /></span></label>
        <button className="search-submit" type="submit"><Search size={18} /><span>Cari hunian</span></button>
      </div>
    </form>
  );
}
