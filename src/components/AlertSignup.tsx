"use client";

import { useState } from "react";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { Check } from "./Icons";

const LANGS_OPT = [
  { id: "en", label: "English" },
  { id: "ar", label: "العربية" },
  { id: "dag", label: "Dagbani" },
  { id: "ha", label: "Hausa" },
];

/** Demo of the subscription flow: details → SMS code → confirmed. Nothing is sent. */
export default function AlertSignup({ lang }: { lang: Lang }) {
  const d = t(lang).alerts;
  const [step, setStep] = useState<"form" | "code" | "done">("form");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cats, setCats] = useState<boolean[]>([true, true, false, false]);
  const [pref, setPref] = useState(lang === "ar" ? "ar" : "en");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const input = "min-h-[50px] w-full rounded-xl border border-[#D8CFB8] bg-white px-4 text-base outline-none focus:border-forest";

  if (step === "done") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-[20px] bg-ivory p-7 text-charcoal" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-gold"><Check size={26} /></span>
        <h3 className="font-display text-3xl font-bold text-forest">{d.doneTitle}</h3>
        <p className="leading-relaxed text-[#4A514D]">{d.doneBody}</p>
        <button type="button" onClick={() => { setStep("form"); setCode(""); }} className="min-h-[44px] font-semibold text-forest underline underline-offset-4">
          {d.again}
        </button>
      </div>
    );
  }

  if (step === "code") {
    return (
      <form
        className="flex flex-col gap-4 rounded-[20px] bg-ivory p-7 text-charcoal"
        onSubmit={(e) => { e.preventDefault(); if (code.replace(/\D/g, "").length === 6) setStep("done"); }}
      >
        <h3 className="font-display text-3xl font-bold text-forest">{d.codeTitle}</h3>
        <p className="text-[15px] leading-relaxed text-[#4A514D]">{d.codeBody}</p>
        <label htmlFor="otp" className="sr-only">{d.codeTitle}</label>
        <input
          id="otp"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={6}
          dir="ltr"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          className={`${input} text-center text-2xl tracking-[0.5em]`}
          placeholder="••••••"
        />
        <button type="submit" disabled={code.length !== 6} className="min-h-[52px] rounded-xl bg-forest font-bold text-ivory disabled:opacity-50">
          {d.confirm}
        </button>
      </form>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 rounded-[20px] bg-ivory p-6 text-charcoal sm:p-7"
      onSubmit={(e) => {
        e.preventDefault();
        if (!phone.trim() && !email.trim()) return setError(d.needPhone);
        setError("");
        setStep(phone.trim() ? "code" : "done");
      }}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ph" className="text-sm font-semibold">{d.phone}</label>
        <input id="ph" type="tel" dir="ltr" autoComplete="tel" placeholder="024 000 0000" value={phone} onChange={(e) => setPhone(e.target.value)} className={`${input} rtl:text-right`} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="em" className="text-sm font-semibold">{d.email}</label>
        <input id="em" type="email" dir="ltr" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={`${input} rtl:text-right`} />
      </div>
      <fieldset className="flex flex-wrap gap-x-5 gap-y-1">
        <legend className="mb-2 text-sm font-semibold">{d.sendMe}</legend>
        {d.cats.map((c, i) => (
          <label key={c} className="flex min-h-[36px] items-center gap-2 text-[15px]">
            <input type="checkbox" checked={cats[i]} onChange={() => setCats(cats.map((v, j) => (j === i ? !v : v)))} className="h-[18px] w-[18px] accent-forest" />
            {c}
          </label>
        ))}
      </fieldset>
      <fieldset className="flex flex-wrap gap-2">
        <legend className="mb-2 text-sm font-semibold">{d.language}</legend>
        {LANGS_OPT.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={pref === o.id}
            onClick={() => setPref(o.id)}
            className={`min-h-[40px] rounded-full px-4 text-sm font-medium ${pref === o.id ? "bg-forest text-ivory" : "border border-[#D8CFB8] bg-white"}`}
          >
            {o.label}
          </button>
        ))}
      </fieldset>
      {error && <p role="alert" className="text-sm font-semibold text-[#9B2C1F]">{error}</p>}
      <button type="submit" className="min-h-[54px] rounded-xl bg-forest px-4 font-bold text-ivory hover:bg-forest-deep">
        {d.subscribe}
      </button>
    </form>
  );
}
