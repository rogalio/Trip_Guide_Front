import { useAppSelector } from "../redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { fetchHotelPhotos } from "../util/axiosApiFetch";
import Loader from "../components/Loader";

const HotelDetailPhotos = () => {
  const { hotelId } = useAppSelector((state) => state.hotel.value.hotelSearch);

  const { isLoading, isError, data } = useQuery(["HotelPhotos", hotelId], () =>
    fetchHotelPhotos(hotelId)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error please refresh</div>;
  }

  return (
    <div>
      <div className="flex max-w-5xl gap-4 mx-auto mt-4 overflow-x-scroll">
        {data?.slice(0, 5).map((photo: any) => (
          <img
            src={photo.url_max}
            alt={photo.photo_caption}
            className="w-[400px] h-[400px] object-cover rounded-2xl drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default HotelDetailPhotos;
