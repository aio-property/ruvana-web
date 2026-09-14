import type { Metadata } from "next";
import { MessagesPage } from "@/components/customer-pages";
export const metadata: Metadata = { title: "Pesan" };
export default function Page() { return <MessagesPage />; }
