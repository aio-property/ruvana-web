import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { PlatformIcon } from "@/components/platform-icon";
import { partnerRoles } from "@/lib/ecosystem";

export const metadata: Metadata = { title: "Partner Ecosystem" };

export default function Page() {
  return <main className="partner-directory"><section className="partner-directory__hero"><div className="content-width"><span className="eyebrow"><Sparkles size={15} />RUVANA PARTNER ECOSYSTEM</span><h1>Satu platform untuk<br />seluruh bisnis pariwisata.</h1><p>Pilih workspace sesuai bisnis. Semua terhubung ke marketplace, perjalanan pelanggan, pembayaran, proteksi, dukungan, dan settlement Ruvana.</p><div><span><BadgeCheck size={17} />Onboarding terverifikasi</span><span><ShieldCheck size={17} />Proteksi transaksi</span><span><Building2 size={17} />Multi-cabang & multi-role</span></div></div></section><section className="partner-directory__roles content-width"><header><div><span className="eyebrow">PILIH WORKSPACE</span><h2>12 jenis partner, satu standar operasi</h2></div><p>Prototype menampilkan data contoh untuk setiap model bisnis.</p></header><div>{partnerRoles.map((role) => <Link href={`/partner/${role.slug}`} key={role.slug}><span><PlatformIcon name={role.icon} size={24} /></span><div><small>{role.business}</small><strong>{role.name}</strong><p>{role.description}</p><footer>{role.capabilities.slice(0,3).map((item) => <em key={item}>{item}</em>)}</footer></div><ArrowRight size={19} /></Link>)}</div></section></main>;
}
