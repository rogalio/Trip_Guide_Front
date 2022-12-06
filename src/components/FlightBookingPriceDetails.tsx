import React from "react";
import { useAppSelector } from "../redux/hooks";

const FlightBookingPriceDetails = () => {
  const { priceBase, priceTax, priceTotal } = useAppSelector(
    (state) => state.flight.value.flightInfoDeparture
  );

  const {
    priceBase: priceBaseReturn,
    priceTax: priceTaxReturn,
    priceTotal: priceTotalReturn,
  } = useAppSelector((state) => state.flight.value.flightInfoReturn);

  const totaltax: number = priceTax + priceTaxReturn;
  const totalBase: number = priceBase + priceBaseReturn;
  const serviceFee: number = Math.trunc(totalBase * 0.05);
  const total: number = totaltax + totalBase + serviceFee;

  console.log(priceBase, priceBaseReturn);

  return (
    <div className="mt-8 border-[1px] border-c7 rounded-xl p-4 shadow-lg font-DmSans dark:bg-c2 dark:border-c3 mx-6 lg:mx-0">
      <div className="flex flex-col gap-2 text-sm font-medium dark:text-c8">
        <h1 className="text-lg font-medium dark:text-c8 ">Price Details</h1>
        <div className="flex justify-between text-sm font-medium ">
          <p className="text-c4 dark:text-c5">x1 Passenger</p>
          <p>{totalBase} $</p>
        </div>
        <div className="flex justify-between">
          <p className="text-c4 dark:text-c5">Tax</p>
          <p>{totaltax} $</p>
        </div>
        <div className="flex justify-between">
          <p className="text-c4 dark:text-c5">Service fee</p>
          <p>{serviceFee} $</p>
        </div>
        <div className="flex justify-between bg-[#F0F8FF] rounded-md dark:bg-c3 ">
          <p className="text-c4 dark:text-c5">Total</p>
          <p>{total} $</p>
        </div>
      </div>
      <hr className="my-2 text-c6" />
      <div className="text-sm font-medium dark:text-c8">
        <h1 className="mb-2 text-lg font-medium">Check in baggage</h1>
        <div className="flex justify-between">
          <p className="text-c4 dark:text-c5">Departure</p>
          <p className="text-c4 dark:text-c5">2 bags (20 Kg)</p>
        </div>
        <div className="flex justify-between">
          <p className="text-c4 dark:text-c5">Return</p>
          <p className="text-c4 dark:text-c5">2 bags (20 Kg)</p>
        </div>
      </div>
      <hr className="my-2 text-c6" />
      <div className="text-sm font-medium dark:text-c8 ">
        <h1 className="mt-2 text-lg font-medium">Services</h1>
        <p className="text-c4 dark:text-c5">No extra services selected</p>
      </div>
    </div>
  );
};

export default FlightBookingPriceDetails;
