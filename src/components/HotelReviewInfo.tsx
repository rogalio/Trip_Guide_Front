import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HotelReviewInfo = () => {
  const { checkIn, checkOut, numOfGuests } = useAppSelector(
    (state) => state.user.value.hotelSearch
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-[#F4F4F6] rounded-lg p-2 dark:bg-c3">
        <p className="text-base font-semibold text-c1 dark:text-c7">Date</p>
        <div className="flex items-center gap-1 ">
          <p className="mt-1 text-base text-c4 font-medum dark:text-c6">
            {checkIn.split("-").join(" ")}{" "}
          </p>

          <ArrowForwardIosIcon className="mt-1 text-sm text-c4" />
          <p className="mt-1 text-base text-c4 font-medum dark:text-c6">
            {checkOut.split("-").join(" ")}
          </p>
        </div>
      </div>
      <div className="bg-[#F4F4F6] dark:bg-c3 rounded-lg p-2">
        <p className="text-base font-semibold text-c1 dark:text-c7">
          Traveller
        </p>
        <p className="mt-1 text-base text-c4 font-medum dark:text-c6">
          {numOfGuests} Passenger
        </p>
      </div>
    </div>
  );
};

export default HotelReviewInfo;
