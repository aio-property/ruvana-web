"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { Check, X } from "lucide-react";

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  message: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
};

export function ActionButton({ message, children, variant = "secondary", className = "", ...props }: ActionButtonProps) {
  const [notice, setNotice] = useState<string | null>(null);

  function handleClick() {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 2800);
  }

  return (
    <>
      <button {...props} className={`button button--${variant} ${className}`} onClick={handleClick}>{children}</button>
      {notice ? <div className="toast" role="status"><span><Check size={16} /></span>{notice}<button onClick={() => setNotice(null)} aria-label="Tutup notifikasi"><X size={15} /></button></div> : null}
    </>
  );
}
