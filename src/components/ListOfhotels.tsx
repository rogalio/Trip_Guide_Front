import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useGetHotelByCityQuery } from "../redux/TopTourApi";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addHotelId } from "../redux/UserSlice";
import { useNavigate } from "react-router-dom";
import TourIcon from "@mui/icons-material/Tour";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import WifiIcon from "@mui/icons-material/Wifi";
import DoneIcon from "@mui/icons-material/Done";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useAxiosFetch } from "../customHooks/useAxiosFetch";
import { config } from "process";

const ListOfhotels = () => {
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const checkIn: string = user.hotelSearch.checkIn;
  const checkOut: string = user.hotelSearch.checkOut;
  const destId: number = user.hotelSearch.destId;
  const destType: string = user.hotelSearch.destType;
  const numOfGuests: number = user.hotelSearch.numOfGuests;

  // const [data, setData] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState<Boolean>(true);

  const { data, error, loaded } = useAxiosFetch(
    `https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=${checkOut}&units=metric&dest_id=${destId}&dest_type=${destType}&locale=fr&adults_number=${numOfGuests}&order_by=class_descending&filter_by_currency=EUR&checkin_date=${checkIn}&room_number=1&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&include_adjacency=true`
  );

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=${checkOut}&units=metric&dest_id=${destId}&dest_type=${destType}&locale=fr&adults_number=${numOfGuests}&order_by=class_descending&filter_by_currency=EUR&checkin_date=${checkIn}&room_number=1&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&include_adjacency=true`,
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
  // }, [checkIn, checkOut, destId, destType, numOfGuests]);

  // const { data, error, isLoading } = useGetHotelByCityQuery({
  //   checkIn,
  //   checkOut,
  //   destId,
  //   numOfGuests,
  //   destType,
  // });

  // if (error) {
  //   return <div>Something went wrong, please refresh</div>;
  // }

  if (loaded) {
    return error ? (
      <div>Something went wrong, please refresh</div>
    ) : (
      <div className="mx-6 md:w-2/3 font-DmSans">
        <div className="flex flex-col gap-4 ">
          {data.result?.map((hotel: any) => {
            return (
              <div key={hotel?.block_ids[0]} className="shadow-2xl rounded-xl">
                <img
                  src={hotel.max_photo_url}
                  alt="hotelImg"
                  className="object-cover w-full rounded-t-lg h-[280px]"
                />
                <div className="flex flex-col gap-2 p-4">
                  <p className="text-2xl font-bold dark:text-c8">
                    {hotel.hotel_name_trans}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <StarIcon className="text-[#FFC542]" />
                    <p className="text-lg font-medium text-c3 dark:text-c5 ">
                      {hotel.review_score}, ({hotel.review_nr})
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-medium dark:text-c5">
                    <TourIcon className="text-c4" />
                    <p>
                      {hotel.distance_to_cc_formatted}, from {hotel.city_trans}{" "}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 dark:text-c5">
                    <div className="flex items-center gap-2 font-medium">
                      <PlaceIcon className="text-c4" />
                      <p>{hotel.address_trans}</p>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <WifiIcon className="text-c4" />
                      <p>Free wifi available</p>
                    </div>

                    {hotel.is_free_cancellable && (
                      <div className="flex items-center gap-2 font-medium dark:text-c5">
                        <DoneIcon className="text-c4" />
                        <p>Free cancelation</p>
                      </div>
                    )}
                    {hotel.is_genius_dea && (
                      <div className="flex items-center gap-2 font-medium dark:text-c5">
                        <LocalAtmIcon className="text-c4" />
                        <p>Genius Deal</p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between pl-2 font-bold">
                    <p className="text-c4 dark:text-c5">
                      {hotel.price_breakdown.gross_price} €
                    </p>
                    <button
                      value={hotel.hotel_id}
                      onClick={(e) =>
                        navigate(`/hotel/${e.currentTarget.value}`, {
                          state: {
                            hotelId: e.currentTarget.value,
                            hotelInfo: hotel,
                          },
                        })
                      }
                      className="bg-[#316BFF] p-2 px-4 rounded-full text-c9"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <p>loading</p>;
};

export default ListOfhotels;

// if (loaded) {
//   return error ? (
//     <div>Something went wrong, please refresh</div>
//   ) : (

//     <div>

//     </div>
//   );
// }
// return <p>loading</p>;
