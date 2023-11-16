import { Catalog } from "@/components/Catalog/Catalog";
import { useAllSwitches } from "@/hooks/useAllSwitches";

const SwitchesCatalogPage = () => {
  const { data: switches, isLoading } = useAllSwitches();
  return (
    <section className="w-full h-full">
      {isLoading && <div>laoding</div>}
      {switches && <Catalog items={switches} />}
    </section>
  );
};
export default SwitchesCatalogPage;
