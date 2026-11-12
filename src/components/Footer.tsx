import Link from "next/link";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { Emblem } from "./Ornament";

export default function Footer({ lang }: { lang: Lang }) {
  const d = t(lang);
  const L = (p: string) => `/${lang}/${p}`;
  return (
    <footer className="bg-forest-deep text-mist">
      <div className="mx-auto flex max-w-site flex-col gap-12 px-5 pb-8 pt-16 sm:px-8">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex max-w-sm flex-col gap-4">
            <div className="flex items-center gap-3">
              <Emblem size={44} inverted />
              <span className="font-display text-3xl font-bold tracking-[0.08em] text-ivory">ANBARIYYA</span>
            </div>
            <span className="font-arabic text-xl text-gold" lang="ar">[الاسم الرسمي بالعربية]</span>
            <span className="text-sm leading-relaxed">{`${d.hero.title1} ${d.hero.title2} ${d.hero.title3}`}</span>
          </div>
          <div className="flex flex-wrap gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-ivory">{d.footer.institute}</span>
              <Link href={L("founder/")} className="hover:text-ivory">{d.nav.about}</Link>
              <Link href={L("news/")} className="hover:text-ivory">{d.nav.news}</Link>
              <Link href={L("announcements/")} className="hover:text-ivory">{d.nav.announcements}</Link>
              <Link href={L("support/")} className="hover:text-ivory">{d.nav.support}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-ivory">{d.footer.learn}</span>
              <Link href={L("programmes/")} className="hover:text-ivory">{d.nav.academics}</Link>
              <Link href={L("knowledge/")} className="hover:text-ivory">{d.nav.knowledge}</Link>
              <Link href={L("app/")} className="hover:text-ivory">{d.nav.app}</Link>
              <Link href={L("admin/")} className="hover:text-ivory">{d.nav.admin}</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-ivory">{d.footer.contact}</span>
              <span>{d.footer.address}</span>
              <span dir="ltr" className="rtl:text-right">[+233 …]</span>
              <span>[info@…]</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-mist/20 pt-6 text-[13px]">
          <span>{d.footer.rights}</span>
          <span>{d.footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
