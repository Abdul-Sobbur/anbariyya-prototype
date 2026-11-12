"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/site";
import { Check, Mic, Send } from "./Icons";

// Interactive walkthrough of the two-person approval rule for official
// announcements. Nothing leaves the browser.

type Stage = "draft" | "pending" | "sending" | "sent";

const L = {
  en: {
    officerA: "[Officer A]",
    officerB: "[Officer B]",
    actingAs: "Acting as",
    type: "Type",
    types: ["Moon sighting — Ramadan", "Moon sighting — Eid", "Lecture", "General notice"],
    msgEn: "Message · English",
    msgAr: "الرسالة · العربية",
    voice: "Dagbani & Hausa voice notes",
    voiceSub: "Record a short audio version for listeners",
    recorded: "Recorded · 0:24",
    sendBy: "Send by",
    channels: ["SMS", "App notification", "Email", "Website banner"],
    reach: "Moon-sighting subscribers (sample)",
    cost: "Estimated SMS cost",
    preview: "Preview",
    submit: "Submit for approval",
    approve: "Approve & send now",
    reject: "Return to draft",
    switchTo: "Sign in as second officer",
    waitSelf: "You drafted this. A different officer must approve it.",
    flow: "Two-person approval",
    steps: ["Drafted", "Awaiting second approver", "Sent to all channels"],
    notified: "notified by SMS",
    report: "Delivery report",
    delivered: "delivered",
    reset: "Start a new announcement",
    recent: "Recent",
    statuses: { d: "Delivered", s: "Scheduled" },
    recents: ["[Eid announcement]", "[Lecture notice]", "[Admissions notice]"],
  },
  ar: {
    officerA: "[المسؤول أ]",
    officerB: "[المسؤول ب]",
    actingAs: "تعمل بصفة",
    type: "النوع",
    types: ["رؤية الهلال — رمضان", "رؤية الهلال — العيد", "محاضرة", "إعلان عام"],
    msgEn: "Message · English",
    msgAr: "الرسالة · العربية",
    voice: "تسجيلات صوتية بالداغبانية والهوسا",
    voiceSub: "سجّل نسخة صوتية قصيرة للمستمعين",
    recorded: "تم التسجيل · ٠:٢٤",
    sendBy: "الإرسال عبر",
    channels: ["رسالة قصيرة", "إشعار التطبيق", "البريد", "شريط الموقع"],
    reach: "مشتركو رؤية الهلال (تجريبي)",
    cost: "تكلفة الرسائل التقديرية",
    preview: "معاينة",
    submit: "إرسال للاعتماد",
    approve: "اعتماد وإرسال الآن",
    reject: "إعادة إلى المسودة",
    switchTo: "الدخول بصفة المسؤول الثاني",
    waitSelf: "أنت من كتب المسودة. يجب أن يعتمدها مسؤول آخر.",
    flow: "اعتماد من شخصين",
    steps: ["كُتبت المسودة", "بانتظار المعتمد الثاني", "أُرسلت عبر كل القنوات"],
    notified: "أُبلغ برسالة قصيرة",
    report: "تقرير التسليم",
    delivered: "تم التسليم",
    reset: "إعلان جديد",
    recent: "الأخيرة",
    statuses: { d: "تم التسليم", s: "مجدول" },
    recents: ["[إعلان العيد]", "[إعلان محاضرة]", "[إعلان القبول]"],
  },
};

const SUBSCRIBERS = 8400; // illustrative only
const SMS_PRICE = 0.07; // GHS, illustrative mid-range

