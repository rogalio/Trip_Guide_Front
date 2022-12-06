import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { addFlightInfoReturn } from "../redux/FlightSlice";
import { InfoType } from "../util/Typescript";
import { log } from "console";

const FlightListingBookBtn2 = ({ flight, info }: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const flightInfo: InfoType = {
    companyName: flight.slice_data.slice_0.airline.name,
    logo: flight.slice_data.slice_0.airline.logo,
    aircraft: flight.slice_data.slice_0.flight_data.flight_0.info.aircraft,
    flightNumber: flight.slice_data.slice_0.flight_data.flight_0.info.brand_id,
    class: flight.slice_data.slice_0.flight_data.flight_0.info.cabin_name,
    duration: info.info.duration.slice(3, 8).split(":").join("h"),
    departureCity: info.departure.airport.city,
    departureAirport: info.departure.airport.code,
    departureAirportName: info.departure.airport.name,
    departureTime: info.departure.datetime.time_24h,
    departureDate: info.departure.datetime.date,
    arrivalAirport: info.arrival.airport.code,
    arrivalAirportName: info.arrival.airport.name,
    arrivalTime: info.arrival.datetime.time_24h,
    arrivalDate: info.arrival.datetime.date,
    arrivalCity: info.arrival.airport.city,
    stop: info.info.connection_count,
    departureDateString:
      flight.slice_data.slice_0.departure.datetime.date_display,
    arrivalDateString: flight.slice_data.slice_0.arrival.datetime.date_display,
    priceBase: flight.price_details.source_base_fare,
    priceTax: flight.price_details.source_taxes_and_fees,
    priceTotal: flight.price_details.source_total_fare_per_ticket,
  };

  const handleBookFlight = () => {
    console.log(info);

    dispatch(addFlightInfoReturn(flightInfo));
    navigate("/flight/review");
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

export default FlightListingBookBtn2;
