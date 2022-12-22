import { useEffect } from "react";
import HeroFlight from "../components/HeroFlight";
import DestinationCard from "../components/DestinationCard";
import TopTourCard from "../components/TopTourCard";

const Flight = () => {
  // how to ignore typescript on a component

  //  useEffect((): void => {
  //   if (window.navigator.permissions && window.navigator.permissions.query) {
  //     window.navigator.permissions.query({ name: 'cookie' }).then((result) => {
  //       if (result.state === 'granted') {
  //         // Set the cookie
  //         document.cookie = "name=value;path=/";
  //       } else {
  //         // Do not set the cookie
  //       }
  //     });
  //   } else {
  //     // Fallback for unsupported browsers
  //     // Set the cookie without requesting permission
  //     document.cookie = "name=value;path=/";
  //   }
  // }, []);

  // console.log(window.navigator.permissions.query({ name: "cookies" }));

  return (
    <div className="relative dark:bg-c1">
      <HeroFlight />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Flight;
