import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { addFlightInfoDepartureCompany } from "../redux/FlightSlice";
import { CompanyType } from "../util/Typescript";

const FlightListingBookBtn2 = ({ flight, info }: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const company: CompanyType = {
  //   name: flight.slice_data.slice_0.airline.name,
  //   logo: flight.slice_data.slice_0.airline.logo,
  //   aircraft: flight.slice_data.slice_0.flight_data?.flight_0.info.aircraft,
  // };

  const handleBookFlight = () => {
    // console.log(flight, "flightInbutton");
    console.log(
      flight.slice_data.slice_0.airline.name,
      flight.slice_data.slice_0.airline.logo,
      flight.slice_data.slice_0.flight_data.flight_0.info.aircraft
    );

    // dispatch(addFlightInfoDepartureCompany(company));

    // dispatch(addFlightInfoDepartureInfo({
    //   flightNumber: flight.slice_data.slice_0.flight_data.flight_0.flight_number,
    // }))
    // navigate("/flight/return");
  };

  // console.log(info, "btn2");
  // console.log(flight, "flightbtn2");

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

export default FlightListingBookBtn2;
