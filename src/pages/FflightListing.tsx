import React from "react";
import { useAppSelector } from "../redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { fetchFlightDeparture } from "../util/axiosApiFetch";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const FflightListing = () => {
  const { checkIn, checkOut, whereIata, toIata } = useAppSelector(
    (state) => state.flight.value.flightSearch
  );

  const { isLoading, isError, data } = useQuery(
    ["FlightList"],
    () => fetchFlightDeparture(checkIn, whereIata, toIata),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: please refresh</div>;
  }

  return (
    <div className=" font-DmSans">
      {Object.values(data?.itinerary_data)
        .slice(0, 7)
        .map((flight: any) => {
          return (
            <div>
              <div className="flex">
                <p>{whereIata}</p>
                <ArrowRightAltIcon />
                <p>{toIata}</p>
              </div>
              <div></div>
            </div>
          );
        })}
    </div>
  );
};

export default FflightListing;
