import React, { useState, useEffect } from "react";
import { useGetHotelPhotosQuery } from "../redux/TopTourApi";
import { useAxiosFetch } from "../customHooks/useAxiosFetch";
import { useAppSelector } from "../redux/hooks";

const HotelDetailPhotos = () => {
  const { hotelId } = useAppSelector((state) => state.user.value.hotelSearch);

  const { data, error, isLoading } = useGetHotelPhotosQuery({
    hotelId,
  });

  if (!isLoading) {
    return error ? (
      <div>Something went wrong, please refresh</div>
    ) : (
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
  }
  return <p>loading</p>;
};

export default HotelDetailPhotos;
