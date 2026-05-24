'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ListingCard from '@/components/ListingCard';
import FoxMark from '@/components/FoxMark';
import PageHeader from '@/components/PageHeader';
import { LISTINGS } from '@/lib/data';

function parsePrice(p) {
  if (p === 'Auf Anfrage') return 99999999;
  return parseInt(p.replace(/[^0-9]/g, ''), 10);
}

export default function ObjektePage() {
  const [filter, setFilter] = useState('alle');
  const [sort, setSort] = useState('neu');

  const filtered = useMemo(() => {
    let list = LISTINGS.slice();
    if (filter === 'verfuegbar') list = list.filter(l => ['Verfügbar', 'Neu', 'Exklusiv'].includes(l.status));
    if (filter === 'offmarket') list = list.filter(l => l.status === 'Off-Market');
    if (filter === 'reserviert') list = list.filter(l => l.status === 'Reserviert');
    if (sort === 'preis-asc') list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === 'preis-desc') list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    if (sort === 'groesse') list.sort((a, b) => b.size - a.size);
    return list;
  }, [filter, sort]);

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Aktuelle Auswahl · Stand Mai 2026"
        title='Häuser, <em>kuratiert</em><br/>wie ein Museum.'
        sub="Eine kleine, ausgewählte Sammlung verfügbarer Objekte im Rhein-Main-Gebiet. Bei uns finden Sie ausschließlich Immobilien, die Sie heute noch erwerben können."
        current="Aktuelle Objekte"
      />

      <section style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 32, alignItems: 'center', padding: 'clamp(28px, 3.5vw, 44px)', border: '1px solid var(--color-line-strong)', background: 'var(--color-background)' }}>
              <FoxMark size={56} />
              <div>
                <div className="t-eyebrow" style={{ marginBottom: 12 }}>Transparenz</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 1.8vw, 26px)', fontWeight: 400, lineHeight: 1.3, maxWidth: '58ch' }}>
                  Verkaufte Objekte werden unmittelbar nach Abschluss aus dem Portfolio entfernt. <em style={{ color: 'var(--color-secondary)' }}>Was Sie hier sehen, ist verfügbar.</em>
                </div>
              </div>
              <div className="t-meta" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Stand Mai 2026</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="filter-bar">
            <div className="filter-chips">
              {[
                { k: 'alle', l: 'Alle verfügbaren', n: LISTINGS.length },
                { k: 'verfuegbar', l: 'Aktuell zu kaufen', n: LISTINGS.filter(l => ['Verfügbar', 'Neu', 'Exklusiv'].includes(l.status)).length },
                { k: 'offmarket', l: 'Off-Market', n: LISTINGS.filter(l => l.status === 'Off-Market').length },
                { k: 'reserviert', l: 'Reserviert', n: LISTINGS.filter(l => l.status === 'Reserviert').length },
              ].map(c => (
                <button key={c.k} className={`chip ${filter === c.k ? 'active' : ''}`} onClick={() => setFilter(c.k)}>
                  {c.l} <span style={{ marginLeft: 8, opacity: 0.6 }}>{String(c.n).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
            <div className="filter-right">
              <span>Sortieren</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="neu">Neu im Bestand</option>
                <option value="preis-desc">Preis · absteigend</option>
                <option value="preis-asc">Preis · aufsteigend</option>
                <option value="groesse">Fläche</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56 }}>
            {filtered.map((l, i) => <ListingCard key={l.slug} l={l} index={i} />)}
          </div>
          {filtered.length === 0 && (
            <div style={{ padding: '120px 0', textAlign: 'center', color: 'var(--color-ink-soft)' }}>
              <div className="t-h3">Keine Objekte in dieser Auswahl.</div>
              <p style={{ marginTop: 16 }}>Fragen Sie nach unserem Off-Market-Bestand.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: 'clamp(64px,8vw,120px)', paddingBottom: 'clamp(64px,8vw,120px)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <Reveal>
              <div className="t-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Stiller Bestand</div>
              <h2 className="t-h1" style={{ color: 'var(--color-background)', marginTop: 24 }}>
                Was hier <em>nicht</em> steht,<br />kennen wir auswendig.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Werden Sie Teil unserer Off-Market-Kartei. Wir kontaktieren Sie persönlich, sobald ein Objekt Ihrem Suchprofil entspricht. Vertraulich. Ohne Newsletter. Ohne Algorithmus.
              </p>
              <div style={{ marginTop: 40 }}>
                <Link href="/kontakt" className="btn btn-ondark"><span>Suchprofil hinterlegen</span><span className="arrow">→</span></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
