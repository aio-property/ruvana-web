import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, Check, Clock3, KeyRound, MapPin, Megaphone, ShieldCheck, Sparkles, Star, WalletCards, Wifi, Waves, Dumbbell, CookingPot, Car, PawPrint, WashingMachine, Plane, TrainFront, Hotel, Luggage, Compass, Route, BadgePercent, Headphones } from "lucide-react";
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
    <main className="superapp-home">
      <section className="home-hero superapp-hero content-width"><div><span className="eyebrow"><i />TOURISM & TRAVEL SUPERAPP</span><h1>Satu aplikasi untuk<br /><em>seluruh perjalanan.</em></h1><p>Dari tempat menginap sampai perjalanan pulang—rencanakan, pesan, dan kelola semuanya lewat Ruvana.</p><div className="hero-trust"><span><ShieldCheck size={17} />Partner terverifikasi</span><span><Headphones size={17} />Bantuan 24/7</span></div></div><aside className="travel-orbit"><div className="travel-orbit__center"><Route size={28} /></div><span><Plane size={20} />Flight</span><span><Hotel size={20} />Stay</span><span><Car size={20} />Rental</span><span><Compass size={20} />Trip</span><div><small>Semua booking</small><strong>1 itinerary</strong><em>Ruvana Journey</em></div></aside></section>
      <div className="home-search content-width"><div className="home-search__meta"><span><Sparkles size={14} />Gabungkan semua kebutuhan dalam satu checkout</span><span>Harga transparan · partner terverifikasi</span></div><SearchPanel /></div>

      <section className="section content-width"><div className="section-heading"><div><span className="eyebrow">EXPLORE RUVANA</span><h2>Semua yang perjalananmu butuhkan</h2><p>Satu ekosistem untuk berangkat, menginap, menjelajah, dan pulang.</p></div></div><div className="travel-services">{[[Hotel,"Stay","Hotel, apartemen, vila, resort, homestay, dan kos."],[Plane,"Transport","Pesawat, kereta, KRL, bus, shuttle, dan kapal."],[Car,"Rental","Mobil, motor, campervan, bus wisata, dan driver."],[Luggage,"Travel Agency","Open trip, private trip, honeymoon, religi, dan korporat."],[Compass,"Experience","Atraksi, event, local guide, dan aktivitas wisata."],[WalletCards,"Pay & Protect","Satu pembayaran, refund, promo, rewards, dan proteksi."]].map(([Icon,title,copy]) => <article key={title as string}><span><Icon size={21} /></span><h3>{title as string}</h3><p>{copy as string}</p><Link href="/search">Jelajahi <ArrowRight size={15} /></Link></article>)}</div></section>

      <section className="section content-width"><div className="section-heading"><div><span className="eyebrow">RUVANA STAY</span><h2>Tempat menginap pilihan</h2><p>Fondasi properti Ruvana kini menjadi bagian dari perjalanan yang lebih besar.</p></div><Link className="button button--secondary" href="/search">Lihat semua <ArrowRight size={16} /></Link></div><div className="property-grid">{properties.slice(0,3).map((property) => <PropertyCard key={property.slug} property={property} />)}</div></section>

      <section className="campaign-showcase travel-bundle content-width"><div><span>RUVANA BUNDLE · ONE JOURNEY</span><h2>Lebih ringkas.<br />Lebih hemat.</h2><p>Gabungkan pesawat, stay, rental kendaraan, dan aktivitas dalam satu itinerary serta satu pembayaran.</p><Link href="/checkout">Rancang perjalanan <ArrowRight size={17} /></Link></div><aside className="bundle-list"><div><Plane size={17} /><p><small>Flight</small><strong>Jakarta → Bali</strong></p><b>20 Sep</b></div><div><Hotel size={17} /><p><small>Stay</small><strong>Ubud · 3 malam</strong></p><b>20–23 Sep</b></div><div><Car size={17} /><p><small>Rental</small><strong>Car + Driver</strong></p><b>3 hari</b></div><footer><BadgePercent size={17} />Bundle saving <strong>Rp780.000</strong></footer></aside></section>

      <section className="section content-width ruvana-journey"><div className="section-heading"><div><span className="eyebrow">RUVANA JOURNEY</span><h2>Satu timeline untuk semuanya</h2><p>Tiket, check-in, pickup, itinerary, invoice, dan bantuan tersedia dalam satu tempat.</p></div><Link className="button button--secondary" href="/bookings">Kelola perjalanan <ArrowRight size={16} /></Link></div><div className="journey-board"><div className="journey-date"><strong>20</strong><span>SEP</span></div>{[[Plane,"06.40 · CGK","Terbang ke Denpasar","GA 402 · Terminal 3"],[Car,"10.15 · DPS","Pickup kendaraan","Meeting point Gate 2"],[Hotel,"14.00 · UBUD","Check-in Riverstone Villa","3 malam · 1 vila"]].map(([Icon,time,title,copy]) => <article key={title as string}><span><Icon size={18} /></span><p><small>{time as string}</small><strong>{title as string}</strong><em>{copy as string}</em></p><b>Confirmed</b></article>)}</div></section>

      <section className="owner-invite partner-invite content-width"><div><span className="eyebrow">RUVANA PARTNER ECOSYSTEM</span><h2>Satu dashboard untuk<br />semua bisnis pariwisata.</h2><p>Kelola inventori, jadwal, reservasi, harga, promo, payout, ulasan, dan analitik untuk seluruh cabang bisnis.</p><Link className="button button--primary" href="/owner">Buka Partner Center <ArrowRight size={17} /></Link></div><div className="owner-invite__stats"><div><strong>6</strong><span>Vertikal layanan</span></div><div><strong>24/7</strong><span>Partner support</span></div><div><strong>1</strong><span>Settlement center</span></div></div></section>
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
