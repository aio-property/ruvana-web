import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, CalendarDays, Check, ChevronRight, CircleHelp, Clock3, CreditCard, Headphones, MapPin, Route, ShieldCheck, Sparkles, Star, TicketCheck, Users, WalletCards } from "lucide-react";
import { ActionButton } from "@/components/action-button";
import { CategoryBrowser } from "@/components/category-browser";
import { PlatformIcon } from "@/components/platform-icon";
import { categories, getCategory, getCategoryProducts, getProduct } from "@/lib/ecosystem";

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

export function ExploreCategoryPage({ categorySlug }: { categorySlug: string }) {
  const category = getCategory(categorySlug);
  const entries = getCategoryProducts(category.slug);
  return (
    <main className="explore-page">
      <section className="explore-hero" style={{ "--category-accent": category.accent } as React.CSSProperties}>
        <div className="content-width"><div><Link href="/"><ArrowLeft size={15} />Semua layanan</Link><span className="eyebrow"><PlatformIcon name={category.icon} size={15} />NUSAVYRA {category.short.toUpperCase()}</span><h1>{category.name}</h1><p>{category.description}</p></div><aside><span><Sparkles size={18} />Tersedia sekarang</span><strong>{category.stats}</strong><small>Partner dan inventori terverifikasi</small></aside></div>
      </section>
      <section className="service-switcher content-width" aria-label="Kategori layanan">{categories.map((item) => <Link key={item.slug} href={`/explore/${item.slug}`} className={item.slug === category.slug ? "is-active" : ""}><PlatformIcon name={item.icon} size={18} /><span>{item.short}</span></Link>)}</section>
      <section className="catalog-section content-width"><div className="section-heading"><div><span className="eyebrow">PILIHAN TERBAIK</span><h2>Cari dan bandingkan</h2><p>{category.searchHint}. Semua biaya dijelaskan sebelum checkout.</p></div><Link className="button button--secondary" href="/account/trips"><Route size={16} />Buka trip planner</Link></div><CategoryBrowser category={category.slug} products={entries} /></section>
      <section className="ecosystem-benefits content-width"><article><BadgeCheck size={22} /><div><strong>Partner terverifikasi</strong><span>Legalitas, kualitas, dan SLA dipantau Nusavyra.</span></div></article><article><WalletCards size={22} /><div><strong>Satu pembayaran</strong><span>Invoice dan refund lintas layanan dalam satu tempat.</span></div></article><article><Headphones size={22} /><div><strong>Bantuan 24/7</strong><span>Tim resolusi mengikuti seluruh perjalanan Anda.</span></div></article></section>
    </main>
  );
}

