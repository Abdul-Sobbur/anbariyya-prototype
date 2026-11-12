import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { library, timeline } from "@/data/content";
import { Placeholder } from "@/components/Ornament";
import { Person, Play, Shield } from "@/components/Icons";
import { Button, Container, H2 } from "@/components/ui";

export const metadata: Metadata = { title: "Our Founder" };

export default async function Founder({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang).heritage;
  const recordings = library.filter((i) => i.collection === "ajura" && i.type === "audio");

  return (
    <>
      <Container className="flex flex-wrap items-center gap-14 pb-14 pt-16">
        <div className="flex min-w-0 flex-[1_1_320px] justify-center">
          <div className="arch aspect-[3/4] w-full max-w-[400px] bg-forest p-3.5">
            <div className="arch flex h-full w-full flex-col items-center justify-center gap-2.5 border-[1.5px] border-gold bg-forest-soft text-mist">
              <Person size={40} />
              <span className="text-sm">{d.photo}</span>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-5">
          <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-gold-deep rtl:text-sm rtl:tracking-normal">{d.eyebrow}</span>
          <span lang="ar" dir="rtl" className="font-arabic text-[32px] leading-snug text-gold-deep ltr:text-left">الشيخ يوسف صالح أجورا</span>
          <h1 className="font-display text-[44px] font-semibold leading-[1.02] text-forest sm:text-[66px]" lang="en" dir="ltr">
            Sheikh Yusuf Sualihu Ajura
          </h1>
          <p className="font-display text-2xl italic text-[#4A514D]">“Afa Ajura” · {d.years}</p>
          <p className="max-w-[600px] text-[17px] leading-[1.75] text-[#3B413D]">{d.body}</p>
          <div className="flex max-w-[600px] gap-3 rounded-2xl bg-sand p-4">
            <Shield size={20} className="mt-0.5 shrink-0 text-gold-deep" />
            <span className="text-sm leading-relaxed text-[#4A3A16]">{d.review}</span>
          </div>
        </div>
      </Container>

      <section className="border-y border-sand-line bg-white">
        <Container className="flex flex-col py-20">
          <H2 className="mb-12 text-center">{d.lifeTitle}</H2>
          <ol className="mx-auto w-full max-w-3xl">
            {timeline.map((s, i) => (
              <li key={i} className="flex gap-5 sm:gap-7">
                <div className="w-20 shrink-0 pt-0.5 text-end font-display text-2xl font-bold text-gold-deep sm:w-28 sm:text-[32px]">{s.year[lang]}</div>
                <div className="relative w-0.5 shrink-0 bg-gold">
                  <span className={`absolute -start-[7px] top-3 h-4 w-4 rounded-full border-[3px] border-white shadow-[0_0_0_1px_#C6A15B] ${i === 2 ? "bg-gold" : "bg-forest"}`} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2 pb-11">
                  <h3 className="text-[21px] font-semibold">{s.title[lang]}</h3>
                  <p className="leading-[1.7] text-[#4A514D]">{s.body[lang]}</p>
                  {s.photos && (
                    <div className="mt-2 grid max-w-[460px] grid-cols-3 gap-2.5">
                      <Placeholder label="" className="aspect-square rounded-xl" />
                      <Placeholder label="" className="aspect-square rounded-xl bg-[#D3C8AE]" />
                      <Placeholder label={lang === "ar" ? "+ [n] صور" : "+ [n] photos"} className="aspect-square rounded-xl" />
                    </div>
                  )}
                  {s.sourced && <span className="text-xs text-muted">{d.source}: [citation]</span>}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-forest text-ivory">
        <Container className="flex flex-wrap gap-12 py-20">
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-5">
            <H2 light>{d.writings}</H2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { ar: "[عنوان المخطوط]", en: "[Manuscript title]", m: lang === "ar" ? "ممسوح ضوئياً · [الصفحات]" : "Scanned · [pages]" },
                { ar: "[قصيدة]", en: "[Poem title]", m: lang === "ar" ? "عربي مع ترجمة" : "Arabic with translation" },
              ].map((w, i) => (
                <div key={i} className="flex flex-col gap-2.5">
                  <div className={`flex aspect-[3/4] items-center justify-center rounded-xl p-4 ${i ? "bg-[#DED2B4]" : "bg-[#E9DFC6]"}`}>
                    <span lang="ar" className="text-center font-arabic text-[22px] text-[#5B4416]">{w.ar}</span>
                  </div>
                  <span className="text-sm font-semibold">{lang === "ar" ? w.ar : w.en}</span>
                  <span className="text-xs text-[#A9B8B1]">{w.m}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4">
            <H2 light>{d.lectures}</H2>
            {[...recordings, ...recordings, ...recordings].slice(0, 3).map((r, i) => (
              <div key={i} className="flex items-center gap-3.5 rounded-2xl bg-ivory/[0.08] p-4">
                <button type="button" aria-label={`Play: ${r.title[lang]}`} className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-gold text-forest">
                  <Play size={16} />
                </button>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="font-semibold">{r.title[lang]}</span>
                  <span className="text-[13px] text-[#A9B8B1]">{r.meta[lang]}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="flex flex-col gap-8 py-20">
        <H2 className="text-center">{d.testimonies}</H2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[0, 1].map((i) => (
            <figure key={i} className="flex flex-col gap-4 rounded-[20px] border border-[#E8E0CC] bg-white p-7">
              <span aria-hidden className="font-display text-[64px] leading-[0.6] text-gold">“</span>
              <blockquote className="font-display text-[22px] leading-snug">
                {i === 0
                  ? lang === "ar" ? "[ذكرى مسجّلة من أحد طلابه، مفرّغة ومعتمدة.]" : "[A recorded memory from a former student, transcribed and approved.]"
                  : lang === "ar" ? "[تأمّل من عالم أو أحد أفراد العائلة، مفرّغ ومعتمد.]" : "[A reflection from a scholar or family member, transcribed and approved.]"}
              </blockquote>
              <figcaption className="text-sm text-muted">{lang === "ar" ? "[الاسم] · [الصفة]" : "[Name] · [Relation]"}</figcaption>
            </figure>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-sand p-8 sm:p-9">
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-2">
            <h3 className="font-display text-3xl font-bold text-forest">{d.contributeTitle}</h3>
            <p className="leading-relaxed text-[#4A514D]">{d.contributeBody}</p>
          </div>
          <Button href={`/${lang}/founder/`}>{d.contributeCta}</Button>
        </div>
      </Container>
    </>
  );
}
