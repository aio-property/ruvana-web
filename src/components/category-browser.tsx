"use client";

import Link from "next/link";
import { ArrowUpDown, Check, Plus, Search, SlidersHorizontal, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { PlatformIcon } from "@/components/platform-icon";
import type { EcosystemProduct } from "@/lib/ecosystem";

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

export function CategoryBrowser({ category, products }: { category: string; products: EcosystemProduct[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recommended");
  const [filter, setFilter] = useState("all");
  const [saved, setSaved] = useState<string[]>([]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesQuery = !normalized || `${product.title} ${product.location} ${product.provider}`.toLowerCase().includes(normalized);
      const matchesFilter = filter === "all" || (filter === "instant" && /instant|langsung|tersedia/i.test(product.status)) || (filter === "top" && product.rating >= 4.9);
      return matchesQuery && matchesFilter;
    });
    return [...filtered].sort((a, b) => sort === "price" ? a.price - b.price : sort === "rating" ? b.rating - a.rating : b.reviews - a.reviews);
  }, [filter, products, query, sort]);

  function toggleSaved(id: string) {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <div className="catalog-browser">
      <div className="catalog-toolbar">
        <label className="catalog-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama, lokasi, atau operator" /></label>
        <div className="catalog-filters" aria-label="Filter hasil">
          {[{ key: "all", label: "Semua" }, { key: "instant", label: "Konfirmasi cepat" }, { key: "top", label: "Rating 4.9+" }].map((item) => <button key={item.key} className={filter === item.key ? "is-active" : ""} onClick={() => setFilter(item.key)}><SlidersHorizontal size={14} />{item.label}</button>)}
        </div>
        <label className="catalog-sort"><ArrowUpDown size={15} /><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Rekomendasi</option><option value="price">Harga terendah</option><option value="rating">Rating tertinggi</option></select></label>
      </div>
      <div className="catalog-summary"><p><strong>{results.length}</strong> pilihan tersedia</p><span>Harga final ditampilkan sebelum pembayaran</span></div>
      {results.length ? <div className="experience-grid">{results.map((product) => {
        const isSaved = saved.includes(product.id);
        return <article className="experience-card" key={product.id}>
          <div className="experience-card__visual"><span><PlatformIcon name={product.icon} size={32} /></span><b>{product.badge}</b><button className={isSaved ? "is-saved" : ""} onClick={() => toggleSaved(product.id)} aria-label={`${isSaved ? "Hapus" : "Simpan"} ${product.title}`}>{isSaved ? <Check size={17} /> : <Plus size={17} />}</button></div>
          <div className="experience-card__body"><div className="experience-card__meta"><span>{product.location}</span><span><Star size={13} fill="currentColor" />{product.rating} ({product.reviews.toLocaleString("id-ID")})</span></div><h2>{product.title}</h2><p>{product.provider} · {product.schedule}</p><div className="experience-card__highlights">{product.highlights.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div><footer><div><small>Mulai dari</small><strong>{rupiah.format(product.price)}</strong><span>/ {product.unit}</span></div><Link href={`/explore/${category}/${product.id}`}>Lihat pilihan</Link></footer></div>
        </article>;
      })}</div> : <div className="empty-state"><Search size={34} /><h2>Belum ada hasil yang cocok</h2><p>Coba kata kunci lain atau hapus filter yang aktif.</p><button onClick={() => { setQuery(""); setFilter("all"); }}>Reset pencarian</button></div>}
    </div>
  );
}
