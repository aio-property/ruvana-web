import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AccountPage } from "@/components/account-pages";
import { getUserModule, userModules } from "@/lib/ecosystem";

export const metadata: Metadata = { title: "Traveler Center" };
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ segments: [] as string[] }, ...userModules.map((module) => ({ segments: [module.slug] }))];
}

export default async function Page({ params }: { params: Promise<{ segments?: string[] }> }) {
  const { segments = [] } = await params;
  const section = segments[0] ?? "overview";
  if (!userModules.some((module) => module.slug === section)) notFound();
  return <AccountPage section={getUserModule(section).slug} />;
}
