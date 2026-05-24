/* global React, ReactDOM,
   RouterProvider, useRouter, Nav, Footer,
   HomePage, VerkaufPage, VerwaltungPage, ObjektePage, ObjektDetailPage,
   UeberUnsPage, KontaktPage, ImpressumPage, DatenschutzPage */
const { useEffect: useEffectApp } = React;

const BASE_TITLE = "FOX Immobilien · Darmstadt";

const PAGE_MAP = {
  "home":        { Comp: () => <HomePage />,               darkNav: true,  title: "FOX Immobilien · Darmstadt · Rhein-Main" },
  "verkauf":     { Comp: () => <VerkaufPage />,             darkNav: false, title: "Immobilienverkauf · FOX Immobilien Darmstadt" },
  "verwaltung":  { Comp: () => <VerwaltungPage />,          darkNav: false, title: "Immobilienverwaltung · FOX Immobilien Darmstadt" },
  "objekte":     { Comp: () => <ObjektePage />,             darkNav: false, title: "Aktuelle Objekte · FOX Immobilien Darmstadt" },
  "objekt":      { Comp: (p) => <ObjektDetailPage slug={p[0]} />, darkNav: true,  title: "Objekt · FOX Immobilien Darmstadt" },
  "ueber-uns":   { Comp: () => <UeberUnsPage />,            darkNav: false, title: "Über uns · FOX Immobilien · Familie Meenenga" },
  "kontakt":     { Comp: () => <KontaktPage />,             darkNav: false, title: "Kontakt & Marktwertanalyse · FOX Immobilien" },
  "impressum":   { Comp: () => <ImpressumPage />,           darkNav: false, title: "Impressum · FOX Immobilien GmbH" },
  "datenschutz": { Comp: () => <DatenschutzPage />,         darkNav: false, title: "Datenschutz · FOX Immobilien GmbH" },
};

function PageSwitcher() {
  const { route } = useRouter();
  const entry = PAGE_MAP[route.path] || PAGE_MAP["home"];

  useEffectApp(() => {
    document.title = entry.title || BASE_TITLE;
  }, [route.path]);

  return (
    <>
      <Nav darkOnTop={entry.darkNav} />
      <main key={route.path + "/" + route.params.join("/")} className="route-mount">
        {entry.Comp(route.params)}
      </main>
      <Footer />
    </>
  );
}

function App() {
  useEffectApp(() => {
    if (!window.location.hash) window.location.hash = "/home";
  }, []);
  return (
    <RouterProvider>
      <PageSwitcher />
    </RouterProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
