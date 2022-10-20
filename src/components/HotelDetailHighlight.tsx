import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";

const HotelDetailHighlight = () => {
  const user = useAppSelector((state) => state.user.value);

  const [hotelDescription, setHotelDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(
        `https://booking-com.p.rapidapi.com/v1/hotels/description?hotel_id=${user.hotelSearch.hotelId}&locale=fr`,
        {
          headers: {
            "X-RapidAPI-Key":
              "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
          },
        }
      )
      .then((response) => {
        setHotelDescription(response.data.description);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.hotelSearch.hotelId]);

  return isLoading ? (
    <p>is loading</p>
  ) : (
    <div className="max-w-5xl mx-auto mt-6 font-Poppins">
      <div className="flex items-center gap-2">
        <p className="bg-[#D5E1D6] p-1 text-[#38B245] font-base  text-sm rounded-lg shadow-sm px-2">
          {user.hotelSearch.hotelInfo.review_score}
        </p>
        <p className="bg-[#E8DECF] p-1 text-[#FD9704] font-base  text-sm rounded-lg shadow-sm px-2">
          {user.hotelSearch.hotelInfo.review_score_word}
        </p>
        <p className="bg-[#EAEEFA] p-1 text-[#0B3BA7] font-base  text-sm rounded-lg shadow-sm px-2">
          {user.hotelSearch.hotelInfo.accommodation_type_name}
        </p>
        {user.hotelSearch.hotelInfo.is_free_cancellable === 1 && (
          <p className="bg-[#D5E1D6] p-1 text-[#38B245] font-base  text-sm rounded-lg shadow-sm px-2">
            Free cancellable
          </p>
        )}
      </div>

      <div className="mt-6">
        <h1 className="text-xl font-semibold ">
          {
            user.hotelSearch.hotelInfo.unit_configuration_label.split(
              "<br/>"
            )[0]
          }
        </h1>
        <p className="mt-2 text-md text-c4">
          {user.hotelSearch.hotelInfo.city_trans},{" "}
          {user.hotelSearch.hotelInfo.country_trans}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-base font-semibold text-c4v ">Description</p>
        <hr className="border-b-[1px] border-c6 mt-1 w-1/4" />
        <p className="mt-4 text-sm font-medium text-c4">
          {hotelDescription.slice(0, 200)} ...
        </p>
      </div>
    </div>
  );
};
export default HotelDetailHighlight;
