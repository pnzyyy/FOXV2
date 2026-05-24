'use client';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import FoxMark from '@/components/FoxMark';
import PageHeader from '@/components/PageHeader';

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', anliegen: 'Marktwert­analyse' });
  function update(k, v) { setForm(f => ({ ...f, [k]: v })); }
  function submit(e) { e.preventDefault(); setSubmitted(true); }

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
                <form onSubmit={submit} style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 32 }}>
                  <Reveal delay={80}>
                    <div className="input-group">
                      <label>Anliegen</label>
                      <select value={form.anliegen} onChange={(e) => update('anliegen', e.target.value)}>
                        <option>Marktwert­analyse</option>
                        <option>Immobilienverkauf</option>
                        <option>Immobilienverwaltung</option>
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
                        <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Vor- und Nachname" />
                      </div>
                      <div className="input-group">
                        <label>Telefon</label>
                        <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+49 ___ ___ ___" />
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={200}>
                    <div className="input-group">
                      <label>E-Mail</label>
                      <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="name@beispiel.de" />
                    </div>
                  </Reveal>
                  <Reveal delay={260}>
                    <div className="input-group">
                      <label>Nachricht</label>
                      <textarea value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Erzählen Sie uns kurz von Ihrer Immobilie oder Ihrer Suche." />
                    </div>
                  </Reveal>
                  <Reveal delay={320}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginTop: 16 }}>
                      <button type="submit" className="btn"><span>Anfrage senden</span><span className="arrow">→</span></button>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.18em', color: 'var(--color-ink-faint)', textTransform: 'uppercase' }}>Wir antworten innerhalb von 24 h</span>
                    </div>
                  </Reveal>
                </form>
              ) : (
                <div style={{ marginTop: 48, padding: 48, border: '1px solid var(--color-line)', background: 'var(--color-muted)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>✓ Anfrage erhalten</div>
                  <h2 className="t-h2" style={{ marginTop: 24 }}>Vielen Dank, <em>{form.name || '—'}</em>.</h2>
                  <p className="t-lead" style={{ marginTop: 24 }}>
                    Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden. Bei dringenden Anliegen: <a href="tel:+4961512789400" style={{ color: 'var(--color-secondary)' }}>+49 6151 27 89 40</a>.
                  </p>
                  <button className="link-line" style={{ marginTop: 32 }} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '', anliegen: 'Marktwert­analyse' }); }}>
                    Neue Anfrage <span className="arrow">→</span>
                  </button>
                </div>
              )}
            </div>

            <div className="contact-card">
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Direkter Kontakt</div>
                <h3>So erreichen Sie uns ohne Umwege.</h3>
              </div>
              <div className="cc-row">
                <span className="k">Telefon</span>
                <a href="tel:+4961512789400" className="v">+49 6151 27 89 40</a>
              </div>
              <div className="cc-row">
                <span className="k">E-Mail</span>
                <a href="mailto:meenenga@fox-da.de" className="v">meenenga@fox-da.de</a>
              </div>
              <div className="cc-row">
                <span className="k">Stammhaus</span>
                <span className="v" style={{ fontSize: 18 }}>Rheinstraße 41<br />64283 Darmstadt</span>
              </div>
              <div className="cc-row">
                <span className="k">Öffnungszeiten</span>
                <span className="v" style={{ fontSize: 18 }}>Mo–Fr · 09:00–18:00<br />Sa · nach Vereinbarung</span>
              </div>
              <div style={{ paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.14)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <FoxMark size={48} />
                <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>IVD · BVFI<br />Mitglied seit 2003</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ height: 480, background: 'var(--color-muted)', position: 'relative', overflow: 'hidden' }}>
            <svg width="100%" height="100%" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
              <rect width="1200" height="480" fill="#E8E6E1" />
              <g stroke="rgba(26,29,33,0.06)" strokeWidth="1">
                {Array.from({ length: 30 }).map((_, i) => <line key={'v' + i} x1={i * 40} x2={i * 40} y1="0" y2="480" />)}
                {Array.from({ length: 12 }).map((_, i) => <line key={'h' + i} x1="0" x2="1200" y1={i * 40} y2={i * 40} />)}
              </g>
              <g stroke="rgba(26,29,33,0.18)" strokeWidth="2" fill="none">
                <path d="M 0 240 L 1200 220" /><path d="M 600 0 L 600 480" />
                <path d="M 0 360 Q 600 340 1200 380" /><path d="M 200 0 Q 240 240 200 480" />
                <path d="M 900 0 Q 880 240 920 480" />
              </g>
              <g fontFamily="var(--font-mono)" fontSize="9" fill="rgba(26,29,33,0.4)" letterSpacing="2">
                <text x="40" y="60">MATHILDENHÖHE</text><text x="780" y="60">JOHANNESVIERTEL</text>
                <text x="40" y="440">BESSUNGEN</text><text x="800" y="440">PAULUSVIERTEL</text>
              </g>
              <g transform="translate(600, 240)">
                <circle r="60" fill="rgba(184,153,104,0.12)" /><circle r="32" fill="rgba(184,153,104,0.22)" />
                <circle r="10" fill="var(--color-secondary)" /><circle r="4" fill="var(--color-primary)" />
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
