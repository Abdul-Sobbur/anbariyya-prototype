import type { ReactNode } from "react";

export const metadata = { robots: { index: false, follow: false } };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#123D2E" }}>{children}</body>
    </html>
  );
}
