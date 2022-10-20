import React from "react";
import { useAppSelector } from "../redux/hooks";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LuggageIcon from "@mui/icons-material/Luggage";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const HotelBookConfirm = () => {
  const user = useAppSelector((state) => state.user.value);
  console.log(user);
  return (
    <div className="px-8 pt-6 font-DmSans bg-c8 ">
      <div>
        <h2 className="text-lg font-medium text-c3">Congratulations !</h2>
        <h2 className="mt-4 text-3xl font-medium text-c3">
          Your trip has been booked
        </h2>
        <hr className="border-[1px] mt-2 text-c6" />
      </div>

      <div className="mt-5">
        <p className="text-[#23262F] text-2xl font-medium">
          {user.hotelSearch.hotelInfo.hotel_name_trans}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 ">
            <StarIcon className="text-[#FFC107] text-md" />
            <p className=" text-[#353945] text-sm font-bold">
              {user.hotelSearch.hotelInfo.review_score}
            </p>
            <p className="text-sm text-[#777E90] font-semibold">
              ({user.hotelSearch.hotelInfo.review_nr} reviews)
            </p>
          </div>
          <p className="text-[#353945] text-sm font-semibold">
            {user.hotelSearch.roomSelected.room_name}
          </p>
        </div>
      </div>

      <img
        className="mt-6 rounded-lg drop-shadow-md"
        src={user.hotelSearch.hotelInfo.max_photo_url}
        alt="hotel_photo"
      />

      <div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#F4F4F6] rounded-lg p-2 mt-4">
            <p className="text-base font-semibold text-c1">Date</p>
            <div className="flex items-center gap-1">
              <p className="mt-1 text-base text-c4 font-medum">
                {user.hotelSearch.checkIn.split("-").join(" ")}{" "}
              </p>

              <ArrowForwardIosIcon className="mt-1 text-sm text-c4" />
              <p className="mt-1 text-base text-c4 font-medum">
                {user.hotelSearch.checkOut.split("-").join(" ")}
              </p>
            </div>
          </div>
          <div className="bg-[#F4F4F6] rounded-lg p-2">
            <p className="text-base font-semibold text-c1">Traveller</p>
            <p className="mt-1 text-base text-c4 font-medum">
              {user.hotelSearch.numOfGuests} Passenger
            </p>
          </div>

          <div className="bg-[#F4F4F6] rounded-lg p-2 flex flex-col gap-2">
            <h3 className="text-[#23262F] text-2xl font-medium">
              Reserve details
            </h3>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1 font-medium text-md text-c4 ">
                <LuggageIcon />
                <p>Booking code</p>
              </div>
              <p className="text-[#353945] text-md font-medium">A remplir</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 font-medium text-md text-c4">
                <CreditScoreIcon />
                <p>Total</p>
              </div>
              <p className="text-[#353945] text-md font-medium">
                {
                  user.hotelSearch.roomSelected.product_price_breakdown
                    .all_inclusive_amount.value
                }{" "}
                €
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 font-medium text-md text-c4 ">
                <CreditCardIcon />
                <p>Payment method</p>
              </div>
              <p className="text-[#353945] text-md font-medium">Credit Card</p>
            </div>
          </div>

          <button className=" bg-[#316BFF] text-c9 py-3 rounded-lg mt-2 text-sm font-bold">
            Go To Your Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelBookConfirm;
