/* global React */
const { useState, useEffect, useRef, useCallback, useMemo, createContext, useContext } = React;

/* ============================================================
   Router context (hash-based)
   ============================================================ */
const RouterContext = createContext(null);

function useRouter() { return useContext(RouterContext); }

function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, "") || "home";
  const [path, ...rest] = h.split("/");
  return { path: path || "home", params: rest };
}

function RouterProvider({ children }) {
  const [route, setRoute] = useState(parseHash());
  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const nav = useCallback((to) => {
    window.location.hash = "/" + to;
  }, []);
  return (
    <RouterContext.Provider value={{ route, nav }}>
      {children}
    </RouterContext.Provider>
  );
}

/* ============================================================
   Reveal-on-scroll
   ============================================================ */
function Reveal({ children, className = "", as: As = "div", delay = 0, kind = "fade", once = true, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) setShown(false);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  const cls = `${kind === "image" ? "reveal-image" : kind === "rule" ? "reveal-rule" : "reveal"} ${shown ? "in" : ""} ${className}`;
  const style = { "--reveal-delay": `${delay}ms`, ...(rest.style || {}) };
  return <As ref={ref} className={cls} style={style} {...rest}>{children}</As>;
}

/* ============================================================
   Image placeholder (architectural shot)
   Uses a deterministic palette/gradient based on seed for variety
   ============================================================ */
