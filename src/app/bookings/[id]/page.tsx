import type { Metadata } from "next";
import { BookingDetailPage } from "@/components/customer-pages";
import { bookings, getBooking } from "@/lib/mock-data";
export const metadata: Metadata = { title: "Detail booking" };
export function generateStaticParams() { return bookings.map((booking) => ({ id: booking.id })); }
export default async function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <BookingDetailPage booking={getBooking(id)} />; }
