import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FoxMark from '@/components/FoxMark';
import PageHeader from '@/components/PageHeader';

export default function VerkaufPage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="01 — Leistung"
        title='Verkauf, der die <em>Geschichte</em><br/>eines Hauses bewahrt.'
        sub="Wir verkaufen nicht jede Immobilie. Wir verkaufen die, deren Werte wir verstehen — mit der Sorgfalt, die ein Familienhaus verdient."
        current="Immobilienverkauf"
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal kind="image">
              <div className="img-frame" style={{ aspectRatio: '4/5' }}>
                <img
                  src="/images/arch-modern.jpg"
                  alt="Moderne Architektur — FOX Immobilien Darmstadt"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
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
                  Wir sind 20+ Jahre als zugelassene Makler nach §34c GewO im Markt. Jede Immobilie bekommt eine eigene Vermarktungssprache — mit cineastischem Film, vollständiger 360°-Tour, Drohnenaufnahmen und einem redaktionellen Exposé, das auch gedruckt funktioniert.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, paddingTop: 32, borderTop: '1px solid var(--color-line)' }}>
                  <div>
                    <div className="t-num">20<sup style={{ color: 'var(--color-secondary)', fontSize: '0.4em', verticalAlign: 'top', marginLeft: 4 }}>+ Jahre</sup></div>
                    <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-faint)' }}>Erfahrung im Verkauf</div>
                  </div>
                  <div>
                    <div className="t-num">§<span style={{ marginLeft: 2 }}>34c</span></div>
                    <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-faint)' }}>GewO-Zulassung</div>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
              <div>
                <div className="t-eyebrow">Ablauf</div>
                <h2 className="t-h2" style={{ marginTop: 24 }}>Vier Schritte, sechs Wochen.</h2>
              </div>
              <div className="t-meta">Durchschnittliche Zeit bis zum Notartermin</div>
            </div>
          </Reveal>
          <Reveal kind="rule"><div className="divider" /></Reveal>
          <div className="process" style={{ borderTop: 'none' }}>
            {[
              { n: '01', t: 'Bewertung & Briefing', d: 'Persönliche Besichtigung, Aufnahme der Geschichte und ein klares Ergebnis: marktnahe Bewertung in 14 Tagen.', k: 'Woche 1–2' },
              { n: '02', t: 'Inszenierung', d: '360°-Tour, Drohnenfilm, Architekturfotografie und cineastisches Vermarktungsvideo. Jede Immobilie bekommt ihre eigene Sprache.', k: 'Woche 2–3' },
              { n: '03', t: 'Stille Suche', d: 'Erst die Kartei, dann das Netzwerk. Auf Wunsch ohne öffentliche Sichtbarkeit, mit kuratierten Besichtigungen.', k: 'Woche 3–5' },
              { n: '04', t: 'Abschluss', d: 'Verhandlung, Notarvorbereitung, Übergabe. Wir sind dabei — auch danach, wenn Fragen bleiben.', k: 'Woche 5–6' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="step">
                  <div className="step-n"><span className="num">{s.n}</span><span>{s.k}</span></div>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'center' }}>
            <Reveal><FoxMark size={88} /></Reveal>
            <Reveal delay={120}>
              <p className="pull-quote" style={{ color: 'var(--color-background)' }}>
                Eine Immobilie ist kein Produkt. Sie ist ein Brief, den die nächste Generation öffnen wird.
              </p>
              <div style={{ marginTop: 40, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: 'var(--color-line)', border: '1px solid var(--color-line)' }}>
            {[
              { t: 'Marktpreisermittlung', d: 'Datenbasierte Bewertung auf Basis von 20+ Jahren Branchenerfahrung und aktuellen Vergleichstransaktionen.' },
              { t: '360°-Touren', d: 'Vollständig begehbare Rundgänge in höchster Auflösung — für die diskrete Vorbesichtigung Ihrer Kandidaten.' },
              { t: 'Drohnenaufnahmen', d: 'Kontextaufnahmen, die das Objekt im Stadtteil verorten — ein Werkzeug, das wir konsequent nutzen.' },
              { t: 'Vermarktungsvideo', d: 'Cineastische Filmproduktion zu jeder Premium-Immobilie. Schnitt, Ton, Farbe — alles im Haus produziert.' },
              { t: 'Umfangreiches Exposé', d: 'Redaktioneller Text, Architekturfotografie, Grundrisse, Energieausweis — gedruckt und digital.' },
              { t: 'Beratung 360°', d: 'Vor dem Verkauf, während der Vermarktung und nach dem Notartermin. Wir sind dabei, solange es nötig ist.' },
            ].map((it, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{ background: 'var(--color-background)', padding: 40, minHeight: 260 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.2em', color: 'var(--color-secondary)' }}>0{i + 1}</div>
                  <h3 className="t-h3" style={{ marginTop: 18 }}>{it.t}</h3>
                  <p style={{ marginTop: 14, fontSize: 14, color: 'var(--color-ink-soft)', lineHeight: 1.6 }}>{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: 'var(--color-primary)', color: 'var(--color-background)', padding: 'clamp(64px, 8vw, 120px) clamp(40px, 6vw, 96px)', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
            <Reveal>
              <h2 className="t-h1" style={{ color: 'var(--color-background)', maxWidth: '18ch' }}>Bereit, Ihr Haus zu <em>übergeben</em>?</h2>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p className="t-lead" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 32 }}>
                  Vereinbaren Sie ein unverbindliches Gespräch in unserem Stammhaus in der Rheinstraße — oder bei Ihnen vor Ort.
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
