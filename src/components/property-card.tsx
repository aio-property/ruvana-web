import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Square, Star } from "lucide-react";
import type { Property } from "@/lib/mock-data";
import { FavoriteButton } from "@/components/favorite-button";

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/property/${property.slug}`} className="property-card__media" aria-label={`Buka ${property.name}`}>
        <Image src={property.image} alt={`Foto ${property.name}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <span className="media-badge">{property.badge}</span>
      </Link>
      <div className="property-card__favorite"><FavoriteButton label={property.name} /></div>
      <div className="property-card__body">
        <div className="property-card__title"><div><p><MapPin size={14} />{property.area}, {property.city}</p><Link href={`/property/${property.slug}`}>{property.name}</Link></div><span><Star size={14} fill="currentColor" />{property.rating}</span></div>
        <div className="amenities-inline"><span><BedDouble size={15} />{property.bedrooms} KT</span><span><Bath size={15} />{property.bathrooms} KM</span><span><Square size={14} />{property.size} m²</span></div>
        <div className="property-card__footer"><p><strong>{rupiah.format(property.price)}</strong> / {property.priceUnit}</p><Link href={`/property/${property.slug}`}>Lihat detail</Link></div>
      </div>
    </article>
  );
}
