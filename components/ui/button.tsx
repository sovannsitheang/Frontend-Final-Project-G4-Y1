"use client";

import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-brand-700 text-white hover:bg-brand-800",
    outline: "border border-brand-700 text-brand-700 hover:bg-blue-50",
    ghost: "text-brand-700 hover:bg-blue-50",
  };

  return href ? (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}