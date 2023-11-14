import { Card } from "@/components/Card/Card";
import { useAllKeyboards } from "@/hooks/useAllKeyboards";

const KeyboardsPage = () => {
  const { data: keyboards, isLoading } = useAllKeyboards();
  return (
    <section className="w-full h-full">
      {isLoading && <div>laoding</div>}
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-2">
        {keyboards &&
          keyboards.map((keeb) => (
            // TODO: Rating and review
            <Card
              to={keeb._id}
              img={keeb.images[0].image}
              name={keeb.name}
              price={keeb.price}
              rating={5}
              reviewCount={5}
            />
          ))}
      </div>
    </section>
  );
};
export default KeyboardsPage;
