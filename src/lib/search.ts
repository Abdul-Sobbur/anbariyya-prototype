// Arabic-aware search normalisation. This is the same idea the production
// search will use (in the database), so users find "الأربعين" whether or not
// they type vowel marks or the different forms of alif.

const DIACRITICS = /[ؐ-ًؚ-ٰٟۖ-ۭـ]/g; // harakat, tatweel

export function normalise(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // Latin accents (ā → a)
    .replace(DIACRITICS, "")
    .replace(/[إأآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/^ال|(\s)ال/g, "$1") // drop the definite article
    .replace(/[‘’'ʿʾ`-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    // treat the plural/case endings -ون and -ين alike (الأربعون = الأربعين)
    .split(" ")
    .map((w) => (w.length > 4 ? w.replace(/(ون|ين)$/, "") : w))
    .join(" ");
}

export function matches(haystack: string[], query: string): boolean {
  const q = normalise(query);
  if (!q) return true;
  const h = normalise(haystack.join(" "));
  return q.split(" ").every((word) => h.includes(word));
}
