const FlightBookingUserInfo = () => {
  return (
    <div className="px-6 dark:bg-c1">
      <div className="max-w-5xl mx-auto mt-6 border-[1px] p-4 border-c7 rounded-xl shadow-lg font-DmSans dark:bg-c2 dark:border-c3 ">
        <h1 className="text-xl font-medium text-c2">Pasenger Details</h1>
        <div className="flex flex-col w-full gap-2 mt-2 text-base text-c4 md:flex-row md:gap-6">
          <div className="md:w-1/3">
            <p className="font-medium text-c3 dark:text-c5 ">First name</p>
            <input
              type="text"
              placeholder="Pierre"
              className="text-sm border-c6 p-1 border-[2px] rounded-lg w-full px-2 mt-1 dark:bg-c2 dark:border-c3"
            />
          </div>
          <div className="md:w-1/3">
            <p className="font-medium text-c3 dark:text-c5">Last name </p>
            <input
              type="text"
              placeholder="Dupont"
              className="text-sm border-c6 p-1 border-[2px] rounded-lg w-full px-2 mt-1 dark:bg-c2 dark:border-c3"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2 md:flex-row md:gap-10 md:mt-6">
          <div className="text-base text-c4">
            <p className="font-medium text-c3 dark:text-c5">Gender</p>
            <select className="dark:bg-c2 dark:border-[1px] dark:border-c3 dark:rounded-xl dark:p-1">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="text-base text-c4">
            <p className="font-medium text-c3 dark:text-c5 ">Birthdate</p>
            <input
              className="dark:bg-c2 dark:border-[1px] dark:border-c3 dark:rounded-xl dark:p-1 "
              type="date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingUserInfo;
