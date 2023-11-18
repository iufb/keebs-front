import { IKeyboardColor } from "@/api/keyboard/keyboard.type";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";

interface IColorSelector
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colors: IKeyboardColor[];
}
export const ColorSelector: FC<IColorSelector> = ({ colors }) => {
  const [selected, setSelected] = useState(colors[0].name);
  return (
    <>
      <div>Color : {selected}</div>
      <div className="flex gap-5">
        {colors.map((color, idx) => {
          return (
            <span
              key={idx}
              className={` rounded-full p-1 border-[3px] 
${selected == color.name ? "border-accent-green" : "border-white"}
              `}
            >
              <span
                style={{
                  backgroundColor: color.hex,
                }}
                className={` block  cursor-pointer w-10 h-10 rounded-full `}
                onClick={() => setSelected(color.name)}
              />
            </span>
          );
        })}
      </div>
    </>
  );
};
