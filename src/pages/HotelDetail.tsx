import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HotelDetailPhotos from "../components/HotelDetailPhotos";
import HotelDetailTop from "../components/HotelDetailTop";
import { useAppSelector } from "../redux/hooks";
import HotelDetailHighlight from "../components/HotelDetailHighlight";
import HotelDetailFacilities from "../components/HotelDetailFacilities";
import HotelDetailRoomsAvailable from "../components/HotelDetailRoomsAvailable";

const HotelDetail = () => {
  const [displayRomm, setDisplayRoom] = useState(false);

  const handleDisplay = () => {
    setDisplayRoom((prevDisplayRoom) => !prevDisplayRoom);
  };

  return (
    <div className="mx-8 ">
      <HotelDetailTop />
      <HotelDetailPhotos />
      <HotelDetailHighlight />
      <HotelDetailFacilities />
      {displayRomm ? (
        <HotelDetailRoomsAvailable />
      ) : (
        <button onClick={handleDisplay}>Show rooms</button>
      )}
    </div>
  );
};

export default HotelDetail;
