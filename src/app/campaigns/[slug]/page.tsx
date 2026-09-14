import type { Metadata } from "next";
import { CampaignDetailPage } from "@/components/public-pages";
import { campaigns } from "@/lib/mock-data";
export const metadata: Metadata = { title: "Campaign" };
export function generateStaticParams() { return campaigns.map((campaign) => ({ slug: campaign.slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <CampaignDetailPage slug={slug} />; }
