import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";

const SAMPLE_PROGRESS = [62, 38, 20, 45];

export default function SupportFunds({ lang, count = 4 }: { lang: Lang; count?: number }) {
  const d = t(lang).support;
  return (
    <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${count === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {d.funds.slice(0, count).map((f, i) => (
        <div key={f} className="flex flex-col gap-3.5 rounded-[20px] bg-white p-6">
          <span className="font-display text-[26px] font-bold leading-tight text-forest">{f}</span>
          <div
            role="progressbar"
            aria-valuenow={SAMPLE_PROGRESS[i]}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${f} — ${d.progress}`}
            className="h-2 overflow-hidden rounded-full bg-sand"
          >
            <div className="h-full rounded-full bg-gold" style={{ width: `${SAMPLE_PROGRESS[i]}%` }} />
          </div>
          <span className="text-[13px] text-muted">{d.progress} · {lang === "ar" ? "[الهدف]" : "[Target]"}</span>
          <button type="button" className="mt-1 min-h-[44px] self-start rounded-full bg-forest px-5 text-sm font-semibold text-ivory">
            {d.give}
          </button>
        </div>
      ))}
    </div>
  );
}
