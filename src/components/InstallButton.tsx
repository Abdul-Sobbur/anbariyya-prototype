"use client";

import { useEffect, useState } from "react";

type BIPEvent = Event & { prompt: () => Promise<void> };

/** Shows a one-tap install button on browsers that support it (Android Chrome, desktop Chrome/Edge). */
export default function InstallButton({ label }: { label: string }) {
  const [evt, setEvt] = useState<BIPEvent | null>(null);
  useEffect(() => {
    const h = (e: Event) => { e.preventDefault(); setEvt(e as BIPEvent); };
    window.addEventListener("beforeinstallprompt", h);
    return () => window.removeEventListener("beforeinstallprompt", h);
  }, []);
  if (!evt) return null;
  return (
    <button type="button" onClick={() => evt.prompt()} className="min-h-[52px] rounded-full bg-gold px-7 font-bold text-forest">
      {label}
    </button>
  );
}
