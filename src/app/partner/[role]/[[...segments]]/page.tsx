import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PartnerPage } from "@/components/partner-pages";
import { partnerModules, partnerRoles } from "@/lib/ecosystem";

export const dynamicParams = false;

export function generateStaticParams() {
  return partnerRoles.flatMap((role) => [
    { role: role.slug, segments: [] as string[] },
    ...partnerModules.map((module) => ({ role: role.slug, segments: [module.slug] })),
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ role: string; segments?: string[] }> }): Promise<Metadata> {
  const { role, segments = [] } = await params;
  const roleData = partnerRoles.find((item) => item.slug === role);
  const activeModule = partnerModules.find((item) => item.slug === (segments[0] ?? "dashboard"));
  return { title: `${roleData?.name ?? "Partner"} · ${activeModule?.name ?? "Dashboard"}` };
}

export default async function Page({ params }: { params: Promise<{ role: string; segments?: string[] }> }) {
  const { role, segments = [] } = await params;
  const section = segments[0] ?? "dashboard";
  if (!partnerRoles.some((item) => item.slug === role) || !partnerModules.some((item) => item.slug === section)) notFound();
  return <PartnerPage roleSlug={role} section={section} />;
}
