import { useCallback, useState } from "react";
import axios from "axios";

export const UseIsAuthenticated = ({ setShowModal }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  axios.defaults.withCredentials = true;

  const checkUser = async () => {
    const res = await axios.get("http://localhost:4000/isAuthenticated", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, Content-Length, X-Requested-With",
        "Access-Control-Allow-Credentials": "true",
      },
    });

    if (res.status === 200) {
      setIsAuthenticated(true);
      setShowModal(false);
    }
  };
  return { isAuthenticated, setIsAuthenticated, checkUser };
};
