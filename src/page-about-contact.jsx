/* global React, useRouter, Reveal, ArchImage, TEAM, PageHeader, FoxMark */
const { useState: useStateC } = React;

/* ============================================================
   ÜBER UNS
   ============================================================ */
function UeberUnsPage() {
  const { nav } = useRouter();
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Wer wir sind"
        title='Ein Haus, das sich <em>nicht</em><br/>neu erfinden muss.'
        sub="Inhabergeführt durch die Familie Meenenga seit 1998. Zwei Generationen, eine Haltung: persönliche Betreuung mit den Werkzeugen einer internationalen Marke."
        current="Über uns"
      />

      {/* Editorial intro */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(48px, 8vw, 140px)" }}>
            <Reveal>
              <FoxMark size={120} />
              <div style={{ marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-faint)" }}>
                Stammhaus<br />Rheinstraße 41<br />Darmstadt
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 300, lineHeight: 1.4, color: "var(--color-primary)", maxWidth: "50ch", fontStyle: "italic" }}>
                  „Wir sind kein Immobilien­unternehmen, das in Darmstadt sitzt. Wir sind ein Darmstädter Familien­betrieb, der seit 1998 mit Immobilien arbeitet."
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="t-lead" style={{ marginTop: 40 }}>
                  Als Jörn Meenenga 1998 die ersten Mietverhältnisse in der Rheinstraße übernahm, war das keine Geschäftsidee. Es war eine Reaktion auf ein Bedürfnis: in der Stadt, die er seit Kindheit kannte, etwas zu verwalten, das wichtiger ist als Quadrat­meter — die Beziehungen zwischen Menschen und ihren Häusern.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="t-body" style={{ marginTop: 32, maxWidth: "60ch" }}>
                  Heute, fast drei Jahrzehnte später, ist daraus ein Haus geworden, das zwei stille Disziplinen unter einem Dach vereint: 28 Jahre WEG-Verwaltung und 20+ Jahre Premium-Verkauf nach §34c GewO. 2021 trat Michel Meenenga ins Unternehmen ein — ausgebildet im Internationalen Immobilien­management, zertifizierter Verwalter nach §26a Abs. 1 WEG. Aus Tradition wurde Kontinuität.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-tight" style={{ background: "var(--color-muted)" }}>
        <div className="container">
          <Reveal>
            <div className="t-eyebrow" style={{ marginBottom: 48 }}>Chronologie</div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "rgba(26,29,33,0.12)" }}>
            {[
              { y: "1998", t: "Gründung", d: "Jörn Meenenga startet die Immobilienverwaltung in der Rheinstraße." },
              { y: "2005", t: "§34c-Zulassung", d: "Aufnahme der Maklertätigkeit, zunächst für Bestandskunden der Verwaltung." },
              { y: "2012", t: "Erweiterung", d: "Umzug ins heutige Stamm­haus in der Rheinstraße 41 und Ausbau des Teams." },
              { y: "2021", t: "Zweite Generation", d: "Michel Meenenga tritt nach Studium und Berufspraxis ins Unternehmen ein." },
              { y: "2023", t: "Digital", d: "Eigene Eigentümer- und Mieterplattform. §26a-Zertifizierung Michel Meenenga." },
              { y: "2026", t: "Heute", d: "Zwei Geschäftsführer, ein zwölfköpfiges Team, das gesamte Rhein-Main-Gebiet." },
            ].map((it, i) => (
              <Reveal key={it.y} delay={i * 80}>
                <div style={{ background: "var(--color-muted)", padding: 32, minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className="t-num" style={{ color: "var(--color-secondary)" }}>{it.y}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400, marginTop: 24 }}>{it.t}</div>
                    <p style={{ marginTop: 12, fontSize: 13.5, color: "var(--color-ink-soft)", lineHeight: 1.55 }}>{it.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — Zwei Generationen, zwei Geschäftsführer */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
              <div>
                <div className="t-eyebrow">Geschäftsführung</div>
                <h2 className="t-h1" style={{ marginTop: 24, maxWidth: "16ch" }}>
                  Zwei <em>Generationen</em>.<br />Ein gemeinsamer Schreibtisch.
                </h2>
              </div>
              <div className="t-meta">Familie Meenenga · Stammhaus Darmstadt</div>
            </div>
          </Reveal>
          <div className="team-pair">
            {TEAM.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div style={{ display: "grid", gridTemplateRows: "auto 1fr", gap: 32 }}>
                  <div style={{ aspectRatio: "4/5", overflow: "hidden", background: "var(--color-muted)", position: "relative" }}>
                    <ArchImage seed={"portrait-" + p.name} label={`PLATZHALTER · Portrait ${p.name}`} style={{ width: "100%", height: "100%" }} />
                    <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-background)", background: "rgba(20,22,26,0.55)", backdropFilter: "blur(8px)", padding: "8px 12px" }}>
                      0{i + 1} / {String(TEAM.length).padStart(2,"0")}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-secondary)" }}>{p.role}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 3.4vw, 48px)", fontWeight: 300, lineHeight: 1.05, marginTop: 16, letterSpacing: "-0.01em" }}>{p.name}</h3>
                    <p style={{ fontSize: 15.5, color: "var(--color-ink-soft)", lineHeight: 1.6, marginTop: 24, maxWidth: "38ch" }}>{p.bio}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 12, paddingTop: 24, borderTop: "1px solid var(--color-line)" }}>
                      {p.quals.map((q) => (
                        <li key={q} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-primary)", display: "flex", gap: 14, alignItems: "center" }}>
                          <span style={{ width: 14, height: 1, background: "var(--color-secondary)", flexShrink: 0 }} />{q}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* The wider team note */}
          <Reveal delay={300}>
            <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--color-line)", display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "center" }}>
              <div className="t-meta">Hinter den Geschäftsführern</div>
              <p className="t-body" style={{ maxWidth: "70ch" }}>
                Ein zwölfköpfiges Team aus Verwaltern, Sales Consultants, einer Klientenbetreuung und einem Digital-Lead trägt die tägliche Arbeit. Jeder Mitarbeiter ist seit mindestens vier Jahren im Haus — Fluktuation gehört bei uns nicht zur Geschäftsstrategie.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 780, marginBottom: 64 }}>
              <div className="t-eyebrow" style={{ color: "rgba(255,255,255,0.65)" }}>Was uns trägt</div>
              <h2 className="t-h1" style={{ color: "var(--color-background)", marginTop: 24 }}>Vier Prinzipien, an denen wir <em>nicht rütteln</em>.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 1, background: "rgba(255,255,255,0.1)" }}>
            {[
              { n: "01", t: "Diskretion", d: "Wir reden nicht über Mandate. Auch nicht beim Abendessen. Auch nicht in zehn Jahren." },
              { n: "02", t: "Handwerk", d: "Bewertungen, Exposés, Verträge — alles entsteht im Haus. Keine ausgelagerte Routine." },
              { n: "03", t: "Verantwortung", d: "Wir verkaufen nicht jeder Person jedes Haus. Wir wählen aus — auf beiden Seiten." },
              { n: "04", t: "Langfristigkeit", d: "Die meisten unserer Mandate dauern länger als zehn Jahre. Manche länger als 25." },
            ].map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div style={{ background: "var(--color-primary)", padding: 40, minHeight: 280 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--color-secondary)" }}>{v.n}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, marginTop: 32, color: "var(--color-background)" }}>{v.t}</div>
                  <p style={{ marginTop: 20, fontSize: 14.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
              <h2 className="t-h1" style={{ maxWidth: "18ch" }}>Lernen Sie uns <em>persönlich</em> kennen.</h2>
              <div>
                <p className="t-lead">Wir nehmen uns Zeit für ein Gespräch ohne Anlass — bei einem Espresso in der Rheinstraße oder bei Ihnen vor Ort.</p>
                <div style={{ marginTop: 40 }}>
                  <button className="btn" onClick={() => nav("kontakt")}>
                    <span>Termin vereinbaren</span><span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   KONTAKT
   ============================================================ */
function KontaktPage() {
  const [submitted, setSubmitted] = useStateC(false);
  const [form, setForm] = useStateC({ name: "", email: "", phone: "", message: "", anliegen: "Marktwert­analyse" });
  function update(k, v) { setForm(f => ({ ...f, [k]: v })); }
  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Kontakt"
        title='Sprechen wir <em>persönlich</em>.'
        sub="Ob Marktwertanalyse, Verkauf, Verwaltung oder eine Anfrage zu einem unserer Objekte — Sie erreichen uns werktags 09–18 Uhr. Vertraulich. Ohne Newsletter."
        current="Kontakt"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <Reveal>
                <div className="t-eyebrow">Anliegen senden</div>
              </Reveal>
              {!submitted ? (
                <form onSubmit={submit} style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 32 }}>
                  <Reveal delay={80}>
                    <div className="input-group">
                      <label>Anliegen</label>
                      <select value={form.anliegen} onChange={(e) => update("anliegen", e.target.value)}>
                        <option>Marktwert­analyse</option>
                        <option>Immobilien­verkauf</option>
                        <option>Immobilien­verwaltung</option>
                        <option>Off-Market-Suche</option>
                        <option>Pressekontakt</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>
                  </Reveal>
                  <Reveal delay={140}>
                    <div className="input-row">
                      <div className="input-group">
                        <label>Vor- und Nachname</label>
                        <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Vor- und Nachname" />
                      </div>
                      <div className="input-group">
                        <label>Telefon</label>
                        <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+49 ___ ___ ___" />
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={200}>
                    <div className="input-group">
                      <label>E-Mail</label>
                      <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="name@beispiel.de" />
                    </div>
                  </Reveal>
                  <Reveal delay={260}>
                    <div className="input-group">
                      <label>Nachricht</label>
                      <textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Erzählen Sie uns kurz von Ihrer Immobilie oder Ihrer Suche." />
                    </div>
                  </Reveal>
                  <Reveal delay={320}>
                    <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", marginTop: 16 }}>
                      <button type="submit" className="btn">
                        <span>Anfrage senden</span><span className="arrow">→</span>
                      </button>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.18em", color: "var(--color-ink-faint)", textTransform: "uppercase" }}>
                        Wir antworten innerhalb von 24 h
                      </span>
                    </div>
                  </Reveal>
                </form>
              ) : (
                <div style={{ marginTop: 48, padding: 48, border: "1px solid var(--color-line)", background: "var(--color-muted)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-secondary)" }}>✓ Anfrage erhalten</div>
                  <h2 className="t-h2" style={{ marginTop: 24 }}>Vielen Dank, <em>{form.name || "—"}</em>.</h2>
                  <p className="t-lead" style={{ marginTop: 24 }}>
                    Wir haben Ihre Anfrage zum Thema <em>{form.anliegen}</em> erhalten und melden uns innerhalb der nächsten 24 Stunden — meist deutlich schneller. Bei dringenden Anliegen erreichen Sie uns direkt unter <a href="tel:+4961512789400" style={{ color: "var(--color-secondary)" }}>+49 6151 27 89 40</a>.
                  </p>
                  <button className="link-line" style={{ marginTop: 32 }} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "", anliegen: "Marktwert­analyse" }); }}>
                    Neue Anfrage <span className="arrow">→</span>
                  </button>
                </div>
              )}
            </div>

            <div className="contact-card">
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Direkter Kontakt</div>
                <h3>So erreichen Sie uns ohne Umwege.</h3>
              </div>
              <div className="cc-row">
                <span className="k">Telefon</span>
                <a href="tel:+4961512789400" className="v">+49 6151 27 89 40</a>
              </div>
              <div className="cc-row">
                <span className="k">E-Mail</span>
                <a href="mailto:hello@fox-immobilien.de" className="v">hello@fox-immobilien.de</a>
              </div>
              <div className="cc-row">
                <span className="k">Stammhaus</span>
                <span className="v" style={{ fontSize: 18 }}>
                  Rheinstraße 41<br />64283 Darmstadt
                </span>
              </div>
              <div className="cc-row">
                <span className="k">Öffnungszeiten</span>
                <span className="v" style={{ fontSize: 18 }}>Mo–Fr · 09:00–18:00<br />Sa · nach Vereinbarung</span>
              </div>
              <div style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.14)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <FoxMark size={48} />
                <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                  IVD · BVFI<br />Mitglied seit 2003
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ height: 480, background: "var(--color-muted)", position: "relative", overflow: "hidden" }}>
            <svg width="100%" height="100%" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0 }}>
              <rect width="1200" height="480" fill="#E8E6E1" />
              <g stroke="rgba(26,29,33,0.06)" strokeWidth="1">
                {Array.from({ length: 30 }).map((_, i) => <line key={"v" + i} x1={i * 40} x2={i * 40} y1="0" y2="480" />)}
                {Array.from({ length: 12 }).map((_, i) => <line key={"h" + i} x1="0" x2="1200" y1={i * 40} y2={i * 40} />)}
              </g>
              <g stroke="rgba(26,29,33,0.18)" strokeWidth="2" fill="none">
                <path d="M 0 240 L 1200 220" />
                <path d="M 600 0 L 600 480" />
                <path d="M 0 360 Q 600 340 1200 380" />
                <path d="M 200 0 Q 240 240 200 480" />
                <path d="M 900 0 Q 880 240 920 480" />
              </g>
              <g fontFamily="var(--font-mono)" fontSize="9" fill="rgba(26,29,33,0.4)" letterSpacing="2">
                <text x="40" y="60">MATHILDENHÖHE</text>
                <text x="780" y="60">JOHANNESVIERTEL</text>
                <text x="40" y="440">BESSUNGEN</text>
                <text x="800" y="440">PAULUSVIERTEL</text>
              </g>
              <g transform="translate(600, 240)">
                <circle r="60" fill="rgba(184,153,104,0.12)" />
                <circle r="32" fill="rgba(184,153,104,0.22)" />
                <circle r="10" fill="var(--color-secondary)" />
                <circle r="4" fill="var(--color-primary)" />
              </g>
              <g transform="translate(620, 224)" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-primary)" letterSpacing="2">
                <text>FOX · RHEINSTRAßE 41</text>
                <text y="14" fill="rgba(26,29,33,0.5)">64283 DARMSTADT</text>
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

window.UeberUnsPage = UeberUnsPage;
window.KontaktPage = KontaktPage;
