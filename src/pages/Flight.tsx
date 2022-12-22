import { useEffect } from "react";
import HeroFlight from "../components/HeroFlight";
import DestinationCard from "../components/DestinationCard";
import TopTourCard from "../components/TopTourCard";

const Flight = () => {
  const requestStorageAccess = () => {
    if (typeof document.requestStorageAccess === "function") {
      document.requestStorageAccess().then((result: any) => {
        if (result) {
          console.log("Access to storage has been granted");

          // Access to storage has been granted
          // You can now use localStorage or indexedDB
        } else {
          console.log("Access to storage has been denied");
          // Access to storage has been denied
          // You should not use localStorage or indexedDB
        }
      });
    } else {
      console.log("Fallback for unsupported browsers");
      // Fallback for unsupported browsers
      // You can use localStorage or indexedDB without requesting permission
    }
  };

  useEffect((): void => {
    requestStorageAccess();
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
