import type { Metadata } from "next";
import { FavoritesPage } from "@/components/customer-pages";
export const metadata: Metadata = { title: "Favorit" };
export default function Page() { return <FavoritesPage />; }
