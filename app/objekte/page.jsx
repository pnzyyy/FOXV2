import ObjektePage from '@/components/pages/ObjektePage';

export const metadata = {
  title: 'Aktuelle Objekte · Immobilien Darmstadt',
  description: 'Exklusive Immobilien zum Kauf in Darmstadt & Rhein-Main. FOX Immobilien: kuratiertes Portfolio aus Villen, Penthäuser, Stadthäuser und Anwesen. Nur verfügbare Objekte.',
  alternates: { canonical: 'https://www.fox-da.de/objekte' },
  openGraph: {
    title: 'Aktuelle Objekte · FOX Immobilien Darmstadt',
    description: 'Exklusive Immobilien in Darmstadt: Villen, Penthäuser, Stadthäuser und Off-Market-Objekte. Nur verfügbare Immobilien.',
    url: 'https://www.fox-da.de/objekte',
  },
};

export default function Page() {
  return <ObjektePage />;
}
