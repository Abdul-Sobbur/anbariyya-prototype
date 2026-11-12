import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import AlertSignup from "@/components/AlertSignup";
import { Pattern } from "@/components/Ornament";
import { Bell, Mail, Phone } from "@/components/IconsExtra";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Alerts" };

export default async function Alerts({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang).alerts;
  const channels =
    lang === "ar"
      ? [
          { Icon: Phone, t: "رسالة قصيرة", s: "تصل إلى أي هاتف، حتى دون إنترنت" },
          { Icon: Bell, t: "إشعار التطبيق", s: "فوري ومجاني" },
          { Icon: Mail, t: "البريد الإلكتروني", s: "مع التفاصيل الكاملة" },
        ]
      : [
          { Icon: Phone, t: "SMS", s: "Reaches any phone, even without internet" },
          { Icon: Bell, t: "App notification", s: "Instant and free" },
          { Icon: Mail, t: "Email", s: "With full details" },
        ];
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <Pattern id="alerts" opacity={0.1} />
      <Container className="relative flex flex-wrap items-start gap-12 py-16 sm:py-24">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-gold rtl:text-sm rtl:tracking-normal">{d.eyebrow}</span>
          <h1 className="font-display text-[42px] font-semibold leading-[1.06] sm:text-[58px] rtl:leading-[1.35]">{d.title}</h1>
          <p className="text-[17px] leading-relaxed text-mist">{d.body}</p>
          <ul className="mt-3 flex flex-col gap-3">
            {channels.map(({ Icon, t: title, s }) => (
              <li key={title} className="flex items-center gap-4 rounded-2xl bg-ivory/[0.07] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-forest"><Icon size={20} /></span>
                <span className="flex flex-col">
                  <span className="font-semibold">{title}</span>
                  <span className="text-sm text-mist">{s}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 flex-[1_1_420px]">
          <AlertSignup lang={lang} />
        </div>
      </Container>
    </section>
  );
}
