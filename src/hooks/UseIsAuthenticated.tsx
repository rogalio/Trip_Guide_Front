import { useEffect, useState } from "react";
import axios from "axios";

export const UseIsAuthenticated = ({ setShowModal }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  axios.defaults.withCredentials = true;

  const checkUser = async () => {
    const res = await axios.get(
      "https://tripguideback-production.up.railway.app/isAuthenticated",
      {
        withCredentials: true,
      }
    );

    if (res.status === 200) {
      setIsAuthenticated(true);
      setShowModal(false);
    } else {
      setIsAuthenticated(false);
      setShowModal(true);
    }
  };

  return { isAuthenticated, setIsAuthenticated, checkUser };
};
