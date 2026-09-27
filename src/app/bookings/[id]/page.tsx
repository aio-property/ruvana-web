import type { Metadata } from "next";
import { BookingDetailPage } from "@/components/customer-pages";
import { InternalRecordDetailPage } from "@/components/internal-pages";
import { bookings, getBooking } from "@/lib/mock-data";
export const metadata: Metadata = { title: "Detail booking" };
const internalBookingIds = ["RUV-260914-X21A", "RUV-260914-L07F", "RUV-260914-M31D", "RUV-261014-C18P", "RUV-261121-E70A"];
export function generateStaticParams() { return [...bookings.map((booking) => ({ id: booking.id })), ...internalBookingIds.map((id) => ({ id }))]; }
export default async function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return internalBookingIds.includes(id) ? <InternalRecordDetailPage section="bookings" id={id} /> : <BookingDetailPage booking={getBooking(id)} />; }
