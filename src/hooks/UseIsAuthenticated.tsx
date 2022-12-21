import { useState } from "react";
import axios from "axios";

export const UseIsAuthenticated = ({ setShowModal }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  axios.defaults.withCredentials = true;

  const checkUser = async () => {
    // const res = await axios.get("http://localhost:4000/isAuthenticated", {
    //   withCredentials: true,
    // });

    // if (res.status === 200) {
    //   setIsAuthenticated(true);
    //   setShowModal(false);
    // }
    const response = await fetch("http://localhost:4000/isAuthenticated", {
      method: "GET",
      credentials: "include",
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);

      setIsAuthenticated(true);
      setShowModal(false);
    }
  };
  return { isAuthenticated, setIsAuthenticated, checkUser };
};
