import React, { useEffect, useState } from "react";

const useRequestStorageAccess = () => {
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
};

export default useRequestStorageAccess;
