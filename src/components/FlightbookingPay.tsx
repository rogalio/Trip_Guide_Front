import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import FlightStripeCheckoutForm from "./FlightStripeCheckoutForm";

const FlightbookingPay = () => {
  const { priceBase, priceTax, priceTotal } = useAppSelector(
    (state) => state.flight.value.flightInfoDeparture
  );

  const {
    priceBase: priceBaseReturn,
    priceTax: priceTaxReturn,
    priceTotal: priceTotalReturn,
  } = useAppSelector((state) => state.flight.value.flightInfoReturn);
  const dispatch = useAppDispatch();

  const totaltax: number = priceTax + priceTaxReturn;
  const totalBase: number = priceBase + priceBaseReturn;
  const serviceFee: number = Math.trunc(totalBase * 0.05);
  const total: number = totaltax + totalBase + serviceFee;

  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<any>("");

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
      const { data } = await axios.post("http://localhost:4000/hotel/pay", {
        amount: total,
      });

      setClientSecret(data.clientSecret);
      // dispatch(addPaymentId(clientSecret));
      console.log(clientSecret, "client secret");
    };
    getStripeSecretKey();
  }, []);

  return (
    <div className="px-6 pt-8 dark:bg-c1 ">
      <div className="max-w-5xl mx-auto border-[1px] border-c7 rounded-xl p-4 font-DmSans dark:bg-c2 dark:border-c3 shadow-lg">
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <FlightStripeCheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default FlightbookingPay;
