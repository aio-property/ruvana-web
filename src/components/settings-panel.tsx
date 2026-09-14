"use client";

import { Building2, CreditCard, MessageSquare, ReceiptText, Settings, ShieldCheck, UserRound, Users, WalletCards } from "lucide-react";
import { useState } from "react";
import { ActionButton } from "@/components/action-button";
import { StatusPill } from "@/components/status-pill";

const customerTabs = [
  { id: "profile", label: "Data pribadi", icon: UserRound },
  { id: "security", label: "Privasi & keamanan", icon: ShieldCheck },
  { id: "payments", label: "Metode pembayaran", icon: CreditCard },
  { id: "invoice", label: "Data invoice", icon: ReceiptText },
  { id: "preferences", label: "Preferensi", icon: Settings },
];

const ownerTabs = [
  { id: "business", label: "Profil pemilik", icon: Building2 },
  { id: "payout", label: "Payout & pajak", icon: WalletCards },
  { id: "team", label: "Tim & akses", icon: Users },
  { id: "notifications", label: "Notifikasi", icon: MessageSquare },
  { id: "security", label: "Keamanan", icon: ShieldCheck },
];

export function SettingsPanel({ variant }: { variant: "customer" | "owner" }) {
  const tabs = variant === "customer" ? customerTabs : ownerTabs;
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div className={`settings-layout ${variant === "owner" ? "workspace-settings" : ""}`}>
      <aside aria-label="Kategori pengaturan">
        {tabs.map(({ id, label, icon: Icon }) => <button key={id} type="button" className={active === id ? "is-active" : ""} onClick={() => setActive(id)}><Icon size={17} />{label}</button>)}
      </aside>
      {variant === "customer" ? <CustomerSetting active={active} /> : <OwnerSetting active={active} />}
    </div>
  );
}

function CustomerSetting({ active }: { active: string }) {
  if (active === "security") return <SettingCard title="Privasi & keamanan" copy="Kontrol login, perangkat, dan penggunaan data."><div className="form-grid"><label>Password<input type="password" defaultValue="ruvana-password" /></label><label>Verifikasi dua langkah<select defaultValue="whatsapp"><option value="whatsapp">WhatsApp</option><option value="email">Email</option></select></label><label className="form-grid__full">Sesi aktif<select defaultValue="current"><option value="current">Chrome · Jakarta · perangkat ini</option></select></label></div></SettingCard>;
  if (active === "payments") return <SettingCard title="Metode pembayaran" copy="Metode tersimpan untuk proses checkout lebih cepat."><div className="saved-method"><CreditCard size={21} /><p><strong>Visa •••• 4218</strong><small>Kedaluwarsa 08/29 · metode utama</small></p><StatusPill>Verified</StatusPill></div><div className="saved-method"><WalletCards size={21} /><p><strong>Virtual Account BCA</strong><small>Terhubung ke +62 812 0000 2026</small></p><ActionButton message="Metode pembayaran baru dibuka">Tambah</ActionButton></div></SettingCard>;
  if (active === "invoice") return <SettingCard title="Data invoice" copy="Identitas yang digunakan pada dokumen pembayaran."><div className="form-grid"><label>Nama invoice<input defaultValue="Evans Moris Cheahn" /></label><label>NPWP (opsional)<input placeholder="00.000.000.0-000.000" /></label><label className="form-grid__full">Alamat penagihan<input defaultValue="Jakarta Barat, DKI Jakarta" /></label></div></SettingCard>;
  if (active === "preferences") return <SettingCard title="Preferensi" copy="Sesuaikan pengalaman pencarian dan komunikasi."><div className="form-grid"><label>Bahasa<select defaultValue="id"><option value="id">Bahasa Indonesia</option><option value="en">English</option></select></label><label>Mata uang<select defaultValue="idr"><option value="idr">IDR — Rupiah</option><option value="usd">USD — Dollar</option></select></label><label className="form-grid__full">Rekomendasi utama<select defaultValue="monthly"><option value="monthly">Sewa bulanan</option><option value="daily">Harian</option><option value="yearly">Tahunan</option></select></label></div></SettingCard>;
  return <section className="panel profile-form"><header className="profile-form__header"><span>EC</span><div><h2>Evans Moris Cheahn</h2><p>Akun terverifikasi · bergabung September 2026</p></div><ActionButton message="Form foto profil dibuka">Ubah foto</ActionButton></header><div className="form-grid"><label>Nama lengkap<input defaultValue="Evans Moris Cheahn" /></label><label>Email<input defaultValue="evans@example.com" /></label><label>Nomor WhatsApp<input defaultValue="+62 812 0000 2026" /></label><label>Tanggal lahir<input type="date" defaultValue="1997-01-01" /></label><label className="form-grid__full">Alamat utama<input defaultValue="Jakarta Barat, DKI Jakarta" /></label></div><footer><ActionButton variant="primary" message="Perubahan profil dummy berhasil disimpan">Simpan perubahan</ActionButton></footer></section>;
}

