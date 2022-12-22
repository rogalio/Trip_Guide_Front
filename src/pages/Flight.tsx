import { useEffect, useState } from "react";
import HeroFlight from "../components/HeroFlight";
import DestinationCard from "../components/DestinationCard";
import TopTourCard from "../components/TopTourCard";

const Flight = () => {
  const requestStorageAccess = (setIsGranted: (value: boolean) => void) => {
    if (typeof document.requestStorageAccess === "function") {
      document.requestStorageAccess().then((result: any) => {
        setIsGranted(result);
      });
    } else {
      // Fallback for unsupported browsers
      // You can use localStorage or indexedDB without requesting permission
      setIsGranted(true);
    }
  };

  const [isGranted, setIsGranted] = useState(false);

  useEffect((): void => {
    requestStorageAccess(setIsGranted);
  }, []);

  if (isGranted) {
    // Access to storage has been granted
    // You can now use localStorage or indexedDB
  } else {
    // Access to storage has not been granted yet
    // You should not use localStorage or indexedDB
    return (
      <div>
        <p>Would you like to allow this app to access your storage?</p>
        <button onClick={() => requestStorageAccess(setIsGranted)}>Yes</button>
        <button onClick={() => setIsGranted(false)}>No</button>
      </div>
    );
  }

  return (
    <div className="relative dark:bg-c1">
      <HeroFlight />
      <DestinationCard />
      <TopTourCard />
    </div>
  );
};

export default Flight;
