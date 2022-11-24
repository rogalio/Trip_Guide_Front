import React from "react";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AirlinesIcon from "@mui/icons-material/Airlines";

const FlightListingTIme = ({ info }: any) => {
  return (
    <div className="flex gap-4 my-2 ">
      {info.info.connection_count >= 2 ? (
        <div className="flex items-center gap-2 text-c4 dark:text-c5">
          <AirlineStopsIcon className="text-sm " />
          <p className="font-medium text-c3 dark:text-c5">
            {info.info.connection_count - 1} escales
          </p>
        </div>
      ) : (
        <p className="font-medium text-c3 dark:text-c5">Sans escale</p>
      )}
      <div className="flex items-center gap-2 text-c4 dark:text-c5">
        <HourglassEmptyIcon className="text-sm" />
        <p className="font-medium text-c3 dark:text-c5">
          {info.info.duration.slice(3, 8).split(":").join("h")}
        </p>
      </div>
      <div className="flex items-center gap-2 text-c3 dark:text-c5">
        <AirlinesIcon className="text-sm" />
        <p className="font-medium text-c3 dark:text-c5">{info.airline.name}</p>
      </div>
    </div>
  );
};

export default FlightListingTIme;
