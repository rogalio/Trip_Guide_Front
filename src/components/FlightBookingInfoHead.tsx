import { PropsInfoHead } from "../util/Typescript";

const FlightBookingInfoHead = ({
  departureCity,
  arrivalCity,
  stop,
  duration,
  cabin,
  departureDate,
  departureDateString,
}: PropsInfoHead) => {
  return (
    <div>
      <h1 className="mb-2 text-xl font-medium text-c2 dark:text-c8">
        {departureCity} to {arrivalCity}
      </h1>
      <div className="flex gap-2 text-sm md:gap-2 text-c4 dark:text-c5">
        {stop >= 1 ? <p> {stop} Stop</p> : <p>Non stop</p>}
        <p>|</p>
        <p>{duration}</p>
        <p>|</p>
        <p>{cabin}</p>
        <p>|</p>
        <p className="md:hidden">{departureDate.split("-").join(" ")}</p>
        <p className="hidden md:flex">{departureDateString}</p>
      </div>
      <hr className="border-[1px] border-c7 mt-2 dark:border-c3 " />
    </div>
  );
};

export default FlightBookingInfoHead;
