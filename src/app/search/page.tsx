import type { Metadata } from "next";
import { SearchPage } from "@/components/public-pages";

export const metadata: Metadata = { title: "Pencarian properti" };
export default function Page() { return <SearchPage location="Jakarta Selatan" />; }
