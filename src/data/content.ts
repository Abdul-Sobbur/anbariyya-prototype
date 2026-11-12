// SAMPLE DATA ONLY. This file stands in for the database during the prototype.
// When the Institute approves the design, these records move into Supabase
// and the pages read from there instead — the components stay the same.

type Bi = { en: string; ar: string };

export type Programme = {
  slug: string;
  icon: "book" | "arabic" | "cap";
  name: Bi;
  summary: Bi;
  subjects: Bi[];
  duration: Bi;
  entry: Bi;
  dark?: boolean;
};

export const programmes: Programme[] = [
  {
    slug: "islamic-studies",
    icon: "book",
    name: { en: "Islamic Studies", ar: "الدراسات الإسلامية" },
    summary: { en: "Grounding in the Qur’an and the classical sciences of the faith.", ar: "تأسيس في القرآن الكريم والعلوم الشرعية." },
    subjects: [
      { en: "Qur’an", ar: "القرآن" },
      { en: "Tafsir", ar: "التفسير" },
      { en: "Hadith", ar: "الحديث" },
      { en: "Fiqh", ar: "الفقه" },
      { en: "Aqeedah", ar: "العقيدة" },
      { en: "Seerah", ar: "السيرة" },
    ],
    duration: { en: "[To be confirmed]", ar: "[بانتظار التأكيد]" },
    entry: { en: "[To be confirmed]", ar: "[بانتظار التأكيد]" },
  },
  {
    slug: "arabic-studies",
    icon: "arabic",
    dark: true,
    name: { en: "Arabic Studies", ar: "الدراسات العربية" },
    summary: { en: "The language of revelation, from grammar to literature and composition.", ar: "لغة الوحي، من النحو والصرف إلى الأدب والإنشاء." },
    subjects: [
      { en: "Nahw", ar: "النحو" },
      { en: "Sarf", ar: "الصرف" },
      { en: "Literature", ar: "الأدب" },
      { en: "Composition", ar: "الإنشاء" },
    ],
    duration: { en: "[To be confirmed]", ar: "[بانتظار التأكيد]" },
    entry: { en: "[To be confirmed]", ar: "[بانتظار التأكيد]" },
  },
  {
    slug: "general-education",
    icon: "cap",
    name: { en: "General Education", ar: "التعليم العام" },
    summary: { en: "[Any general education programmes offered alongside religious studies.]", ar: "[أي برامج تعليم عام تُقدّم إلى جانب الدراسات الشرعية.]" },
    subjects: [
      { en: "[Subject]", ar: "[مادة]" },
      { en: "[Subject]", ar: "[مادة]" },
      { en: "[Subject]", ar: "[مادة]" },
    ],
    duration: { en: "[To be confirmed]", ar: "[بانتظار التأكيد]" },
    entry: { en: "[To be confirmed]", ar: "[بانتظار التأكيد]" },
  },
];

export const timeline: { year: Bi; title: Bi; body: Bi; sourced?: boolean; photos?: boolean }[] = [
  {
    year: { en: "[Year]", ar: "[السنة]" },
    title: { en: "Birth and early years", ar: "المولد والنشأة" },
    body: { en: "[Place of birth, family and earliest Qur’anic education — from verified sources.]", ar: "[مكان المولد والأسرة والتعليم القرآني الأول — من مصادر موثّقة.]" },
    sourced: true,
  },
  {
    year: { en: "[Year]", ar: "[السنة]" },
    title: { en: "Seeking knowledge", ar: "طلب العلم" },
    body: { en: "[Teachers, travels and the texts he studied.]", ar: "[شيوخه ورحلاته والمتون التي درسها.]" },
    photos: true,
  },
  {
    year: { en: "[Year]", ar: "[السنة]" },
    title: { en: "The founding of Anbariyya", ar: "تأسيس العنبرية" },
    body: { en: "[How the Institute began, its first students and its purpose.]", ar: "[بداية المعهد وطلابه الأوائل وغايته.]" },
    sourced: true,
  },
  {
    year: { en: "[Year]", ar: "[السنة]" },
    title: { en: "Return to Allah and legacy", ar: "الوفاة واستمرار الإرث" },
    body: { en: "[His passing and the continuation of his teaching through students and the Institute.]", ar: "[وفاته واستمرار تعليمه عبر طلابه والمعهد.]" },
  },
];

