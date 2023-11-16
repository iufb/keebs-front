import { FC } from "react";
import { Card } from "../Card/Card";

interface ICatalog {
  //TODO : Conditional types
  items: any[];
}
export const Catalog: FC<ICatalog> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-2">
      {items.map((item) => (
        // TODO: Rating and review
        <Card
          key={item._id}
          to={item._id}
          img={item.images[0]}
          name={item.name}
          price={item.price}
          rating={5}
          reviewCount={5}
        />
      ))}
    </div>
  );
};
