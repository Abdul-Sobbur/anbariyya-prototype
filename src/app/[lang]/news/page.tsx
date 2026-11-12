import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { events, news } from "@/data/content";
import PageHero from "@/components/PageHero";
import { Placeholder } from "@/components/Ornament";
import { Container, H2 } from "@/components/ui";

export const metadata: Metadata = { title: "News & Events" };

export default async function News({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang);
  const photo = lang === "ar" ? "[صورة]" : "[Photograph]";
  return (
    <>
      <PageHero id="news" eyebrow={d.nav.news} title={d.news.title} />
      <Container className="grid grid-cols-1 gap-8 py-16 md:grid-cols-3">
        {news.map((n, i) => (
          <article key={i} className="flex flex-col gap-4">
            <Placeholder label={photo} className="aspect-[4/3] rounded-[18px]" />
            <span className="text-xs font-bold uppercase tracking-wider text-gold-deep rtl:tracking-normal">{n.tag[lang]}</span>
            <h2 className="font-display text-[26px] font-bold leading-tight text-forest">{n.title[lang]}</h2>
            {n.summary[lang] && <p className="leading-relaxed text-[#4A514D]">{n.summary[lang]}</p>}
          </article>
        ))}
      </Container>
      <section className="bg-sand">
        <Container className="flex flex-col gap-8 py-16">
          <H2>{d.news.eventsTitle}</H2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {events.map((e, i) => (
              <div key={i} className="flex gap-4 rounded-[18px] bg-white p-5">
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
          </div>
        </Container>
      </section>
    </>
  );
}
