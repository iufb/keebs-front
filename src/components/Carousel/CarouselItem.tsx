import Animate from "@charlesvien/react-animatecss";
import { FC } from "react";
import { Button } from "../ui/button";
interface ICarouselItem {
  img: string;
  name: string;
  desc: string;
  hidden: boolean;
}
export const CarouselItem: FC<ICarouselItem> = ({
  img,
  name,
  desc,
  hidden,
}) => (
  <Animate className={`${hidden ? "hidden" : "flex"}  `}>
    <img src={img} alt={name} className="rounded-lg" />
    <div className="flex flex-col justify-center gap-4 items-center absolute -translate-x-1/2 left-1/2 top-1/2 text-white">
      <Animate animationIn="fadeInUp" animationOut="fadeOutUp" inDelay={350}>
        <h2 className="text-4xl">{name}</h2>
      </Animate>

      <Animate animationIn="fadeInUp" animationOut="fadeOutUp" inDelay={500}>
        <p className="text-lg">{desc}</p>
      </Animate>

      <Animate animationIn="fadeInUp" animationOut="fadeOutUp" inDelay={700}>
        <Button variant="outlined">SHOP NOW</Button>
      </Animate>
    </div>
  </Animate>
);