export function ExploreDetailPage({ categorySlug, productId }: { categorySlug: string; productId: string }) {
  const category = getCategory(categorySlug);
  const product = getProduct(productId);
  const related = getCategoryProducts(category.slug).filter((item) => item.id !== product.id);
  const serviceFee = Math.max(5000, Math.round(product.price * 0.035));
  return (
    <main className="service-detail content-width" style={{ "--category-accent": category.accent } as React.CSSProperties}>
      <div className="breadcrumbs"><Link href="/">Beranda</Link><span>/</span><Link href={`/explore/${category.slug}`}>{category.short}</Link><span>/</span><strong>{product.title}</strong></div>
      <header className="service-detail__head"><div><span className="eyebrow"><PlatformIcon name={category.icon} size={15} />{category.name.toUpperCase()}</span><h1>{product.title}</h1><p><MapPin size={15} />{product.location}<span>•</span><Star size={15} fill="currentColor" /><strong>{product.rating}</strong> ({product.reviews.toLocaleString("id-ID")} ulasan)</p></div><div><ActionButton message={`${product.title} disimpan ke favorit`}>Simpan</ActionButton><ActionButton variant="primary" message="Tautan sudah disalin">Bagikan</ActionButton></div></header>
      <section className="service-visual"><div><PlatformIcon name={product.icon} size={72} /><span>{product.badge}</span><h2>{category.short}</h2></div><aside>{product.highlights.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><small>Termasuk dalam pilihan ini</small></article>)}</aside></section>
      <div className="service-detail__layout"><div className="service-detail__content">
        <section className="detail-section"><div className="operator-line"><span><PlatformIcon name={product.icon} size={22} /></span><div><small>DIKELOLA OLEH</small><h2>{product.provider}</h2><p><BadgeCheck size={15} />Verified Partner · SLA aktif · Respons rata-rata 3 menit</p></div><Link href="/messages">Hubungi operator</Link></div></section>
        <section className="detail-section"><h2>Yang akan Anda dapatkan</h2><div className="inclusion-grid">{["E-ticket atau voucher digital", "Konfirmasi dan status real-time", "Invoice resmi Nusavyra", "Pusat bantuan selama perjalanan", "Perubahan jadwal sesuai kebijakan", "Nusavyra Guarantee untuk transaksi"].map((item) => <div key={item}><Check size={17} />{item}</div>)}</div></section>
        <section className="detail-section"><h2>Jadwal & titik layanan</h2><div className="schedule-card"><span><CalendarDays size={22} /></span><div><small>JADWAL DIPILIH</small><strong>{product.schedule}</strong><p>{product.location}</p></div><ActionButton message="Pemilih jadwal dibuka">Ubah jadwal</ActionButton></div><div className="service-map"><div className="map-grid" /><span><MapPin size={22} /></span><p><strong>Meeting point terverifikasi</strong><small>Petunjuk lengkap muncul setelah pemesanan.</small></p></div></section>
        <section className="detail-section"><h2>Kebijakan penting</h2><div className="policy-grid"><article><Clock3 size={20} /><strong>Perubahan jadwal</strong><p>Dapat diajukan mengikuti batas waktu dan ketersediaan operator.</p></article><article><CreditCard size={20} /><strong>Pembatalan & refund</strong><p>Nominal refund ditampilkan transparan sebelum Anda mengonfirmasi.</p></article><article><ShieldCheck size={20} /><strong>Proteksi tambahan</strong><p>Tambahkan perlindungan perjalanan atau aktivitas saat checkout.</p></article></div></section>
      </div><aside className="service-booking-card"><div className="service-booking-card__status"><TicketCheck size={18} /><span>{product.status}</span></div><small>Mulai dari</small><h2>{rupiah.format(product.price)} <span>/ {product.unit}</span></h2><label><span>Tanggal / sesi</span><strong>{product.schedule}</strong><ChevronRight size={16} /></label><label><span>Jumlah peserta</span><strong>1 {product.unit}</strong><Users size={16} /></label><div className="price-breakdown"><div><span>Harga layanan</span><strong>{rupiah.format(product.price)}</strong></div><div><span>Biaya layanan</span><strong>{rupiah.format(serviceFee)}</strong></div><div><span>Total</span><strong>{rupiah.format(product.price + serviceFee)}</strong></div></div><Link className="button button--primary button--full" href={`/checkout?service=${product.id}`}>Lanjut ke checkout <ArrowRight size={16} /></Link><ActionButton className="button--full" message={`${product.title} ditambahkan ke Bali Escape`}>+ Tambah ke perjalanan</ActionButton><p><ShieldCheck size={15} />Pembayaran aman & dukungan 24/7</p></aside></div>
      {related.length ? <section className="related-services"><div className="section-heading"><div><span className="eyebrow">MASIH DI {category.short.toUpperCase()}</span><h2>Pilihan lain yang relevan</h2></div></div><div className="related-service-grid">{related.map((item) => <Link href={`/explore/${category.slug}/${item.id}`} key={item.id}><span><PlatformIcon name={item.icon} size={24} /></span><div><small>{item.location}</small><strong>{item.title}</strong><p>{rupiah.format(item.price)} / {item.unit}</p></div><ChevronRight size={18} /></Link>)}</div></section> : null}
      <section className="help-strip"><CircleHelp size={24} /><div><strong>Masih ada pertanyaan?</strong><span>Tim perjalanan Nusavyra siap membantu memilih layanan yang tepat.</span></div><Link href="/account/support">Hubungi bantuan</Link></section>
    </main>
  );
}
