import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterSW from "@/components/RegisterSW";
import { LANGS, asset, dirOf, isLang } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: { default: "Anbariyya Islamic Institute — Prototype", template: "%s · Anbariyya (Prototype)" },
  description: "Prototype of the Anbariyya Islamic Institute digital platform, Tamale. Sample content for stakeholder review.",
  // Keep the prototype out of search engines until content is verified.
  robots: { index: false, follow: false },
  manifest: asset("/manifest.webmanifest"),
  icons: { icon: asset("/icon.svg"), apple: asset("/icon-192.png") },
  appleWebApp: { capable: true, title: "Anbariyya", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = { themeColor: "#123D2E", width: "device-width", initialScale: 1 };

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} dir={dirOf(lang)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="sr-only-focusable fixed start-3 top-3 z-50 rounded-lg bg-forest px-4 py-3 text-ivory">
          {lang === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
        </a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <RegisterSW />
      </body>
    </html>
  );
}
