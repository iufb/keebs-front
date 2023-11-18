import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { useGetProduct } from "@/hooks/useGetProduct";
import { useParams } from "react-router-dom";

const KeycapPage = () => {
  const { id } = useParams();
  if (!id) return <div>Bad id provided</div>;
  const { data, isLoading } = useGetProduct("keycap", id);
  return (
    <div>
      {/* TODO:loading */}
      {isLoading && <div>Loaidng</div>}
      {data && <ImageGallery images={data.images} />}
    </div>
  );
};
export default KeycapPage;
