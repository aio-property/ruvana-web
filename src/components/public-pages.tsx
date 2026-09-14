import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, Check, Clock3, KeyRound, MapPin, Megaphone, ShieldCheck, Sparkles, Star, WalletCards, Wifi, Waves, Dumbbell, CookingPot, Car, PawPrint, WashingMachine } from "lucide-react";
import { ActionButton } from "@/components/action-button";
import { FavoriteButton } from "@/components/favorite-button";
import { PropertyCard } from "@/components/property-card";
import { SearchExperience } from "@/components/search-experience";
import { SearchPanel } from "@/components/search-panel";
import type { Property } from "@/lib/mock-data";
import { campaigns, properties } from "@/lib/mock-data";

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

const amenityIcons = [Wifi, Waves, Dumbbell, CookingPot, WashingMachine, Car, PawPrint, ShieldCheck];

export function HomePage() {
  return (
    <main>
      <section className="home-hero content-width"><div><span className="eyebrow"><i />ALL-IN-ONE PROPERTY</span><h1>Tinggal lebih mudah,<br /><em>dari hari pertama.</em></h1><p>Cari, bandingkan, bayar, check-in, dan kelola masa tinggal dalam satu alur yang jelas.</p></div><aside><div><ShieldCheck size={20} /><p><strong>Unit terverifikasi</strong><span>Foto dan fasilitas telah diperiksa</span></p></div><div><WalletCards size={20} /><p><strong>Harga final terlihat</strong><span>Sebelum Anda melakukan pembayaran</span></p></div><div><KeyRound size={20} /><p><strong>Check-in terarah</strong><span>PIC dan panduan digital tersedia</span></p></div></aside></section>
      <div className="home-search content-width"><div className="home-search__meta"><span><Sparkles size={14} />Harga transparan, tanpa biaya tersembunyi</span><span>15.000+ unit dummy terverifikasi</span></div><SearchPanel /></div>
      <section className="section content-width"><div className="section-heading"><div><span className="eyebrow">DIPILIH UNTUK ANDA</span><h2>Hunian yang terasa pas</h2><p>Kurasi berdasarkan kenyamanan, lokasi, dan ulasan terbaru.</p></div><Link className="button button--secondary" href="/search">Lihat semua <ArrowRight size={16} /></Link></div><div className="property-grid">{properties.slice(0, 3).map((property) => <PropertyCard key={property.slug} property={property} />)}</div></section>
      <section className="campaign-showcase content-width"><div><span>PUBLIC CAMPAIGN · RUVANA MOVE-IN</span><h2>Pindah sekarang.<br />Bayar bertahap.</h2><p>Sewa tahunan tanpa kartu kredit, mulai dari tiga kali cicilan. Tur unit gratis dan seluruh biaya terlihat dari awal.</p><Link href="/campaigns/move-in-september">Lihat campaign <ArrowRight size={17} /></Link></div><aside><small>Hemat hingga</small><strong>Rp8jt</strong><span>untuk booking sebelum 30 September</span></aside></section>
      <section className="section content-width journey-section"><div className="section-heading"><div><span className="eyebrow">SATU ALUR, TANPA BINGUNG</span><h2>Dari pencarian sampai check-out</h2></div></div><div className="journey-grid">{[[MapPin, "01", "Cari & bandingkan", "Filter lokasi, durasi, fasilitas, dan total harga."], [CalendarDays, "02", "Booking transparan", "Pilih tanggal, tinjau aturan, lalu kunci harga."], [WalletCards, "03", "Bayar dengan aman", "VA, QRIS, kartu, atau cicilan untuk long-stay."], [KeyRound, "04", "Check-in terarah", "Terima PIC, panduan unit, dan status masa tinggal."]].map(([Icon, number, title, copy]) => <article key={number as string}><span>{number as string}</span><Icon size={22} /><h3>{title as string}</h3><p>{copy as string}</p></article>)}</div></section>
      <section className="owner-invite content-width"><div><span className="eyebrow">UNTUK PEMILIK PROPERTI</span><h2>Properti bekerja.<br />Anda tetap memegang kendali.</h2><p>Kelola harga, okupansi, reservasi, maintenance, payout, dan campaign dari satu panel.</p><Link className="button button--primary" href="/owner">Buka owner panel <ArrowRight size={17} /></Link></div><div className="owner-invite__stats"><div><strong>82,6%</strong><span>Okupansi portfolio</span></div><div><strong>4,91</strong><span>Rating rata-rata</span></div><div><strong>12,8%</strong><span>Pertumbuhan pendapatan</span></div></div></section>
    </main>
  );
}

