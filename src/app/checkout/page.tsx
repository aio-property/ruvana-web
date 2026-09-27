import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutRouter } from "@/components/checkout-router";

export const metadata: Metadata = { title: "Checkout" };
export default function Page() { return <main className="checkout-page content-width"><Suspense fallback={<div className="checkout-loading">Menyiapkan checkout aman…</div>}><CheckoutRouter /></Suspense></main>; }
