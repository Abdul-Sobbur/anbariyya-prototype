"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { collections, library, type LibraryItem } from "@/data/content";
import { matches } from "@/lib/search";
import { BookIcon, Download, Headphones, Pause, Play, Search, Video } from "./Icons";

const typeIcon = { book: BookIcon, audio: Headphones, video: Video };

export default function LibraryBrowser({ lang }: { lang: Lang }) {
  const d = t(lang).knowledge;
  const [q, setQ] = useState("");
  const [col, setCol] = useState<string>("all");
  const [types, setTypes] = useState({ book: true, audio: true, video: true });
  const [playing, setPlaying] = useState<string | null>(null);

  const results = useMemo(
    () =>
      library.filter(
        (i) =>
          (col === "all" || i.collection === col) &&
          types[i.type] &&
          matches([i.title.en, i.title.ar, i.translit, i.author.en, i.author.ar, i.keywords], q),
      ),
    [q, col, types],
  );

  return (
    <div className="flex flex-col gap-8">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="mx-auto flex w-full max-w-3xl items-center rounded-full bg-white p-2 shadow-[0_14px_36px_rgba(18,61,46,0.12)]">
        <Search className="ms-4 shrink-0 text-muted" />
        <label htmlFor="lib-q" className="sr-only">{d.search}</label>
        <input
          id="lib-q"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={d.searchPh}
          className="min-h-[52px] min-w-0 flex-1 bg-transparent px-3 text-[17px] outline-none"
        />
        <button type="submit" className="min-h-[52px] rounded-full bg-forest px-7 font-semibold text-ivory">{d.search}</button>
      </form>
      <p className="-mt-4 text-center text-sm text-muted">{d.hint}</p>

      <div className="flex flex-wrap justify-center gap-2.5">
        {[{ id: "all", name: { en: d.all, ar: d.all } }, ...collections].map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={col === c.id}
            onClick={() => setCol(c.id)}
            className={`min-h-[44px] rounded-full px-4 text-sm transition-colors ${
              col === c.id ? "bg-forest font-semibold text-ivory" : c.id === "ajura" ? "border border-dashed border-gold bg-white font-semibold text-gold-deep" : "bg-white text-charcoal hover:bg-sand"
            }`}
          >
            {c.name[lang]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm text-muted" aria-live="polite">{results.length} {d.results} · {d.sample}</span>
        <div className="flex gap-2">
          {(Object.keys(types) as (keyof typeof types)[]).map((k) => {
            const Ico = typeIcon[k];
            return (
              <button
                key={k}
                type="button"
                aria-pressed={types[k]}
                onClick={() => setTypes({ ...types, [k]: !types[k] })}
                className={`flex min-h-[40px] items-center gap-2 rounded-full px-3.5 text-sm ${types[k] ? "bg-forest/10 font-semibold text-forest" : "text-muted line-through"}`}
              >
                <Ico size={16} />
                {d.types[k]}
              </button>
            );
          })}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-muted">{d.noResults}</p>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <li key={item.id}>
              <Card item={item} lang={lang} playing={playing === item.id} onPlay={() => setPlaying(playing === item.id ? null : item.id)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Card({ item, lang, playing, onPlay }: { item: LibraryItem; lang: Lang; playing: boolean; onPlay: () => void }) {
  const d = t(lang).knowledge;
  const colName = collections.find((c) => c.id === item.collection)?.name[lang];
  const isAjura = item.collection === "ajura";
  const other = lang === "ar" ? "en" : "ar";

  if (item.type === "book") {
    return (
      <article className="flex h-full gap-5 rounded-[20px] border border-sand-line bg-white p-5">
        <div className={`flex h-[132px] w-24 shrink-0 items-center justify-center rounded-e-xl rounded-s-md p-2 shadow-[inset_6px_0_0_#0B2A1F] rtl:shadow-[inset_-6px_0_0_#0B2A1F] ${isAjura ? "bg-[#E9DFC6]" : "bg-forest"}`}>
          <span lang="ar" className={`text-center font-arabic text-lg leading-snug ${isAjura ? "text-[#5B4416]" : "text-gold"}`}>{item.title.ar}</span>
        </div>
        <div className="flex min-w-0 flex-col gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-deep rtl:tracking-normal">{d.types.book} · {colName}</span>
          <h3 className="font-display text-[23px] font-bold leading-tight text-forest">{item.title[lang]}</h3>
          <span lang={other} className={`text-sm text-muted ${other === "ar" ? "font-arabic text-base" : ""}`}>{item.title[other]}</span>
          <span className="text-sm text-muted">{item.author[lang]}</span>
          <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm font-semibold">
            <button type="button" className="min-h-[36px] text-forest underline-offset-4 hover:underline">{d.read}</button>
            <button type="button" className="flex min-h-[36px] items-center gap-1.5 text-forest underline-offset-4 hover:underline"><Download size={15} />{d.download}</button>
          </div>
        </div>
      </article>
    );
  }

  if (item.type === "video") {
    return (
      <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-sand-line bg-white">
        <div className="relative flex aspect-[16/8] items-center justify-center bg-forest-soft">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory/95 text-forest"><Play size={20} /></span>
          <span className="absolute bottom-3 start-4 text-xs text-mist">[Video thumbnail]</span>
        </div>
        <div className="flex flex-col gap-1.5 p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-deep rtl:tracking-normal">{d.types.video} · {colName}</span>
          <h3 className="text-[17px] font-semibold">{item.title[lang]}</h3>
          <span className="text-sm text-muted">{item.author[lang]} · {item.meta[lang]}</span>
        </div>
      </article>
    );
  }

  return (
    <article className={`flex h-full flex-col gap-4 rounded-[20px] p-5 ${isAjura ? "bg-forest-deep text-ivory" : "bg-forest text-ivory"}`}>
      <div className="flex items-center gap-3.5">
        <button
          type="button"
          onClick={onPlay}
          aria-label={`${playing ? "Pause" : d.listen}: ${item.title[lang]}`}
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-gold text-forest"
        >
          {playing ? <Pause /> : <Play />}
        </button>
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gold rtl:tracking-normal">{d.types.audio} · {colName}</span>
          <h3 className="text-[16px] font-semibold leading-snug">{item.title[lang]}</h3>
          <span className="text-[13px] text-mist">{item.author[lang]} · {item.meta[lang]}</span>
        </div>
      </div>
      <Wave active={playing} />
      <button type="button" className="mt-auto flex min-h-[36px] items-center gap-2 self-start text-sm font-semibold text-gold">
        <Download size={15} />
        {d.offline}
      </button>
    </article>
  );
}

const BARS = [8, 20, 32, 16, 28, 12, 24, 36, 16, 28, 8, 20, 32, 16, 24, 12, 28, 20, 36, 16, 24, 8, 28, 12, 20, 32, 16, 24, 12, 20, 28, 8];

function Wave({ active }: { active: boolean }) {
  return (
    <svg aria-hidden viewBox={`0 0 ${BARS.length * 8} 40`} className="h-10 w-full" preserveAspectRatio="none">
      {BARS.map((h, i) => (
        <rect key={i} x={i * 8} y={20 - h / 2} width="4" height={h} rx="2" fill={i < 11 ? "#C6A15B" : "rgba(248,245,237,0.25)"}>
          {active && <animate attributeName="height" values={`${h};${Math.max(6, 40 - h)};${h}`} dur={`${0.8 + (i % 5) * 0.15}s`} repeatCount="indefinite" />}
          {active && <animate attributeName="y" values={`${20 - h / 2};${20 - Math.max(6, 40 - h) / 2};${20 - h / 2}`} dur={`${0.8 + (i % 5) * 0.15}s`} repeatCount="indefinite" />}
        </rect>
      ))}
    </svg>
  );
}
