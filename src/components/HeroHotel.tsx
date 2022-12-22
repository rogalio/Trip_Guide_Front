import hero from "../asset/heroHotel.png";
import TabsBooking from "./TabsBookingHotel";

const Hero = () => {
  return (
    <div className=" dark:bg-c1">
      <div className="relative justify-center max-w-5xl mx-auto">
        <img
          className="h-[500px] object-cover object-center -z-50  "
          src={hero}
          alt="hero"
        />
        <h1 className="absolute top-16 font-Poppins font-bold mr-12 text-[44px] p-8 leading-[54px] md:mx-6 md:top-20  dark:text-c3 md:text-[64px] md:w-[70%] md:leading-[80px] ">
          Book With us And Enjoy your Journey
        </h1>

        <TabsBooking />
      </div>
    </div>
  );
};

export default Hero;
