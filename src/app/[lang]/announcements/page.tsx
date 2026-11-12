import type { Metadata } from "next";
import Link from "next/link";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { announcements } from "@/data/content";
import { Check, Moon, Play, Share } from "@/components/Icons";
import { Container, H2 } from "@/components/ui";

export const metadata: Metadata = { title: "Announcements" };

export default async function Announcements({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang);
  const [latest, ...earlier] = announcements;
  return (
    <>
      {/* Night-sky hero for the latest official announcement */}
      <section className="relative overflow-hidden bg-forest-night text-ivory">
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 640">
          <defs>
            <radialGradient id="glow" cx="0.72" cy="0.35" r="0.45">
              <stop offset="0" stopColor="#1F5A44" stopOpacity="0.9" />
              <stop offset="1" stopColor="#071E16" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="640" fill="url(#glow)" />
          <g fill="#F8F5ED">
            {[[80, 90], [240, 170], [380, 60], [520, 140], [700, 80], [880, 190], [1300, 90], [1380, 260], [150, 320], [640, 300], [1240, 380], [60, 470]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 3 ? 1.1 : 1.6} opacity="0.8" />
            ))}
          </g>
          <path d="M1060 120a110 110 0 1 0 0 220a135 135 0 0 1 0 -220z" fill="#C6A15B" />
          <path d="M0 640V560q80-20 140 0v-50q30-60 60 0v50q100-30 200 0h300q60-25 120 0v-60l20-40 20 40v60q90-30 180 0h400V640z" fill="#0B2A1F" />
        </svg>
        <Container className="relative flex flex-col gap-5 pb-36 pt-16 sm:pt-24">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-gold/15 px-3.5 py-2 text-[13px] font-semibold text-gold-light">
            <Check size={14} />
            {d.announcements.verified}
          </span>
          <span className="flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-mist rtl:tracking-normal"><Moon size={16} className="text-gold" />{latest.kind[lang]} · {latest.when[lang]}</span>
          <p lang="ar" dir="rtl" className="font-arabic text-[34px] leading-snug text-gold ltr:text-left">ثبتت رؤية هلال رمضان</p>
          <h1 className="max-w-3xl font-display text-[44px] font-bold leading-[1.04] sm:text-[64px]">{latest.title[lang]}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-mist">{latest.body[lang]}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <button type="button" className="flex min-h-[52px] items-center gap-2.5 rounded-full bg-gold px-6 font-bold text-forest">
              <Play size={16} />
              {d.announcements.listenDagbani}
            </button>
            <button type="button" className="flex min-h-[52px] items-center gap-2.5 rounded-full border-[1.5px] border-ivory/40 px-6 font-semibold">
              <Share size={18} />
              {d.announcements.share}
            </button>
          </div>
          <span className="text-[13px] text-[#8FA59A]">{d.announcements.sentBy}</span>
        </Container>
      </section>

      <Container className="flex flex-wrap gap-12 py-16">
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-5">
          <H2>{d.announcements.earlier}</H2>
          {earlier.map((a, i) => (
            <article key={i} className="flex flex-col gap-1.5 rounded-[18px] border border-sand-line bg-white p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-deep rtl:tracking-normal">{a.kind[lang]} · {a.when[lang]}</span>
              <h3 className="text-lg font-semibold">{a.title[lang]}</h3>
              <p className="text-[#4A514D]">{a.body[lang]}</p>
            </article>
          ))}
        </div>
        <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-4 self-start rounded-[22px] bg-forest p-7 text-ivory">
          <h2 className="font-display text-3xl font-bold">{d.alerts.title}</h2>
          <p className="leading-relaxed text-mist">{d.alerts.body}</p>
          <Link href={`/${lang}/alerts/`} className="mt-2 flex min-h-[52px] items-center justify-center rounded-full bg-gold font-bold text-forest">
            {d.getAlerts}
          </Link>
        </aside>
      </Container>
    </>
  );
}
