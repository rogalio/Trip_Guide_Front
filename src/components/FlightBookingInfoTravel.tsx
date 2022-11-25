import React from "react";
import helikapteri from "../asset/helikapter.png";

const FlightBookingInfoTravel = ({
  logo,
  companyName,
  flightNumber,
  departureDate,
  departureTime,
  departureCity,
  departureAirportName,
  duration,
  arrivalTime,

  arrivalDate,
  arrivalCity,
  arrivalAirportName,
}: any) => {
  return (
    <div className="flex flex-col justify-between p-4 md:flex-row">
      <div className="flex gap-4 md:w-1/4">
        <img
          src={logo}
          alt="logo"
          className="object-cover w-16 h-12 dark:rounded-xl "
        />
        <div>
          <p className="text-base font-medium dark:text-c7">{companyName}</p>
          <p className="font-medium text-c4 dark:text-c5">{flightNumber}</p>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between mt-6 md:mt-0 md:w-3/4">
        <div className="text-sm font-medium text-c4 dark:text-c5">
          <p className="mb-2 text-xl font-medium text-c3 dark:text-c7">
            {departureTime}
          </p>
          <p>{departureDate.split("-").join(" ")}</p>
          <p>{departureCity}</p>
          <p>{departureAirportName.slice(0, 15)}</p>
        </div>
        {/*  */}
        <div className="flex-col items-center hidden md:flex">
          <p className="text-base font-medium text-c4 dark:text-c7">
            {duration}min
          </p>
          <img src={helikapteri} alt="flight png" />
        </div>
        {/*  */}
        <div className="text-sm font-medium text-c4 dark:text-c5">
          <p className="mb-2 text-xl font-medium text-c3 dark:text-c7">
            {arrivalTime}
          </p>
          <p>{arrivalDate.split("-").join(" ")}</p>
          <p>{arrivalCity}</p>
          <p>{arrivalAirportName.slice(0, 15)}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingInfoTravel;
