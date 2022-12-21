import FlightBookingInfoDeparture from "./FlightBookingInfoDeparture";
import FlightBookingInfoReturn from "./FlightBookingInfoReturn";
const FlightBookingInfo = () => {
  return (
    <div className="px-6 pt-8 dark:bg-c1 ">
      <div className="max-w-5xl mx-auto border-[1px] border-c7 rounded-xl p-4 font-DmSans dark:bg-c2 dark:border-c3 shadow-lg">
        <FlightBookingInfoDeparture />
        <hr className="border-[1px] border-c7 mt-2 dark:border-c3 mb-4" />
        <FlightBookingInfoReturn />
      </div>
    </div>
  );
};

export default FlightBookingInfo;
