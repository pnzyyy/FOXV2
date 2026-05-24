// Deterministic pseudo-random from seed string
function hash(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}
function prng(h, i) { return ((h * (i + 7) * 2654435761) >>> 0) / 0xffffffff; }

// ─── Night/dusk scene (hero, dark prop) ──────────────────────────────────────
function NightScene({ uid, h, label, className, style }) {
  const stars = Array.from({ length: 38 }, (_, i) => ({
    x: Math.round(prng(h, i * 3) * 600),
    y: Math.round(prng(h, i * 3 + 1) * 280),
    r: +(prng(h, i * 3 + 2) * 0.9 + 0.3).toFixed(1),
  }));
  const winFloor1 = [108, 182, 292, 382, 456];
  const winFloor2 = [132, 228, 358, 432];

  return (
    <div className={`img-placeholder dark ${className}`} style={{ position: 'relative', overflow: 'hidden', background: '#07090f', ...style }} aria-label={label}>
      <svg viewBox="0 0 600 780" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id={`${uid}sky`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#060a16" />
            <stop offset="38%" stopColor="#10162e" />
            <stop offset="65%" stopColor="#231040" />
            <stop offset="80%" stopColor="#561820" />
            <stop offset="90%" stopColor="#903010" />
            <stop offset="97%" stopColor="#b84010" />
            <stop offset="100%" stopColor="#7a2808" />
          </linearGradient>
          <radialGradient id={`${uid}hglow`} cx="50%" cy="100%" r="55%">
            <stop offset="0%"   stopColor="#d05010" stopOpacity="0.42" />
            <stop offset="50%"  stopColor="#902408" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#000"    stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${uid}wglow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffd060" stopOpacity="0.7" />
            <stop offset="55%"  stopColor="#e08820" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#e08820" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${uid}gnd`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#14100a" />
            <stop offset="100%" stopColor="#080508" />
          </linearGradient>
          <filter id={`${uid}grain`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>
        </defs>

        {/* Sky */}
        <rect width="600" height="780" fill={`url(#${uid}sky)`} />

        {/* Stars */}
        {stars.map((s, i) => <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={0.35 + s.r * 0.35} />)}

        {/* Moon */}
        <circle cx="490" cy="58" r="22" fill="#d8ccaa" opacity="0.16" />
        <circle cx="490" cy="58" r="14" fill="#ede8d8" opacity="0.22" />

        {/* Horizon glow */}
        <rect width="600" height="780" fill={`url(#${uid}hglow)`} />

        {/* Villa silhouette */}
        <path d="M0,780 L0,780 L0,530 L70,530 L70,490 L90,490 L130,430 L175,490 L175,455 L190,455 L220,415 L250,455 L265,455 L265,490 L310,430 L355,490 L370,490 L370,455 L400,430 L440,490 L440,530 L530,530 L530,780 Z" fill="#0c0a08" />
        {/* Dormer windows */}
        <polygon points="130,430 175,490 90,490" fill="#100d0b" />
        <polygon points="310,430 355,490 265,490" fill="#100d0b" />
        <polygon points="400,430 440,490 370,490" fill="#100d0b" />
        {/* Chimneys */}
        <rect x="148" y="390" width="14" height="48" fill="#0c0a08" />
        <rect x="326" y="394" width="12" height="44" fill="#0c0a08" />
        {/* Window halos */}
        {winFloor1.map((x, i) => <ellipse key={i} cx={x + 19} cy={558} rx={34} ry={26} fill={`url(#${uid}wglow)`} />)}
        {winFloor2.map((x, i) => <ellipse key={i} cx={x + 15} cy={474} rx={26} ry={20} fill={`url(#${uid}wglow)`} />)}
        {/* Ground floor windows */}
        {winFloor1.map((x, i) => <rect key={i} x={x} y={530} width={38} height={58} rx="1" fill="#ffd060" opacity={0.5 + prng(h, i) * 0.22} />)}
        {/* Upper floor windows */}
        {winFloor2.map((x, i) => <rect key={i} x={x} y={456} width={30} height={38} rx="1" fill="#ffc840" opacity={0.38 + prng(h, i + 10) * 0.2} />)}
        {/* Belt course */}
        <rect x="70" y="530" width="460" height="3" fill="#161210" />

        {/* Ground */}
        <rect x="0" y="660" width="600" height="120" fill={`url(#${uid}gnd)`} />
        {/* Driveway */}
        <path d="M230,780 L278,660 L322,660 L370,780 Z" fill="#161210" opacity="0.6" />

        {/* Trees */}
        <g fill="#050404">
          <ellipse cx="28" cy="640" rx="52" ry="85" />
          <rect x="18" y="640" width="20" height="140" />
          <ellipse cx="572" cy="640" rx="52" ry="85" />
          <rect x="562" y="640" width="20" height="140" />
          <ellipse cx="558" cy="600" rx="34" ry="60" />
        </g>

        {/* Grain overlay */}
        <rect width="600" height="780" fill="transparent" filter={`url(#${uid}grain)`} opacity="0.032" />
      </svg>

      {label && <span style={{ position: 'absolute', bottom: 14, left: 16, fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)' }}>{label}</span>}
    </div>
  );
}

// ─── Day exterior (properties, verkauf) ──────────────────────────────────────
function DayScene({ uid, h, label, v, className, style }) {
  const clouds = Array.from({ length: 4 }, (_, i) => ({
    cx: Math.round(prng(h, i * 5 + 1) * 540) + 30,
    cy: Math.round(prng(h, i * 5 + 2) * 120) + 30,
    rx: Math.round(prng(h, i * 5 + 3) * 80) + 60,
    ry: Math.round(prng(h, i * 5 + 4) * 22) + 16,
  }));

  // 4 building variants keyed on v
  const facades = [
    // 0 – Gründerzeit townhouse
    { base: '#d4c8b0', dark: '#a8998a', roof: '#3a3228', winW: 36, winH: 58, winRows: [[90,170,250,330,410],[110,190,270,350,430]], floors: 3 },
    // 1 – Jugendstil villa
    { base: '#c8bc98', dark: '#9a8e74', roof: '#4a3c2c', winW: 40, winH: 64, winRows: [[80,200,340,460],[100,220,360,480]], floors: 2 },
    // 2 – Modernes MFH
    { base: '#e0ddd8', dark: '#b8b5b0', roof: '#2a2c30', winW: 38, winH: 48, winRows: [[72,148,224,300,376,452],[80,156,232,308,384,460]], floors: 4 },
    // 3 – Wohnhaus Altbau
    { base: '#cfc3a8', dark: '#a09480', roof: '#3c3028', winW: 34, winH: 54, winRows: [[100,186,272,358,444],[116,202,288,374]], floors: 3 },
  ];
  const f = facades[v % 4];
  const topY = 260 - f.floors * 40;

  return (
    <div className={`img-placeholder ${className}`} style={{ position: 'relative', overflow: 'hidden', background: '#c8d8e8', ...style }} aria-label={label}>
      <svg viewBox="0 0 600 720" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id={`${uid}sky`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#6898c8" />
            <stop offset="45%"  stopColor="#90b8d8" />
            <stop offset="100%" stopColor="#c8dcea" />
          </linearGradient>
          <linearGradient id={`${uid}wall`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={f.base} />
            <stop offset="100%" stopColor={f.dark} />
          </linearGradient>
          <linearGradient id={`${uid}shd`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.14)" />
          </linearGradient>
          <linearGradient id={`${uid}gnd`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#88907a" />
            <stop offset="100%" stopColor="#6a7260" />
          </linearGradient>
          <filter id={`${uid}grain`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>
        </defs>

        {/* Sky */}
        <rect width="600" height="720" fill={`url(#${uid}sky)`} />

        {/* Clouds */}
        {clouds.map((c, i) => (
          <g key={i} opacity={0.72 + prng(h, i) * 0.18}>
            <ellipse cx={c.cx} cy={c.cy} rx={c.rx} ry={c.ry} fill="white" />
            <ellipse cx={c.cx + c.rx * 0.28} cy={c.cy - c.ry * 0.6} rx={c.rx * 0.55} ry={c.ry * 0.85} fill="white" />
            <ellipse cx={c.cx - c.rx * 0.24} cy={c.cy - c.ry * 0.45} rx={c.rx * 0.4} ry={c.ry * 0.72} fill="white" />
          </g>
        ))}

        {/* Flanking buildings (depth) */}
        <rect x="0" y={topY + 40} width="80" height={520 - topY} fill="#b8ac96" opacity="0.6" />
        <rect x="520" y={topY + 60} width="80" height={520 - topY} fill="#b8ac96" opacity="0.6" />

        {/* Main facade */}
        <rect x="60" y={topY} width="480" height={520 - topY} fill={`url(#${uid}wall)`} />
        {/* Shadow side */}
        <rect x="60" y={topY} width="480" height={520 - topY} fill={`url(#${uid}shd)`} />

        {/* Roof / pediment */}
        <polygon points={`60,${topY} 300,${topY - 48} 540,${topY}`} fill={f.roof} />
        <rect x="60" y={topY - 8} width="480" height="12" fill={f.dark} />

        {/* Windows */}
        {f.winRows.map((row, ri) =>
          row.map((x, wi) => (
            <g key={`${ri}-${wi}`}>
              <rect x={x} y={topY + 40 + ri * (f.winH + 36)} width={f.winW} height={f.winH} rx="2" fill="#b8ccd8" opacity="0.88" />
              <rect x={x} y={topY + 40 + ri * (f.winH + 36)} width={f.winW} height={f.winH * 0.42} rx="2" fill="#d0dfe8" opacity="0.8" />
              <line x1={x + f.winW / 2} y1={topY + 40 + ri * (f.winH + 36)} x2={x + f.winW / 2} y2={topY + 40 + ri * (f.winH + 36) + f.winH} stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
            </g>
          ))
        )}

        {/* Entrance door */}
        <rect x="268" y={490} width="64" height="80" rx="3" fill="#3a3028" />
        <rect x="272" y={494} width="26" height="72" rx="2" fill="#4a4038" />
        <rect x="300" y={494} width="26" height="72" rx="2" fill="#4a4038" />
        <rect x="268" y={486} width="64" height="8" rx="2" fill={f.dark} />

        {/* Plinth / base course */}
        <rect x="60" y={490} width="480" height="30" fill={f.dark} />

        {/* Ground & pavement */}
        <rect x="0" y="522" width="600" height="198" fill={`url(#${uid}gnd)`} />
        <rect x="0" y="522" width="600" height="20" fill="#9aa08a" />

        {/* Foreground pavement detail */}
        <line x1="0" y1="560" x2="600" y2="560" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="0" y1="600" x2="600" y2="600" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* Grain */}
        <rect width="600" height="720" fill="transparent" filter={`url(#${uid}grain)`} opacity="0.028" />
      </svg>

      {label && <span style={{ position: 'absolute', bottom: 14, left: 16, fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(26,29,33,0.38)' }}>{label}</span>}
    </div>
  );
}

// ─── Portrait / studio scene ──────────────────────────────────────────────────
function PortraitScene({ uid, h, label, className, style }) {
  const isLight = (h % 2) === 0;

  return (
    <div className={`img-placeholder ${className}`} style={{ position: 'relative', overflow: 'hidden', background: isLight ? '#e0dbd4' : '#1a1d21', ...style }} aria-label={label}>
      <svg viewBox="0 0 480 600" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id={`${uid}bg`} cx="50%" cy="42%" r="62%">
            <stop offset="0%"   stopColor={isLight ? '#ede8e0' : '#2a2e34'} />
            <stop offset="100%" stopColor={isLight ? '#c8c0b4' : '#0e1014'} />
          </radialGradient>
          <radialGradient id={`${uid}rim`} cx="80%" cy="25%" r="50%">
            <stop offset="0%"   stopColor={isLight ? 'rgba(255,248,236,0.7)' : 'rgba(184,153,104,0.32)'} />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <linearGradient id={`${uid}suit`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={isLight ? '#2a2e34' : '#1e2228'} />
            <stop offset="100%" stopColor={isLight ? '#1a1d21' : '#111418'} />
          </linearGradient>
          <filter id={`${uid}grain`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.66" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode={isLight ? 'multiply' : 'screen'} />
          </filter>
        </defs>

        <rect width="480" height="600" fill={`url(#${uid}bg)`} />
        <rect width="480" height="600" fill={`url(#${uid}rim)`} />

        {/* Suit / jacket — from shoulders up from bottom */}
        <path d="M0,600 L0,460 Q80,400 160,380 L180,340 Q220,320 240,320 Q260,320 300,340 L320,380 Q400,400 480,460 L480,600 Z" fill={`url(#${uid}suit)`} />
        {/* Shirt collar detail */}
        <path d="M200,345 L240,395 L280,345 Q260,330 240,328 Q220,330 200,345 Z" fill={isLight ? '#f0ebe2' : '#d4cfc8'} opacity="0.9" />
        {/* Tie */}
        <path d="M232,368 L240,430 L248,368 Q244,355 240,352 Q236,355 232,368 Z" fill={isLight ? '#8a6030' : '#b89968'} opacity="0.85" />

        {/* Head */}
        <ellipse cx="240" cy="228" rx="82" ry="98" fill={isLight ? '#c8b49a' : '#b8a48a'} />
        {/* Hair */}
        <ellipse cx="240" cy="155" rx="82" ry="42" fill={isLight ? '#2a2218' : '#1a1410'} />
        <rect x="158" y="155" width="164" height="30" fill={isLight ? '#2a2218' : '#1a1410'} />
        {/* Eyes */}
        <ellipse cx="216" cy="222" rx="11" ry="8" fill="white" opacity="0.9" />
        <ellipse cx="264" cy="222" rx="11" ry="8" fill="white" opacity="0.9" />
        <ellipse cx="218" cy="223" rx="6" ry="6.5" fill={isLight ? '#2a2218' : '#1a1814'} />
        <ellipse cx="266" cy="223" rx="6" ry="6.5" fill={isLight ? '#2a2218' : '#1a1814'} />
        {/* Subtle smile */}
        <path d="M224,255 Q240,267 256,255" stroke={isLight ? '#a0907a' : '#8a7a68'} strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Rim light on shoulder */}
        <path d="M400,400 Q440,420 480,460 L480,480 Q440,440 390,420 Z" fill={isLight ? 'rgba(255,248,220,0.18)' : 'rgba(184,153,104,0.20)'} />

        {/* Grain */}
        <rect width="480" height="600" fill="transparent" filter={`url(#${uid}grain)`} opacity="0.036" />
      </svg>

      {label && <span style={{ position: 'absolute', bottom: 14, left: 16, fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: isLight ? 'rgba(26,29,33,0.38)' : 'rgba(255,255,255,0.32)' }}>{label}</span>}
    </div>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────
export default function ArchImage({ seed = 'estate', label = '', dark = false, className = '', style = {} }) {
  const h = hash(seed);
  const uid = `ai_${seed.replace(/[^a-z0-9]/gi, '_')}_`;
  const v = h % 4;

  if (dark || seed === 'hero-villa') {
    return <NightScene uid={uid} h={h} label={label} className={className} style={style} />;
  }
  if (seed.startsWith('portrait-')) {
    return <PortraitScene uid={uid} h={h} label={label} className={className} style={style} />;
  }
  return <DayScene uid={uid} h={h} label={label} v={v} className={className} style={style} />;
}
