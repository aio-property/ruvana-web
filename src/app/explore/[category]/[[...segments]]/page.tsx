import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreCategoryPage, ExploreDetailPage } from "@/components/explore-pages";
import { categories, products } from "@/lib/ecosystem";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ category: category.slug, segments: [] as string[] })),
    ...products.map((product) => ({ category: product.category, segments: [product.id] })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; segments?: string[] }> }): Promise<Metadata> {
  const { category, segments = [] } = await params;
  const categoryData = categories.find((item) => item.slug === category);
  const product = products.find((item) => item.id === segments[0]);
  return { title: product?.title ?? categoryData?.name ?? "Explore" };
}

export default async function Page({ params }: { params: Promise<{ category: string; segments?: string[] }> }) {
  const { category, segments = [] } = await params;
  if (!categories.some((item) => item.slug === category)) notFound();
  if (!segments.length) return <ExploreCategoryPage categorySlug={category} />;
  const product = products.find((item) => item.id === segments[0] && item.category === category);
  if (!product) notFound();
  return <ExploreDetailPage categorySlug={category} productId={product.id} />;
}
