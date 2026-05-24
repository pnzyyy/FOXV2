import UeberUnsPage from '@/components/pages/UeberUnsPage';

export const metadata = {
  title: 'Über uns · Familie Meenenga',
  description: 'FOX Immobilien GmbH – inhabergeführt durch Familie Meenenga seit 1998. Zwei Generationen, ein Haus: Jörn und Michel Meenenga. Darmstadt & Rhein-Main.',
  alternates: { canonical: 'https://www.fox-da.de/ueber-uns' },
  openGraph: {
    title: 'Über uns · Familie Meenenga · FOX Immobilien',
    description: 'FOX Immobilien: inhabergeführt seit 1998. Jörn Meenenga (Gründer) und Michel Meenenga (Junior GF). Ihr Immobilienhaus in Darmstadt.',
    url: 'https://www.fox-da.de/ueber-uns',
  },
};

export default function Page() {
  return <UeberUnsPage />;
}
