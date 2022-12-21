import React from "react";
import { useAppSelector } from "../redux/hooks";

import FlightBookingInfoHead from "./FlightBookingInfoHead";
import FlightBookingInfoTravel from "./FlightBookingInfoTravel";
import FlightBookingInfoDetails from "./FlightBookingInfoDetails";

const FlightBookingInfoDeparture = () => {
  const {
    companyName,
    logo,
    aircraft,
    flightNumber,
    class: cabin,
    duration,
    departureCity,
    departureAirportName,
    departureDateString,
    departureTime,
    departureDate,
    arrivalAirportName,
    arrivalTime,
    arrivalDate,
    arrivalCity,
    stop,
  } = useAppSelector((state) => state.flight.value.flightInfoDeparture);

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

export default FlightBookingInfoDeparture;
