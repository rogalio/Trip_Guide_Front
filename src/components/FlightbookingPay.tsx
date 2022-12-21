import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import FlightStipeElement from "./FlightStipeElement";

const FlightbookingPay = () => {
  const { priceBase, priceTax } = useAppSelector(
    (state) => state.flight.value.flightInfoDeparture
  );

  const { priceBase: priceBaseReturn, priceTax: priceTaxReturn } =
    useAppSelector((state) => state.flight.value.flightInfoReturn);

  const totaltax: number = priceTax + priceTaxReturn;
  const totalBase: number = priceBase + priceBaseReturn;
  const serviceFee: number = Math.trunc(totalBase * 0.05);
  const total: number = totaltax + totalBase + serviceFee;

  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<any>("");

  // use usecallback to check if user is authenticated

  // fetch stripe public_key from server
  useEffect(() => {
    const getStripeKey = async () => {
      const { data } = await axios.get("http://localhost:4000/config");
      setStripePromise(loadStripe(data.publishableKey));
      loadStripe(data.publishableKey);
    };
    getStripeKey();
  }, []);

  // fetch stripe secret_key from server
  useEffect(() => {
    const getStripeSecretKey = async () => {
      const { data } = await axios.post("http://localhost:4000/flight/pay", {
        amount: total,
      });
      setClientSecret(data.clientSecret);
    };
    getStripeSecretKey();
  }, []);

  return (
    <FlightStipeElement
      stripePromise={stripePromise}
      clientSecret={clientSecret}
    />
  );
};

export default FlightbookingPay;