function ArchImage({ seed = "estate", label = "Property exterior", dark = false, className = "", style = {} }) {
  let h = 0; for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const angle = (h % 80) + 100;
  const tone1 = dark ? `hsl(${(h % 30) + 200}, 8%, 14%)` : `hsl(${(h % 40) + 30}, 10%, 86%)`;
  const tone2 = dark ? `hsl(${(h % 30) + 200}, 10%, 22%)` : `hsl(${(h % 40) + 30}, 14%, 76%)`;
  const accent = dark ? "rgba(184,153,104,0.18)" : "rgba(184,153,104,0.22)";
  const variant = h % 6;
  return (
    <div
      className={`img-placeholder ${dark ? "dark" : ""} ${className}`}
      style={{
        background: `
          repeating-linear-gradient(${angle}deg, rgba(${dark ? "255,255,255" : "0,0,0"},0.04) 0 1px, transparent 1px 22px),
          linear-gradient(${angle}deg, ${tone1} 0%, ${tone2} 100%)`,
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

/* ============================================================
   Logo / wordmark — 1:1 from brand asset, in elegant black & white
   ============================================================ */
function FoxMark({ size = 44, style = {}, alt = "FOX" }) {
  return (
    <img
      src="assets/fox-mark-bw.png"
      alt={alt}
      width={size}
      height={size}
      style={{ display: "block", width: size, height: size, objectFit: "contain", flexShrink: 0, ...style }}
    />
  );
}

function FoxWordmark({ height = 28, style = {}, alt = "FOX Immobilien" }) {
  const ratio = 1002 / 448;
  return (
    <img
      src="assets/fox-logo-bw.png"
      alt={alt}
      height={height}
      width={Math.round(height * ratio)}
      className="fox-logo-img"
      style={{ display: "block", height: height, width: Math.round(height * ratio), flexShrink: 0, ...style }}
    />
  );
}

function Logo({ onClick }) {
  return (
    <a
      href="#/home"
      onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
      className="logo-mark"
      aria-label="FOX Immobilien Darmstadt"
    >
      <FoxWordmark height={42} />
      <span className="sub">Immobilien<br />Darmstadt · Rhein-Main</span>
    </a>
  );
}

/* ============================================================
   Nav
   ============================================================ */
const NAV_ITEMS = [
  { key: "verkauf", label: "Verkauf" },
  { key: "verwaltung", label: "Verwaltung" },
  { key: "ueber-uns", label: "Über uns" },
  { key: "kontakt", label: "Kontakt" },
];

function Nav({ darkOnTop = false }) {
  const { route, nav } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${darkOnTop ? "theme-dark" : ""}`}>
      <Logo onClick={() => nav("home")} />
      <div className="nav-links">
        {NAV_ITEMS.map((it) => (
          <button
            key={it.key}
            className={`nav-link ${route.path === it.key ? "active" : ""}`}
            onClick={() => nav(it.key)}
          >{it.label}</button>
        ))}
      </div>
      <div className="nav-right">
        <span className="nav-cta-line" aria-hidden="true">
          <span className="dot-live" />
          <span>+49 6151 27 89 40</span>
        </span>
        <button
          className="nav-link"
          style={{ fontWeight: 600 }}
          onClick={() => nav("kontakt")}
        >Bewertung anfragen ↗</button>
      </div>
    </nav>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  const { nav } = useRouter();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <img src="assets/fox-logo-bw.png" alt="FOX Immobilien" className="fox-logo-img" style={{ height: 56, width: "auto", filter: "grayscale(1) invert(1)" }} />
            </div>
            <p className="footer-tagline">Familienunternehmen seit 1998. <em style={{ color: "var(--color-secondary)" }}>Verwaltung mit Vorsprung. Verkauf mit Haltung.</em></p>
            <address style={{ marginTop: 36, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", fontStyle: "normal" }}>
              Rheinstraße 41<br />64283 Darmstadt
            </address>
          </div>
          <div>
            <h4>Leistungen</h4>
            <ul>
              <li><a href="#/verkauf" onClick={(e) => { e.preventDefault(); nav("verkauf"); }}>Immobilienverkauf</a></li>
              <li><a href="#/verwaltung" onClick={(e) => { e.preventDefault(); nav("verwaltung"); }}>Immobilienverwaltung</a></li>
              <li><a href="#/objekte" onClick={(e) => { e.preventDefault(); nav("objekte"); }}>Aktuelle Objekte</a></li>
              <li><a href="#/kontakt" onClick={(e) => { e.preventDefault(); nav("kontakt"); }}>Marktwertanalyse</a></li>
            </ul>
          </div>
          <div>
            <h4>Unternehmen</h4>
            <ul>
              <li><a href="#/ueber-uns" onClick={(e) => { e.preventDefault(); nav("ueber-uns"); }}>Über uns</a></li>
              <li><a href="#/ueber-uns" onClick={(e) => { e.preventDefault(); nav("ueber-uns"); }}>Team</a></li>
              <li><a href="#/kontakt" onClick={(e) => { e.preventDefault(); nav("kontakt"); }}>Kontakt</a></li>
              <li><a href="#/karriere" onClick={(e) => e.preventDefault()}>Karriere</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:+4961512789400">+49 6151 27 89 40</a></li>
              <li><a href="mailto:hello@fox-immobilien.de">hello@fox-immobilien.de</a></li>
              <li style={{ color: "rgba(255,255,255,0.45)" }}>Mo–Fr · 09:00–18:00</li>
              <li style={{ marginTop: 20, color: "rgba(255,255,255,0.55)" }}>IVD · BVFI Mitglied</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 FOX Immobilien · Inhabergeführt von Familie Meenenga seit 1998</div>
          <div className="footer-bottom-right">
            <a href="#/impressum" onClick={(e) => { e.preventDefault(); nav("impressum"); }}>Impressum</a>
            <a href="#/datenschutz" onClick={(e) => { e.preventDefault(); nav("datenschutz"); }}>Datenschutz</a>
            <a href="#/agb" onClick={(e) => e.preventDefault()}>AGB</a>
          </div>
        </div>
      </div>
      <div className="footer-wordmark">FOX</div>
    </footer>
  );
}

/* ============================================================
   Listing card
   ============================================================ */
function ListingCard({ l, index = 0 }) {
  const { nav } = useRouter();
  return (
    <Reveal delay={index * 80}>
      <a className="listing-card" href={`#/objekt/${l.slug}`} onClick={(e) => { e.preventDefault(); nav(`objekt/${l.slug}`); }}>
        <div className="lc-media">
          <div className={`lc-status ${l.status === "Verkauft" ? "sold" : ""}`}>
            <span className="dot" />{l.status}
          </div>
          <div className="lc-num">№ {String(index + 1).padStart(2, "0")} / DA</div>
          <ArchImage seed={l.slug} label={l.imgLabel || "Objektansicht"} style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="lc-body">
          <div>
            <div className="lc-title">{l.title}</div>
            <div className="lc-location">{l.location}</div>
          </div>
          <div className="lc-price">{l.price}</div>
        </div>
        <div className="lc-meta">
          <span><b>{l.size}</b>m²</span>
          <span><b>{l.rooms}</b>&nbsp;Zimmer</span>
          <span><b>{l.year}</b></span>
          <span style={{ marginLeft: "auto" }}>{l.type}</span>
        </div>
      </a>
    </Reveal>
  );
}

/* ============================================================
   Sample data
   ============================================================ */
const LISTINGS = [
  { slug: "villa-mathildenhoehe", title: "Villa am Mathildenhöhe", location: "Darmstadt · Mathildenhöhe", price: "€ 4.250.000", size: 412, rooms: 8, year: 1908, type: "Jugendstil-Villa", status: "Exklusiv", imgLabel: "Jugendstil-Villa, Süd-Fassade" },
  { slug: "penthouse-johannesviertel", title: "Penthouse Johannes­viertel", location: "Darmstadt · Johannesviertel", price: "€ 1.890.000", size: 218, rooms: 5, year: 2022, type: "Penthouse", status: "Neu", imgLabel: "Penthouse mit Dachterrasse" },
  { slug: "stadthaus-bessungen", title: "Stadthaus an der Orangerie", location: "Darmstadt · Bessungen", price: "€ 2.640.000", size: 295, rooms: 7, year: 1894, type: "Stadthaus", status: "Reserviert", imgLabel: "Klassizistisches Stadthaus" },
  { slug: "loft-eberstadt", title: "Industrieloft Papierfabrik", location: "Darmstadt · Eberstadt", price: "€ 1.395.000", size: 240, rooms: 4, year: 1962, type: "Loft", status: "Verfügbar", imgLabel: "Loft, Lichthof" },
  { slug: "anwesen-kranichstein", title: "Landgut Kranichstein", location: "Darmstadt · Kranichstein", price: "€ 5.800.000", size: 680, rooms: 12, year: 1786, type: "Anwesen", status: "Off-Market", imgLabel: "Anwesen, Park" },
  { slug: "wohnung-paulusviertel", title: "Beletage Paulusviertel", location: "Darmstadt · Paulusviertel", price: "€ 1.250.000", size: 168, rooms: 4, year: 1902, type: "Altbau", status: "Verfügbar", imgLabel: "Altbau-Beletage" },
  { slug: "stadtvilla-rosenhoehe", title: "Stadtvilla Rosenhöhe", location: "Darmstadt · Rosenhöhe", price: "Auf Anfrage", size: 348, rooms: 9, year: 1928, type: "Stadtvilla", status: "Off-Market", imgLabel: "Stadtvilla, Parkgrundstück" },
];

const TEAM = [
  {
    name: "Jörn Meenenga",
    role: "Senior Geschäftsführer",
    bio: "Gründete 1998 die Verwaltung und führt seit 2005 die Maklertätigkeit. Sein Maßstab ist es, jedes Mandat so zu betreuen, als wäre es das eigene Haus — diskret, präzise, persönlich.",
    quals: [
      "WEG-Verwalter seit 28 Jahren",
      "Immobilienmakler §34c GewO seit 20+ Jahren",
      "IVD-Mitglied",
    ],
  },
  {
    name: "Michel Meenenga",
    role: "Junior Geschäftsführer",
    bio: "Zweite Generation. Verbindet die handwerkliche Tradition des Hauses mit modernster Vermarktung — von cineastischen Drohnenaufnahmen bis zur digitalen Eigentümer-Plattform.",
    quals: [
      "Zertifizierter Verwalter nach §26a Abs. 1 WEG",
      "Studium Internationales Immobilienmanagement",
      "Leitung Digital & Vermarktung",
    ],
  },
];

/* ============================================================
   Scroll progress bar
   ============================================================ */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="scroll-progress" style={{ width: pct + "%" }} aria-hidden="true" />;
}

/* ============================================================
   Animated counter (count-up on intersection)
   ============================================================ */
function AnimatedNumber({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (to === 0) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const duration = 1500;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(ease * to));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* expose to other scripts */
Object.assign(window, {
  React, RouterProvider, RouterContext, useRouter, Reveal, ArchImage,
  Logo, FoxMark, FoxWordmark, Nav, Footer, ListingCard, LISTINGS, TEAM,
  ScrollProgress, AnimatedNumber,
});