export default function AdminConsole({ lang }: { lang: Lang }) {
  const d = L[lang];
  const [stage, setStage] = useState<Stage>("draft");
  const [actor, setActor] = useState<"A" | "B">("A");
  const [channels, setChannels] = useState([true, true, true, true]);
  const [recorded, setRecorded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (stage !== "sending") return;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setStage("sent");
          return 100;
        }
        return p + 4;
      });
    }, 70);
    return () => clearInterval(id);
  }, [stage]);

  const fmt = (n: number) => n.toLocaleString(lang === "ar" ? "ar-EG" : "en-GB");
  const cost = channels[0] ? `GHS ${fmt(Math.round(SUBSCRIBERS * SMS_PRICE))}` : "GHS 0";
  const stepIndex = stage === "draft" ? 0 : stage === "pending" ? 1 : 2;
  const field = "rounded-xl border border-[#D8CFB8] bg-white px-3.5 text-[15px] outline-none focus:border-forest disabled:bg-[#F6F3EA]";
  const locked = stage !== "draft";

  return (
    <div className="flex flex-wrap items-start gap-6">
      <section className="flex min-w-0 flex-[999_1_460px] flex-col gap-5 rounded-[18px] border border-[#E6E1D4] bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-muted">
            {d.actingAs}:{" "}
            <span className="inline-flex items-center gap-2 font-semibold text-charcoal">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-xs font-bold text-gold">{actor}</span>
              {actor === "A" ? d.officerA : d.officerB}
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="a-type" className="text-[13px] font-semibold">{d.type}</label>
          <select id="a-type" disabled={locked} className={`${field} min-h-[46px]`}>
            {d.types.map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="a-en" className="text-[13px] font-semibold">{d.msgEn}</label>
            <textarea id="a-en" dir="ltr" lang="en" rows={4} disabled={locked} className={`${field} py-3 leading-relaxed`} defaultValue="The Ramadan crescent has been sighted. Fasting begins tomorrow, [Day, Date]." />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="a-ar" className="text-[13px] font-semibold">{d.msgAr}</label>
            <textarea id="a-ar" dir="rtl" lang="ar" rows={4} disabled={locked} className={`${field} py-3 font-arabic text-lg leading-relaxed`} defaultValue="ثبتت رؤية هلال شهر رمضان، والصيام غداً [التاريخ]." />
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-[#F6F3EA] p-3.5">
          <button
            type="button"
            disabled={locked}
            onClick={() => setRecorded(true)}
            aria-label={d.voice}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${recorded ? "bg-gold text-forest" : "bg-forest text-gold"}`}
          >
            {recorded ? <Check size={18} /> : <Mic size={18} />}
          </button>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{d.voice}</span>
            <span className="text-[13px] text-muted">{recorded ? d.recorded : d.voiceSub}</span>
          </div>
        </div>
        <fieldset className="flex flex-col gap-2.5">
          <legend className="mb-2.5 text-[13px] font-semibold">{d.sendBy}</legend>
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
            {d.channels.map((c, i) => (
              <label key={c} className={`flex min-h-[52px] items-center gap-2.5 rounded-xl px-3.5 text-sm ${channels[i] ? "border-[1.5px] border-forest bg-[#F2F7F4] font-semibold" : "border border-[#D8CFB8]"}`}>
                <input type="checkbox" disabled={locked} checked={channels[i]} onChange={() => setChannels(channels.map((v, j) => (j === i ? !v : v)))} className="h-[18px] w-[18px] accent-forest" />
                {c}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="grid grid-cols-2 gap-3 rounded-xl border border-[#EEE9DD] p-4 text-sm">
          <div className="flex flex-col gap-0.5"><span className="text-muted">{d.reach}</span><span className="text-lg font-semibold">{fmt(SUBSCRIBERS)}</span></div>
          <div className="flex flex-col gap-0.5"><span className="text-muted">{d.cost}</span><span className="text-lg font-semibold">{cost}</span></div>
        </div>

        <div className="flex flex-wrap justify-end gap-2.5 border-t border-[#EEE9DD] pt-5">
          {stage === "draft" && (
            <>
              <button type="button" className="min-h-[46px] rounded-xl border border-[#D8CFB8] px-5 text-sm font-semibold">{d.preview}</button>
              <button type="button" onClick={() => setStage("pending")} className="flex min-h-[46px] items-center gap-2 rounded-xl bg-forest px-5 text-sm font-semibold text-ivory">
                <Send size={16} />
                {d.submit}
              </button>
            </>
          )}
          {stage === "pending" && actor === "A" && (
            <div className="flex w-full flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-gold-deep">{d.waitSelf}</span>
              <button type="button" onClick={() => setActor("B")} className="min-h-[46px] rounded-xl bg-gold px-5 text-sm font-bold text-forest">{d.switchTo}</button>
            </div>
          )}
          {stage === "pending" && actor === "B" && (
            <>
              <button type="button" onClick={() => { setStage("draft"); setActor("A"); }} className="min-h-[46px] rounded-xl border border-[#D8CFB8] px-5 text-sm font-semibold">{d.reject}</button>
              <button type="button" onClick={() => { setProgress(0); setStage("sending"); }} className="min-h-[46px] rounded-xl bg-forest px-5 text-sm font-bold text-ivory">{d.approve}</button>
            </>
          )}
          {(stage === "sending" || stage === "sent") && (
            <div className="flex w-full flex-col gap-2" aria-live="polite">
              <div className="flex justify-between text-sm"><span className="font-semibold">{d.report}</span><span>{fmt(Math.round((SUBSCRIBERS * progress) / 100))} / {fmt(SUBSCRIBERS)} {d.delivered}</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-sand"><div className="h-full rounded-full bg-forest transition-[width]" style={{ width: `${progress}%` }} /></div>
              {stage === "sent" && (
                <button type="button" onClick={() => { setStage("draft"); setActor("A"); setRecorded(false); }} className="mt-2 min-h-[44px] self-end text-sm font-semibold text-forest underline underline-offset-4">{d.reset}</button>
              )}
            </div>
          )}
        </div>
      </section>

      <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
        <div className="flex flex-col gap-5 rounded-[18px] bg-forest p-6 text-ivory">
          <span className="font-display text-2xl font-bold">{d.flow}</span>
          {d.steps.map((s, i) => {
            const done = i < stepIndex || stage === "sent";
            const current = i === stepIndex && stage !== "sent";
            return (
              <div key={s} className={`flex gap-3 ${!done && !current ? "opacity-55" : ""}`}>
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${done ? "bg-gold text-forest" : current ? "border-2 border-gold" : "border-2 border-mist/60"}`}>
                  {done && <Check size={14} />}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{s}</span>
                  <span className="text-[13px] text-mist">
                    {i === 0 ? d.officerA : i === 1 ? `${d.officerB} · ${d.notified}` : stage === "sent" ? `${fmt(SUBSCRIBERS)} ${d.delivered}` : ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 rounded-[18px] border border-[#E6E1D4] bg-white p-5">
          <span className="font-semibold">{d.recent}</span>
          {d.recents.map((r, i) => (
            <div key={r} className="flex justify-between gap-2 border-b border-[#F0EADB] py-2 text-sm last:border-0">
              <span>{r}</span>
              <span className={`font-semibold ${i < 2 ? "text-[#1E6B4A]" : "text-gold-deep"}`}>{i < 2 ? d.statuses.d : d.statuses.s}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
