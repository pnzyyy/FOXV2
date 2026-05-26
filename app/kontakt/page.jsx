import KontaktPage from '@/components/pages/KontaktPage';

export const metadata = {
  title: 'Kontakt · FOX Immobilien Darmstadt',
  description: 'FOX Immobilien Darmstadt kontaktieren. Telefon: 06151 151522. Rheinstraße 41, 64283 Darmstadt. Mo–Fr 09–18 Uhr. Marktwertanalyse, Verkauf, Verwaltung.',
  alternates: { canonical: 'https://www.fox-da.de/kontakt' },
  openGraph: {
    title: 'Kontakt · FOX Immobilien Darmstadt',
    description: 'FOX Immobilien GmbH, Rheinstraße 41, 64283 Darmstadt. 06151 151522. Persönlich, vertraulich, ohne Newsletter.',
    url: 'https://www.fox-da.de/kontakt',
  },
};

export default function Page() {
  return <KontaktPage />;
}
