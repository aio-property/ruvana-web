import type { Metadata } from "next";
import { NewPropertyPage, OwnerCalendarPage, OwnerCampaignDetailPage, OwnerCampaignsPage, OwnerOperationsPage, OwnerOverviewPage, OwnerPropertiesPage, OwnerPropertyDetailPage } from "@/components/owner-pages";
import { OwnerFinanceSkyPage, OwnerInboxSkyPage, OwnerReservationsSkyPage, OwnerSettingsSkyPage } from "@/components/owner-sky-pages";

export const metadata: Metadata = { title: "Owner panel" };
export function generateStaticParams() {
  return [
    { segments: [] }, { segments: ["properties"] }, { segments: ["properties", "new"] },
    { segments: ["properties", "KNG-1208"] }, { segments: ["properties", "VIL-02"] }, { segments: ["properties", "DGO-0711"] },
    { segments: ["reservations"] }, { segments: ["calendar"] }, { segments: ["operations"] }, { segments: ["finance"] },
    { segments: ["campaigns"] }, { segments: ["campaigns", "move-in-september"] }, { segments: ["campaigns", "weekend-city-escape"] },
    { segments: ["campaigns", "owner-onboarding"] }, { segments: ["inbox"] }, { segments: ["settings"] },
  ];
}
export default async function Page({ params }: { params: Promise<{ segments?: string[] }> }) {
  const { segments = [] } = await params;
  const [section, id] = segments;
  if (!section) return <OwnerOverviewPage />;
  if (section === "properties" && id === "new") return <NewPropertyPage />;
  if (section === "properties" && id) return <OwnerPropertyDetailPage id={id} />;
  if (section === "properties") return <OwnerPropertiesPage />;
  if (section === "reservations") return <OwnerReservationsSkyPage />;
  if (section === "calendar") return <OwnerCalendarPage />;
  if (section === "operations") return <OwnerOperationsPage />;
  if (section === "finance") return <OwnerFinanceSkyPage />;
  if (section === "campaigns" && id) return <OwnerCampaignDetailPage slug={id} />;
  if (section === "campaigns") return <OwnerCampaignsPage />;
  if (section === "inbox") return <OwnerInboxSkyPage />;
  return <OwnerSettingsSkyPage />;
}
