import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ArchImage from '@/components/ArchImage';
import ListingCard from '@/components/ListingCard';
import { LISTINGS } from '@/lib/data';

export default function ObjektDetailPage({ slug }) {
  const obj = LISTINGS.find(l => l.slug === slug) || LISTINGS[0];

  return (
    <div className="page-shell">
      <div className="detail-hero">
        <ArchImage seed={obj.slug + '-detail'} dark label={obj.imgLabel} style={{ width: '100%', height: '100%' }} />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-caption">
          <div>
            <Reveal>
              <div className="t-eyebrow" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24 }}>
                {obj.type} · {obj.location}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="title">{obj.title}</div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="price">
              {obj.price}
              <small>Kaufpreis · zzgl. Erwerbsnebenkosten</small>
            </div>
          </Reveal>
        </div>
      </div>

      <section style={{ paddingTop: 32 }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">FOX</Link>
            <span className="sep">/</span>
            <Link href="/objekte">Objekte</Link>
            <span className="sep">/</span>
            <span className="cur">№ {obj.slug.toUpperCase()}</span>
          </nav>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="prop-grid">
            <div className="prop-main">
              <Reveal><div className="t-eyebrow">Editorial</div></Reveal>
              <Reveal delay={100}>
                <h2 className="t-h2" style={{ marginTop: 24, marginBottom: 48, maxWidth: '18ch' }}>
                  Ein Haus, das die <em>Stille</em><br />des Quartiers atmet.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p style={{ fontSize: 19, lineHeight: 1.6, fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: 40, maxWidth: '56ch', fontWeight: 300 }}>
                  Zwischen Olbrich-Häusern und Künstlerkolonie liegt diese Villa wie ein gut gehütetes Familiengeheimnis — ruhig, geometrisch, mit jenem matt-gebrochenen Licht, das nur Häuser dieser Epoche zulassen.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>Auf drei Vollgeschossen entfaltet sich eine Architektur, die nichts beweisen muss. Die Salons öffnen sich nach Süden zum Park, die Wirtschaftsräume liegen diskret im Souterrain, das Dachgeschoss wurde 2019 behutsam ausgebaut — alle Eingriffe in Abstimmung mit dem Denkmalamt.</p>
                <p>Drei Generationen einer Darmstädter Familie haben das Haus seit 1962 bewohnt, immer mit dem stillen Anspruch, den ursprünglichen Charakter zu bewahren. Der originale Parkettboden, die Stuckdecken, die geschwungene Treppe aus Eichenholz — alles ist da, wo es 1908 entstanden ist.</p>
                <p>Das Grundstück umfasst 1.840 m² mit altem Baumbestand. Im hinteren Teil des Parks steht ein 1972 errichtetes Ateliergebäude, das sich als Gästehaus, Studio oder Poolhaus weiterdenken lässt.</p>
              </Reveal>
              <Reveal delay={400}>
                <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--color-line)', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/kontakt" className="btn"><span>Besichtigung anfragen</span><span className="arrow">→</span></Link>
                  <button className="btn btn-ghost"><span>Exposé herunterladen</span><span className="arrow">↓</span></button>
                </div>
              </Reveal>
            </div>

            <aside className="prop-aside">
              <Reveal><div className="t-eyebrow" style={{ marginBottom: 32 }}>Eckdaten</div></Reveal>
              <Reveal delay={100}>
                <dl>
                  <dt>Wohnfläche</dt><dd>{obj.size} m²</dd>
                  <dt>Grundstück</dt><dd>1.840 m²</dd>
                  <dt>Zimmer</dt><dd>{obj.rooms}</dd>
                  <dt>Schlafzimmer</dt><dd>{Math.max(2, obj.rooms - 3)}</dd>
                  <dt>Bäder</dt><dd>3</dd>
                  <dt>Baujahr</dt><dd>{obj.year}</dd>
                  <dt>Energie</dt><dd>D · 142 kWh</dd>
                  <dt>Heizung</dt><dd>Wärmepumpe</dd>
                  <dt>Status</dt><dd style={{ color: 'var(--color-secondary)' }}>{obj.status}</dd>
                </dl>
              </Reveal>
              <Reveal delay={200}>
                <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--color-line)' }}>
                  <div className="t-eyebrow" style={{ marginBottom: 24 }}>Ihr Ansprechpartner</div>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <div style={{ width: 64, height: 64, background: 'var(--color-muted)', flexShrink: 0 }}>
                      <ArchImage seed="joern-meenenga" label="" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400 }}>Jörn Meenenga</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', marginTop: 4 }}>Senior Geschäftsführer</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <a href="tel:+496151278940" className="link-line" style={{ fontSize: 13, letterSpacing: '0.1em' }}>+49 6151 27 89 40</a>
                    <a href="mailto:meenenga@fox-da.de" className="link-line" style={{ fontSize: 13, letterSpacing: '0.1em' }}>meenenga@fox-da.de</a>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-primary)' }}>
        <div className="prop-gallery">
          {['salon', 'kueche', 'schlafzimmer', 'bad', 'park'].map((k) => (
            <div key={k}>
              <ArchImage seed={obj.slug + '-' + k} dark label={k.toUpperCase()} style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
              <h2 className="t-h2">Weitere <em>Objekte</em></h2>
              <Link href="/objekte" className="link-line">Alle Objekte <span className="arrow">→</span></Link>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 56 }}>
            {LISTINGS.filter(l => l.slug !== obj.slug).slice(0, 3).map((l, i) => (
              <ListingCard key={l.slug} l={l} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
