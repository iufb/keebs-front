import { ColorSelector } from "@/components/ColorSelector/ColorSelector";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { useGetKeyboardDetails } from "@/hooks/useGetKeyboardDetails";
import { useParams } from "react-router-dom";

const KeyboardPage = () => {
  const { id } = useParams();
  if (!id) return <div>Error</div>;
  const { data, isLoading, isError, error } = useGetKeyboardDetails(id);
  return (
    <div>
      {/* TODO:loading */}
      {isLoading && <div>Loaidng</div>}
      {data && (
        <main className="flex gap-x-20">
          <ImageGallery images={data.images} />
          <div className="col gap-3">
            <h1 className="text-[42px] font-bold font-roboto">{data.name}</h1>
            <p>{data.description}</p>
            <span className="text-2xl">${data.price}</span>
            {data.colors ? <ColorSelector colors={data.colors} /> : <></>}
          </div>
        </main>
      )}

      {isError && <div>Error {error.response.data.message}</div>}
    </div>
  );
};
export default KeyboardPage;
