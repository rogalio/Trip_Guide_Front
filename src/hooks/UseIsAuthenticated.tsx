import { useState } from "react";
import axios from "axios";

export const UseIsAuthenticated = ({ setShowModal }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  axios.defaults.withCredentials = true;

  const checkUser = async () => {
    const res = await axios.get(
      "https://tripguideback-production.up.railway.app/isAuthenticated",
      {
        withCredentials: true,

        headers: {
          sameSite: "false",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://tripguideback-production.up.railway.app/isAuthenticated",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, Content-Length, X-Requested-With",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Private-Network": "true",
        },
      }
    );

    if (res.status === 200) {
      setIsAuthenticated(true);
      setShowModal(false);
    }
  };
  return { isAuthenticated, setIsAuthenticated, checkUser };
};
