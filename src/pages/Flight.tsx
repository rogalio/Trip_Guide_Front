import React, { useEffect, useState } from "react";
import HeroFlight from "../components/HeroFlight";
import { useCookies } from "react-cookie";
import axios from "axios";

const Flight = () => {
  // check if user is logged in using passport-js

  axios.defaults.withCredentials = true;
  const [cookies, setCookie] = useCookies();

  const test = async () => {
    const res = await axios.get("http://localhost:4000/test", {
      withCredentials: true,
    });
    console.log(res);
  };

  const logout = async () => {
    const res = await axios.get("http://localhost:4000/logout", {
      withCredentials: true,
    });
    console.log(res);
  };

  const login = async () => {
    const res = await axios.post(
      "http://localhost:4000/login",
      {
        username: "test",
        password: "test",
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
  };

  return (
    <div className="relative">
      <HeroFlight />
      {/* <h1>Cookie: {cookies}</h1> */}
      <button onClick={test}>Test</button>
      <button onClick={logout}>Logout</button>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Flight;
