import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <img src="/assets/fox-logo-bw.png" alt="FOX Immobilien" className="fox-logo-img" style={{ height: 56, width: 'auto', filter: 'grayscale(1) invert(1)' }} />
            </div>
            <p className="footer-tagline">Familienunternehmen seit 1998. <em style={{ color: 'var(--color-secondary)' }}>Verwaltung mit Vorsprung. Verkauf mit Haltung.</em></p>
            <address style={{ marginTop: 36, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontStyle: 'normal' }}>
              Rheinstraße 41<br />64283 Darmstadt
            </address>
          </div>
          <div>
            <h4>Leistungen</h4>
            <ul>
              <li><Link href="/verkauf">Immobilienverkauf</Link></li>
              <li><Link href="/weg-verwaltung">WEG-Verwaltung</Link></li>
              <li><Link href="/mietverwaltung">Mietverwaltung</Link></li>
              <li><Link href="/marktwertanalyse">Marktwertanalyse</Link></li>
            </ul>
          </div>
          <div>
            <h4>Unternehmen</h4>
            <ul>
              <li><Link href="/ueber-uns">Über uns</Link></li>
              <li><Link href="/ueber-uns">Team</Link></li>
              <li><Link href="/objekte">Aktuelle Objekte</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:+49615151522">06151 151522</a></li>
              <li><a href="mailto:meenenga@fox-da.de">meenenga@fox-da.de</a></li>
              <li style={{ color: 'rgba(255,255,255,0.45)' }}>Mo–Fr · 09:00–18:00</li>
              <li style={{ marginTop: 20, color: 'rgba(255,255,255,0.55)' }}>IVD · BVFI Mitglied</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 FOX Immobilien · Inhabergeführt von Familie Meenenga seit 1998</div>
          <div className="footer-bottom-right">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
      <div className="footer-wordmark">FOX</div>
    </footer>
  );
}
