import { Catalog } from "@/components/Catalog/Catalog";
import { useAllKeycaps } from "@/hooks/useAllKeycaps";

const KeycapsCatalogPage = () => {
  const { data: keycaps, isLoading } = useAllKeycaps();
  return (
    <section className="w-full h-full">
      {isLoading && <div>laoding</div>}
      {keycaps && <Catalog items={keycaps} img={keycaps[0].images[0]} />}
    </section>
  );
};
export default KeycapsCatalogPage;
