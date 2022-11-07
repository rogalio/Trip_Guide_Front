import React from "react";
import { useGetHotelFacilitiesQuery } from "../redux/TopTourApi";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchHotelFacilities } from "../util/axiosApiFetch";

const HotelDetailFacilities = () => {
  const { hotelId } = useAppSelector((state) => state.user.value.hotelSearch);

  const { isLoading, isError, data } = useQuery(
    ["HotelFacilities"],
    () => fetchHotelFacilities(hotelId),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: please refresh</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-6 font-DmSans">
      <p className="text-lg font-medium dark:text-[#316BFF] ">Hotel Features</p>
      <hr className="border-b-[1px] mt-1 mb-4 border-c6 m w-1/4" />
      <div className="flex flex-col gap-2 md:flex-wrap md:flex-row md:pr-6 ">
        {data?.slice(0, 10).map((facilities: any) => (
          <p className="p-1 px-4 text-sm shadow-sm cursor-pointer bg-c6 text-c2 w-fit rounded-xl hover:bg-c7 dark:text-c8 dark:bg-c2 dark:hover:bg-c4 ">
            {facilities.facility_name}
          </p>
        ))}
      </div>
      <hr className="border-b-[1px] mt-6 mb-4 border-c6 m w-1/4 " />
    </div>
  );
};

export default HotelDetailFacilities;
