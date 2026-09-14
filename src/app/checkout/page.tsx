import type { Metadata } from "next";
import { CheckoutFlow } from "@/components/checkout-flow";
import { getProperty } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Checkout" };
export default function Page() { return <main className="checkout-page content-width"><CheckoutFlow property={getProperty("verde-residence-sky-loft")} /></main>; }
