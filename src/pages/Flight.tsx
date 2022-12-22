import { useEffect } from "react";
import HeroFlight from "../components/HeroFlight";
import DestinationCard from "../components/DestinationCard";
import TopTourCard from "../components/TopTourCard";

const Flight = () => {
  console.log(document.hasStorageAccess);

  return (
    <div className="relative dark:bg-c1">
      <HeroFlight />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Flight;
