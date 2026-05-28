'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ArchImage from '@/components/ArchImage';
import FoxMark from '@/components/FoxMark';
import AnimatedNumber from '@/components/AnimatedNumber';
import HeroTypewriter from '@/components/HeroTypewriter';

export default function HomePage() {
  const heroImgRef = useRef(null);
  useEffect(() => {
    const el = heroImgRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight + 200) {
          el.style.transform = `scale(1.06) translateY(${y * 0.18}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);



  return (
    <div className="page-shell">
      {/* HERO */}
      <section className="hero" aria-label="Headline">
        <div className="hero-media">
          <div ref={heroImgRef} style={{ position: 'absolute', inset: 0 }}>
            <img
              src="/images/mathildenhoehe.jpg"
              alt="Mathildenhöhe Darmstadt — UNESCO Welterbe"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>
        </div>
        <div className="hero-content">
          <HeroTypewriter />
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="k">Standort</span>
              <span className="v">Rhein-Main · Darmstadt</span>
            </div>
            <div className="hero-meta-item">
              <span className="k">WEG-Verwaltung</span>
              <span className="v">seit 28 Jahren</span>
            </div>
            <div className="hero-meta-item">
              <span className="k">Immobilienverkauf</span>
              <span className="v">seit 20+ Jahren</span>
            </div>
            <div className="hero-meta-item" style={{ marginLeft: 'auto' }}>
              <Link href="/marktwertanalyse" className="btn btn-ondark">
                <span>Marktwert ermitteln</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>



        <div className="hero-scroll">
          <span className="hero-scroll-line" />
          <span>Scroll · Editorial</span>
        </div>
        <div className="hero-corner-meta">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>49°52′N · 08°39′E</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase' }}>14°C · Darmstadt</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="marquee-item">
              <span>Mathildenhöhe</span><span className="star">✦</span>
              <span>Paulusviertel</span><span className="star">✦</span>
              <span>Johannesviertel</span><span className="star">✦</span>
              <span>Bessungen</span><span className="star">✦</span>
              <span>Rosenhöhe</span><span className="star">✦</span>
              <span>Eberstadt</span><span className="star">✦</span>
              <span>Kranichstein</span><span className="star">✦</span>
              <span>Mühltal · Traisa</span><span className="star">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO / EDITORIAL */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <span className="ghost-num" aria-hidden="true">01</span>
        <div className="container">
          <div className="grid-responsive" style={{ gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px, 8vw, 140px)', alignItems: 'start' }}>
            <Reveal>
              <div className="t-eyebrow">Manifest</div>
              <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--color-ink-faint)' }}>01 — EINLEITUNG</div>
            </Reveal>
            <div>
              <Reveal delay={80}>
                <h2 className="t-h1" style={{ maxWidth: '20ch' }}>
                  Zwei Geschäftsfelder.<br />Eine <em>Familie</em>.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="t-lead" style={{ marginTop: 40 }}>
                  Seit 1998 verbindet die Familie Meenenga zwei Disziplinen unter einem Dach: <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-secondary)' }}>28 Jahre WEG-Verwaltung</em> und <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-secondary)' }}>20+ Jahre Premium-Verkauf</em> hochpreisiger Immobilien im Rhein-Main-Gebiet. Wir kombinieren die handwerkliche Sorgfalt eines Familienbetriebs mit den digitalen Werkzeugen einer internationalen Marke.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div style={{ marginTop: 56, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  <Link href="/ueber-uns" className="btn"><span>Unser Haus kennenlernen</span><span className="arrow">→</span></Link>
                  <Link href="/objekte" className="btn btn-ghost"><span>Aktuelle Objekte</span><span className="arrow">→</span></Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <Reveal kind="rule"><div className="divider" /></Reveal>
      <section style={{ background: 'var(--color-background)' }}>
        <div className="container-wide">
          <div className="stats-row" style={{ border: 'none' }}>
            <div className="stat">
              <span className="stat-k">WEG-Verwaltung</span>
              <span className="stat-v"><AnimatedNumber to={28} /><sup>Jahre</sup></span>
              <span className="stat-desc">Ununterbrochene Verwaltung von Eigentümergemeinschaften im Rhein-Main-Gebiet.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Maklertätigkeit</span>
              <span className="stat-v"><AnimatedNumber to={20} /><sup>+</sup></span>
              <span className="stat-desc">Jahre Premium-Verkauf mit §34c GewO-Zulassung, regional verankert in Darmstadt.</span>
            </div>
            <div className="stat">
              <span className="stat-k">Familiengeführt</span>
              <span className="stat-v"><AnimatedNumber to={2} /><sup>Gen.</sup></span>
              <span className="stat-desc">Jörn Meenenga (Gründer) und Michel Meenenga (Junior Geschäftsführung).</span>
            </div>
            <div className="stat">
              <span className="stat-k">Transparenz</span>
              <span className="stat-v">0<sup>Tage</sup></span>
              <span className="stat-desc">Verkaufte Objekte verschwinden sofort aus unserem Portfolio. Kein Marketing mit vergebenen Immobilien.</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO — Darmstadt service areas */}
      <section className="section-tight" style={{ background: 'var(--color-muted)' }}>
        <div className="container">
          <Reveal>
            <div className="grid-responsive" style={{ gridTemplateColumns: '1fr 2.2fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start' }}>
              <div>
                <div className="t-eyebrow">Lokale Expertise</div>
                <h2 className="t-h2" style={{ marginTop: 24 }}>
                  Immobilien­experten für <em>Darmstadt</em> und Rhein-Main.
                </h2>
              </div>
              <div>
                <div className="feature-grid" style={{ marginBottom: 40, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  {[
                    { href: '/verkauf',          label: 'Immobilienverkauf Darmstadt',    desc: 'Premium-Verkauf seit 2004 — §34c GewO.' },
                    { href: '/weg-verwaltung',   label: 'WEG-Verwaltung Darmstadt',       desc: '28 Jahre Erfahrung, §26a-zertifiziert.' },
                    { href: '/mietverwaltung',   label: 'Mietverwaltung Darmstadt',       desc: 'MFH, Gewerbe und Sondereigentum.' },
                    { href: '/marktwertanalyse', label: 'Immobilienbewertung Darmstadt',  desc: 'Kostenfreie Marktwertanalyse in 14 Tagen.' },
                  ].map((s, i) => (
                    <Reveal key={s.href} delay={i * 60}>
                      <Link href={s.href} style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-muted)', padding: '28px 32px', textDecoration: 'none', color: 'inherit', transition: 'background 0.3s', width: '100%', height: '100%' }} className="local-card">
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: 12 }}>→</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, lineHeight: 1.2 }}>{s.label}</div>
                        <div style={{ marginTop: 10, fontSize: 13, color: 'var(--color-ink-faint)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{s.desc}</div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Mathildenhöhe','Bessungen','Paulusviertel','Johannesviertel','Rosenhöhe','Eberstadt','Kranichstein','Mühltal','Rhein-Main'].map(d => (
                    <span key={d} style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '6px 14px', border: '1px solid var(--color-line-strong)', color: 'var(--color-ink-faint)' }}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <span className="ghost-num" aria-hidden="true">02</span>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 32, marginBottom: 64, flexWrap: 'wrap' }}>
            <Reveal>
              <div className="t-eyebrow">Leistungen</div>
              <h2 className="t-h1" style={{ marginTop: 24, maxWidth: '16ch' }}>Zwei Disziplinen.<br />Eine <em>Haltung</em>.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead" style={{ maxWidth: '38ch' }}>Wir trennen, was nicht zusammengehört — und verbinden, was sich ergänzt: Verkauf und Verwaltung unter einem Dach, ohne Reibung.</p>
            </Reveal>
          </div>
          <div className="service-grid">
            <Reveal>
              <Link href="/verkauf" className="service-card" style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: 32, textDecoration: 'none', color: 'inherit', background: 'var(--color-background)', padding: 'clamp(40px, 4vw, 64px)', transition: 'background 0.5s var(--ease-luxe)', cursor: 'pointer', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div className="sc-num">01 — Verkauf</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-faint)' }}>seit 2004</div>
                </div>
                <div>
                  <h3 className="sc-title">Fullservice-Vermarktung auf <em>Kino-Niveau</em></h3>
                  <p className="sc-desc">Vom 360°-Rundgang über Drohnenaufnahmen bis zum redaktionellen Vermarktungsvideo. Wir sind kein Türöffner für Besichtigungen — wir sind Ihr Partner für den maximalen Verkaufserfolg.</p>
                </div>
                <ul className="sc-list">
                  <li>360°-Touren in voller Auflösung</li>
                  <li>Drohnenaufnahmen & Vermarktungsvideo</li>
                  <li>Marktpreisermittlung mit Branchenerfahrung</li>
                  <li>Beratung vor, während & nach dem Verkauf</li>
                </ul>
                <div className="sc-foot">
                  <span className="link-line">Mehr erfahren <span className="arrow">→</span></span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/weg-verwaltung" className="service-card" style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: 32, textDecoration: 'none', color: 'inherit', background: 'var(--color-background)', padding: 'clamp(40px, 4vw, 64px)', transition: 'background 0.5s var(--ease-luxe)', cursor: 'pointer', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div className="sc-num">02 — Verwaltung</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-faint)' }}>seit 1998</div>
                </div>
                <div>
                  <h3 className="sc-title">Hausverwaltung, <em>neu gedacht</em></h3>
                  <p className="sc-desc">Digitales Eigentümerportal, Online-Abstimmungen, transparente Abrechnungen in Echtzeit — und trotzdem die persönliche Begehung Ihres Hauses durch Ihren festen Ansprechpartner.</p>
                </div>
                <ul className="sc-list">
                  <li>Digitales Eigentümer-Portal · App</li>
                  <li>Online-Abstimmungen & E-Versammlungen</li>
                  <li>Echtzeit-Kommunikation mit Verwaltung</li>
                  <li>Persönliche Begehungen vor Ort</li>
                </ul>
                <div className="sc-foot">
                  <span className="link-line">Mehr erfahren <span className="arrow">→</span></span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>



      {/* EDITORIAL: HISTORY SPLIT */}
      <section className="section section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
        <span className="ghost-num light" aria-hidden="true">03</span>
        <div className="container">
          <div className="split">
            <Reveal kind="image">
              <div className="img-frame" style={{ aspectRatio: '4/5' }}>
                <img
                  src="/images/balcony-bw.jpg"
                  alt="Architektur Darmstadt — Balkone"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="t-eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Geschichte</div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="t-h1" style={{ color: 'var(--color-background)', marginTop: 24 }}>
                  Ein Familienunternehmen,<br /><em>zwei Generationen</em>.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="t-lead" style={{ marginTop: 40, color: 'rgba(255,255,255,0.78)' }}>
                  Was 1998 mit drei Mietverhältnissen in der Rheinstraße begann, ist heute eines der angesehensten Immobilienhäuser im Rhein-Main-Gebiet. Jörn Meenenga führt das Haus seit der Gründung. 2021 trat Michel Meenenga ein — ausgebildet im Internationalen Immobilienmanagement, mit einem Auge für digitale Vermarktung und einem festen Fuß im Stammhaus.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.14)' }}>
                  <div>
                    <div className="t-num" style={{ color: 'var(--color-secondary)' }}>1998</div>
                    <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Gründung durch<br />Jörn Meenenga</div>
                  </div>
                  <div>
                    <div className="t-num" style={{ color: 'var(--color-secondary)' }}>2021</div>
                    <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Eintritt von<br />Michel Meenenga</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div style={{ marginTop: 48 }}>
                  <Link href="/ueber-uns" className="btn btn-ondark"><span>Über uns</span><span className="arrow">→</span></Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="t-eyebrow" style={{ marginBottom: 56 }}>Stimmen unserer Mandanten</div>
          </Reveal>
          <div className="grid-responsive" style={{ gridTemplateColumns: '1.4fr 0.6fr', gap: 80, alignItems: 'end' }}>
            <Reveal delay={120}>
              <p className="pull-quote">Wir wurden nicht beraten, wir wurden begleitet. Das ist ein Unterschied, den man erst bemerkt, wenn er nicht da ist.</p>
            </Reveal>
            <Reveal delay={240}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400 }}>Familie Weidenfeld</div>
                <div className="t-meta" style={{ marginTop: 8 }}>Verkauf Stadthaus · Bessungen · 2024</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRANSPARENZ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-responsive" style={{ background: 'var(--color-muted)', padding: 'clamp(56px, 7vw, 96px)', gridTemplateColumns: 'auto 1fr auto', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Reveal><FoxMark size={88} /></Reveal>
            <Reveal delay={100}>
              <div>
                <div className="t-eyebrow">Transparenz — unser Differenzierungs­merkmal</div>
                <h2 className="t-h2" style={{ marginTop: 24, maxWidth: '22ch' }}>
                  Verkaufte Objekte verschwinden bei uns <em>am Tag des Abschlusses</em> aus dem Portfolio.
                </h2>
                <p className="t-body" style={{ marginTop: 24, maxWidth: '58ch' }}>Kein Marketing mit längst vergebenen Immobilien. Kein künstliches Portfolio. Was Sie hier sehen, ist verfügbar — alles andere gehört in die Referenzmappe, nicht ins Schaufenster.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-ink-faint)', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Prinzip 01 · Transparenz
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-responsive" style={{ background: 'var(--color-primary)', color: 'var(--color-background)', padding: 'clamp(64px, 8vw, 120px) clamp(40px, 6vw, 96px)', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
            <Reveal>
              <div className="t-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Kostenfreie Marktwertanalyse</div>
              <h2 className="t-h1" style={{ color: 'var(--color-background)', marginTop: 24, maxWidth: '16ch' }}>Was ist Ihre Immobilie heute <em>wert</em>?</h2>
              <p className="t-lead" style={{ marginTop: 32, color: 'rgba(255,255,255,0.7)' }}>Eine fundierte Einschätzung in 14 Tagen — auf Basis aktueller Vergleichsdaten, regionaler Expertise und persönlicher Besichtigung. Vertraulich. Kostenfrei. Unverbindlich.</p>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
                <Link href="/marktwertanalyse" className="btn btn-ondark"><span>Bewertung anfragen</span><span className="arrow">→</span></Link>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>oder direkt:</div>
                <a href="tel:+496151151522" style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--color-secondary)', textDecoration: 'none', fontWeight: 400 }}>06151 151522</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
