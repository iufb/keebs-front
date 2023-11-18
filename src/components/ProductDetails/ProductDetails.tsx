import { IKeyboard } from "@/api/keyboard/keyboard.type";
import { IKeycap } from "@/api/keycap/keycap.type";
import { ISwitches } from "@/api/switches/switches.type";
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from "react";

interface IProductDetails
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IKeyboard | IKeycap | ISwitches;
}
export const ProductDetails: FC<IProductDetails> = ({ product }) => {
  const colors = product.images.map((img) => {
    if (typeof img == "string") {
      return null;
    }
    if (!img.color) {
      return null;
    }
    return img.color;
  });
  return (
    <div className="col gap-3">
      <h1 className="text-[42px] font-bold font-roboto">{product.name}</h1>
      <span>{product.price}</span>
      <div className="flex gap-2">
        {colors && colors.map((color) => <span>{color}</span>)}
      </div>
    </div>
  );
};
