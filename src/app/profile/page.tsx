import type { Metadata } from "next";
import { ProfilePage } from "@/components/customer-pages";
export const metadata: Metadata = { title: "Profil" };
export default function Page() { return <ProfilePage />; }
