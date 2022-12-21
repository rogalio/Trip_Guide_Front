import React from "react";
import FlightBookingInfo from "../components/FlightBookingInfo";
import FlightbookingPay from "../components/FlightbookingPay";
import FlightBookingPriceDetails from "../components/FlightBookingPriceDetails";
import FlightBookingUserInfo from "../components/FlightBookingUserInfo";

const FlightBookingReview = () => {
  return (
    <div className="h-full dark:bg-c1">
      <div className="flex flex-col max-w-5xl mx-auto dark:bg-c1 lg:flex-row">
        <div className="lg:w-3/4">
          <FlightBookingInfo />
          <FlightBookingUserInfo />
          <FlightbookingPay />
        </div>
        <div className="lg:w-1/4">
          <FlightBookingPriceDetails />
        </div>
      </div>
    </div>
  );
};

export default FlightBookingReview;
