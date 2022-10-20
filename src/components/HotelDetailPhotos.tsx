import React from "react";
import { useGetHotelPhotosQuery } from "../redux/TopTourApi";
import { useAppSelector } from "../redux/hooks";

const HotelDetailPhotos = () => {
  const user = useAppSelector((state) => state.user.value);

  const { data, error, isLoading } = useGetHotelPhotosQuery({
    hotelId: user.hotelSearch.hotelId,
  });

  if (error) {
    return <div>Something went wrong, please refresh</div>;
  }

  if (isLoading) {
    return <p>loading</p>;
  }
  console.log(data, "photo");

  return (
    <div className="flex max-w-5xl gap-4 mx-auto mt-4 overflow-x-scroll">
      {data.slice(0, 5).map((photo: any) => (
        <img
          src={photo.url_max}
          alt={photo.photo_caption}
          className="w-[400px] h-[400px] object-cover rounded-2xl drop-shadow-xl"
        />
      ))}
    </div>
  );
};

export default HotelDetailPhotos;
