'use client';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';

export default function MietverwaltungPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="03 — Leistung"
        title='Mietverwaltung, die <em>entlastet</em> —<br/>nicht belastet.'
        sub="Für Eigentümer von Mehrfamilienhäusern und Gewerbeobjekten. Wir übernehmen Mieter, Verträge, Nebenkostenabrechnungen und sämtliche Routine."
        current="Mietverwaltung"
        parent={{ href: '/weg-verwaltung', label: 'Verwaltung' }}
      />

      {/* Numbers band */}
      <section style={{ background: 'var(--color-background)' }}>
        <div className="container-wide">
          <div className="stats-row">
            <div className="stat">
              <span className="stat-k">Erfahrung</span>
              <span className="stat-v">28<sup>Jahre</sup></span>
              <span className="stat-desc">Mietverwaltung für Wohn- und Gewerbeobjekte seit 1998.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Persönlich</span>
              <span className="stat-v">1:1</span>
              <span className="stat-desc">Fester Ansprechpartner für Sie und Ihre Mieter. Kein Call-Center.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Transparenz</span>
              <span className="stat-v">100<sup>%</sup></span>
              <span className="stat-desc">Monatlicher Bericht, nachvollziehbare Abrechnung, volle Kostentransparenz.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Reaktionszeit</span>
              <span className="stat-v">{'<'}4<sup>h</sup></span>
              <span className="stat-desc">Auf Mieteranfragen und Schadensmeldungen werktags 9–18 Uhr.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, marginBottom: 64 }}>
              <div>
                <div className="t-eyebrow">Mietverwaltung Darmstadt</div>
              </div>
              <div>
                <h2 className="t-h1">
                  Sie sehen den <em>monatlichen Bericht</em>.<br />
                  Wir erledigen den Rest.
                </h2>
              </div>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'var(--color-line)', border: '1px solid var(--color-line)' }}>
            {[
              { n: '01', t: 'Mieterauswahl', d: 'Sorgfältige Bonitätsprüfung, Besichtigung und Auswahl der Mieter — auf Ihre Anforderungen zugeschnitten.' },
              { n: '02', t: 'Vertragsmanagement', d: 'Rechtssichere Mietverträge, Übergabeprotokolle, Kautionsverwaltung und fristgerechte Kündigungsbearbeitung.' },
              { n: '03', t: 'Nebenkostenabrechnung', d: 'Jahresabrechnungen pünktlich, vollständig und rechtssicher. Vorschüsse anpassen, Guthaben auszahlen.' },
              { n: '04', t: 'Forderungsmanagement', d: 'Konsequentes Mahnwesen bei Mietrückständen. Zusammenarbeit mit Fachanwälten bei gerichtlichen Maßnahmen.' },
              { n: '05', t: 'Instandhaltung', d: 'Koordination von Reparaturen und Wartungen. Kostenvoranschläge einholen, Handwerker beauftragen, Abnahme überwachen.' },
              { n: '06', t: 'Reporting', d: 'Monatlicher Überblick über Mieteingänge, Ausgaben und offene Posten — per E-Mail oder auf Wunsch postalisch.' },
            ].map((it, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ background: 'var(--color-background)', padding: 32, minHeight: 200 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.2em', color: 'var(--color-secondary)' }}>{it.n}</div>
                  <h3 className="t-h3" style={{ marginTop: 18 }}>{it.t}</h3>
                  <p style={{ marginTop: 14, fontSize: 14, color: 'var(--color-ink-soft)', lineHeight: 1.6 }}>{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SONDEREIGENTUM */}
      <section className="section-tight" style={{ background: 'var(--color-muted)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <div className="t-eyebrow">Sondereigentum</div>
                <h2 className="t-h2" style={{ marginTop: 24 }}>Auch einzelne <em>Eigentumswohnungen</em>.</h2>
                <p className="t-lead" style={{ marginTop: 24 }}>
                  Für Eigentümer einzelner Wohnungen — auch wenn die WEG nicht von uns verwaltet wird. Mieterbetreuung, Reparaturkoordination und Übergabeprotokolle: diskret, direkt, mit kurzem Draht.
                </p>
              </div>
              <div style={{ paddingTop: 16 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {['Einzel-Mieterbetreuung', 'Reparaturkoordination', 'Übergabeprotokoll', 'Reporting auf Anfrage'].map((x) => (
                    <li key={x} style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span style={{ width: 14, height: 1, background: 'var(--color-secondary)', flexShrink: 0 }} />{x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'var(--color-primary)', color: 'var(--color-background)', padding: 'clamp(64px, 8vw, 120px) clamp(40px, 6vw, 96px)', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
            <Reveal>
              <h2 className="t-h1" style={{ color: 'var(--color-background)', maxWidth: '20ch' }}>Ihr Mietobjekt in <em>zuverlässigen Händen</em>.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="t-lead" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 32 }}>
                  Sprechen Sie uns an — unverbindlich, persönlich, im Stammhaus Rheinstraße oder bei Ihnen vor Ort.
                </p>
                <Link href="/kontakt" className="btn btn-ondark"><span>Gespräch vereinbaren</span><span className="arrow">→</span></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
