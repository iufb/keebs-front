import { FC } from "react";
import { Card } from "../Card/Card";
import { IKeyboard } from "@/api/keyboard/keyboard.type";
import { IKeycap } from "@/api/keycap/keycap.type";
import { ISwitches } from "@/api/switches/switches.type";

interface ICatalog<T extends IKeyboard | IKeycap | ISwitches> {
  items: T extends IKeyboard
    ? IKeyboard[]
    : T extends IKeycap
    ? IKeycap[]
    : ISwitches[];
}
export const Catalog: FC<ICatalog<IKeyboard | IKeycap | ISwitches>> = ({
  items,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-2">
      {items.map((item) => {
        // TODO: Rating and review
        let img;
        if (typeof item.images[0] == "string") {
          img = item.images[0];
        } else {
          img = item.images[0].image;
        }
        return (
          <Card
            key={item._id}
            to={item._id}
            img={img}
            name={item.name}
            price={item.price}
            rating={5}
            reviewCount={5}
          />
        );
      })}
    </div>
  );
};
