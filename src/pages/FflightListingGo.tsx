import { useAppSelector } from "../redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { fetchFlightDeparture } from "../util/axiosApiFetch";
import FlightListingStep from "../components/FlightListingStep";
import FlightListingTIme from "../components/FlightListingTIme";
import FlightListingBookBtn from "../components/FlightListingBookBtn";
import { fetchFlightReturn } from "../util/axiosApiFetch";
import Loader from "../components/Loader";

const FflightListing = () => {
  const { checkIn, checkOut, whereIata, toIata } = useAppSelector(
    (state) => state.flight.value.flightSearch
  );

  const { isLoading, isError, data } = useQuery(["FlightListGo"], () =>
    fetchFlightDeparture(checkIn, whereIata, toIata)
  );

  useQuery(["FlightListreturn"], () =>
    fetchFlightReturn(checkOut, whereIata, toIata)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="justify-center max-w-5xl mx-auto font-DmSans dark:bg-c1">
        Error: please refresh
      </div>
    );
  }

  return (
    <div className=" dark:bg-c1">
      <div className="justify-center max-w-5xl mx-auto font-DmSans dark:bg-c1">
        {Object.values(data?.itinerary_data)
          .slice(0, 15)
          .map((flight: any) => {
            return (
              <div>
                {Object.values(flight.slice_data).map((info: any) => {
                  return (
                    <div className="flex ">
                      <div className="flex flex-col gap-2 rounded-lg md:hover:scale-95 md:transition-350 border-[1px] p-1 border-c7 w-full mx-2 bg-c9 mt-4 shadow-md dark:bg-c2 dark:border-c2 ">
                        <div className="flex items-center justify-between gap-4 ">
                          <img
                            className="object-cover w-12 h-12 p-1 dark:rounded-full"
                            src={info.airline.logo}
                            alt=""
                          />
                          <FlightListingStep info={info} />
                          <div className="hidden md:flex md:w-[45%] ">
                            <FlightListingTIme info={info} />
                          </div>

                          <FlightListingBookBtn flight={flight} info={info} />
                        </div>
                        <div className="flex: md:hidden ">
                          <FlightListingTIme info={info} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FflightListing;
