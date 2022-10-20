import React, { useState, useEffect } from "react";
import { useGetHotelPhotosQuery } from "../redux/TopTourApi";
import { useAxiosFetch } from "../customHooks/useAxiosFetch";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";

const HotelDetailPhotos = () => {
  // wait useAppSelector to get the hotelId to be fetch from redux store

  const user = useAppSelector((state) => state.user.value);
  const { hotelId } = user.hotelSearch;

  // const [data, setData] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState<Boolean>(true);

  const { data, error, loaded } = useAxiosFetch(
    `https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=fr&hotel_id=${hotelId}`
  );

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=fr&hotel_id=${hotelId}`,
  //       {
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
  //           "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  //         },
  //       }
  //     )
  //     .then((response: any) => {
  //       setData(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // }, [hotelId]);

  // const { data, error, isLoading } = useGetHotelPhotosQuery({
  //   hotelId: user.hotelSearch.hotelId,
  // });

  // if (error) {
  //   return <div>Something went wrong, please refresh</div>;
  // }

  // if (isLoading) {
  //   return <p>loading</p>;
  // }
  // console.log(data, "photo");

  if (loaded) {
    return error ? (
      <div>Something went wrong, please refresh</div>
    ) : (
      <div>
        <div className="flex max-w-5xl gap-4 mx-auto mt-4 overflow-x-scroll">
          {data.slice(0, 5).map((photo: any) => (
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

  // return (
  //   <div className="flex max-w-5xl gap-4 mx-auto mt-4 overflow-x-scroll">
  //     {data.slice(0, 5).map((photo: any) => (
  //       <img
  //         src={photo.url_max}
  //         alt={photo.photo_caption}
  //         className="w-[400px] h-[400px] object-cover rounded-2xl drop-shadow-xl"
  //       />
  //     ))}
  //   </div>
  // );
};

export default HotelDetailPhotos;