function OwnerSetting({ active }: { active: string }) {
  if (active === "payout") return <SettingCard title="Payout & pajak" copy="Rekening pencairan dan identitas pajak bisnis."><div className="form-grid"><label>Bank<select defaultValue="bca"><option value="bca">BCA</option><option value="mandiri">Mandiri</option></select></label><label>Nomor rekening<input defaultValue="•••• •••• 8218" /></label><label>Nama pemilik rekening<input defaultValue="PT Evans Properti Indonesia" /></label><label>NPWP<input defaultValue="00.000.000.0-000.000" /></label></div></SettingCard>;
  if (active === "team") return <SettingCard title="Tim & akses" copy="Atur peran dan kewenangan anggota tim."><div className="saved-method"><span className="avatar-small">EC</span><p><strong>Evans Moris</strong><small>Owner · akses penuh</small></p><StatusPill>Active</StatusPill></div><div className="saved-method"><span className="avatar-small">RH</span><p><strong>Rizky H.</strong><small>Property manager · 2 properti</small></p><ActionButton message="Pengaturan anggota tim dibuka">Kelola</ActionButton></div></SettingCard>;
  if (active === "notifications") return <SettingCard title="Notifikasi" copy="Pilih kejadian penting dan kanal penerimanya."><div className="check-grid"><label><input type="checkbox" defaultChecked />Booking baru</label><label><input type="checkbox" defaultChecked />Pembayaran & payout</label><label><input type="checkbox" defaultChecked />Pesan tamu</label><label><input type="checkbox" />Ringkasan mingguan</label></div></SettingCard>;
  if (active === "security") return <SettingCard title="Keamanan bisnis" copy="Perlindungan akun dan audit perangkat."><div className="form-grid"><label>Verifikasi dua langkah<select defaultValue="required"><option value="required">Wajib untuk semua admin</option><option value="owner">Hanya owner</option></select></label><label>Timeout sesi<select defaultValue="8"><option value="8">8 jam</option><option value="24">24 jam</option></select></label></div></SettingCard>;
  return <section className="panel profile-form"><header className="profile-form__header"><span>EC</span><div><h2>Evans Property Group</h2><p>Owner ID OWN-000218 · verified</p></div><StatusPill>Verified</StatusPill></header><div className="form-grid"><label>Nama bisnis<input defaultValue="Evans Property Group" /></label><label>Tipe pemilik<select defaultValue="company"><option value="company">Badan usaha</option><option value="personal">Perorangan</option></select></label><label>Email operasional<input defaultValue="owner@ruvana.example" /></label><label>Nomor WhatsApp<input defaultValue="+62 812 0000 2026" /></label><label className="form-grid__full">Alamat bisnis<input defaultValue="Jakarta Barat, DKI Jakarta" /></label><label>NPWP<input defaultValue="00.000.000.0-000.000" /></label><label>Status pajak<select defaultValue="pkp"><option value="pkp">PKP</option><option value="nonpkp">Non-PKP</option></select></label></div><footer><ActionButton variant="primary" message="Pengaturan bisnis berhasil disimpan">Simpan perubahan</ActionButton></footer></section>;
}

function SettingCard({ title, copy, children }: { title: string; copy: string; children: React.ReactNode }) {
  return <section className="panel profile-form"><header className="setting-card__header"><h2>{title}</h2><p>{copy}</p></header>{children}<footer><ActionButton variant="primary" message={`${title} berhasil disimpan`}>Simpan perubahan</ActionButton></footer></section>;
}
