"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { Emblem } from "./Ornament";
import { Bell, Close, MenuIcon, Moon } from "./Icons";

export default function Header({ lang }: { lang: Lang }) {
  const d = t(lang);
  const path = usePathname() || `/${lang}/`;
  const [open, setOpen] = useState(false);
  const swap = (to: Lang) => path.replace(/^\/(en|ar)(?=\/|$)/, `/${to}`);
  const L = (p: string) => `/${lang}/${p}`;

  const links = [
    { href: L("founder/"), label: d.nav.about },
    { href: L("programmes/"), label: d.nav.academics },
    { href: L("knowledge/"), label: d.nav.knowledge },
    { href: L("news/"), label: d.nav.news },
    { href: L("announcements/"), label: d.nav.announcements },
    { href: L("support/"), label: d.nav.support },
  ];
  const isActive = (href: string) => path.startsWith(href);

  return (
    <>
      <div className="bg-gold px-4 py-2 text-center text-[12.5px] font-semibold text-forest">{d.ribbon}</div>

      <div className="bg-forest-deep text-[13px] text-[#E9E2CF]">
        <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Moon size={14} className="text-gold" />
              {lang === "ar" ? "[التاريخ الهجري] هـ" : "[Hijri date] AH"}
            </span>
            <span className="hidden md:inline">{d.place}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href={swap("en")} lang="en" className={`font-sans ${lang === "en" ? "font-semibold text-ivory" : "hover:text-ivory"}`} aria-current={lang === "en" ? "true" : undefined}>
              EN
            </Link>
            <Link href={swap("ar")} lang="ar" className={`font-arui ${lang === "ar" ? "font-semibold text-ivory" : "hover:text-ivory"}`} aria-current={lang === "ar" ? "true" : undefined}>
              العربية
            </Link>
            <span aria-hidden className="h-3.5 w-px bg-[#E9E2CF]/30" />
            <Link href={L("admin/")} className="hover:text-ivory">{d.nav.admin}</Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-sand-line bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <Link href={`/${lang}/`} className="flex items-center gap-3 text-forest" onClick={() => setOpen(false)}>
            <Emblem size={46} />
            <span className="flex flex-col">
              <span className="font-display text-[25px] font-bold leading-none tracking-[0.08em]">ANBARIYYA</span>
              <span className="mt-1 whitespace-nowrap text-[11.5px] uppercase tracking-[0.14em] text-muted rtl:tracking-normal rtl:text-[13px] rtl:normal-case">{d.subtitle}</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-5 text-[15px] font-medium xl:flex">
            {links.filter((l) => !l.href.endsWith("support/")).map((l) => (
              <Link key={l.href} href={l.href} className={`whitespace-nowrap border-b-2 py-1 transition-colors ${isActive(l.href) ? "border-gold text-forest" : "border-transparent text-charcoal hover:text-forest"}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href={L("alerts/")} className="hidden min-h-[44px] items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-forest px-4 text-sm font-semibold text-forest hover:bg-forest hover:text-ivory sm:inline-flex">
              <Bell size={16} />
              {d.getAlerts}
            </Link>
            <Link href={L("support/")} className="hidden min-h-[44px] items-center whitespace-nowrap rounded-full bg-forest px-5 text-sm font-semibold text-ivory hover:bg-forest-deep sm:inline-flex">
              {d.supportUs}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? d.close : d.menu}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-forest xl:hidden"
            >
              {open ? <Close /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <nav aria-label="Mobile" className="border-t border-sand-line bg-ivory px-5 pb-6 pt-2 xl:hidden">
            {[...links, { href: L("app/"), label: d.nav.app }].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex min-h-[52px] items-center border-b border-sand-line text-lg font-medium text-charcoal">
                {l.label}
              </Link>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link href={L("alerts/")} onClick={() => setOpen(false)} className="flex min-h-[50px] items-center justify-center gap-2 rounded-full border-[1.5px] border-forest font-semibold text-forest">
                <Bell size={16} />
                {d.getAlerts}
              </Link>
              <Link href={L("support/")} onClick={() => setOpen(false)} className="flex min-h-[50px] items-center justify-center rounded-full bg-forest font-semibold text-ivory">
                {d.supportUs}
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
