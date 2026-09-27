import type { Metadata } from "next";
import { AccountPage } from "@/components/account-pages";
export const metadata: Metadata = { title: "Profil" };
export default function Page() { return <AccountPage section="profile" />; }
