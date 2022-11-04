import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../redux/hooks";
import { useQuery } from "@tanstack/react-query";

const HotelDetailPhotos = () => {
  const { hotelId } = useAppSelector((state) => state.user.value.hotelSearch);

  const fetchHotelPhotos = async () => {
    const response = await axios
      .get(
        `https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=fr&hotel_id=${hotelId}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
          },
        }
      )
      .then((res) => res.data);

    return response;
  };

  const { isLoading, isError, data } = useQuery(
    ["HotelPhotos"],
    () => fetchHotelPhotos(),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <div>Loading...</div>;
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
