import React from "react";
import { useLocation } from "react-router-dom";
import HotelBookPay from "../components/HotelBookPay";
import HotelBookReview from "../components/HotelBookReview";
import { useAppDispatch } from "../redux/hooks";
import { addRoomSelected } from "../redux/UserSlice";

const HotelBookResa = () => {
  return (
    <div className="flex flex-col-reverse mx-8">
      <HotelBookPay />
      <HotelBookReview />
    </div>
  );
};

export default HotelBookResa;
