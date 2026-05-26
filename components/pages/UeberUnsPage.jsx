import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ArchImage from '@/components/ArchImage';
import FoxMark from '@/components/FoxMark';
import PageHeader from '@/components/PageHeader';
import { TEAM } from '@/lib/data';

export default function UeberUnsPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Wer wir sind"
        title='Ein Haus, das sich <em>nicht</em><br/>neu erfinden muss.'
        sub="Inhabergeführt durch die Familie Meenenga seit 1998. Zwei Generationen, eine Haltung: persönliche Betreuung mit den Werkzeugen einer internationalen Marke."
        current="Über uns"
      />

      <section className="section">
        <div className="container">
          <div className="grid-responsive" style={{ gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px, 8vw, 140px)' }}>
            <Reveal>
              <FoxMark size={120} />
              <div style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-faint)' }}>
                Stammhaus<br />Rheinstraße 41<br />Darmstadt
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2vw, 28px)', fontWeight: 300, lineHeight: 1.4, color: 'var(--color-primary)', maxWidth: '50ch', fontStyle: 'italic' }}>
                  „Wir sind kein Immobilienunternehmen, das in Darmstadt sitzt. Wir sind ein Darmstädter Familienbetrieb, der seit 1998 mit Immobilien arbeitet."
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="t-lead" style={{ marginTop: 40 }}>
                  Als Jörn Meenenga 1998 die ersten Mietverhältnisse in der Rheinstraße übernahm, war das keine Geschäftsidee. Es war eine Reaktion auf ein Bedürfnis: in der Stadt, die er seit Kindheit kannte, etwas zu verwalten, das wichtiger ist als Quadratmeter — die Beziehungen zwischen Menschen und ihren Häusern.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="t-body" style={{ marginTop: 32, maxWidth: '60ch' }}>
                  Heute, fast drei Jahrzehnte später, ist daraus ein Haus geworden, das zwei stille Disziplinen unter einem Dach vereint: 28 Jahre WEG-Verwaltung und 20+ Jahre Premium-Verkauf nach §34c GewO. 2021 trat Michel Meenenga ins Unternehmen ein — ausgebildet im Internationalen Immobilienmanagement, zertifizierter Verwalter nach §26a Abs. 1 WEG. Aus Tradition wurde Kontinuität.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-tight" style={{ background: 'var(--color-muted)' }}>
        <div className="container">
          <Reveal>
            <div className="t-eyebrow" style={{ marginBottom: 48 }}>Chronologie</div>
          </Reveal>
          <div className="chrono-grid">
            {[
              { y: '1998', t: 'Gründung', d: 'Jörn Meenenga startet die Immobilienverwaltung in der Rheinstraße.' },
              { y: '2005', t: '§34c-Zulassung', d: 'Aufnahme der Maklertätigkeit, zunächst für Bestandskunden der Verwaltung.' },
              { y: '2012', t: 'Erweiterung', d: 'Umzug ins heutige Stammhaus in der Rheinstraße 41 und Ausbau des Teams.' },
              { y: '2021', t: 'Zweite Generation', d: 'Michel Meenenga tritt nach Studium und Berufspraxis ins Unternehmen ein.' },
              { y: '2023', t: 'Digital', d: 'Neue digitale Eigentümer- und Mieterplattform. §26a-Zertifizierung Michel Meenenga.' },
              { y: '2026', t: 'Heute', d: 'Zwei Geschäftsführer, ein zwölfköpfiges Team, das gesamte Rhein-Main-Gebiet.' },
            ].map((it, i) => (
              <Reveal key={it.y} delay={i * 80}>
                <div className="chrono-card">
                  <div className="t-num" style={{ color: 'var(--color-secondary)' }}>{it.y}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, marginTop: 24 }}>{it.t}</div>
                    <p style={{ marginTop: 12, fontSize: 13.5, color: 'var(--color-ink-soft)', lineHeight: 1.55 }}>{it.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <div className="t-eyebrow">Geschäftsführung</div>
                <h2 className="t-h1" style={{ marginTop: 24, maxWidth: '16ch' }}>Zwei <em>Generationen</em>.<br />Ein gemeinsamer Schreibtisch.</h2>
              </div>
              <div className="t-meta">Familie Meenenga · Stammhaus Darmstadt</div>
            </div>
          </Reveal>
          <div className="team-pair">
            {TEAM.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 32, width: '100%', height: '100%' }}>
                  <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: 'var(--color-muted)', position: 'relative' }}>
                    <ArchImage seed={'portrait-' + p.name} label={`Portrait ${p.name}`} style={{ width: '100%', height: '100%' }} />
                    <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-background)', background: 'rgba(20,22,26,0.55)', backdropFilter: 'blur(8px)', padding: '8px 12px' }}>
                      0{i + 1} / {String(TEAM.length).padStart(2, '0')}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>{p.role}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.4vw, 48px)', fontWeight: 300, lineHeight: 1.05, marginTop: 16, letterSpacing: '-0.01em' }}>{p.name}</h3>
                    <p style={{ fontSize: 15.5, color: 'var(--color-ink-soft)', lineHeight: 1.6, marginTop: 24, maxWidth: '38ch' }}>{p.bio}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 24, borderTop: '1px solid var(--color-line)' }}>
                      {p.quals.map((q) => (
                        <li key={q} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'flex', gap: 14, alignItems: 'center' }}>
                          <span style={{ width: 14, height: 1, background: 'var(--color-secondary)', flexShrink: 0 }} />{q}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 780, marginBottom: 64 }}>
              <div className="t-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Was uns trägt</div>
              <h2 className="t-h1" style={{ color: 'var(--color-background)', marginTop: 24 }}>Vier Prinzipien, an denen wir <em>nicht rütteln</em>.</h2>
            </div>
          </Reveal>
          <div className="feature-grid" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.1)', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              { n: '01', t: 'Diskretion', d: 'Wir reden nicht über Mandate. Auch nicht beim Abendessen. Auch nicht in zehn Jahren.' },
              { n: '02', t: 'Handwerk', d: 'Bewertungen, Exposés, Verträge — alles entsteht im Haus. Keine ausgelagerte Routine.' },
              { n: '03', t: 'Verantwortung', d: 'Wir verkaufen nicht jeder Person jedes Haus. Wir wählen aus — auf beiden Seiten.' },
              { n: '04', t: 'Langfristigkeit', d: 'Die meisten unserer Mandate dauern länger als zehn Jahre. Manche länger als 25.' },
            ].map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div className="feature-card" style={{ background: 'var(--color-primary)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-secondary)' }}>{v.n}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400, marginTop: 18, color: 'var(--color-background)' }}>{v.t}</div>
                  <p style={{ marginTop: 6, fontSize: 14.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{v.d}</p>
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
            <div className="grid-responsive" style={{ gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
              <h2 className="t-h1" style={{ maxWidth: '18ch' }}>Lernen Sie uns <em>persönlich</em> kennen.</h2>
              <div>
                <p className="t-lead">Wir nehmen uns Zeit für ein Gespräch ohne Anlass — bei einem Espresso in der Rheinstraße oder bei Ihnen vor Ort.</p>
                <div style={{ marginTop: 40 }}>
                  <Link href="/kontakt" className="btn"><span>Termin vereinbaren</span><span className="arrow">→</span></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
