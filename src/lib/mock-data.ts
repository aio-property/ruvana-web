export type Property = {
  slug: string;
  name: string;
  type: string;
  city: string;
  area: string;
  address: string;
  image: string;
  gallery: string[];
  price: number;
  priceUnit: "malam" | "bulan" | "tahun";
  rating: number;
  reviews: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  size: number;
  badge: string;
  instantBook: boolean;
  description: string;
  amenities: string[];
  rules: string[];
  nearby: Array<{ name: string; distance: string }>;
};

export type Booking = {
  id: string;
  propertySlug: string;
  guest: string;
  start: string;
  end: string;
  status: "Confirmed" | "In stay" | "Completed" | "Pending payment" | "Cancelled";
  total: number;
  payment: string;
  channel: string;
};

export const properties: Property[] = [
  {
    slug: "verde-residence-sky-loft",
    name: "Verde Residence Sky Loft",
    type: "Apartemen",
    city: "Jakarta Selatan",
    area: "Kuningan",
    address: "Jl. H. Cokong, Karet Kuningan, Setiabudi",
    image: "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1600",
    gallery: [
      "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    price: 875000,
    priceUnit: "malam",
    rating: 4.92,
    reviews: 128,
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    size: 78,
    badge: "Pilihan tamu",
    instantBook: true,
    description: "Sky loft tenang di pusat CBD dengan pemandangan kota, ruang kerja nyaman, serta akses langsung ke kolam renang dan gym.",
    amenities: ["Wi-Fi 200 Mbps", "Kolam renang", "Gym 24 jam", "Smart TV", "Dapur lengkap", "Mesin cuci", "Workspace", "Parkir 1 mobil"],
    rules: ["Check-in setelah 14.00", "Check-out sebelum 12.00", "Tidak merokok", "Tidak diperbolehkan pesta"],
    nearby: [{ name: "Lotte Shopping Avenue", distance: "6 menit" }, { name: "MRT Bendungan Hilir", distance: "9 menit" }, { name: "RS MMC", distance: "7 menit" }],
  },
  {
    slug: "ubud-riverstone-pool-villa",
    name: "Ubud Riverstone Pool Villa",
    type: "Vila",
    city: "Bali",
    area: "Ubud",
    address: "Jl. Raya Pejeng Kawan, Tampaksiring",
    image: "https://images.unsplash.com/photo-1675657144285-7daf131132de?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1675657144285-7daf131132de?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
    ],
    price: 1850000,
    priceUnit: "malam",
    rating: 4.96,
    reviews: 86,
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    size: 210,
    badge: "RUVANA Select",
    instantBook: true,
    description: "Vila tropis privat dengan infinity pool, taman rimbun, layanan housekeeping harian, dan suasana tenang dekat pusat Ubud.",
    amenities: ["Infinity pool", "Sarapan tersedia", "Housekeeping", "Wi-Fi", "Bathtub", "Dapur", "Airport transfer", "Concierge"],
    rules: ["Check-in setelah 15.00", "Check-out sebelum 11.00", "Maksimal 6 tamu", "Quiet hours setelah 22.00"],
    nearby: [{ name: "Ubud Palace", distance: "14 menit" }, { name: "Tegallalang", distance: "18 menit" }, { name: "Monkey Forest", distance: "20 menit" }],
  },
  {
    slug: "dago-forest-serviced-studio",
    name: "Dago Forest Serviced Studio",
    type: "Serviced apartment",
    city: "Bandung",
    area: "Dago",
    address: "Jl. Ir. H. Juanda, Coblong",
    image: "https://images.pexels.com/photos/38697706/pexels-photo-38697706.jpeg?auto=compress&cs=tinysrgb&w=1600",
    gallery: [
      "https://images.pexels.com/photos/38697706/pexels-photo-38697706.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7031605/pexels-photo-7031605.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6207818/pexels-photo-6207818.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    price: 6900000,
    priceUnit: "bulan",
    rating: 4.88,
    reviews: 64,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    size: 42,
    badge: "Hemat bulanan",
    instantBook: false,
    description: "Studio serviced yang cocok untuk profesional dan mahasiswa, lengkap dengan housekeeping mingguan dan internet cepat.",
    amenities: ["Wi-Fi", "Housekeeping mingguan", "Dapur", "Laundry room", "Smart lock", "Workspace", "Security 24 jam", "Parkir motor"],
    rules: ["Minimum tinggal 1 bulan", "Deposit 1 bulan", "Tidak merokok", "Hewan kecil perlu persetujuan"],
    nearby: [{ name: "ITB", distance: "8 menit" }, { name: "Dago Pakar", distance: "12 menit" }, { name: "Cihampelas Walk", distance: "15 menit" }],
  },
  {
    slug: "kemang-garden-family-home",
    name: "Kemang Garden Family Home",
    type: "Rumah",
    city: "Jakarta Selatan",
    area: "Kemang",
    address: "Jl. Kemang Dalam, Mampang Prapatan",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=85",
    ],
    price: 235000000,
    priceUnit: "tahun",
    rating: 4.9,
    reviews: 31,
    bedrooms: 4,
    bathrooms: 3,
    guests: 7,
    size: 260,
    badge: "Family ready",
    instantBook: false,
    description: "Rumah keluarga dengan taman privat, empat kamar, ruang kerja, dan lingkungan tenang dekat sekolah internasional.",
    amenities: ["Taman privat", "Garasi 2 mobil", "Dapur lengkap", "Maid room", "Pet friendly", "Fiber internet", "CCTV", "Water heater"],
    rules: ["Minimum tinggal 12 bulan", "Deposit 2 bulan", "Survey sebelum kontrak", "Perawatan taman termasuk"],
    nearby: [{ name: "Kemang Village", distance: "7 menit" }, { name: "Australian Independent School", distance: "11 menit" }, { name: "Lippo Mall Kemang", distance: "8 menit" }],
  },
  {
    slug: "bsd-nava-park-residence",
    name: "BSD Nava Park Residence",
    type: "Apartemen",
    city: "Tangerang Selatan",
    area: "BSD City",
    address: "Nava Park, Sampora, Cisauk",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    ],
    price: 12500000,
    priceUnit: "bulan",
    rating: 4.85,
    reviews: 47,
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    size: 88,
    badge: "Baru",
    instantBook: true,
    description: "Unit premium dengan lake view, fasilitas lengkap, dan akses singkat ke ICE BSD serta pusat bisnis Digital Hub.",
    amenities: ["Lake view", "Kolam renang", "Gym", "Jogging track", "Wi-Fi", "Dapur", "Balcony", "EV charging"],
    rules: ["Minimum tinggal 1 bulan", "Deposit 1 bulan", "Tidak diperbolehkan pesta", "Registrasi penghuni wajib"],
    nearby: [{ name: "AEON Mall BSD", distance: "8 menit" }, { name: "ICE BSD", distance: "9 menit" }, { name: "Digital Hub", distance: "6 menit" }],
  },
  {
    slug: "surabaya-tunjungan-city-suite",
    name: "Tunjungan City Executive Suite",
    type: "Apartemen",
    city: "Surabaya",
    area: "Tunjungan",
    address: "Jl. Embong Malang, Tegalsari",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    ],
    price: 720000,
    priceUnit: "malam",
    rating: 4.89,
    reviews: 92,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    size: 48,
    badge: "Business stay",
    instantBook: true,
    description: "Executive suite di pusat Surabaya dengan workspace ergonomis, city view, dan akses langsung ke pusat perbelanjaan.",
    amenities: ["Workspace", "Wi-Fi", "City view", "Kolam renang", "Gym", "Dapur mini", "Smart TV", "Daily cleaning"],
    rules: ["Check-in setelah 14.00", "Check-out sebelum 12.00", "Tidak merokok", "Maksimal 2 tamu"],
    nearby: [{ name: "Tunjungan Plaza", distance: "2 menit" }, { name: "Gubeng Station", distance: "12 menit" }, { name: "Graha Amerta", distance: "15 menit" }],
  },
];

