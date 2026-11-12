import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import LibraryBrowser from "@/components/LibraryBrowser";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Knowledge Centre" };

export default async function Knowledge({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang).knowledge;
  return (
    <>
      <PageHero id="kc" eyebrow={d.eyebrow} title={d.title} />

      {/* Featured parallel text: Arabic original beside the translation */}
      <Container className="-mt-8 relative">
        <article className="overflow-hidden rounded-3xl border border-sand-line bg-white shadow-[0_20px_50px_rgba(18,61,46,0.10)]">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#F0EADB] px-7 py-5">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-deep rtl:tracking-normal">{d.featured}</span>
            <span className="font-display text-lg font-bold text-forest">
              {lang === "ar" ? "الأربعون النووية · الحديث الأول" : "Al-Arba‘ūn al-Nawawiyya · Hadith 1"}
            </span>
          </div>
          <div className="flex flex-wrap">
            <div lang="ar" dir="rtl" className="flex min-w-0 flex-[1_1_340px] flex-col gap-3 p-7 sm:p-8">
              <p className="font-arabic text-[28px] leading-[1.9]">إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى</p>
            </div>
            <div lang="en" dir="ltr" className="flex min-w-0 flex-[1_1_340px] flex-col gap-3 bg-[#FBF9F3] p-7 font-sans sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-deep">Translation</span>
              <p className="font-display text-2xl leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                “Actions are only by intentions, and every person shall have only what they intended.”
              </p>
              <span className="text-[13px] text-muted">Translation: [translator, approved edition]</span>
            </div>
          </div>
        </article>
      </Container>

      <Container className="py-16">
        <LibraryBrowser lang={lang} />
      </Container>
    </>
  );
}
