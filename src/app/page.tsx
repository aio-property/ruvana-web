import type { Metadata } from "next";
import { HomePage } from "@/components/public-pages";

export const metadata: Metadata = { title: "Tourism & Travel Superapp" };
export default function Page() { return <HomePage />; }
