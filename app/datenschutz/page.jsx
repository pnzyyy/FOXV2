import { DatenschutzPage } from '@/components/pages/LegalPages';

export const metadata = {
  title: 'Datenschutz · FOX Immobilien GmbH',
  description: 'Datenschutzerklärung der FOX Immobilien GmbH gemäß DSGVO. Rheinstraße 41, 64283 Darmstadt.',
  alternates: { canonical: 'https://www.fox-da.de/datenschutz' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DatenschutzPage />;
}
