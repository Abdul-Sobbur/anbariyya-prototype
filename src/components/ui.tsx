import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`text-[13px] font-bold uppercase tracking-[0.16em] rtl:tracking-normal rtl:text-sm ${light ? "text-gold" : "text-gold-deep"}`}>
      {children}
    </span>
  );
}

export function H2({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <h2
      className={`font-display text-[38px] font-semibold leading-[1.08] sm:text-[50px] rtl:font-arabic rtl:font-bold rtl:leading-[1.35] ${light ? "text-ivory" : "text-forest"} ${className}`}
    >
      {children}
    </h2>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "gold" | "forest" | "outline" | "outlineLight"; className?: string };

export function Button({ href, children, variant = "forest", className = "" }: BtnProps) {
  const styles = {
    gold: "bg-gold text-forest hover:bg-gold-light",
    forest: "bg-forest text-ivory hover:bg-forest-deep",
    outline: "border-[1.5px] border-forest text-forest hover:bg-forest hover:text-ivory",
    outlineLight: "border-[1.5px] border-ivory/50 text-ivory hover:bg-ivory/10",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Chip({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`rounded-full px-3 py-1.5 text-[13px] ${dark ? "bg-ivory/10 text-ivory" : "bg-[#F3EEE1] text-charcoal"}`}>{children}</span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SampleBadge({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-sand px-3.5 py-2 text-[13px] font-semibold text-[#5B4416]">{children}</span>;
}
