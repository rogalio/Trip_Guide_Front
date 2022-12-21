const FlightBookingInfoDetails = ({ aircraft }: any) => {
  return (
    <div className="flex justify-between p-4 text-base font-medium md:justify-start md:gap-10 text-c3 dark:text-c7">
      <div>
        <h3>Baggage :</h3>
        <p className="text-c4 dark:text-c5 ">Adult</p>
      </div>
      <div>
        <h3>Check-in :</h3>
        <p className="text-c4 dark:text-c5 ">20kg</p>
      </div>
      <div>
        <h3>Cabin :</h3>
        <p className="text-c4 dark:text-c5 ">7kg</p>
      </div>
      <div>
        <h3>Aircraft :</h3>
        <p className="text-c4 dark:text-c5 ">{aircraft}</p>
      </div>
      <div className="hidden md:block">
        <h3>Meals :</h3>
        <p className="text-c4 dark:text-c5 ">Meals no available</p>
      </div>
    </div>
  );
};

export default FlightBookingInfoDetails;
