import MarktwertanalysePage from '@/components/pages/MarktwertanalysePage';

export const metadata = {
  title: 'Kostenfreie Marktwertanalyse Darmstadt',
  description: 'Kostenfreie Immobilienbewertung in Darmstadt & Rhein-Main. FOX Immobilien ermittelt den Marktwert Ihrer Immobilie — vertraulich, persönlich, unverbindlich. Ergebnis in 14 Tagen.',
  alternates: { canonical: 'https://www.fox-da.de/marktwertanalyse' },
  openGraph: {
    title: 'Kostenfreie Marktwertanalyse · FOX Immobilien Darmstadt',
    description: 'Fundierte Marktwertermittlung Ihrer Immobilie in Darmstadt. Persönlich, kostenfrei, unverbindlich. Familie Meenenga seit 1998.',
    url: 'https://www.fox-da.de/marktwertanalyse',
  },
};

export default function Page() {
  return <MarktwertanalysePage />;
}
