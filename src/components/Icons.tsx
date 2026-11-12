type P = { className?: string; size?: number };

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const Moon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
);
export const Bell = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
);
export const Arrow = ({ className, size }: P) => (
  <svg {...base(size)} className={`rtl:-scale-x-100 ${className ?? ""}`}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Play = ({ className, size }: P) => (
  <svg width={size ?? 18} height={size ?? 18} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={`rtl:-scale-x-100 ${className ?? ""}`}><path d="M7 4v16l13-8z" /></svg>
);
export const Pause = ({ className, size }: P) => (
  <svg width={size ?? 18} height={size ?? 18} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
);
export const BookIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2.5z" /><path d="M8 7h7M8 11h5" /></svg>
);
export const Cap = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>
);
export const Headphones = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" /></svg>
);
export const Video = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><rect x="2" y="5" width="15" height="14" rx="2" /><path d="M17 10l5-3v10l-5-3z" /></svg>
);
export const Download = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M12 3v12M6 11l6 6 6-6M4 21h16" /></svg>
);
export const Check = ({ className, size }: P) => (
  <svg {...base(size)} strokeWidth={2.6} className={className}><path d="M20 6L9 17l-5-5" /></svg>
);
export const Shield = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
);
export const Search = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
);
export const MenuIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Image = ({ className, size }: P) => (
  <svg {...base(size)} strokeWidth={1.4} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M21 16l-5-5-9 8" /></svg>
);
export const Person = ({ className, size }: P) => (
  <svg {...base(size)} strokeWidth={1.4} className={className}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
);
export const Heart = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" /></svg>
);
export const Phone = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
);
export const Send = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M3 11l18-8-8 18-2-8z" /></svg>
);
export const Mic = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 17v5" /></svg>
);
export const Share = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></svg>
);
