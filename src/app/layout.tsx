import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "RUVANA — Tourism & Travel Superapp", template: "%s · RUVANA" },
  description: "Pesan stay, transportasi, rental kendaraan, paket wisata, dan aktivitas dalam satu perjalanan bersama Ruvana.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><SiteHeader />{children}</body></html>;
}
