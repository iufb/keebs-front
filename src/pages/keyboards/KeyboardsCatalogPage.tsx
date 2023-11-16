import { Catalog } from "@/components/Catalog/Catalog";
import { useAllKeyboards } from "@/hooks/useAllKeyboards";

const KeyboardsCatalogPage = () => {
  const { data: keyboards, isLoading } = useAllKeyboards();
  return (
    <section className="w-full h-full">
      {isLoading && <div>laoding</div>}
      {keyboards && <Catalog items={keyboards} />}
    </section>
  );
};
export default KeyboardsCatalogPage;
