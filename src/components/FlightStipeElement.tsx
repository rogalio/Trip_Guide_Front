import { Elements } from "@stripe/react-stripe-js";
import FlightStripeCheckoutForm from "./FlightStripeCheckoutForm";

const FlightStipeElement = ({ stripePromise, clientSecret }: any) => {
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

export default FlightStipeElement;
