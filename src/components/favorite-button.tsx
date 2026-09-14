"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export function FavoriteButton({ label }: { label: string }) {
  const [active, setActive] = useState(false);
  return (
    <button className={`favorite ${active ? "favorite--active" : ""}`} onClick={() => setActive((value) => !value)} aria-label={`${active ? "Hapus" : "Simpan"} ${label} dari favorit`} aria-pressed={active}>
      <Heart size={19} fill={active ? "currentColor" : "none"} />
    </button>
  );
}
