import type { ReactNode } from "react";
import { Pattern } from "./Ornament";
import { Container } from "./ui";

export default function PageHero({ eyebrow, title, lead, children, id }: { eyebrow: string; title: string; lead?: string; children?: ReactNode; id: string }) {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <Pattern id={id} opacity={0.11} />
      <Container className="relative flex flex-col items-center gap-5 py-16 text-center sm:py-20">
        <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-gold rtl:text-sm rtl:tracking-normal">{eyebrow}</span>
        <h1 className="max-w-4xl font-display text-[40px] font-semibold leading-[1.06] sm:text-[60px] rtl:leading-[1.35]">{title}</h1>
        {lead && <p className="max-w-2xl text-[17px] leading-relaxed text-mist">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}
