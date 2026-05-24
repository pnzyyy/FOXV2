import { ImpressumPage } from '@/components/pages/LegalPages';

export const metadata = {
  title: 'Impressum · FOX Immobilien GmbH',
  description: 'Impressum der FOX Immobilien GmbH, Rheinstraße 41, 64283 Darmstadt. Angaben gemäß § 5 TMG.',
  alternates: { canonical: 'https://www.fox-da.de/impressum' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ImpressumPage />;
}
