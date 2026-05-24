import '../styles.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const BASE_URL = 'https://www.fox-da.de';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'FOX Immobilien · Darmstadt · Rhein-Main',
    template: '%s · FOX Immobilien Darmstadt',
  },
  description: 'Inhabergeführtes Immobilienhaus in Darmstadt. Premium-Verkauf und WEG-Verwaltung im Rhein-Main-Gebiet seit 1998 – Familie Meenenga.',
  authors: [{ name: 'FOX Immobilien GmbH' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    siteName: 'FOX Immobilien',
    locale: 'de_DE',
    images: [{ url: '/assets/fox-logo-bw.png', width: 1002, height: 448, alt: 'FOX Immobilien Logo' }],
  },
  twitter: { card: 'summary_large_image', images: ['/assets/fox-logo-bw.png'] },
  other: {
    'geo.region': 'DE-HE',
    'geo.placename': 'Darmstadt',
    'geo.position': '49.8728;8.6512',
    'ICBM': '49.8728, 8.6512',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'FOX Immobilien',
  legalName: 'FOX Immobilien GmbH',
  description: 'Inhabergeführtes Immobilienhaus in Darmstadt. Premium-Verkauf und WEG-Verwaltung im Rhein-Main-Gebiet seit 1998.',
  url: BASE_URL,
  logo: `${BASE_URL}/assets/fox-logo-bw.png`,
  image: `${BASE_URL}/assets/fox-logo-bw.png`,
  telephone: '+49-6151-27-89-40',
  email: 'meenenga@fox-da.de',
  foundingDate: '1998',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rheinstraße 41',
    addressLocality: 'Darmstadt',
    postalCode: '64283',
    addressRegion: 'Hessen',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '49.8728', longitude: '8.6512' },
  hasMap: 'https://maps.google.com/?q=Rheinstraße+41,+64283+Darmstadt',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '00:00', closes: '00:00', description: 'Nach Vereinbarung' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Darmstadt' },
    { '@type': 'AdministrativeArea', name: 'Rhein-Main-Gebiet' },
    { '@type': 'State', name: 'Hessen' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Immobiliendienstleistungen',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Immobilienverkauf', description: 'Premium-Immobilienverkauf mit 360°-Touren, Drohnenaufnahmen und cineastischen Vermarktungsvideos. Zulassung §34c GewO.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WEG-Verwaltung', description: 'Professionelle Verwaltung von Wohnungseigentümergemeinschaften seit 1998. Zertifiziert nach §26a Abs. 1 WEG.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mietverwaltung', description: 'Vollständige kaufmännische und technische Verwaltung von Mietwohnungen und Gewerbeobjekten.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kostenfreie Marktwertanalyse', description: 'Fundierte Marktwertermittlung Ihrer Immobilie – vertraulich, kostenfrei und unverbindlich.' } },
    ],
  },
  employee: [
    { '@type': 'Person', name: 'Jörn Meenenga', jobTitle: 'Senior Geschäftsführer & Gründer', worksFor: { '@type': 'Organization', name: 'FOX Immobilien' }, knowsAbout: ['Immobilienmakler §34c GewO', 'WEG-Verwaltung', 'Rhein-Main Immobilienmarkt'] },
    { '@type': 'Person', name: 'Michel Meenenga', jobTitle: 'Junior Geschäftsführer', worksFor: { '@type': 'Organization', name: 'FOX Immobilien' }, knowsAbout: ['Zertifizierter Verwalter §26a WEG', 'Digitales Immobilienmarketing', 'Drohnenaufnahmen'] },
  ],
  memberOf: [
    { '@type': 'Organization', name: 'IVD – Immobilienverband Deutschland' },
    { '@type': 'Organization', name: 'BVFI – Bundesverband für die Immobilienwirtschaft' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" prefix="og: https://ogp.me/ns#">
      <head>
        <meta name="theme-color" content="#1A1D21" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/assets/fox-mark-bw.png" />
        <link rel="apple-touch-icon" href="/assets/fox-mark-bw.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
