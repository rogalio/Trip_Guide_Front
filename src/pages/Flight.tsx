import { useEffect, useState } from "react";
import HeroFlight from "../components/HeroFlight";
import DestinationCard from "../components/DestinationCard";
import TopTourCard from "../components/TopTourCard";
import TestSafari from "../components/TestSafari";

const Flight = () => {
  return (
    <div className="relative dark:bg-c1">
      <TestSafari />
      <HeroFlight />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Flight;
