import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addHotelId, addHotelInfo } from "../redux/HotelSlice";
import { useNavigate } from "react-router-dom";
import TourIcon from "@mui/icons-material/Tour";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import WifiIcon from "@mui/icons-material/Wifi";
import DoneIcon from "@mui/icons-material/Done";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useQuery } from "@tanstack/react-query";
import { fetchHotelList } from "../util/axiosApiFetch";
import Loader from "../components/Loader";

const ListOfhotels = () => {
  const { checkIn, checkOut, destId, destType, numOfGuests } = useAppSelector(
    (state) => state.hotel.value.hotelSearch
  );

  const { isLoading, isError, data } = useQuery(
    ["hotelList", destId],
    () => fetchHotelList(checkIn, checkOut, destId, destType, numOfGuests),
    { refetchOnWindowFocus: false }
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleHotelClick = (hotel: any, e: any): void => {
    dispatch(addHotelId(e.currentTarget.value));
    dispatch(
      addHotelInfo({
        hotelName: hotel.hotel_name_trans,
        hotelReviewScore: hotel.review_score,
        hotelReviewScoreWord: hotel.review_score_word,
        hotelReviewNr: hotel.review_nr,
        hotelCity: hotel.city,
        hotelCountry: hotel.country_trans,
        hotelAccommodationType: hotel.accommodation_type_name,
        hotelUnitConfiguration: hotel.unit_configuration_label,
        hotelCancellation: hotel.is_free_cancellable,
        hotelImg: hotel.max_photo_url,
      })
    );
    navigate(`/hotel/${e.currentTarget.value}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>error, please refresh </div>;
  }

  return (
    <div className="max-w-5xl mx-6 lg:mx-auto font-DmSans">
      <div className="flex flex-col gap-4 ">
        {data?.result?.map((hotel: any) => {
          return (
            <div
              key={hotel?.block_ids[0]}
              className="shadow-2xl w-full rounded-xl dark:border-c3 dark:border-[1px] flex flex-col md:flex-row "
            >
              <img
                src={hotel.max_photo_url}
                alt="hotelImg"
                className="object-cover w-full rounded-t-lg h-[280px] md:w-1/3 md:h-[280px]"
              />

              <div className="md:w-2/3">
                <div className="flex flex-col gap-2 p-4 ">
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
                      {hotel.distance_to_cc} km, from {hotel.city_trans}{" "}
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
                  <div className="flex items-center justify-between pl-2 font-bold ">
                    <p className="text-c4 dark:text-c5">
                      {hotel.price_breakdown.gross_price} €
                    </p>
                    <button
                      value={hotel.hotel_id}
                      onClick={(e) => handleHotelClick(hotel, e)}
                      className="bg-[#316BFF] p-2 px-4 rounded-full text-c9"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListOfhotels;
