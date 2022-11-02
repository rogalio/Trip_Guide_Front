import StarIcon from "@mui/icons-material/Star";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { resetState } from "../redux/UserSlice";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { Link } from "react-router-dom";

const HotelBookSuccess = () => {
  const { checkIn, checkOut, numOfGuests, payment, paymentId } = useAppSelector(
    (state: any) => state.user.value.hotelSearch
  );
  const {
    hotelName,
    hotelReviewScore,
    hotelReviewNr,
    hotelUnitConfiguration,
    hotelImg,
  } = useAppSelector((state: any) => state.user.value.hotelSearch.hotelInfo);
  const dispatch = useAppDispatch();

  const resetReduxStore = () => {
    dispatch(resetState());
  };

  return (
    <div className="px-8 bg-c8 font-DmSans">
      <div>
        <div className="pt-4 text-c3">
          <h3 className="text-xl font-medium ">Congratulations !</h3>
          <h1 className="mt-4 text-3xl font-medium">
            Your trip has been booked !
          </h1>
          <hr className="border-[1px]  border-c6 mt-4" />
        </div>

        <div>
          <h3 className="mt-4 text-xl font-medium">{hotelName}</h3>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1 text-sm font-medium">
              <StarIcon className="text-[#FFC107] text-md" />
              <p>{hotelReviewScore}</p>
              <p className="text-c4">({hotelReviewNr} reviews)</p>
            </div>
            <p className="text-sm font-medium">
              {hotelUnitConfiguration.split("<br/>")[0]}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <img className="mt-4 rounded-lg" src={hotelImg} alt="hotel_image" />
          <div className="bg-[#F4F4F6] rounded-lg p-2">
            <p className="text-base font-semibold text-c1">Date</p>
            <div className="flex items-center gap-1">
              <p className="mt-1 text-base text-c4 font-medum">
                {checkIn.split("-").join(" ")}{" "}
              </p>

              <ArrowForwardIosIcon className="mt-1 text-sm text-c4" />
              <p className="mt-1 text-base text-c4 font-medum">
                {checkOut.split("-").join(" ")}
              </p>
            </div>
          </div>
          <div className="bg-[#F4F4F6] rounded-lg p-2">
            <p className="text-base font-semibold text-c1">Traveller</p>
            <p className="mt-1 text-base text-c4 font-medum">
              {numOfGuests} Passenger
            </p>
          </div>
        </div>

        <div className="bg-[#F4F4F6] rounded-lg p-2  mt-4">
          <h3 className="text-2xl font-medium ">Reserve details</h3>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 text-c4">
                <RecentActorsIcon />
                <p className="text-base ">Booking code</p>
              </div>
              <p className="text-base font-medium ">{paymentId.slice(0, 12)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 text-c4">
                <CalendarMonthIcon />
                <p className="text-base ">Date</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-medium ">
                  {checkIn.split("-").join(" ")}
                </p>
                <p>&gt;</p>
                <p className="text-sm font-medium ">
                  {checkOut.split("-").join(" ")}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 text-c4">
                <PointOfSaleIcon />
                <p className="text-base ">total</p>
              </div>
              <p className="text-base font-medium ">{payment.toFixed(2)} €</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 text-c4">
                <CreditScoreIcon />
                <p className="text-base ">Payment method</p>
              </div>
              <p className="mb-2 text-base font-medium">Credit card</p>
            </div>
          </div>
        </div>
        <Link to="/" onClick={resetReduxStore}>
          <button className=" bg-[#316BFF] text-c9 mt-4 p-2 rounded-lg w-full">
            {" "}
            Go to your Home{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotelBookSuccess;
