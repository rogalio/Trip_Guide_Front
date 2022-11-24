import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const FlightListingStep = ({ info, i }: any) => {
  return (
    <div className="flex w-32 p-2 rounded-lg dark:text-c9 " key={i}>
      <div>
        <p className="font-medium text-md ">
          {info.departure.datetime.time_24h}
        </p>
        <p className="text-sm font-medium text-c4 dark:text-c5 ">
          {info.departure.airport.code}
        </p>
      </div>
      <ArrowRightAltIcon />
      <div>
        <p className="font-medium text-md">{info.arrival.datetime.time_24h}</p>
        <p className="text-sm font-medium text-c4 dark:text-c5 ">
          {info.arrival.airport.code}
        </p>
      </div>
    </div>
  );
};

export default FlightListingStep;
