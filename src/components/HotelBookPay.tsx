import React, { useState, useEffect } from "react";
import visa from "../asset/visa.png";
import mastercard from "../asset/mastercard.png";
import paypal from "../asset/paypal.png";
import amex from "../asset/amex.png";
import HotelStripeCheckoutForm from "./HotelStripeCheckoutForm";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { log } from "console";
import { addPaymentId } from "../redux/UserSlice";
import HotelReviewInfo from "./HotelReviewInfo";

const HotelBookPay = () => {
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<any>("");

  const TotalPriceToPay = Math.round(user.hotelSearch.payment);

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
        amount: TotalPriceToPay,
      });

      setClientSecret(data.clientSecret);
      console.log(clientSecret, "client secret");
    };
    getStripeSecretKey();
  }, []);

  dispatch(addPaymentId(clientSecret));
  console.log(user);

  return (
    <div className="md:w-1/2 font-DmSans">
      <div className="hidden md:block">
        <HotelReviewInfo />
      </div>

      <h2 className="mt-4 mb-2 text-xl font-medium md:mb-4 text-c1 dark:text-c6">
        Credit Cards
      </h2>

      <div className="flex gap-1 mb-4">
        <img
          className=" w-20 h-10 px-2 object-contain border-[1px] rounded-lg border-c6 dark:bg-c6 "
          src={visa}
          alt="visa"
        />
        <img
          className="object-contain w-20 h-10 py-1 px-3 border-[1px] rounded-lg border-c6 dark:bg-c6"
          src={mastercard}
          alt=""
        />
        <img
          className="object-contain w-20 h-10 px-3 border-[1px] rounded-lg border-c6 dark:bg-c6"
          src={paypal}
          alt=""
        />
        <img
          className="object-contain w-20 h-10 px-3 border-[1px] rounded-lg border-c6 dark:bg-c6"
          src={amex}
          alt=""
        />
      </div>
      <h2 className="mt-4 mb-2 text-lg font-medium md:mb-2 text-c1 dark:text-c6 ">
        Mettre une serie de "42" pour carte de test
      </h2>

      <div>
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <HotelStripeCheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default HotelBookPay;
