"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CreditCard, Landmark, LockKeyhole, MessageSquare, QrCode, ShieldCheck, TicketPercent, WalletCards } from "lucide-react";
import { useState } from "react";
import type { Property } from "@/lib/mock-data";

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
const paymentMethods = [
  { id: "va", label: "Virtual Account", note: "BCA, Mandiri, BNI, BRI", icon: Landmark },
  { id: "qris", label: "QRIS", note: "Bayar dari aplikasi pilihan Anda", icon: QrCode },
  { id: "card", label: "Kartu debit / kredit", note: "Visa, Mastercard, JCB", icon: CreditCard },
  { id: "installment", label: "Cicilan RUVANA", note: "Tersedia untuk sewa bulanan/tahunan", icon: WalletCards },
];

export function CheckoutFlow({ property }: { property: Property }) {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("va");
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const nights = property.priceUnit === "malam" ? 3 : 1;
  const subtotal = property.price * nights;
  const service = Math.round(subtotal * 0.06);
  const discount = promoApplied ? Math.min(500000, Math.round(subtotal * 0.08)) : 0;
  const total = subtotal + service + 50000 - discount;

  if (step === 3) {
    return (
      <section className="checkout-success">
        <span><Check size={31} /></span><small>BOOKING TERKONFIRMASI</small><h1>Sampai jumpa di {property.area}</h1><p>Pembayaran dummy sebesar <strong>{rupiah.format(total)}</strong> berhasil. Invoice, panduan check-in, dan kontak PIC telah ditambahkan ke detail booking.</p><div className="success-code"><span>BOOKING ID</span><strong>RUV-260920-8F31</strong></div><div className="success-timeline"><div className="is-done"><span><Check size={14} /></span><p><strong>Pembayaran diterima</strong><small>14 Sep 2026 · 19.08 WIB</small></p></div><div><span>2</span><p><strong>Verifikasi identitas</strong><small>Selesaikan sebelum 19 Sep</small></p></div><div><span>3</span><p><strong>Panduan check-in dikirim</strong><small>2 jam sebelum kedatangan</small></p></div></div><div className="checkout-success__actions"><Link className="button button--primary" href="/bookings/RUV-260920-8F31">Buka detail booking <ArrowRight size={17} /></Link><Link className="button button--secondary" href="/messages"><MessageSquare size={17} />Hubungi PIC</Link></div>
      </section>
    );
  }

  return (
    <div className="checkout-shell">
      <div className="checkout-main">
        <Link className="back-link" href={`/property/${property.slug}`}><ArrowLeft size={16} />Kembali ke detail properti</Link>
        <div className="checkout-title"><span className="eyebrow">CHECKOUT AMAN</span><h1>{step === 1 ? "Tinjau perjalanan Anda" : "Pilih pembayaran"}</h1><p>{step === 1 ? "Pastikan tanggal, penghuni, dan aturan sudah sesuai." : "Harga dikunci selama 15 menit setelah metode dipilih."}</p></div>
        <div className="stepper">{["Detail", "Pembayaran", "Selesai"].map((label, index) => <div className={step >= index + 1 ? "is-active" : ""} key={label}><span>{step > index + 1 ? <Check size={14} /> : index + 1}</span><strong>{label}</strong></div>)}</div>
        {step === 1 ? <div className="checkout-sections"><section><h2>Detail masa tinggal</h2><div className="checkout-dates"><button type="button" onClick={() => window.alert("Kalender check-in dummy dibuka untuk 20 September 2026.")}><span>CHECK-IN</span><strong>20 September 2026</strong><small>Mulai 14.00 WIB</small></button><button type="button" onClick={() => window.alert("Kalender check-out dummy dibuka untuk 23 September 2026.")}><span>CHECK-OUT</span><strong>23 September 2026</strong><small>Sebelum 12.00 WIB</small></button><button type="button" onClick={() => window.alert("Pemilih jumlah penghuni dummy dibuka: 2 orang, 1 unit.")}><span>PENGHUNI</span><strong>2 orang</strong><small>1 unit</small></button></div></section><section><h2>Data pemesan</h2><div className="form-grid"><label>Nama lengkap<input defaultValue="Evans Moris Cheahn" /></label><label>Nomor WhatsApp<input defaultValue="+62 812 0000 2026" /></label><label>Email invoice<input defaultValue="evans@example.com" /></label><label>Tujuan menginap<select defaultValue="business"><option value="business">Perjalanan bisnis</option><option value="vacation">Liburan</option><option value="relocation">Relokasi</option><option value="other">Lainnya</option></select></label></div></section><section className="policy-card"><ShieldCheck size={21} /><div><h2>Pembatalan fleksibel</h2><p>Gratis pembatalan sampai 18 September pukul 23.59 WIB. Setelahnya, malam pertama tidak dapat dikembalikan.</p></div><button onClick={() => window.alert("Kebijakan dummy: refund diproses maksimal 5 hari kerja setelah disetujui.")}>Detail</button></section></div> : null}
        {step === 2 ? <div className="checkout-sections"><section><h2>Metode pembayaran</h2><div className="payment-methods">{paymentMethods.map((item) => { const Icon = item.icon; return <button className={method === item.id ? "is-active" : ""} key={item.id} onClick={() => setMethod(item.id)}><span><Icon size={20} /></span><p><strong>{item.label}</strong><small>{item.note}</small></p><i>{method === item.id ? <Check size={13} /> : null}</i></button>; })}</div></section><section><h2>Detail penagihan</h2><div className="form-grid"><label>Nama pada invoice<input defaultValue="Evans Moris Cheahn" /></label><label>Tipe invoice<select defaultValue="personal"><option value="personal">Perorangan</option><option value="company">Perusahaan</option></select></label><label className="form-grid__full">Alamat penagihan<input defaultValue="Jakarta Barat, DKI Jakarta" /></label></div></section><label className="terms-check"><input type="checkbox" defaultChecked /><span>Saya menyetujui aturan properti, jadwal pembayaran, kebijakan pembatalan, serta syarat penggunaan RUVANA.</span></label></div> : null}
        <div className="checkout-nav">{step === 2 ? <button className="button button--secondary" onClick={() => setStep(1)}><ArrowLeft size={16} />Kembali</button> : <span />}<button className="button button--primary" onClick={() => setStep(step === 1 ? 2 : 3)}>{step === 1 ? "Lanjut ke pembayaran" : `Bayar ${rupiah.format(total)}`}<ArrowRight size={17} /></button></div>
      </div>
      <aside className="checkout-summary"><div className="checkout-property"><div><Image src={property.image} alt={property.name} fill sizes="180px" /></div><p><small>{property.type} · {property.area}</small><strong>{property.name}</strong><span>★ {property.rating} · {property.reviews} ulasan</span></p></div><div className="summary-line"><span>{rupiah.format(property.price)} × {nights} {property.priceUnit}</span><strong>{rupiah.format(subtotal)}</strong></div><div className="summary-line"><span>Biaya layanan</span><strong>{rupiah.format(service)}</strong></div><div className="summary-line"><span>Proteksi hunian</span><strong>Rp50.000</strong></div>{promoApplied ? <div className="summary-line summary-line--discount"><span>Promo MOVEIN8</span><strong>−{rupiah.format(discount)}</strong></div> : null}<div className="promo-input"><TicketPercent size={17} /><input placeholder="Kode promo" value={promo} onChange={(event) => setPromo(event.target.value)} /><button onClick={() => { setPromoApplied(true); setPromo("MOVEIN8"); }}>Pakai</button></div><div className="summary-total"><span>Total pembayaran</span><strong>{rupiah.format(total)}</strong></div><p className="secure-payment"><LockKeyhole size={15} />Pembayaran terenkripsi dan terlindungi.</p></aside>
    </div>
  );
}
