export default function ArchImage({ seed = "estate", label = "Property exterior", dark = false, className = "", style = {} }) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const angle = (h % 80) + 100;
  const tone1 = dark ? `hsl(${(h % 30) + 200}, 8%, 14%)` : `hsl(${(h % 40) + 30}, 10%, 86%)`;
  const tone2 = dark ? `hsl(${(h % 30) + 200}, 10%, 22%)` : `hsl(${(h % 40) + 30}, 14%, 76%)`;
  const accent = dark ? "rgba(184,153,104,0.18)" : "rgba(184,153,104,0.22)";
  const variant = h % 6;
  return (
    <div
      className={`img-placeholder ${dark ? "dark" : ""} ${className}`}
      style={{
        background: `repeating-linear-gradient(${angle}deg, rgba(${dark ? "255,255,255" : "0,0,0"},0.04) 0 1px, transparent 1px 22px), linear-gradient(${angle}deg, ${tone1} 0%, ${tone2} 100%)`,
        position: "relative",
        ...style,
      }}
      aria-label={label}
    >
      <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMax slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: dark ? 0.55 : 0.42, mixBlendMode: dark ? "screen" : "multiply" }}>
        <defs>
          <linearGradient id={`g${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={dark ? "#1a1d21" : "#1a1d21"} stopOpacity="0" />
            <stop offset="1" stopColor={dark ? "#0c0e10" : "#5a5750"} stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {variant === 0 && (
          <g fill={`url(#g${seed})`}>
            <rect x="40" y="380" width="180" height="420" />
            <rect x="220" y="320" width="180" height="480" />
            <rect x="400" y="430" width="160" height="370" />
            <rect x="60" y="430" width="20" height="20" fill={accent} />
            <rect x="260" y="370" width="20" height="20" fill={accent} />
            <rect x="440" y="500" width="20" height="20" fill={accent} />
          </g>
        )}
        {variant === 1 && (
          <g fill={`url(#g${seed})`}>
            <polygon points="0,800 0,500 300,360 600,500 600,800" />
            <rect x="240" y="500" width="120" height="180" fill={accent} opacity="0.7" />
          </g>
        )}
        {variant === 2 && (
          <g fill={`url(#g${seed})`}>
            <rect x="0" y="420" width="600" height="380" />
            <rect x="80" y="500" width="60" height="100" fill={accent} />
            <rect x="200" y="500" width="60" height="100" fill={accent} />
            <rect x="320" y="500" width="60" height="100" fill={accent} />
            <rect x="440" y="500" width="60" height="100" fill={accent} />
          </g>
        )}
        {variant === 3 && (
          <g fill={`url(#g${seed})`}>
            <polygon points="0,800 0,560 200,440 400,560 600,460 600,800" />
            <circle cx="500" cy="180" r="60" fill={accent} opacity="0.5" />
          </g>
        )}
        {variant === 4 && (
          <g fill={`url(#g${seed})`}>
            <rect x="80" y="300" width="440" height="500" />
            <rect x="120" y="360" width="80" height="160" fill={accent} opacity="0.4" />
            <rect x="220" y="360" width="80" height="160" fill={accent} opacity="0.4" />
            <rect x="320" y="360" width="80" height="160" fill={accent} opacity="0.4" />
            <rect x="420" y="360" width="80" height="160" fill={accent} opacity="0.4" />
          </g>
        )}
        {variant === 5 && (
          <g fill={`url(#g${seed})`}>
            <polygon points="0,800 0,640 600,400 600,800" />
            <polygon points="200,640 200,500 400,420 400,560" fill={accent} opacity="0.6" />
          </g>
        )}
      </svg>
      <span style={{ position: "absolute", bottom: 14, left: 16, fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.4)" : "rgba(26,29,33,0.36)" }}>
        {label}
      </span>
    </div>
  );
}