export const bookings: Booking[] = [
  { id: "RUV-260920-8F31", propertySlug: "verde-residence-sky-loft", guest: "Evans Moris Cheahn", start: "20 Sep 2026", end: "23 Sep 2026", status: "Confirmed", total: 2832500, payment: "Virtual Account BCA", channel: "RUVANA Web" },
  { id: "RUV-260712-21A4", propertySlug: "dago-forest-serviced-studio", guest: "Evans Moris Cheahn", start: "12 Jul 2026", end: "12 Agu 2026", status: "Completed", total: 7420000, payment: "QRIS", channel: "RUVANA App" },
  { id: "RUV-261002-4D88", propertySlug: "ubud-riverstone-pool-villa", guest: "Nadia Putri", start: "2 Okt 2026", end: "5 Okt 2026", status: "Pending payment", total: 6034000, payment: "Kartu kredit", channel: "RUVANA Web" },
];

export const ownerProperties = [
  { id: "KNG-1208", slug: "verde-residence-sky-loft", status: "Live", occupancy: 91, rate: "Rp912 rb/malam", revenue: "Rp38,2 jt", rating: 4.92, next: "Check-in · 20 Sep" },
  { id: "VIL-02", slug: "ubud-riverstone-pool-villa", status: "Live", occupancy: 84, rate: "Rp1,95 jt/malam", revenue: "Rp31,8 jt", rating: 4.96, next: "Housekeeping · besok" },
  { id: "DGO-0711", slug: "dago-forest-serviced-studio", status: "Review", occupancy: 73, rate: "Rp7,1 jt/bulan", revenue: "Rp16,4 jt", rating: 4.88, next: "Tanda tangan kontrak" },
];

