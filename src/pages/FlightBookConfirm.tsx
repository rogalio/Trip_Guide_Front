import React from "react";
import FlightBookingInfo from "../components/FlightBookingInfo";

const FlightBookConfirm = () => {
  return (
    <div className="dark:bg-c1">
      <div className="max-w-5xl mx-auto dark:bg-c1 font-DmSans">
        <h1 className="px-6 pt-4 text-lg font-medium dark:text-c8">
          Your trip has been booked !
        </h1>
        <FlightBookingInfo />
      </div>
    </div>
  );
};

export default FlightBookConfirm;
