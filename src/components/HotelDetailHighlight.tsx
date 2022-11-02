import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";

const HotelDetailHighlight = () => {
  const { hotelId } = useAppSelector(
    (state: any) => state.user.value.hotelSearch
  );
  const {
    hotelReviewScore,
    hotelReviewScoreWord,
    hotelAccommodationType,
    hotelCancellation,
    hotelUnitConfiguration,
    hotelCity,
    hotelCountry,
  } = useAppSelector((state: any) => state.user.value.hotelSearch.hotelInfo);

  const [hotelDescription, setHotelDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(
        `https://booking-com.p.rapidapi.com/v1/hotels/description?hotel_id=${hotelId}&locale=fr`,
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
  }, [hotelId]);

  return isLoading ? (
    <p>is loading</p>
  ) : (
    <div className="max-w-5xl mx-auto mt-6 font-Poppins">
      <div className="flex items-center gap-2">
        <p className="bg-[#D5E1D6] p-1 text-[#38B245] font-base  text-sm rounded-lg shadow-sm px-2">
          {hotelReviewScore}
        </p>
        <p className="bg-[#E8DECF] p-1 text-[#FD9704] font-base  text-sm rounded-lg shadow-sm px-2">
          {hotelReviewScoreWord}
        </p>
        <p className="bg-[#EAEEFA] p-1 text-[#0B3BA7] font-base  text-sm rounded-lg shadow-sm px-2">
          {hotelAccommodationType}
        </p>
        {hotelCancellation === 1 && (
          <p className="bg-[#D5E1D6] p-1 text-[#38B245] font-base  text-sm rounded-lg shadow-sm px-2">
            Free cancellable
          </p>
        )}
      </div>

      <div className="mt-6">
        <h1 className="text-xl font-semibold ">
          {hotelUnitConfiguration.split("<br/>")[0]}
        </h1>
        <p className="mt-2 text-md text-c4">
          {hotelCity}, {hotelCountry}
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
