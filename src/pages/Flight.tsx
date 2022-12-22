import { useEffect } from "react";
import HeroFlight from "../components/HeroFlight";
import DestinationCard from "../components/DestinationCard";
import TopTourCard from "../components/TopTourCard";

const Flight = () => {
  useEffect((): void => {
    if (window.navigator.cookieEnabled) {
      console.log("Cookies are enabled in the user's browser");

      // Cookies are enabled in the user's browser
      // You can use cookies in your React app
    } else {
      console.log("Cookies are disabled in the user's browser");
      // Cookies are disabled in the user's browser
      // You should not use cookies in your React app
    }
  }, []);

  return (
    <div className="relative dark:bg-c1">
      <HeroFlight />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Flight;
