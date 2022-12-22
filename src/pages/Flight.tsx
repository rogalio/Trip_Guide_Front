import { useEffect, useState } from "react";
import HeroFlight from "../components/HeroFlight";
import DestinationCard from "../components/DestinationCard";
import TopTourCard from "../components/TopTourCard";
import TestSafari from "../components/TestSafari";
import { AuthModal } from "../util/AuthModal";

const Flight = () => {
  return (
    <div className="relative dark:bg-c1">
      <AuthModal />
      <HeroFlight />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Flight;
