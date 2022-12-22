import { AuthModal } from "../util/AuthModal";
import DestinationCard from "../components/DestinationCard";
import Hero from "../components/HeroHotel";
import TopTourCard from "../components/TopTourCard";
import CookieConsent from "react-cookie-consent";

const Home = () => {
  return (
    <div className=" dark:bg-c1">
      <CookieConsent
        location="bottom"
        buttonText="Yes"
        cookieName="CookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
      <AuthModal />
      <Hero />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Home;
