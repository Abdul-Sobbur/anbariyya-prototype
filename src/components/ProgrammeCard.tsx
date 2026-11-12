import type { Lang } from "@/lib/site";
import type { Programme } from "@/data/content";
import { t } from "@/lib/i18n";
import { BookIcon, Cap } from "./Icons";
import { Chip } from "./ui";

export default function ProgrammeCard({ p, lang, detailed = false }: { p: Programme; lang: Lang; detailed?: boolean }) {
  const d = t(lang).programmes;
  const dark = !!p.dark;
  const other = lang === "ar" ? "en" : "ar";
  return (
    <article id={p.slug} className={`flex scroll-mt-28 flex-col gap-4 rounded-[22px] p-7 sm:p-8 ${dark ? "bg-forest text-ivory" : "border border-[#E8E0CC] bg-white"}`}>
      <div className="flex items-center justify-between gap-3">
        <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dark ? "bg-gold text-forest" : "bg-forest text-gold"}`}>
          {p.icon === "book" && <BookIcon size={26} />}
          {p.icon === "cap" && <Cap size={26} />}
          {p.icon === "arabic" && <span aria-hidden className="font-arabic text-[30px] leading-none">ض</span>}
        </span>
        <span lang={other} className={`${other === "ar" ? "font-arabic text-2xl" : "font-display text-xl"} ${dark ? "text-gold" : "text-gold-deep"}`}>
          {p.name[other]}
        </span>
      </div>
      <h3 className={`font-display text-[30px] font-bold ${dark ? "" : "text-forest"}`}>{p.name[lang]}</h3>
      <p className={`text-[15px] leading-relaxed ${dark ? "text-mist" : "text-[#4A514D]"}`}>{p.summary[lang]}</p>
      <div className="flex flex-wrap gap-2">
        {p.subjects.map((s, i) => <Chip key={i} dark={dark}>{s[lang]}</Chip>)}
      </div>
      {detailed && (
        <dl className={`mt-2 grid grid-cols-2 gap-4 border-t pt-4 text-sm ${dark ? "border-ivory/15" : "border-sand-line"}`}>
          <div><dt className={dark ? "text-mist" : "text-muted"}>{d.duration}</dt><dd className="font-semibold">{p.duration[lang]}</dd></div>
          <div><dt className={dark ? "text-mist" : "text-muted"}>{d.entry}</dt><dd className="font-semibold">{p.entry[lang]}</dd></div>
        </dl>
      )}
    </article>
  );
}
