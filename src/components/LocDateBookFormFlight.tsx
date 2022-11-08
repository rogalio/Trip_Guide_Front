import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { fetchAutocompleteWhere } from "../util/axiosApiFetch";
import { useQuery } from "@tanstack/react-query";
import { destinationFromType } from "../util/Typescript";
import FlightSearchRef from "./FlightSearchRef";

const LocDateBookiForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   const [from, setfrom] = useState<any>([]);
  //   const [to, setto] = useState<any>([]);
  //   const [locationFromChooseByUser, setlocationFromChooseByUser] =
  //     useState<any>();
  //   const [locationToChooseByUser, setlocationToChooseByUser] = useState<any>();
  //   const [showAutocomplete, setshowAutocomplete] = useState<boolean>(false);
  //   const [showAutocomplete2, setshowAutocomplete2] = useState<boolean>(false);

  //   const whereFrom: string = watch("whereFrom");
  //   const whereTo: string = watch("whereTo");

  //   const openCloseAutocomplete = () => {
  //     // eslint-disable-next-line no-lone-blocks
  //     {
  //       setshowAutocomplete((prevShowAutocomplete) => !prevShowAutocomplete);
  //     }
  //   };

  //   const openCloseAutocomplete2 = () => {
  //     // eslint-disable-next-line no-lone-blocks
  //     {
  //       setshowAutocomplete2((prevShowAutocomplete) => !prevShowAutocomplete);
  //     }
  //   };

  //   const deleteInputLocation = (): void => {
  //     setlocationFromChooseByUser([]);
  //   };

  //   const deleteInputLocation2 = (): void => {
  //     setlocationToChooseByUser([]);
  //   };

  //   const fetchAutocompleteWhereFrom = async (whereFrom: string) => {
  //     const response = await axios.get(
  //       `https://priceline-com-provider.p.rapidapi.com/v2/flight/autoComplete?string=${whereFrom}&cities=true&airports=true&regions=true&hotels=true`,
  //       {
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "aec368893amsh7b6d0c9bd38cc53p182f12jsn1ac8d7d9a368",
  //           "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  //         },
  //       }
  //     );

  //     setfrom(
  //       response.data.getAirAutoComplete.results.getSolr.results.data.airport_data
  //     );
  //     setshowAutocomplete(true);
  //   };

  //   const fetchAutocompleteWhereTo = async (whereTo: string) => {
  //     const response = await axios.get(
  //       `https://priceline-com-provider.p.rapidapi.com/v2/flight/autoComplete?string=${whereTo}&cities=true&airports=true&regions=true&hotels=true`,
  //       {
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "aec368893amsh7b6d0c9bd38cc53p182f12jsn1ac8d7d9a368",
  //           "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  //         },
  //       }
  //     );

  //     setto(
  //       response.data.getAirAutoComplete.results.getSolr.results.data.airport_data
  //     );
  //     setshowAutocomplete2(true);
  //   };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  //   const destinationFrom: destinationFromType[] = Object.keys(from)
  //     .map((key) => from[key])
  //     .map((item) => {
  //       return {
  //         iata: item.iata,
  //         airport: item.airport,
  //       };
  //     });

  //   const destinationTo: destinationFromType[] = Object.keys(to)
  //     .map((key) => to[key])
  //     .map((item) => {
  //       return {
  //         iata: item?.iata,
  //         airport: item?.airport,
  //       };
  //     });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-6 mt-6 md:space-y-4 ">
      {/* ici */}
      <FlightSearchRef errors={errors} register={register} watch={watch} />
      {/* ici */}

      {/* ici */}

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
      {/* {locationFromChooseByUser.airport && (
        <button
          type="submit"
          className=" p-2 rounded-lg w-full bg-[#316BFF] mt-4 md:mt-0 text-c9 text-lg md:max-w-[90px] md:text-lg "
        >
          Search
        </button>
      )} */}
    </form>
  );
};

export default LocDateBookiForm;
