import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';

export default function WegVerwaltungPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="02 — Leistung"
        title='WEG-Verwaltung, die im <em>Hintergrund</em><br/>bleibt — wo sie hingehört.'
        sub="28 Jahre Wohnungseigentümergemeinschaften im Rhein-Main-Gebiet. Zertifiziert nach §26a Abs. 1 WEG. Inhabergeführt von Familie Meenenga."
        current="WEG-Verwaltung"
        parent={{ href: '/weg-verwaltung', label: 'Verwaltung' }}
      />

      {/* Numbers band */}
      <section style={{ background: 'var(--color-background)' }}>
        <div className="container-wide">
          <div className="stats-row">
            <div className="stat">
              <span className="stat-k">WEG-Verwaltung seit</span>
              <span className="stat-v">1998</span>
              <span className="stat-desc">28 Jahre ununterbrochene Verwaltung von Eigentümergemeinschaften.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Zertifizierung</span>
              <span className="stat-v">§<span style={{ fontSize: '0.6em', marginLeft: 2 }}>26a</span></span>
              <span className="stat-desc">Zertifizierter Verwalter nach § 26a Abs. 1 WEG.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Persönlich</span>
              <span className="stat-v">1:1</span>
              <span className="stat-desc">Ein fester Ansprechpartner pro WEG. Keine Hotline, kein Ticket-System.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Reaktionszeit</span>
              <span className="stat-v">{'<'}4<sup>h</sup></span>
              <span className="stat-desc">Auf jede Anfrage werktags zwischen 9–18 Uhr.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WEG DETAIL */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="grid-responsive" style={{ gridTemplateColumns: '1fr 1.6fr', gap: 80, marginBottom: 64 }}>
              <div>
                <div className="t-eyebrow">WEG-Verwaltung Darmstadt</div>
              </div>
              <div>
                <h2 className="t-h1">
                  Wir kennen jedes Dach,<br />
                  <em>jeden Beirat, jede Heizung</em>.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="feature-grid">
            {[
              { n: '01', t: 'Eigentümerversammlung', d: 'Vorbereitung, Einladung, Durchführung und Protokollierung. Auf Wunsch als digitale Versammlung mit elektronischer Abstimmung.' },
              { n: '02', t: 'Hausgeld-Abrechnung', d: 'Transparente Jahresabrechnungen, pünktlich, vollständig und prüfbar — inklusive Wirtschaftsplan für das Folgejahr.' },
              { n: '03', t: 'Technische Verwaltung', d: 'Koordination aller Handwerker und Wartungsdienstleister. Schadensdokumentation, Angebote einholen, Ausführung überwachen.' },
              { n: '04', t: 'Beiratsbegleitung', d: 'Regelmäßige Abstimmung mit dem Verwaltungsbeirat. Wir arbeiten mit dem Beirat, nicht an ihm vorbei.' },
              { n: '05', t: 'Rücklagenmanagement', d: 'Ordnungsgemäße Anlage und Verwaltung der Instandhaltungsrücklage. Altersgerechte Planung größerer Maßnahmen.' },
              { n: '06', t: 'Rechtliche Begleitung', d: 'Zusammenarbeit mit spezialisierten Fachanwälten für WEG-Recht bei Beschlussanfechtungen oder strittigen Maßnahmen.' },
            ].map((it, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="feature-card">
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.2em', color: 'var(--color-secondary)' }}>{it.n}</div>
                  <h3 className="t-h3" style={{ marginTop: 4 }}>{it.t}</h3>
                  <p style={{ fontSize: 14, color: 'var(--color-ink-soft)', lineHeight: 1.6 }}>{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="grid-responsive" style={{ gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
              <div>
                <div className="t-eyebrow">Tätigkeitsgebiet</div>
                <h2 className="t-h2" style={{ marginTop: 24 }}>WEG-Verwaltung in <em>Darmstadt</em> und dem Rhein-Main-Gebiet.</h2>
              </div>
              <div>
                <p className="t-lead">Unser Verwaltungsbestand konzentriert sich auf Darmstadt und das unmittelbare Umland: Mühltal, Weiterstadt, Griesheim, Pfungstadt und die Rhein-Main-Achse bis Frankfurt. Alle Stadtteile sind uns vertraut — von der Mathildenhöhe bis Kranichstein, von Bessungen bis Eberstadt.</p>
                <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Mathildenhöhe','Bessungen','Paulusviertel','Johannesviertel','Eberstadt','Rosenhöhe','Kranichstein','Mühltal','Weiterstadt','Griesheim'].map(d => (
                    <span key={d} style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 12px', border: '1px solid var(--color-line)', color: 'var(--color-ink-faint)' }}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MIETVERWALTUNG CROSSLINK */}
      <section className="section-tight" style={{ background: 'var(--color-muted)' }}>
        <div className="container">
          <Reveal>
            <div className="grid-responsive" style={{ gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div>
                <div className="t-eyebrow">Weitere Verwaltungsleistung</div>
                <h2 className="t-h2" style={{ marginTop: 24 }}>Auch <em>Mietverwaltung</em> aus einer Hand.</h2>
                <p className="t-lead" style={{ marginTop: 24 }}>
                  Für Eigentümer von Mehrfamilienhäusern und Gewerbeobjekten verwalten wir Mieter, Verträge, Nebenkostenabrechnungen und alle Routineaufgaben.
                </p>
              </div>
              <div>
                <Link href="/mietverwaltung" className="btn"><span>Zur Mietverwaltung</span><span className="arrow">→</span></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="grid-responsive" style={{ background: 'var(--color-muted)', padding: 'clamp(56px, 7vw, 96px)', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center' }}>
            <Reveal>
              <h2 className="t-h2">Übergeben Sie Ihre WEG an ein Haus, das seit 28 Jahren <em>nicht gewechselt</em> wurde.</h2>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/kontakt" className="btn"><span>Bestand prüfen lassen</span><span className="arrow">→</span></Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
