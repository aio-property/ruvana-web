import type { Metadata } from "next";
import { InternalAuditPage, InternalBookingsPage, InternalGrowthPage, InternalOverviewPage, InternalPaymentsPage, InternalRecordDetailPage, InternalRiskPage, InternalSupplyPage, InternalSupportPage } from "@/components/internal-pages";

export const metadata: Metadata = { title: "Internal management" };
export function generateStaticParams() {
  return [
    { segments: [] }, { segments: ["supply"] }, { segments: ["bookings"] }, { segments: ["payments"] },
    { segments: ["risk"] }, { segments: ["growth"] }, { segments: ["support"] }, { segments: ["audit"] },
    { segments: ["payments", "PAY-260914-2091"] }, { segments: ["payments", "PAY-260914-2088"] },
    { segments: ["payments", "PAY-260914-2074"] }, { segments: ["payments", "PAY-260914-2059"] },
    { segments: ["support", "SUP-4819"] }, { segments: ["support", "SUP-4812"] }, { segments: ["support", "SUP-4806"] },
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
  return <InternalAuditPage />;
}
