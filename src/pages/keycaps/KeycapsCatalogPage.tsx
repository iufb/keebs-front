import { Catalog } from "@/components/Catalog/Catalog";
import { useAllKeycaps } from "@/hooks/useAllKeycaps";

const KeycapsCatalogPage = () => {
  const { data: keycaps, isLoading } = useAllKeycaps();
  return (
    <section className="w-full h-full">
      {isLoading && <div>laoding</div>}
      {keycaps && <Catalog items={keycaps} />}
    </section>
  );
};
export default KeycapsCatalogPage;
