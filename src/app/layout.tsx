import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "RUVANA — All-in-One Property Solution", template: "%s · RUVANA" },
  description: "Cari hunian, booking, pembayaran, property management, dan operasional dalam satu platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><SiteHeader />{children}</body></html>;
}
