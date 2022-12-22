import React, { useState, useEffect } from "react";

const TestSafari = () => {
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

  const [isGranted, setIsGranted] = useState(true);

  useEffect((): void => {
    requestStorageAccess(setIsGranted);
  }, []);

  if (isGranted) {
    console.log("Access to storage has been granted");
    return <div>Access to storage has been granted</div>;
    // Access to storage has been granted
    // You can now use localStorage or indexedDB
  } else {
    console.log("Access to storage has not been granted yet");
    // Access to storage has not been granted yet
    // You should not use localStorage or indexedDB

    return (
      <div>
        <p>Would you like to allow this app to access your storage?</p>
        <button
          className="bg-c5"
          onClick={() => requestStorageAccess(setIsGranted)}
        >
          Yes
        </button>
        <button className="bg-c5" onClick={() => setIsGranted(false)}>
          No
        </button>
      </div>
    );
  }
};

export default TestSafari;
