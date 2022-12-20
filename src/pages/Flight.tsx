import HeroFlight from "../components/HeroFlight";
import { AuthModal } from "../util/AuthModal";
import axios from "axios";
import DestinationCard from "../components/DestinationCard";
import TopTourCard from "../components/TopTourCard";

const Flight = () => {
  axios.defaults.withCredentials = true;

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
