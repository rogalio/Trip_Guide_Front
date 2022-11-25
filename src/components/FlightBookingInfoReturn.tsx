import React from "react";
import { useAppSelector } from "../redux/hooks";

import FlightBookingInfoHead from "./FlightBookingInfoHead";
import FlightBookingInfoTravel from "./FlightBookingInfoTravel";
import FlightBookingInfoDetails from "./FlightBookingInfoDetails";

const FlightBookingInfoReturn = () => {
  const {
    companyName,
    logo,
    aircraft,
    flightNumber,
    class: cabin,
    duration,
    departureCity,
    departureAirport,
    departureAirportName,
    departureDateString,
    departureTime,
    departureDate,
    arrivalAirport,
    arrivalAirportName,
    arrivalTime,
    arrivalDate,
    arrivalCity,
    stop,
  } = useAppSelector((state) => state.flight.value.flightInfoReturn);

  return (
    <div>
      <FlightBookingInfoHead
        departureCity={departureCity}
        arrivalCity={arrivalCity}
        stop={stop}
        duration={duration}
        cabin={cabin}
        departureDate={departureDate}
        departureDateString={departureDateString}
      />

      <FlightBookingInfoTravel
        logo={logo}
        companyName={companyName}
        flightNumber={flightNumber}
        departureTime={departureTime}
        departureDate={departureDate}
        departureCity={departureCity}
        departureAirportName={departureAirportName}
        duration={duration}
        arrivalTime={arrivalTime}
        arrivalDate={arrivalDate}
        arrivalCity={arrivalCity}
        arrivalAirportName={arrivalAirportName}
      />

      <FlightBookingInfoDetails aircraft={aircraft} />
    </div>
  );
};

export default FlightBookingInfoReturn;
