import type { Metadata } from "next";
import { PropertyDetailPage } from "@/components/public-pages";
import { getProperty, properties } from "@/lib/mock-data";

export function generateStaticParams() { return properties.map((property) => ({ slug: property.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; return { title: getProperty(slug).name }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <PropertyDetailPage property={getProperty(slug)} />; }
