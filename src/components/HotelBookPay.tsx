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
    <div className="font-DmSans">
      <h2>Credit Cards</h2>

      <div className="flex gap-1">
        <img
          className=" w-20 h-10 px-2 object-contain border-[1px] rounded-lg border-c6 "
          src={visa}
          alt="visa"
        />
        <img
          className="object-contain w-20 h-10 py-1 px-3 border-[1px] rounded-lg border-c6"
          src={mastercard}
          alt=""
        />
        <img
          className="object-contain w-20 h-10 px-3 border-[1px] rounded-lg border-c6"
          src={paypal}
          alt=""
        />
        <img
          className="object-contain w-20 h-10 px-3 border-[1px] rounded-lg border-c6"
          src={amex}
          alt=""
        />
      </div>

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
