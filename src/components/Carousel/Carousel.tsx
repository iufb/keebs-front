import { FC, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { Button } from "../ui/button";

interface ICarousel {
  items: Record<string, string>[];
}
export const Carousel: FC<ICarousel> = ({ items }) => {
  const [selected, setSelected] = useState<number>(0);
  const next = () => {
    if (selected == items.length - 1) {
      setSelected(0);
    } else {
      setSelected((prev) => prev + 1);
    }
  };
  const back = () => {
    if (selected == 0) {
      setSelected(items.length - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };
  return (
    <div className="relative rounded-md">
      {items.map((item, index) => (
        <CarouselItem
          hidden={index !== selected}
          img={item.img}
          name={item.name}
          desc={item.desc}
          key={index}
        />
      ))}
      <div className="flex absolute gap-5 right-[10vw] -bottom-5">
        <Button variant="icon" onClick={back}>
          <svg
            className="w-8 h-8"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
        <Button variant="icon" onClick={next}>
          <svg
            className="w-8 h-8"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
