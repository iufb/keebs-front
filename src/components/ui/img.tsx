import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";

interface IImage
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
}
export const CustomImage: FC<IImage> = ({ className, src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = new Image();
  useEffect(() => {
    imgSrc.src = src;
    imgSrc.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className=" max-w-lg max-h-lg">
      {/* TODO: LOADIng */}
      {isLoading ? (
        <div className="h-full min-h-[400px] rounded-md max-w-lg max-h-lg  bg-gray-100" />
      ) : (
        <img className={className} src={src} alt={alt} {...props} />
      )}
    </div>
  );
};
