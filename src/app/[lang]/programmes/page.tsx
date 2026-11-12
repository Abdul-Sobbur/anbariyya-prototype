import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { programmes } from "@/data/content";
import PageHero from "@/components/PageHero";
import ProgrammeCard from "@/components/ProgrammeCard";
import { Container, H2, SampleBadge } from "@/components/ui";

export const metadata: Metadata = { title: "Programmes" };

export default async function Programmes({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang).programmes;
  return (
    <>
      <PageHero id="prog" eyebrow={d.eyebrow} title={d.title}>
        <SampleBadge>{d.proposed}</SampleBadge>
      </PageHero>
      <Container className="grid grid-cols-1 gap-6 py-16 md:grid-cols-3">
        {programmes.map((p) => <ProgrammeCard key={p.slug} p={p} lang={lang} detailed />)}
      </Container>
      <section className="bg-sand">
        <Container className="flex flex-col gap-10 py-20">
          <div className="flex max-w-2xl flex-col gap-4">
            <H2>{d.admissionsTitle}</H2>
            <p className="text-[17px] leading-relaxed text-[#4A514D]">{d.admissionsBody}</p>
          </div>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {d.steps.map((s, i) => (
              <li key={s} className="flex flex-col gap-3 rounded-[18px] bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display text-xl font-bold text-gold">{i + 1}</span>
                <span className="font-semibold leading-snug">{s}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
