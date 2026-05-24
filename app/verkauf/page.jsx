import VerkaufPage from '@/components/pages/VerkaufPage';

export const metadata = {
  title: 'Immobilienverkauf Darmstadt',
  description: 'Premium-Immobilienverkauf im Rhein-Main-Gebiet. FOX Immobilien: 360°-Touren, Drohnenaufnahmen, cineastische Vermarktungsvideos. §34c GewO seit 2004. Darmstadt.',
  alternates: { canonical: 'https://www.fox-da.de/verkauf' },
  openGraph: {
    title: 'Immobilienverkauf Darmstadt · FOX Immobilien',
    description: 'Fullservice-Vermarktung mit 360°-Touren, Drohnenaufnahmen und Vermarktungsvideo. §34c GewO. Inhabergeführt seit 1998.',
    url: 'https://www.fox-da.de/verkauf',
  },
};

export default function Page() {
  return <VerkaufPage />;
}
