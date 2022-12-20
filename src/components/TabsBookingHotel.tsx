import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import LocDateBookiForm from "./LocDateBookForm";

const TabsBooking = () => {
  const navigate = useNavigate();

  const navigateHotel = () => {
    navigate("/");
  };

  const navigateFlight = () => {
    setValue(1);
    navigate("/flight");
  };
  const navigateCar = () => {
    navigate("/car");
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="  bg-c8 dark:bg-c1 drop-shadow-lg  sticky mt-[-180px]  rounded-xl md:mt-[-100px] md:ml-14 md:mr-14 max-w-5xl mx-auto ml-8 mr-8 shadow-xl pb-6 ">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        centered={true}
        className="dark:border-[1px] dark:border-b-c3"
      >
        <Tab
          className="text-sm font-semibold text-c3 dark:text-c5 font-DmSans"
          iconPosition="start"
          icon={<LocalHotelOutlinedIcon className="w-8 dark:text-c5" />}
          label="Hotel"
          onClick={navigateHotel}
        />
        <Tab
          className="text-sm font-semibold text-c3 dark:text-c5 font-DmSans"
          iconPosition="start"
          icon={<FlightTakeoffOutlinedIcon className="w-8 dark:text-c5" />}
          label="Flight"
          onClick={navigateFlight}
        />
        <div className="relative">
          <Tab
            className="dark:text-c5"
            iconPosition="start"
            icon={<DirectionsCarRoundedIcon />}
            label="car"
            onClick={navigateCar}
            disabled
          />
          <button className="absolute  top-3 right-2 text-[8px] bg-red text-c9 p-1 rounded-full font-Poppins  ">
            soon
          </button>
        </div>
      </Tabs>
      <LocDateBookiForm />
    </div>
  );
};

export default TabsBooking;
