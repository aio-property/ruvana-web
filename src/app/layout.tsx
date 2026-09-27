import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "NUSAVYRA — Tourism & Travel Superapp", template: "%s · NUSAVYRA" },
  description: "Pesan stay, transportasi, rental kendaraan, paket wisata, dan aktivitas dalam satu perjalanan bersama Nusavyra.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><SiteHeader />{children}</body></html>;
}
