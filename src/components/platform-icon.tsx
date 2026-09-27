import {
  Activity, BadgeCheck, Boxes, Building2, BusFront, CalendarDays, Car, Caravan,
  CarFront, CarTaxiFront, ChartNoAxesCombined, Compass, CreditCard, FerrisWheel,
  FileCheck2, Gift, Handshake, Headphones, Heart, Hotel, Landmark,
  LayoutDashboard, Map, MapPin, Medal, Megaphone, MessageSquare, Mountain,
  Music2, PawPrint, Plane, PlaneTakeoff, Route, Scale, ScrollText, Settings,
  ShieldAlert, ShieldCheck, ShieldPlus, ShipWheel, Star, Ticket, TicketCheck,
  TrainFront, TrainTrack, Trees, TrendingUp, UserCog, UserRound, Users, Utensils,
  WalletCards, Waves, Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconSet: Record<string, LucideIcon> = {
  Activity, BadgeCheck, Boxes, Building2, BusFront, CalendarDays, Car, Caravan,
  CarFront, CarTaxiFront, ChartNoAxesCombined, Compass, CreditCard, FerrisWheel,
  FileCheck2, Gift, Handshake, Headphones, Heart, Helicopter: Plane, Hotel, Landmark,
  LayoutDashboard, Map, MapPin, Medal, Megaphone, MessageSquare, MountainSun: Mountain,
  Music2, PawPrint, Plane, PlaneTakeoff, Route, Scale, ScrollText, Settings,
  ShieldAlert, ShieldCheck, ShieldPlus, ShipWheel, Star, Ticket, TicketCheck,
  TrainFront, TrainTrack, Trees, TrendingUp, UserCog, UserRound, Users, Utensils,
  Van: BusFront, WalletCards, Waves, Workflow,
};

export function PlatformIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = iconSet[name] ?? Compass;
  return <Icon size={size} aria-hidden="true" />;
}
