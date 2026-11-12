import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import SupportFunds from "@/components/SupportFunds";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Support" };

export default async function Support({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang).support;
  return (
    <>
      <PageHero id="sup" eyebrow={d.eyebrow} title={d.title} lead={d.channels} />
      <section className="bg-sand">
        <Container className="py-16">
          <SupportFunds lang={lang} />
        </Container>
      </section>
    </>
  );
}
