import { IImage } from "@/api/keyboard/keyboard.type";
import { getImg } from "@/utils/getImg";
import {
  type DetailedHTMLProps,
  type FC,
  type HTMLAttributes,
  useState,
} from "react";

interface IImageGallery
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: string[] | IImage[];
}
export const ImageGallery: FC<IImageGallery> = ({ images }) => {
  const [selected, setSelected] = useState(0);
  const changeImage = (idx: number) => {
    setSelected(idx);
  };
  const baseImage = getImg(images, selected);
  return (
    <div className="flex gap-x-5">
      <div className="col gap-2">
        {images.map((img, idx) => {
          let i;
          if (typeof img == "string") {
            i = img;
          } else {
            i = img.image;
          }
          console.log(i);
          return (
            <img
              src={i}
              className="w-20 h-20 rounded-lg"
              key={idx}
              onClick={() => changeImage(idx)}
            />
          );
        })}
      </div>
      <img src={baseImage} className="max-w-[920px] rounded-lg" />
    </div>
  );
};
