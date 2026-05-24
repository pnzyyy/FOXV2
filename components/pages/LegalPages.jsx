'use client';
import Reveal from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';

export function ImpressumPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="Pflichtangaben" title="Impressum." current="Impressum" />
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="legal-content">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>FOX Immobilien GmbH<br />Rheinstraße 41<br />64283 Darmstadt</p>
              <h3>Vertreten durch</h3>
              <p>Jörn Meenenga &amp; Michel Meenenga (Geschäftsführung)</p>
              <h3>Kontakt</h3>
              <p>Telefon: +49 6151 27 89 40<br />E-Mail: meenenga@fox-da.de</p>
              <h3>Registereintrag</h3>
              <p>Eintragung im Handelsregister<br />Registergericht: Amtsgericht Darmstadt<br />Registernummer: HRB 91 422</p>
              <h3>Umsatzsteuer-ID</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE 314 287 901</p>
              <h3>Aufsichtsbehörde</h3>
              <p>Magistrat der Wissenschaftsstadt Darmstadt<br />Bürger- und Ordnungsamt<br />Frankfurter Straße 71, 64293 Darmstadt</p>
              <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
              <p>Berufsbezeichnung: Immobilienmakler und Hausverwalter (Bundesrepublik Deutschland)<br />Erlaubnis nach § 34c GewO erteilt durch das Bürger- und Ordnungsamt Darmstadt<br />Es gelten folgende berufsrechtliche Regelungen: §§ 34c, 34i GewO, MaBV</p>
              <h3>Berufshaftpflichtversicherung</h3>
              <p>R+V Allgemeine Versicherung AG<br />Raiffeisenplatz 1, 65189 Wiesbaden<br />Räumlicher Geltungsbereich: Bundesrepublik Deutschland</p>
              <h3>Mitgliedschaften</h3>
              <p>IVD — Immobilienverband Deutschland<br />BVFI — Bundesverband für die Immobilienwirtschaft<br />Wirtschaftsförderung Region Rhein-Main e.V.</p>
              <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
              <p>Jörn Meenenga<br />Rheinstraße 41, 64283 Darmstadt</p>
              <h3>EU-Streitschlichtung</h3>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              <h3>Verbraucherstreitbeilegung</h3>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              <h3>Haftung für Inhalte</h3>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export function DatenschutzPage() {
  return (
    <div className="page-shell">
      <PageHeader eyebrow="Information gemäß DSGVO" title="Datenschutz." current="Datenschutz" />
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="legal-content">
              <h2>1. Verantwortlicher</h2>
              <p>FOX Immobilien GmbH, Rheinstraße 41, 64283 Darmstadt<br />Vertreten durch: Jörn Meenenga &amp; Michel Meenenga<br />E-Mail: datenschutz@fox-da.de</p>
              <h2>2. Allgemeine Hinweise</h2>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Wir behandeln Ihre Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften.</p>
              <h2>3. Datenerfassung auf dieser Website</h2>
              <h3>Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
              <h3>Kontaktformular</h3>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
              <h2>4. Cookies</h2>
              <p>Diese Website verwendet ausschließlich technisch notwendige Cookies. Wir verwenden keine Tracking- oder Marketing-Cookies. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
              <h2>5. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) und Beschwerde bei der zuständigen Aufsichtsbehörde (Art. 77).</p>
              <h2>6. SSL-Verschlüsselung</h2>
              <p>Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.</p>
              <h2>7. Aufbewahrungsdauer</h2>
              <p>Personenbezogene Daten werden so lange gespeichert, wie es für die Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben.</p>
              <h2>8. Beschwerderecht</h2>
              <p>Zuständige Aufsichtsbehörde: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
