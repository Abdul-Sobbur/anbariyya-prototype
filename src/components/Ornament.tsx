/** Subtle eight-point star lattice used behind dark sections. */
export function Pattern({ id, opacity = 0.13, size = 96 }: { id: string; opacity?: number; size?: number }) {
  const s = size;
  const q = s * 0.29;
  const w = s * 0.42;
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" style={{ opacity }}>
      <defs>
        <pattern id={id} width={s} height={s} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#C6A15B" strokeWidth="1">
            <rect x={q} y={q} width={w} height={w} />
            <rect x={q} y={q} width={w} height={w} transform={`rotate(45 ${s / 2} ${s / 2})`} />
            <circle cx={s / 2} cy={s / 2} r={s * 0.1} />
            <path d={`M0 0L${q} ${q}M${s} 0L${s - q} ${q}M0 ${s}L${q} ${s - q}M${s} ${s}L${s - q} ${s - q}`} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Placeholder emblem until the Institute's official logo is supplied. */
export function Emblem({ size = 48, inverted = false }: { size?: number; inverted?: boolean }) {
  const bg = inverted ? "#C6A15B" : "#123D2E";
  const fg = inverted ? "#123D2E" : "#C6A15B";
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" role="img" aria-label="Anbariyya emblem (placeholder)">
      <rect width="52" height="52" rx="12" fill={bg} />
      <g fill="none" stroke={fg} strokeWidth="1.8">
        <rect x="15" y="15" width="22" height="22" />
        <rect x="15" y="15" width="22" height="22" transform="rotate(45 26 26)" />
        <circle cx="26" cy="26" r="5.5" />
      </g>
    </svg>
  );
}

/** Large rosette used as a decorative corner flourish. */
export function Rosette({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className}>
      <g fill="none" stroke="#C6A15B" strokeWidth="0.6">
        <rect x="25" y="25" width="50" height="50" />
        <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        <rect x="32" y="32" width="36" height="36" transform="rotate(22.5 50 50)" />
        <rect x="32" y="32" width="36" height="36" transform="rotate(67.5 50 50)" />
        <circle cx="50" cy="50" r="14" />
        <circle cx="50" cy="50" r="42" />
      </g>
    </svg>
  );
}

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-sand-dark text-sm text-muted ${className}`}>
      <span className="px-4 text-center">{label}</span>
    </div>
  );
}
