import { IImage } from "@/api/keyboard/keyboard.type";

export const getImg = (images: string[] | IImage[], idx: number) => {
  if (typeof images[idx] === "string") {
    return images[idx];
  } else if (typeof images[idx] === "object") {
    return images[idx].image;
  } else {
    return null;
  }
};
