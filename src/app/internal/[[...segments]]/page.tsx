import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InternalEcosystemPage } from "@/components/internal-ecosystem-pages";
import { InternalAuditPage, InternalBookingsPage, InternalGrowthPage, InternalOverviewPage, InternalPaymentsPage, InternalRecordDetailPage, InternalRiskPage, InternalSupplyPage, InternalSupportPage } from "@/components/internal-pages";
import { internalModules } from "@/lib/ecosystem";

export const metadata: Metadata = { title: "Internal management" };
export const dynamicParams = false;
export function generateStaticParams() {
  return [
    { segments: [] }, { segments: ["supply"] }, { segments: ["bookings"] }, { segments: ["payments"] },
    { segments: ["risk"] }, { segments: ["growth"] }, { segments: ["support"] }, { segments: ["audit"] },
    ...internalModules.filter((module) => module.slug !== "command").map((module) => ({ segments: [module.slug] })),
    { segments: ["payments", "PAY-260914-2091"] }, { segments: ["payments", "PAY-260914-2088"] },
    { segments: ["payments", "PAY-260914-2074"] }, { segments: ["payments", "PAY-260914-2059"] },
    { segments: ["support", "SUP-4819"] }, { segments: ["support", "SUP-4812"] }, { segments: ["support", "SUP-4806"] },
    { segments: ["risk", "RK-9218"] }, { segments: ["risk", "RK-9208"] }, { segments: ["risk", "RK-9201"] }, { segments: ["risk", "RK-9194"] },
    { segments: ["supply", "PR-48108"] }, { segments: ["supply", "PR-48107"] }, { segments: ["supply", "PR-48106"] }, { segments: ["supply", "PR-48102"] },
    { segments: ["bookings", "RUV-260914-X21A"] }, { segments: ["bookings", "RUV-261002-4D88"] }, { segments: ["bookings", "RUV-260914-L07F"] }, { segments: ["bookings", "RUV-260914-M31D"] },
    { segments: ["growth", "move-in-september"] }, { segments: ["growth", "weekend-city-escape"] }, { segments: ["growth", "owner-onboarding"] },
  ];
}
export default async function Page({ params }: { params: Promise<{ segments?: string[] }> }) {
  const { segments = [] } = await params;
  const [section, id] = segments;
  if (!section) return <InternalOverviewPage />;
  if (id) return <InternalRecordDetailPage section={section} id={id} />;
  if (section === "supply") return <InternalSupplyPage />;
  if (section === "bookings") return <InternalBookingsPage />;
  if (section === "payments") return <InternalPaymentsPage />;
  if (section === "risk") return <InternalRiskPage />;
  if (section === "growth") return <InternalGrowthPage />;
  if (section === "support") return <InternalSupportPage />;
  if (section === "audit") return <InternalAuditPage />;
  if (internalModules.some((module) => module.slug === section)) return <InternalEcosystemPage section={section} />;
  notFound();
}