export function SearchPage({ location }: { location: string }) {
  return <main className="search-page"><div className="content-width"><SearchPanel compact /><SearchExperience properties={properties} location={location} /></div></main>;
}

export function PropertyDetailPage({ property }: { property: Property }) {
  const nights = property.priceUnit === "malam" ? 3 : 1;
  const service = Math.round(property.price * nights * 0.06);
  const total = property.price * nights + service + 50000;
  return (
    <main className="detail-page content-width">
      <div className="breadcrumbs"><Link href="/">Beranda</Link><span>/</span><Link href="/search">{property.city}</Link><span>/</span><strong>{property.name}</strong></div>
      <div className="detail-heading"><div><span className="eyebrow">{property.type.toUpperCase()} · {property.area.toUpperCase()}</span><h1>{property.name}</h1><p><Star size={15} fill="currentColor" /><strong>{property.rating}</strong> · <Link href="#reviews">{property.reviews} ulasan</Link> · <MapPin size={15} />{property.address}</p></div><div><ActionButton message="Tautan properti sudah disalin">Bagikan</ActionButton><FavoriteButton label={property.name} /></div></div>
      <section className="gallery"><div><Image src={property.gallery[0]} alt={`Ruang utama ${property.name}`} fill priority sizes="65vw" /></div>{property.gallery.slice(1).map((image, index) => <div key={image}><Image src={image} alt={`Galeri ${property.name} ${index + 2}`} fill sizes="35vw" /></div>)}<ActionButton message="Galeri lengkap dibuka" className="gallery__button">Lihat semua foto</ActionButton></section>
      <div className="detail-layout">
        <div className="detail-content">
          <section className="unit-summary"><div><h2>{property.type} dikelola profesional</h2><p>{property.guests} tamu · {property.bedrooms} kamar tidur · {property.bathrooms} kamar mandi · {property.size} m²</p></div><span><BadgeCheck size={24} /></span></section>
          <section className="detail-section"><h2>Tentang hunian ini</h2><p>{property.description}</p><ActionButton message="Deskripsi lengkap ditampilkan">Baca selengkapnya</ActionButton></section>
          <section className="detail-section"><h2>Fasilitas yang tersedia</h2><div className="amenity-grid">{property.amenities.map((item, index) => { const Icon = amenityIcons[index % amenityIcons.length]; return <div key={item}><Icon size={19} /><span>{item}</span></div>; })}</div><ActionButton message="Daftar seluruh fasilitas dibuka">Lihat semua fasilitas</ActionButton></section>
          <section className="detail-section"><div className="section-inline"><div><h2>Lokasi & sekitar</h2><p>{property.address}</p></div><ActionButton message="Petunjuk arah dibuka">Petunjuk arah</ActionButton></div><div className="detail-map"><div className="map-grid" /><span><MapPin size={22} /></span></div><div className="nearby-list">{property.nearby.map((item) => <div key={item.name}><strong>{item.name}</strong><span>{item.distance}</span></div>)}</div></section>
          <section className="detail-section" id="reviews"><div className="section-inline"><div><h2><Star size={20} fill="currentColor" />{property.rating} · {property.reviews} ulasan</h2><p>Rating dari tamu terverifikasi.</p></div><Link className="button button--secondary" href="/messages">Tanya host</Link></div><div className="reviews-grid"><article><header><span>NP</span><p><strong>Nadia Putri</strong><small>Agustus 2026</small></p></header><p>Unit sangat bersih dan proses check-in jelas. Harga di checkout sama dengan yang ditampilkan sejak awal.</p></article><article><header><span>KT</span><p><strong>Kevin Tan</strong><small>Juli 2026</small></p></header><p>PIC responsif dan fasilitas sesuai foto. Lokasinya memudahkan perjalanan kerja saya.</p></article></div></section>
          <section className="detail-section"><h2>Aturan properti</h2><div className="rules-grid">{property.rules.map((rule) => <div key={rule}><Check size={17} />{rule}</div>)}</div></section>
        </div>
        <aside className="booking-card"><div className="booking-card__price"><p><strong>{rupiah.format(property.price)}</strong> / {property.priceUnit}</p><span><Star size={14} fill="currentColor" />{property.rating}</span></div><div className="booking-dates"><Link href={`/checkout?property=${property.slug}`}><span>CHECK-IN</span><strong>20 Sep 2026</strong></Link><Link href={`/checkout?property=${property.slug}`}><span>CHECK-OUT</span><strong>23 Sep 2026</strong></Link><Link href={`/checkout?property=${property.slug}`}><span>TAMU</span><strong>2 tamu</strong></Link></div><Link className="button button--primary button--full" href={`/checkout?property=${property.slug}`}>{property.instantBook ? "Pesan sekarang" : "Ajukan sewa"}</Link><small>Anda belum dikenakan biaya</small><div className="price-breakdown"><div><span>{rupiah.format(property.price)} × {nights}</span><strong>{rupiah.format(property.price * nights)}</strong></div><div><span>Biaya layanan</span><strong>{rupiah.format(service)}</strong></div><div><span>Proteksi hunian</span><strong>Rp50.000</strong></div><div><span>Total</span><strong>{rupiah.format(total)}</strong></div></div><p className="booking-protection"><ShieldCheck size={17} />Dilindungi RUVANA Stay Protection</p></aside>
      </div>
    </main>
  );
}

