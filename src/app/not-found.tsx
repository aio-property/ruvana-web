import Link from "next/link";
export default function NotFound() { return <main className="not-found"><span>404</span><h1>Halaman tidak ditemukan</h1><p>Tautan mungkin berubah atau halaman belum tersedia.</p><Link className="button button--primary" href="/">Kembali ke beranda</Link></main>; }
