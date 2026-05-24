import WegVerwaltungPage from '@/components/pages/WegVerwaltungPage';

export const metadata = {
  title: 'WEG-Verwaltung Darmstadt',
  description: 'Professionelle WEG-Verwaltung in Darmstadt und Rhein-Main. FOX Immobilien: zertifiziert nach §26a WEG, persönlicher Ansprechpartner, inhabergeführt seit 1998.',
  alternates: { canonical: 'https://www.fox-da.de/weg-verwaltung' },
  openGraph: {
    title: 'WEG-Verwaltung Darmstadt · FOX Immobilien',
    description: 'Wohnungseigentümergemeinschaften professionell verwalten lassen. §26a WEG zertifiziert. 28 Jahre Erfahrung. Darmstadt & Rhein-Main.',
    url: 'https://www.fox-da.de/weg-verwaltung',
  },
};

export default function Page() {
  return <WegVerwaltungPage />;
}
