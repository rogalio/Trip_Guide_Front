import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { addFlightInfoDepartureCompany } from "../redux/FlightSlice";
import { CompanyType } from "../util/Typescript";

const FlightListingBookBtn = ({ flight, info, company }: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBookFlight = () => {
    dispatch(addFlightInfoDepartureCompany(company));
    navigate("/flight/return");
  };

  return (
    <div className="flex items-center gap-4 md:mr-4 dark:text-c6 ">
      <p className="font-semibold dark:text-c5">
        {flight.price_details.display_total_fare_per_ticket} $
      </p>
      <button
        onClick={handleBookFlight}
        className=" bg-[#316BFF] text-c9 p-1 md:p-2 rounded-lg"
      >
        Book now
      </button>
    </div>
  );
};

export default FlightListingBookBtn;