export type LibraryItem = {
  id: string;
  type: "book" | "audio" | "video";
  collection: string;
  title: Bi;
  translit: string;
  author: Bi;
  meta: Bi;
  keywords: string;
};

export const collections: { id: string; name: Bi }[] = [
  { id: "quran", name: { en: "Qur’an", ar: "القرآن الكريم" } },
  { id: "tafsir", name: { en: "Tafsir", ar: "التفسير" } },
  { id: "hadith", name: { en: "Hadith", ar: "الحديث" } },
  { id: "fiqh", name: { en: "Fiqh", ar: "الفقه" } },
  { id: "arabic", name: { en: "Arabic", ar: "اللغة العربية" } },
  { id: "seerah", name: { en: "Seerah", ar: "السيرة" } },
  { id: "ajura", name: { en: "Afa Ajura Collection", ar: "مجموعة الشيخ أجورا" } },
];

// Classical works are real titles used here as sample catalogue entries.
export const library: LibraryItem[] = [
  { id: "arbain", type: "book", collection: "hadith", title: { en: "Al-Arba‘ūn al-Nawawiyya", ar: "الأربعون النووية" }, translit: "al-arbaun al-nawawiyya arbaeen forty hadith", author: { en: "Imam al-Nawawī", ar: "الإمام النووي" }, meta: { en: "Arabic · English · PDF", ar: "عربي · إنجليزي · PDF" }, keywords: "nawawi" },
  { id: "riyad", type: "book", collection: "hadith", title: { en: "Riyāḍ al-Ṣāliḥīn", ar: "رياض الصالحين" }, translit: "riyad al-salihin riyadh saliheen", author: { en: "Imam al-Nawawī", ar: "الإمام النووي" }, meta: { en: "Arabic · PDF", ar: "عربي · PDF" }, keywords: "nawawi" },
  { id: "risala", type: "book", collection: "fiqh", title: { en: "Al-Risāla", ar: "الرسالة" }, translit: "al-risala risalah", author: { en: "Ibn Abī Zayd al-Qayrawānī", ar: "ابن أبي زيد القيرواني" }, meta: { en: "Arabic · PDF", ar: "عربي · PDF" }, keywords: "maliki" },
  { id: "akhdari", type: "book", collection: "fiqh", title: { en: "Mukhtaṣar al-Akhḍarī", ar: "مختصر الأخضري" }, translit: "mukhtasar al-akhdari", author: { en: "‘Abd al-Raḥmān al-Akhḍarī", ar: "عبد الرحمن الأخضري" }, meta: { en: "Arabic · English · PDF", ar: "عربي · إنجليزي · PDF" }, keywords: "maliki purification prayer" },
  { id: "ajurrumiyya", type: "book", collection: "arabic", title: { en: "Al-Ājurrūmiyya", ar: "الآجرومية" }, translit: "al-ajurrumiyya ajrumiyyah nahw grammar", author: { en: "Ibn Ājurrūm", ar: "ابن آجروم" }, meta: { en: "Arabic · PDF", ar: "عربي · PDF" }, keywords: "nahw" },
  { id: "jalalayn", type: "book", collection: "tafsir", title: { en: "Tafsīr al-Jalālayn", ar: "تفسير الجلالين" }, translit: "tafsir al-jalalayn", author: { en: "al-Maḥallī & al-Suyūṭī", ar: "المحلي والسيوطي" }, meta: { en: "Arabic · PDF", ar: "عربي · PDF" }, keywords: "tafsir quran" },
  { id: "tafsir-series", type: "audio", collection: "tafsir", title: { en: "[Tafsir lesson series]", ar: "[سلسلة دروس التفسير]" }, translit: "tafsir dars lesson", author: { en: "[Speaker]", ar: "[المتحدث]" }, meta: { en: "Dagbani · 12 parts", ar: "بالداغبانية · ١٢ جزءاً" }, keywords: "audio" },
  { id: "arbain-sharh", type: "audio", collection: "hadith", title: { en: "[Explanation of the Forty Hadith]", ar: "[شرح الأربعين النووية]" }, translit: "sharh arbaeen", author: { en: "[Speaker]", ar: "[المتحدث]" }, meta: { en: "Hausa · 40 parts", ar: "بالهوسا · ٤٠ جزءاً" }, keywords: "audio nawawi" },
  { id: "recitation", type: "audio", collection: "quran", title: { en: "[Qur’an recitation — Juz’ ‘Amma]", ar: "[تلاوة جزء عمّ]" }, translit: "quran recitation juz amma", author: { en: "[Reciter]", ar: "[القارئ]" }, meta: { en: "Arabic · 37 surahs", ar: "عربي · ٣٧ سورة" }, keywords: "tilawa" },
  { id: "ajura-cassette", type: "audio", collection: "ajura", title: { en: "[Restored lecture of Afa Ajura]", ar: "[محاضرة مرمّمة للشيخ أجورا]" }, translit: "afa ajura lecture cassette", author: { en: "Sheikh Yusuf Sualihu Ajura", ar: "الشيخ يوسف صالح أجورا" }, meta: { en: "Restored from cassette · [Year]", ar: "مرمّمة من شريط · [السنة]" }, keywords: "founder heritage" },
  { id: "ajura-manuscript", type: "book", collection: "ajura", title: { en: "[Manuscript title]", ar: "[عنوان المخطوط]" }, translit: "afa ajura manuscript", author: { en: "Sheikh Yusuf Sualihu Ajura", ar: "الشيخ يوسف صالح أجورا" }, meta: { en: "Scanned manuscript", ar: "مخطوط ممسوح ضوئياً" }, keywords: "founder heritage" },
  { id: "seerah-video", type: "video", collection: "seerah", title: { en: "[Public lecture on the Seerah]", ar: "[محاضرة عامة في السيرة]" }, translit: "seerah sira lecture", author: { en: "[Speaker]", ar: "[المتحدث]" }, meta: { en: "Video · [Date]", ar: "فيديو · [التاريخ]" }, keywords: "prophet" },
];

