export const LANGS = ["en", "ar"] as const;
export type Lang = (typeof LANGS)[number];

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}

export function dirOf(lang: Lang) {
  return lang === "ar" ? "rtl" : "ltr";
}

/** Prefix a public-folder asset with the GitHub Pages base path. */
export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}

/** Pick the right language field from a bilingual record. */
export function pick<T extends { en: string; ar: string }>(v: T, lang: Lang) {
  return v[lang];
}