export function CampaignDetailPage({ slug }: { slug: string }) {
  const campaign = campaigns.find((item) => item.slug === slug) ?? campaigns[0];
  return (
    <main className="campaign-page"><section className="campaign-page__hero"><div className="content-width"><span>RUVANA PUBLIC CAMPAIGN · LIMITED PERIOD</span><h1>Pindah lebih ringan.<br />Mulai hidup baru.</h1><p>Dapatkan diskon hingga Rp8 juta dan opsi pembayaran bertahap untuk properti bulanan dan tahunan terpilih.</p><div><Link className="button button--mint" href="/search?stay=tahunan">Cari hunian eligible <ArrowRight size={17} /></Link><ActionButton variant="ghost" message="Syarat dan ketentuan campaign dibuka">Lihat ketentuan</ActionButton></div></div></section><section className="section content-width"><div className="campaign-detail-grid"><article><span><Megaphone size={21} /></span><h2>{campaign.name}</h2><p>Potongan otomatis diterapkan saat checkout. Pengguna melihat harga awal, diskon, biaya layanan, serta total akhir secara transparan.</p></article><article><span><WalletCards size={21} /></span><h2>Bayar bertahap</h2><p>Pilihan tiga, enam, atau dua belas kali pembayaran untuk kontrak long-stay, dengan jadwal dan invoice terpisah.</p></article><article><span><Clock3 size={21} /></span><h2>Periode terbatas</h2><p>Booking sampai 30 September 2026 dan mulai tinggal maksimal 31 Desember 2026.</p></article></div></section><section className="section content-width"><div className="section-heading"><div><span className="eyebrow">PROPERTI CAMPAIGN</span><h2>Siap ditempati</h2></div></div><div className="property-grid">{properties.filter((item) => item.priceUnit !== "malam").map((property) => <PropertyCard key={property.slug} property={property} />)}</div></section></main>
  );
}
