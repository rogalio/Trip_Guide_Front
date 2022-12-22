import HotelBookPay from "../components/HotelBookPay";
import HotelBookReview from "../components/HotelBookReview";

const HotelBookResa = () => {
  return (
    <div className=" md:pt-36 md:pb-24 dark:bg-c1">
      <div className="flex flex-col-reverse justify-between max-w-5xl px-8 mx-auto md:flex-row md:gap-10 dark:bg-c1">
        <HotelBookPay />
        <HotelBookReview />
      </div>
    </div>
  );
};

export default HotelBookResa;
