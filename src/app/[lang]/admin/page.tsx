import type { Metadata } from "next";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import AdminConsole from "@/components/AdminConsole";
import { Container, SampleBadge } from "@/components/ui";

export const metadata: Metadata = { title: "Admin preview" };

export default async function Admin({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = t(lang).admin;
  return (
    <div className="bg-[#F3F1EA]">
      <Container className="flex flex-col gap-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted">{d.eyebrow}</span>
            <h1 className="font-display text-4xl font-bold text-forest">{d.title}</h1>
          </div>
          <SampleBadge>{d.demo}</SampleBadge>
        </div>
        <AdminConsole lang={lang} />
      </Container>
    </div>
  );
}
