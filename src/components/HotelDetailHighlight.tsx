import { useAppSelector } from "../redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { fetchHotelHighlight } from "../util/axiosApiFetch";

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

  const { isLoading, isError, data } = useQuery(
    ["HotelHighlight"],
    () => fetchHotelHighlight(hotelId),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error please refresh</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-6 font-Poppins">
      <div className="flex items-center gap-2">
        <p className="bg-[#D5E1D6] dark:bg-c3 p-1 text-[#38B245] dark:text-c6 font-base  text-sm rounded-lg shadow-sm px-2">
          {hotelReviewScore}
        </p>
        <p className="bg-[#E8DECF] dark:bg-c3 p-1 text-[#FD9704] dark:text-c6 font-base  text-sm rounded-lg shadow-sm px-2">
          {hotelReviewScoreWord}
        </p>
        <p className="bg-[#EAEEFA] dark:bg-c3 p-1 text-[#0B3BA7] dark:text-c6 font-base  text-sm rounded-lg shadow-sm px-2">
          {hotelAccommodationType}
        </p>
        {hotelCancellation === 1 && (
          <p className="bg-[#D5E1D6] dark:bg-c3 p-1 text-[#38B245] dark:text-c6 font-base  text-sm rounded-lg shadow-sm px-2">
            Free cancellable
          </p>
        )}
      </div>

      <div className="mt-6">
        <h1 className="text-xl font-semibold dark:text-c9 ">
          {hotelUnitConfiguration.split("<br/>")[0]}
        </h1>
        <p className="mt-2 text-md text-c4 dark:text-c5">
          {hotelCity}, {hotelCountry}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-base font-semibold text-c4v dark:text-[#316BFF]">
          Description
        </p>
        <hr className="border-b-[1px] border-c6 mt-1 w-1/4" />
        <p className="mt-4 text-sm font-medium text-c4 dark:text-c5">
          {data.description.slice(0, 200)} ...
        </p>
      </div>
    </div>
  );
};
export default HotelDetailHighlight;
