"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, Filter, ListFilter, Map, SlidersHorizontal, X } from "lucide-react";
import type { Property } from "@/lib/mock-data";
import { PropertyCard } from "@/components/property-card";

export function SearchExperience({ properties, location }: { properties: Property[]; location: string }) {
  const [type, setType] = useState("Semua");
  const [instant, setInstant] = useState(false);
  const [sort, setSort] = useState("rekomendasi");
  const [mapOpen, setMapOpen] = useState(true);
  const [moreOpen, setMoreOpen] = useState(false);
  const [bedrooms, setBedrooms] = useState("Semua");

  const filtered = useMemo(() => {
    const matches = properties.filter((property) => {
      if (type !== "Semua" && property.type !== type) return false;
      if (instant && !property.instantBook) return false;
      if (bedrooms !== "Semua" && bedrooms !== "4+" && property.bedrooms !== Number(bedrooms)) return false;
      if (bedrooms === "4+" && property.bedrooms < 4) return false;
      return true;
    });
    return [...matches].sort((a, b) => sort === "termurah" ? a.price - b.price : sort === "rating" ? b.rating - a.rating : Number(b.instantBook) - Number(a.instantBook));
  }, [bedrooms, instant, properties, sort, type]);

  return (
    <div className="search-experience">
      <div className="filter-row">
        <div className="filter-row__scroll">
          {["Semua", "Apartemen", "Rumah", "Vila", "Serviced apartment"].map((item) => <button key={item} className={type === item ? "is-active" : ""} onClick={() => setType(item)}>{type === item ? <Check size={14} /> : null}{item}</button>)}
          <button className={instant ? "is-active" : ""} onClick={() => setInstant((value) => !value)}>{instant ? <Check size={14} /> : null}Instant Book</button>
          <button onClick={() => setMoreOpen(true)}><SlidersHorizontal size={15} />Filter lengkap</button>
        </div>
        <button className="map-toggle" onClick={() => setMapOpen((value) => !value)}>{mapOpen ? <ListFilter size={15} /> : <Map size={15} />}{mapOpen ? "List penuh" : "Lihat peta"}</button>
      </div>
      <div className="result-heading"><div><p>Properti di sekitar</p><h1>{location}</h1><span>{filtered.length} dari 32 hunian cocok · harga sudah termasuk biaya layanan</span></div><label>Urutkan<select value={sort} onChange={(event) => setSort(event.target.value)}><option value="rekomendasi">Rekomendasi</option><option value="termurah">Harga terendah</option><option value="rating">Rating tertinggi</option></select></label></div>
      <div className={`results-layout ${mapOpen ? "results-layout--map" : ""}`}>
        <div className="results-grid">{filtered.map((property) => <PropertyCard key={property.slug} property={property} />)}</div>
        {mapOpen ? <aside className="mock-map" aria-label="Peta hasil pencarian"><div className="map-grid" />{properties.slice(0, 4).map((property, index) => <Link key={property.slug} href={`/property/${property.slug}`} className={`map-pin map-pin--${["one", "two", "three", "four"][index]}`}>{new Intl.NumberFormat("id-ID", { notation: "compact" }).format(property.price)}</Link>)}<button onClick={() => setMapOpen(false)}><X size={16} />Tutup peta</button></aside> : null}
      </div>
      {moreOpen ? <div className="modal-backdrop" role="presentation" onMouseDown={() => setMoreOpen(false)}><section className="filter-modal" role="dialog" aria-modal="true" aria-labelledby="filter-title" onMouseDown={(event) => event.stopPropagation()}><header><div><small>FILTER PENCARIAN</small><h2 id="filter-title">Temukan unit yang benar-benar cocok</h2></div><button onClick={() => setMoreOpen(false)} aria-label="Tutup"><X size={20} /></button></header><div className="filter-modal__body"><fieldset><legend>Rentang harga per bulan</legend><div className="dual-input"><label>Minimum<input defaultValue="Rp3.000.000" /></label><label>Maksimum<input defaultValue="Rp25.000.000" /></label></div></fieldset><fieldset><legend>Jumlah kamar tidur</legend><div className="choice-row">{["Semua", "1", "2", "3", "4+"].map((item) => <button type="button" className={bedrooms === item ? "is-active" : ""} onClick={() => setBedrooms(item)} key={item}>{item}</button>)}</div></fieldset><fieldset><legend>Fasilitas utama</legend><div className="check-grid">{["Wi-Fi", "Kolam renang", "Pet friendly", "Parkir", "Dapur", "Gym"].map((item) => <label key={item}><input type="checkbox" />{item}</label>)}</div></fieldset></div><footer><button onClick={() => { setType("Semua"); setInstant(false); setBedrooms("Semua"); }}>Reset</button><button className="button button--primary" onClick={() => setMoreOpen(false)}><Filter size={16} />Terapkan filter</button></footer></section></div> : null}
    </div>
  );
}
