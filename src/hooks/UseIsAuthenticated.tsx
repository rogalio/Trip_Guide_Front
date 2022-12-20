import { useCallback, useState } from "react";
import axios from "axios";

export const UseIsAuthenticated = ({ setShowModal }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkUser = async () => {
    const res = await axios.get("http://localhost:4000/isAuthenticated", {
      withCredentials: true,
    });

    if (res.status === 200) {
      setIsAuthenticated(true);
      setShowModal(false);
    }
  };
  return { isAuthenticated, setIsAuthenticated, checkUser };
};
