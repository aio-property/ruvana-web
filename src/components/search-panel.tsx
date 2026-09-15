"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, Car, Compass, Hotel, Luggage, MapPin, Plane, Search, TrainFront, Users } from "lucide-react";
import { useState } from "react";

export function SearchPanel({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [service, setService] = useState("stay");
  const [location, setLocation] = useState("Bali");

  const services = [
    ["stay", "Stay", Hotel], ["flight", "Pesawat", Plane], ["train", "Kereta", TrainFront],
    ["rental", "Rental", Car], ["trip", "Paket Trip", Luggage], ["experience", "Aktivitas", Compass],
  ] as const;

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/search?location=${encodeURIComponent(location)}&service=${service}`);
  }

  return (
    <form className={`search-panel ${compact ? "search-panel--compact" : ""}`} onSubmit={submit}>
      <div className="stay-switch service-switch" role="group" aria-label="Layanan perjalanan">
        {services.map(([id, label, Icon]) => <button type="button" key={id} className={service === id ? "is-active" : ""} onClick={() => setService(id)}><Icon size={16} />{label}</button>)}
      </div>
      <div className="search-fields">
        <label><small>Destinasi</small><span><MapPin size={18} /><input value={location} onChange={(event) => setLocation(event.target.value)} aria-label="Destinasi" /></span></label>
        <label><small>Berangkat / check-in</small><span><CalendarDays size={18} /><input type="date" defaultValue="2026-09-20" aria-label="Tanggal perjalanan" /></span></label>
        <label><small>Pulang / check-out</small><span><CalendarDays size={18} /><input type="date" defaultValue="2026-09-23" aria-label="Tanggal selesai" /></span></label>
        <label><small>Traveler</small><span><Users size={18} /><input defaultValue="2 orang" aria-label="Jumlah traveler" /></span></label>
        <button className="search-submit" type="submit"><Search size={18} /><span>Cari sekarang</span></button>
      </div>
    </form>
  );
}
