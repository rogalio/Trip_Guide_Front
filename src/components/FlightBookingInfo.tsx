import React from "react";
import FlightBookingInfoDeparture from "./FlightBookingInfoDeparture";
import FlightBookingInfoReturn from "./FlightBookingInfoReturn";

const FlightBookingInfo = () => {
  return (
    <div>
      <FlightBookingInfoDeparture />
      <FlightBookingInfoReturn />
    </div>
  );
};

export default FlightBookingInfo;
