"use client";

import { useSearchParams } from "next/navigation";
import { CheckoutFlow } from "@/components/checkout-flow";
import { ServiceCheckoutFlow } from "@/components/service-checkout-flow";
import { products } from "@/lib/ecosystem";
import { getProperty } from "@/lib/mock-data";

export function CheckoutRouter() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");
  const propertySlug = searchParams.get("property") ?? "verde-residence-sky-loft";
  const product = products.find((item) => item.id === serviceId);
  return product ? <ServiceCheckoutFlow product={product} /> : <CheckoutFlow property={getProperty(propertySlug)} />;
}
