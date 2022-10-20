import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addPayment } from "../redux/UserSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

const HotelBookReview = () => {
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  console.log(user);

  //   calculate day & price
  const date1: Date = new Date(user.hotelSearch.checkIn);
  const date2: Date = new Date(user.hotelSearch.checkOut);
  const Difference_In_Time: number = date2.getTime() - date1.getTime();
  const Difference_In_Days: number = Difference_In_Time / (1000 * 3600 * 24);
  const TotalNightWithoutFee: number =
    Difference_In_Days *
    user.hotelSearch.roomSelected.product_price_breakdown.gross_amount_per_night
      .value;
  const ServiceFee: number = TotalNightWithoutFee * 0.05;
  const TotalNightWithFee: number = TotalNightWithoutFee + ServiceFee;

  dispatch(addPayment(TotalNightWithFee));
  return (
    <div className=" font-DmSans">
      <div className="flex flex-col gap-3">
        <div className="bg-[#F4F4F6] rounded-lg p-2">
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
      </div>

      <div className="p-2 mt-4 border-2 rounded-lg border-c6">
        <div>
          <h2 className="text-lg font-medium text-c1">
            {user.hotelSearch.hotelInfo.hotel_name_trans}
          </h2>
          <div className="flex items-center gap-1 mt-1 text-sm font-medium">
            <StarIcon className="text-[#FFC107] text-md" />
            <p>{user.hotelSearch.hotelInfo.review_score}</p>
            <p className="text-c4">
              ({user.hotelSearch.hotelInfo.review_nr} reviews)
            </p>
          </div>
        </div>

        <img
          className="mt-4 rounded-lg"
          src={user.hotelSearch.hotelInfo.max_photo_url}
          alt="hotel_image"
        />

        <div className="flex flex-col gap-1">
          <h2 className="mt-5 text-xl font-medium">Booked details</h2>
          <div className="flex justify-between ">
            <div className="flex gap-2 text-base font-medium text-c4">
              <p>
                {user.hotelSearch.roomSelected.product_price_breakdown.gross_amount_per_night.value.toFixed(
                  2
                )}{" "}
                €
              </p>
              <p>+ {Difference_In_Days} nights</p>
            </div>
            <p className="font-bold text-c2">
              {TotalNightWithoutFee.toFixed(2)} €
            </p>
          </div>
          <div className="flex justify-between gap-2 text-base font-medium text-c4">
            <p>Taxe and fee (included)</p>
            <p className="font-bold text-c2">
              {user.hotelSearch.roomSelected.product_price_breakdown.included_taxes_and_charges_amount.value.toFixed(
                2
              )}{" "}
              €
            </p>
          </div>
          <div className="flex justify-between gap-2 text-base font-medium text-c4">
            <p>Sevice fee</p>
            <p className="font-bold text-c2">{ServiceFee.toFixed(2)} €</p>
          </div>
          <div className="flex justify-between gap-2 mt-2 text-base font-medium text-c4">
            <p>Total</p>
            <p className="font-bold text-c2">
              {TotalNightWithFee.toFixed(2)} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookReview;
