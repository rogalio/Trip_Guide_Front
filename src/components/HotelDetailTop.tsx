import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FlagIcon from "@mui/icons-material/Flag";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

const Test1 = () => {
  const user = useAppSelector((state) => state.user.value);

  return (
    <div className="max-w-5xl mx-auto mt-6 font-Poppins">
      <h1 className="text-2xl font-semibold">
        {user.hotelSearch.hotelInfo.hotelName}
      </h1>
      <div className="flex gap-8 mt-4">
        <div className="flex items-center gap-2 text-sm font-medium text-c3">
          <StarIcon className="text-lg text-[#FFC542] " />
          <p>
            {user.hotelSearch.hotelInfo.hotelReviewScore}, (
            {user.hotelSearch.hotelInfo.hotelReviewNr})
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-c4">
          <FlagIcon className="text-lg text-c3" />
          <p>
            {user.hotelSearch.hotelInfo.hotelCity},{" "}
            {user.hotelSearch.hotelInfo.hotelCountry}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test1;
