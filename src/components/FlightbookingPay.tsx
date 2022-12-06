import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const FlightbookingPay = () => {
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

  const dispatch = useAppDispatch();

  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<any>("");

  return <div></div>;
};

export default FlightbookingPay;
