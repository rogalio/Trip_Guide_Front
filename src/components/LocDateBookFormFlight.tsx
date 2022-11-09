import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import FlightSearchRef from "./FlightSearchRef";
import { useAppDispatch } from "../redux/hooks";
import { addCheckIn, addCheckOut, addWhere, addTo } from "../redux/FlightSlice";

const LocDateBookiForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [locationFromChooseByUser, setlocationFromChooseByUser] =
    useState<any>();
  const [locationToChooseByUser, setlocationToChooseByUser] = useState<any>();

  const checkIn: string = watch("checkIn");
  const checkOut: string = watch("checkOut");

  const onSubmit = () => {
    dispatch(addCheckIn(checkIn));
    dispatch(addCheckOut(checkOut));
    dispatch(addWhere(locationFromChooseByUser.iata));
    dispatch(addTo(locationToChooseByUser.iata));
    navigate("/flight/listing");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-6 mt-6 md:space-y-4 ">
      <FlightSearchRef
        errors={errors}
        register={register}
        watch={watch}
        locationFromChooseByUser={locationFromChooseByUser}
        setlocationFromChooseByUser={setlocationFromChooseByUser}
        locationToChooseByUser={locationToChooseByUser}
        setlocationToChooseByUser={setlocationToChooseByUser}
      />

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
          <ArrowsRightLeftIcon className="hidden  absolute w-5 dark:text-c9 dark:bg-c3 top-5 left-[-16px] text-c3 md:hidden bg-c9 border border-c4 rounded-full p-1 " />
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
      {locationFromChooseByUser?.airport && locationToChooseByUser?.airport && (
        <button
          type="submit"
          className=" p-2 rounded-lg w-full mx-auto justify-center flex bg-[#316BFF] mt-4 md:mt-0 text-c9 text-lg  md:text-lg "
        >
          Search
        </button>
      )}
    </form>
  );
};

export default LocDateBookiForm;
