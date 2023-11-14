import { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface ICard extends LinkProps {
  name: string;
  img: string;
  rating: number;
  reviewCount: number;
  price: number;
}
export const Card: FC<ICard> = ({
  name,
  img,
  rating,
  reviewCount,
  price,
  className,
  ...props
}) => {
  return (
    <Link className={`${className} w-full h-full col gap-2`} {...props}>
      <img src={img} alt={name} className="rounded-lg" />
      <h2 className="font-bold">{name}</h2>
      <div className="flex gap-2">
        <span>{rating} Rating</span>
        <span>{reviewCount} Reviews</span>
      </div>
      <span className="block">${price}</span>
    </Link>
  );
};
