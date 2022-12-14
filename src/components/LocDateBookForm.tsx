import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  addCheckIn,
  addCheckOut,
  addDestid,
  addLocation,
  addDestType,
} from "../redux/HotelSlice";

const LocDateBookiForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  interface IautocompleteFromApi {
    label: string;
    dest_id: string;
    dest_type: string;
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [locationChooseByUser, setlocationChooseByUser] = useState<any>();
  const [showAutocomplete, setshowAutocomplete] = useState<boolean>(false);

  const userInputSearchLocation: string = watch("location");
  const userCheckIn: string = watch("checkIn");
  const userCheckOut: string = watch("checkOut");

  const openCloseAutocomplete = () => {
    if (data.length > 0) {
      // eslint-disable-next-line no-lone-blocks
      {
        setshowAutocomplete((prevShowAutocomplete) => !prevShowAutocomplete);
      }
    }
  };

  const deleteInputLocation = (): void => {
    setlocationChooseByUser([]);
  };

  const handleAutoCompleteSearch = async (): Promise<void> => {
    if (userInputSearchLocation.length >= 3) {
      try {
        const response = await axios.get(
          `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${userInputSearchLocation}`,
          {
            headers: {
              "X-RapidAPI-Key":
                "881f2ccdebmshb595f24f1965e67p16cd16jsn593892283c3c",
              "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
            },
          }
        );
        const data = await response.data;
        setdata(data);
        setshowAutocomplete(true);
      } catch (error: any) {
        console.log(error.response);
      }
    }
  };

  const destinationChoose = [
    data.map((autocomplete: IautocompleteFromApi) => {
      return {
        label: autocomplete.label,
        dest_id: Number(autocomplete.dest_id),
        dest_type: autocomplete.dest_type,
      };
    }),
  ];

  const onSubmit = () => {
    dispatch(addCheckIn(userCheckIn));
    dispatch(addCheckOut(userCheckOut));
    dispatch(addDestid(locationChooseByUser.dest_id));
    dispatch(addLocation(locationChooseByUser.label));
    dispatch(addDestType(locationChooseByUser.dest_type));
    navigate("/hotels/list");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-6 mt-6 md:flex md:gap-4"
    >
      <div
        className="relative w-full h-14 font-DmSans "
        onClick={openCloseAutocomplete}
      >
        <p className="absolute pl-4 text-base font-medium text-c3 dark:text-c8 top-1 left-2">
          Location
        </p>

        {errors.location && (
          <span className="absolute text-sm font-semibold top-12 left-6 text-red font-Poppins">
            loc requis
          </span>
        )}
        <input
          {...register("location", { required: true })}
          placeholder={" Where do you want to go ?"}
          value={
            locationChooseByUser?.label
              ? locationChooseByUser.label
              : userInputSearchLocation
          }
          className="w-full h-full pt-6 pl-6 bg-[#F4F5F7] dark:bg-c3 text-c4 rounded-xl focus:ring-2 focus:ring-c6 outline-none shadow-md  "
          type="text"
        />
        {locationChooseByUser?.label ? (
          <XCircleIcon
            onClick={deleteInputLocation}
            className="absolute w-6 rounded-full cursor-pointer dark:text-red dark:bg-c3 top-5 right-4 text-red d bg-c9 "
          />
        ) : (
          <button
            onClick={handleAutoCompleteSearch}
            className="absolute right-2.5 bottom-2.5 text-c8 dark:text-c8 bg-[#316bff] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        )}

        {showAutocomplete && (
          <div className=" flex  flex-col gap-2 z-50 absolute h-[300px]    mt-6 w-full  pt-6  px-4 bg-[#F4F5F7] dark:bg-c3 text-c4 rounded-xl focus:ring-2 focus:ring-c6 outline-none shadow-md ">
            {destinationChoose[0].map((destination: any) => {
              return (
                <p
                  onClick={() => setlocationChooseByUser(destination)}
                  className="hover:bg-c6 p-2 text-c4   bg-[#F4F5F7] cursor-pointer dark:bg-c3 dark:hover:bg-c4 overflow-x-hidden dark:text-c7 border-c6 dark:border-c2 rounded-lg border-b-[1px] z-50 "
                >
                  {destination.label}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4 md:flex md:mt-0">
        <div className="relative w-full h-14 font-DmSans ">
          <p className="absolute pl-4 text-sm font-medium text-c3 dark:text-c8 md:text-base top-1 left-2">
            Check In
          </p>

          <input
            placeholder="Where are you from ?"
            className="w-full h-full   pt-6 pl-6 bg-[#F4F5F7] dark:bg-c3 text-c4 rounded-xl focus:ring-2 focus:ring-c6 outline-none shadow-md  "
            type="date"
            {...register("checkIn", { required: true })}
          />
          {errors.checkIn && (
            <span className="absolute text-sm font-semibold top-14 text-red font-Poppins left-6">
              please add date
            </span>
          )}
          <ArrowsRightLeftIcon className="hidden md:flex absolute w-5 dark:text-c9 dark:bg-c3 top-5 left-[-16px] text-c3 bg-c9 border border-c4 rounded-full p-1 " />
        </div>
        <div className="relative w-full h-14 font-DmSans">
          <p className="absolute pl-4 text-sm font-medium text-c3 dark:text-c8 md:text-base top-1 left-2">
            Check Out
          </p>
          {errors.checkOut && (
            <span className="absolute text-sm font-semibold top-14 text-red font-Poppins left-6">
              please add date
            </span>
          )}
          <input
            {...register("checkOut", { required: true })}
            placeholder="Where are you from ?"
            className="w-full h-full pt-6 pl-6  bg-[#F4F5F7] dark:bg-c3 text-c4 rounded-xl focus:ring-2 focus:ring-c6 outline-none shadow-md  "
            type="date"
          />
          <ArrowsRightLeftIcon className="hidden md:flex absolute w-5 dark:text-c9 dark:bg-c3 top-5 left-[-16px] text-c3 bg-c9 border border-c4 rounded-full p-1 " />
        </div>
      </div>
      {locationChooseByUser && (
        <button
          type="submit"
          className=" p-2 rounded-lg w-full bg-[#316BFF] mt-4 md:mt-0 text-c9 text-lg md:max-w-[90px] md:text-lg "
        >
          Search
        </button>
      )}
    </form>
  );
};

export default LocDateBookiForm;
