import HomePage from '@/components/pages/HomePage';

export const metadata = {
  title: 'FOX Immobilien · Darmstadt · Rhein-Main',
  description: 'Inhabergeführtes Immobilienhaus in Darmstadt. Premium-Verkauf und WEG-Verwaltung im Rhein-Main-Gebiet seit 1998 – Familie Meenenga.',
  alternates: { canonical: 'https://www.fox-da.de/' },
  openGraph: {
    title: 'FOX Immobilien · Darmstadt · Rhein-Main',
    description: 'Inhabergeführtes Immobilienhaus in Darmstadt. Premium-Verkauf und WEG-Verwaltung im Rhein-Main-Gebiet seit 1998 – Familie Meenenga.',
    url: 'https://www.fox-da.de/',
  },
  twitter: {
    title: 'FOX Immobilien · Darmstadt · Rhein-Main',
    description: 'Inhabergeführtes Immobilienhaus in Darmstadt. Premium-Verkauf und WEG-Verwaltung seit 1998 – Familie Meenenga.',
  },
};

export default function Page() {
  return <HomePage />;
}
