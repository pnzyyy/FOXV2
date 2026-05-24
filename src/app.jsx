/* global React, ReactDOM,
   RouterProvider, useRouter, Nav, Footer,
   HomePage, VerkaufPage, VerwaltungPage, ObjektePage, ObjektDetailPage,
   UeberUnsPage, KontaktPage, ImpressumPage, DatenschutzPage */
const { useEffect: useEffectApp } = React;

const PAGE_MAP = {
  "home": { Comp: () => <HomePage />, darkNav: true },
  "verkauf": { Comp: () => <VerkaufPage />, darkNav: false },
  "verwaltung": { Comp: () => <VerwaltungPage />, darkNav: false },
  "objekte": { Comp: () => <ObjektePage />, darkNav: false },
  "objekt": { Comp: (p) => <ObjektDetailPage slug={p[0]} />, darkNav: true },
  "ueber-uns": { Comp: () => <UeberUnsPage />, darkNav: false },
  "kontakt": { Comp: () => <KontaktPage />, darkNav: false },
  "impressum": { Comp: () => <ImpressumPage />, darkNav: false },
  "datenschutz": { Comp: () => <DatenschutzPage />, darkNav: false },
};

function PageSwitcher() {
  const { route } = useRouter();
  const entry = PAGE_MAP[route.path] || PAGE_MAP["home"];
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
