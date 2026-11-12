import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import PageHero from "@/components/PageHero";
import InstallButton from "@/components/InstallButton";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Get the app" };

export default async function AppPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang).app;
  const cards = [
    { title: d.android, steps: d.androidSteps },
    { title: d.iphone, steps: d.iphoneSteps },
  ];
  return (
    <>
      <PageHero id="app" eyebrow={d.eyebrow} title={d.title} lead={d.body}>
        <InstallButton label={d.install} />
      </PageHero>
      <Container className="grid grid-cols-1 gap-6 py-16 md:grid-cols-2">
        {cards.map((c) => (
          <div key={c.title} className="flex flex-col gap-5 rounded-[22px] border border-sand-line bg-white p-7">
            <h2 className="font-display text-3xl font-bold text-forest">{c.title}</h2>
            <ol className="flex flex-col gap-3">
              {c.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest font-bold text-gold">{i + 1}</span>
                  <span className="text-[16px]">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </Container>
    </>
  );
}
