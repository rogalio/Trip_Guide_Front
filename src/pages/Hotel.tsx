import { AuthModal } from "../util/AuthModal";
import DestinationCard from "../components/DestinationCard";
import Hero from "../components/HeroHotel";
import TopTourCard from "../components/TopTourCard";

const Home = () => {
  return (
    <div className=" dark:bg-c1">
      <AuthModal />
      <Hero />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Home;
