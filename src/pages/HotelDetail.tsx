import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HotelDetailPhotos from "../components/HotelDetailPhotos";
import HotelDetailTop from "../components/HotelDetailTop";
import { useAppSelector } from "../redux/hooks";
import HotelDetailHighlight from "../components/HotelDetailHighlight";
import HotelDetailFacilities from "../components/HotelDetailFacilities";
import HotelDetailRoomsAvailable from "../components/HotelDetailRoomsAvailable";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
      <button onClick={handleDisplay}>Display room</button>
      {displayRomm && <HotelDetailRoomsAvailable />}
    </div>
  );
};

export default HotelDetail;
