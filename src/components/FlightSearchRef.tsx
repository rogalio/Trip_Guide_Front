import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { destinationFromType } from "../util/Typescript";
import axios from "axios";

const FlightSearchRef = ({
  watch,
  errors,
  register,
  locationFromChooseByUser,
  locationToChooseByUser,
  setlocationFromChooseByUser,
  setlocationToChooseByUser,
}: any) => {
  const [showAutocomplete, setshowAutocomplete] = useState<boolean>(false);
  const [showAutocomplete2, setshowAutocomplete2] = useState<boolean>(false);

  const [from, setfrom] = useState<any>([]);
  const [to, setto] = useState<any>([]);

  const whereFrom: string = watch("whereFrom");
  const whereTo: string = watch("whereTo");

  const openCloseAutocomplete = (data: any) => {
    // eslint-disable-next-line no-lone-blocks
    {
      setshowAutocomplete((prevShowAutocomplete) => !prevShowAutocomplete);
    }
  };

  const openCloseAutocomplete2 = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      setshowAutocomplete2((prevShowAutocomplete) => !prevShowAutocomplete);
    }
  };

  const deleteInputLocation = (): void => {
    setlocationFromChooseByUser([]);
  };

  const deleteInputLocation2 = (): void => {
    setlocationToChooseByUser([]);
  };

  const fetchAutocompleteWhereFrom = async (whereFrom: string) => {
    const response = await axios.get(
      `https://priceline-com-provider.p.rapidapi.com/v2/flight/autoComplete?string=${whereFrom}&cities=true&airports=true&regions=true&hotels=true`,
      {
        headers: {
          "X-RapidAPI-Key":
            "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      }
    );

    setfrom(
      response.data?.getAirAutoComplete.results.getSolr.results.data
        .airport_data
    );
    setshowAutocomplete(true);
  };

  const fetchAutocompleteWhereTo = async (whereTo: string) => {
    const response = await axios.get(
      `https://priceline-com-provider.p.rapidapi.com/v2/flight/autoComplete?string=${whereTo}&cities=true&airports=true&regions=true&hotels=true`,
      {
        headers: {
          "X-RapidAPI-Key":
            "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      }
    );

    setto(
      response.data?.getAirAutoComplete.results.getSolr.results.data
        .airport_data
    );
    setshowAutocomplete2(true);
  };

  const destinationFrom: destinationFromType[] = Object.keys(from)
    .map((key) => from[key])
    .map((item) => {
      return {
        iata: item.iata,
        airport: item.airport,
      };
    });

  const destinationTo: destinationFromType[] = Object.keys(to)
    .map((key) => to[key])
    .map((item) => {
      return {
        iata: item.iata,
        airport: item.airport,
      };
    });

  return (
    <div>
      <div className="gap-4 md:flex">
        <div
          className="relative w-full h-14 font-DmSans "
          onClick={() =>
            openCloseAutocomplete(locationFromChooseByUser?.airport)
          }
        >
          <p className="absolute pl-4 text-base font-medium text-c3 dark:text-c8 top-1 left-2">
            From
          </p>

          {errors.from && (
            <span className="absolute text-sm font-semibold top-12 left-6 text-red font-Poppins">
              loc requis
            </span>
          )}
          <input
            {...register("whereFrom", { required: true })}
            placeholder={"where from ?"}
            className="w-full h-full pt-6 pl-6 bg-[#F4F5F7] dark:bg-c3 text-c4 rounded-xl focus:ring-2 focus:ring-c6 outline-none shadow-md  "
            type="text"
            value={
              locationFromChooseByUser?.airport
                ? locationFromChooseByUser.iata +
                  " - " +
                  locationFromChooseByUser.airport
                : whereFrom
            }
          />

          {locationFromChooseByUser?.airport ? (
            <XCircleIcon
              onClick={deleteInputLocation}
              className="absolute w-6 rounded-full cursor-pointer dark:text-red dark:bg-c3 top-5 right-4 text-red d bg-c9 "
            />
          ) : (
            <button
              onClick={() => fetchAutocompleteWhereFrom(whereFrom)}
              className="absolute right-2.5 bottom-2.5 text-c8 dark:text-c8 bg-[#316bff] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <CheckCircleOutlineIcon className="text-[20px]" />
            </button>
          )}

          {showAutocomplete && (
            <div className=" flex  flex-col gap-2 z-50 absolute      mt-6 w-full  pt-6  px-4 bg-[#F4F5F7] dark:bg-c3 text-c4 rounded-xl focus:ring-2 focus:ring-c6 outline-none shadow-md ">
              {destinationFrom.slice(0, 5).map((destination: any) => {
                return (
                  <div
                    key={destination.iata}
                    onClick={() => setlocationFromChooseByUser(destination)}
                    className="flex gap-2  text-sm items-center z-50 hover:bg-c6 p-2 text-c4   bg-[#F4F5F7] cursor-pointer dark:bg-c3 dark:hover:bg-c4 overflow-x-hidden dark:text-c7  border-c6 dark:border-c2 rounded-lg border-b-[1px]  "
                  >
                    <p>{destination.iata}</p>-<p>{destination.airport}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div
          className="relative w-full mt-4 h-14 md:mt-0 font-DmSans "
          onClick={() => openCloseAutocomplete2()}
        >
          <p className="absolute pl-4 text-base font-medium text-c3 dark:text-c8 top-1 left-2">
            To
          </p>
          <ArrowsRightLeftIcon className="hidden md:flex absolute w-5 dark:text-c9 dark:bg-c3 top-5 left-[-16px] text-c3 bg-c9 border border-c4 rounded-full p-1 " />
          {errors.to && (
            <span className="absolute text-sm font-semibold top-12 left-6 text-red font-Poppins">
              loc requis
            </span>
          )}
          <input
            {...register("whereTo", { required: true })}
            placeholder={" where to ?"}
            className="w-full h-full pt-6 pl-6 bg-[#F4F5F7]  dark:bg-c3 text-c4 rounded-xl focus:ring-2 focus:ring-c6 outline-none shadow-md  "
            type="text"
            value={
              locationToChooseByUser?.airport
                ? locationToChooseByUser.iata +
                  " - " +
                  locationToChooseByUser.airport
                : whereTo
            }
          />

          {locationToChooseByUser?.airport ? (
            <XCircleIcon
              onClick={deleteInputLocation2}
              className="absolute w-6 rounded-full cursor-pointer dark:text-red dark:bg-c3 top-5 right-4 text-red d bg-c9 "
            />
          ) : (
            <button
              onClick={() => fetchAutocompleteWhereTo(whereTo)}
              className="absolute  right-2.5 bottom-2.5 text-c8 dark:text-c8 bg-[#316bff] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <CheckCircleOutlineIcon className="text-[20px]" />
            </button>
          )}

          {showAutocomplete2 && (
            <div className=" flex  flex-col gap-2 z-50 absolute      mt-6 w-full  pt-6  px-4 bg-[#F4F5F7] dark:bg-c3 text-c4 rounded-xl focus:ring-2 focus:ring-c6 outline-none shadow-md ">
              {destinationTo.slice(0, 5).map((destination: any) => {
                return (
                  <div
                    key={destination.iata}
                    onClick={() => setlocationToChooseByUser(destination)}
                    className="flex gap-2  text-sm items-center z-50 hover:bg-c6 p-2 text-c4   bg-[#F4F5F7] cursor-pointer dark:bg-c3 dark:hover:bg-c4 overflow-x-hidden dark:text-c7  border-c6 dark:border-c2 rounded-lg border-b-[1px]  "
                  >
                    <p>{destination.iata}</p>-<p>{destination.airport}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchRef;
