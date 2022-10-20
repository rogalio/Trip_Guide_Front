import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGetHotelRoomsQuery } from "../redux/TopTourApi";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useAxiosFetch } from "../customHooks/useAxiosFetch";
import DoneIcon from "@mui/icons-material/Done";

const HotelDetailRoomsAvailable = () => {
  const user = useAppSelector((state) => state.user.value);

  const hotelId: string = user.hotelSearch.hotelId;
  const checkIn: string = user.hotelSearch.checkIn;
  const checkOut: string = user.hotelSearch.checkOut;
  const numOfGuests: number = user.hotelSearch.numOfGuests;

  // const [data, setData] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState<Boolean>(true);

  const { data, error, loaded } = useAxiosFetch(
    `https://booking-com.p.rapidapi.com/v1/hotels/room-list?checkin_date=${checkIn}&units=metric&checkout_date=${checkOut}&currency=EUR&locale=fr&adults_number_by_rooms=${numOfGuests}&hotel_id=${hotelId}`
  );

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://booking-com.p.rapidapi.com/v1/hotels/room-list?checkin_date=${checkIn}&units=metric&checkout_date=${checkOut}&currency=EUR&locale=fr&adults_number_by_rooms=${numOfGuests}&hotel_id=${hotelId}`,
  //       {
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
  //           "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  //         },
  //       }
  //     )
  //     .then((response: any) => {
  //       setData(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // }, [checkIn, checkOut, hotelId, numOfGuests]);

  // const { data, error, isLoading } = useGetHotelRoomsQuery({
  //   hotelId: user.hotelSearch.hotelId,
  //   checkIn: user.hotelSearch.checkIn,
  //   checkOut: user.hotelSearch.checkOut,
  //   numOfGuests: user.hotelSearch.numOfGuests,
  // });

  const navigate = useNavigate();
  // if (error) {
  //   return <p>error, please refresh</p>;
  // }

  if (loaded) {
    return error ? (
      <div>Something went wrong, please refresh</div>
    ) : (
      <div>
        {data?.map((room: any) => {
          return (
            <div className="flex flex-col gap-4 mt-6 font-DmSans">
              <h2 className="mb-4 text-2xl font-bold ">Select Room</h2>
              {room.block.map((block: any) => {
                const BlockID: string = block.block_id
                  .split("_")
                  .slice(0, 1)
                  .join("");
                return Object.keys(room.rooms).map((roomId) => (
                  <div className="">
                    {roomId === BlockID && (
                      <div className="p-4 rounded-lg drop-shadow-md bg-c7">
                        <p className="text-lg font-bold text-c2">
                          {block.room_name}
                        </p>

                        {room.rooms[roomId].photos
                          .slice(0, 1)
                          .map((photos: any) => {
                            return (
                              <img
                                className="mt-2 rounded-lg"
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
                                <p className="text-sm text-c3">
                                  {facilities.translated_name}
                                </p>
                              </div>
                            )
                          )}
                        </div>

                        {block.breakfast_included === 1 && (
                          <div className="flex items-center">
                            <DoneIcon className="mr-2 text-sm text-[#03A782]" />
                            <p className="text-sm text-c3">
                              Breakfast Included
                            </p>
                          </div>
                        )}
                        {block.refundable === 1 && (
                          <div className="flex items-center">
                            <DoneIcon className="mr-2 text-sm text-[#03A782]" />
                            <p className="text-sm text-c3">Cancel for free</p>
                          </div>
                        )}
                        <div className="flex items-center justify-between p-1 px-2 mt-3 rounded-lg bg-c8">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-md text-c2">
                              {block.price_breakdown.all_inclusive_price} €
                            </p>
                            <p className="text-sm text-c3">
                              for{"  "}
                              {block.nr_adults} people
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              navigate("/hotel/pay", {
                                state: {
                                  roomSelected: block,
                                },
                              })
                            }
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
          );
        })}
      </div>
    );
  }
  return <p>loading</p>;
};

export default HotelDetailRoomsAvailable;
