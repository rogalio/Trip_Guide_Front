import React from "react";
import { useGetHotelFacilitiesQuery } from "../redux/TopTourApi";
import { useAppSelector } from "../redux/hooks";

const HotelDetailFacilities = () => {
  const hotelSearch = useAppSelector((state) => state.user.value.hotelSearch);
  const { data, error, isLoading } = useGetHotelFacilitiesQuery({
    hotelId: hotelSearch.hotelId,
  });

  return isLoading ? (
    <p>is loading </p>
  ) : (
    <div className="max-w-5xl mx-auto mt-6 font-DmSans">
      <p className="text-lg font-medium ">Hotel Features</p>
      <hr className="border-b-[1px] mt-1 mb-4 border-c6 m w-1/4" />
      <div className="flex flex-col gap-2">
        {data?.slice(0, 10).map((facilities: any) => (
          <p className="p-1 px-4 text-sm shadow-sm cursor-pointer bg-c6 text-c2 w-fit rounded-xl hover:bg-c7 ">
            {facilities.facility_name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HotelDetailFacilities;
