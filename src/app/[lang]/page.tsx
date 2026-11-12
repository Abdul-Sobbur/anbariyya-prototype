import Link from "next/link";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { events, news, programmes, timeline } from "@/data/content";
import { Pattern, Placeholder, Rosette } from "@/components/Ornament";
import { Arrow, Moon } from "@/components/Icons";
import { Button, Container, Eyebrow, H2, SampleBadge } from "@/components/ui";
import ProgrammeCard from "@/components/ProgrammeCard";
import AlertSignup from "@/components/AlertSignup";
import SupportFunds from "@/components/SupportFunds";
import LibraryBrowser from "@/components/LibraryBrowser";

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang);
  const L = (p: string) => `/${lang}/${p}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-ivory">
        <Pattern id="hero" />
        <Container className="relative flex flex-wrap items-center gap-14 pb-28 pt-16 sm:pt-20">
          <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-6">
            <p lang="ar" dir="rtl" className="font-arabic text-[34px] leading-[1.5] text-gold sm:text-[40px] ltr:text-left">
              وَقُل رَّبِّ زِدْنِي عِلْمًا
            </p>
            <p className="-mt-3 text-[13px] uppercase tracking-[0.16em] text-[#D9C9A0] rtl:text-sm rtl:normal-case rtl:tracking-normal">{d.hero.verseRef}</p>
            <h1 className="font-display text-[46px] font-semibold leading-[1.02] sm:text-[72px] rtl:leading-[1.3]">
              {d.hero.title1}
              <br />
              {d.hero.title2}
              <br />
              <span className="text-gold">{d.hero.title3}</span>
            </h1>
            <p className="max-w-[560px] text-[17px] leading-[1.7] text-[#DCE4DF] sm:text-lg">{d.hero.lead}</p>
            <div className="flex flex-wrap gap-3.5">
              <Button href={L("knowledge/")} variant="gold" className="min-h-[54px] px-7 text-base">
                {d.hero.ctaKnowledge}
                <Arrow size={18} />
              </Button>
              <Button href={L("programmes/")} variant="outlineLight" className="min-h-[54px] px-7 text-base">
                {d.hero.ctaAdmissions}
              </Button>
            </div>
          </div>

          <div className="flex min-w-0 flex-[1_1_320px] justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px]">
              <div className="arch aspect-[4/5] border-2 border-gold p-3">
                <div className="arch flex h-full w-full flex-col items-center justify-center gap-3 bg-forest-soft text-[#B9C8C0]">
                  <span className="text-sm">{d.hero.photo}</span>
                </div>
              </div>
              <Link
                href={L("announcements/")}
                className="absolute bottom-8 start-[-12px] flex max-w-[290px] items-center gap-3.5 rounded-2xl bg-ivory p-4 text-charcoal shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-transform hover:-translate-y-0.5 sm:start-[-40px]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-gold"><Moon size={22} /></span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-deep rtl:tracking-normal">{d.announcements.eyebrow}</span>
                  <span className="text-sm font-semibold leading-snug">{lang === "ar" ? "ثبتت رؤية هلال رمضان (تجريبي)" : "Ramadan crescent sighted (sample)"}</span>
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick links */}
      <Container className="relative -mt-14">
        <div className="grid grid-cols-2 overflow-hidden rounded-[20px] bg-white shadow-[0_20px_50px_rgba(18,61,46,0.12)] lg:grid-cols-4">
          {d.quick.map((q, i) => (
            <Link
              key={q.t}
              href={L(`${q.href}/`)}
              className={`flex flex-col gap-1.5 p-5 transition-colors hover:bg-ivory sm:p-7 ${i % 2 === 0 ? "border-e border-[#EFE8D8]" : ""} ${i < 2 ? "border-b border-[#EFE8D8] lg:border-b-0" : ""} ${i === 1 ? "lg:border-e" : ""}`}
            >
              <span className="font-display text-[22px] font-bold text-forest sm:text-2xl">{q.t}</span>
              <span className="text-[13px] text-muted sm:text-sm">{q.d}</span>
            </Link>
          ))}
        </div>
      </Container>

      {/* Welcome */}
      <Container className="flex flex-wrap items-center gap-14 py-24">
        <div className="flex min-w-0 flex-[1_1_280px] justify-center">
          <Placeholder label={d.welcome.portrait} className="aspect-square w-full max-w-[240px] rounded-full sm:max-w-[320px] border-[10px] border-white shadow-[0_0_0_1px_#E4DCC8]" />
        </div>
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-5">
          <Eyebrow>{d.welcome.eyebrow}</Eyebrow>
          <H2>{d.welcome.title}</H2>
          <p className="text-[17px] leading-[1.75] text-[#3B413D]">{d.welcome.body}</p>
          <div className="flex items-center gap-3.5">
            <span aria-hidden className="h-0.5 w-10 bg-gold" />
            <span className="font-semibold">{lang === "ar" ? "[الاسم]" : "[Name]"}</span>
            <span className="text-muted">· {lang === "ar" ? "[المنصب]" : "[Title]"}</span>
          </div>
        </div>
      </Container>

      {/* Heritage */}
      <section className="relative overflow-hidden bg-forest-deep text-ivory">
        <div aria-hidden className="pointer-events-none absolute -end-10 top-4 hidden font-arabic text-[260px] leading-none text-gold/[0.07] md:block">أجورا</div>
        <Container className="relative flex flex-col gap-14 py-24">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-4">
              <Eyebrow light>{d.heritage.eyebrow}</Eyebrow>
              <H2 light>{d.heritage.title}</H2>
              <p className="max-w-[620px] text-[17px] leading-[1.7] text-mist">{d.heritage.body}</p>
            </div>
            <Button href={L("founder/")} variant="gold">
              {d.heritage.cta}
              <Arrow size={18} />
            </Button>
          </div>
          <ol className="grid grid-cols-1 border-t border-gold/35 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((s, i) => (
              <li key={i} className="flex flex-col gap-2.5 pe-6 pt-7">
                <span aria-hidden className="-mt-[34px] mb-1 h-3 w-3 rounded-full bg-gold" />
                <span className="font-display text-[34px] font-bold text-gold">{i === timeline.length - 1 ? (lang === "ar" ? "اليوم" : "Today") : s.year[lang]}</span>
                <span className="text-[17px] font-semibold">{s.title[lang]}</span>
                <span className="pb-4 text-sm leading-relaxed text-[#A9B8B1]">{s.body[lang]}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Programmes */}
      <Container className="flex flex-col gap-11 py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>{d.programmes.eyebrow}</Eyebrow>
            <H2>{d.programmes.title}</H2>
          </div>
          <SampleBadge>{d.programmes.proposed}</SampleBadge>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programmes.map((p) => <ProgrammeCard key={p.slug} p={p} lang={lang} />)}
        </div>
      </Container>

      {/* Knowledge centre */}
      <section className="bg-sand">
        <Container className="flex flex-col gap-10 py-24">
          <div className="flex flex-col items-center gap-3.5 text-center">
            <Eyebrow>{d.knowledge.eyebrow}</Eyebrow>
            <H2 className="max-w-3xl">{d.knowledge.title}</H2>
          </div>
          <LibraryBrowser lang={lang} />
        </Container>
      </section>

      {/* News & events */}
      <Container className="flex flex-wrap gap-12 py-24">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-7">
          <div className="flex items-end justify-between gap-4">
            <H2>{d.news.title}</H2>
            <Link href={L("news/")} className="font-semibold text-forest">{d.news.all} →</Link>
          </div>
          <article className="flex flex-wrap items-center gap-6">
            <Placeholder label={lang === "ar" ? "[صورة الفعالية]" : "[Event photograph]"} className="aspect-[4/3] min-w-0 flex-[1_1_240px] rounded-[18px]" />
            <div className="flex min-w-0 flex-[1_1_240px] flex-col gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-deep rtl:tracking-normal">{news[0].tag[lang]}</span>
              <h3 className="font-display text-3xl font-bold leading-tight text-forest">{news[0].title[lang]}</h3>
              <p className="leading-relaxed text-[#4A514D]">{news[0].summary[lang]}</p>
            </div>
          </article>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {news.slice(1).map((n, i) => (
              <article key={i} className="flex flex-col gap-2 border-t-2 border-forest pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-deep rtl:tracking-normal">{n.tag[lang]}</span>
                <span className="text-[17px] font-semibold leading-snug">{n.title[lang]}</span>
              </article>
            ))}
          </div>
        </div>
        <aside className="flex min-w-0 flex-[1_1_320px] flex-col rounded-[22px] border border-sand-line bg-white p-7">
          <h2 className="mb-3 font-display text-[32px] font-bold text-forest">{d.news.upcoming}</h2>
          {events.map((e, i) => (
            <div key={i} className="flex gap-4 border-b border-[#EFE8D8] py-4 last:border-0">
              <div className="flex w-[58px] shrink-0 flex-col rounded-xl bg-forest py-2 text-center text-ivory">
                <span className="font-display text-[22px] font-bold">[DD]</span>
                <span className="text-[11px] tracking-widest text-gold">[MON]</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{e.title[lang]}</span>
                <span className="text-[13px] text-muted">{e.where[lang]}</span>
              </div>
            </div>
          ))}
          <Link href={L("news/")} className="mt-3 font-semibold text-forest">{d.news.calendar} →</Link>
        </aside>
      </Container>

      {/* Alerts */}
      <Container className="pb-24">
        <div id="alerts" className="relative flex flex-wrap items-center gap-12 overflow-hidden rounded-[28px] bg-forest p-7 text-ivory sm:p-14">
          <Rosette className="pointer-events-none absolute -end-20 -top-20 h-[360px] w-[360px] opacity-20" />
          <div className="relative flex min-w-0 flex-[1_1_360px] flex-col gap-4">
            <Eyebrow light>{d.alerts.eyebrow}</Eyebrow>
            <H2 light>{d.alerts.title}</H2>
            <p className="leading-[1.7] text-mist">{d.alerts.body}</p>
          </div>
          <div className="relative min-w-0 flex-[1_1_400px]">
            <AlertSignup lang={lang} />
          </div>
        </div>
      </Container>

      {/* Support */}
      <section className="bg-sand">
        <Container className="flex flex-col gap-9 py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex max-w-[640px] flex-col gap-3.5">
              <Eyebrow>{d.support.eyebrow}</Eyebrow>
              <H2>{d.support.title}</H2>
            </div>
            <span className="text-sm text-[#4A514D]">{d.support.channels}</span>
          </div>
          <SupportFunds lang={lang} count={3} />
        </Container>
      </section>
    </>
  );
}
