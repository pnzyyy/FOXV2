import MietverwaltungPage from '@/components/pages/MietverwaltungPage';

export const metadata = {
  title: 'Mietverwaltung Darmstadt',
  description: 'Professionelle Mietverwaltung in Darmstadt & Rhein-Main. FOX Immobilien verwaltet Mehrfamilienhäuser, Gewerbeobjekte und Eigentumswohnungen. Inhabergeführt seit 1998.',
  alternates: { canonical: 'https://www.fox-da.de/mietverwaltung' },
  openGraph: {
    title: 'Mietverwaltung Darmstadt · FOX Immobilien',
    description: 'Mieter, Verträge, Nebenkostenabrechnung, Instandhaltung — alles aus einer Hand. 28 Jahre Erfahrung. Darmstadt & Rhein-Main.',
    url: 'https://www.fox-da.de/mietverwaltung',
  },
};

export default function Page() {
  return <MietverwaltungPage />;
}
