import type { Metadata } from "next";
import { BookingsPage } from "@/components/customer-pages";
export const metadata: Metadata = { title: "Booking saya" };
export default function Page() { return <BookingsPage />; }