export const paymentRows = [
  { id: "PAY-260914-2091", booking: "RUV-260920-8F31", customer: "Evans M.", method: "VA BCA", amount: "Rp2.832.500", risk: 12, status: "Paid", time: "18:31" },
  { id: "PAY-260914-2088", booking: "RUV-261002-4D88", customer: "Nadia P.", method: "Visa •• 9821", amount: "Rp6.034.000", risk: 32, status: "Pending", time: "18:24" },
  { id: "PAY-260914-2074", booking: "RUV-260914-X21A", customer: "Kevin T.", method: "QRIS", amount: "Rp3.240.000", risk: 78, status: "Review", time: "17:56" },
  { id: "PAY-260914-2059", booking: "RUV-260914-L07F", customer: "Dinda A.", method: "Installment", amount: "Rp21.300.000", risk: 92, status: "Held", time: "17:40" },
];

export const supportTickets = [
  { id: "SUP-4819", title: "AC unit tidak dingin", property: "Verde Residence KNG-1208", customer: "Evans M.", priority: "High", status: "Assigned", sla: "18m", owner: "Dimas" },
  { id: "SUP-4812", title: "Permintaan early check-in", property: "Ubud Riverstone VIL-02", customer: "Nadia P.", priority: "Medium", status: "Waiting guest", sla: "42m", owner: "Ayu" },
  { id: "SUP-4806", title: "Refund deposit belum diterima", property: "Dago Forest DGO-0711", customer: "Raka F.", priority: "High", status: "Escalated", sla: "08m", owner: "Sinta" },
];

export const campaigns = [
  { slug: "move-in-september", name: "RUVANA Move-in September", channel: "Meta + TikTok", spend: "Rp84,2 jt", revenue: "Rp522,1 jt", roas: "6,2×", status: "Active", progress: 78 },
  { slug: "weekend-city-escape", name: "Weekend City Escape", channel: "Google + Meta", spend: "Rp31,8 jt", revenue: "Rp152,4 jt", roas: "4,8×", status: "Active", progress: 61 },
  { slug: "owner-onboarding", name: "Owner Onboarding Q3", channel: "LinkedIn + Search", spend: "Rp22,1 jt", revenue: "128 leads", roas: "3,9×", status: "Optimizing", progress: 42 },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug) ?? properties[0];
}

export function getBooking(id: string) {
  return bookings.find((booking) => booking.id === id) ?? bookings[0];
}
