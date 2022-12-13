import React from "react";
import { FormEvent } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const FlightStripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | undefined>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // metre le bon redirect
        return_url: "http://localhost:3000/flight/confirm",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        className="flex w-full mt-4 rounded-ld"
        disabled={isProcessing || !stripe || !elements}
      >
        <span className=" bg-[#316BFF] text-c9 p-4 w-full rounded-lg  font-bold text-base">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default FlightStripeCheckoutForm;
