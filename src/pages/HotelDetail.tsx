import React, { useState } from "react";
import HotelDetailPhotos from "../components/HotelDetailPhotos";
import HotelDetailTop from "../components/HotelDetailTop";
import HotelDetailHighlight from "../components/HotelDetailHighlight";
import HotelDetailFacilities from "../components/HotelDetailFacilities";
import HotelDetailRoomsAvailable from "../components/HotelDetailRoomsAvailable";

const HotelDetail = () => {
  const [displayRomm, setDisplayRoom] = useState(false);

  const handleDisplay = () => {
    setDisplayRoom((prevDisplayRoom) => !prevDisplayRoom);
  };

  return (
    <div className="dark:bg-c1">
      <div className="max-w-5xl px-8 mx-auto -mt-6 dark:bg-c1 ">
        <HotelDetailTop />
        <HotelDetailPhotos />
        <HotelDetailHighlight />
        <HotelDetailFacilities />
        {displayRomm ? (
          <HotelDetailRoomsAvailable />
        ) : (
          <button
            onClick={handleDisplay}
            className="font-Poppins font-medium text-c8 p-2 rounded-xl bg-[#145CE6] mt-2  "
          >
            Show rooms
          </button>
        )}
      </div>
    </div>
  );
};

export default HotelDetail;
