import React from "react";
import DestinationCard from "../components/DestinationCard";

import Hero from "../components/HeroHotel";
import TopTourCard from "../components/TopTourCard";

const Home = () => {
  return (
    <div className=" dark:bg-c1">
      <Hero />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Home;
