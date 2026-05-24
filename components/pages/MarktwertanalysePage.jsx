'use client';
import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FoxMark from '@/components/FoxMark';
import PageHeader from '@/components/PageHeader';

export default function MarktwertanalysePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', message: '' });
  function update(k, v) { setForm(f => ({ ...f, [k]: v })); }
  function submit(e) { e.preventDefault(); setSubmitted(true); }

  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="Kostenfreie Bewertung"
        title='Was ist Ihre Immobilie heute <em>wert</em>?'
        sub="Eine fundierte Einschätzung in 14 Tagen — auf Basis aktueller Vergleichsdaten, regionaler Expertise und persönlicher Besichtigung. Vertraulich. Kostenfrei. Unverbindlich."
        current="Marktwertanalyse"
      />

      {/* WHY FOX */}
      <section className="section-tight" style={{ background: 'var(--color-muted)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'rgba(26,29,33,0.08)', border: '1px solid rgba(26,29,33,0.08)' }}>
            {[
              { n: '01', t: 'Lokal verwurzelt', d: 'Über 28 Jahre Transaktionsdaten im Raum Darmstadt und Rhein-Main — kein Algorithmus, sondern gelebte Marktkenntnis.' },
              { n: '02', t: 'Persönlich', d: 'Kein Online-Tool. Ein Gespräch vor Ort, bei dem wir Ihre Immobilie wirklich kennenlernen.' },
              { n: '03', t: 'Kostenfrei', d: 'Die Marktwertanalyse ist ohne jede Bedingung kostenfrei. Keine versteckten Folgeverpflichtungen.' },
              { n: '04', t: 'Vertraulich', d: 'Ihre Daten werden ausschließlich intern genutzt. Kein CRM-Weiterverkauf, kein Massen-Mailing.' },
            ].map((it, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ background: 'var(--color-muted)', padding: 32 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.2em', color: 'var(--color-secondary)' }}>{it.n}</div>
                  <h3 className="t-h3" style={{ marginTop: 16 }}>{it.t}</h3>
                  <p style={{ marginTop: 12, fontSize: 14, color: 'var(--color-ink-soft)', lineHeight: 1.6 }}>{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <Reveal>
                <div className="t-eyebrow">Anfrage stellen</div>
                <h2 className="t-h2" style={{ marginTop: 24, maxWidth: '20ch' }}>Ihre Immobilie. Unser <em>Urteil</em>.</h2>
              </Reveal>
              {!submitted ? (
                <form onSubmit={submit} style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 32 }}>
                  <Reveal delay={80}>
                    <div className="input-row">
                      <div className="input-group">
                        <label>Vor- und Nachname</label>
                        <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Ihr Name" />
                      </div>
                      <div className="input-group">
                        <label>Telefon</label>
                        <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+49 ___ ___" />
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={140}>
                    <div className="input-group">
                      <label>E-Mail</label>
                      <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="name@beispiel.de" />
                    </div>
                  </Reveal>
                  <Reveal delay={200}>
                    <div className="input-group">
                      <label>Adresse der Immobilie</label>
                      <input type="text" value={form.address} onChange={(e) => update('address', e.target.value)} placeholder="Straße, PLZ, Ort" />
                    </div>
                  </Reveal>
                  <Reveal delay={260}>
                    <div className="input-group">
                      <label>Weitere Informationen zur Immobilie</label>
                      <textarea value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Baujahr, Wohnfläche, Besonderheiten — je mehr Sie uns erzählen, desto präziser unsere Einschätzung." />
                    </div>
                  </Reveal>
                  <Reveal delay={320}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', marginTop: 16 }}>
                      <button type="submit" className="btn">
                        <span>Bewertung anfragen</span><span className="arrow">→</span>
                      </button>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.18em', color: 'var(--color-ink-faint)', textTransform: 'uppercase' }}>
                        Antwort innerhalb 24 h
                      </span>
                    </div>
                  </Reveal>
                </form>
              ) : (
                <div style={{ marginTop: 48, padding: 48, border: '1px solid var(--color-line)', background: 'var(--color-muted)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>✓ Anfrage erhalten</div>
                  <h2 className="t-h2" style={{ marginTop: 24 }}>Vielen Dank, <em>{form.name || '—'}</em>.</h2>
                  <p className="t-lead" style={{ marginTop: 24 }}>
                    Wir melden uns innerhalb von 24 Stunden. Bei dringenden Anfragen: <a href="tel:+4961512789400" style={{ color: 'var(--color-secondary)' }}>+49 6151 27 89 40</a>
                  </p>
                </div>
              )}
            </div>

            <div className="contact-card">
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Direkter Kontakt</div>
                <h3>Lieber direkt sprechen?</h3>
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
                <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                  IVD · BVFI<br />Mitglied seit 2003
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
