import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addRoomSelected } from "../redux/UserSlice";
import DoneIcon from "@mui/icons-material/Done";
import { useQuery } from "@tanstack/react-query";
import { fetchHotelRoomsAvailable } from "../util/axiosApiFetch";

const HotelDetailRoomsAvailable = () => {
  const { checkIn, checkOut, numOfGuests, hotelId } = useAppSelector(
    (state) => state.user.value.hotelSearch
  );

  const { isLoading, isError, data } = useQuery(
    ["HotelRoomsAvailable"],
    () => fetchHotelRoomsAvailable(checkIn, checkOut, numOfGuests, hotelId),
    { refetchOnWindowFocus: false }
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBookNow = (block: any): void => {
    dispatch(
      addRoomSelected({
        amountPerNight:
          block.product_price_breakdown.gross_amount_per_night.value,
        amountWithTax:
          block.product_price_breakdown.included_taxes_and_charges_amount.value,
        amountTotal: block.product_price_breakdown.all_inclusive_amount.value,
        roomName: block.room_name,
      })
    );
    navigate("/hotel/pay");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: please refresh</div>;
  }

  return (
    <div className="max-w-5xl mx-auto ">
      {data?.map((room: any) => {
        return (
          <div className="flex flex-col gap-4 mt-6 font-DmSans ">
            <h2 className="mb-4 text-2xl font-bold ">Select Room</h2>
            <div className="md:flex md:overflow-hidden md:overflow-x-scroll md:space-x-1">
              {room.block.map((block: any) => {
                const BlockID: string = block.block_id
                  .split("_")
                  .slice(0, 1)
                  .join("");
                return Object.keys(room.rooms).map((roomId) => (
                  <div className=" md:w-[350px]  md:flex dark:bg-c3 rounded-lg">
                    {roomId === BlockID && (
                      <div className="p-4 rounded-lg drop-shadow-md bg-c7 md:w-[350px] dark:bg-c2  ">
                        <p className="text-lg font-bold text-c2 dark:text-c9">
                          {block.room_name.slice(0, 30)}
                        </p>

                        {room.rooms[roomId].photos
                          .slice(0, 1)
                          .map((photos: any) => {
                            return (
                              <img
                                className="w-full md:w-full mt-2 rounded-lg h-[300px] object-cover"
                                src={photos.url_original}
                                alt="room_photo"
                              />
                            );
                          })}

                        <div className="mt-2">
                          {room.rooms[roomId].highlights.map(
                            (facilities: any) => (
                              <div className="flex items-center ">
                                <DoneIcon className="mr-2 text-sm text-[#03A782]" />
                                <p className="text-sm text-c3 dark:text-c5">
                                  {facilities.translated_name}
                                </p>
                              </div>
                            )
                          )}
                        </div>

                        {block.breakfast_included === 1 && (
                          <div className="flex items-center">
                            <DoneIcon className="mr-2 text-sm text-[#03A782]" />
                            <p className="text-sm text-c3 dark:text-c5">
                              Breakfast Included
                            </p>
                          </div>
                        )}
                        {block.refundable === 1 && (
                          <div className="flex items-center">
                            <DoneIcon className="mr-2 text-sm text-[#03A782]" />
                            <p className="text-sm text-c3 dark:text-c5">
                              Cancel for free
                            </p>
                          </div>
                        )}
                        <div className="flex items-center justify-between p-1 px-2 mt-3 rounded-lg bg-c8 dark:bg-c3">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-md text-c2 dark:text-c6">
                              {block.price_breakdown.all_inclusive_price} €
                            </p>
                            <p className="text-sm text-c3 dark:text-c6">
                              for{"  "}
                              {block.nr_adults} people
                            </p>
                          </div>
                          <button
                            onClick={() => handleBookNow(block)}
                            className=" bg-[#316BFF] text-c9 p-2  px-3 rounded-lg text-md drop-shadow-md"
                          >
                            Select{" "}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ));
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HotelDetailRoomsAvailable;
