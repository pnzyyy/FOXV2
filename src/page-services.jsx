/* global React, useRouter, Reveal, ArchImage, FoxMark */

/* ============================================================
   Shared page header
   ============================================================ */
function PageHeader({ eyebrow, title, sub, current, parent }) {
  const { nav } = useRouter();
  return (
    <header className="page-header">
      <div className="container">
        <Reveal>
          <div className="breadcrumb">
            <a href="#/home" onClick={(e) => { e.preventDefault(); nav("home"); }}>FOX</a>
            <span className="sep">/</span>
            {parent && (<>
              <a href={`#/${parent.to}`} onClick={(e) => { e.preventDefault(); nav(parent.to); }}>{parent.label}</a>
              <span className="sep">/</span>
            </>)}
            <span className="cur">{current}</span>
          </div>
        </Reveal>
        <div className="page-header-row" style={{ marginTop: 56 }}>
          <div>
            <Reveal delay={80}>
              <div className="t-eyebrow">{eyebrow}</div>
            </Reveal>
            <Reveal delay={160}>
              <h1 className="t-display" style={{ marginTop: 32, maxWidth: "14ch" }} dangerouslySetInnerHTML={{ __html: title }} />
            </Reveal>
          </div>
          {sub && (
            <Reveal delay={240}>
              <p className="t-lead" style={{ maxWidth: "32ch", paddingBottom: 12 }}>{sub}</p>
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   VERKAUF
   ============================================================ */
function VerkaufPage() {
  const { nav } = useRouter();
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="01 — Leistung"
        title='Verkauf, der die <em>Geschichte</em><br/>eines Hauses bewahrt.'
        sub="Wir verkaufen nicht jede Immobilie. Wir verkaufen die, deren Werte wir verstehen — mit der Sorgfalt, die ein Familienhaus verdient."
        current="Immobilienverkauf"
      />

      {/* Editorial image + intro */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal kind="image">
              <div className="img-frame" style={{ aspectRatio: "4/5" }}>
                <ArchImage seed="verkauf-vill" label="Villa Mathildenhöhe · Salon" style={{ width: "100%", height: "100%" }} />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="t-eyebrow">Unsere Methode</div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="t-h2" style={{ marginTop: 24 }}>
                  Kein Türöffner.<br />
                  <em>Ihr Partner für den maximalen Verkaufserfolg.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="t-lead" style={{ marginTop: 32 }}>
                  Wir sind 20+ Jahre als zugelassene Makler nach §34c GewO im Markt. Jede Immobilie bekommt eine eigene Vermarktungs­sprache — mit cineastischem Film, vollständiger 360°-Tour, Drohnen­aufnahmen und einem redaktionellen Exposé, das auch gedruckt funktioniert.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, paddingTop: 32, borderTop: "1px solid var(--color-line)" }}>
                  <div>
                    <div className="t-num">20<sup style={{ color: "var(--color-secondary)", fontSize: "0.4em", verticalAlign: "top", marginLeft: 4 }}>+ Jahre</sup></div>
                    <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-faint)" }}>Erfahrung im Verkauf</div>
                  </div>
                  <div>
                    <div className="t-num">§<span style={{ marginLeft: 2 }}>34c</span></div>
                    <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-faint)" }}>GewO-Zulassung</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
              <div>
                <div className="t-eyebrow">Ablauf</div>
                <h2 className="t-h2" style={{ marginTop: 24 }}>Vier Schritte, sechs Wochen.</h2>
              </div>
              <div className="t-meta">Durchschnittliche Zeit bis zum Notartermin</div>
            </div>
          </Reveal>
          <Reveal kind="rule"><div className="divider" /></Reveal>
          <div className="process" style={{ borderTop: "none" }}>
            {[
              { n: "01", t: "Bewertung & Briefing", d: "Persönliche Besichtigung, Aufnahme der Geschichte und ein klares Ergebnis: marktnahe Bewertung in 14 Tagen.", k: "Woche 1–2" },
              { n: "02", t: "Inszenierung", d: "360°-Tour, Drohnenfilm, Architekturfotografie und cineastisches Vermarktungs­video. Jede Immobilie bekommt ihre eigene Sprache.", k: "Woche 2–3" },
              { n: "03", t: "Stille Suche", d: "Erst die Kartei, dann das Netzwerk. Auf Wunsch ohne öffentliche Sichtbarkeit, mit kuratierten Besichtigungen.", k: "Woche 3–5" },
              { n: "04", t: "Abschluss", d: "Verhandlung, Notar­vorbereitung, Übergabe. Wir sind dabei — auch danach, wenn Fragen bleiben.", k: "Woche 5–6" },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="step">
                  <div className="step-n">
                    <span className="num">{s.n}</span>
                    <span>{s.k}</span>
                  </div>
                  <div className="step-t">{s.t}</div>
                  <div className="step-d">{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }}>
            <Reveal>
              <FoxMark size={88} />
            </Reveal>
            <Reveal delay={120}>
              <p className="pull-quote" style={{ color: "var(--color-background)" }}>
                Eine Immobilie ist kein Produkt. Sie ist ein Brief, den die nächste Generation öffnen wird.
              </p>
              <div style={{ marginTop: 40, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                Jörn Meenenga · Senior Geschäftsführer
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES INCLUDED */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="t-eyebrow">Im Honorar enthalten</div>
            <h2 className="t-h2" style={{ marginTop: 24, marginBottom: 56 }}>Alles, was eine Premium-<em>Vermarktung</em> ausmacht.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "var(--color-line)", border: "1px solid var(--color-line)" }}>
            {[
              { t: "Marktpreis­ermittlung", d: "Datenbasierte Bewertung auf Basis von 20+ Jahren Branchen­erfahrung und aktuellen Vergleichs­transaktionen." },
              { t: "360°-Touren", d: "Vollständig begehbare Rundgänge in höchster Auflösung — für die diskrete Vor­besichtigung Ihrer Kandidaten." },
              { t: "Drohnen­aufnahmen", d: "Kontextaufnahmen, die das Objekt im Stadtteil verorten — ein Werkzeug, das wir konsequent nutzen." },
              { t: "Vermarktungs­video", d: "Cineastische Filmproduktion zu jeder Premium-Immobilie. Schnitt, Ton, Farbe — alles im Haus produziert." },
              { t: "Umfangreiches Exposé", d: "Redaktioneller Text, Architektur­fotografie, Grundrisse, Energie­ausweis — gedruckt und digital." },
              { t: "Beratung 360°", d: "Vor dem Verkauf, während der Vermarktung und nach dem Notartermin. Wir sind dabei, solange es nötig ist." },
            ].map((it, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{ background: "var(--color-background)", padding: 32, minHeight: 200 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.2em", color: "var(--color-secondary)" }}>0{i + 1}</div>
                  <h3 className="t-h3" style={{ marginTop: 18 }}>{it.t}</h3>
                  <p style={{ marginTop: 14, fontSize: 14, color: "var(--color-ink-soft)", lineHeight: 1.6 }}>{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: "var(--color-primary)", color: "var(--color-background)", padding: "clamp(64px, 8vw, 120px) clamp(40px, 6vw, 96px)", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
            <Reveal>
              <h2 className="t-h1" style={{ color: "var(--color-background)", maxWidth: "18ch" }}>
                Bereit, Ihr Haus zu <em>übergeben</em>?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="t-lead" style={{ color: "rgba(255,255,255,0.72)", marginBottom: 32 }}>
                  Vereinbaren Sie ein unverbindliches Gespräch in unserem Stammhaus in der Rheinstraße — oder bei Ihnen vor Ort.
                </p>
                <button className="btn btn-ondark" onClick={() => nav("kontakt")}>
                  <span>Gespräch vereinbaren</span><span className="arrow">→</span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   VERWALTUNG
   ============================================================ */
function VerwaltungPage() {
  const { nav } = useRouter();
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="02 — Leistung"
        title='Verwaltung, die im <em>Hintergrund</em><br/>bleibt — wo sie hingehört.'
        sub="28 Jahre WEG- und Mietverwaltung im Rhein-Main-Gebiet. Inhabergeführt von Familie Meenenga."
        current="Immobilienverwaltung"
      />

      {/* Numbers band */}
      <section style={{ background: "var(--color-background)" }}>
        <div className="container-wide">
          <div className="stats-row">
            <div className="stat">
              <span className="stat-k">WEG-Verwaltung seit</span>
              <span className="stat-v">1998</span>
              <span className="stat-desc">28 Jahre ununterbrochene Verwaltung von Eigentümer­gemeinschaften.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Zertifizierung</span>
              <span className="stat-v">§<span style={{ fontSize: "0.6em", marginLeft: 2 }}>26a</span></span>
              <span className="stat-desc">Zertifizierter Verwalter nach § 26a Abs. 1 WEG.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Persoenlich</span>
              <span className="stat-v">1:1</span>
              <span className="stat-desc">Ein fester Ansprechpartner pro WEG. Keine Hotline, kein Ticket-System.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Reaktionszeit</span>
              <span className="stat-v">{"<"}4<sup>h</sup></span>
              <span className="stat-desc">Auf jede Anfrage werktags zwischen 9–18 Uhr.</span>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 64 }}>
              <div>
                <div className="t-eyebrow">Drei Verwaltungs­arten</div>
              </div>
              <div>
                <h2 className="t-h1">
                  Wir kennen jedes Dach,<br />
                  <em>jeden Beirat, jede Heizung</em>.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="service-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            {[
              {
                n: "WEG-Verwaltung",
                t: "Wohnungs­eigentümer­gemeinschaften",
                d: "Vollständige kaufmännische und technische Betreuung Ihrer WEG. Wir bereiten Versammlungen vor, koordinieren Handwerker, führen die Buchhaltung und sind erste Anlaufstelle für jeden Eigentümer.",
                l: ["Eigentümer­versammlungen", "Hausgeld-Abrechnung", "Technische Verwaltung", "Beiratsbegleitung"],
              },
              {
                n: "Mietverwaltung",
                t: "Wohn- und Gewerbe­objekte",
                d: "Für Eigentümer von Mehrfamilien­häusern und Gewerbe­immobilien. Wir kümmern uns um Mieterauswahl, Verträge, Nebenkosten und sämtliche Routine — Sie sehen nur den monatlichen Bericht.",
                l: ["Mieter­akquise & -auswahl", "Vertrags­management", "Nebenkosten­abrechnung", "Forderungs­management"],
              },
              {
                n: "Sondereigentum",
                t: "Einzelne Eigentums­wohnungen",
                d: "Für Eigentümer einzelner Wohnungen — auch wenn die WEG nicht von uns verwaltet wird. Diskret, direkt und mit kurzem Draht zu Mietern und Handwerkern.",
                l: ["Einzel-Mieter­betreuung", "Reparatur­koordination", "Übergabe­protokoll", "Reporting auf Anfrage"],
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="service-card" style={{ gap: 24 }}>
                  <div className="sc-num">0{i + 1} — {s.n}</div>
                  <div>
                    <h3 className="sc-title" style={{ fontSize: "clamp(22px, 2.2vw, 30px)" }}>{s.t}</h3>
                    <p className="sc-desc">{s.d}</p>
                  </div>
                  <ul className="sc-list">
                    {s.l.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ background: "var(--color-muted)", padding: "clamp(56px, 7vw, 96px)", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "center" }}>
            <Reveal>
              <h2 className="t-h2">Übergeben Sie Ihre Verwaltung an ein Haus, das seit 28 Jahren <em>nicht gewechselt</em> wurde.</h2>
            </Reveal>
            <Reveal delay={120}>
              <button className="btn" onClick={() => nav("kontakt")}>
                <span>Bestand prüfen lassen</span><span className="arrow">→</span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

window.VerkaufPage = VerkaufPage;
window.VerwaltungPage = VerwaltungPage;
window.PageHeader = PageHeader;