export const news: { tag: Bi; title: Bi; summary: Bi }[] = [
  { tag: { en: "Graduation · [Date]", ar: "تخرّج · [التاريخ]" }, title: { en: "[Headline of a featured news story]", ar: "[عنوان خبر مميّز]" }, summary: { en: "[A two-line summary of the story, written and approved by the Institute.]", ar: "[ملخص من سطرين يكتبه المعهد ويعتمده.]" } },
  { tag: { en: "Qur’an competition · [Date]", ar: "مسابقة القرآن · [التاريخ]" }, title: { en: "[News headline]", ar: "[عنوان الخبر]" }, summary: { en: "", ar: "" } },
  { tag: { en: "Community outreach · [Date]", ar: "خدمة المجتمع · [التاريخ]" }, title: { en: "[News headline]", ar: "[عنوان الخبر]" }, summary: { en: "", ar: "" } },
];

export const events: { title: Bi; where: Bi }[] = [
  { title: { en: "Weekly Tafsir lesson", ar: "درس التفسير الأسبوعي" }, where: { en: "[Time] · Main hall", ar: "[الوقت] · القاعة الرئيسية" } },
  { title: { en: "Visiting scholar lecture", ar: "محاضرة عالم زائر" }, where: { en: "[Time] · [Venue]", ar: "[الوقت] · [المكان]" } },
  { title: { en: "Admissions open day", ar: "يوم مفتوح للقبول" }, where: { en: "[Time] · Campus", ar: "[الوقت] · الحرم" } },
];

export const announcements: { kind: Bi; title: Bi; body: Bi; when: Bi }[] = [
  { kind: { en: "Moon sighting", ar: "رؤية الهلال" }, title: { en: "The Ramadan crescent has been sighted", ar: "ثبتت رؤية هلال رمضان" }, body: { en: "Fasting begins tomorrow, [Day, Date]. May Allah accept our fasting and prayers. (Sample text)", ar: "الصيام غداً [اليوم، التاريخ]. تقبّل الله صيامنا وصلاتنا. (نص تجريبي)" }, when: { en: "[Date · Time]", ar: "[التاريخ · الوقت]" } },
  { kind: { en: "Moon sighting", ar: "رؤية الهلال" }, title: { en: "[Eid announcement]", ar: "[إعلان العيد]" }, body: { en: "[Sample text]", ar: "[نص تجريبي]" }, when: { en: "[Date]", ar: "[التاريخ]" } },
  { kind: { en: "Lecture", ar: "محاضرة" }, title: { en: "[Lecture notice]", ar: "[إعلان محاضرة]" }, body: { en: "[Sample text]", ar: "[نص تجريبي]" }, when: { en: "[Date]", ar: "[التاريخ]" } },
];
