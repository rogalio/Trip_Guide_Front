import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addPayment } from "../redux/UserSlice";
import StarIcon from "@mui/icons-material/Star";
import HotelReviewInfo from "./HotelReviewInfo";

const HotelBookReview = () => {
  const { checkIn, checkOut } = useAppSelector(
    (state) => state.user.value.hotelSearch
  );

  const { hotelName, hotelReviewScore, hotelReviewNr, hotelImg } =
    useAppSelector((state) => state.user.value.hotelSearch.hotelInfo);

  const { amountPerNight, amountWithTax } = useAppSelector(
    (state) => state.user.value.hotelSearch.roomSelected
  );

  const dispatch = useAppDispatch();

  //   calculate day & price
  const date1: Date = new Date(checkIn);
  const date2: Date = new Date(checkOut);
  const Difference_In_Time: number = date2.getTime() - date1.getTime();
  const Difference_In_Days: number = Difference_In_Time / (1000 * 3600 * 24);
  const TotalNightWithoutFee: number = Difference_In_Days * amountPerNight;
  const ServiceFee: number = TotalNightWithoutFee * 0.05;
  const TotalNightWithFee: number = TotalNightWithoutFee + ServiceFee;

  dispatch(addPayment(TotalNightWithFee));
  return (
    <div className="md:w-1/2 font-DmSans dark:bg-c3 dark:rounded-lg">
      <div className="md:hidden">
        <HotelReviewInfo />
      </div>

      <div className="p-2 mt-4 border-2 rounded-lg md:mt-0 border-c6 dark:border-c3">
        <div>
          <h2 className="text-lg font-medium text-c1 dark:text-c8">
            {hotelName}
          </h2>
          <div className="flex items-center gap-1 mt-1 text-sm font-medium">
            <StarIcon className="text-[#FFC107] text-md" />
            <p className="dark:text-c6">{hotelReviewScore}</p>
            <p className="text-c4 dark:text-c5">({hotelReviewNr} reviews)</p>
          </div>
        </div>

        <img className="mt-4 rounded-lg" src={hotelImg} alt="hotel_image" />

        <div className="flex flex-col gap-1">
          <h2 className="mt-5 text-xl font-medium dark:text-c8">
            Booked details
          </h2>
          <div className="flex justify-between ">
            <div className="flex gap-2 text-base font-medium text-c4 dark:text-c5">
              <p>{amountPerNight.toFixed(2)} €</p>
              <p>+ {Difference_In_Days} nights</p>
            </div>
            <p className="font-bold text-c2 dark:text-c5">
              {TotalNightWithoutFee.toFixed(2)} €
            </p>
          </div>
          <div className="flex justify-between gap-2 text-base font-medium text-c4 dark:text-c5">
            <p>Taxe and fee (included)</p>
            <p className="font-bold text-c2 dark:text-c5">
              {amountWithTax.toFixed(2)} €
            </p>
          </div>
          <div className="flex justify-between gap-2 text-base font-medium text-c4 dark:text-c5">
            <p>Sevice fee</p>
            <p className="font-bold text-c2 dark:text-c5">
              {ServiceFee.toFixed(2)} €
            </p>
          </div>
          <div className="flex justify-between gap-2 mt-2 text-base font-medium dark:text-c5 text-c4">
            <p>Total</p>
            <p className="font-bold text-c2 dark:text-c5">
              {TotalNightWithFee.toFixed(2)} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookReview;
