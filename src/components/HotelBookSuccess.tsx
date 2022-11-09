import StarIcon from "@mui/icons-material/Star";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { resetState } from "../redux/HotelSlice";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { Link } from "react-router-dom";
import HotelReviewInfo from "./HotelReviewInfo";

const HotelBookSuccess = () => {
  const { checkIn, checkOut, payment, paymentId } = useAppSelector(
    (state: any) => state.hotel.value.hotelSearch
  );
  const {
    hotelName,
    hotelReviewScore,
    hotelReviewNr,
    hotelUnitConfiguration,
    hotelImg,
  } = useAppSelector((state: any) => state.hotel.value.hotelSearch.hotelInfo);
  const dispatch = useAppDispatch();

  const resetReduxStore = () => {
    dispatch(resetState());
  };

  return (
    <div className="dark:bg-c1">
      <div className="max-w-5xl px-8 pb-6 mx-auto bg-c8 font-DmSans dark:bg-c1">
        <div>
          <div className="pt-4 text-c3">
            <h3 className="text-xl font-medium dark:text-c8 ">
              Congratulations !
            </h3>
            <h1 className="mt-4 text-3xl font-medium dark:text-c8">
              Your trip has been booked !
            </h1>
            <hr className="border-[1px]  border-c6 mt-4" />
          </div>

          <div className="md:mb-4">
            <h3 className="mt-4 text-xl font-medium dark:text-c7">
              {hotelName}
            </h3>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-1 text-sm font-medium">
                <StarIcon className="text-[#FFC107] text-md" />
                <p className="dark:text-c5">{hotelReviewScore}</p>
                <p className="text-c4">({hotelReviewNr} reviews)</p>
              </div>
              <p className="text-sm font-medium">
                {hotelUnitConfiguration.split("<br/>")[0]}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row-reverse">
            <div className="flex flex-col gap-3 md:w-2/3">
              <img
                className="mt-4 rounded-lg  md:mt-0 md:max-h-[440px]"
                src={hotelImg}
                alt="hotel_image"
              />
            </div>

            <div className="md:w-1/3 md:h-full">
              <HotelReviewInfo />
              <div className="bg-[#F4F4F6] rounded-lg p-2 dark:bg-c3 dark:text-c6 mt-4">
                <h3 className="text-2xl font-medium ">Reserve details</h3>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 text-c4 dark:text-c6">
                      <RecentActorsIcon />
                      <p className="text-base ">Booking code</p>
                    </div>
                    <p className="text-base font-medium ">
                      {paymentId.slice(0, 12)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 text-c4 dark:text-c6">
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
                    <div className="flex gap-2 text-c4 dark:text-c6">
                      <PointOfSaleIcon />
                      <p className="text-base ">total</p>
                    </div>
                    <p className="text-base font-medium ">
                      {payment.toFixed(2)} €
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 text-c4 dark:text-c6">
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
        </div>
      </div>
    </div>
  );
};

export default HotelBookSuccess;
