import ObjektDetailPage from '@/components/pages/ObjektDetailPage';
import { LISTINGS } from '@/lib/data';

export async function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const obj = LISTINGS.find(l => l.slug === params.slug) || LISTINGS[0];
  return {
    title: `${obj.title} · FOX Immobilien`,
    description: `${obj.type} in ${obj.location}. ${obj.size} m², ${obj.rooms} Zimmer, Baujahr ${obj.year}. ${obj.price}. Exklusiv bei FOX Immobilien Darmstadt.`,
    alternates: { canonical: `https://www.fox-da.de/objekte/${obj.slug}` },
    openGraph: {
      title: `${obj.title} · FOX Immobilien`,
      description: `${obj.type}, ${obj.location}. ${obj.size} m² · ${obj.rooms} Zimmer · ${obj.price}`,
      url: `https://www.fox-da.de/objekte/${obj.slug}`,
    },
  };
}

export default function Page({ params }) {
  return <ObjektDetailPage slug={params.slug} />;
}
