import React from "react";
import { useLocation } from "react-router-dom";
import HotelDetailPhotos from "../components/HotelDetailPhotos";
import HotelDetailTop from "../components/HotelDetailTop";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addHotelId, addHotelInfo } from "../redux/UserSlice";
import HotelDetailHighlight from "../components/HotelDetailHighlight";
import HotelDetailFacilities from "../components/HotelDetailFacilities";
import HotelDetailRoomsAvailable from "../components/HotelDetailRoomsAvailable";

const HotelDetail = () => {
  const location = useLocation();
  const { hotelId, hotelInfo } = location.state;

  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();
  dispatch(addHotelInfo(hotelInfo));
  dispatch(addHotelId(hotelId));
  console.log(user);

  return (
    <div className="mx-8 ">
      <HotelDetailTop />
      <HotelDetailPhotos />
      <HotelDetailHighlight />
      <HotelDetailFacilities />
      <HotelDetailRoomsAvailable />
    </div>
  );
};

export default HotelDetail;
